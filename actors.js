const queryInputElem = document.getElementById('query');
const frigginForm = document.getElementById('vestigial');

var img;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b70d74c746msh2b5feafa0807d8ap1af83djsn8d2a39a09d64',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

frigginForm.addEventListener('submit', (event) => {
  console.log('submitting');
  event.preventDefault();
})

const results = document.getElementById('results');

// add event listener to know when to search

queryInputElem.addEventListener('keyup', async function(ev) {
  ev.preventDefault()
  if (ev.key == 'Enter') {

    console.log('pressed enter')

    const movie = await fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${queryInputElem.value}&r=json&page=1`, options)
	    .then(response => response.json())
      .then(response => { console.log(response); get_data(response.Search) })
	    .catch(err => console.error(err));
    
    window.location.href = "Movies.html";
  }
});

function myFunction() {
  var x = document.getElementById("vestigial");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

function get_data(data) {
  const movies = data;
  window.localStorage.setItem('movies', JSON.stringify(movies));
}