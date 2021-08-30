export class UIAboutTeam{
    constructor(){

        this.aboutTeamAdminList = document.getElementById("aboutteamadminID");

        this.aboutTeamInput = document.getElementById("aboutteaminput");

        this.aboutTeamInput1 = document.getElementById("aboutteaminput1");

        this.aboutTeamInput2 = document.getElementById("aboutteaminput2");

        this.aboutTeamInput3 = document.getElementById("aboutteaminput3");

        this.aboutTeamUpdateButton = document.getElementById("aboutteamfoldernavbar");

    }

    addAllAbotTeamToUI(aboutteams){

        let resultAboutTeams= "" ;
    
        aboutteams.forEach(employee =>{
  
            resultAboutTeams +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">Resim</th>
                <th scope="col">yazı</th>
                <th scope="col">yazı</th>
                <th scope="col">yazı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.aboutteam}</td>
                <td>${employee.aboutteam1}</td>
                <td>${employee.aboutteam2}</td>
                <td>${employee.aboutteam3}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="aboutteamtrash" class="fa fa-trash"></i></a>
                            <a id="aboutmissionheadfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.aboutTeamAdminList.innerHTML = resultAboutTeams;
    }
    clearInputs(){

        this.aboutTeamInput.value = "";
        this.aboutTeamInput1.value = "";
        this.aboutTeamInput2.value = "";
        this.aboutTeamInput3.value = "";

    }
    addAboutTeamToUI(employee){

        this.aboutTeamAdminList.innerHTML += `

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
            <td>${employee.aboutteam}</td>
            <td>${employee.aboutteam1}</td>
            <td>${employee.aboutteam2}</td>
            <td>${employee.aboutteam3}</td>
            <td >${employee.id}</td>       
                        <td><a class="btn"><i id="aboutteamtrash" class="fa fa-trash"></i></a></td>
                        <td><a id="aboutmissionheadfolder" class="btn"><i class="fa fa-folder"></i></a></td>
        </tbody>
        <thead>
        
      `;
    }
    deleteAboutTeamFromUIAdmin(element){

        element.remove();

    }
    
    aboutTeamToogleUpdateButton(target){

        if(this.aboutTeamUpdateButton.style.display === "none"){

            this.aboutTeamUpdateButton.style.display = "block";
            this.addTeamInfoToInputs(target);
      
          }
          else{
            
            this.aboutTeamUpdateButton.style.display = "none";
            this.clearInputs();
    
          }
    }

    addTeamInfoToInputs(target){

        const children = target.children;

        this.aboutTeamInput.value = children[0].children[0].textContent;
        this.aboutTeamInput1.value = children[0].children[1].textContent;
        this.aboutTeamInput2.value =children[0].children[2].textContent;
        this.aboutTeamInput3.value = children[0].children[3].textContent;

    }
    updateAboutTeamOnUI(employee){

      this.aboutTeamAdminList.innerHTML =`      
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
            <td>${employee.aboutteam}</td>
            <td>${employee.aboutteam1}</td>
            <td>${employee.aboutteam2}</td>
            <td>${employee.aboutteam3}</td> 
            <td>${employee.id}</td>
                        <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                        <td><a id="folder" class="btn"><i class="fa fa-folder"></i></a></td><br>
    
        `;
        this.clearInputs();
    }
    
}