<script lang="ts">
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Pad from "./lib/Pad.svelte";

  const info = [
    {
      name: "Bruh",
      loc: "bruh.mp3",
    },
    {
      name: "Vine Boom",
      loc: "vine-boom.mp3",
    },
    {
      name: "What da dog doin",
      loc: "what-da-dog-doing.mp3",
    },
    {
      name: "Siren",
      loc: "siren.mp3",
    },
    {
      name: "Air Horn",
      loc: "air-horn.mp3",
    },
    {
      name: "Fornide",
      loc: "fornide.mp3",
    },
    {
      name: "Oh My God",
      loc: "oh-my-god.mp3",
    },
  ];
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="bg-red-50 flex-1">
    <div class="wrapper">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
        {#each info as pad, i}
          <Pad {pad} />
        {/each}
      </div>
    </div>
  </main>
  <Footer />
</div>
