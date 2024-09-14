let resulDataa = [];
(async function () {
  let resullt = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=2dc4f3b7280c70e5009487448e8c74f4`
  );
  let respponse = await resullt.json();
  resulDataa = respponse.results;
  console.log(resulData);
  ShowTrend();
  TvD();
})();
function ShowTrend() {
  let fourth=`` ;
 
  for (let i = 0; i < 14; i++) {
    fourth += `
             <div class="col-md-3 secondSection ">
             <div class="position-relative member pb-2 pt-2" id="maybeHover" onclick="goToDetailsTv(${resulDataa[i].id})" >
            <img src="https://image.tmdb.org/t/p/original${resulDataa[i].poster_path}" class="w-100 mb-4 position-relative " alt="">
    
            <div class="ccaption text-center">
                    <h2 class="titlee">${resulDataa[i].name}</h2>
            </div>
            <div class="vote bg-danger font-weight-bolder fs-5 position-absolute text-bg-light text-center">${resulDataa[i].vote_average}</div>
            </div>
           </div>
           
           `;
  }
  document.getElementById("Section4").innerHTML += fourth;
}
function goToDetailsTv(tvid) {
  // Route
  window.location.href = `Tv/Tv.html?id=${tvid}`;
}
