function registrations(regStored){
    const regType1 = /[A-Z]{2} [0-9]{4,5}/
    const regType2 = /[A-Z]{2} [0-9]{3} [0-9]{3}/
    const regType3 = /[A-Z]{2} [0-9]{3}[-]{1}[0-9]{3}/
    var regNumbers = []
    regNumbers = regStored || []
    var regN = ''
    function setReg(reg){ 
        var theReg = reg.charAt(0).toUpperCase() + reg.charAt(1).toUpperCase() + reg.slice(2)
        if (theReg.match(regType1) || theReg.match(regType2) || theReg.match(regType3)){
            regN = theReg
            if (!regNumbers.includes(reg)){
                regNumbers.push(reg);                
            }
        }      
    }
    function getReg(){
        return regN
    }

    function getRegList(){
        return regNumbers
    }

    return {
        setReg,
        getReg,
        getRegList,
    }
}