import {Request} from "./request";
import{UI} from "./uı";
import{UIAdmin} from  "./uıAdmin";
import{UITeam} from "./uıTeam";
import{UITeamAdmin} from "./uıTeamAdmin";
import {UIIndexTeamAdmin} from "./uıIndexTeamAdmin";
import {UIIndexServicesAdmin} from "./uıIndexServicesAdmin";
import { UIAboutMissionHeadAdmin } from "./aboutmiissionhead";
import { UIAbout } from "./uıabout";
import { UIAdminMission } from "./aboutmission";
import { UIAboutTeam } from "./aboutteam";
import { UIAboutQuestion } from "./aboutquestion";
import { UIAboutSponsor } from "./aboutsponsor";
import { UIServicesAdmin } from "./services";
import { UIServices } from "./uıservices";
import { UIServicesTodoAdmin} from "./uıServicesTodo";
import { UIContactAdmin } from "./contact";
import { UIContactUI } from "./uıcontact";

// // Elementleri Seçme İçin Bölüm
const indexAboutInput = document.getElementById("indexaboutinput");

const indexAboutInput1 = document.getElementById("indexaboutinput1");

const indexAboutInput2 = document.getElementById("indexaboutinput2");

const indexAboutInput3 = document.getElementById("indexaboutinput3");

const heart = document.getElementById("heart");

const hometeamheart = document.getElementById("homeheart");

const indexTeamHeart = document.getElementById("indexteamheart");

const indexServicesHeart = document.getElementById("indexservicesheart");

const aboutMissionHeadHeart = document.getElementById("aboutmissionheadheart");

const aboutMissionHeart = document.getElementById("aboutmissionheart");

const aboutTeamHeart = document.getElementById("aboutteamheart");

const aboutQuestionHeart = document.getElementById("aboutquestionheart");

const aboutSponsorHeart = document.getElementById("aboutsponsorheart");

const servicesHeart = document.getElementById("servicesheart");

const servicesTodosHeart = document.getElementById("servicestodosheart");

const contactHeart = document.getElementById("contactheart");

const trashdelete = document.getElementById("deneme12345");

const homeTeamTrashDelete = document.getElementById("teamsID");

const indexTeamAdminDelete = document.getElementById("indexteamadminID");

const indexServicesAdminDelete = document.getElementById("indexservicesadminID");

const aboutMissionHeadAdminDelete = document.getElementById("aboutmissonheadadminID");

const aboutMissionAdminDelete = document.getElementById("aboutmissionadminID");

const aboutTeamAdminDelete = document.getElementById("aboutteamadminID");

const aboutQuestionAdminDelete = document.getElementById("aboutquestionadminID");

const aboutSponsorAdminDelete = document.getElementById("aboutsponsoradminID");

const servicesAdminDelete = document.getElementById("servicesadminID");

const servicesTodosAdminDelete = document.getElementById("servicestodosID");

const contactAdminDelete = document.getElementById("contactID");

const foldernavbar = document.getElementById("foldernavbar");

const homeTeamFolderNavbar = document.getElementById("hometeamfoldernavbar");

const indexTeamFolderNavbar = document.getElementById("indexteamfoldernavbar");

const indexServicesFolderNavbar = document.getElementById("indexservicesfoldernavbar");

const aboutMissionHeadFolderNavbar = document.getElementById("aboutmissionheadfoldernavbar");

const aboutMissionFolderNavbar = document.getElementById("aboutmissionfoldernavbar");

const aboutTeamFolderNavbar = document.getElementById("aboutteamfoldernavbar");

const aboutQuestionFolderNavbar = document.getElementById("aboutquestionfoldernavbar");

const aboutSponsorFolderNavbar = document.getElementById("aboutsponsorfoldernavbar");

const servicesFolderNavbar = document.getElementById("servicesfoldernavbar");

const servicesTodosFolderNavbar = document.getElementById("servicestodosfoldernavbar");

const contactFolderNavbar = document.getElementById("contactfoldernavbar");

const homeabouttext =document.getElementById("homeabouttext");

const homeabouttext1 =document.getElementById("homeabouttext1");

const homeabouttext2 =document.getElementById("homeabouttext2");

const homeabouttext3 =document.getElementById("homeabouttext3");

const hometeamsubmit = document.getElementById("hometeamsubmit");

const hometeamsubmit1 = document.getElementById("hometeamsubmit1");

const hometeamsubmit2 = document.getElementById("hometeamsubmit2");

const hometeamsubmit3 = document.getElementById("hometeamsubmit3");

const indexTeamInput = document.getElementById("indexteaminput");

const indexTeamInput1 = document.getElementById("indexteaminput1");

const indexTeamInput2 = document.getElementById("indexteaminput2");

const indexteaminput3 = document.getElementById("indexteaminput3");

const indexServicesInput =document.getElementById("indexservicesinput");

const indexServicesInput1 =document.getElementById("indexservicesinput1");

const indexServicesInput2 =document.getElementById("indexservicesinput2");

const indexServicesInput3 =document.getElementById("indexservicesinput3");

const aboutMiisionHeadInput = document.getElementById("aboutmissionheadinput");

const aboutMiisionHeadInput1 = document.getElementById("aboutmissionheadinput1");

const aboutMiisionHeadInput2 = document.getElementById("aboutmissionheadinput2");

const aboutMiisionHeadInput3 = document.getElementById("aboutmissionheadinput3");

const aboutMissionInput = document.getElementById("aboutmissioninput");

const aboutMissionInput1 = document.getElementById("aboutmissioninput1");

const aboutMissionInput2 = document.getElementById("aboutmissioninput2");

const aboutMissionInput3 = document.getElementById("aboutmissioninput3");

const aboutTeamInput = document.getElementById("aboutteaminput");

const aboutTeamInput1 = document.getElementById("aboutteaminput1");

const aboutTeamInput2 = document.getElementById("aboutteaminput2");

const aboutTeamInput3 = document.getElementById("aboutteaminput3");

const aboutQuestionInput = document.getElementById("aboutquestioninput");

const aboutQuestionInput1 = document.getElementById("aboutquestioninput1");

const aboutQuestionInput2 = document.getElementById("aboutquestioninput2");

const aboutQuestionInput3 = document.getElementById("aboutquestioninput3");

const aboutSponsorInput = document.getElementById("aboutsponsorinput");

const aboutSponsorInput1 = document.getElementById("aboutsponsorinput1");

const aboutSponsorInput2 = document.getElementById("aboutsponsorinput2");

const aboutSponsorInput3 = document.getElementById("aboutsponsorinput3");

const servicesInput = document.getElementById("servicesinput");

