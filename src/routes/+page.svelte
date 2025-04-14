
<script>
    import { onMount } from "svelte";
    import About from "../components/about.svelte"
    import Timeline from "../components/timeline.svelte";
    import Skills from "../components/skills.svelte"
    import Parallax from "../components/parallax.svelte";
    import Guitar from "../components/Guitar.svelte";
    // import * as THREE from 'three'
    // import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
    // import { ConvexObjectBreaker, OBJLoader } from "three/examples/jsm/Addons.js";
    // import { materialSpecularStrength } from "three/tsl";
    // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

    let loaded = false

    export let data;
    console.log(data)

    // let scene, camera, renderer, objModel, controls

    onMount(() => {
        loaded = true
    })

    let light = true

    function mode_switch() {
        document.body.classList.toggle('dark-mode', light)
        light = !light

    }

    const title = "Ciaran Otter"
    let out_title = ""
    let index = 0
    let show_cursor = false

    const typer = setInterval(addChar, 100)

    function addChar() {
        out_title = out_title + title[index]

        if (index >= title.length-1) {
            setInterval(() => {
                show_cursor = !show_cursor
            
            }, 500);
            clearInterval(typer)
        }

        index++
    }

  
</script>

<!-- <SidePanel sections={[
       {href: "#early-life", name: 'Early life'}
    ]
} -->



<div class="title-container">
<!-- <img src="/20200720_104237-01-removebg.png" class="cover-image {loaded ? "loaded" : ""}" /> -->
<div class="main-container box center">
    <!-- <div class="main-title"> -->
    <h1 class="main-title">{out_title}</h1>
    <!-- </div> -->
    <h2 class="sub-title">Software developer</h2>
    <!-- <h2 class="sub-title">Building cool things, breaking fewer things, learning everything.</h2> -->
</div>
</div>

<!-- <Guitar /> -->

<div class="body">

<!-- <div on:click={mode_switch} >{light ? "Light mode" : "Dark mode"}</div> -->

 <!--  
<div class="section box" >
    <div class="header"> Where the love began</div>
    When I was a young boy I used to go to the coast of Durban with my extended family. I love playing in the waves, digging holes for unsuspecting passers by, fishing for small fish in the rock pools and telling strangers my plans to save the world with my plastic bob the builder tool set. The thing I remember most vividly however was my dad's old lenovo think pad, that's right the one with the little red nipple mouse in the middle of the keyboard. My dad had installed a copy of Ubuntu on it and I would spend hours watching (totally legit) downloaded episodes of the Looney tunes. That old thinkpad was my introduction into the world of computers and computer science and too this day I can't help but get a little excited when I see a Lenovo with an open source OS on it.
    
</div>

<div class="section box float-right">
<div class="header">The raspberry pi</div>
    Later in life when my fingers where large enough to dance across a keyboard my dad bought a raspberry PI 1. Now that thing was cool. it was this tiny little computer no large than a playing card. We went through the process of boot raspian onto an SD card booting into the PI for the first time. Of course at the time i was expecting to see a User interface with icons for all the apps and a search bar with easy access to the whole machine. What I wasn't expecting was a black screen with a tiny little green strip of text at the top. The terminal of a headless operating system. This was the first time I was exposed to bash, the command line and the wonderful world of Debian. My dad installed python and gave me the freedom to touch files into existence and out of existence. This was true power. not long after I had a bread board loaded with leds, servo motors, pressure sensors and buttons whirring away at incredibly important trivial tasks. I still have that same raspberry PI to this day. I carry it around with me everywhere in my back pack in case I have an emergency needed for a local server.

</div>
<div class="section box">
    <div class="header">HighSchool</div>
    I went on to King Edward VII School for high school. A model C school, managed by the government with enough donations from alumni to pretend to be private. I never really paid attention at school, did my homework or study for my exams but I always managed to find myself somewhere at the top of the grade when results came out. Eventually when I was 16 I got to pick my own subjects and I obviously picked the best ones: 
    <li>History</li> 
    <li>Physics</li>
    <li>IT</li>

IT was my favourite subject in school. Here I was expose to Delphi and the cool environment of a computer lab and server room, heaven on earth. I would normally finish my work before alot of my class mates but was happy to help them bug fix their own work. 
I love making programs and teach the computer how to do interesting things. I left the school with easily the highest practical coding mark for the subject

</div> -->




<About id="about" />
<!-- <div class="spacer"></div> -->
<!-- <Timeline />

<Skills /> -->

</div>



<style>

@media only screen and (max-width: 650px) {

}

    .spacer {
        padding: 20vh;
    }

    .main-title{
        font-family: "Zilla Slab Highlight", serif;
        font-weight: 400;
        font-style: normal;
        /* font-weight: 100; */
        font-size: 5rem;
        /* color: var(--white); */
        color: var(--highlight);
        /* line-height: 0.5; */
        display: inline-block;
        /* line-height: 0.5em; */
        /* border: 1px solid red; */
        margin: 0px !important;
        padding: 0px !important

    }
    .sub-title {
        font-weight: 700;
        font-size: 1rem;
        /* border: 1px solid red; */
        /* line-height: 0; */
        /* padding: 0 1em; */
    }

    .section {
        border: 1px solid lightgray;
        border-radius: 10px;
        padding: 20px 50px;
        margin: 50px;
        box-shadow: 5px 10px 10px lightgray;
        transition: 0.2s ease-out box-shadow;
        background-color: var(--white);
    }

    .section:hover {
        box-shadow: 5px 15px 5px lightgray;
    }

    .header {
        font-weight: 700;
        font-size: 1.2rem;  
        padding: 10px 0px;  
    }

    .cover-image {
        height: 120vh;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-100%, 99%);
        transition: 1.2s ease-in-out transform;
        z-index: -1;
    }

    .loaded {
        transform: translate(0, 0);
    }

    .title-container {
        height: 100%;
        z-index: 500;
        /* width: 100vw;
         border: 1px solid red; 
         box-sizing: border-box; */
         overflow: hidden;

    }

    
    .main-container {
        background-color: var(--white);
        margin: auto;
        margin-top: 50vh;
        padding-top: 50px;
        transform: translateY(-50%);
        border: 1px solid var(--border) !important;
        opacity: 95%;
        
        /* transform: translateY(-50%); */
    }

    .body {
        background: var(--white);
        /* margin: none; */
        /* padding: 50px; */
        z-index: 1000;
    }
</style>