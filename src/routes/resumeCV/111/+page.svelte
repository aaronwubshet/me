<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>FPGA Digital Systems Laboratory</title>
</svelte:head>

<h1>FPGA Digital Systems Laboratory</h1>

<h3>The documents below are the final presentation and report summarizing a real time audio spectral analysis driven visual effects generator built on an FPGA. </h3>

<div style="display: flex;">
	<div style="flex: 1;">
        <div class="pdf-container">
            <iframe src="../images/cv/jaw/JAW_PRES.pdf" width="100%" height="1200px"></iframe>
        </div>
    </div>
    <div style="flex: 1;">
        <div class="pdf-container">
            <iframe src="../images/cv/jaw/Final Project Report.pdf" width="100%" height="1200px"></iframe>
        </div>
    </div>
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

    
