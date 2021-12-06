// API_KEY
const API_KEY = '7a0adb83';
// show bookmark movies

function templateCreate(title) {
    return '<p>Title: ' + title + '</p>';
}

const showbookMarks = () => {
    let bookmarks = JSON.parse(localStorage.getItem('bookmark'));
    // console.log(bookmarks);
    let bookmarkContainer = document.querySelector('.bookmarks');
    bookmarks.forEach((bookmarkId) => {
        axios.get('https://www.omdbapi.com?apikey=' + API_KEY + '&i=' + bookmarkId)
        .then((result) =>{
            let results = result.data;
            bookmarkContainer.innerHTML  +=`
                     <div class="bookmarked">
                        <p>:<img src ="${results.Poster}" alt="${results.Title}"></p>
                        <p><strong>Title:</strong> ${results.Title}</p>
                        <p><strong>Actors:</strong>${results.Actors}</p>
                        <p><strong>Released Date:</strong>${results.Released}</p>
                        <p><strong>Duration:</strong>${results.Runtime}</p>
                        <p><strong>Language:</strong>${results.Language}</p>
                     </div>
                  `;
              bookmarkContainer.insertAdjacentElement('beforeend', bookmarkContainer.innerHTML);
        })
        .catch((err) => {
            console.log(err);
        }); 
    }) 
}
showbookMarks();
