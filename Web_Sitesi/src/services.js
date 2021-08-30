export  class UIServicesAdmin{
    constructor(){

        this.servicesAdminList = document.getElementById("servicesadminID");

        this.servicesInput = document.getElementById("servicesinput");

        this.servicesInput1 = document.getElementById("servicesinput1");

        this.servicesInput2 = document.getElementById("servicesinput2");

        this.servicesInput3 = document.getElementById("servicesinput3");

        this.servicesInput4 = document.getElementById("servicesinput4");

        this.servicesInput5 = document.getElementById("servicesinput5");

        this.servicesUpdateButton = document.getElementById("servicesfoldernavbar");

    }

    addAllServicesToUI(services){

        let resultServices= "" ;
    
        services.forEach(employee =>{
  
            resultServices +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">1.Başlık</th>
                <th scope="col">1.Yazı</th>
                <th scope="col">2.Başlık</th>
                <th scope="col">2.Yazı</th>
                <th scope="col">3.Başlık</th>
                <th scope="col">3.Yazı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.service}</td>
                <td>${employee.service1}</td>
                <td>${employee.service2}</td>
                <td>${employee.service3}</td>
                <td>${employee.service4}</td>
                <td>${employee.service5}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="servicestrash" class="fa fa-trash"></i></a>
                            <a id="servicesfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.servicesAdminList.innerHTML = resultServices;
    }
    clearInputs(){

        this.servicesInput.value = "";
        this.servicesInput1.value = "";
        this.servicesInput2.value = "";
        this.servicesInput3.value = "";
        this.servicesInput4.value = "";
        this.servicesInput5.value = "";

    }
    addServicesToUI(){

        this.servicesAdminList.innerHTML += `

        <table id="esat" class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>${employee.service}</td>
          <td>${employee.service1}</td>
          <td>${employee.service2}</td>
          <td>${employee.service3}</td>
          <td>${employee.service4}</td>
          <td>${employee.service5}</td>
          <td>${employee.id}</td>
      
                       
                        <td><a class="btn"><i id="servicestrash" class="fa fa-trash"></i></a></td>
                        <td><a id="servicesfolder" class="btn"><i class="fa fa-folder"></i></a></td>
  
        
    
        </tbody>
        <thead>
        
      `;
    }
    deleteServicesFromUIAdmin(element){

        element.remove();

    }
    servicesToogleUpdateButton(target){

        if(this.servicesUpdateButton.style.display === "none"){

            this.servicesUpdateButton.style.display = "block";
            this.addServicesInfoToInputs(target);
      
          }
          else{
            
            this.servicesUpdateButton.style.display = "none";
            this.clearInputs();
    
          }
    }
    addServicesInfoToInputs(target){
        
        const children = target.children;

        this.servicesInput.value = children[0].children[0].textContent;
        this.servicesInput1.value = children[0].children[1].textContent;
        this.servicesInput2.value =children[0].children[2].textContent;
        this.servicesInput3.value = children[0].children[3].textContent;
        this.servicesInput4.value = children[0].children[4].textContent;
        this.servicesInput5.value = children[0].children[5].textContent;

    }
    updateServicesOnUI(employee){

        this.servicesAdminList.innerHTML +=`      
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
          <td>${employee.service}</td>
          <td>${employee.service1}</td>
          <td>${employee.service2}</td>
          <td>${employee.service3}</td>
          <td>${employee.service4}</td>
          <td>${employee.service5}</td>
          <td>${employee.id}</td>
                        <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                        <td><a id="servicesfolder" class="btn"><i class="fa fa-folder"></i></a></td><br>
    
        `;
        this.clearInputs();

    }
}