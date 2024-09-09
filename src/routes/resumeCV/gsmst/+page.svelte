<svelte:head>
	<title>GSMST</title>
</svelte:head>
<script>
</script>

<h1>Early work while at GSMST</h1>

	
<div class="card-container">
	<a href="" class="card">
        <div class="card-content">
            <h2>Georgia's Governor's Honors Program</h2>
			<p> A monthlong residential honor program in a wide range of subject areas, I attended the program with a
				focus in biology and minor in mathematics. The research my partner and I conducted explored the water
				quality of a local tributary (heavy metal levels, oxygen content, etc) in relation to the biomass of the
				riverbank.</p>

				<div style="display: flex;">
					<div style="flex: 1;">
							<img src="../images/cv/gsmst/GHP/Picture5.jpg" alt="GHP" style = "width:100%; height:100%"/>
					</div>
					<div style="flex: 1;">
							<img src="../images/cv/gsmst/GHP/poster.png" alt="GHP" style = "width:100%; height:100%"/>
					</div>
				</div>
        </div>
	</a>
	<a href="#lmb" class="card">
        <div id = "lmb"class="card-content">
			<h2>Laser Modulation Box</h2>
            <p>For my senior capstone project and thesis, I worked with the Brown Lab Research Group at Georgia Tech. I and one
              other student were tasked constructing a laser modulation box using a DDS and FPGA. We designed and
              waterjet'ed the housing as well as put together the predesigned power circuitry.</p>
            
				<div class = "image-grid1">
				<img src="../images/cv/gsmst/LaserModulation/Assembly.jpg">
				<img src="../images/cv/gsmst/LaserModulation/Assembly2.jpg" >
				<img src="../images/cv/gsmst/LaserModulation/FinishedClockBox.JPG" >
				<img src="../images/cv/gsmst/LaserModulation/PowerBoard.jpg" >
				<img src="../images/cv/gsmst/LaserModulation/SystemBD.jpg" >
				<img src="../images/cv/gsmst/LaserModulation/WaterjetPrep.jpg" >
				<img src="../images/cv/gsmst/LaserModulation/SolderingPowerSupply.JPG" >
				<img src="../images/cv/gsmst/LaserModulation/DDSLidComplete.JPG" >
				<img src="../images/cv/gsmst/LaserModulation/BasicSchematic.jpg" >
				</div>
			</div>
	</a>

	<a href="#wc" class="card">
        <div id = "wc"class="card-content">
			<h2>Wireless Charging</h2>
            <p> As part of the Intel Science Fair, two partners and myself set out to build a wireless charging device
              using RF radiation. With lots of help from a group member's father (who was an electrical engineer) we
              attempted to implement a simple AC to DC rectifier circuit and a transmitting circuit that drove a 25cm
              dipole antenna setup. Unfortunately, this failed and we had no idea why. This was both exciting and
              frustrating because it left us wanting to continue to explore.</p>

            
				<div class = "image-grid2">
					<img src="../images/cv/gsmst/WC/Transceiver1.jpg" >
					<img src="../images/cv/gsmst/WC/Transceiver2.jpg" >
					<img src="../images/cv/gsmst/WC/Transceiver3.jpg" >
					<img src="../images/cv/gsmst/WC/TransceiverCircuit.jpg" >
				</div>
			</div>
	</a>

</div>


<style>
    .card-container {
        display: flex;
		flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
		padding: 20px;
		width:100%;

    }
	.card {
        display: block;
        width: 80%; /* Adjust the width as needed */
        padding: 20px;
        margin: 10px;
        text-align: center;
        background-color: #f8c178;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-decoration: none;
        color: inherit;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }


	.image-grid1 {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 columns */
        grid-template-rows: repeat(3, auto); /* 3 rows */
        gap: 10px;
        margin-top: 20px;
    }

    .image-grid1 img {
        width: 300px;
        height: 300px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

	.image-grid2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* 3 columns */
        grid-template-rows: repeat(2, auto); /* 3 rows */
        gap: 10px;
        margin-top: 20px;
    }

    .image-grid2 img {
        width: 300px;
        height: 300px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>