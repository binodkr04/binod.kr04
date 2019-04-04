browser.waitForAngularEnabled(false);
describe('gmail  login',function(){
browser.get('https://accounts.google.com/');
it('login page',function(){
    
var email_phone = element(by.xpath("//input[@id='identifierId']"));
email_phone.sendKeys("binod.kr04");
var next = element(by.xpath('//*[@id="identifierNext"]/content/span')).click();
 var EC = protractor.ExpectedConditions;
var password = element(by.xpath('//*[@id="password"]/div[1]/div/div[1]/input'));
browser.wait(EC.visibilityOf(password));
password.sendKeys("binod@24");
var next = element(by.xpath('//*[@id="passwordNext"]/content/span')).click();
});
}); 

//*[@id="passwordNext"]/content/span
