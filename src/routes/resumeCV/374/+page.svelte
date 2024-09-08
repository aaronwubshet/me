<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Analysis and Design of Digital Integrated Circuits</title>
</svelte:head>

<h1>Analysis and Design of Digital Integrated Circuits</h1>

<p>The final project for this course on digital analysis and design focused on creating computational units with flexible performance using dynamic voltage scaling and dynamic body biasing of transistors. The high level system details are shown below with basic biasing and adder circuitery (proof of concept) included as well.</p>


<div class="image-gallery">
    <div class="image-item">
        <img src="../images/cv/374/Full System Diagram.jpg" alt="Full System Diagram" />
        <p>Full System Diagram</p>
    </div>
    <div class="image-item">
        <img src="../images/cv/374/1bit adder bias circuit.jpg" alt="1-bit Adder Bias Circuit" />
        <p>1-bit Adder Bias Circuit</p>
    </div>
    <div class="image-item">
        <img src="../images/cv/374/inverter bias circuit.jpg" alt="Inverter Bias Circuit" />
        <p>Inverter Bias Circuit</p>
    </div>
</div>

<style>
    .image-gallery {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px; /* Add some space between the images */
        padding: 20px;
    }

    .image-item {
        text-align: center;
        max-width: 70%; /* Set a max width for the images */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        border-radius: 10px; /* Optional: Add rounded corners */
        overflow: hidden; /* Ensure the rounded corners are visible */
        background-color: #fff; /* Add a background color */
        padding: 10px; /* Add some padding */
    }

    .image-item img {
        width: 100%;
        height: auto;
        border-radius: 10px; /* Optional: Add rounded corners to the images */
    }

    .image-item p {
        margin-top: 10px;
        font-size: 14px;
        color: #555; /* Optional: Add a subtle text color */
    }
</style>