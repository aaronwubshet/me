<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Mounted Speaker Tracking System</title>
</svelte:head>
                       
<h2>Rotating Speaker Tracking System</h2>

<div class="content-container">
    <div class="pdf-container">
        <iframe src="../images/cv/speakertracker/Lab Book.pdf" width="100%" height="600px"></iframe>
    </div>
    <div class="image-container">
        <img src="../images/cv/speakertracker/SpeakerFinal.jpg" alt="Speaker Final" />
    </div>
</div>

<style>
    .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px; /* Add some space between the PDF and the image */
        padding: 20px;
    }

    .pdf-container {
        width: 100%;
        max-width: 800px; /* Set a max width for the PDF container */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        border-radius: 10px; /* Optional: Add rounded corners */
        overflow: hidden; /* Ensure the rounded corners are visible */
    }

    .image-container {
        width: 100%;
        max-width: 800px; /* Set a max width for the image container */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        border-radius: 10px; /* Optional: Add rounded corners */
        overflow: hidden; /* Ensure the rounded corners are visible */
    }

    .image-container img {
        width: 100%;
        height: auto;
        display: block;
    }
</style>