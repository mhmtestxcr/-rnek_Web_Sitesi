export class UIAdminMission{
    constructor(){

        this.aboutMissionAdminList = document.getElementById("aboutmissionadminID");

        this.aboutMissionInput = document.getElementById("aboutmissioninput");

        this.aboutMissionInput1 = document.getElementById("aboutmissioninput1");

        this.aboutMissionInput2 = document.getElementById("aboutmissioninput2");

        this.aboutMissionInput3 = document.getElementById("aboutmissioninput3");

        this.aboutMisionUpdateButton = document.getElementById("aboutmissionfoldernavbar");

    }
    addAllAboutMissionToUI(aboutmissions){

        let resultAboutMission= "" ;
    
        aboutmissions.forEach(employee =>{
  
            resultAboutMission +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">1.Resim altı başlık</th>
                <th scope="col">2.Resim altı başlık</th>
                <th scope="col">3.Resim altı başlık</th>
                <th scope="col">4.Resim altı başlık</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.aboutmission}</td>
                <td>${employee.aboutmission1}</td>
                <td>${employee.aboutmission2}</td>
                <td>${employee.aboutmission3}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="aboutmissiontrash" class="fa fa-trash"></i></a>
                            <a id="aboutmissionheadfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.aboutMissionAdminList.innerHTML = resultAboutMission;

    }

    clearInputs(){

        this.aboutMissionInput.value = "";
        this.aboutMissionInput1.value = "";
        this.aboutMissionInput2.value = "";
        this.aboutMissionInput3.value = "";

    }
    addAboutMissionToUI(employee){

        this.aboutMissionAdminList.innerHTML += `

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
            <td>${employee.aboutmission}</td>
            <td>${employee.aboutmission1}</td>
            <td>${employee.aboutmission2}</td>
            <td>${employee.aboutmission3}</td>
            <td >${employee.id}</td>
                       
                        <td><a class="btn"><i id="aboutmissiontrash" class="fa fa-trash"></i></a></td>
                        <td><a id="aboutmissionheadfolder" class="btn"><i class="fa fa-folder"></i></a></td>
  
        
    
        </tbody>
        <thead>
        
      `;
    }
    deleteAboutMissionFromUIAdmin(element){

        element.remove();

    }
    aboutMissionToogleUpdateButton(target){

        if(this.aboutMisionUpdateButton.style.display === "none"){

            this.aboutMisionUpdateButton.style.display = "block";
            this.addMissionInfoToInputs(target);
      
          }
          else{
            
            this.aboutMisionUpdateButton.style.display = "none";
            this.clearInputs();
    
          }

    }
    addMissionInfoToInputs(target){

        const children = target.children;

        this.aboutMissionInput.value = children[0].children[0].textContent;
        this.aboutMissionInput1.value = children[0].children[1].textContent;
        this.aboutMissionInput2.value =children[0].children[2].textContent;
        this.aboutMissionInput3.value = children[0].children[3].textContent;
    }
    updateAboutMissionOnUI(employee){

      this.aboutMissionAdminList.innerHTML =`      
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
            <td>${employee.aboutmission}</td>
            <td>${employee.aboutmission1}</td>
            <td>${employee.aboutmission2}</td>
            <td>${employee.aboutmission3}</td> 
            <td>${employee.id}</td>
                        <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                        <td><a id="folder" class="btn"><i class="fa fa-folder"></i></a></td><br>
    
        `;
        this.clearInputs();
    }
}