let personData=[];
(async function () {
    let resullt = await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=2dc4f3b7280c70e5009487448e8c74f4`);
    let respponsePerson =await resullt.json();
    personData =respponsePerson.results;
    console.log(personData);
   
    Persons();
})();


function Persons(){
    let Persons=``;
    for(let i=10; i<20 ; i++){
        Persons+= `
  
         <div class="col-md-3  secondSection" >
         <div class="position-relative member pb-2 pt-2" id="maybeHover" onclick="goToPerson(${personData[i].id})" >
        <img src="${
            personData[i].profile_path
            ? `https://image.tmdb.org/t/p/original${personData[i].profile_path}`
            : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfVjB2na1ZAD9grwxlYq81OuK8kZD2ugOFQmVrz7jxzdhd-3dpu9rLjbpecyg212SG3M&usqp=CAU`
        }"
            
            class="img-fluid w-100 mb-4  position-relative" alt="">

        <div class="ccaption text-center">
                <h2 class="titlee">${personData[i].name}</h2>
        </div>
        
        </div>
       </div>
       
       `;
    }
    document.getElementById("Section6").innerHTML+=Persons;
}
function goToPerson(movieId) {

    // Route 
    window.location.href = `Person/PersonDetails.html?id=${movieId}`;
}