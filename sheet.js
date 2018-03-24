function checkNameAbility() {
    if(!document.getElementById) return false;
    if (!document.getElementById("account_availability")) return false;
    var check_acc = document.getElementById("check_account");
    var acc_abil = document.getElementById("account_availability");
    var accName = document.getElementById("accountname");
    var nameReg = /^[a-zA-Z_]\w+$/;
    if(accName.value.match(nameReg)){
        acc_abil.setAttribute("style","display:inline-block");
    }
    function checkPasswordAbility() {
        if(!document.getElementById) return false;
        if(!document.getElementById("password")) return false;
        if(!document.getElementById("passwordCheck")) return false;
        var password = document.getElementById("password");
        var passwordCheck = document.getElementById("passwordCheck");
        var passwordReg = /^w{6,16}$/;
        if(!password.match(passwordReg)){
            passwordCheck.value = "密码格式不正确请重新输入";
        }
    }
function checkEmailAddress() {
    if(!document.getElementById) return false;
    if(!document.getElementById("email")) return false;
    if(!document.getElementById("reener_email")) return false;
    var email = document.getElementById("email");
    var reenterEmail = document.getElementById("reenter_email");
    var emailReg = /^[a-zA-Z_\.-]+@[a-zA-z\._-]+(\.[a-zA-Z_]+)+$/;
    if(email.value.match(emailReg)&&email.value===reenterEmail.value) alert("注册成功");
}

var button = document.getElementById("sub_button");
button.onclick=function () {
    checkEmailAddress();
    checkPasswordAbility();
}