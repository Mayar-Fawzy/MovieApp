document.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search); //http://127.0.0.1:5500/profileDetails.html?id=917496
  const profileId = urlParams.get("id"); // 917496

  if (profileId) {
    let result = await fetch(
      `https://api.themoviedb.org/3/person/${profileId}?api_key=2dc4f3b7280c70e5009487448e8c74f4`
    );
    let profileData = await result.json();
      
    displayprofileDetails(profileData);
  }
});

function displayprofileDetails(profile) {
  const profileDetailsDiv = document.getElementById("profileDetails");

  let detailsHTML = `
  
   <div class="row m-5 p-1 my-5" >
   <div class="col-md-5 ">
   <img src="${
            profile.profile_path
            ? `https://image.tmdb.org/t/p/original${profile.profile_path}`
            : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfVjB2na1ZAD9grwxlYq81OuK8kZD2ugOFQmVrz7jxzdhd-3dpu9rLjbpecyg212SG3M&usqp=CAU`
        }"
            
            class="img-fluid w-100 mb-4  position-relative" alt="">
    </div>
 <div class="col-md-7 mt-5">
    <h1 class="tagline text-white my-1">${profile.name}</h1>
    
  
           
           
                <h4 class="mb-4"><span>popularity: </span> ${profile.popularity}</h4>
                
                   <h4 class="mb-4"><span>department: </span> ${profile.known_for_department}</h4>
               
                <div>
                <button type="button" class="btn btn-danger" onclick="Back(${profile.id})">Back</button>
               
        </div>
        </div>
      
    `;

  profileDetailsDiv.innerHTML = detailsHTML;
}

function Back(id){
  window.location.href = `../Home.html?id=${id}`;
}
