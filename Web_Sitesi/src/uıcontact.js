export class UIContactUI{
    constructor(){
        
        this.contactListUI = document.getElementById("contactlist");

    }
    addAllContactsToUI(contacts){

        let resultContactUI= "" ;
    
        contacts.forEach(employee =>{
  
            resultContactUI +=`

            <div id="contactrow" class="col-12 col-md-4 p-5 mt-3">

            <a href="#"><img src="${employee.contact}" class="rounded-circle img-fluid border"></a>

            <h5 id="contact-h5" class="text-center mt-3 mb-3">${employee.contact1}</h5>

            <p id="contact-p" class="text-center"><a class="btn">${employee.contact2}</a></p>

        </div>

        <div  id="contactrow" class="col-12 col-md-4 p-5 mt-3">

            <a href="#"><img src="${employee.contact3}" class="rounded-circle img-fluid border"></a>

            <h2 id="contact-h5" class="h5 text-center mt-3 mb-3">${employee.contact4}</h2>

            <p id="contact-p" class="text-center"><a class="btn">${employee.contact5}</a></p>

        </div>

        <div  id="contactrow" class="col-12 col-md-4 p-5 mt-3">

            <a href="#"><img src="${employee.contact6}" class="rounded-circle img-fluid border"></a>

            <h2 id="contact-h55" class="h5 text-center mt-3 mb-3">${employee.contact7}</h2>

            <p id="contact-p" class="text-center"><a class="btn">${employee.contact8}</a></p>

        </div>

            `;
              
          });
            
          this.contactListUI.innerHTML = resultContactUI;
    }
}