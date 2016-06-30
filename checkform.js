console.log("got here");
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

var url = 'https://www.ameriadvance.com/apply.html';

function onPageReady() {
    var htmlContent = page.evaluate(function () {
        document.querySelector("select[name='requested_amount']").value = '300';
        document.querySelector("input[name='email']").value = "dengi@t3leads.com";
        document.querySelector("input[name='first_name']").value = "Roni";
        document.querySelector("input[name='last_name']").value = "BratRocki";
        document.querySelector("select[name='birth_date_month']").value = "10";
        document.querySelector("select[name='birth_date_day']").value = "10";
        document.querySelector("select[name='birth_date_year']").value = "1980";
        document.querySelector("input[name='zip']").value = "91505";
        document.querySelector("input[name='address']").value = "4000 W Alameda Ave";
        document.querySelector("select[name='active_military']").value = 0;
        document.querySelector("input[name='employer']").value = "Goggle";
        document.querySelector("input[name='drivers_license_number']").value = "F456732";
        document.querySelector("input[name='home_phone']").value = "8187743523";
        document.querySelector("input[name='work_phone']").value = "8187743524";
        document.querySelector("input[name='cell_phone']").value = "8187743525";
        document.querySelector("input[name='ssn']").value = "8187743524";
        document.querySelector("select[name='income_type']").value = "EMPLOYMENT";
        document.querySelector("select[name='monthly_income']").value = 4750;
        document.querySelector("select[name='pay_frequency']").value = "MONTHLY";
        document.querySelector("select[name='direct_deposit']").value = 1;
        document.querySelector("input[name='pay_date1']").value = "2016-06-30";
        document.querySelector("input[name='pay_date2']").value = "2016-07-30";
        document.querySelector("input[name='bank_aba']").value = "123456780";
        document.querySelector("input[name='bank_account_number']").value = "1234567899";
        document.querySelector("select[name='bank_account_type']").value = "checking";
        document.getElementById('car_title_no').click();
        document.querySelector("input[for='agree_checkbox_1']").click();
        document.getElementById("t3SubmitPage2").click();
        console.log("Login submitted!");
        return document.documentElement.outerHTML;
    });
    page.render('form.png');

    // console.log(htmlContent);

    phantom.exit();
}

page.viewportSize = { width: 1280, height: 900 };

page.open(url, function (status) {
    function checkReadyState() {
        setTimeout(function () {
            var readyState = page.evaluate(function () {
                return document.readyState;
            });

            if ("complete" === readyState) {
                onPageReady();
            } else {
                checkReadyState();
            }
        });
    }

    checkReadyState();
});