<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { base } from '$app/paths';

</script>

<svelte:head>
    <title>Draper</title>
</svelte:head>


<h1> Draper Laboratory</h1>

<h2> Signal Engineering Extern</h2>

<p>During my 4 week winter externship at Draper I created an artificial local GSM network via GNU Radio \& universal software radio peripherals to demonstrate base station to base station text communication using off the shelf consumer cellphones. The project I was working on pertained to software defined radio, a quickly growing field that could soon vastly benefit the consumer electronics industry. Software defined radio (SDR) hopes to replace any radio/wireless communication networks in modern electronics with less dedicated hardware and more general purpose processors and updatable software. This would mean having to buy new devices with a new update in network protocols would be a thing of the past since the update could simply be pushed as a firmware update to the device. My project was simply an open ended question of demonstrating a useful and/or interesting implementation of this technology. I began with the physical SDR unit, some network cables, and antennas. After a bit of research it became apparent that using a Linux machine was going to be necessary to implement anything remotely interesting or useful. After gathering and become familiar with the appropriate hardware (two USRP2 from Ettus Research) and the appropriate software (GNU Radio and OpenBTS) I had a clear idea of my project. I decided to start off my implementing a few mini projects in GNU Radio to demonstrate how to use it as a FM radio receiver, spectrum analyzer, etc. From there I demonstrated that the two USRPs can be controlled from a single computer and communicate across their independent networks. All the while, I was learning more about using Linux machines and terminal and network configurations. My ultimate goal became to recreate something I saw in a Youtube video at the start of the month: a GSM base station. This boiled down to creating a mini short range cellphone network that could handle phone calls and texts. This meant configuring OpenBTS and a host of other dependencies. Eventually I was able to register my cell phone on my very own test network.

</p>

<div class="pdf-container">
  <iframe src="../images/cv/draper/extern.pdf" width="100%"></iframe>
</div>

<h2> Signal Engineering Intern</h2>

<p id = "intern">

Efforts by the DSO to analyze LTE interference with government systems involve collaboration with NTIA, major cellular providers (T-Mobile, Verizon, AT&T), and SETA contractors. These initiatives focus on measuring LTE power, analyzing clutter, and creating interference models, including those for threshold impacts. Measurements have been taken around military bases, and clutter data has been gathered at various locations to aid in developing interference models. Initial models have been integrated into the Early Entry Portal Analysis Capability (EEPAC), and ongoing work aims to refine these models, incorporating advanced elements like LIDAR data, mobility, antenna patterns, and environmental features.

During my 10 week summer internship at Draper I focused on developing and implementing a MATLAB-based simulator for aggregate LTE power levels at the physical channel structural level. This simulator will be used to generate synthetic data for clutter and interference models, and to validate these models against real-world measurements.

Future work will focus on improving clutter and interference models by incorporating more detailed geographic and environmental data, and considering the impact of MIMO technology and future network growth. Stochastic geometry and deep learning may be used to better map topological features and refine models. Validated models will be incorporated into EEPAC software, aiding in planning and potentially identifying further measurement needs.
Worked on the developed and implemented a MATLAB based simulator for aggregate LTE power levels at the physical channel structural level
</p>

<div style="display: flex;">
  <div style="flex: 1;">
      <div class="pdf-container">
          <iframe src="../images/cv/draper/intern1.pdf" width="100%"></iframe>
      </div>
  </div>
  <div style="flex: 1;">
      <div class="pdf-container">
          <iframe src="../images/cv/draper/intern2.pdf" width="100%"></iframe>
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
        height: 500px;
    }
</style>