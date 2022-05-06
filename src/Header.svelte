<script lang="ts">
  import { globalVolume } from "./stores/volume";
</script>

<div class="text-white">
  <div class="wrapper">
    <h1 class="text-4xl text-center p-3">ShidPad 69</h1>
    <input
      type="range"
      min="0"
      max="100"
      name="volume"
      id="volume"
      bind:value={$globalVolume}
    />
    {$globalVolume}
  </div>
</div>
