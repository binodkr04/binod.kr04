browser.waitForAngularEnabled(false);
describe('Create facebook account',function() {
browser.get('https://www.facebook.com');

var firstname = element(by.name('firstname'));
var lastname = element(by.name('lastname'));
var phno = element(by.name('reg_email__'));
var password = element(by.name('reg_passwd__'));
var day = element(by.xpath('//*[@id="day"]/option[25]'));
var month = element(by.xpath('//*[@id="month"]/option[9]'));
var year = element(by.css('#year > option:nth-child(27)'));
var gender = element(by.xpath('//*[@id="u_0_a"]'));
it('new user account',function() {
firstname.sendKeys('geunk');
lastname.sendKeys('Moon');
phno.sendKeys('7684774394');
password.sendKeys('1234@ABC@5678');
day.click();
month.click();
year.click();
gender.click();
var EC = protractor.ExpectedConditions;
var SignUp = element(by.xpath('//*[@id="u_0_15"]'));
browser.wait(EC.visibilityOf(SignUp));
SignUp.click();
}); 
});

