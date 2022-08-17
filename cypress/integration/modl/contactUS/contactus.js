import {Given,When,And,Then} from 'cypress-cucumber-preprocessor/steps'
Given('User launches contactUS form',function(){
   cy.task('hello', { greeting: 'Hello', name: 'World' })
   })
