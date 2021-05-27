describe('Registration number exercise', ()=>{
      
    describe('Validating by regex',()=>{
        it('Should return error message if wrong registration number is entered', ()=>{
            let registration = registrations()
             assert("Wrong registration number",registration.setReg('ca12345'))
         })
         it('Should return error message if entered registration number entered does not belong from Cape Town/ Paarl or Stellenbosch', ()=>{
             let registration = registrations()
              assert("Wrong registration number",registration.setReg('cy 12345'))
          })
          it("Bellville registratiion number entered and No Bellville on Application", ()=>{
             let registration = registrations()
             assert("Wrong registration number", registration.setReg("CY 152775"))
         })
         it("It should add to the list registration when it is correct", ()=>{
             let registration = registrations()
             registration.setReg("CA 123 456")
             assert(['CA 123 456'],registration.getRegList() )
         })
         it("It should not add to the list registration when it is correct and already exist on the list", ()=>{
             let registration = registrations()
             registration.setReg("CA 123 456")
             registration.setReg("CA 123 456")
             assert(['CA 123 456'],registration.getRegList() )
         })
         it("It should add to the list registration when it is correct and have not been added before", ()=>{
             let registration = registrations()
             registration.setReg("CA 123 456")
             registration.setReg("CL 123 456")
             assert(['CA 123 456','CL 123 456'],registration.getRegList() )
         })
    })  
     it("It should be able to convert small letter to capital letter when registration is been entered as 'ca 878 555'", ()=>{
        let registration = registrations()
        registration.setReg("ca 878 555")
       
        assert(['CA 878 555"'],registration.getRegList() )
    })
    it("It should be able to convert small letter to capital letter when registration is been entered as 'cA 878 555'", ()=>{
        let registration = registrations()
        registration.setReg("ca 878 555")
       
        assert(['CA 878 555"'],registration.getRegList() )
    })
    it("It should be able to convert small letter to capital letter when registration is been entered as 'Cl 878 555'", ()=>{
        let registration = registrations()
        registration.setReg("ca 878 555")
       
        assert(['CL 878 555"'],registration.getRegList() )
    })
    it("It should be able to convert small letter to capital letter when registration is been entered as 'Cl 878 555'", ()=>{
        let registration = registrations()
        registration.setReg("ca 878 555")
       
        assert(['CL 878 555"'],registration.getRegList() )
    })
})