<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>An Investigation of USRP FPGA as a platform for Quantum Sensing and Control</title>
</svelte:head>

                     
<h2>An Investigation of USRP FPGA as a platform for Quantum Sensing and Control</h2>

<p>This work develops a digital feedback control system for a quantum system in an effort to determine the viability of the Universal Software Radio Peripheral (USRP) 2954R for quantum sensing and control. Conducted alongside Lisa Poyneer and John Breneman at the Lawrence Livermore National Laboratory (LLNL), this work evaluates the radio frequency and signal processing capabilities of the USRP platform in relation to an array of other platforms, develops workflows for incorporating existing algorithms into the USRP environment and ensuring the portability of the algorithms to other Field Programmable Gated Array (FPGA) platforms. This work confirms the USRP as a viable platform for quantum sensing through experimentation on the quality of the radio frequency front end and USRP development environment. </p>						

<div style="display: flex; flex-direction: column; gap: 20px;">
	<div style="flex: 1;">
            <div class="pdf-container">
                <iframe src="../images/cv/6a/AWW_QUANTUM_SENSING_POSTER_FINAL.pdf" width="700" height="480"></iframe> 
            </div>
    </div>
        <div style="flex: 1;">
                <div class="pdf-container">
                    <iframe src="../images/cv/6a/An Investigation of USRP FPGA as a platform_PRES.pdf" width="640" height="480"></iframe>                   
                </div>
        </div>
</div>

<div class="pdf-container">
    <iframe src="../images/cv/6a/An Investigation of USRP FPGA as a platform for Quantum Sensing and Control.pdf" width="640" height="480"></iframe>                   
</div>
                       
              
<p>
This work would not have been possible were it not for the help of many people. I would like to say thank you to everyone that helped make this work possible. From the engineers and physicists at LLNL to my friends and professors at MIT, I couldn’t have completed this thesis without immense help. I want to acknowledge my mentors and supervisors at LLNL, John Breneman and Lisa Poyneer, for providing constant support on all aspects, both technical and not. I also want to thank Jacob White and Joseph Steinmeyer for supervising my work from over 3,000 miles away giving the freedom to explore and conduct pure research. While being far away from home in Livermore, CA was a new experience, I want to thank my host Cindy for making her home feel like my own. Finally, I want to thank my mom for pushing me to be the best version of myself from day 1.
</p>				


<style>
    a{
        color: -webkit-link;
        text-decoration-line: underline;
        cursor: auto;
    }
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