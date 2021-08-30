export class UIContactAdmin{
    constructor(){

        this.contactList = document.getElementById("contactID");

        this.contactInput = document.getElementById("contactinput");

        this.contactInput1 = document.getElementById("contactinput1");

        this.contactInput2 = document.getElementById("contactinput2");

        this.contactInput3 = document.getElementById("contactinput3");

        this.contactInput4 = document.getElementById("contactinput4");

        this.contactInput5 = document.getElementById("contactinput5");

        this.contactInput6 = document.getElementById("contactinput6");

        this.contactInput7 = document.getElementById("contactinput7");

        this.contactInput8 = document.getElementById("contactinput8");

        this.contactUpdateButton = document.getElementById("contactfoldernavbar");

    }
    addAllContactToUI(contacts){

        let resultContact= "" ;
    
        contacts.forEach(employee =>{
  
            resultContact +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">1.Resim</th>
                <th scope="col">Telefon</th>
                <th scope="col">Yazı</th>
                <th scope="col">2.Resim</th>
                <th scope="col">Sosyal Medya</th>
                <th scope="col">Yazı</th>
                <th scope="col">3.Resim</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Yazı</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.contact}</td>
                <td>${employee.contact1}</td>
                <td>${employee.contact2}</td>
                <td>${employee.contact3}</td>
                <td>${employee.contact4}</td>
                <td>${employee.contact5}</td>
                <td>${employee.contact6}</td>
                <td>${employee.contact7}</td>
                <td>${employee.contact8}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="contacttrash" class="fa fa-trash"></i></a>
                            <a id="contactfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.contactList.innerHTML = resultContact;
    }
    clearInputs(){

        this.contactInput.value = "";
        this.contactInput1.value = "";
        this.contactInput2.value = "";
        this.contactInput3.value = "";
        this.contactInput4.value = "";
        this.contactInput5.value = "";
        this.contactInput6.value = "";
        this.contactInput7.value = "";
        this.contactInput8.value = "";

    }
    addContactToUI(){

        this.contactList.innerHTML += `

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
          <td>${employee.contact}</td>
          <td>${employee.contact1}</td>
          <td>${employee.contact2}</td>
          <td>${employee.contact3}</td>
          <td>${employee.contact4}</td>
          <td>${employee.contact5}</td>
          <td>${employee.contact6}</td>
          <td>${employee.contact7}</td>
          <td>${employee.contact8}</td>
          <td>${employee.id}</td>
     
                        <td><a class="btn"><i id="contacttrash" class="fa fa-trash"></i></a></td>
                        <td><a id="contactfolder" class="btn"><i class="fa fa-folder"></i></a></td>
  
        
    
        </tbody>
        <thead>
        
      `;
    }
    deleteContactFromUIAdmin(element){

        element.remove();
    }
    contactToogleUpdateButton(target){

        if(this.contactUpdateButton.style.display === "none"){

            this.contactUpdateButton.style.display = "block";
            this.addcontactInfoToInputs(target);
      
          }
          else{
            
            this.contactUpdateButton.style.display = "none";
            this.clearInputs();
    
          }
    }
    addcontactInfoToInputs(target){

        const children = target.children;

        this.contactInput.value = children[0].children[0].textContent;
        this.contactInput1.value = children[0].children[1].textContent;
        this.contactInput2.value = children[0].children[2].textContent;
        this.contactInput3.value = children[0].children[3].textContent;
        this.contactInput4.value = children[0].children[4].textContent;
        this.contactInput5.value = children[0].children[5].textContent;
        this.contactInput6.value = children[0].children[6].textContent;
        this.contactInput7.value = children[0].children[7].textContent;
        this.contactInput8.value = children[0].children[8].textContent;
    }
    updateContactOnUI(employee){

        this.contactList.innerHTML +=`      
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
          <td>${employee.contact}</td>
          <td>${employee.contact1}</td>
          <td>${employee.contact2}</td>
          <td>${employee.contact3}</td>
          <td>${employee.contact4}</td>
          <td>${employee.contact5}</td>
          <td>${employee.contact6}</td>
          <td>${employee.contact7}</td>
          <td>${employee.contact8}</td>
          <td>${employee.id}</td>


                        <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                        <td><a id="servicesfolder" class="btn"><i class="fa fa-folder"></i></a></td><br>
    
        `;
        this.clearInputs();
    }
}