let myprofileData = [];
let count = 3;
function increase(max) {
  if (count < max) {
    count++;
  } else {
    count = max;
  }
  fetchperson();
}
function decrease() {
  if (count < 1) {
    count = 1;
  } else {
    count--;
  }

  fetchperson();
}
async function fetchperson() {
  let resultPerson = await fetch(
    `https://api.themoviedb.org/3/trending/person/day?api_key=2dc4f3b7280c70e5009487448e8c74f4&page=${count}`
  );
  let respponsee = await resultPerson.json();
  myprofileData = respponsee.results;
  console.log(myprofileData);
  PersonsCard(myprofileData);
}
function PersonsCard(people) {
  let Personss = ``;
  for (let i = 0; i < people.length; i++) {
    Personss += `
        
         <div class="col-md-3 secondSection" >
         <div class="position-relative member pb-2 pt-2" id="maybeHover" onclick="goToPerson(${
           people[i].id
         })" >
         
        <img src="${
          people[i].profile_path
            ? `https://image.tmdb.org/t/p/original${people[i].profile_path}`
            : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfVjB2na1ZAD9grwxlYq81OuK8kZD2ugOFQmVrz7jxzdhd-3dpu9rLjbpecyg212SG3M&usqp=CAU`
        }"
            
            class="img-fluid w-100 mb-4  position-relative" alt="">

        <div class="ccaption text-center">
                <h2 class="titlee">${people[i].name}</h2>
               
                
        </div>
      
           
        </div>
       </div>
       
       `;
  }
  document.getElementById("personpage").innerHTML = Personss;
}
fetchperson();
function goToPerson(movieId) {
  // Route
  window.location.href = `PersonDetails.html?id=${movieId}`;
}
