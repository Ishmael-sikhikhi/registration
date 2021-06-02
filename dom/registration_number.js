var regNumber = document.querySelector('.regNumberInput')
var town = document.querySelector('.town')
var addBtn = document.querySelector('.addBtn')
var showBtn = document.querySelector('.showBtn')
var showAllBtn = document.querySelector('.allTowns')
var reset = document.querySelector('.reset')
var error = document.querySelector('.error')
var elements = document.querySelector('.myElement')


const regType1 = /^((CA|CJ|CL)\s([0-9]){5})$/
const regType2 = /^((CA|CL|CJ)\s([0-9]){3}\s([0-9]){3})$/
const regType3 = /^((CA|CL|CJ)\s([0-9]){3}\-([0-9]){3})$/



var selectTown = ''
var regNumbers = []
if (localStorage['reg-number']) {
    regNumbers = JSON.parse(localStorage.getItem('reg-number'))
}
const element = document.getElementById('myEle')
let registration = registrations(regNumbers)

function addReg() {

    element.innerHTML = ''
    var regNu = regNumber.value

    var regN = regNu.charAt(0).toUpperCase() + regNu.charAt(1).toUpperCase() + regNu.slice(2)
    if (regN === '') {
        setTimeout(() => {
            error.innerHTML = "Please enter vehicle registration number"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.innerHTML = ''
            resetEle()
        }, 4000)
    }
    else if (regN !== '') {
        regN = regN.charAt(0).toUpperCase() + regN.charAt(1).toUpperCase() + regN.slice(2)
        // if(){

        // }

        if (regType1.test(regN) || regType2.test(regN) || regType3.test(regN)) {


            if (!(registration.getRegList()).includes(regN)) {
                registration.setReg(regNu)
                for (var i = 0; i < (registration.getRegList()).length; i++) {

                    var regDiv = document.createElement("BUTTON");
                    var input = document.createTextNode((registration.getRegList())[i])
                    regDiv.appendChild(input);
                    regDiv.classList.add('regCol')
                    document.getElementById('myEle').appendChild(regDiv)
                }
                localStorage.setItem('reg-number', JSON.stringify(registration.getRegList()))
                resetEle()
            }

            //
            else {
                setTimeout(() => {
                    error.innerHTML = regN + " is already on the list list"
                    error.classList.add('error')
                }, 0)
                setTimeout(() => {
                    error.innerHTML = ''
                    resetEle()
                }, 6000)
                for (var i = 0; i < (registration.getRegList()).length; i++) {
                    var regDiv = document.createElement("BUTTON");
                    var input = document.createTextNode((registration.getRegList())[i])
                    regDiv.appendChild(input);
                    regDiv.classList.add('regCol')
                    document.getElementById('myEle').appendChild(regDiv)
                }
            }
            //push to localstorage

        }
        else {
            
            setTimeout(() => {
                error.innerHTML = "Registration number do not match the format"
                error.classList.add('error')
            }, 0)
            setTimeout(() => {
                error.innerHTML = ''
                resetEle()
            }, 4000)
        }

    }
    else {
        setTimeout(() => {
            error.value = "Please enter vehicle registration number"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.value = ''
            resetEle()
        }, 4000)
    }

    uncheckRadioBtn()
}

for (var i = 0; i < (registration.getRegList()).length; i++) {
    var regDiv1 = document.createElement("BUTTON");
    var input = document.createTextNode((registration.getRegList())[i])
    regDiv1.appendChild(input);
    regDiv1.classList.add('regCol')
    document.getElementById('myEle').appendChild(regDiv1)
}

function showRegForTown() {
    element.innerHTML = ''
    resetEle()
    var storeDReg = []
    var theSelectTown = document.querySelector("input[name='radio']:checked");


    if (theSelectTown) {
        var townReg = theSelectTown.value
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
        storeDReg = registration.filterFunction(townReg)
        console.log(storeDReg)
        if (storeDReg.length === 0) {
            setTimeout(() => {
                error.innerHTML = "No registration number(s) for this town"
                error.classList.add('error')
            }, 0)
            setTimeout(() => {
                error.innerHTML = ''
                error.classList.remove('error')
                uncheckRadioBtn()
            }, 6000)
        }
        if (storeDReg.length !== 0) {
            for (var i = 0; i < storeDReg.length; i++) {

                var regDiv = document.createElement("BUTTON");
                var input = document.createTextNode(storeDReg[i])
                regDiv.appendChild(input)
                document.getElementById('myEle').appendChild(regDiv)
                uncheckRadioBtn()
            }

        }

    }
    

    else if (!theSelectTown){
        setTimeout(() => {
            error.innerHTML = "Please select town"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.innerHTML = ''
            error.classList.remove('error')
        }, 4000)
    }


}
function resetEle() {
    return regNumber.value = ''
}
function resetRegSorage() {
    element.innerHTML = ''
    resetEle()
    uncheckRadioBtn()
    if (localStorage['reg-number']) {
        setTimeout(() => {

            error.innerHTML = "Storage have been successfully resetted!"
            error.classList.add('notification')
        }, 0)
        setTimeout(() => {
            localStorage.clear()
            location.reload()
            error.innerHTML = ''
        }, 4000)
    }
    else {
        setTimeout(() => {
            error.innerHTML = "No registration on storage"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.innerHTML = ''
            error.classList.remove('error')
        }, 4000)
    }
}

function uncheckRadioBtn() {
    document.getElementById("rad1").checked = false;
    document.getElementById("rad2").checked = false;
    document.getElementById("rad3").checked = false;
    selectTown = null
}

function showAll() {
    var storeDReg = registration.getRegList()
    element.innerHTML = ''
    resetEle()
    uncheckRadioBtn()

    if (storeDReg.length === 0) {
        setTimeout(() => {
            error.innerHTML = "No registration on storage"
            error.classList.add('error')
        }, 0)
        setTimeout(() => {
            error.innerHTML = ''
            error.classList.remove('error')
        }, 4000)
    }

    else if (storeDReg.length !== 0) {

        for (var i = 0; i < storeDReg.length; i++) {
            var regDiv = document.createElement("BUTTON");
            var input = document.createTextNode(storeDReg[i])
            regDiv.appendChild(input);
            regDiv.classList.add('regCol')
            document.getElementById('myEle').appendChild(regDiv)
        }
    }
}

addBtn.addEventListener('click', addReg)
showBtn.addEventListener('click', showRegForTown)
reset.addEventListener('click', resetRegSorage)
showAllBtn.addEventListener('click', showAll)