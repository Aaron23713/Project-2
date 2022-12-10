const movies = JSON.parse(window.localStorage.getItem('movies'));
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4ac9c5d418mshab658417ac8c14ap1a82a0jsn87844a4ee0ca',
        'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
    }
};

fetch(`https://movie-details1.p.rapidapi.com/imdb_api/movie?id=${movies[i].imdbID}`, options)
.then(response => response.json())
.then(response => {console.log(response); get_data2(response) })
.catch(err => console.error(err));