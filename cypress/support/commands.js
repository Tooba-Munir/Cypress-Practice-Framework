// Cypress custom commands can be added here
import * as actions from '../actions/sampleActions.js';
Cypress.Commands.add('Login',(username,password)=>{
    actions.visitPage('/auth/login');
    actions.typeText('[name="username"]',username);
    actions.typeText('[name="password"]',password);
    actions.clickByXpath('//button[normalize-space()="Login"]');
})