const servicesInput1 = document.getElementById("servicesinput1");

const servicesInput2 = document.getElementById("servicesinput2");

const servicesInput3 = document.getElementById("servicesinput3");

const servicesInput4 = document.getElementById("servicesinput4");

const servicesInput5 = document.getElementById("servicesinput5");

const servicesTodosInput = document.getElementById("servicestodosinput");

const servicesTodosInput1 = document.getElementById("servicestodosinput1");

const servicesTodosInput2 = document.getElementById("servicestodosinput2");

const servicesTodosInput3 = document.getElementById("servicestodosinput3");

const servicesTodosInput4 = document.getElementById("servicestodosinput4");

const servicesTodosInput5 = document.getElementById("servicestodosinput5");

const servicesTodosInput6 = document.getElementById("servicestodosinput6");

const servicesTodosInput7 = document.getElementById("servicestodosinput7");

const contactInput = document.getElementById("contactinput");

const contactInput1 = document.getElementById("contactinput1");

const contactInput2 = document.getElementById("contactinput2");

const contactInput3 = document.getElementById("contactinput3");

const contactInput4 = document.getElementById("contactinput4");

const contactInput5 = document.getElementById("contactinput5");

const contactInput6 = document.getElementById("contactinput6");

const contactInput7 = document.getElementById("contactinput7");

const contactInput8 = document.getElementById("contactinput8");





//  Eventleri Kazandordoğım Kısım
eventListerners();
function eventListerners(){

    document.addEventListener("DOMContentLoaded",getAllEmployeesAdmin);
    document.addEventListener("DOMContentLoaded",getAllEmployees);
    document.addEventListener("DOMContentLoaded",getAllTeams);
    document.addEventListener("DOMContentLoaded",getAllTeamsAdmin)
    document.addEventListener("DOMContentLoaded",getAllIndexTeams);
    document.addEventListener("DOMContentLoaded",getAllIndexTeamsUI);
    document.addEventListener("DOMContentLoaded",getAllIndexServices);
    document.addEventListener("DOMContentLoaded",getAllIndexServicesUI);
    document.addEventListener("DOMContentLoaded",getAllAboutMissionHead);
    document.addEventListener("DOMContentLoaded",gettAllAboutUI);
    document.addEventListener("DOMContentLoaded",getAllAboutMission);
    document.addEventListener("DOMContentLoaded",getAllAboutTeam);
    document.addEventListener("DOMContentLoaded",getAllAboutTeamUI);
    document.addEventListener("DOMContentLoaded",getAllAboutQuestion);
    document.addEventListener("DOMContentLoaded",getAllAboutQuestionUI);
    document.addEventListener("DOMContentLoaded",getAllAboutSponsor);
    document.addEventListener("DOMContentLoaded",getAllAboutSponsorUI);
    document.addEventListener("DOMContentLoaded",getAllServices);
    document.addEventListener("DOMContentLoaded",getAllServicesUI);
    document.addEventListener("DOMContentLoaded",getAllServicesTodo);
    document.addEventListener("DOMContentLoaded",getAllServicesTodoUI);
    document.addEventListener("DOMContentLoaded",getAllContact);
    document.addEventListener("DOMContentLoaded",getAllContactUI)
    if(heart){
        heart.addEventListener("click",addEmployeeAdmin);
    }
    if(trashdelete){
          
    trashdelete.addEventListener("click",UpdateOrDeleteAdmin);
    }
    if(foldernavbar){
        foldernavbar.addEventListener("click",updateEmployee);
    }
    if(hometeamheart){
        hometeamheart.addEventListener("click",addHomeTeamAdmin);
        
    }
    if(homeTeamTrashDelete){
        homeTeamTrashDelete.addEventListener("click",HomeTeamUpdateOrDelete);
        
    }
    if(homeTeamFolderNavbar){
       homeTeamFolderNavbar.addEventListener("click",homeTeamUpdateEmployee);
        
    }
    if(indexTeamHeart){
        indexTeamHeart.addEventListener("click",addIndexTeamAdmin);
         
    }
    if(indexTeamAdminDelete){
        indexTeamAdminDelete.addEventListener("click",ındexTeamUpdateOrDelete);
         
    }
    if(indexTeamFolderNavbar){
        indexTeamFolderNavbar.addEventListener("click",ındexTeamUpdate);
         
    }
    if(indexServicesHeart){
        indexServicesHeart.addEventListener("click",addIndexServicesAdmin);
         
    }
    if(indexServicesAdminDelete){
        indexServicesAdminDelete.addEventListener("click",indexServicesUpdateOrDelete);
        
    }
    if(indexServicesFolderNavbar){
        indexServicesFolderNavbar.addEventListener("click",indexServicesUpdate);
         
    }
    if(aboutMissionHeadHeart){
        aboutMissionHeadHeart.addEventListener("click",addAboutMissionHead);
         
    }
    if(aboutMissionHeadAdminDelete){
        aboutMissionHeadAdminDelete.addEventListener("click",aboutMissionHeadUpdateOrDelete);
         
    }
    if(aboutMissionHeadFolderNavbar){
        aboutMissionHeadFolderNavbar.addEventListener("click",aboutMissionHeadUpdate);
         
    }
    if(aboutMissionHeart){
        aboutMissionHeart.addEventListener("click",addAboutMission);
         
    }
    if(aboutMissionAdminDelete){
        aboutMissionAdminDelete.addEventListener("click",aboutMissionUpdateOrDelete);
         
    }
    if(aboutMissionFolderNavbar){
        aboutMissionFolderNavbar.addEventListener("click",aboutMissionUpdate);
         
    }
    if(aboutTeamHeart){
        aboutTeamHeart.addEventListener("click",addAboutTeam);
         
    }
    if(aboutTeamAdminDelete){
        aboutTeamAdminDelete.addEventListener("click",aboutTeamUpdateOrDelete);
         
    }
    if(aboutTeamFolderNavbar){
        aboutTeamFolderNavbar.addEventListener("click",aboutTeamUpdate);
         
    }
    if(aboutQuestionHeart){
        aboutQuestionHeart.addEventListener("click",addAboutQuestion);
         
    }
    if(aboutQuestionAdminDelete){
        aboutQuestionAdminDelete.addEventListener("click",aboutQuestionUpdateOrDelete);
         
    }
    if(aboutQuestionFolderNavbar){
        aboutQuestionFolderNavbar.addEventListener("click",aboutQuestionUpdate);
         
    }
    if(aboutSponsorHeart){
        aboutSponsorHeart.addEventListener("click",addAboutSponsor);
         
    }
    if(aboutSponsorAdminDelete){
        aboutSponsorAdminDelete.addEventListener("click",aboutSponsorUpdateOrDelete);
         
    }
    if(aboutSponsorFolderNavbar){
        aboutSponsorFolderNavbar.addEventListener("click",aboutSponsorUpdate);
         
    }
    if(servicesHeart){
        servicesHeart.addEventListener("click",addServices);
         
    }
    if(servicesAdminDelete){
        servicesAdminDelete.addEventListener("click",servicesUpdateOrDelete);
         
    }
    if(servicesFolderNavbar){
        servicesFolderNavbar.addEventListener("click",servicesUpdate);
         
    }
    if(servicesTodosHeart){
        servicesTodosHeart.addEventListener("click",addServicesTodos);
         
    }
    if(servicesTodosAdminDelete){
        servicesTodosAdminDelete.addEventListener("click",servicesTodosUpdateOrDelete);
         
    }
    if(servicesTodosFolderNavbar){
        servicesTodosFolderNavbar.addEventListener("click",servicesTodosUpdate);
         
    }
    if(contactHeart){
        contactHeart.addEventListener("click",addContact);
         
    }
    if(contactAdminDelete){
        contactAdminDelete.addEventListener("click",contactUpdateOrDelete);
         
    }
    if(contactFolderNavbar){
        contactFolderNavbar.addEventListener("click",contactUpdate);
         
    }
    
 
}
// Requestlerimi ve sayfalarım dahil ettiğim Kısım

