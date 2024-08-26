<svelte:head>
	<title>Art™</title>
</svelte:head>
<script>
	import RandomImage from './RandomImage.svelte'
	import ModalGrid from './ModalGrid.svelte'
	let images = []
	let allImages = []
	
	let showing;
	$: showAllImages = showing ? true : false;
	const promise = data();
	
	async function data() {
	const d = await fetch(`https://raw.githubusercontent.com/aaronwubshet/me/main/image_list`);
	const list = await d.json();
	console.log(list);
	allImages = [...list]
	images = [...allImages.slice(0, 25)]
		console.log(list)
	}
</script>
<div class="grid">
{#await promise}
	Loading
	{:then _}
	{#each images as img (img.url)}
		<div class="grid-item">
		<RandomImage {img}/>
	</div>
	{/each}
	<button on:click={() => {showAllImages = !showAllImages}}>
		All Images
	</button>
	<ModalGrid showing={showAllImages} images={allImages}/>
{/await}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		grid-gap: 0.8rem;
	}
	
</style>