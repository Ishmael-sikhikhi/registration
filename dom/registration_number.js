var regNumber = document.querySelector('.regNumberInput')
var town = document.querySelector('.town')
var addBtn = document.querySelector('.addBtn')
var showBtn = document.querySelector('.showBtn')
var showAllBtn = document.querySelector('.allTowns')
var reset = document.querySelector('.reset')
var error = document.querySelector('.error')
var elements = document.querySelector('.myElement')

const regType1 = /[A-Z]{2} [0-9]{4,5}/
const regType2 = /[A-Z]{2} [0-9]{3} [0-9]{3}/
const regType3 = /[A-Z]{2} [0-9]{3}[-]{1}[0-9]{3}/

var  selectTown = ''
var regNumbers = []
if(localStorage['reg-number']){
    regNumbers = JSON.parse(localStorage.getItem('reg-number'))
}
const element = document.getElementById('myEle')    
let registration = registrations(regNumbers)

function addReg(){
    element.innerHTML = ''
    var regN = regNumber.value
    regN = regN.charAt(0).toUpperCase() + regN.charAt(1).toUpperCase() + regN.slice(2)
    console.log(regN)
    if (regN === ''){
        setTimeout(()=> {
            error.value = "Please enter vehicle registration number"
            error.classList.add('error')
        },0)
        setTimeout(()=>{
            error.value = ''
        }, 4000)
    }
   if (regN !== '') {
    // regN = regN.charAt(0).toUpperCase() + regN.charAt(1).toUpperCase() + regN.slice(2)
    if (regN.match(regType1) || regN.match(regType2) || regN.match(regType3)){        
            registration.setReg(regN)
            var regDiv = document.createElement("BUTTON");
            var input = document.createTextNode(registration.getReg())
            regDiv.appendChild(input);
            regDiv.classList.add('regCol')
            document.getElementById('myEle').appendChild(regDiv)
            //push to localstorage
            localStorage.setItem('reg-number',JSON.stringify(registration.getRegList()))
            
        }
        else{
            setTimeout(()=> {
                error.value = "Please enter vehicle registration number"
                error.classList.add('error')
            },0)
            setTimeout(()=>{
                error.value = ''
            }, 4000)
        }
          
   }
   else if (regN === ''){
       
    }
}

function showRegForTown(){
    element.innerHTML = ''
    var theSelectTown = document.querySelector("input[name='radio']:checked");
    var storeDReg = registration.getRegList()
    for(var i = 0; i < storeDReg.length; i++){
        
        if(storeDReg[i].startsWith(theSelectTown.value)){            
            var regDiv = document.createElement("BUTTON");
            var input = document.createTextNode(storeDReg[i])
            regDiv.appendChild(input);
            regDiv.classList.add('regCol')
            document.getElementById('myEle').appendChild(regDiv)
        }
      
    }
    uncheckRadioBtn()    
     
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

function showAll(){
    element.innerHTML = ''
    var storeDReg = registration.getRegList()
    
    for(var i = 0; i < storeDReg.length; i++){
        var regDiv = document.createElement("BUTTON");
            var input = document.createTextNode(storeDReg[i])
            regDiv.appendChild(input);
            regDiv.classList.add('regCol')
            document.getElementById('myEle').appendChild(regDiv)
    }
    uncheckRadioBtn()
}

addBtn.addEventListener('click', addReg)
showBtn.addEventListener('click', showRegForTown)
reset.addEventListener('click', resetRegSorage)
showAllBtn.addEventListener('click', showAll)