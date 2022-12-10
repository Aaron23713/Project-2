const imdb_ip = window.localStorage.getItem('value1');
const movie_img = document.getElementById("movie_1");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ac9c5d418mshab658417ac8c14ap1a82a0jsn87844a4ee0ca',
		'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
	}
};

fetch(`https://mdblist.p.rapidapi.com/?i=${imdb_ip}`, options)
	.then(response => response.json())
	.then(response => {console.log(response); get_data(response)})
	.catch(err => console.error(err));

function get_data(data) {
	const imgs = document.createElement("img");
	imgs.setAttribute('src', data.poster);
	movie_img.append(imgs);
}

