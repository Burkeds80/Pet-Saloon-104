let pets=[];//petsarray

//the constructor
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}

function register(){
    let inputName = document.getElementById("txtName").Value;
    let inputAge = document.getElementById("txtAge").Value;
    let inputGender = document.getElementById("txtGender").Value;
    let inputBreed = document.getElementById("txtBreed").Value;
    console.log("Register function");
}

function init(){
    let pet1 = new Pet("Scooby",10,"Male","husky");//my first obj
    let pet2 = new Pet("Scrappy",9,"Male","Mixed");
    console.log(pet1,pet2);
}

window.onload=init;//wait to render the HTML

