

let form = document.forms["email-form"];
let new_url = "mailto:hello@aaronwubshet.com";
form?.addEventListener("submit", (event) => { 
    event.preventDefault();
    let data = new FormData(form);
    location.href = new_url.concat("?",'subject=',encodeURIComponent(data.get("subject")),'&','body=',encodeURIComponent(data.get("body")));
});


