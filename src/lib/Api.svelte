<script>
  import { openai } from 'openai';

  const openai_api_key = process.env.OPENAI_API_KEY;
  if (process.env.openai_api_key) {
    console.log(`VAR_NAME is set to ${process.env.openai_api_key}`);
  } else {
    console.log('VAR_NAME is not set');
  }
  
  const client = new openai.Client(openai_api_key);

  let inputText;
  let imageUrl;
  let isLoading = false;

  async function GenerateImage() {
    isLoading = true;
    const response = await client.models.createImage({
        model: 'image-alpha-001',
        prompt: inputText,
        size: '256x256',
        response_format: 'url'
    });
    imageUrl = response.data.url;
    isLoading = false;
  }
</script>

<input bind:value={inputText} type="text" placeholder="generate image">
<button on:click={GenerateImage}>Generate Image</button>

{#if isLoading}
  <div>Loading...</div>
{:else}
  <img src={imageUrl} alt="generated_image" />
{/if}