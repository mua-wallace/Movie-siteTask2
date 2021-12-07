//page complete

// window.addEventListener('load', removePreload);

// API_KEY
const API_KEY = '7a0adb83';
// get the movieID of the clicked movie

function getMovieId() {
    let params = (new URL(document.location)).searchParams;
    return params.get('movieId');
}

let movieId = getMovieId();
// console.log(movieId);


if (!movieId) {
    // can't get detail from empty movieId
    window.location = "index.html"
} else {
    axios.get('https://www.omdbapi.com?apikey=' + API_KEY + '&i=' + movieId)
        .then((res) => {
            console.log(res);
            document.getElementById('Poster').setAttribute('src', res.data.Poster);
            document.getElementById('Title').innerText = res.data.Title;
            document.getElementById('Genre').innerText = res.data.Genre;
            document.getElementById('Released').innerText = res.data.Released;
            document.getElementById('Rated').innerText = res.data.Rated;
            document.getElementById('imdbRating').innerText = res.data.imdbRating;
            document.getElementById('Director').innerText = res.data.Director;
            document.getElementById('Writer').innerText = res.data.Writer;
            document.getElementById('Actors').innerText = res.data.Actors;
            document.getElementById('Director').innerText = res.data.Director;
            document.getElementById('Plot').innerText = res.data.Plot;
            document.getElementById('Awards').innerText = res.data.Awards;
            document.getElementById('Country').innerText = res.data.Country;
            document.getElementById('Language').innerText = res.data.Language;
            document.getElementById('imdbVotes').innerText = res.data.imdbVotes;
            document.getElementById('Runtime').innerText = res.data.Runtime;
            document.getElementById('Type').innerText = res.data.Type;
            document.getElementById('DVD').innerText = res.data.DVD;
            document.getElementById('Production').innerText = res.data.Production;

            removePreload();
        })

        .catch((err) => {
            console.log(err);
        });
}
let bookmarkBtn = document.getElementById('btn-bookmark');

const addBookmark = (id) => {
    let bookMarks = [];
    if (localStorage.getItem('bookmark')) {
        bookMarks = JSON.parse(localStorage.getItem('bookmark'));
        // console.log(bookMarks)
    } else {
        bookMarks = localStorage.setItem('bookmark', JSON.stringify([]));
        // console.log(bookMarks)
    }



    if (bookMarks.indexOf(id) > -1) {
        alert('this movie has alredy been bookmarked');
    } else {
        console.log(id)
        console.log(bookMarks)
        bookMarks.push(id);//add movie id to the bookmarks array
        console.log(bookMarks);
        localStorage.setItem('bookmark', JSON.stringify(bookMarks));
        alert("You just bookmarked this movie")
    }
}



console.log(bookmarkBtn);
bookmarkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let params = (new URL(document.location)).searchParams;
    let movieId = params.get('movieId');
      console.log(movieId);
    addBookmark(movieId);
})
