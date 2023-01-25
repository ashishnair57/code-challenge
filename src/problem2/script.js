function onSubmitHandler(){
    const inputaddress = document.getElementById('input-address').value;
    const inputamount = document.getElementById('input-amount').value;
    const inputotp = document.getElementById('input-otp').value;
    console.log(`ETH Address: ${inputaddress}`);
    console.log(`Amount to send: ${inputamount}`);
    console.log(`OTP Authentication: ${inputotp}`);
}

function validate(){
    const inputaddress = document.getElementById('input-address');
    const inputamount = document.getElementById('input-amount');
    const inputotp = document.getElementById('input-otp');

    if(!inputaddress.checkValidity() || !ethers.utils.isAddress(inputaddress.value)){
        inputaddress.parentElement.classList.add("has-error");
        const error = inputaddress.getAttribute('data-error');
        inputaddress.nextElementSibling.innerHTML = `<ul class="list-unstyled"><li>${error}</li></ul>`;
    }
    if(!inputamount.checkValidity()){
        inputamount.parentElement.classList.add("has-error");
        const error = inputamount.getAttribute('data-error');
        inputamount.nextElementSibling.innerHTML = `<ul class="list-unstyled"><li>${error}</li></ul>`;
    }
    if(!inputotp.checkValidity()){
        inputotp.parentElement.classList.add("has-error");
        const error = inputotp.getAttribute('data-error');
        inputotp.nextElementSibling.innerHTML = `<ul class="list-unstyled"><li>${error}</li></ul>`;
    }
    if(inputaddress.checkValidity() && !ethers.utils.isAddress(inputaddress.value)){
        inputaddress.parentElement.classList.add("has-error");
        const error = "Please enter a valid ethereum address.";
        inputaddress.nextElementSibling.innerHTML = `<ul class="list-unstyled"><li>${error}</li></ul>`;
    }
    document.getElementById('transfer-form').submit();
}

function removeError(element){
    element.parentElement.classList.remove("has-error");
    element.nextElementSibling.innerHTML = "";
}

document.getElementById('transfer-button').addEventListener("click", validate);

document.getElementById('input-address').addEventListener("input", ()=>{
    const element = document.getElementById('input-address');
    removeError(element);
});

document.getElementById('input-amount').addEventListener("input", ()=>{
    const element = document.getElementById('input-amount');
    removeError(element);
});

document.getElementById('input-otp').addEventListener("input", ()=>{
    const element = document.getElementById('input-otp');
    removeError(element);
});