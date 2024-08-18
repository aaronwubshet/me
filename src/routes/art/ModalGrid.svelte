<script>
	export let images;
	export let showing;
	$: showing = showing;
	import RandomImage from './RandomImage.svelte'
</script>
{#if showing}
<div class="modal">
	<span class="close" on:click={()=>{showing = !showing}}>
		&times;
	</span>
<div class="modal-grid">
{#each images as img}
<RandomImage {img}/>
{/each}
</div>
</div>
{/if}

<style>
	.close {
		user-select:none;
		cursor:pointer;
		color: white;
		font-size: 3rem;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 2;
	}
	.modal {

	
		overflow-y:scroll;
		overflow-x:hidden;
		z-index: 1;
		position:fixed;
		padding:1rem;
		width:100%;
		height:100%;
  	background-color: rgba(0,0,0,0.8);}
	.modal-grid{
		display: grid;
		grid-gap:0.8rem;
		grid-template-columns: repeat(auto-fit, minmax(180px,1fr));
	}
</style>