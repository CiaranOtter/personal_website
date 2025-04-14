<script>

    import Parallax from "./parallax.svelte";

</script>

<div id="about" class="outer-container">
    <Parallax />

    <div class="container">
    <img width="50%" height="50%" src="/20210930_220329.jpg"/>

    <div class="content">
        <h1 class="heading">A little about me</h1>
        <p>Hey there! 👋</p>

        <p>I'm Ciaran Otter, a curious coder, problem-solver, and all-around tech enthusiast. Whether it's building scalable backend systems, experimenting with quantum circuits, or tinkering with game development, I love exploring the intersection of creativity and technology.</p>

        <p>When I'm not knee-deep in code, you’ll probably find me debugging my own life decisions over a cup of coffee, brainstorming the next big project, or lost in a strategy game (because who doesn’t love a good challenge?).</p>

        <p>This portfolio is a little glimpse into my world—projects I’ve built, things I’ve broken (and fixed!), and ideas I’m excited about. So, take a look around, and if you want to chat about tech, gaming, or just share cool memes, hit me up!</p>
        
    
        </div>

</div>
</div>

<style>


@media  screen and (max-width: 650px) {
    .container {
        display: block !important;
    }
    img {
        /* width: 100%; */
    }
}
    img {
        border-radius: 100%;
        width: 30vw;
        height: 30vw;
        /* height: 200px; */
        flex: 1;
        /* padding */
        border: 1px solid var(--border);
        z-index: 5;
        margin-right: 20px;
        /* aspect-ratio: 1/1 auto; */
        /* width: 50%;
        height: 50%; */
    }

    .container {
        display: flex;
        position: relative;
        z-index: 5;
        padding: 50px;
        height: 100%;
    }

    .outer-container {
        position: relative;
        height: 100vh;
    }

    .content {
        flex: 2;
        padding: 10px;
        z-index: 5;
    }

    .heading {
     color: var(--tertiary)   
    }
</style>