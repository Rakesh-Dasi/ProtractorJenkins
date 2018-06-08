var clickItem = element(by.xpath("//*[text()='Child Care Solutions - 106']"));
var nextPage = element(by.xpath("//*[text()='Next']"));
var first = true;
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.ignoreSynchronization=true;
    browser.get('https://nheasy.nh.gov/#/forms/');
	//To verify Title
	expect(browser.getTitle()).toBe('Forms');	
	console.log('Title Verified');
	browser.sleep(2000);	
	//To recursively check for the element in different pages..:)
	checkForElement(clickItem);
	browser.sleep(3000);
  });  
});

    function checkForElement(checkElement)
	{
	 clickItem.isPresent().then(function(result){
	if(result && first == true)
	{
	     clickItem.click();
		 browser.sleep(2000);
		 console.log('Element found');
		 first = false;
		 return result;
	}
	else{
	     browser.sleep(2000);
	     nextPage.click();
		 console.log('Element not found Navigated to Next page');
		
	}
	checkForElement(checkElement);
	});
	}
	
	