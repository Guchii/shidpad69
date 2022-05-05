<script lang="ts">
import {Howl, Howler} from 'howler';
const sound = new Howl({
    src: [
        "bruh.mp3"
    ]
})
export let num;
</script>

<div on:click={() => sound.play()} class="duration-200 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md active:shadow-xl hover:shadow-xl hover:z-10 shadow-red-500 grid place-items-center uppercase cursor-pointer">
    Pad {num+1}
</div>