<script>
  import { currentUser, pb } from '../lib/pocketbase';
  import { Configuration, OpenAIApi } from "openai";
  import { openai_api_key } from '../lib/cred';
  
  let username;
  let password;

  console.log(currentUser);
  
  // start login function
  async function LoginUser() {
    await pb.collection('img_gen_users').authWithPassword(username, password);
  }
  // end login function

  // start signout function
  async function SignoutUser() {
    try {
        pb.authStore.clear();
        window.location = "/";
    } catch (error) {
        console.error(error);
    }
  }
  // end signout function

  // start image generation function
  let inputUser = '';
  let imageUrl = '';

  const API_KEY = openai_api_key;
  
  async function HandleSubmit() {
    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: inputUser,
      n: 1,
      size: '256x256'
    });
    imageUrl = response.data.data[0].url;
    console.log(imageUrl);
  }
  // end image generation function

  // start OPENAI_API_KEY env var check
  try {
    if (API_KEY) {
      console.log('API key found');
    } else {
      throw new Error('API key not found');
    }
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
  // end OPENAI_API_KEY env var check
</script>
<!-- start loggedinuser -->
{#if $currentUser}
<p>signed in as {$currentUser.username}</p>

<button on:click={SignoutUser}>sign out</button>
<h1>image generator</h1>

<form on:submit|preventDefault={HandleSubmit}>
  <label for="inputUser">inputUser:</label>
  <input type="text" id="inputUser" bind:value={inputUser} />
  <button type="submit">Generate Image</button>
</form>
<img src={imageUrl} alt="Generated_image" />
<!-- end loggedinuser -->
{:else}
<!-- start login -->
<h1>login</h1>
<form on:submit|preventDefault>
  <input 
  bind:value={username} 
  type="text" 
  placeholder="username">
  
  <input 
  bind:value={password} 
  type="password" 
  placeholder="password">

  <button on:click={LoginUser}>login</button>
</form>
{/if}
<!-- end login -->