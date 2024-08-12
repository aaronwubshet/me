
<script>
  import Title from './Title.svelte';
  import { base } from '$app/paths';

  import "../style.css";
  let pages = [
  { url: base+"/", title: 'Wubs', bases: './', subPage: false },  
  { url: base+'/resumeCV', title: 'Curriculum Vitae', bases: './resumeCV', subPage: false },
  { url: base+'/art', title: "Art<sup>TM</sup>", bases: './art', subPage: false },
  { url: '{base}/sayhello', title: 'Contact', bases: './sayhello', subPage: false },
  { url: '/resumeCV/datavis', title: 'Who Owns Boston', base: './resumeCV', subPage: true },
  { url: '/resumeCV/DroneTracker', title: 'A Drone\'s Eye View', bases: './resumeCV', subPage: true },
  { url: '/resumeCV/SpeakerTracker', title: 'Mounted Speaker Tracking System', bases: './resumeCV', subPage: true },
  { url: '/resumeCV/6athesis', title: 'An Investigation of USRP FPGA as a platform for Quantum Sensing and Control', bases: './resumeCV', subPage: true },
  { url: '/resumeCV/astra', title: 'Astra Space Inc', bases: './resumeCV', subPage: true },
  { url: '/resumeCV/bain', title: 'Bain & Company', bases: './resumeCV', subPage: true }

];
  import { page } from '$app/stores';

  let currentBase="";
  $: {
    currentBase = "";
    pages.forEach(p => {
      if (p.subPage && $page.route.id === p.url) {
        currentBase = p.bases;
      } 
    });
  }
</script>

<nav>
  {#each pages as p}
    {#if !p.subPage}
      <a href={ p.url } class:current={$page.route.id === p.url || p.bases === currentBase }> <Title title={p.title} /> </a>
    {/if}
  {/each}
</nav>



<style>
nav {
  display: flex;
  margin-top: 3%;
  margin-bottom: 2%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--primary-color);
}

a:hover{
  text-decoration: underline;
  background-color: var(--primary-color-light);
  
}
</style>

<slot />
