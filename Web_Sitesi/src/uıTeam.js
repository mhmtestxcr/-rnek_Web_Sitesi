export class UITeam{

    constructor(){

         this.teamsEmployeesListAdmin = document.getElementById("teamsID");

         this.hometeamsubmit = document.getElementById("hometeamsubmit");

         this.hometeamsubmit1 = document.getElementById("hometeamsubmit1");

         this.hometeamsubmit2 = document.getElementById("hometeamsubmit2");

         this.hometeamsubmit3 = document.getElementById("hometeamsubmit3");

         this.homeTeamUpdateButton   = document.getElementById("hometeamfoldernavbar");

    }
    addAllTeamEmployeesToUIAdmin(teams){

        let resultTeams = "" ;
    
        teams.forEach(employee =>{
  
            resultTeams +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">Resim URL</th>
                <th scope="col">Başlık</th>
                <th scope="col">Yazı</th>
                <th scope="col">Ürün Adı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.teamemployees}</td>
                <td>${employee.teamemployees1}</td>
                <td>${employee.teamemployees2}</td>
                <td>${employee.teamemployees3}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="hometeamtrash" class="fa fa-trash"></i></a>
                            <a id="hometeamfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.teamsEmployeesListAdmin.innerHTML = resultTeams;
            
      }

      clearInputss(){

        this.hometeamsubmit.value = "";
        this.hometeamsubmit1.value = "";
        this.hometeamsubmit2.value = "";
        this.hometeamsubmit3.value = "";

    }
    addHomeTeamToUI(employee){

      this.teamsEmployeesListAdmin.innerHTML += `

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
          <td>${employee.teamemployees}</td>
          <td>${employee.teamemployees1}</td>
          <td>${employee.teamemployees2}</td>
          <td>${employee.teamemployees3}</td>
          <td >${employee.id}</td>
                     
                      <td><a class="btn"><i id="hometeamtrash" class="fa fa-trash"></i></a></td>
                      <td><a id="hometeamfolder" class="btn"><i class="fa fa-folder"></i></a></td>

      
  
      </tbody>
      <thead>
      
    `;

    }
    homeTeamDeleteEmployeeFromUIAdmin(element){

      element.remove();

    }

    homeTeamToogleUpdateButton(target){

      if(this.homeTeamUpdateButton.style.display === "none"){

        this.homeTeamUpdateButton.style.display = "block";
        this.addHomeTeamEmplyeeInfoToInputs(target);
  
      }
      else{
        
        this.homeTeamUpdateButton.style.display = "none";
        this.clearInputs();

      }

    }
    addHomeTeamEmplyeeInfoToInputs(target){

      const children = target.children;

      this.hometeamsubmit.value = children[0].children[0].textContent;
      this.hometeamsubmit1.value = children[0].children[1].textContent;
      this.hometeamsubmit2.value = children[0].children[2].textContent;
      this.hometeamsubmit3.value = children[0].children[3].textContent; 

    }
    
    homeTeamUpdateEmployeeOnUI(employee){

      this.teamsEmployeesListAdmin.innerHTML =`
            
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
          <td>${employee.teamemployees}</td>
          <td>${employee.teamemployees1}</td>
          <td>${employee.teamemployees2}</td>
          <td>${employee.teamemployees3}</td> 
          <td>${employee.id}</td>
                      <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                      <td><a id="folder" class="btn"><i class="fa fa-folder"></i></a></td><br>

      `;
      this.clearInputss();
    }
  
}