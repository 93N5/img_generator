<script lang="ts">
    import { pb } from '../../lib/pocketbase';
    import Login from "../+page.svelte";
    
    function SignOut() {
        pb.authStore.clear();
    }
</script>
<h1>homepage</h1>

<button on:click={SignOut}>sign out</button>

<Login />