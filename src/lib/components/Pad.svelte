<script lang="ts">
  import { Howl } from "howler";
  import { globalVolume } from "../../stores/volume";

  export let pad;

  const sound = new Howl({
    src: [pad.loc],
    volume: $globalVolume,
  });

  $: sound.volume($globalVolume / 100);
</script>

<button
  on:click={() => sound.play()}
  class="transition-all h-48 bg-gradient-to-r from-rose-madder to-yellow-orange  text-white font-black rounded-md active:shadow-xl active:translate-y-1 active:scale-95 hover:shadow-xl hover:z-10 shadow-red-500 grid place-items-center uppercase cursor-pointer"
>
  {pad.name}
</button>
