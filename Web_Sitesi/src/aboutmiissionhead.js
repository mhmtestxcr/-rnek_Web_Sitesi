export class UIAboutMissionHeadAdmin{
    constructor(){
     
        this.aboutMissionHeadAdminList = document.getElementById("aboutmissonheadadminID");

        this.aboutMisionHeadUpdateButton = document.getElementById("aboutmissionheadfoldernavbar");

        this.aboutMissionHeadInput = document.getElementById("aboutmissionheadinput");

        this.aboutMissionHeadInput1 = document.getElementById("aboutmissionheadinput1");

        this.aboutMissionHeadInput2 = document.getElementById("aboutmissionheadinput2");

        this.aboutMissionHeadInput3 = document.getElementById("aboutmissionheadinput3");

    }

    addAllAboutMissionHeadToUI(aboutmissionheads){

        let resultAboutHeads= "" ;
    
        aboutmissionheads.forEach(employee =>{
  
            resultAboutHeads +=`
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
                <td>${employee.aboutmissionhead}</td>
                <td>${employee.aboutmissionhead1}</td>
                <td>${employee.aboutmissionhead2}</td>
                <td>${employee.aboutmissionhead3}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="aboutmissionheadtrash" class="fa fa-trash"></i></a>
                            <a id="aboutmissionheadfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.aboutMissionHeadAdminList.innerHTML = resultAboutHeads;
    }     
    clearInputs(){

        this.aboutMissionHeadInput.value = "";
        this.aboutMissionHeadInput1.value = "";
        this.aboutMissionHeadInput2.value = "";
        this.aboutMissionHeadInput3.value = "";

    }
    addAboutMissionHeadToUI(employee){

        this.aboutMissionHeadAdminList.innerHTML += `

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
            <td>${employee.aboutmissionhead}</td>
            <td>${employee.aboutmissionhead1}</td>
            <td>${employee.aboutmissionhead2}</td>
            <td>${employee.aboutmissionhead3}</td>
            <td >${employee.id}</td>
                       
                        <td><a class="btn"><i id="aboutmissionheadtrash" class="fa fa-trash"></i></a></td>
                        <td><a id="aboutmissionheadfolder" class="btn"><i class="fa fa-folder"></i></a></td>
  
        
    
        </tbody>
        <thead>
        
      `;
    }
    deleteAboutMissionHeadFromUIAdmin(element){
        
        element.remove();

    }
    aboutMissionHeadToogleUpdateButton(target){

        if(this.aboutMisionHeadUpdateButton.style.display === "none"){

            this.aboutMisionHeadUpdateButton.style.display = "block";
            this. addMissionHeadInfoToInputs(target);
      
          }
          else{
            
            this.aboutMisionHeadUpdateButton.style.display = "none";
            this.clearInputs();
    
          }

    }

    addMissionHeadInfoToInputs(target){

        const children = target.children;

        this.aboutMissionHeadInput.value = children[0].children[0].textContent;
        this.aboutMissionHeadInput1.value = children[0].children[1].textContent;
        this.aboutMissionHeadInput2.value = children[0].children[2].textContent;
        this.aboutMissionHeadInput3.value = children[0].children[3].textContent; 

    }

    updateAboutMissionHeadOnUI(employee){

      this.aboutMissionHeadAdminList.innerHTML =`      
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
            <td>${employee.aboutmissionhead}</td>
            <td>${employee.aboutmissionhead1}</td>
            <td>${employee.aboutmissionhead2}</td>
            <td>${employee.aboutmissionhead3}</td> 
            <td>${employee.id}</td>
                        <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                        <td><a id="folder" class="btn"><i class="fa fa-folder"></i></a></td><br>
    
        `;
        this.clearInputs();
      } 
}