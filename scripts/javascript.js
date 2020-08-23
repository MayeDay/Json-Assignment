var data = null;
	var xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === this.DONE) {
			console.log(this.responseText);
		}
	});

	xhr.withCredentials = false;

	xhr.open("GET", `https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=Miguel`);
	xhr.setRequestHeader("x-rapidapi-host", "shazam.p.rapidapi.com");
	xhr.setRequestHeader("x-rapidapi-key", "6acaa9b411msh3afc4cb86f9b723p154d56jsn7fb7d2d006c3");


function searchMusic(){
	let search = document.querySelector(" .form input").value;

	fetch(`https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=${search}`)
	.then(respone => respone.json)
	.then(data = console.log(data));

}





