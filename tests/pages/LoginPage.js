const { I } = inject();

class LoginPage {
  constructor() {
    this.fields = {
      username: '#username',
      password: '#password'
    };
    this.buttons = {
      login: '.radius',
      logout: '.button'
    };
    this.messages = {
      success: 'You logged into a secure area!',
      error: 'Your usernam is invalid!'
    };
  }


  loginWith(user, pass) {
    I.fillField(this.fields.username, user);
    I.fillField(this.fields.password, pass);
  }

  checkSuccess() {
    I.see(this.messages.success);
  }

  checkError() {
    I.see(this.messages.error);
  }

  clickLogin() {
    I.click(this.buttons.login);
  }

  clickLogout() {
    I.click(this.buttons.logout);
  }
}

module.exports = new LoginPage();
