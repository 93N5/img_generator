{#if $currentUser}
<p>signed in as {$currentUser}</p>
<script>
  window.location = "/img-gen/src/routes/app/+page.svelte";
  </script>
{:else}
  <form on:submit|preventDefault{handleSubmit}>
    <input 
    bind:value={username} 
    type="text" 
    placeholder="username">
    
    <input 
    bind:value={password} 
    type="password" 
    placeholder="password">

    <button on:click={Login}>login</button>\
  </form>
{/if}
<script lang="ts">
  import { currentUser, pb } from '../lib/pocketbase';
  
  let username: string;
  let password: string;

  async function Login() {
    await pb.collection('img_gen_users').authWithPassword(username, password);
  }

  async function handleSumbit() {

  }
</script>