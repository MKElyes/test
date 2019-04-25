function valmail(id) {
    var em = document.getElementById(id).value;
    var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
    if (reg.test(em)) {
        document.getElementById(id).style = "box-shadow: #2cd42c87 0px 0px 0px 0.2rem;";
    } else {
        document.getElementById(id).style = "box-shadow: 0 0 0 0.2rem rgba(253, 0, 0, 0.62);";
        document.getElementById(id).placeholder = 'try again';
    }

}
function valname() {
    var x = document.getElementById("name").value;

    if ((x == "") || (x.length <= 4)) {

        document.getElementById("name").style = "box-shadow: 0 0 0 0.2rem rgba(253, 0, 0, 0.62);";
        document.getElementById("name").placeholder = 'try again';

    } else { document.getElementById("name").style = "box-shadow: #2cd42c87 0px 0px 0px 0.2rem;"; }
}
function password(id) {
    var x = document.getElementById(id).value;
    var char = /\W/g;
    var maj = /[A-Z]/g;
    var result = 0;
    if (x.length > 7) {
        result++
        if (char.test(x)) {
            result++
        }
        if (maj.test(x)) { result++ };
    }
    switch (result) {
        case 1:
        document.getElementById(id).style = "box-shadow: 0 0 0 0.2rem rgba(253, 0, 0, 0.62);";
        // document.getElementById("elyes").innerHTML = 'faible';
               break;
        case 2:
        document.getElementById(id).style = "box-shadow: 0 0 0 0.2rem goldenrod";
        document.getElementById(id).placeholder = 'moyen';
            break;
        case 3:
        document.getElementById(id).style = "box-shadow: #2cd42c87 0px 0px 0px 0.2rem;";
        document.getElementById(id).placeholder = 'good';
            break;
        case 0:
        document.getElementById(id).style = "box-shadow: 0 0 0 0.2rem rgba(253, 0, 0, 0.62);";
            break;
    }


}

function save() {
    var tabuser = JSON.parse(localStorage.getItem("users"));

    var email = document.getElementById("email").value;
    var pw = document.getElementById("password").value;
    var name = document.getElementById(id).value;
    var id = 0;



    if (tabuser == null) {
        var tabuser = [];
        id = 0;

    }
    else {
        id = tabuser[tabuser.length - 1].id + 1;
    }



    var user = {
        'mail': email,
        'password': pw,
        'username': name,
        'id': id,
        'role': 'student'
    }

    tabuser.push(user);
    localStorage.setItem("users", JSON.stringify(tabuser))

}
function check() {
    var tab = JSON.parse(localStorage.getItem('users'));
    var mail = document.getElementById('email1').value;
    var pw = document.getElementById('password1').value;
    var test = false;
    for (i = 0; i <= tab.length - 1; i++) {
        if ((tab[i].mail == mail) && (tab[i].password == pw)) {
            test = true;
        }
    }
    if (test == true) {
        window.open('index.html','_self');
    } else { alert('incorrect') }
}