<script>
  import { currentUser, pb } from '../lib/pocketbase';
  
  let username;
  let password;

  async function LoginUser() {
    await pb.collection('img_gen_users').authWithPassword(username, password);
  }
</script>
{#if $currentUser}
<p>signed in as {$currentUser.username}</p>
<script>
 window.location = "/img_gen";
</script>
{:else}
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