const express = require('express');
const cors = require('cors');
const axios = require('axios');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: [
    'https://insoblok-webapp.web.app',
    'https://apps.insoblokai.io',
    'https://insoblokai.io',
    'http://localhost:5173'
  ],
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static('uploads'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

// VPS API URLs - Update these with your actual VPS endpoints
const IMAGE_AVATAR_API = process.env.IMAGE_AVATAR_API || 'http://108.61.119.241:8000/generate';
const VIDEO_AVATAR_API = process.env.VIDEO_AVATAR_API || 'http://149.28.120.47:8000/generate';

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Avatar Generation Server is running!',
    endpoints: {
      health: 'GET /health',
      image_avatar: 'POST /api/generate-image-avatar',
      video_avatar: 'POST /api/generate-video-avatar',
      upload_image: 'POST /api/upload-image',
      upload_video: 'POST /api/upload-video'
    },
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint for frontend
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    server: 'Avatar Generation Server',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// File Upload Endpoints for Frontend
app.post('/api/upload-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No image file uploaded'
      });
    }

    // Read file and convert to base64
    const imageBuffer = fs.readFileSync(req.file.path);
    const imageBase64 = imageBuffer.toString('base64');

    res.json({
      success: true,
      message: 'Image uploaded and encoded successfully',
      data: {
        filename: req.file.filename,
        path: `/uploads/${req.file.filename}`,
        base64: imageBase64,
        size: req.file.size
      }
    });

  } catch (error) {
    console.error('❌ Image Upload Error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.post('/api/upload-video', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No video file uploaded'
      });
    }

    // Read file and convert to base64
    const videoBuffer = fs.readFileSync(req.file.path);
    const videoBase64 = videoBuffer.toString('base64');

    res.json({
      success: true,
      message: 'Video uploaded and encoded successfully',
      data: {
        filename: req.file.filename,
        path: `/uploads/${req.file.filename}`,
        base64: videoBase64,
        size: req.file.size
      }
    });

  } catch (error) {
    console.error('❌ Video Upload Error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Image Avatar Generation Endpoint
app.post('/api/generate-image-avatar', async (req, res) => {
  try {
    console.log('📸 Image Avatar Generation Request:', req.body);
    
    const response = await axios.post(IMAGE_AVATAR_API, req.body, {
      timeout: 300000, // 5 minutes timeout for generation
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log('✅ Image Avatar Generation Successful');

    // Save the generated image
    if (response.data.output) {
      const outputFilename = `image-avatar-${Date.now()}.png`;
      const outputPath = path.join('uploads', outputFilename);
      
      const buffer = Buffer.from(response.data.output, 'base64');
      fs.writeFileSync(outputPath, buffer);

      // Add output URL to response
      response.data.output_url = `/uploads/${outputFilename}`;
    }

    res.json({
      success: true,
      data: response.data,
      message: 'Image avatar generated successfully'
    });

  } catch (error) {
    console.error('❌ Image Avatar Generation Error:', error.message);
    
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.message || error.message,
      message: 'Failed to generate image avatar'
    });
  }
});

// Video Avatar Generation Endpoint
app.post('/api/generate-video-avatar', async (req, res) => {
  try {
    console.log('🎥 Video Avatar Generation Request:', req.body);
    
    const response = await axios.post(VIDEO_AVATAR_API, req.body, {
      timeout: 300000, // 5 minutes timeout for video
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log('✅ Video Avatar Generation Successful');

    // Save the generated video
    if (response.data.output) {
      const outputFilename = `video-avatar-${Date.now()}.mp4`;
      const outputPath = path.join('uploads', outputFilename);
      
      const buffer = Buffer.from(response.data.output, 'base64');
      fs.writeFileSync(outputPath, buffer);

      // Add output URL to response
      response.data.output_url = `/uploads/${outputFilename}`;
    }

    res.json({
      success: true,
      data: response.data,
      message: 'Video avatar generated successfully'
    });

  } catch (error) {
    console.error('❌ Video Avatar Generation Error:', error.message);
    
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.message || error.message,
      message: 'Failed to generate video avatar'
    });
  }
});

// Test connection to VPS endpoints
app.get('/api/test-connections', async (req, res) => {
  try {
    const results = {
      image_vps: { accessible: false, error: null },
      video_vps: { accessible: false, error: null }
    };

    // Test Image VPS (try health endpoint or simple request)
    try {
      await axios.get(IMAGE_AVATAR_API.replace('/generate', '/health'), { 
        timeout: 10000 
      });
      results.image_vps.accessible = true;
    } catch (error) {
      // If health endpoint fails, try the actual endpoint with empty data
      try {
        await axios.post(IMAGE_AVATAR_API, { test: true }, { 
          timeout: 10000 
        });
        results.image_vps.accessible = true;
      } catch (error2) {
        results.image_vps.error = error2.message;
      }
    }

    // Test Video VPS
    try {
      await axios.get(VIDEO_AVATAR_API.replace('/generate', '/health'), { 
        timeout: 10000 
      });
      results.video_vps.accessible = true;
    } catch (error) {
      try {
        await axios.post(VIDEO_AVATAR_API, { test: true }, { 
          timeout: 10000 
        });
        results.video_vps.accessible = true;
      } catch (error2) {
        results.video_vps.error = error2.message;
      }
    }

    res.json({
      success: true,
      message: 'Connection test completed',
      results: results
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Handle undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('🚨 Server Error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong!'
  });
});

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Avatar Server running on http://localhost:${PORT}`);
  console.log(`📸 Image Avatar API: ${IMAGE_AVATAR_API}`);
  console.log(`🎥 Video Avatar API: ${VIDEO_AVATAR_API}`);
  console.log(`📁 Upload directory: ${uploadsDir}`);
  console.log(`⏰ Server started at: ${new Date().toISOString()}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server gracefully...');
  process.exit(0);
});