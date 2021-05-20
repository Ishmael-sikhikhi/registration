function registrations(regStored){
    const regType1 = /[A-Z]{2} [0-9]{4,5}/
    const regType2 = /[A-Z]{2}  [0-9]{3} [0-9]{3}/
    const regType3 = /[A-Z]{2} [0-9]{3}[-]{1}[0-9]{3}/
    var regNumbers = []
    regNumbers = regStored || []

    function setReg(reg){ 
        if (reg.match(regType1) || reg.match(regType2) || reg.match(regType3)){
            if (!regNumbers.includes(reg)){
                regNumbers.push(reg);
            }
        }   
        else {
            return setTimeout(()=>"Please enter supported format vehicle registration number",0)
        }    
    }

    function getReg(){
        return regNumbers
    }

    return {
        setReg,
        getReg,
    }
}