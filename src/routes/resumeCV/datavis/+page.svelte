<!-- TODO add landlord score, eviction data -->
<!-- ⁠Addressing any of the comments from critiques, cleaning up the visualizations, address any last bugs, ensuring we hit all the things on the rubric - Aaron -->


<svelte:head>
	<title>Who Owns Boston?</title>
</svelte:head>

<script>
	import * as d3 from 'd3';
	import mapboxgl from "mapbox-gl";
	import "../../../../node_modules/mapbox-gl/dist/mapbox-gl.css";
	import { onMount } from "svelte";

	// overall variables
	let rentals = [];
	mapboxgl.accessToken = "pk.eyJ1IjoiYXd1YnNoZXQiLCJhIjoiY2x1b2tiamFpMjAzMjJqbzN6NGQ3bjdwcyJ9.ipL3t_Mw0hLMfZJCF4oW3w";
	let colorScale = d3.scaleOrdinal(d3.schemeCategory10);
	let format = d3.format(",.2f")
	let filteredRentals = [];
	
	//top owners determination
	let groupedData;
	let topOwnersByYear = {};
	let ownerCounts;
	let tableData= [];

	//search variables
	let query = "";
	let addressArray = [];
	let values;
	let searchedRentals = [];
	let hackyExit = 0;
	let errorMessage =  "";

	//time filter variables
	let timeFilterLabel;
	let filterYear = 2022; //initial filter year

	//map object and view change counter
	let map2;
	let mapViewChanged2 = 0;
	let mapViewChanged = 0;
	let map;
	
	//tool tip and ciricle selection variables
	let hoveredOwner = null;
	let hoveredIndex = -1;
	let totalPropertiesByOwner= 0;
	let totalProperties = 0;
	let percentageOfTotalProperties = 0;
	let averageTotalValue = 0;
	let ownerRentals =[];
	let totalValue = 0;
	let yearBuilt = 0;
	let evict_score;
	let totalCodeViolations = 0;
	let futurePurchaseProbability = 0;
	let landlordScore;

	onMount( async() => {
		// create map object
		map  = new mapboxgl.Map({
			container: "map",
			style: "mapbox://styles/awubshet/cluolh0dx016601pbfkif17ra",
			zoom: 11.1,
			center: [-71.0796673,42.3123147],
			interactive: true
		}); 
		await new Promise(resolve => map.on("load", resolve)); // wait until the map is fully loaded before start next map 

		// create map object
		map2  = new mapboxgl.Map({
			container: "map2",
			style: "mapbox://styles/awubshet/cluolh0dx016601pbfkif17ra",
			zoom: 11.1,
			center: [-71.0796673,42.3123147],
			interactive: true
		});
		await new Promise(resolve => map2.on("load", resolve)); // wait until the map is fully loaded before loading data
		
		
		rentals = await d3.csv("https://raw.githubusercontent.com/aaronwubshet/final_project/main/src/lib/compiled_output.csv", row => ({
        ...row,
        _id: Number(row._id), // or just +row.line
        Lat: Number(row.lat_x),
		Long: Number(row.lon_x),
		TOTAL_VALUE: Number(row.TOTAL_VALUE),
		YR_BUILT: Number(row.YR_BUILT),
		Code_violation_count: Number(row.code_violations),
		Likelihood_of_purchase: Number(row.predictions),
		Landlord_score: row.score,
		Top_10_owner: Number(row.Top_10_owner),
		DATA_YR: Number(row.year)
        }) ); // load data
		

		// Group data by year and owner
		groupedData = d3.group(rentals, d => d.DATA_YR, d => d.OWNER);

		// For each year, count the number of properties for each owner and select the top 10 owners
		groupedData.forEach((owners, DATA_YR) => {
		ownerCounts = Array.from(owners, ([owner, properties]) => ({ owner, count: properties.length }));

		ownerCounts.sort((a, b) => d3.descending(a.count, b.count));

		topOwnersByYear[DATA_YR] = ownerCounts.slice(0, 10).map(d => d.owner);
		});
		rentals = rentals.map(rental => ({
		...rental,
		isTop10Owner: isTop10Ownerfun(rental.OWNER, rental.DATA_YR) ? 1 : 0
		}));
			
	})


	// two getCoords functions one for each map
	function getCoords (rental) {
		let point = new mapboxgl.LngLat(+rental.Long, +rental.Lat);
		let {x, y} = map.project(point);
		return {cx: x, cy: y};
	}

	function getCoords2 (rental) {
		let point = new mapboxgl.LngLat(+rental.Long, +rental.Lat);
		let {x, y} = map2.project(point);
		return {cx: x, cy: y};
	}
	
	function handleMouseExit() {
		hoveredIndex = -1;
		hoveredOwner = null;
	}

	// recalculate tooltip data when hovering over a circle
	$: totalProperties = filteredRentals.length;
	function handleMouseEnter(index) {
		hoveredIndex = index;
		hoveredOwner = filteredRentals[hoveredIndex].OWNER;	
		totalPropertiesByOwner = filteredRentals.filter(r => r.OWNER === hoveredOwner).length;
		percentageOfTotalProperties = (totalPropertiesByOwner/totalProperties) * 100;
		ownerRentals = filteredRentals.filter(r => r.OWNER === hoveredOwner);
    	totalValue = d3.sum(ownerRentals, r => +r.TOTAL_VALUE);
    	averageTotalValue = totalValue / ownerRentals.length;
		evict_score = filteredRentals[hoveredIndex].eviction_score;
		yearBuilt = filteredRentals[hoveredIndex].YR_BUILT;
		totalCodeViolations = d3.sum(ownerRentals, r => +r.Code_violation_count);
		futurePurchaseProbability = d3.mean(ownerRentals, r => +r.Likelihood_of_purchase);
		landlordScore = filteredRentals[hoveredIndex].Landlord_score;
	}
	
	// update view change counter when either map is moved
	$: map?.on("move", evt => mapViewChanged++); 
	$: map2?.on("move", evt => mapViewChanged2++);
	
	// Time filtering data being piped to the map
  	$: timeFilterLabel = new Date(filterYear, 0, 1).toLocaleString("en", {year: "numeric"}); // Update the time filter label whenever the filter year changes
	// connect filterYear to actually filter dataset
	$: filteredRentals = rentals.filter(r => r.DATA_YR === filterYear);
	
	// Search functionality
	$:searchedRentals = filteredRentals.filter(rental => rental.address.includes(query.toLowerCase()));
	function handleMouseExit2() {
		hoveredIndex = -1;
		hoveredOwner = null;
	    map2.setCenter([-71.0589,42.3601]);

	}

	$: if (searchedRentals.length === 0) {
        errorMessage = "Sorry that address isn't in our database!";
    } else {
        errorMessage = "";
    }

	// recalculate tooltip data when search has a single address
	function handleMouseEnter2(index) {
		hoveredIndex = index;
		hoveredOwner = searchedRentals[0].OWNER;	
		totalPropertiesByOwner = searchedRentals.filter(r => r.OWNER === hoveredOwner).length;
		percentageOfTotalProperties = (totalPropertiesByOwner/totalProperties) * 100;
		ownerRentals = searchedRentals.filter(r => r.OWNER === hoveredOwner);
    	totalValue = d3.sum(ownerRentals, r => +r.TOTAL_VALUE);
    	averageTotalValue = totalValue / ownerRentals.length;
		yearBuilt = searchedRentals[0].YR_BUILT;
		evict_score = searchedRentals[0].eviction_score;
		totalCodeViolations = d3.sum(ownerRentals, r => +r.Code_violation_count);
		futurePurchaseProbability = d3.mean(ownerRentals, r => +r.Likelihood_of_purchase);
		landlordScore = searchedRentals[0].Landlord_score;
		let rental = searchedRentals[0];
	    map2.setCenter([rental.Long, rental.Lat]);

	}

	// when a search results in a single address, zoom in on that address and calculate the tooltip values by calling the handleMouseEnter2 function
	$: if (searchedRentals.length === 1 && hackyExit===0) {
		handleMouseEnter2(searchedRentals[0]._id);
		hackyExit = 1;
	}
	$: if (hackyExit ===1 && searchedRentals.length >1){
		handleMouseExit2(searchedRentals[0]._id);
		hackyExit = 0;
	}



	// function to check if an owner is in the top 10 for a given year
	function isTop10Ownerfun(owner, year) {
		// Check if the year exists in the topOwnersByYear object
		if (topOwnersByYear[year]) {
			// If the year exists, check if the owner is in the top 10 for that year
			return topOwnersByYear[year].includes(owner);
		} else {
			// If the year does not exist, return false
			return false;
		}
		}
	
	// Function to get the count of properties for a given owner and year
	function getPropertyCount(owner, year) {
		// Check if the year exists in the groupedData map
		if (groupedData.has(year)) {
		// If the year exists, check if the owner exists for that year
		if (groupedData.get(year).has(owner)) {
			// If the owner exists, return the count of properties for the owner in the year
			return groupedData.get(year).get(owner);
		}
		}
		// If the year or owner does not exist, return 0
		return 0;
	}

	$: if (topOwnersByYear && topOwnersByYear[filterYear] && filterYear) {
		tableData = topOwnersByYear[filterYear].map(owner => ({
		owner,
		count: getPropertyCount(owner, filterYear)
		})) || [];
	}

