const { I } = inject();
const loginPage = require('../pages/LoginPage');
const users = require('../support/data.json');

//Caso de prueba #1 :: Login exitoso con credenciales válidas
Given('I am on the login page', () => {
  I.amOnPage('/login');
    //I.waitForElement('#username'); --waitForElement porque a veces las pagina dura mas 30seg para cargar
});
When('I enter valid username and password', () => {
  loginPage.loginWith(users.validUser.username, users.validUser.password);
});
When('hI click on Login', () => {
  loginPage.clickLogin();
})
Then('I should see the message {string}', () => {
  loginPage.checkSuccess();
});
When('I click on Logout', () => {
  loginPage.clickLogout();
})

//Caso de prueba #2 :: Login fallido con credenciales inválidas
Given('I am on the login page', () => {
  I.amOnPage('/login');
  //I.waitForElement('#username', 20); --waitForElement porque a veces las pagina dura mas 30seg para cargar
})
When('I enter invalid username and password', () => {
  loginPage.loginWith(users.invalidUser.username, users.invalidUser.password);
})
When('I click on Login', () => {
  loginPage.clickLogin();
})
Then('I should see the error message {string}', (mensaje) => {
  loginPage.checkError(mensaje);
})

//Caso de prueba #3 :: Login con usuario vacío
Given('I am on the login page', () => {
  I.amOnPage('/login');
    //I.waitForElement('#username'); --waitForElement porque a veces las pagina dura mas 30seg para cargar
})
When('I leave the username empty and enter the password', () => {
  loginPage.loginWith(users.emptyUsername.username, users.emptyUsername.password);
})
When('I click on Login', () => {
  loginPage.clickLogin();
})
Then('I should see the error message {string}', (mensaje) => {
  loginPage.checkError(mensaje);
})