export class UIServicesTodoAdmin{
    constructor(){

        
        this.servicesTodosList = document.getElementById("servicestodosID");

        this.servicesTodosInput = document.getElementById("servicestodosinput");

        this.servicesTodosInput1 = document.getElementById("servicestodosinput1");
        
        this.servicesTodosInput2 = document.getElementById("servicestodosinput2");

        this.servicesTodosInput3 = document.getElementById("servicestodosinput3");

        this.servicesTodosInput4 = document.getElementById("servicestodosinput4");

        this.servicesTodosInput5 = document.getElementById("servicestodosinput5");

        this.servicesTodosInput6 = document.getElementById("servicestodosinput6");

        this.servicesTodosInput7 = document.getElementById("servicestodosinput7");

        this.servicesTodosUpdateButton = document.getElementById("servicestodosfoldernavbar");

    }
    addAllServicesTodosToUI(servicestodos){
        let resultServicesTodos= "" ;
    
        servicestodos.forEach(employee =>{
  
            resultServicesTodos +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">1.Başlık</th>
                <th scope="col">1.Yazı</th>
                <th scope="col">2.Başlık</th>
                <th scope="col">2.Yazı</th>
                <th scope="col">3.Başlık</th>
                <th scope="col">3.Yazı</th>
                <th scope="col">4.Başlık</th>
                <th scope="col">4.Yazı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.servicestodo}</td>
                <td>${employee.servicestodo1}</td>
                <td>${employee.servicestodo2}</td>
                <td>${employee.servicestodo3}</td>
                <td>${employee.servicestodo4}</td>
                <td>${employee.servicestodo5}</td>
                <td>${employee.servicestodo6}</td>
                <td>${employee.servicestodo7}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="servicestodostrash" class="fa fa-trash"></i></a>
                            <a id="servicestodosfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.servicesTodosList.innerHTML = resultServicesTodos;
    }
    clearInputs(){

        this.servicesTodosInput.value = "";
        this.servicesTodosInput1.value = "";
        this.servicesTodosInput2.value = "";
        this.servicesTodosInput3.value = "";
        this.servicesTodosInput4.value = "";
        this.servicesTodosInput5.value = "";
        this.servicesTodosInput6.value = "";
        this.servicesTodosInput7.value = "";

    }
    addServicesTodosToUI(){

        this.servicesTodosList.innerHTML += `

        <table id="esat" class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>${employee.servicestodo}</td>
          <td>${employee.servicestodo1}</td>
          <td>${employee.servicestodo2}</td>
          <td>${employee.servicestodo3}</td>
          <td>${employee.servicestodo4}</td>
          <td>${employee.servicestodo5}</td>
          <td>${employee.servicestodo6}</td>
          <td>${employee.servicestodo7}</td>
          <td>${employee.id}</td>        
                        <td><a class="btn"><i id="servicestodostrash" class="fa fa-trash"></i></a></td>
                        <td><a id="servicestodosfolder" class="btn"><i class="fa fa-folder"></i></a></td>
  
        
    
        </tbody>
        <thead>
        
      `;
    }
    deleteServicesTodosFromUIAdmin(element){

        element.remove();
    }
    servicesTodosToogleUpdateButton(target){

        if(this.servicesTodosUpdateButton.style.display === "none"){

            this.servicesTodosUpdateButton.style.display = "block";
            this.addServicesTodosInfoToInputs(target);
      
          }
          else{
            
            this.servicesTodosUpdateButton.style.display = "none";
            this.clearInputs();
    
          }
    }
    addServicesTodosInfoToInputs(target){

        const children = target.children;

        this.servicesTodosInput.value = children[0].children[0].textContent;
        this.servicesTodosInput1.value = children[0].children[1].textContent;
        this.servicesTodosInput2.value = children[0].children[2].textContent;
        this.servicesTodosInput3.value = children[0].children[3].textContent;
        this.servicesTodosInput4.value = children[0].children[4].textContent;
        this.servicesTodosInput5.value = children[0].children[5].textContent;
        this.servicesTodosInput6.value = children[0].children[6].textContent;
        this.servicesTodosInput7.value = children[0].children[7].textContent;

    }

    updateServicesTodosOnUI(employee){

        this.servicesTodosList.innerHTML +=`      
        <table id="esat" class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>${employee.servicestodo}</td>
          <td>${employee.servicestodo1}</td>
          <td>${employee.servicestodo2}</td>
          <td>${employee.servicestodo3}</td>
          <td>${employee.servicestodo4}</td>
          <td>${employee.servicestodo5}</td>
          <td>${employee.servicestodo6}</td>
          <td>${employee.servicestodo7}</td>
          <td>${employee.id}</td>

                        <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                        <td><a id="servicesfolder" class="btn"><i class="fa fa-folder"></i></a></td><br>
    
        `;
        this.clearInputs();

    }
    
}