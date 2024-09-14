document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = new URLSearchParams(window.location.search); //http://127.0.0.1:5500/movieDetails.html?id=917496
    const movieId = urlParams.get("id"); // 917496
  
    if (movieId) {
      let result = await fetch(
        `https://api.themoviedb.org/3/tv/${movieId}?api_key=2dc4f3b7280c70e5009487448e8c74f4`
      );
      let movieData = await result.json();
  
      TvDetails(movieData);
    }
  });
  
  function TvDetails(movie) {
    const movieDetailsDiv = document.getElementById("tvDetails");
  
    let detailsHTML = `
    
    <div class="all w-100"  style="background-image: url(https://image.tmdb.org/t/p/original${movie.backdrop_path})!important ; 
       background-size:cover ; border-radius: 3%; position: relative;">
    <div class="above"> 
     <div class="row p-3" >
  
          
          <div class="col-md-5 my-5">
      <img class="w-75"  style=" border-radius: 14%;" src="https://image.tmdb.org/t/p/original${movie.poster_path}">
      </div>
   <div class="col-md-7 secondSection mb-2">
      <h1 class="tagline text-white my-3">${movie.name}</h1>
      
      <div class="ParentType">
          <div class="type ng-star-inserted">
              <h3 class="d-flex text-center">Animation</h3>
              </div>
              <div class="type ng-star-inserted">
              <h3 class="d-flex text-center">Family</h3>
          </div>
          <div class="type ng-star-inserted">
              <h3 class="d-flex text-center">Adventure</h3></div><div class="type ng-star-inserted">
                  <h3 class="d-flex text-center">Comedy</h3></div>
              </div>
              <p  class="text-white my-4 h6">${movie.overview.split(" ").slice(0,14).join(" ")}</p>
              <h4 class="my-4"><span>Rate : </span>
                  <i  class="fa-solid fa-star" style="color:white"></i> 7.678</h4>
                  <h4 class="mb-4"><span>Vote count : </span> ${movie.vote_count}</h4>
                  <h4 class="mb-4"><span>first_air_date : </span> ${movie.first_air_date}</h4>
                  <div>
                  <button type="button" class="btn btn-danger" onclick="Back(${movie.id})">Back</button>
                   <a type="button"  href="${movie.homepage}" class="btn btn-warning ">Tap To View</a></div>
                   
          </div>
          </div>
          </div>
      `;
  
    movieDetailsDiv.innerHTML = detailsHTML;
  }
  
  function Back(id){
    window.location.href = `../Home.html?id=${id}`;
  }
 
