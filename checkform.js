console.log("got here");
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
page.viewportSize = { width: 1280, height: 900 };
page.open("https://www.ameriadvance.com/apply.html", function(status) {
    if ( status === "success" ) {
        page.evaluate(function() {
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
            // document.querySelector("radio[id='car_title_yes']").value = "selected";
            document.getElementById('car_title_no').click();
            // document.querySelector("input[type='checkbox']").value = "checking";
            var ev = document.createEvent("MouseEvents");
            ev.initEvent("click", true, true);
            // document.querySelector("input[type='checkbox']").dispatchEvent(ev);;
            // document.getElementById("t3SubmitPage2").click();
            // console.log("Login submitted!");
            console.log('...');
            page.sendEvent('click', page.event.key.A, null, null, 0x02000000 | 0x08000000);

            var ev = document.createEvent("MouseEvents");
            ev.initEvent("click", true, true);
            document.querySelector("input[type='checkbox']").dispatchEvent(ev);
            if(ev){
                console.log('exist');
                console.log(ev);
            }else{
                console.log('kriva');
            }

            document.getElementById("t3SubmitPage2").click();
            console.log("Login submitted!");
        });
        window.setTimeout(function () {
            page.render('form.png');
            phantom.exit();
        }, 2000);
    }
});