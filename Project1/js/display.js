function display(){
    //display the number of pets
    document.getElementById("numberPets").innerHTML=`Registered pets: ${salon.pets.length}`;
    //clear the field
    document.getElementById("pets").innerHTML="";


    //travel the pet's array
    for(var i=0;i<salon.pets.length;i++){

        // assign a price for each service(TIP: you have to use if)
        //nails ->15, shower ->20, hair ->15, full ->25
    //create a tmp
    if(salon.pets[i].service==="nails"){
        salon.pets[i].price=15;
    }else if(salon.pets[i].service==="shower"){
        salon.pets[i].price=20;
    }else if(salon.pets[i].service==="hair"){
        salon.pets[i].price=15;
    }else if(salon.pets[i].service==="full"){
        salon.pets[i].price=25;
    }
            var tmp=`<div class="pet">
            <h3> ${salon.pets[i].name}<h3>
            <p> Age: ${salon.pets[i].age}</p>
            <p> Gender: ${salon.pets[i].gender}</p>
            <p> Breed: ${salon.pets[i].breed}</p>
            <p> Color: ${salon.pets[i].color}</p>
            <p> Owner: ${salon.pets[i].owner}</p>
            <p> Phone: ${salon.pets[i].phone}</p>
            <p> Service: ${salon.pets[i].service}</p>
            <p> Price: ${salon.pets[i].price}</p>
            <p> Payment: ${salon.pets[i].payment}</p>
            
            </div>`
    //concentrate all the info and display the tmp on the html
    document.getElementById("pets").innerHTML+=tmp;
    }
    //document.getElementById("pt").innerHTML=`<h2>You have registered ${salon.pets.length} pets.</h2>`;
    profitCalculation();
}
    //use the function
    display();
