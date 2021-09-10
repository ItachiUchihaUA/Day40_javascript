
class Contact {
    firstN;
    lastN;
    address;
    city;
    state;
    zip;
    phone;
    email;

    constructor(firstN, lastN, address, city, state, zip, phone, email) {
        this.firstN = firstN;
        this.lastN = lastN;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone=phone;
        this.email = email;
    }
    toString() {
        console.log( this.firstN, this.lastN, this.address, this.city, this.state, this.zip, this.phone, this.email )
    }
}
let c = new Contact("Ujjwal","Aakash","gsdf#","pune","maha","123455","9876543212","ujjwal@gmail.com");
let fc = new Contact("Devesh","Pandit","as#","pune","maha","654321","9876598765","devesh@gamil.com");
function checkName(c){
    let reg= /^[A-Z][A-Za-z]{3,20}$/; 
    return reg.test(c);
}

function checkAddress(c){
    let reg= /^[A-Za-z#1-9]{3,}$/; 
    return reg.test(c);
}

function checkZip(c){
    let reg= /^[1-9]{6}$/; 
    return reg.test(c);
}

function checkPhone(c){
    let reg= /^[1-9]{10}$/; 
    return reg.test(c);
}

function checkEmail(c){
    let reg = /^[a-z1-9]+@[a-z1-9]+[.][a-z]+$/;
    return reg.test(c);
}

function checkall(c){
    if(checkName(c.firstN) && checkName(c.lastN) &&
        checkAddress(c.address) && checkAddress(c.city) &&
        checkAddress(c.state) && checkZip(c.zip) &&
        checkPhone(c.phone) && checkEmail(c.email)){
            return true;
        }
        else{
            return false;
        }
}

let list = new Array();

//
function addContact(c){
    if(checkall(c) && (list.findIndex(n => n.firstN==c.firstN)<0)){
        list.push(c);
        console.log("Added!");
    }
    else{
        console.log("Invalid Entry!");
    }
}

function editContact(name, c){
    for(let i= 0; i<list.length; i++){
        if(name==list[i].firstN){
            if(checkall(c)){
               list[i]=c;
               console.log("Edited!");
            }
        }else{
            console.log("Not Found");
        }
    } 
}
function deleteContact(name){
    let fin=false;
    for(let i= 0; i<list.length; i++){
        if(name==list[i].firstN){
            fin =true;
        }
        if(fin){
            list[i]=list[i+1];
        }
        if(i==list.length-1){
            list.pop();
            console.log("Deleted!");
            break;
        }
    }
}
function getCount(){
    return (list.length);
}

function findInCityOrState(cityOrStateN, firN){
    list.filter(n => n.city == cityOrStateN).forEach((n)=>{if(firN==n.firstN){console.log("Found")} });
}

function showAllContactINCityOrState(cityOrStateN){
    list.filter(n => n.city == cityOrStateN).forEach((n)=>{console.log(n.firstN)});
}

function sortByName(){
    list = list.sort(n => n.firstN);
    list.forEach(n => n.toString());
}

function sortByCity(){
    list = list.sort( n => n.city);
    list.forEach(n => n.toString());
}

addContact(c);
addContact(c);

addContact(fc);
console.log(getCount());

findInCityOrState("pune", "Ujjwal");

sortByName();

deleteContact("ujjwal");
console.log(getCount());