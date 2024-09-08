<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Sensor Systems for Interactive Environments</title>
</svelte:head>

<h1>Sensor Systems for Interactive Environments</h1>

<h3>The document below is my final presentation for a self-level platform proof of concept. </h3>

<div class="content-container">
    <div class="pdf-container">
        <iframe src="../images/cv/836/Final Presentation Aaron Wubshet.pdf" width="100%" height="1200px"></iframe>
    </div>

    <div class="video-container">
        <video controls poster="images/art/guitar_thumbnail.png">
            <source src="../images/cv/836/autolevel.mov" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>

<style>
    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
    }

    h1, h3 {
        text-align: center;
        color: #333;
    }

    .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px; /* Add some space between the PDF and the video */
        padding: 20px;
    }

    .pdf-container, .video-container {
        width: 100%;
        max-width: 800px; /* Set a max width for the containers */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        border-radius: 10px; /* Optional: Add rounded corners */
        overflow: hidden; /* Ensure the rounded corners are visible */
        background-color: #fff; /* Add a background color */
        padding: 10px; /* Add some padding */
    }

    .pdf-container iframe, .video-container video {
        width: 100%;
        height: 600px;
        border-radius: 10px; /* Optional: Add rounded corners to the iframe and video */
    }
</style>
    