const request = new Request("http://localhost:3000/employees");

const request1 = new Request("http://localhost:3000/teams");

const request2 = new Request("http://localhost:3000/indexteams");

const request3 = new Request("http://localhost:3000/indexservice");

const request4 = new Request("http://localhost:3000/aboutmissionheads");

const request5 = new Request("http://localhost:3000/aboutmissions");

const request6 = new Request("http://localhost:3000/aboutteams");

const request7 = new Request("http://localhost:3000/aboutquestions");

const request8 = new Request("http://localhost:3000/aboutsponsors");

const request9 = new Request("http://localhost:3000/services");

const request10 = new Request("http://localhost:3000/servicestodos");

const request11 = new Request("http://localhost:3000/contacts");

const uı = new UI();

const uıAdmin = new UIAdmin();

const uıTeam = new UITeam();

const uıTeamAdmin = new UITeamAdmin();

const uıIndexTeamAdmin = new UIIndexTeamAdmin();

const uıIndexServicesAdmin = new UIIndexServicesAdmin();

const uıAboutMissionHead = new UIAboutMissionHeadAdmin();

const uıAbout = new UIAbout();

const uıAboutMission = new UIAdminMission();

const uıAboutTeam = new UIAboutTeam();

const uıAboutQuestion = new UIAboutQuestion();

const uıAboutSponsor = new UIAboutSponsor();

const uıServices = new UIServicesAdmin();

const uıServicesUI = new UIServices();

const uıServicesTodos = new UIServicesTodoAdmin();

const uıContactAdmin = new UIContactAdmin();

const uıContact = new UIContactUI();

// Güncelleme işlemi yapmak için kullandığım atamalar
let updateState = null;
let homeTeamUpdateState = null;
let indexTeamUpdateState = null;
let indexServicesUpdateState = null;
let aboutMissionHeadUpdateState = null;
let aboutMissionUpdateState = null;
let aboutTeamUpdateState = null;
let aboutQuestionUpdateState = null;
let aboutSponsorUpdateState = null;
let servicesUpdateState = null;
let servicesTodosUpdateState = null;
let contactUpdateState = null;



// Elementleri getirdiğim yer
function getAllEmployees(){

    request.get()
    .then(employees =>{

        uı.addAllEmployeesToUI(employees);
    })
    .catch(err => console.log(err));
}

// Elementleri getirdiğim yer
function getAllEmployeesAdmin(){

    request.get()
    .then(employees =>{

        uıAdmin.addAllEmployeesToUIAdmin(employees);
        
    })
    .catch(err => console.log(err));
}

// Elementleri getirdiğim yer
function getAllTeams(){

    request1.get()
    .then(teams =>{

        uıTeam.addAllTeamEmployeesToUIAdmin(teams);
        
    })
    .catch(err => console.log(err));
}

// Elementleri getirdiğim yer
function getAllTeamsAdmin(){

    request1.get()
    .then(teams =>{

        uıTeamAdmin.addAllTeamEmployeesToUI(teams);
        
    })
    .catch(err => console.log(err));
}

