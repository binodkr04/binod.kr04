browser.waitForAngularEnabled(false);
describe('create gmail account',function(){
browser.get('https://accounts.google.com/signup/v2/webcreateaccount?hl=en-GB&flowName=GlifWebSignIn&flowEntry=SignUp&nogm=true');

var firstName = element(by.name('firstName'));
var lastName = element(by.name('lastName'));
var userName = element(by.name('Username'));
var password =  element(by.name('Passwd'));
var confirmPassword = element(by.name('ConfirmPasswd'));
	var login=element(by.buttonText("Next"));

it('new user detail',function(){
firstName.sendKeys('geunk');
lastName.sendKeys('moon');
userName.sendKeys('geunkmoon24');
password.sendKeys('hello@1234');
confirmPassword.sendKeys('hello@1234');
login.click().then(function(){
console.info("Logged in successfully");
        });
});
});

