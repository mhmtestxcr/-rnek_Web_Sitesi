export class UIAdmin{
    constructor(){
        this.employeesListAdmin = document.getElementById("deneme12345");

        this.homeAboutTextID = document.getElementById("homeabouttextid");

        this.updateButton   = document.getElementById("foldernavbar");

        this.deneme = document.getElementById("indexaboutinput");

        this.deneme1 = document.getElementById("indexaboutinput1");

        this.deneme2 = document.getElementById("indexaboutinput2");
        
        this.deneme3 = document.getElementById("indexaboutinput3");

        this.HomeAboutText = document.getElementById("homeabouttext");

        this.HomeAboutText1 = document.getElementById("homeabouttext1");

        this.HomeAboutText2 = document.getElementById("homeabouttext2");

        this.HomeAboutText3 = document.getElementById("homeabouttext3");   

    }
    
    addAllEmployeesToUIAdmin(employees){

        let resultAdmin = "";
  
        employees.forEach(employee =>{
  
            resultAdmin +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">1.Başlık</th>
                <th scope="col">2.Başlık</th>
                <th scope="col">3.Başlık</th>
                <th scope="col">4.Başlık</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.deneme}</td>
                <td>${employee.deneme1}</td>
                <td>${employee.deneme2}</td>
                <td>${employee.deneme3}</td>
                <td id="employeClearID">${employee.id}</td>
                           <td> <i "></i>
                            <a class="btn"><i id="trash" class="fa fa-trash"></i></a>
                            <a id="folder" class="btn"><i class="fa fa-folder"></i></a></td
            </tbody>
            <thead>
            <tr>
              <th scope="col">1.Yazı</th>
              <th scope="col">2.Yazı</th>
              <th scope="col">3.Yazı</th>
              <th scope="col">4.Yazı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${employee.stpost}</td>
              <td>${employee.stpost1}</td>
              <td>${employee.stpost2}</td>
              <td>${employee.stpost3}</td>
              <td id="employeClearID">${employee.id}</td>
                         <td> <i ></i>
                          <a class="btn"><i id="trash" class="fa fa-trash"></i></a>
                          <a id="homeaboutfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br><br>
          </tbody>
          </table>
          `;
            
        });
  
        this.employeesListAdmin.innerHTML = resultAdmin;
    }
    clearInputs(){

      this.deneme.value = "";
      this.deneme1.value = "";
      this.deneme2.value = "";
      this.deneme3.value = "";
      this.homeAboutText.value = "";
      this.homeAboutText1.value = "";
      this.homeAboutText2.value = "";
      this.homeAboutText3.value = "";

  }
    addEmployeesToUIAdmin(){

      this.employeesListAdmin.innerHTML += `
      <table class="table">
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
          <td>${employee.deneme}</td>
          <td>${employee.deneme1}</td>
          <td>${employee.deneme2}</td>
          <td>${employee.deneme3}</td>
          <td >${employee.id}</td>
                     <td> <i style="cursor: pointer;" id="heart" class="fa fa-heart"></i></td>
                      <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                      <td><a id="folder" class="btn"><i class="fa fa-folder"></i></a></td>

      
  
      </tbody>
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
        <td>${employee.stpost}</td>
        <td>${employee.stpost1}</td>
        <td>${employee.stpost2}</td>
        <td>${employee.stpost3}</td>
        <td >${employee.id}</td>
                   <td> <i style="cursor: pointer;" id="heart" class="fa fa-heart"></i></td>
                    <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                    <td><a id="homeaboutfolder" class="btn"><i class="fa fa-folder"></i></a></td>
    </tbody>
    </table>
      
    `;
 
    }

    deleteEmployeeFromUIAdmin(element){

      element.remove();

    }
    toogleUpdateButton(target){

      if(this.updateButton.style.display === "none"){

        this.updateButton.style.display = "block";
        this.addEmplyeeInfoToInputs(target);
  
      }

      else{

        this.updateButton.style.display = "none";
        this.clearInputs();

      }

    }

    addEmplyeeInfoToInputs(target){

      // bilgileri ibputa yazdırma
      const children = target.children;

      this.deneme.value = children[0].children[0].textContent;
      this.deneme1.value = children[0].children[1].textContent;
      this.deneme2.value = children[0].children[2].textContent;
      this.deneme3.value = children[0].children[3].textContent; 
      
    }

    updateEmployeeOnUI(parent,employee){

      this.employeesListAdmin.innerHTML =`      
      <table class="table">
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
          <td>${employee.deneme}</td>
          <td>${employee.deneme1}</td>
          <td>${employee.deneme2}</td>
          <td>${employee.deneme3}</td>
          <td>${employee.id}</td>
                     <td> <i style="cursor: pointer;" id="heart" class="fa fa-heart"></i></td>
                      <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                      <td><a id="folder" class="btn"><i class="fa fa-folder"></i></a></td>

      `;
      this.clearInputs();
    }

}