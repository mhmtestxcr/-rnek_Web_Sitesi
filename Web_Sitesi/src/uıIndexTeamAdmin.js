export class UIIndexTeamAdmin{
    constructor(){
        this.indexTeamAdminList = document.getElementById("indexteamadminID");

        this.indexTeamInput = document.getElementById("indexteaminput");

        this.indexTeamInput1 = document.getElementById("indexteaminput1");

        this.indexTeamInput2 = document.getElementById("indexteaminput2");

        this.indexTeamInput3 = document.getElementById("indexteaminput3");

        this.indexTeamUpdateButton  = document.getElementById("indexteamfoldernavbar");

    }

    addAllIndexTeamToUIAdmin(indexteams){
        
        let resultIndexTeams = "" ;
    
        indexteams.forEach(employee =>{
  
            resultIndexTeams +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">Başlık</th>
                <th scope="col">1.Button</th>
                <th scope="col">2.Button</th>
                <th scope="col">3.button</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.indexteam}</td>
                <td>${employee.indexteam1}</td>
                <td>${employee.indexteam2}</td>
                <td>${employee.indexteam3}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="indexteamtrash" class="fa fa-trash"></i></a>
                            <a id="indexteamfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.indexTeamAdminList.innerHTML = resultIndexTeams;
            
      }
      clearInputsss(){

        this.indexTeamInput.value = "";
        this.indexTeamInput1.value = "";
        this.indexTeamInput2.value = "";
        this.indexTeamInput3.value = "";

    }
      addIndexTeamToUI(employee){

        this.indexTeamAdminList.innerHTML += `

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
            <td>${employee.indexteam}</td>
            <td>${employee.indexteam1}</td>
            <td>${employee.indexteam2}</td>
            <td>${employee.indexteam3}</td>
            <td >${employee.id}</td>
                       
                        <td><a class="btn"><i id="indexteamtrash" class="fa fa-trash"></i></a></td>
                        <td><a id="indexteamfolder" class="btn"><i class="fa fa-folder"></i></a></td>
  
        
    
        </tbody>
        <thead>
        
      `;
      }
    deleteIndexTeamFromUIAdmin(element){

        element.remove();

    }
    IndexTeamToogleUpdateButton(target){

        if(this.indexTeamUpdateButton.style.display === "none"){

            this.indexTeamUpdateButton.style.display = "block";
            this.addIndexTeamInfoToInputs(target);
      
          }
          else{
            
            this.indexTeamUpdateButton.style.display = "none";
            this.clearInputsss();
    
          }
    }
    addIndexTeamInfoToInputs(target){

        const children = target.children;

        this.indexTeamInput.value = children[0].children[0].textContent;
        this.indexTeamInput1.value = children[0].children[1].textContent;
        this.indexTeamInput2.value = children[0].children[2].textContent;
        this.indexTeamInput3.value = children[0].children[3].textContent; 
  
    }
    updateIndexTeamOnUI(employee){

      this.indexTeamAdminList.innerHTML =`      
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
            <td>${employee.indexteam}</td>
            <td>${employee.indexteam1}</td>
            <td>${employee.indexteam2}</td>
            <td>${employee.indexteam3}</td> 
            <td>${employee.id}</td>
                        <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                        <td><a id="folder" class="btn"><i class="fa fa-folder"></i></a></td><br>
  
        `;
        this.clearInputsss();
    }
    
}