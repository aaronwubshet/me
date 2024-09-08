<script>
    // based on suggestions from:
    // Inclusive Components by Heydon Pickering https://inclusive-components.design/collapsible-sections/
    export let headerText;
    export let category;
    let expanded = false
    import { slide } from 'svelte/transition';

</script>

<div class="collapsible" >
    <h3>
        <button 
          aria-expanded={expanded} 
          on:click={() => expanded = !expanded}
          style="text-align: {category === 'skills' ? 'left' : 'space-between'};"
          >
          {headerText}
          {#if category === "education"}
            <img src="images/cv/king.jpg" alt="King Wubs" style = "width: 30px; height: 30px"/>
            <img src="images/cv/ChampionshipTrohpy.png" alt="Chef Wubs" style = "width: 30px; height: 30px"/>
            <img src="images/cv/king.jpg" alt="King Wubs" style = "width: 30px; height: 30px"/>
            <img src="images/cv/ChampionshipTrohpy.png" alt="Chef Wubs" style = "width: 30px; height: 30px"/>
            <img src="images/cv/king.jpg" alt="King Wubs" style = "width: 30px; height: 30px"/>
            <img src="images/cv/ChampionshipTrohpy.png" alt="Chef Wubs" style = "width: 30px; height: 30px"/>
            <img src="images/cv/king.jpg" alt="King Wubs" style = "width: 30px; height: 30px"/>
            <img src="images/cv/ChampionshipTrohpy.png" alt="Chef Wubs" style = "width: 30px; height: 30px"/>
          {/if}
          <svg viewBox="0 00 20 20" fill="none" >
            <path class="vert" d="M10 1V19" stroke="black" stroke-width="2"/>
            <path d="M1 10L19 10" stroke="black" stroke-width="2"/>
          </svg>
        </button>
    </h3>
    <div transition:slide={{ delay: 1, duration: 1 }} class="content" style="overflow: hidden;">
      {#if expanded}
          <slot></slot>
      {/if}
    </div>
</div>

<style>
    h3 button {
    color: black; /* change this to your desired color */
    font-size: 1em; /* change this to your desired font size */
    font-family: 'Reddit Mono';
    /* add more styles as needed */
    }
	
	h3 {
		margin: 0;
	}
	
  button {
    background-color: var(--primary-color-light);
    color: black;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: none;
    margin: 0;
    padding: 1em 0.5em;
    cursor: pointer;
  }

  button[aria-expanded="true"] {
    border-bottom: 1px dotted var(--primary-color-light);
  }

  button[aria-expanded="true"] .vert {
      display: none;
  }

  button:focus svg{
      outline: 2px solid;
  }

  button [aria-expanded="true"] rect {
      fill: var(--primary-color-light);
  }
  .content {
    overflow: hidden; 
  }
  svg {
      height: 50px;
      width: 20px;
  }
</style>