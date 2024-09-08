<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>MEMSI: TrueLink</title>
</svelte:head>

<h1>MEMSI: TrueLink </h1>

<h3>This the final pitch presentation for demo day at MEMSI in Hong Kong in 2017. </h3>

<div class="pdf-container">
    <iframe src="../images/cv/trulink/trulink.pdf" width="100%" height="1200px"></iframe>
</div>
<style>
    .pdf-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .pdf-container iframe {
        border: none;
        width: 100%;
        height: 1200px; /* Adjust the height as needed */
    }
</style>

    
