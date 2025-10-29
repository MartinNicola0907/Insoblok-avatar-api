# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createDefaultAvatars, listDefaultAvatars, createAvatar, getUserAvatars } from '@dataconnect/generated';


// Operation CreateDefaultAvatars: 
const { data } = await CreateDefaultAvatars(dataConnect);

// Operation ListDefaultAvatars: 
const { data } = await ListDefaultAvatars(dataConnect);

// Operation CreateAvatar:  For variables, look at type CreateAvatarVars in ../index.d.ts
const { data } = await CreateAvatar(dataConnect, createAvatarVars);

// Operation GetUserAvatars: 
const { data } = await GetUserAvatars(dataConnect);


```