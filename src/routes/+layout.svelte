
<script>
  import Title from './Title.svelte';

  import "../style.css";
  let pages = [
  { url: './', title: 'Wubs', base: '/', subPage: false },  
  { url: './resumeCV', title: 'Curriculum Vitae', base: '/resumeCV', subPage: false },
  { url: './art', title: "Art<sup>TM</sup>", base: '/art', subPage: false },
  { url: './sayhello', title: 'Contact', base: '/sayhello', subPage: false },
  { url: './resumeCV/datavis', title: 'Who Owns Boston', base: '/resumeCV', subPage: true },
  { url: './resumeCV/DroneTracker', title: 'A Drone\'s Eye View', base: '/resumeCV', subPage: true },
  { url: './resumeCV/SpeakerTracker', title: 'Mounted Speaker Tracking System', base: '/resumeCV', subPage: true },
  { url: './resumeCV/6athesis', title: 'An Investigation of USRP FPGA as a platform for Quantum Sensing and Control', base: '/resumeCV', subPage: true },
  { url: './resumeCV/astra', title: 'Astra Space Inc', base: '/resumeCV', subPage: true },
  { url: './resumeCV/bain', title: 'Bain & Company', base: '/resumeCV', subPage: true }

];
  import { page } from '$app/stores';

  let currentBase="";
  $: {
    currentBase = "";
    pages.forEach(p => {
      if (p.subPage && $page.route.id === p.url) {
        currentBase = p.base;
      } 
    });
  }
</script>

<nav>
  {#each pages as p}
    {#if !p.subPage}
      <a href={ p.url } class:current={ $page.route.id === p.base || p.base === currentBase }> <Title title={p.title} /> </a>
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
