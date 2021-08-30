export class UIAbout{
    constructor(){
        
      this.aboutMissionHeadListUI = document.getElementById("esat");

      this.aboutTeamsListUI = document.getElementById("aboutteamUI");
      
      this.aboutQuestionsListUI = document.getElementById("aboutcontentol");

      this.aboutSponsorListUI = document.getElementById("aboutsponsor");


    }
    addAllAboutMissionHeadsToUI(aboutmissionheads){

        let resultAboutMissionHeadUI = "" ;
    
        aboutmissionheads.forEach(employee =>{
  
            resultAboutMissionHeadUI +=`

            <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
      
              <div class="px-0 px-lg-3"><img class="img-fluid mb-4" src="/images/researchers.png" width="100" alt="..." />
      
                 <h3 id="about-h3" class="h5 mb-4 font-base">${employee.aboutmissionhead}</h3> 
      
                <p id="write-p" class="lh-lg">lorem10</p>
      
              </div>
      
            </div>
      
            <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
      
              <div class="px-0 px-lg-3"><img class="img-fluid mb-4" src="/images/librarian.png" width="100" alt="..." />
      
                <h3 id="about-h3" class="h5 mb-4 font-base">${employee.aboutmissionhead1}</h3>
      
                <p id="write-p" class="lh-lg">lorem10</p>
      
              </div>
      
            </div>
      
            <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
      
              <div class="px-0 px-lg-3"><img class="img-fluid mb-4" src="/images/societies.png" width="100" alt="..." />
      
                <h3 id="about-h3" class="h5 mb-4 font-base">${employee.aboutmissionhead3}</h3>
      
                <p id="write-p" class="lh-lg">lorem10</p>
      
              </div>
      
            </div>
      
            <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0 text-center">
      
              <div class="px-0 px-lg-3"><img class="img-fluid mb-4" src="/images/authors.png" width="100" alt="..." />
      
                <h3 id="about-h3" class="h5 mb-4 font-base">${employee.aboutmissionhead3}</h3>
      
                <p id="write-p" class="lh-lg">lorem10</p>
      
              </div>
      
            </div>
            
            `;
              
          });
            
          this.aboutMissionHeadListUI.innerHTML = resultAboutMissionHeadUI;
            
    }
    addAllAbotTeamsToUI(aboutteams){
     
      let resultAboutTeamUI = "" ;
    
      aboutteams.forEach(employee =>{

          resultAboutTeamUI +=`
          <div class="container-lg">

          <div class="row flex-center">
      
            <div class="col-12 col-lg-10 col-xl-12">
      
              <div  class="bg-holder"></div>
      
              <h6 id="about-h6" class="fs-3 fs-lg-4 fw-bold lh-sm">Takım İle Tanışmaya Hazır mısın ?</h6>
      
            </div><hr>
      
                    <div class="carousel slide pt-3" id="carouselExampleDark" data-bs-ride="carousel">
      
                    <div class="carousel-inner">
      
                      <div class="carousel-item active" data-bs-interval="10000">
      
                        <div class="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
      
                         <div class="col-md-4 mb-5 mb-md-0">
      
                            <div class="card h-100 shadow">
      
                              <div class="card-body my-3">
      
                                 <div class="align-items-xl-center d-block d-xl-flex px-3"><img class="img-fluid me-3 me-md-2 me-lg-3" src="${employee.aboutteam}" width="50" alt="" />
      
                                  <div class="flex-1 align-items-center pt-2">
      
                                    <h5 id="about-h5" class="mb-0 fw-bold">${employee.aboutteam1}</h5>
      
                                    <p id="about-p" class="fw-normal text-black">${employee.aboutteam2}</p>
      
                                  </div>
      
                                </div>
                                <p id="write-p" class="mb-0 px-3 px-md-2 px-xxl-3"><br>${employee.aboutteam3}</p>
                              </div>
                           </div>
      
                          </div>
                        </div>
      
                      </div>
      
                  </div>

          
          `;
            
        });
          
        this.aboutTeamsListUI.innerHTML = resultAboutTeamUI;

  }
  addAllAboutQuestionsToUI(aboutquestions){

    let resultAboutQuestionUI = "" ;
    
    aboutquestions.forEach(employee =>{

        resultAboutQuestionUI +=`

        <li>${employee.aboutquestion}</li>
        <li>${employee.aboutquestion1}</li>
        <li>${employee.aboutquestion2}</li>
        <li>${employee.aboutquestion3}</li>
  
        
        `;
          
      });
        
    this.aboutQuestionsListUI.innerHTML = resultAboutQuestionUI;

  }

  addAllAboutSponsorsToUI(aboutsponsors){

    let resultAboutSponsorUI = "" ;
    
    aboutsponsors.forEach(employee =>{

        resultAboutSponsorUI +=`


        <div class="col-sm-6 col-lg-4 col-xl-3 text-xl-start"><img class="mb-4" src="${employee.aboutsponsor}" alt="universities" /></div>

        <div class="col-sm-6 col-lg-4 col-xl-3 text-xl-start"><img class="mb-4" src="${employee.aboutsponsor1}" alt="universities" /></div>

        <div class="col-sm-6 col-lg-4 col-xl-3 text-xl-start"><img class="mb-4" src="${employee.aboutsponsor2}" alt="universities" /></div>

        <div class="col-sm-6 col-lg-4 col-xl-3 text-xl-start"><img class="mb-4" src="${employee.aboutsponsor3}" alt="universities" /></div>
 
  
        
        `;
          
      });
        
    this.aboutSponsorListUI.innerHTML = resultAboutSponsorUI;

  }
  




        
    
}

