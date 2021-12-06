// API_KEY
const API_KEY = '7a0adb83';

//  Selecting elements from thr DOM
const form = document.querySelector('.search-form');
const inputElement = document.getElementById('inputValue'); 
const movieSearchable = document.querySelector('.movies-searchable');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('searching..');
  addPreload();
  axios.get('https://www.omdbapi.com?apikey='+API_KEY+'&s='+inputElement.value)
  
      .then(response => {
        console.log(response.data.Search)
        let results = response.data.Search;
        let showResults = document.querySelector('.movies-searchable')
        showResults.innerHTML = '';
        results.forEach(result => {
          console.log(result)
          let template = `<div><img src="${result.Poster}"/>
          <button><a href="movie.html?movieId=${result.imdbID}" target="_blank">Movie Details</a></button>
          </div>`
          console.log(template);
          showResults.insertAdjacentHTML('beforeend', template);
        })
        removePreload();
      })
      .catch(error => {
        console.log(error)
      });
});



// begin pre-loader

// var loader = document.getElementById('preloader');
// window.addEventListener('load', () => {
//   loader.style.display = "none";
// })

function addPreload() {
  $('.preload').attr('id','preloader');
} 
function removePreload() {
  $('.preload').removeAttr('id');
} 
 




// Initialize swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: { 
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// menu-btn-fixed-when-scroll

  $(window).scroll(function(){                              
    if($(document).scrollTop > 20) {
      $('.navigation').addClass('fix-icon');
    }
    else {
      $('.navigation').removeClass('fix-icon');
    }
  });


 