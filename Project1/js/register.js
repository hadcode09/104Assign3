const salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"192-k"
    },
    hours:{
        open:"8:00 am",
        close:"5:00 pm"
    },
    pets:[
    //  {name:"Scoody", age:50, breed:"Dane", gender:"Male", owner:"Shaggy",phine:"555-555-5555"},
    //  {name:"Scrapy", age:40, breed:"Dane", gender:"Male", owner:"Shaggy",phine:"555-555-5555"},
    //  {name:"Speedy", age:60, breed:"Mixed", gender:"Male", owner:"Bugs",phine:"444-444-4444"}
    ]
}

 //name,age,breed,gender,service,owner's name, contact phone
 
 document.getElementById("footer-text").innerHTML=`
    <p><h5>${salon.name}</h5></p>
    <p><h5>${salon.address.street}, ${salon.address.number}</h5></p>
    <p><h5>It opens from ${salon.hours.open} to ${salon.hours.close}</h5></p>
`;

 /*for(var i=0;i<salon.pets.length;i++){
     console.log(salon.pets[i]);
 }*/


 //create the pet class

 class Pet{
     constructor(name,age,breed,gender,color,owner,phone,service,payment){
         this.name=name;
         this.age=age;
         this.breed=breed;
         this.gender=gender;
         this.color=color; 
         this.owner=owner;
         this.phone=phone;
         this.service=service;
         this.price=0;
         this.payment=payment;
     }
 }
 //create pets using the constructor
 var scooby=new Pet("Scooby",50, "Dane", "Male", "Black and White", "Shaggy", "555-555-5555","full", "cash",)
 var scrapy=new Pet("Scrapy",40, "Dane", "Male", "Brown", "Shaggy", "555-555-5555","shower", "credit")
 var lassie=new Pet("Scrapy",30, "Collie", "Female", "Brown and White", "Kevin", "777-555-5555","shower", "cebit")
 var speedy=new Pet("Speedy",60, "Mixed", "Male", "Black", "Bunny", "333-333-3333","nails", "cash");
 console.log(scooby,scrapy,lassie,speedy);
 /*document.write(scooby, scrapy, lassie, speedy);*/

 //push the pets into the array
 //salon.pets=[scooby, scrapy,lassie, speedy];
 salon.pets.push(scooby);
 salon.pets.push(scrapy);
 salon.pets.push(lassie);
 salon.pets.push(speedy);
 console.log(salon.pets);

 
// get the info from the inputs
var txtName=document.getElementById("petNameTxt");
var txtAge=document.getElementById("petAgeTxt");
var txtBreed=document.getElementById("petBreedTxt");
var txtGender=document.getElementById("petGenderTxt");
var txtColor=document.getElementById("petColorTxt");
var txtOwner=document.getElementById("ownerNameTxt");
var txtPhone=document.getElementById("ownerPhoneTxt");
var txtService=document.getElementById("petServiceTxt");
var txtPayment=document.getElementById("petPaymentTxt");

/*console.log(txtName.value);
console.log(txtAge.value);
console.log(txtBreed.value);
console.log(txtGender.value);
console.log(txtService.value);
console.log(txtOwner.value);
console.log(txtPhone.value);*/

function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtColor.value="";
    txtOwner.value="";
    txtPhone.value="";
    txtService.value="";
    txtPayment.value="";
}
// create the functio register
function register(){
//crate a generic constructor
var thePet=new Pet(txtName.value, txtAge.value, txtBreed.value, txtGender.value, txtColor.value, txtOwner.value, txtPhone.value,txtService.value, txtPayment.value)
console.log(thePet)
//push the pet into the array
salon.pets.push(thePet);
//display the function
display();
clear();

 }

 function profitCalculation(){
     //create a  variable  sum and initializate the variable
var sum=0;
     //travel the salon.pets[] (for)

     for(var i=0;i<salon.pets.length;i++){
          //sum all the prices
         sum=sum+salon.pets[i].price;
     }
    

     //display the result on the html
     document.getElementById("profits").innerHTML=`Profits: $${sum}`;
 }