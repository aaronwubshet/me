
<script>
  	import { base } from '$app/paths';

	let resumeURL = base +'/resumeCV';
	let showImage = false;
</script>

<svelte:head>
	<title>Wubs</title>
</svelte:head>

<h1>Aaron Wubshet: UNDER CONSTRUCTION BROWSE AT YOUR OWN RISK</h1>
<h2>The basics and more </h2>
<p> Welcome to my drawing board / dumping ground / portfolio of past projects and experiences! If you've found yourself here then you probably know who I am, but if you don't, my name is Aaron. I will be your host for this journey through my (somewhat) professional life. But first a few quick facts...</p>
<p>
	<a href="https://youtu.be/UvlZFO0bQ6Y?t=353"><b>hOw wOuLd yOu dEsCrIbE YoUrSeLf</b></a> - I used to loathe this question, but that was probably because I didn't really like my own answer to it. Now I don't mind the question but still struggle to boil it down to a pithy sentence or two so here is a very non-MECE list of a few traits and a few key areas in which I am actively putting in effort to improve upon. 
</p>
<div style="display: flex;">
	<div style="flex: 1;">
		<ul>
			<i>Key Traits</i>
			<li>Independent</li>
			<li>Organized</li>
			<li>Empathetic</li>
			<li>Adaptable</li>
			<li>Cautious</li>
			<li>Thoughtful</li>
			<li>Curious</li>
			<li>Relaxed</li>
		</ul>
	</div>
	<div style="flex: 6;">
		<ul>
			<i>Know any good self-help books?</i>
			<li>
				<span class="tooltip">
					<b>Leading a more healthy and active lifestyle</b> - <i>just ran my first 5K!</i>
					<img src="images/5k.jpeg" alt="Aaron Wubshet" class="tooltip-image" />
				</span>
			</li>	
			<li><b>Focus on being less materialistic</b> - <i>added benefit of saving more money</i></li>
			<li><b>Don't always take the path of least resistance</b> - <i>do the hard thing. struggle. maybe fail. definitely grow</i></li>
			<li><b>Being more patient, jump to fewer conclusions, keep an open mind</b> - <i>makes learning new things much easier</i></li>
			<img src="images/selfhelp.jpeg" alt="Aaron Wubshet" style="width: 100%; height: 60%;" />

		</ul>
	
	</div>
</div>

	<p>
		<b>"I don't got friends, I got<a href="https://www.youtube.com/watch?v=IQuc7wfO16Q">family</a>"</b> - My parents immigrated to the United States from Ethiopia before I was born in NOVA / DMV area. We soon moved the suburbs outside Atlanta where I grew up and my younger sister was born. While the majority of my extended family is still in Ethiopia, I have family in both places and the community vibrant and active, so I am grateful for the culture and values that have been instilled in me. 
</p>
<p>
	<b>Lifelong learner</b> - Growing up I never really had the space or encouragement to explore hands on engineering driven passions. My parents mostly focused on ensuring I understood and learned the appropriate theory and conceptual ideas in the classroom. However, I was fortunate enough to go to a STEM focused high school called GSMST that did have a more robust engineering curriculum. From there I went off to Boston to study at MIT<a href={resumeURL}> (and I kept coming back)</a>for my undergraduate degrees, a couple masters in electrical engineering, and an MBA. I continue to enjoy learning new things both related to engineering and in other domains. Here are a handful of things I am currently learning or want to learn more about!</p>
		<div style="display: flex;">
			<div style="flex: 1;">
				<ul>
					<li>Tennis</li>
					<li>Photography</li>
					<li>Physics (quantum) </li>
					<li>Chess</li>
				</ul>
			</div>
			<div style="flex: 1;">
				<ul>
					<li>Data Science and Machine Learning</li>
					<li><a href="https://cybermotorcycle.com/marques/batavus/batavus-history.htm"> How to restore a Batavus moped</a></li>
					<li>Playing musical instruments (guitar, piano)</li>
					<li>C/C++</li>
				</ul>
			</div>
		</div>

<p>
	<b>Hobbies & interests</b> - There are a few core activities that have always been part of how I use my free time like writing poetry and playing / watching basketball. However, I've grown and explored new activities over the years.</p>
	<div style="display: flex;">
		<div style="flex: 1;">
			<ul>
				<li>Anime</li>
				<li>Photography</li>
				<li>Watches</li>
				<li>Sports (basketball, soccer, tennis)</li>
				<li>Video games <a href= "https://www.youtube.com/@wubberino">(short lived streaming career)</a></li>
				<li>Poetry (reading and writing)</li>
				<li>Traveling</li>
			</ul>
		</div>
		<div style="flex: 1;">
			<ul>
				<li>Listening to Audio books</li>
				<li>Reading</li>
				<li>Comedy</li>
				<li>Board games</li>
				<li>Red velvet</li>
				<li>Persian and mediterranean food</li>
			</ul>
		</div>
	</div>

<p> If you're still reading at this point then you're attention span has probably not been adversely impacted by short form video content too significantly so congratulations. Click around the website and you can get a better look at my work experience, projects (technical, business, and ~art~), skills (or lack thereof), and even send me an email via the contact me page. Or you can just email me at hello@aaronwubshet.com. But I worked hard trying to figure out how to make the the contact me page (so many AWS SES tutorials ໒( ಥ Ĺ̯ ಥ )७ ) so I'd appreciate if you use that. 
</p>

<img src="images/aaron.jpeg" alt="Aaron Wubshet" style = "width: 50%; height: 50%"/>

<style>
	a{
        color: -webkit-link;
        text-decoration-line: underline;
        cursor: auto;
    }
	.tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltip-image {
        visibility: hidden;
        width: 60%;
        height: 1600%;
        background-color: white;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 100%; /* Position the tooltip above the text */
        left: 120%;
        margin-left: -25%; /* Center the tooltip */
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }

    .tooltip:hover .tooltip-image {
        visibility: visible;
    }
</style>