</script>

<div>

<h1>Who Owns Boston? (& why you should know them before signing a lease) </h1>

<h3> Introduction</h3>
<p> Boston is a city with a rich history and a diverse population. It is also a city with a high cost of living and a competitive rental market. In recent years, the city has seen a surge in the number of rental properties owned by large companies and investment firms. These companies, often referred to as "corporate landlords," own thousands of rental units in the city and have a significant impact on the local rental market. </p>
<p></p>

<h3> Interactive map of top 10 owners</h3>
<p>There is significant concentration of rental property ownership in the Boston area by corporate land lords. The table below summarizes the breakdown</p>


<table>
	<caption>Top 10 Owners by property count</caption>

	<thead>
	  <tr>
		<th>Owner</th>
		<th>Residential Property Count</th>
	  </tr>
	</thead>
	<tbody>
	  {#each tableData as data, i (i)}
		<tr style="background-color: {colorScale(i)}">
		  <td>{data.owner}</td>
		  <td>{data.count.length}</td>
		</tr>
	  {/each}
	</tbody>
  </table>

<p>This concentration tends drive a power imbalance between tenants and landlords similar to the way a union functions but in the opposite direction (think oligpoloy). Below is a map of Boston with the relevant* rental properties. Those owned by the top 10 are highlighted in different colors. Try out the slider to see how this has changed in the last 20 years!</p>

<label for="year-slider">Filter Year: {timeFilterLabel}</label>
<input class = "slider" id="year-slider" type="range" min={2000} max={2022} step="1" bind:value={filterYear} />


<dl id="commit-tooltip" class="info tooltip" hidden={hoveredIndex === -1}>
	<h3>Owner Facts</h3>
	

	<dt>Number of properties:</dt>
	<dd>{totalPropertiesByOwner}</dd>

	<dt>Percentage of total properties:</dt>
	<dd>{percentageOfTotalProperties.toFixed(2)}%</dd>

	<dt>Average total value:</dt>
	<dd>${format(averageTotalValue)}</dd>

	<dt>Sum Total Value:</dt>
	<dd>${format(totalValue)}</dd>

	<!-- <dt>Year Built:</dt>
	<dd>{yearBuilt}</dd> -->

	<dt>Eviction Score:</dt>
	<dd>{evict_score}</dd>

	<dt>Code violations:</dt>
	<dd>{totalCodeViolations}</dd>

	<dt>Future purchase probability^:</dt>
	<dd>{(100*futurePurchaseProbability).toFixed(2)}%</dd>

	<dt>Overall Landlord Score:</dt>
	<dd>{landlordScore}</dd>


</dl>

<ul class= "legend">Legend
<li>Each dot represents a residential rental property. We will continue to supplement with more data as we get it!</li>
<li>Colored dots correspond to the top 10 owners of that year</li>
<li>Hover over a dot to see more information about the owner</li>
<li>Use the slider to see how the top 10 owners change and where the dots move</li>
</ul>
<div id="map">	
	<svg>
		{#key mapViewChanged}
			{#each filteredRentals as rental, index}
				<circle 
					cx={ getCoords(rental).cx }
					cy={ getCoords(rental).cy }
					r="5" 
					fill={rental.isTop10Owner === 1 ? colorScale(rental.OWNER): "grey"}
					class:grey={hoveredOwner !== null && rental.OWNER !== hoveredOwner}
					on:mouseleave={evt => handleMouseExit()}
					on:mouseenter={evt => handleMouseEnter(index)}			
				/> 
			{/each}
		{/key}
	</svg>

</div>

<div id="article-section">	
	<h3>Eviction rates and low income communities and corporate landords</h3>
	<p>Eviction represents a forceful action capable of displacing individuals from their communities and familial networks, disrupting access to education and healthcare, and plunging them into a cycle of financial uncertainty. It serves as a catalyst for housing instability and inequality, both on a national and local scale. Previous research has demonstrated that corporate and absentee landlords are more prone to evicting tenants, resulting in adverse consequences for housing stability. This pattern persists across various neighborhoods in the greater Boston area. It is clear from the graph below that this problem is only getting worse. Quantities of evictions have steadily increased from 2020 to 2023.</p>

	<p style="display: flex; justify-content: center;">	
		<img src="../images/cv/datavis/evictions_over_time.png" alt="table of top 10 owners in boston" style = "width: 100%"/>
	</p>

	<p>The gradual rise in eviction rates correlates significantly with the growing prevalence of corporate property ownership in recent years as displayed in the graph below. Additionally, heightened levels of absentee, institutional ownership of rental units by speculative investors corresponded with increased eviction rates. This aligns with extensive empirical evidence illustrating that concentrated corporate property ownership amplifies housing inequities. A mere 1 percentage-point rise in rental units owned by institutional owners was linked to a more than 2% surge in the filing rate [Robsky Huntly et. al., 2022].</p>

	<p style="display: flex; justify-content: center;">	
		<img src="../images/cv/datavis/corpown.png" alt="corporate ownership over time" style = "width: 100%"/>
	</p>

	<p>The data depicted in the graph illustrates a clear trend indicating that eviction rates tend to be notably higher for households with lower incomes. Over the span of four years, from 2020 to 2023, the graph portrays a consistent clustering of data points between the income range of $15,000 to $40,000. This clustering suggests that households with median incomes falling within this range are disproportionately affected by evictions in the greater Boston area. The consistent pattern underscores the correlation between lower income levels and heightened vulnerability to eviction, emphasizing the pressing need for targeted interventions to address housing insecurity among economically disadvantaged populations.</p>

	<p style="display: flex; justify-content: center;">	
		<img src="../images/cv/datavis/eviction_and_income.png" alt="eviction and income" style= "width: 100%"/>
	</p>
</div>


<div id="article-section">	
	<h3>Resources to help you</h3>
	<p>While having this information is a pivotal first step to addressing the power imbalance between landlords and you as a renter, there is much more information and other resources that exist to help you. Below you will find a list of helpful links especially if you feel your rights as a tenant have been violated.</p>
	<dl>
		<h4>Helpful Links:</h4>
		<dt><a href= "https://www.mass.gov/info-details/tenant-rights"> Tenant Rights</a> </dt>
		<dt><a href= "https://www.mass.gov/guides/the-attorney-generals-guide-to-landlord-and-tenant-rights"> AG's Guide to Landlord and Tenant Rights</a> </dt>
		<dt><a href= "https://www.mass.gov/info-details/finding-legal-help"> Finding Legal Aid</a> </dt>
	</dl>

	

</div>

<div id="article-section">	
	<h3>Check Your Address!</h3>
	<p>With all the data we have access to in addition to some sophisticated ML modeling of housing and buyers we can calculate a likelihood of purchase which in combination with code violations, evictions, and other corporate ownership patterns we developed a "landlord score". </p>
	

</div>
<input class="search"
        type="search"
        bind:value="{query}"
        aria-label="Search projects"
        placeholder="🔍 Search projects…"
/>
<p></p>
{#if errorMessage}
    <p>{errorMessage}</p>
{/if}
<div id="map2">	
	<svg>
		{#key mapViewChanged2}
			{#each searchedRentals as rental, index}
				<circle 
					cx={ getCoords2(rental).cx }
					cy={ getCoords2(rental).cy }
					r="5" 
					fill={"grey"}
					class:grey={hoveredOwner !== null && rental.OWNER !== hoveredOwner}
					on:mouseleave={evt => handleMouseExit()}
					on:mouseenter={evt => handleMouseEnter(index)}
					/>
			{/each}
		{/key}
	</svg>
</div>

<div id="article-section">	
	<h3>Future work</h3>
	<p>A pivotal part of the renter's plight is the trend in rent prices over time. Thus a future step for this work would be acquiring more rent value data and understanding the trends and correlations with some of the key variables explored here. While this data is hard to come by or create, by partnering with websites like Zillow or StreetEasy we may be able to incorporate rent data.</p>
</div>

<div id="footer">
	<h4>Footnotes</h4>
	<p> <em>Data Sources & Acknowledgements:</em></p>
	<p>* Relevant is defined using land use codes from <a href= "https://data.boston.gov/dataset/property-assessment/resource/fda18178-b7f8-49fc-be3e-75ddc0be4117"> Boston Property Assessment Data</a></p>
	<p> ^Estimated probabilty of property to be purchased by a top 10 owner in the future. This was calculated using a machine learning model based on historic data. The key data used was filtered down based on land use area codes. Multiple datasets were merged to generate scores and indicators to holistically assess property owners and a property’s investment value. Using historical sales data by investors as a label, a machine learning classification model was designed and trained to determine how likely an investor would be interested in purchasing a property. Based on the addresses, latitude/longitude, and various ID systems, we were able to connect properties to eviction data and other features to measure the property owner’s stewardship. Many of these scores were bucketed instead of showing the raw score so that the audience does not get overwhelmed with data and can quickly interpret the scores based on the labels for the buckets.</p>
	<p>Robsky Huntley, E., Almeida, L., Heaton, S., Moon Park, A. Housing Justice Beyond the Emergency. 2022; hfamass-covid-evictions-report-short-03-22-screen-rfs.pdf (homesforallmass.org) </p>
	<p>Analyze Boston, Property Assessment 2024</p>
	<p>This project was developed with guidance and feedback from the Metropolitan Area Planning Commission (MAPC).</p>
</div>
</div>

<style>
	
    table{
        width: 100%;
    }


	caption {
		font-size: 1.5em; 
		font-weight: bold;
	}

	#map2 {
		flex: 1;
	}
	#map2 svg {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 700px;
		pointer-events: none;
	}

	#map {
		flex: 1;
	}
	#map svg {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 700px;
		pointer-events: none;

	}


	.article-section {
		display: grid;
		grid-template-columns: auto 1fr;
		margin: 0;
		gap: 0.5em;
	}
	dl.info {
		display: grid;
		grid-template-columns: auto 1fr;
		margin: 0;
		gap: 0.5em;
		transition-duration: 500ms;
		transition-property: opacity, visibility;
		&[hidden]:not(:hover, :focus-within) {
			opacity: 0;
			visibility: hidden;
		}
	}

	dl.info dt {
		color: #888;
		font-weight: normal;
	}

	dl.info dd {
		margin-left: 0;
		font-weight: bold;
	}

	.tooltip {
		position: fixed;
		top: 1em;
		right: 1em;
		background-color: hsla(100, 0%, 100%, 0.8);
		padding: 1em;
		border-radius: 5px;
		box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
		backdrop-filter: blur(10px);
		z-index: 2;
	}

	#commit-tooltip h3 {
        text-align: center;
        grid-column: 1 / -1;
    }

	circle {
		transition: 200ms;
		opacity: .83;
		transform-origin: center;
		transform-box: fill-box;
		&:hover {
			transform: scale(3);

		}
		pointer-events: auto;
	}

	.grey {
    	fill: grey !important;
  	}

	.search {
			width: 100%;
			font-size: 2em;
	}
	tr {
		opacity: 0.83;
	}
	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 15px;
		background: #d3d3d3;
		outline: none;
		opacity: 0.7;
		-webkit-transition: .2s;
		transition: opacity .2s;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		background: #4CAF50;
		cursor: pointer;
		transform: translateY(-40%); /* Shift the thumb to the left by half its width */

	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 25px;
		background: #4CAF50;
		cursor: pointer;
		transform: translateY(-40%); /* Shift the thumb to the left by half its width */

	}

	/* Style the tick marks */
	.slider::-webkit-slider-runnable-track {
		height: 5px;
		background: repeating-linear-gradient(to right, #666, #666 1px, #fff 1px, #fff 5%);
	}

	.slider::-moz-range-track {
		height: 5px;
		background: repeating-linear-gradient(to right, #666, #666 1px, #fff 1px, #fff 5%);
	}
	.legend {
		font-weight: bold;
        padding-bottom: 1em;

	}

    a{
        color: -webkit-link;
        text-decoration-line: underline;
        cursor: auto;
    }
</style>