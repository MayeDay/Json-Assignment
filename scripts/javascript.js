let playlist = [{
  "title": "So Sexy",
	"artist": "Twista",
	"genre": "R&B"
},{
  "title": "Coffee",
	"artist": "Miguel",
	"genre": "R&B"

},{
  "title": "Rollout",
	"artist": "Ludacris",
	"genre": "Hip Hop"

},{
  "title": "Sexy Back",
	"artist": "Justin Timberlake",
	"genre": "R&B"

},{
  "title": "Black Skinhead",
	"artist": "Kanye West",
	"genre": "R&B"

},{
  "title": "Fall Apart",
	"artist": "Post Malone",
	"genre": "R&B"

},{
  "title": "Redbone",
	"artist": "Childish Gambino",
	"genre": "R&B"

},{
  "title": "Lotus Flower Bomb",
	"artist": "Wale",
	"genre": "R&B"

},{
  "title": "Cartier Harden",
	"artist": "City the Mask",
	"genre": "Rap"

},{
  "title": "Empire State of Mind",
	"artist": "Jay-Z",
	"genre": "R&B"

}];

function onSearch(){
	event.preventDefault();
	let searchList = [];
	let input = document.querySelector(".form input").value;

	for(let x = 0; x < playlist.length; x++){
		if(input.toUpperCase() == playlist[x].artist.toUpperCase() || input.toUpperCase() == playlist[x].title.toUpperCase() || input.toUpperCase() == playlist[x].genre){
			searchList.push(playlist[x]);
		}
	}

	if(searchList.length < 1){
		alert("No Information found :(");
	}

	for(let x = 0; x < searchList.length; x++){
		let row = document.createElement("tr");
		let data = document.createElement("td");
		let data1 = document.createElement("td");
		let data2 = document.createElement("td");

		data.innerHTML = searchList[x].title
		data1.innerHTML = searchList[x].artist
		data2.innerHTML = searchList[x].genre;
		row.appendChild(data);
		row.appendChild(data1);
		row.appendChild(data2);
		document.querySelector("table").appendChild(row);
	}
}





