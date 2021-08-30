export class UIIndexServicesAdmin{
    constructor(){

        this.indexServicesAdminList = document.getElementById("indexservicesadminID");

        this.indexServicesInput = document.getElementById("indexservicesinput");
                
        this.indexServicesInput1 = document.getElementById("indexservicesinput1");
                
        this.indexServicesInput2= document.getElementById("indexservicesinput2");
                
        this.indexServicesInput3 = document.getElementById("indexservicesinput3");

        this.indexServicesUpdateButton  = document.getElementById("indexservicesfoldernavbar");
    }
    addAllIndexServicesToUI(indexservice){

        let resultIndexServices = "" ;
    
        indexservice.forEach(employee =>{
  
            resultIndexServices +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">1.Kare</th>
                <th scope="col">2.Kare</th>
                <th scope="col">3.Kare</th>
                <th scope="col">4.Kare</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.indexservices}</td>
                <td>${employee.indexservices1}</td>
                <td>${employee.indexservices2}</td>
                <td>${employee.indexservices3}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="indexservicestrash" class="fa fa-trash"></i></a>
                            <a id="indexservicesfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.indexServicesAdminList.innerHTML = resultIndexServices;
    }     
    clearInputs(){

        this.indexServicesInput.value = "";
        this.indexServicesInput1.value = "";
        this.indexServicesInput2.value = "";
        this.indexServicesInput3.value = "";

    }
    addIndexServicesToUI(employee){

        this.indexServicesAdminList.innerHTML += `

        <table id="esat" class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${employee.indexservices}</td>
            <td>${employee.indexservices1}</td>
            <td>${employee.indexservices2}</td>
            <td>${employee.indexservices3}</td>
            <td >${employee.id}</td>
                       
                        <td><a class="btn"><i id="indexservicestrash" class="fa fa-trash"></i></a></td>
                        <td><a id="indexservicesfolder" class="btn"><i class="fa fa-folder"></i></a></td>
        </tbody>
        <thead>
        
      `;

    }
    deleteIndexServicesFromUIAdmin(element){

      element.remove();

    }
    indexServicesToogleUpdateButton(target){

      if(this.indexServicesUpdateButton.style.display === "none"){

        this.indexServicesUpdateButton.style.display = "block";
        this.addServicesInfoToInputs(target);
  
      }
      else{
        
        this.indexServicesUpdateButton.style.display = "none";
        this.clearInputs();

      }
    }
    addServicesInfoToInputs(target){

      const children = target.children;

      this.indexServicesInput.value = children[0].children[0].textContent;
      this.indexServicesInput1.value = children[0].children[1].textContent;
      this.indexServicesInput2.value = children[0].children[2].textContent;
      this.indexServicesInput3.value = children[0].children[3].textContent; 

  }
  updateIndexServicesOnUI(employee){
    this.indexServicesAdminList.innerHTML =`
          
    <table id="esat" class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${employee.indexservices}</td>
        <td>${employee.indexservices1}</td>
        <td>${employee.indexservices2}</td>
        <td>${employee.indexservices3}</td> 
        <td>${employee.id}</td>
                    <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                    <td><a id="folder" class="btn"><i class="fa fa-folder"></i></a></td><br>

    `;
    this.clearInputs();
  }
}