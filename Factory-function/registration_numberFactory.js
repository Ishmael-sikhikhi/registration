function registrations(regStored){
    const regType1 = /^((CA|CJ|CL)\s([0-9]){5})$/
    const regType2 = /^((CA|CL|CJ)\s\d{3}\s\d{3})$/
    const regType3  =/^((CA|CL|CJ)\s\d{3}\-\d{3})$/

    console.log('Test for regType1:'+regType1.test(regStored))
    
    var regNumbers = []
    regNumbers = regStored || []
    var regN = ''
    function setReg(reg){ 
        var theReg = reg.charAt(0).toUpperCase() + reg.charAt(1).toUpperCase() + reg.slice(2)
        if(theReg){
            if ((theReg.match(regType1) || theReg.match(regType2) || theReg.match(regType3))  ){
                regN = theReg
                if (!regNumbers.includes(theReg)){
                    regNumbers.push(theReg);                
                }
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