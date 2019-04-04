browser.waitForAngularEnabled(false);
describe('facebook homePage',function() {
browser.get('https://www.facebook.com/');


var email = element(by.id('email'));	
var password = element(by.id('pass'));
var login = element(by.id('u_0_2'));	
				
it('facebook login',function() {
email.sendKeys('binod.kr04@facebook.com');
password.sendKeys('lightingbolt@04');			
login.click();
});
});
/*
browser.waitForAngularEnabled(false);
describe('facebook homePage',function() {
browser.get('https://www.facebook.com/')

var email = element(by.id('email'));
var password = element(by.id('pass'));
var login = element(by.id('u_0_2'));

it('facebook login',function() {
email.sendKeys('binod.kr04@facebook.com');
password.sendKeys('lightingbolt@04');
login.click();
});
});*/
