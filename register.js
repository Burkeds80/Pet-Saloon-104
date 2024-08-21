// object literal  
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Mike st",
        zip: "92101",
        state:"san diego california",
        country:"USA"
    },
    pets:[] //this is a array
}
let counter = 0;
//object constructon (special function)
function Pet(name,age,gender,service,breed,color){
    this.nameP=name;
    this.AgeP=age;
    this.genderP=gender;
    this.servicep=service;
    this.breedp=breed;
    this.ColorP=color;
    this.id=counter++;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputService = document.getElementById("txtService");
let inputBreed = document.getElementById("txtBreed");
let inputColor = document.getElementById("txtColor");

function isValid(aPet){
    // assuming that the pet is valid
    let validation =true;

    inputName.classList.remove("error");
    inputAge.classList.remove("error");

    if(aPet.nameP==""){
        validation=false;
        inputName.classList.add("error");
    }

    //validate the age
    if(aPet.ageP==""){
        validation=false;
        inputAge.classList.add("error")
    }

    return validation;
}  

function register(){
    //get the values from the input
    //use the constroucur to create an object
let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value,inputBreed.value, inputColor.value);

if(isValid(newPet)==true){
    //push the new pet into the array
    petSalon.pets.push(newPet);
    //display the new pet on the console
    // display Cards();
    displayTable();
    clearform();
    }
}

function clearform(){
    inputName.value="";
}

function deletePet(petID){
    console.log("deleting pet" + petID);
    // delete from the HTML
    document.getElementById(petID).remove();
    //remove from the array
    petSalon.pets.splice(petSalon.pets.indexOf(petID),1);
}

function init(){
    //creating objects using constructor
    let scooby = new Pet("Scooby", 60, "Male", "Grooming", "Dane","Black");
    let scrappy = new Pet("Scrappy", 50, "Male", "Grooming","Dane","Brown");
    petSalon.pets.push(scooby,scrappy); //pushing the elements on th array
    // displayCards();
    displayTable();
}
window.onload=init; 