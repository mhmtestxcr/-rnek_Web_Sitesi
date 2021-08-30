export class UIAboutQuestion{
    constructor(){

        this.aboutQuestionAdminList = document.getElementById("aboutquestionadminID");

        this.aboutQuestionInput = document.getElementById("aboutquestioninput");

        this.aboutQuestionInput1 = document.getElementById("aboutquestioninput1");

        this.aboutQuestionInput2 = document.getElementById("aboutquestioninput2");

        this.aboutQuestionInput3 = document.getElementById("aboutquestioninput3");

        this.aboutQuestionUpdateButton = document.getElementById("aboutquestionfoldernavbar");

    }

    addAllAboutQuestionToUI(aboutquestions){

        let resultAboutQuestion= "" ;
    
        aboutquestions.forEach(employee =>{
  
            resultAboutQuestion +=`
            <table id="esat" class="table">
            <thead>
              <tr>
                <th scope="col">1.Soru</th>
                <th scope="col">2.Soru</th>
                <th scope="col">3.Soru</th>
                <th scope="col">4.Soru</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${employee.aboutquestion}</td>
                <td>${employee.aboutquestion1}</td>
                <td>${employee.aboutquestion2}</td>
                <td>${employee.aboutquestion3}</td>
                <td>${employee.id}</td>
                           <td> <i ></i>
                            <a class="btn"><i id="aboutquestiontrash" class="fa fa-trash"></i></a>
                            <a id="aboutmissionheadfolder" class="btn"><i class="fa fa-folder"></i></a></td><br><br><br>
            </tbody>
            <thead>
            `;
              
          });
            
          this.aboutQuestionAdminList.innerHTML = resultAboutQuestion;
    } 

    clearInputs(){

        this.aboutQuestionInput.value = "";
        this.aboutQuestionInput1.value = "";
        this.aboutQuestionInput2.value = "";
        this.aboutQuestionInput3.value = "";

    }
    
    addAboutQuestionToUI(){

        this.aboutQuestionAdminList.innerHTML += `

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
            <td>${employee.aboutquestion}</td>
            <td>${employee.aboutquestion1}</td>
            <td>${employee.aboutquestion2}</td>
            <td>${employee.aboutquestion3}</td>
            <td >${employee.id}</td>
                       
                        <td><a class="btn"><i id="aboutquestiontrash" class="fa fa-trash"></i></a></td>
                        <td><a id="aboutmissionheadfolder" class="btn"><i class="fa fa-folder"></i></a></td>
  
        
    
        </tbody>
        <thead>
        
      `;

    }
    deleteQuestionTeamFromUIAdmin(element){

        element.remove();

    }
    aboutQuestionToogleUpdateButton(target){

        if(this.aboutQuestionUpdateButton.style.display === "none"){

            this.aboutQuestionUpdateButton.style.display = "block";
            this.addQuestionInfoToInputs(target);
      
          }
          else{
            
            this.aboutQuestionUpdateButton.style.display = "none";
            this.clearInputs();
    
          }
    }
    addQuestionInfoToInputs(target){

        const children = target.children;

        this.aboutQuestionInput.value = children[0].children[0].textContent;
        this.aboutQuestionInput1.value = children[0].children[1].textContent;
        this.aboutQuestionInput2.value =children[0].children[2].textContent;
        this.aboutQuestionInput3.value = children[0].children[3].textContent;
    }
    updateAboutQuestionOnUI(employee){

      this.aboutQuestionAdminList.innerHTML +=`      
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
          <td>${employee.question}</td>
          <td>${employee.question1}</td>
          <td>${employee.question2}</td>
          <td>${employee.aquestion3}</td> 
          <td>${employee.id}</td>
                      <td><a class="btn"><i id="trash" class="fa fa-trash"></i></a></td>
                      <td><a id="folder" class="btn"><i class="fa fa-folder"></i></a></td><br>
  
      `;
      this.clearInputs();
  }
}