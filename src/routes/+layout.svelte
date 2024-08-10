
<script>
  import Title from './Title.svelte';

  import "../style.css";
  let pages = [
  {url: "./", title: "Wubs"},
  {url: "./resumeCV", title: "Curriculum Vitae"},
  {url: "./art", title: "Art<sup>TM</sup>"},
  {url: "./sayhello", title: "Say Hello"}
  ];
  import { page } from '$app/stores';
  
 
</script>

<nav>
	{#each pages as p }
        <a href={ p.url } class:current={ "." + $page.route.id === p.url }> <Title title={p.title} /> </a>
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
