const movies = JSON.parse(window.localStorage.getItem('movies'));

const movie = document.getElementById("movie_1");

function get_data2(data) { 
  
  
  var meety = data;
  var oImg11;
  oImg11 = document.createElement("img");
  oImg11.setAttribute('src',meety.image);
  console.log(meety.image);
  document.body.append(oImg11);
  document.body.append(meety.description);
  
  }
  for (var i = 0; i < movies.length; i++) {
    const imgs = document.createElement("img");
    imgs.setAttribute('src', movies[i].Poster);
    imgs.setAttribute('value', `${i}`)
    imgs.setAttribute('onclick', `description(${i})`);
    movie.append(imgs);
}
function description(value) {
    window.localStorage.setItem('value1', movies[value].imdbID);
    window.location.href = "Description.html";
}   