browser.waitForAngularEnabled(false);
describe('gmail login', function() {
browser.get('https://accounts.google.com');
it('trying to login', function(){
element(by.id('identifierId')).sendKeys('binod.kr04');
element(by.xpath('//*[@id="identifierNext"]/content/span')).click();
var EC = protractor.ExpectedConditions;
var pass =  element(by.xpath('//*[@id="password"]/div[1]/div/div[1]/input'));
browser.wait(EC.visibilityOf(pass));
pass.sendKeys('binod@24');
element(by.xpath('//*[@id="passwordNext"]/content/span')).click();
});
});

