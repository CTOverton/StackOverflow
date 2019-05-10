function myFunction3() {
    let message, x, j;
    let RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    message = document.getElementById("message3");
    message.innerHTML = "";
    x = document.getElementById("Email").value;

    if (x === '') return 'Required Field';
    else if (RegExp.test(x)) return 'Valid';
    else return 'Value not valid';
}