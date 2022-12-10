const movies = JSON.parse(window.localStorage.getItem('movies'));

const movie = document.getElementById("movie_1");

for (var i = 0; i < movies.length; i++) {
    const imgs = document.createElement("img");
    imgs.setAttribute('src', movies[i].Poster);
    imgs.setAttribute('onclick', "description()");
    movie.append(imgs);
}

function description() {
    window.location.href = "Description.html";
}

function secondApiInfo(secondData) {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b70d74c746msh2b5feafa0807d8ap1af83djsn8d2a39a09d64',
        'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
      }
    };
    
    fetch(`https://movie-details1.p.rapidapi.com/imdb_api/movie?id=${secondData}`, options)
      .then(response => response.json())
      .then(response => {console.log(response); get_data2(response) })
      .catch(err => console.error(err));
      
  }
    
  function get_data2(data) { 
  
  
  var meety = data;
  var oImg11;
  oImg11 = document.createElement("img");
  oImg11.setAttribute('src',meety.image);
  console.log(meety.image);
  document.body.append(oImg11);
  document.body.append(meety.description);
  
  }