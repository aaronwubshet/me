<svelte:head>
	<title>Art™</title>
</svelte:head>
<script>
	import { base } from '$app/paths';
</script>

<h1> Cosplaying as a creative can be fun. </h1>

<div class="card-container">
    <a href="{base}/art/photography" class="card">
        <div class="card-content">
            <h1>Photography</h1>
			<img src="images/art/photography/t4.jpg" alt="Photography" style = "width:100%; height:100%"/>
        </div>
    </a>
    <a href="{base}/art/poetry" class="card">
        <div class="card-content">
            <h1>Poetry</h1>
			<img src="images/art/poetry/poetry_splash.png" alt="Poetry Splash" style = "width:100%; height:100%"/>
        </div>
    </a>
	<div class="video-container card">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=wOsAB-2kLuklYcXw&amp;list=PLfV1j1QXBK07MwNjN7cbl5Jc_al-gpRRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

	</div>
	<div class="video-container card">
		<video width="800" height="700" controls poster="images/art/guitar_thumbnail.png">
			<source src="images/art/guitar.mov" type="video/mp4">
		</video>
	</div>

	
</div>


<style>
    .card-container {
        display: flex;
		flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
		padding: 20px;
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

    .card-content h1 {
        margin: 0;
        font-size: 24px;
    }

    .video-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
</style>