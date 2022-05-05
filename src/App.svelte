<script lang="ts">
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import audios from "./lib/audio.json";
  import Pad from "./lib/components/Pad.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="bg-red-50 flex-1">
    <div class="wrapper">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
        {#each audios as pad}
          <Pad {pad} />
        {/each}
      </div>
    </div>
  </main>
  <Footer />
</div>
