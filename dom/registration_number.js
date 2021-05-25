var regNumber = document.querySelector('.regNumberInput')
var town = document.querySelector('.town')
var addBtn = document.querySelector('.addBtn')
var showBtn = document.querySelector('.showBtn')
var showAllBtn = document.querySelector('.allTowns')
var reset = document.querySelector('.reset')
var error = document.querySelector('.error')
var elements = document.querySelector('.myElement')

const regType1 = /^((CA|CJ|CL)\s([0-9]){5})$/
const regType2 = /^((CA|CL|CJ)\s\d{3}\s\d{3})$/
const regType3  =/^((CA|CL|CJ)\s\d{3}\-\d{3})$/
    


var  selectTown = ''
var regNumbers = []
if(localStorage['reg-number']){
    regNumbers = JSON.parse(localStorage.getItem('reg-number'))
}
const element = document.getElementById('myEle')    
let registration = registrations(regNumbers)

function addReg(){
    
    // element.innerHTML = ''
    var regNu = regNumber.value
    registration.setReg(regNu)
    var regN = regNu.charAt(0).toUpperCase() + regNu.charAt(1).toUpperCase() + regNu.slice(2)
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
        error.value = "Please enter vehicle registration number"
        setTimeout(()=>{
            error.value = ''
        }, 4000)
    }
    uncheckRadioBtn()
}

function showRegForTown(){
    element.innerHTML = ''
    var theSelectTown = document.querySelector("input[name='radio']:checked");
    var storeDReg = registration.getRegList()
    if(theSelectTown){
        for(var i = 0; i < storeDReg.length; i++){        
            if(storeDReg[i].startsWith(theSelectTown.value)){            
                var regDiv = document.createElement("BUTTON");
                var input = document.createTextNode(storeDReg[i])
                regDiv.appendChild(input);
                regDiv.classList.add('regCol')
                document.getElementById('myEle').appendChild(regDiv)
            } 
            else if(!storeDReg[i].startsWith(theSelectTown.value)){
                setTimeout(()=>{
                    error.innerHTML = "No registration number(s) for this town"
                    error.classList.add('error')
                },0)
                setTimeout(()=>{
                    error.innerHTML = ''
                    error.classList.remove('error')
                }, 6000)
            }      
        }
        uncheckRadioBtn() 
    }
    else{
        setTimeout(()=>{
            error.innerHTML = "Please select town"
            error.classList.add('error')
        },0)
        setTimeout(()=>{
            error.innerHTML = ''
            error.classList.remove('error')
        }, 4000)
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