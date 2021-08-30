export class UIAboutSponsor{
    constructor(){

        this.aboutSponsorAdminList = document.getElementById("aboutsponsoradminID");

        this.aboutSponsorInput = document.getElementById("aboutsponsorinput");

        this.aboutSponsorInput1 = document.getElementById("aboutsponsorinput1");

        this.aboutSponsorInput2 = document.getElementById("aboutsponsorinput2");

        this.aboutSponsorInput3 = document.getElementById("aboutsponsorinput3");

        this.aboutSponsorUpdateButton = document.getElementById("aboutsponsorfoldernavbar");

    }

    addAllAboutSponsorToUI(aboutsponsors){

        let resultAboutSponsor= "" ;
    
        aboutsponsors.forEach(employee =>{
  
            resultAboutSponsor +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">1.Sponsor</th>
                <th scope="col">2.Sponsor</th>
                <th scope="col">3.Sponsor</th>
                <th scope="col">4.Sponsor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.aboutsponsor}</td>
                <td>${employee.aboutsponsor1}</td>
                <td>${employee.aboutsponsor2}</td>
                <td>${employee.aboutsponsor3}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="aboutsponsortrash" class="fa fa-trash"></i></a>
                            <a id="aboutsponsorfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.aboutSponsorAdminList.innerHTML = resultAboutSponsor;
    }
    clearInputs(){

        this.aboutSponsorInput.value = "";
        this.aboutSponsorInput1.value = "";
        this.aboutSponsorInput2.value = "";
        this.aboutSponsorInput3.value = "";

    }
    addAboutSponsorToUI(){

        this.aboutSponsorAdminList.innerHTML += `

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
            <td>${employee.aboutsponsor}</td>
            <td>${employee.aboutsponsor1}</td>
            <td>${employee.aboutsponsor2}</td>
            <td>${employee.aboutsponsor3}</td>
            <td >${employee.id}</td>
                       
                        <td><a class="btn"><i id="aboutsponsortrash" class="fa fa-trash"></i></a></td>
                        <td><a id="aboutsponsorfolder" class="btn"><i class="fa fa-folder"></i></a></td>
  
        
    
        </tbody>
        <thead>
        
      `;
    }
    deleteSponsorTeamFromUIAdmin(element){

        element.remove();

    }
    aboutSponsorToogleUpdateButton(target){

        if(this.aboutSponsorUpdateButton.style.display === "none"){

            this.aboutSponsorUpdateButton.style.display = "block";
            this.addSponsorInfoToInputs(target);
      
          }
          else{
            
            this.aboutSponsorUpdateButton.style.display = "none";
            this.clearInputs();
    
          }
    }
    addSponsorInfoToInputs(target){

        const children = target.children;

        this.aboutSponsorInput.value = children[0].children[0].textContent;
        this.aboutSponsorInput1.value = children[0].children[1].textContent;
        this.aboutSponsorInput2.value =children[0].children[2].textContent;
        this.aboutSponsorInput3.value = children[0].children[3].textContent;
    }
    updateAboutSponsorOnUI(employee){

        this.aboutSponsorAdminList.innerHTML +=`      
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