class webAssert{
    verifyLaunchApp(value){
        cy.url().should('include',value)
    }
    verifyValue(cyElement,value){
        if(value!=""){
            cyElement.should('have.value',value)
        }
    }
    verifytext(cyElement,text1){
        if(text1!=""){
            cyElement.should('contain',text1)
        }
    }
}
export default webAssert