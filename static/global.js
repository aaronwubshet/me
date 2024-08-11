console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}


let pages = {
	".": "Wubs",
	"resumeCV": "Curriculum Vitae",
    "Art<sup>TM</sup>": "Art<sup>TM</sup>",
    "sayhello": "Say Hello",
};

let nav = document.createElement("nav");


let form = document.forms["email-form"];
let new_url = "mailto:hello@aaronwubshet.com";
form?.addEventListener("submit", (event) => { 
    event.preventDefault();
    let data = new FormData(form);
    location.href = new_url.concat("?",'subject=',encodeURIComponent(data.get("subject")),'&','body=',encodeURIComponent(data.get("body")));
});


