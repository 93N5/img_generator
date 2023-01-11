<script>
  import { currentUser, pb } from '../lib/pocketbase';
  import { open_api_key } from '../lib/cred';
  import { Configuration, OpenAIApi } from 'openai';

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
  
  // start img_gen
  let image_url = null;
  let input = "";

  const configuration = new Configuration({
		apiKey: `Bearer ${open_api_key}`
	});
  const openai = new OpenAIApi(configuration);
  const generate = async (input) => {
    image = await openai.createImage({
      prompt: input,
      n: 1,
      size: "256x256",
    });
    image_url = response.data.data[0].url;
  };
  // end img_gen
</script>
<!-- start loggedinuser -->
{#if $currentUser}
<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <div class="w-full justify-center bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center dark:text-white">signed in as {$currentUser.username}</p>
    <button 
    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    on:click={SignoutUser}>
    sign out</button>
  </div>

  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">image generator</h1>
  <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <form class=" space-y-4 md:space-y-6" on:submit|preventDefault={generate}>
      <label 
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for="inputUser">
      inputUser:</label>
      <input 
      bind:value={input}
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      type="text" 
      id="inputUser" />
      <button 
      class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      type="submit">
      Generate Image</button>
    </form>
  </div>
  <img id="gen_img" src="{image_url}" alt="" />
</div>
<!-- end loggedinuser -->
{:else}
<!-- start login -->
<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">login</h1>
  <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-4 md:space-y-6" on:submit|preventDefault>
      <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="username">
        username
        </label>
        <input 
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        bind:value={username} 
        type="text" 
        placeholder="username">
      </div>
      
      <div>
        <label 
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="password">
        password
        </label>
        <input 
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        bind:value={password} 
        type="password" 
        placeholder="password">
      </div>
    
      <button 
      class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      on:click={LoginUser}>
        login</button>
    </form>
  </div>
</div>
{/if}
<!-- end login -->