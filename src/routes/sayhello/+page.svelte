<svelte:head>
	<title>Say Hello</title>
</svelte:head>
<h1>pls fix, thx.</h1>
<div class="container">
    <h2>Don't be shy ヽ(•‿•)ノ</h2>
        <form method="GET" name="email-form">
            
            <label for="subject">Subject:</label> 
            <textarea id="text" name="subject" required></textarea>
            
            <label for="body">Message:</label>
            <textarea id="text" name="body" required></textarea>
            
            <input type="submit" value="Submit">
        </form>
</div>
<style>
   
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }
    h1 {
        text-align: center;
        color: #333;
    }
    form {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    }
    label {
        display: block;
        margin-bottom: 10px;

    }
    textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 4px;
        border: 1px solid #ddd;
        max-width: 95%;
        resize: none;
    }
    input[type="submit"] {
        display: block;
        width: 100%;
        padding: 10px;
        border: none;
        color: #fff;
        background: #333;
        border-radius: 4px;
        cursor: pointer;
    }
    input[type="submit"]:hover {
        background: #444;
    }
</style>