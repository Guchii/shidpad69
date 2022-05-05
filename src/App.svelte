<script lang="ts">
  import Footer from './Footer.svelte';
  import Pad from './lib/Pad.svelte';
</script>
<div class="wrapper">
  <h1 class="text-4xl text-center p-3">ShidPad 69</h1>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
    {#each [1, 3, 5, 6, 7, 8] as pad, i}
    <Pad num={i}/>
    {/each}
  </div>
</div>

<div class="wrapper"><Footer/></div>
