<script>
    import Background from "../../components/background.svelte";
    import Slider from '@bulatdashiev/svelte-slider';

    let spd = [0, 1000]
    let scale = [0, 1000]

    $: scl = scale[0]/1000
</script>
<form>
    <div>Speed: {spd[0]}</div>
<Slider bind:value={spd} />
<div>Scale: {scale[0]/1000}</div>

<Slider bind:value={scale} />


</form>
<Background bind:spd={spd[0]} bind:scale={scl} />

<style>
    form {
        border: 1px solid red;
        z-index: 10;
        margin-top: 10%;
        margin-left: 10px;
        /* width: fit-content; */
    }
</style>

