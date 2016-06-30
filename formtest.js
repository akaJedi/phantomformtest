var page = new WebPage(), testindex = 0, loadInProgress = false;

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.onLoadStarted = function() {
  loadInProgress = true;
  console.log("load started");
};

page.onLoadFinished = function() {
  loadInProgress = false;
  console.log("load finished");
};

var steps = [
  function() {
    //Load Login Page
    page.open("https://dekafy.com/wp-login.php?redirect_to=https%3A%2F%2Fdekafy.com%2Fwp-admin&reauth=1");
  },
  function() {
    //Enter Credentials
    page.evaluate(function() {

      // var arr = document.getElementsByClassName("login-form");
      var arr = document.getElementById('loginform');

      var i;

      for (i=0; i < arr.length; i++) {
        if (arr[i].getAttribute('method') == "POST") {

          arr[i].elements["log"].value="mylogin";
          arr[i].elements["pwd"].value="mypassword";
          return;
        }
      }
    });
  }, 
  function() {
    //Login
    page.evaluate(function() {
      // var arr = document.getElementsByClassName("login-form");
      var arr = document.getElementById('loginform');
      var i;

      for (i=0; i < arr.length; i++) {
        if (arr[i].getAttribute('method') == "POST") {
          arr[i].submit();
          return;
        }
      }

    });
    page.evaluate(function(){
      var a = document.getElementById("loginform");
      var e = document.createEvent('MouseEvents');
      e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
      waitforload = true;
    });
  }, 
  function() {
    // Output content of page to stdout after form has been submitted
    page.evaluate(function() {
      console.log(document.querySelectorAll('html')[0].outerHTML);
    });
  }
];


interval = setInterval(function() {
  if (!loadInProgress && typeof steps[testindex] == "function") {
    console.log("step " + (testindex + 1));
    steps[testindex]();
    testindex++;
  }
  if (typeof steps[testindex] != "function") {
    console.log("test complete!");
    phantom.exit();
  }
}, 50);
