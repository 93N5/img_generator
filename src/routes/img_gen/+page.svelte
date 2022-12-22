<script>
  import SignoutUser from "../../lib/Signout.svelte";
  // import GenerateImage from '../../lib/Api.svelte';  
  import { currentUser } from '../../lib/pocketbase';

</script>
{#if $currentUser}
<SignoutUser />
<h1>image generator</h1>
<!-- <GenerateImage /> -->
{:else}
  <script>
  window.location = "/";
  </script>
{/if}
