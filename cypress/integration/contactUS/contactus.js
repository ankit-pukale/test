import contactusobj from '../../page/contactUS'

import {Given,When,And,Then} from 'cypress-cucumber-preprocessor/steps'
let fixdata;
before(()=>{
    cy.fixture('contactUs').then(function(data){
        fixdata=data
    })
})
Given('User launches contactUS form',function(){
    // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    contactusobj.launchApp('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
})
And('user fill all details',function(){
    contactusobj.enterFirstName(fixdata)
    contactusobj.enterLastName(fixdata)
    contactusobj.enterEmail(fixdata)
    contactusobj.enterComment(fixdata)
})
Then('User click on Submit Button',function(){
    contactusobj.clickSubmit()
})
Then('user see message on page',function(){
    contactusobj.verifyText(fixdata)
})