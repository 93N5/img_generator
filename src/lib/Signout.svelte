<script>
  import { currentUser, pb } from './pocketbase';

  console.log(currentUser);

  async function SignoutUser() {
    try {
        pb.authStore.clear();
        window.location = "/";
    } catch (error) {
        console.error(error);
    }
  }

</script>

<button on:click={SignoutUser}>sign out</button>