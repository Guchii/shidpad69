<script lang="ts">
  import { Howl } from "howler";
  import { globalVolume } from "../stores/volume";

  export let pad;

  const sound = new Howl({
    src: [pad.loc],
    volume: $globalVolume,
  });

  $: sound.volume($globalVolume / 100);
</script>

<div
  on:click={() => sound.play()}
  class="duration-200 h-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black rounded-md active:shadow-xl hover:shadow-xl hover:z-10 shadow-red-500 grid place-items-center uppercase cursor-pointer"
>
  {pad.name}
</div>
