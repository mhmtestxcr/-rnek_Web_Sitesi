export class UITeamAdmin{

    constructor(){

        this.teamsEmployeesListAdmin1 = document.getElementById("hometeamimg");
    }

    addAllTeamEmployeesToUI(teams){

        let resultTeamsAdmin1 = "" ;
    
        teams.forEach(employee =>{
  
            resultTeamsAdmin1 +=`

            <div  class="container">

            <div class="row">

              <div class="col-lg-6 mb-6">

                <div  class="d-flex align-items-start"><img id="productAdmin-img" class="me-3" src="${employee.teamemployees}" width="200" alt="services" />

                  <div class="flex-1">

                    <p class="fs-1 text-1200">${employee.teamemployees1}</p><hr>

                    <h6 class="mb-1 fw-bold fs-0">${employee.teamemployees2}</h6>

                    <h6 class="fs-0">${employee.teamemployees3}</h6>

                  </div>

                </div><br><br><br><br>
                
            `;
              
          });
            
          this.teamsEmployeesListAdmin1.innerHTML = resultTeamsAdmin1;
            
      }
      clearInputss(){

        this.hometeamsubmit.value = "";
        this.hometeamsubmit1.value = "";
        this.hometeamsubmit2.value = "";
        this.hometeamsubmit3.value = "";

    }
}
