<script>
    export let sections = [{
      name: "About",
      link: '/#about'
    }]
    export let home

    import { light_mode } from '../stores/theme'

    function toggleTheme() {
        $light_mode = !$light_mode
            document.body.classList.toggle('dark-mode', $light_mode)
    }

    import * as icons from "svelte-social-media-icons";
</script>

<div class="menu-container">
    <div class="socials">
        <!-- {#each Object.entries(icons) as [icon, component]}
            <svelte:component this={component} />
        {/each} -->
        <button 
  class="theme-toggle" 
  on:click={toggleTheme} 
  aria-label="Toggle theme"
>
        {#if $light_mode}
    <!-- Sun icon -->
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="var(--highlight)" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  {:else}
    <!-- Moon icon -->
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="var(--highlight)" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  {/if}
  </button>
  <!-- <div class="mode">{$light_mode ? "light mode" : "dark mode"}</div> -->
    </div> 
        <div class="home">
            <a href="{home.link}">{home.name}</a>
        </div>
    <div class="menu">
        {#each sections as sec}
        <a href="{sec.link}">{sec.name}</a>
        {/each}
    </div>
    
</div>

<style>
     .theme-toggle {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--border-color);
    background: var(--bg-toggle);
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.2s ease;
  }

    .menu-container {
        top: 0;
        position: fixed;
        /* border: 1px solid red; */
        width: 100vw;
        left: 0;
        background: var(--white);
        display: flex;
        padding: 1em 0px;
        box-shadow: 10px 0px 10px var(--black);
        flex-direction: row;
        /* align-items: right;
        justify-content: right; */
        align-content:space-between;
        flex-wrap: wrap;
        z-index: 1000;
}

.menu-container div {
    flex: 2;
    /* border:1px solid red; */
    /* border: 1px solid red; */
    text-orientation: mixed;
}

.socials {
    flex: 1;
    padding: 0px 10px;
    align-items: left;
    justify-content: left;
    display: flex; 
    flex-direction: row;
    color: var(--black);
    padding: none !important;
}

.socials svg {
    width: 1.5rem;
    height: 1.5rem;
}

.menu {
    align-items: right;
    justify-content: right;
    display: flex; 
    flex-direction: row;
}

.home {
    text-align: center;
}

    .menu-container a {
        text-decoration: none;
        color: var(--black);
        font-weight: 500;
        font-size: 1.5rem;
        /* flex: 1; */
        padding: 0px 20px;    
        }
</style>