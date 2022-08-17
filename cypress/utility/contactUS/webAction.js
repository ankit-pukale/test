class webActions{
launchUrl(value){
    cy.visit(value)
}
enterText(cyElement,value1){
cyElement.type(value1)
}
buttonClick(cyElement){
    cyElement.click()
}
}
export default webActions