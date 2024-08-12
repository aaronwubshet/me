
<script>
  import Title from './Title.svelte';
  import { base } from '$app/paths';

  import "../style.css";
  let pages = [
  { url: base +"/", title: 'Wubs', subPage: false },  
  { url: base +'/resumeCV', title: 'Curriculum Vitae', subPage: false },
  { url: base +'/art', title: "Art<sup>TM</sup>", subPage: false },
  { url: base +'/sayhello', title: 'Contact', subPage: false },
  { url: base +'/resumeCV/datavis', title: 'Who Owns Boston', subPage: true },
  { url: base +'/resumeCV/DroneTracker', title: 'A Drone\'s Eye View', subPage: true },
  { url: base +'/resumeCV/SpeakerTracker', title: 'Mounted Speaker Tracking System', subPage: true },
  { url: base +'/resumeCV/6athesis', title: 'An Investigation of USRP FPGA as a platform for Quantum Sensing and Control', subPage: true },
  { url: base +'/resumeCV/astra', title: 'Astra Space Inc', subPage: true },
  { url: base +'/resumeCV/bain', title: 'Bain & Company', subPage: true }

];
  import { page } from '$app/stores';

  let s = "";
  $: {
    s= base+$page.route.id;
  }

</script>

<nav>
  {#each pages as p}
    {#if !p.subPage}
      <a href={ p.url } class:current={base + $page.route.id === p.url || (s.includes(p.url) && p.title!="Wubs")}> <Title title={p.title} /> </a>
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
