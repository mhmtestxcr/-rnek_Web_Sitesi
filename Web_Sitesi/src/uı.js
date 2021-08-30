export class UI{

    constructor(){

        this.employeesList = document.getElementById("indexaboutID");

        this.teamsEmployeesListAdminUI = document.getElementById("homeproductpadding");

        this.indexServicesListUI = document.getElementById("homeservicespadding");
   
    }

    addAllEmployeesToUI(employees){

        let result = "";

        employees.forEach(employee =>{

            result +=`

            <div class="six columns">
    
              <h3 id="homeabout" ><span class="typcn typcn-device-desktop icon"></span>${employee.deneme}</h3>

              <p id="write-p">${employee.stpost}</p>
    
            </div>
    
            <div class="six columns">
    
              <h3 id="homeabout" ><span class="typcn typcn-pen icon"></span>${employee.deneme1}</h3>
    
              <p id="write-p" >${employee.stpost1}</p>
    
            </div>
    
            <div class="row">
    
              <div class="six columns">
    
                <h3 id="homeabout"><span class="typcn typcn-cog-outline icon"></span>${employee.deneme2}</h3>
    
                <p id="write-p">${employee.stpost2}</p>
    
              </div>
    
              <div class="six columns">
    
                <h3 id="homeabout"><span class="typcn typcn-lightbulb icon"></span>${employee.deneme3}</h3>
    
                <p id="write-p">${employee.stpost3}</p> 
          `;
            
        });

        this.employeesList.innerHTML = result;
    }
    clearInputs(){
        this.indexaboutinput.value = "";
        this.indexaboutinput1.value = "";
        this.indexaboutinput2.value = "";
        this.indexaboutinput3.value = "";
    }
    addEmployeesToUI(employee){

    this.employeesList.innerHTML += `

      <div class="six columns">

        <h3 id="homeabout" ><span class="typcn typcn-device-desktop icon"></span>${employee.deneme}</h3>

        <p id="write-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      </div>

      <div class="six columns">

        <h3 id="homeabout" ><span class="typcn typcn-pen icon"></span>${employee.deneme1}</h3>

        <p id="write-p" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      </div>

      <div class="row">

        <div class="six columns">

          <h3 id="homeabout"><span class="typcn typcn-cog-outline icon"></span>${employee.deneme2}</h3>

          <p id="write-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        </div>

        <div class="six columns">

          <h3 id="homeabout"><span class="typcn typcn-lightbulb icon"></span>${employee.deneme3}</h3>

          <p id="write-p"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

        </div>
      </div>
    </div> 
              
  `;
    }
    deleteEmployeeFromUIAdmin(element){
      element.remove();
    }

    addAllIndexTeamToUI(indexteams){
        
      let resultIndexTeamsUI = "" ;
  
      indexteams.forEach(employee =>{

          resultIndexTeamsUI +=`

            <div class="container">

              <div class="row justify-content-center pb-4">

                div class="col-md-12 heading-section text-center ftco-animate">

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
            <div class="col-md-12 text-center mt-5">

            <a id="product-btn" href="/product.html" class="btn btn-secondary">Detaylı bilgi için </a><br><br><br><br>

        </div>
        </div>
        </div>
              
          `;
            
        });
          
        this.teamsEmployeesListAdminUI.innerHTML = resultIndexTeamsUI;
          
    }
    addAllIndexServiceToUI(indexservice){

      let resultIndexServicesUI = "" ;
  
      indexservice.forEach(employee =>{

          resultIndexServicesUI +=`

 
          <div class="container">

          <div class="heading_container">
      
            <h2 id="homeservices-h"> <span>Hizmetler</span></h2>
      
          </div>
      
          <div class="row">
      
            <div class="col-lg-6 ">
      
              <div class="img-container tab-content">
      
                <div class="img-box tab-pane fade show active" id="img1" role="tabpanel">
      
                  <img src="images/isar_logo.png"/>
      
                </div>
      
              </div>
      
            </div>
      
            <div class="col-lg-6">
      
              <div class="detail-container nav nav-tabs" id="myTab" role="tablist">
      
                <div class="detail-box "  data-toggle="tab" role="tab" aria-selected="true">
                  <h4>
      
                    ${employee.indexservices} <br/>
                    
                  </h4>
      
                </div>
      
                <div class="detail-box"  data-toggle="tab" role="tab" aria-selected="false">
      
                  <h4>
      
                  ${employee.indexservices1} <br />
                
      
                  </h4>
                </div>
      
                <div class="detail-box" id="img2-tab" data-toggle="tab" role="tab" aria-selected="false">
      
                  <h4>
                  ${employee.indexservices2} <br />
                 
                  </h4>
      
                </div>
      
                <div class="detail-box" id="img2-tab" data-toggle="tab" href="#img4" role="tab" aria-selected="false">
      
                  <h4>
                  ${employee.
                    indexservices3}<br />
                  
      
                  </h4>
      
                </div>
      
              </div>
      
            </div>
      
          </div>
      
          <div class="btn-box">
      
            <a href="/services.html">
      
              Detaylı bilgi için 
      
            </a>
      
          </div>
      
        </div>    
          `;
            
        });
          
        this.indexServicesListUI.innerHTML = resultIndexServicesUI;
    }
    

}