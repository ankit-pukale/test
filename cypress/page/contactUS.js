import weblocators from "../page_locators/contactUs/contactUS.json"
import webAssert from "../utility/contactUS/webAssert"
import webActions from "../utility/contactUS/webAction"
let webAssertObj=new webAssert()
let webActionsObj=new webActions()
class contactus{
    get firstName(){
        return cy.get(weblocators.firstName)
    }
    get lastName(){
        return cy.get(weblocators.lastName)
    }
    get email(){
        return cy.get(weblocators.email)
    }
    get message(){
        return cy.get(weblocators.message)
    }
    get submitBtn(){
        return cy.get(weblocators.submitBtn)
    }
    get thankYou(){
        return cy.get(weblocators.thankYou)
    }
    launchApp(value){
        webActionsObj.launchUrl(value)
    }
    enterFirstName(actionObj){
        webActionsObj.enterText(this.firstName,actionObj.firstName)
    }
    enterLastName(actionObj){
        webActionsObj.enterText(this.lastName,actionObj.lastName)
    }
    enterEmail(actionObj){
        webActionsObj.enterText(this.email,actionObj.email)
    }
    enterComment(actionObj){
        webActionsObj.enterText(this.message,actionObj.message)
    }
    clickSubmit(){
        webActionsObj.buttonClick(this.submitBtn)
    }
    verifyText(actionObj){
        webAssertObj.verifytext(this.thankYou,actionObj.ThankYou)
    }
}
let contactusobj=new contactus()
export default contactusobj