// Elementleri getirdiğim yer
function getAllIndexTeams(){

    request2.get()
    .then(indexteams =>{

        uıIndexTeamAdmin.addAllIndexTeamToUIAdmin(indexteams);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllIndexTeamsUI(){

    request2.get()
    .then(indexteams =>{

        uı.addAllIndexTeamToUI(indexteams);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllIndexServices(){

    request3.get()
    .then(indexservice =>{

        uıIndexServicesAdmin.addAllIndexServicesToUI(indexservice);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllIndexServicesUI(){

    request3.get()
    .then(indexservice =>{

        uı.addAllIndexServiceToUI(indexservice);
        
    })
    .catch(err => console.log(err)); 

}

// Elementleri getirdiğim yer
function getAllAboutMissionHead(){

    request4.get()
    .then(aboutmissionheads =>{

        uıAboutMissionHead.addAllAboutMissionHeadToUI(aboutmissionheads);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function gettAllAboutUI(){

    request4.get()
    .then(aboutmissionheads =>{

        uıAbout.addAllAboutMissionHeadsToUI(aboutmissionheads);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllAboutMission(){

    request5.get()
    .then(aboutmissions =>{

        uıAboutMission.addAllAboutMissionToUI(aboutmissions);
        
    })
    .catch(err => console.log(err)); 

}

// Elementleri getirdiğim yer
function getAllAboutTeam(){

    request6.get()
    .then(aboutteams =>{

        uıAboutTeam.addAllAbotTeamToUI(aboutteams);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllAboutTeamUI(){

    request6.get()
    .then(aboutteams =>{

        uıAbout.addAllAbotTeamsToUI(aboutteams);
        
    })
    .catch(err => console.log(err)); 

}
// Elementleri getirdiğim yer
function getAllAboutQuestion(){

    request7.get()
    .then(aboutquestions =>{

        uıAboutQuestion.addAllAboutQuestionToUI(aboutquestions);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllAboutQuestionUI(){

    request7.get()
    .then(aboutquestions =>{

        uıAbout.addAllAboutQuestionsToUI(aboutquestions);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllAboutSponsor(){

    request8.get()
    .then(aboutsponsors =>{

        uıAboutSponsor.addAllAboutSponsorToUI(aboutsponsors);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllAboutSponsorUI(){

    request8.get()
    .then(aboutsponsors =>{

        uıAbout.addAllAboutSponsorsToUI(aboutsponsors);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllServices(){

    request9.get()
    .then(services =>{

        uıServices.addAllServicesToUI(services);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllServicesUI(){

    request9.get()
    .then(services =>{

        uıServicesUI.addAllServicessToUI(services);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllServicesTodo(){

    request10.get()
    .then(servicestodos =>{

        uıServicesTodos.addAllServicesTodosToUI(servicestodos);
        
    })
    .catch(err => console.log(err)); 

}


// Elementleri getirdiğim yer
function getAllServicesTodoUI(){

    request10.get()
    .then(servicestodos =>{

        uıServicesUI.addAllServicessTodosToUI(servicestodos);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllContact(){

    request11.get()
    .then(contacts =>{

        uıContactAdmin.addAllContactToUI(contacts);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function getAllContactUI(){

    request11.get()
    .then(contacts =>{

        uıContact.addAllContactsToUI(contacts);
        
    })
    .catch(err => console.log(err)); 
}

// Elementleri getirdiğim yer
function addContact(){
    
    const contactInputName= contactInput.value.trim();
    const contact1InputName =contactInput1.value.trim();
    const contact2InputName =contactInput2.value.trim();
    const contact3InputName= contactInput3.value.trim();
    const contact4InputName = contactInput4.value.trim();
    const contact5InputName= contactInput5.value.trim();
    const contact6InputName= contactInput6.value.trim();
    const contact7InputName= contactInput7.value.trim();
    const contact8InputName= contactInput8.value.trim();

    if(contactInputName=== "" || contact1InputName === "" || contact2InputName === "" || contact3InputName === "" || contact4InputName === "" || contact5InputName === "" || contact6InputName === ""|| contact7InputName === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request11.post({contact:contactInputName,contact1:contact1InputName,contact2:contact2InputName,contact3:contact3InputName,contact4:contact4InputName,contact5:contact5InputName,contact6:contact6InputName,contact7:contact7InputName,contact8:contact8InputName,})
        .then(employee =>{
            uıContactAdmin.addContactToUI(employee);
        })
        .catch(err => console.log(err));
    }
}

// Elementleri getirdiğim yer
function addServicesTodos(){

    const servicesTodosInputName= servicesTodosInput.value.trim();
    const servicesTodos1InputName =servicesTodosInput1.value.trim();
    const servicesTodos2InputName = servicesTodosInput2.value.trim();
    const servicesTodos3InputName= servicesTodosInput3.value.trim();
    const servicesTodos4InputName = servicesTodosInput4.value.trim();
    const servicesTodos5InputName= servicesTodosInput5.value.trim();
    const servicesTodos6InputName= servicesTodosInput6.value.trim();
    const servicesTodos7InputName= servicesTodosInput7.value.trim();


    if(servicesTodosInputName=== "" || servicesTodos1InputName === "" || servicesTodos2InputName === "" || servicesTodos3InputName === "" || servicesTodos4InputName === "" || servicesTodos5InputName === "" || servicesTodos6InputName === ""|| servicesTodos7InputName === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request10.post({servicestodo:servicesTodosInputName,servicestodo1:servicesTodos1InputName,servicestodo2:servicesTodos2InputName,servicestodo3:servicesTodos3InputName,servicestodo4:servicesTodos4InputName,servicestodo5:servicesTodos5InputName,servicestodo6:servicesTodos6InputName,servicestodo7:servicesTodos7InputName,})
        .then(employee =>{
            uıServicesTodos.addServicesTodosToUI(employee);
        })
        .catch(err => console.log(err));
    }
}

// Elementleri getirdiğim yer
function addServices(){

    const servicesInputName= servicesInput.value.trim();
    const services1InputName = servicesInput1.value.trim();
    const services2InputName = servicesInput2.value.trim();
    const services3InputName= servicesInput3.value.trim();
    const services4InputName = servicesInput4.value.trim();
    const services5InputName= servicesInput5.value.trim();


    if(servicesInputName=== "" || services1InputName === "" || services2InputName === "" || services3InputName === "" || services4InputName === "" || services5InputName === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request9.post({service:servicesInputName,service1:services1InputName,service2:services2InputName,service3:services3InputName,service4:services4InputName,service5:services5InputName})
        .then(employee =>{
            uıServices.addServicesToUI(employee);
        })
        .catch(err => console.log(err));
    }

    
}


// Elementleri getirdiğim yer
function addAboutSponsor(){

    const aboutSponsorInputName= aboutSponsorInput.value.trim();
    const aboutSponsor1InputName = aboutSponsorInput1.value.trim();
    const aboutSponsor2InputName = aboutSponsorInput2.value.trim();
    const aboutSponsor3InputName = aboutSponsorInput3.value.trim();


    if(aboutSponsorInputName === "" || aboutSponsor1InputName === "" || aboutSponsor2InputName === "" || aboutSponsor3InputName === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request8.post({aboutsponsor:aboutSponsorInputName,aboutsponsor1:aboutSponsor1InputName,aboutsponsor2:aboutSponsor2InputName,aboutsponsor3:aboutSponsor3InputName})
        .then(employee =>{
            uıAboutSponsor.addAboutSponsorToUI(employee);
        })
        .catch(err => console.log(err));
    }

    
    uıAboutSponsor.clearInputs();
    e.preventDefault();
}
// Elementleri getirdiğim yer
function addAboutQuestion(){

    const aboutQuestionInputName= aboutQuestionInput.value.trim();
    const aboutQuestion1InputName = aboutQuestionInput1.value.trim();
    const aboutQuestion2InputName = aboutQuestionInput2.value.trim();
    const aboutQuestion3InputName = aboutQuestionInput3.value.trim();


    if(aboutQuestionInputName === "" || aboutQuestion1InputName === "" || aboutQuestion2InputName === "" || aboutQuestion3InputName === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request7.post({aboutquestion:aboutQuestionInputName,aboutquestion1:aboutQuestion1InputName,aboutquestion2:aboutQuestion2InputName,aboutquestion3:aboutQuestion3InputName})
        .then(employee =>{
            uıAboutQuestion.addAboutQuestionToUI(employee);
        })
        .catch(err => console.log(err));
    }

    
    uıAboutQuestion.clearInputs();
    e.preventDefault();
}
// Tıklama Eventinin çalıştığı yer ayrıca imputları eşledğimiz yer
function addAboutTeam(){

    const aboutTeamInputName= aboutTeamInput.value.trim();
    const aboutTeam1InputName = aboutTeamInput1.value.trim();
    const aboutTeam2InputName = aboutTeamInput2.value.trim();
    const aboutTeam3InputName = aboutTeamInput3.value.trim();

    if(aboutTeamInputName === "" || aboutTeam1InputName === "" || aboutTeam2InputName === "" || aboutTeam3InputName === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request6.post({aboutteam:aboutTeamInputName,aboutteam1:aboutTeam1InputName,aboutteam2:aboutTeam2InputName,aboutteam3:aboutTeam3InputName})
        .then(employee =>{
            uıAboutTeam.addAboutTeamToUI(employee);
        })
        .catch(err => console.log(err));
    }

    
    uıAboutTeam.clearInputs();
    e.preventDefault();

}

// Tıklama Eventinin çalıştığı yer ayrıca imputları eşledğimiz yer
function addAboutMission(){

    const aboutMisionInputName= aboutMissionInput.value.trim();
    const aboutMision1InputName = aboutMissionInput1.value.trim();
    const aboutMision2InputName = aboutMissionInput2.value.trim();
    const aboutMision3InputName = aboutMissionInput3.value.trim();

    if(aboutMisionInputName === "" || aboutMision1InputName === "" || aboutMision2InputName === "" || aboutMision3InputName === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request5.post({aboutmission:aboutMisionInputName,aboutmission1:aboutMision1InputName,aboutmission2:aboutMision2InputName,aboutmission3:aboutMision3InputName})
        .then(employee =>{
            uıAboutMission.addAboutMissionToUI(employee);
        })
        .catch(err => console.log(err));
    }

    
    uıAboutMission.clearInputs();
    e.preventDefault();

}
// Tıklama Eventinin çalıştığı yer ayrıca imputları eşledğimiz yer
function addAboutMissionHead(){

    const aboutMisionHeadInputName= aboutMiisionHeadInput.value.trim();
    const aboutMisionHead1InputName = aboutMiisionHeadInput1.value.trim();
    const aboutMisionHead2InputName = aboutMiisionHeadInput2.value.trim();
    const aboutMisionHead3InputName = aboutMiisionHeadInput3.value.trim();

    if(aboutMisionHeadInputName === "" || aboutMisionHead1InputName === "" || aboutMisionHead2InputName === "" || aboutMisionHead3InputName === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request4.post({aboutmissionhead:aboutMisionHeadInputName,aboutmissionhead1:aboutMisionHead1InputName,aboutmissionhead2:aboutMisionHead2InputName,aboutmissionhead3:aboutMisionHead3InputName})
        .then(employee =>{
            uıAboutMissionHead.addAboutMissionHeadToUI(employee);
        })
        .catch(err => console.log(err));
    }

    
    uıAboutMissionHead.clearInputs();
    e.preventDefault();

}

// Tıklama Eventinin çalıştığı yer ayrıca imputları eşledğimiz yer
function addIndexServicesAdmin(){
    
    const indexServicesInputName = indexServicesInput.value.trim();
    const indexServicesInput1Name = indexServicesInput1.value.trim();
    const indexServicesInput2Name = indexServicesInput2.value.trim();
    const indexServicesInput3Name = indexServicesInput3.value.trim();

    if(indexServicesInputName === "" || indexServicesInput1Name === "" || indexServicesInput2Name === "" || indexServicesInput3Name === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request3.post({indexservices:indexServicesInputName,indexservices1:indexServicesInput1Name,indexservices2:indexServicesInput2Name,indexservices3:indexServicesInput3Name})
        .then(employee =>{
            uıIndexServicesAdmin.addIndexServicesToUI(employee);
        })
        .catch(err => console.log(err));
    }

    
    uıIndexServicesAdmin.clearInputs();
    e.preventDefault();
}

// Tıklama Eventinin çalıştığı yer ayrıca imputları eşledğimiz yer
function addIndexTeamAdmin(){

    const indexTeamInputName = indexTeamInput.value.trim();
    const indexTeamInput1Name = indexTeamInput1.value.trim();
    const indexTeamInput2Name = indexTeamInput2.value.trim();
    const indexTeamInput3Name = indexteaminput3.value.trim();

    if(indexTeamInputName === "" || indexTeamInput1Name === "" || indexTeamInput2Name === "" || indexTeamInput3Name === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request2.post({indexteam:indexTeamInputName,indexteam1:indexTeamInput1Name,indexteam2:indexTeamInput2Name,indexteam3:indexTeamInput3Name})
        .then(employee =>{
            uıIndexTeamAdmin.addIndexTeamToUI(employee);
        })
        .catch(err => console.log(err));
    }

    
    uıIndexTeamAdmin.clearInputsss();
    e.preventDefault();


}


// Tıklama Eventinin çalıştığı yer ayrıca imputları eşledğimiz yer
function  addHomeTeamAdmin(){

    const hometeamsubmitname= hometeamsubmit.value.trim();
    const hometeamsubmit1name = hometeamsubmit1.value.trim();
    const hometeamsubmit2name = hometeamsubmit2.value.trim();
    const hometeamsubmit3name= hometeamsubmit3.value.trim();

    if(hometeamsubmitname === "" || hometeamsubmit1name === "" || hometeamsubmit2name === "" || hometeamsubmit3name === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request1.post({teamemployees:hometeamsubmitname,teamemployees1:hometeamsubmit1name,teamemployees2:hometeamsubmit2name,teamemployees3:hometeamsubmit3name})
        .then(employee =>{
            uıTeam.addHomeTeamToUI(employee);
        })
        .catch(err => console.log(err));
    }

    
    uıTeam.clearInputss();
    e.preventDefault();

}

// Tıklama Eventinin çalıştığı yer ayrıca imputları eşledğimiz yer
function addEmployeeAdmin(){


    const employeNameAdmin = indexAboutInput.value.trim();
    const employeNameAdmin1 = indexAboutInput1.value.trim();
    const employeNameAdmin2 = indexAboutInput2.value.trim();
    const employeNameAdmin3  =indexAboutInput3.value.trim();
    const employeNameAdmin4  = homeabouttext.value.trim();
    const employeNameAdmin5  = homeabouttext1.value.trim();
    const employeNameAdmin6  = homeabouttext2.value.trim();
    const employeNameAdmin7  = homeabouttext3.value.trim();

    if(employeNameAdmin === "" || employeNameAdmin1 === "" || employeNameAdmin2 === "" || employeNameAdmin3 === "" || employeNameAdmin4 === "" || employeNameAdmin5 === "" || employeNameAdmin6 === ""|| employeNameAdmin7 === ""){

        alert("Lütfen tüm alanları doldurunuz!!");
    }
    else{

        request.post({deneme:employeNameAdmin,deneme1:employeNameAdmin1,deneme2:employeNameAdmin2,deneme3:employeNameAdmin3,stpost:employeNameAdmin4,stpost1:employeNameAdmin5,stpost2:employeNameAdmin6,stpost3:employeNameAdmin7})
        .then(employee =>{
            uıAdmin.addEmployeesToUIAdmin();
        })
        .catch(err => console.log(err));
    }



    uıAdmin.clearInputs();
    e.preventDefault();
}


// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function contactUpdateOrDelete(e){

    if(e.target.id === "contacttrash"){
        // silme
       contactDeleteAdmin(e.target);
    }
    else if(e.target.id === "contactfolder"){
        // güncelleme
        contactUpdateController(e.target.parentElement.parentElement.parentElement);

    }

}

// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function servicesTodosUpdateOrDelete(e){

    if(e.target.id === "servicestodostrash"){
        // silme
       servicesTodosDeleteAdmin(e.target);
    }
    else if(e.target.id === "servicestodosfolder"){
        // güncelleme
        servicesTodosUpdateController(e.target.parentElement.parentElement.parentElement);

    }
}

// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function servicesUpdateOrDelete(e){

    if(e.target.id === "servicestrash"){
        // silme
       servicesDeleteAdmin(e.target);
    }
    else if(e.target.id === "servicesfolder"){
        // güncelleme
        servicesUpdateController(e.target.parentElement.parentElement.parentElement);

    }
}

// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function aboutSponsorUpdateOrDelete(e){

    if(e.target.id === "aboutsponsortrash"){
        // silme
       aboutSponsorDeleteAdmin(e.target);
    }
    else if(e.target.id === "aboutsponsorfolder"){
        // güncelleme
        aboutSponsorUpdateController(e.target.parentElement.parentElement.parentElement);

    }

}

// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function aboutQuestionUpdateOrDelete(e){

    if(e.target.id === "aboutquestiontrash"){
        // silme
       aboutQuestionDeleteAdmin(e.target);
    }
    else if(e.target.id === "aboutmissionheadfolder"){
        // güncelleme
        aboutQuestionUpdateController(e.target.parentElement.parentElement.parentElement);

    }
}
// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function aboutTeamUpdateOrDelete(e){

    if(e.target.id === "aboutteamtrash"){
        // silme
       aboutTeamDeleteAdmin(e.target);
    }
    else if(e.target.id === "aboutmissionheadfolder"){
        // güncelleme
        aboutTeamUpdateController(e.target.parentElement.parentElement.parentElement);

    }
}
// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function aboutMissionUpdateOrDelete(e){

    if(e.target.id === "aboutmissiontrash"){
        // silme
       aboutMissionDeleteAdmin(e.target);
    }
    else if(e.target.id === "aboutmissionheadfolder"){
        // güncelleme
        aboutMissionUpdateController(e.target.parentElement.parentElement.parentElement);

    }

}

// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function aboutMissionHeadUpdateOrDelete(e){

    if(e.target.id === "aboutmissionheadtrash"){
        // silme
       aboutMissionHeadDeleteAdmin(e.target);
    }
    else if(e.target.id === "aboutmissionheadfolder"){
        // güncelleme
        aboutMissionHeadUpdateController(e.target.parentElement.parentElement.parentElement);

    }
}

// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function indexServicesUpdateOrDelete(e){

    if(e.target.id === "indexservicestrash"){
        // silme
       indexServicesDeleteAdmin(e.target);
    }
    else if(e.target.id === "indexservicesfolder"){
        // güncelleme
        indexServicesUpdateController(e.target.parentElement.parentElement.parentElement);

    }
}


// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function ındexTeamUpdateOrDelete(e){

    if(e.target.id === "indexteamtrash"){
        // silme
       ındexTeamDeleteAdmin(e.target);
    }
    else if(e.target.id === "indexteamfolder"){
        // güncelleme
        indexTeamUpdateController(e.target.parentElement.parentElement.parentElement);

    }

}
// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function  HomeTeamUpdateOrDelete(e){

    if(e.target.id === "hometeamtrash"){
        // silme
       HomeTeamDeleteEmployeeAdmin(e.target);
    }
    else if(e.target.id === "hometeamfolder"){
        // güncelleme
        HomeTeamUpdateEmployeeController(e.target.parentElement.parentElement.parentElement);
    }

  

}
// id ye göre silme veya güncelleme yapması gerektiğini söylediğimiz yer
function UpdateOrDeleteAdmin(e){

    if(e.target.id === "trash"){
        // silme
       deleteEmployeeAdmin(e.target);
    }
    else if(e.target.id === "folder"){
        // güncelleme
        updateEmployeeController(e.target.parentElement.parentElement.parentElement);
    }


}

// Silme işlemi yapıldı
function contactDeleteAdmin(targetEmployee){

    const id = 1;

    request11.delete(id)
    .then(message => {

        uıContactAdmin.deleteContactFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));
}

// Silme işlemi yapıldı
function  servicesTodosDeleteAdmin(targetEmployee){

    const id = 1;

    request10.delete(id)
    .then(message => {

        uıServicesTodos.deleteServicesTodosFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));
}

// Silme işlemi yapıldı
function servicesDeleteAdmin(targetEmployee){

    
    const id = 1;

    request9.delete(id)
    .then(message => {

        uıServices.deleteServicesFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));

}

// Silme işlemi yapıldı
function aboutSponsorDeleteAdmin(targetEmployee){

    const id = 1;

    request8.delete(id)
    .then(message => {

        uıAboutSponsor.deleteSponsorTeamFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));
}

// Silme işlemi yapıldı
function  aboutQuestionDeleteAdmin(targetEmployee){

    const id = 1;

    request7.delete(id)
    .then(message => {

        uıAboutQuestion.deleteQuestionTeamFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));
}
// Silme işlemi yapıldı
function  aboutTeamDeleteAdmin(targetEmployee){

    const id = 1;

    request6.delete(id)
    .then(message => {

        uıAboutTeam.deleteAboutTeamFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));
}

// Silme işlemi yapıldı
function  aboutMissionDeleteAdmin(targetEmployee){

    const id = 1;

    request5.delete(id)
    .then(message => {

        uıAboutMission.deleteAboutMissionFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));
}
// Silme işlemi yapıldı
function aboutMissionHeadDeleteAdmin(targetEmployee){

    const id = 1;

    request4.delete(id)
    .then(message => {

        uıAboutMissionHead.deleteAboutMissionHeadFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));

}

// Silme işlemi yapıldı
function indexServicesDeleteAdmin(targetEmployee){

    const id = 1;

    request3.delete(id)
    .then(message => {

        uıIndexServicesAdmin.deleteIndexServicesFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));

}

// Silme işlemi yapıldı
function ındexTeamDeleteAdmin(targetEmployee){

    const id = 1;

    request2.delete(id)
    .then(message => {

        uıIndexTeamAdmin.deleteIndexTeamFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));
}

// Silme işlemi yapıldı
function deleteEmployeeAdmin(targetEmployee){

    const id = 1;

    request.delete(id)
    .then(message => {

        uıAdmin.deleteEmployeeFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));
}

// Silme işlemi yapıldı
function  HomeTeamDeleteEmployeeAdmin(targetEmployee){

    const id = 1;

    request1.delete(id)
    .then(message => {

        uıTeam.homeTeamDeleteEmployeeFromUIAdmin(targetEmployee.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  
    })
    .catch(err => console.log(err));

}
// Liste Güncelleme işlemi
function indexServicesUpdate(){

    if(indexServicesUpdateState){

        const data = {indexservices:indexServicesInput.value.trim(),indexservices1:indexServicesInput1.value.trim(),indexservices2:indexServicesInput2.value.trim(),indexservices3:indexServicesInput3.value.trim()}


        request3.put(indexServicesUpdateState.indexServicesUpdateID,data)
        .then(updatedEmploye =>{

            uıIndexServicesAdmin.updateIndexServicesOnUI(updatedEmploye,updateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
}

// Liste Güncelleme işlemi
function ındexTeamUpdate(){

    if(indexTeamUpdateState){

        const data = {indexteam:indexTeamInput.value.trim(),indexteam1:indexTeamInput1.value.trim(),indexteam2:indexTeamInput2.value.trim(),indexteam3:indexteaminput3.value.trim()}


        request2.put(indexTeamUpdateState.indexTeamUpdateID,data)
        .then(updatedEmploye =>{

            uıAdmin.updateIndexTeamOnUI(updatedEmploye,updateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
}

// Liste Güncelleme işlemi
function updateEmployee(){

    if(updateState){

        const data = {deneme:indexAboutInput.value.trim(),deneme1:indexAboutInput1.value.trim(),deneme2:indexAboutInput2.value.trim(),deneme3:indexAboutInput3.value.trim(),stpost:homeabouttext.value.trim(),stpost1:homeabouttext1.value.trim(),stpost2:homeabouttext2.value.trim(),stpost3:homeabouttext3.value.trim()}


        request.put(updateState.updateID,data)
        .then(updatedEmploye =>{

            uıAdmin.updateEmployeeOnUI(updatedEmploye,updateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
}

// Liste Güncelleme işlemi
function homeTeamUpdateEmployee(){

    if(homeTeamUpdateState){

        const data = {teamemployees:hometeamsubmit.value.trim(),teamemployees1:hometeamsubmit1.value.trim(),teamemployees2:hometeamsubmit2.value.trim(),teamemployees3:hometeamsubmit3.value.trim()}


        request1.put(homeTeamUpdateState.homeTeamUpdateID,data)
        .then(updatedEmploye =>{

            uıTeam.homeTeamUpdateEmployeeOnUI(updatedEmploye,homeTeamUpdateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
   
}

// Liste Güncelleme işlemi
function aboutMissionHeadUpdate(){

    if(aboutMissionHeadUpdateState){

        const data = {aboutmissionhead:aboutMiisionHeadInput.value.trim(),aboutmissionhead1:aboutMiisionHeadInput1.value.trim(),aboutmissionhead2:aboutMiisionHeadInput2.value.trim(),aboutmissionhead3:aboutMiisionHeadInput3.value.trim(),}


        request4.put(aboutMissionHeadUpdateState.aboutMissionHeadUpdateID,data)
        .then(updatedEmploye =>{

            uıAboutMissionHead.updateAboutMissionHeadOnUI(updatedEmploye,homeTeamUpdateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
}

// Liste Güncelleme işlemi
function aboutMissionUpdate(){

    if(aboutMissionUpdateState){

        const data = {aboutmission:aboutMissionInput.value.trim(),aboutmission1:aboutMissionInput1.value.trim(),aboutmission2:aboutMissionInput2.value.trim(),aboutmission3:aboutMissionInput3.value.trim(),}


        request5.put(aboutMissionUpdateState.aboutMissionUpdateID,data)
        .then(updatedEmploye =>{

            uıAboutMission.updateAboutMissionOnUI(updatedEmploye,homeTeamUpdateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
}
// Liste Güncelleme işlemi
function aboutTeamUpdate(){

    if(aboutTeamUpdateState){

        const data = {aboutteam:aboutTeamInput.value.trim(),aboutteam1:aboutTeamInput1.value.trim(),aboutteam2:aboutTeamInput2.value.trim(),aboutteam3:aboutTeamInput3.value.trim(),}


        request6.put(aboutTeamUpdateState.aboutTeamUpdateID,data)
        .then(updatedEmploye =>{

            uıAboutTeam.updateAboutTeamOnUI(updatedEmploye,homeTeamUpdateState.updateParent);

        })
        .catch(err =>console.log(err));
    }

}

// Liste Güncelleme işlemi
function aboutQuestionUpdate(){

    if(aboutQuestionUpdateState){

        const data = {aboutquestion:aboutQuestionInput.value.trim(),aboutquestion1:aboutQuestionInput2.value.trim(),aboutquestion2:aboutQuestionInput2.value.trim(),aboutquestion3:aboutQuestionInput3.value.trim()}


        request7.put(aboutQuestionUpdateState.aboutQuestionUpdateID,data)
        .then(updatedEmploye =>{

            uıAboutQuestion.updateAboutQuestionOnUI(updatedEmploye,homeTeamUpdateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
}

// Liste Güncelleme işlemi
function aboutSponsorUpdate(){

    if(aboutSponsorUpdateState){

        const data = {aboutsponsor:aboutSponsorInput.value.trim(),aboutsponsor1:aboutSponsorInput1.value.trim(),aboutsponsor2:aboutSponsorInput2.value.trim(),aboutsponsor3:aboutSponsorInput3.value.trim()}


        request8.put(aboutSponsorUpdateState.aboutSponsorUpdateID,data)
        .then(updatedEmploye =>{

            uıAboutSponsor.updateAboutSponsorOnUI(updatedEmploye,homeTeamUpdateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
}

// Liste Güncelleme işlemi
function servicesUpdate(){
    
    if(servicesUpdateState){

        const data = {service:servicesInput.value.trim(),service1:servicesInput1.value.trim(),service2:servicesInput2.value.trim(),service3:servicesInput3.value.trim(),service4:servicesInput4.value.trim(),service5:servicesInput5.value.trim()}


        request9.put(servicesUpdateState.servicesUpdateID,data)
        .then(updatedEmploye =>{

            uıServices.updateServicesOnUI(updatedEmploye,homeTeamUpdateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
} 

// Liste Güncelleme işlemi
function servicesTodosUpdate(){

    if(servicesTodosUpdateState){

        const data = {servicestodo:servicesTodosInput.value.trim(),servicestodo1:servicesTodosInput1.value.trim(),servicestodo2:servicesTodosInput2.value.trim(),servicestodo3:servicesTodosInput3.value.trim(),servicestodo4:servicesTodosInput4.value.trim(),servicestodo5:servicesTodosInput5.value.trim(),servicestodo6:servicesTodosInput6.value.trim(),servicestodo7:servicesTodosInput7.value.trim(),}


        request10.put(servicesTodosUpdateState.servicesTodosUpdateID,data)
        .then(updatedEmploye =>{

            uıServicesTodos.updateServicesTodosOnUI(updatedEmploye,homeTeamUpdateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
}

// Liste Güncelleme işlemi
function contactUpdate(){

    if(contactUpdateState){

        const data = {contact:contactInput.value.trim(),contact1:contactInput1.value.trim(),contact2:contactInput2.value.trim(),contact3:contactInput3.value.trim(),contact4:contactInput4.value.trim(),contact5:contactInput5.value.trim(),contact6:contactInput6.value.trim(),contact7:contactInput7.value.trim(),contact8:contactInput8.value.trim()}


        request11.put(contactUpdateState.contactUpdateID,data)
        .then(updatedEmploye =>{

            uıContactAdmin.updateContactOnUI(updatedEmploye,homeTeamUpdateState.updateParent);

        })
        .catch(err =>console.log(err));
    }
}

// Güncelleme kontrolü
function  contactUpdateController(targetEmployee){

    uıContactAdmin.contactToogleUpdateButton(targetEmployee);

    if(contactUpdateState === null){

        contactUpdateState = {

            contactUpdateID :  targetEmployee.children[0].children[9].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        contactUpdateState = null;
    }
}

// Güncelleme kontrolü
function servicesTodosUpdateController(targetEmployee){

    uıServicesTodos.servicesTodosToogleUpdateButton(targetEmployee);

    if(servicesTodosUpdateState === null){

        servicesTodosUpdateState = {

            servicesTodosUpdateID :  targetEmployee.children[0].children[8].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        servicesTodosUpdateState = null;
    }
}

// Güncelleme kontrolü
function servicesUpdateController(targetEmployee){

    uıServices.servicesToogleUpdateButton(targetEmployee);

    if(servicesUpdateState === null){

        servicesUpdateState = {

            servicesUpdateID :  targetEmployee.children[0].children[6].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        servicesUpdateState = null;
    }
}

// Güncelleme kontrolü
function aboutSponsorUpdateController(targetEmployee){

    uıAboutSponsor.aboutSponsorToogleUpdateButton(targetEmployee);

    if(aboutSponsorUpdateState === null){

        aboutSponsorUpdateState = {

            aboutSponsorUpdateID :  targetEmployee.children[0].children[4].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        aboutSponsorUpdateState = null;
    }

}
// Güncelleme kontrolü
function  aboutQuestionUpdateController(targetEmployee){

    uıAboutQuestion.aboutQuestionToogleUpdateButton(targetEmployee);

    if(aboutQuestionUpdateState === null){

        aboutQuestionUpdateState = {

            aboutQuestionUpdateID :  targetEmployee.children[0].children[4].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        aboutQuestionUpdateState = null;
    }
}

// Güncelleme kontrolü
function  aboutTeamUpdateController(targetEmployee){

    uıAboutTeam.aboutTeamToogleUpdateButton(targetEmployee);

    if(aboutTeamUpdateState === null){

        aboutTeamUpdateState = {

            aboutTeamUpdateID :  targetEmployee.children[0].children[4].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        aboutTeamUpdateState = null;
    }
}
// Güncelleme kontrolü
function aboutMissionUpdateController(targetEmployee){

    uıAboutMission.aboutMissionToogleUpdateButton(targetEmployee);

    if(aboutMissionUpdateState === null){

        aboutMissionUpdateState = {

            aboutMissionUpdateID :  targetEmployee.children[0].children[4].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        aboutMissionUpdateState = null;
    }
}
// Güncelleme kontrolü
function aboutMissionHeadUpdateController(targetEmployee){

    uıAboutMissionHead.aboutMissionHeadToogleUpdateButton(targetEmployee);

    if(aboutMissionHeadUpdateState === null){

        aboutMissionHeadUpdateState = {

            aboutMissionHeadUpdateID :  targetEmployee.children[0].children[4].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        aboutMissionHeadUpdateState = null;
    }
}
// Güncelleme kontrolü
function  indexServicesUpdateController(targetEmployee){

    uıIndexServicesAdmin.indexServicesToogleUpdateButton(targetEmployee);

    if(indexServicesUpdateState === null){

        indexServicesUpdateState = {

            indexServicesUpdateID :  targetEmployee.children[0].children[4].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        indexServicesupdateState = null;
    }

}
// Güncelleme kontrolü
function  indexTeamUpdateController(targetEmployee){

    uıIndexTeamAdmin.IndexTeamToogleUpdateButton(targetEmployee);

    if(indexTeamUpdateState === null){

        indexTeamUpdateState = {

            indexTeamUpdateID :  targetEmployee.children[0].children[4].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        updateState = null;
    }


}

// Güncelleme kontrolü
function updateEmployeeController(targetEmployee){

    uıAdmin.toogleUpdateButton(targetEmployee);

    if(updateState === null){

        updateState = {

            updateID :  targetEmployee.children[0].children[4].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        updateState = null;
    }

}

// Güncelleme kontrolü
function  HomeTeamUpdateEmployeeController(targetEmployee){

    uıTeam.homeTeamToogleUpdateButton(targetEmployee);

    if(homeTeamUpdateState === null){

        homeTeamUpdateState = {

            homeTeamUpdateID :  targetEmployee.children[0].children[4].textContent,
            updateParent : targetEmployee
        }

    }
    else{
        homeTeamUpdateState = null;
    }
}

request.get()
.then(employees => console.log(employees))
.catch(err => console.log(err));

request.get()
.then(teams => console.log(teams))
.catch(err => console.log(err));

