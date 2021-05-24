var regNumber = document.querySelector('.regNumberInput')
var town = document.querySelector('.town')
var addBtn = document.querySelector('.addBtn')
var showBtn = document.querySelector('.showBtn')
var reset = document.querySelector('.reset')
var error = document.querySelector('.error')
var elements = document.querySelector('.elements')

const regType1 = /[A-Z]{2} [0-9]{4,5}/
const regType2 = /[A-Z]{2}  [0-9]{3} [0-9]{3}/
const regType3 = /[A-Z]{2} [0-9]{3}[-]{1}[0-9]{3}/

var  selectTown = ''
var regNumbers = []

if(localStorage['reg-number']){
    regNumbers = JSON.parse(localStorage.getItem('reg-number'))
}
const element = document.getElementById('myEle')    
let registration = registrations(regNumbers)

function addReg(){
    var regN = regNumber.value
    if (regN === ''){
        error.innerHTML = "No"
    }
   if (regN !== '') {
        registration.setReg(regN)
        var regDiv = document.createElement("BUTTON");
        var input = document.createTextNode(regNumber.value)
        regDiv.appendChild(input);
        document.getElementById('myEle').appendChild(regDiv)

          
   }
   else if (regN === ''){
       
    }
}

function showRegForTown(){
    alert('show is clicked')
    var theSelectTown = document.querySelector("input[name='radio']:checked");
    if (theSelectTown){
        selectTown = theSelectTown.value
        uncheckRadioBtn()
    }
     
}

function resetRegSorage(){
    alert('Resetted')
    localStorage.clear()
    location.reload()
    // uncheckRadioBtn()
}

function regNubersList(){

}

function uncheckRadioBtn(){
    document.getElementById("rad1").checked = false;
    document.getElementById("rad2").checked = false; 
    document.getElementById("rad3").checked = false; 
    selectTown = null
}

addBtn.addEventListener('click', addReg)
showBtn.addEventListener('click', showRegForTown)
reset.addEventListener('click', resetRegSorage)