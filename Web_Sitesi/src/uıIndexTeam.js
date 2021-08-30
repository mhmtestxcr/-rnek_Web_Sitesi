export class UIIndexTeam{
    constructor(){
        this.teamsEmployeesListAdminUI = document.getElementById("homeproductpadding");
    }

    addAllIndexTeamToUI(indexteams){
        
        let resultIndexTeamsUI = "" ;
    
        indexteams.forEach(employee =>{
  
            resultIndexTeamsUI +=`

            <div class="row justify-content-center pb-4">

            <div class="col-md-12 heading-section text-center ftco-animate">

              <h2 id="h-team" class="mb-4">${employee.indexteam}</h2><hr>

          </div>

      </div>

      <div class="row justify-content-center">

        <div class="col-md-3 col-lg-2">

          <a href="#" class="course-category img d-flex align-items-center justify-content-center">

              <div class="text w-100 text-center">

                <h3 id="product-h">${employee.indexteam1}</h3>

            </div>
        </a>
      </div><hr style="opacity:0%">

      <div class="col-md-3 col-lg-2">

        <a href="#" class="course-category img d-flex align-items-center justify-content-center">

            <div class="text w-100 text-center">

              <h3>${employee.indexteam2}</h3>

          </div>
        </a>
      </div><hr style="opacity:0%">

      <div class="col-md-3 col-lg-2">

        <a href="#" class="course-category img d-flex align-items-center justify-content-center" >

            <div class="text w-100 text-center" style="border-radius: 50%; overflow: hidden;">

              <h3 id="urunpadding" >${employee.indexteam3}</h3>

          </div>
        </a>
      </div>
                
            `;
              
          });
            
          this.teamsEmployeesListAdminUI.innerHTML = resultIndexTeamsUI;
            
      }
    
}