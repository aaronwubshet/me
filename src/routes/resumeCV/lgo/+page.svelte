<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>LGO Thesis</title>
</svelte:head>

<h1>LGO Thesis: Evaluating On Body Injector technologies and their readiness for commercialization</h1>

<h3>The documents below are the midpoint presentation and project scope summarizing my LGO thesis project with Amgen.</h3>

<div style="display: flex;">

	<div style="flex: 1;">
    <div class="pdf-container">
      <iframe src="../images/cv/LGO/Midstream presentation.pdf" width="100%" height="1200px"></iframe>
    </div>
  </div>

  <div style="flex: 1;">
    <div class="pdf-container">
      <iframe src="../images/cv/LGO/Scope.pdf" width="100%" height="1200px"></iframe>
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
      height: 1200px; /* Adjust the height as needed */
  }
</style>
