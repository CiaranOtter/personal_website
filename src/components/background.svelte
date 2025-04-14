<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";
    import { lightPosition } from "three/src/nodes/TSL.js";

    function updateCanvas(canvas) {
        canvas.style.width = window.innerWidth;
        canvas.style.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    let fps = 60;
    let mousex;
    let mousey;

    let width = 0;
    let height = 0;

    const updateMouse = (event) => {
        mousex = event.clientX;
        mousey = event.clientY;
    };

    export let dark = true;
    let dark_colours = ["#F45050", "#9195F6", "#ffffff"];
    let light_colours = ["#CDC1FF", "#ffffff"];

    const gradient = d3.scaleLinear(dark ? dark_colours : light_colours);

    let noise;
    let noiseMachine;
    let canvas;
    let context;

    let z = Math.random() * 222;
    export let spd = 5;
    export let scale = 0.0025;

    onMount(async () => {
        noiseMachine = await import("noisejs");

        noise = new noiseMachine.Noise(Math.random());
        context = canvas.getContext("2d");
        // canvas.width = window.innerWidth
        // canvas.width = window.innerHeight
        updateCanvas(canvas);
        render();
    });

    // $: if (height) {
    //     canvas.height = height
    // }

    // $: if (width) {
    //     canvas.width = width
    // }

    const getValue = (x, y, z, scale) => {
        return noise.perlin3(x * scale, y * scale, z * scale) * Math.PI;
    };

    const render = () => {
        setTimeout(() => requestAnimationFrame(render), 1000 / fps);

        context.clearRect(0, 0, canvas.width, canvas.height);
        let pos = 15;

        for (let x = 0; x < canvas.width + 2; x += pos) {
            for (let y = 0; y < canvas.height; y += pos) {
                let value = getValue(x, y, z, scale);

                let prox = Math.sqrt(
                    Math.pow(mousex - x, 2) + Math.pow(mousey - y, 2),
                );

                if (prox <= 200) {
                    value = value * (prox / 200);
                }

                context.save();
                context.beginPath();
                context.translate(x, y);
                let val = Math.abs(2* value);
                context.arc(0, 0, val, 0, Math.PI * 2, true);
                value = Math.min(Math.abs(value), 1);
                context.fillStyle = gradient(value);
                context.fill();
                context.restore();
            }
        }

        z += spd;
    };
</script>

<svelte:body on:mousemove={updateMouse} />
<svelte:window
    bind:innerWidth={width}
    bind:innerHeight={height}
    on:resize={updateCanvas}
/>

<canvas bind:this={canvas} id="canvas"></canvas>

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #canvas {
        background: var(--white);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>
