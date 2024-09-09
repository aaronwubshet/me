<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { base } from '$app/paths';

</script>

<svelte:head>
    <title>MIT UROPs </title>
</svelte:head>

<h1>Undergraduate Research Opportunities (UROPs) @ MIT</h1>
      <h2 > Research Laboratory of Electronics</h2>
      
      <h3>Transparent Displays enabled by resonant nanoparticle scattering</h3>
          <p>
            This project aimed to develop and enhance a projection-based transparent display in which all light except three key peak wavelengths (red, green, blue) can pass through unscattered, enabling transparency. The display itself is enabled by resonantly scattering plasmonic nanoparticles. I worked with Emma Anquillare in Professor Marin Soljacic’s lab in RLE. My role was focused on replicating the current prototype display the lab has manufactured, and also testing new formulations and fabrication methods. I also had the autonomy to trying my own combinations of polymers and nanoparticles based on any relevant literature. I was able to learn a lot about the fabrication process of the display, and also the physics behind the scattering of light by nanoparticles. I also learned a lot about the importance of collaboration and communication in a lab setting.</p>
<div id = "SSL">

      <h2>Star Labs / Space Systems Laboratory</h2>

      The project within STAR Labs that I would be working on is the MiRaTA (Microwave Radiometer Technology Acceleration). It is a 3U weather sensing CubeSat collaboration between MIT STAR Lab and Lincoln Laboratory. It uses a 2 band microwave radiometer with 10 channels near the 60, 183, and 206 GHz absorption lines. These absorption lines give measurements of temperature, humidity, and cloud ice in the atmosphere ultimately leading to the study of cyclones and other tropical storms. MiRaTA also features a GPS receiver to perform GPS radio occultation (GPSRO) measurements which allow for calibration of the radiometer. The portion of the project left to be completed is to implement and test the Micron Radio ground station.
      My role on the team will be as an analog circuit designer and tester. That will mean installing and working with the ground station hardware. I will also be working with RF side of things (power and spectrum measurement, air testing with the MiRaTA EM CubeSat). These are all pivotal components to the ground station that needs to be up and running for the CubeSat to effectively send information back down to Earth.
      I think this UROP experience would be a great step for my own personal growth as well as useful for STAR Labs. I have some hands on lab experience from my previous UROP in RLE where I made transparent displays using nanoparticle scattering. I also am taking two lab classes this semester focusing on feedback control and microcontrollers both of which have given me an insight of what it takes to design, construct, and test an entire electromechanical system which seems like it will be an essential part of this UROP. As for how I could grow in this role, I don’t know much about laser communication and using circuit design software, two skills I would love to have going forward in my academic and professional career. Ultimately, I think both STAR Labs and myself will benefit from this UROP experience immensely.
      Some of the background information and designs I worked on are in the following PDFs:
      <div style="display: flex;">
        <div style="flex: 1;">
            <div class="pdf-container">
                <iframe src="../images/cv/urops/overview.pdf" width="100%"></iframe>
            </div>
        </div>
        <div style="flex: 1;">
            <div class="pdf-container">
                <iframe src="../images/cv/urops/schem1.pdf" width="100%"></iframe>
            </div>
        </div>
        <div style="flex: 1;">
            <div class="pdf-container">
                <iframe src="../images/cv/urops/schem2.pdf" width="100%"></iframe>
            </div>
        </div>
    </div>
</div>

<style>
    .text-columns {
        display: flex;
        gap: 20px; /* Add space between the columns */
        padding: 20px;
    }
    .column {
        flex: 1;
        padding: 10px;
        background-color: var(--primary-color-accent);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        border-radius: 10px; /* Optional: Add rounded corners */
    }
    .pdf-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin-bottom: 100px;
    }

    .pdf-container iframe {
        border: none;
        width: 100%;
        height: 500px;
    }
</style>