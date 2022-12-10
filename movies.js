const movies = JSON.parse(window.localStorage.getItem('movies'));

const movie = document.getElementById("movie_1");

for (var i = 0; i < movies.length; i++) {
    const imgs = document.createElement("img");
    imgs.setAttribute('src', movies[i].Poster);
    movie.append(imgs);
}


