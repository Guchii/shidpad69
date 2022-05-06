<script lang="ts">
  import { Howl } from "howler";
  import { currentlyPlayingAudio } from "../../stores/audio";
  import type { TPad } from "../audio-sources";

  export let pad: TPad;

  const sound = new Howl({
    src: [pad.loc],
    volume: 1,
  });
</script>

<button
  on:click={() => {
    if (pad.oneShot) sound.play();
    else if (!$currentlyPlayingAudio.includes(pad.id)) {
      $currentlyPlayingAudio = [...$currentlyPlayingAudio, pad.id];
      sound.play();
      sound.on("end", () => {
        $currentlyPlayingAudio = $currentlyPlayingAudio.filter(
          (i) => i !== pad.id
        );
      });
    }
  }}
  class="transition-all h-48 bg-gradient-to-r from-rose-madder to-yellow-orange  text-white font-black rounded-md active:shadow-xl active:translate-y-1 active:scale-95 hover:shadow-xl hover:z-10 shadow-red-500 grid place-items-center uppercase cursor-pointer"
>
  {pad.name}
</button>
