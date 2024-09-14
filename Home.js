let resulData=[];
(async function () {
    let resullt = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=2dc4f3b7280c70e5009487448e8c74f4`);
    let respponse =await resullt.json();
    resulData =respponse.results;
    console.log(resulData);
    Display();  
    
    
})();
 
function Display(){
    let cartona=``;
    for(let i=0; i<16 ; i++){
        cartona+= `
         <div class="col-md-3 secondSection" >
         <div class="position-relative member pb-2 pt-2" id="maybeHover" onclick="goToDetails(${resulData[i].id})" >
        <img src="https://image.tmdb.org/t/p/original${resulData[i].poster_path}" class="w-100 mb-4 position-relative " alt="">

        <div class="ccaption text-center">
                <h2 class="titlee">${resulData[i].title}</h2>

        
        </div>
        <div class="vote bg-danger font-weight-bolder fs-5 position-absolute text-bg-light text-center">${resulData[i].vote_average}</div>
         
      
       </div>
       </div>

       `;
    }
    document.getElementById("first").innerHTML = cartona;
   
}

function goToDetails(movieId) {

    // Route 
    window.location.href = `./Movies/movieDetails.html?id=${movieId}`;
}

    
let inputserarch = document.getElementById("inputserarch");

function Search(yourValue){
    var cartonaa=``;

    for(var i=0 ;i < resulData.length ; i++)
        {
        if( resulData[i].title.toLowerCase().includes(yourValue.toLowerCase())==true)
            {
            cartonaa+=`  <div class="col-md-3" >
         

         <div class="position-relative member pb-2 pt-2" id="maybeHover" onclick="goToDetails(${resulData[i].id})" >
        <img src="https://image.tmdb.org/t/p/original${resulData[i].poster_path}" class="w-100 mb-4 position-relative " alt="">
        <h2 class="ccaption text-center">${resulData[i].title}</h2>
        <div class="vote bg-danger font-weight-bolder fs-5 position-absolute text-bg-light text-center">${resulData[i].vote_average}</div>
         
      
                      </div>
       </div>`
        document.getElementById("first").innerHTML=cartonaa;
    }
       }
}