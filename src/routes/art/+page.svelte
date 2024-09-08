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
			<img src="images/art/photography/splashphoto.jpg" alt="Photography" style = "width:100%; height:100%"/>
        </div>
    </a>
    <a href="{base}/art/poetry" class="card">
        <div class="card-content">
            <h1>Poetry</h1>
			<img src="images/art/poetry/poetry_splash.png" alt="Poetry Splash" style = "width:100%; height:100%"/>
        </div>
    </a>
</div>

<div class="video-container">
    <iframe width="800" height="700" src="images/art/guitar.mov" title="guitar" frameborder="10" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<style>
    .card-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
    }

    .card {
        display: block;
        width: 40%;
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

    .card-content h2 {
        margin: 0;
        font-size: 24px;
    }

    a {
        color: -webkit-link;
        text-decoration-line: underline;
        cursor: auto;
    }
	.video-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
		margin-left:20px;
    }
</style>