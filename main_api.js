//"https://omdbapi.com/?s=("+searchFilm+")&apikey=9630de31"

const filmRecherche = document.getElementById("boiteRecherche");
const resultatRechercheTitre = document.getElementById("resultatRechercheTitre");
const resultatRecherchePoster = document.getElementById("resultatRecherchePoster");
const resultatRechercheAnnee = document.getElementById("resultatRechercheAnnee");
const resultatRechercheNotes = document.getElementById("resultatRechercheNotes");


async function loadMovies() {
	let film = filmRecherche.value;
	let URL = "https://omdbapi.com/?s=(" + film + ")&apikey=9630de31";
	let resultat = await fetch(URL);
	let data = await resultat.json();


	if (data.Response == "True") {
		affichageFilmInfos(data.Search);
	}
}


function affichageFilmInfos(film){

    resultatRecherchePoster.src = film[0]["Poster"];
    resultatRechercheTitre.innerText=film[0]["Title"];
    resultatRechercheAnnee.innerText=film[0]["Year"];
    
	console.log(film[0]["Year"]);

}


 