export class UIServices{
    constructor(){

        this.servicesListUI = document.getElementById("servicesinfo");
        this.servicesTodosListUI = document.getElementById("servicestodosss");
    }
    addAllServicessToUI(services){

        let resultServicesUI = "" ;
    
        services.forEach(employee =>{
  
            resultServicesUI +=`
        <div class="col-lg-4 col-sm-6">

            <div id="servicescontentcolor" class="choose-item">

                <img id="servicesred"><hr id="serviceshr">
                
                <h5 id="services-h5">${employee.service}</h5>
                <p id="services-p" >${employee.service1}</p>

            </div>

        </div>

        <div class="col-lg-4 col-sm-6">

            <div id="servicescontentcolor" class="choose-item">

                <img id="servicesred" alt=""><hr id="serviceshr">

                <h5 id="services-h5" >${employee.service2}</h5>
                <p id="services-p" >${employee.service3}</p>

            </div>

        </div>

        <div class="col-lg-4 col-sm-6">

            <div id="servicescontentcolor" class="choose-item">

                <img  id="servicesred" alt=""><hr id="serviceshr">

                <h5 id="services-h5" >${employee.service4}</h5>
                <p id="services-p" >${employee.service5}</p>

            </div>

        </div>
            
            `;
              
          });
            
          this.servicesListUI.innerHTML = resultServicesUI;

    }
    addAllServicessTodosToUI(servicestodos){

        let resultServicesTodosUI = "" ;
    
        servicestodos.forEach(employee =>{
  
            resultServicesTodosUI +=`
            
            <div class="col-lg-3 col-md-6">

                <div class="feature_item">
                    
                    <img id="servicesimg-servis"  src="images/web_site.png" alt="">

                    <h4 id="services-h4">${employee.servicestodo}</h4>
                    <p id="services-h4-p">${employee.servicestodo1}</p>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">
                
                <div class="feature_item">

                    <img id="servicesimg-servis"  src="/images/mobil_app.png" alt="">

                    <h4 id="services-h4" >${employee.servicestodo2}</h4>
                    <p id="services-h4-p">${employee.servicestodo3}</p>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">

                <div class="feature_item">

                    <img  id="servicesimg-servis"src="/images/sosyal_mananget.png" alt="">

                    <h4 id="services-h4">${employee.servicestodo4}</h4>
                    <p id="services-h4-p"></${employee.servicestodo5}p>

                </div>

            </div>

            <div class="col-lg-3 col-md-6">
                
                <div class="feature_item">

                    <img id="servicesimg-servis" src="/images/ddanışmanlık_hizmeti.png" alt="">

                    <h4 id="services-h4" >${employee.servicestodo6}</h4>
                    <p id="services-h4-p">${employee.servicestodo7}</p>

                </div>
                
            </div>

            `;
              
        });
            
          this.servicesTodosListUI.innerHTML = resultServicesTodosUI;

    }
}