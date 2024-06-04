let capcha = new Array();
let activeCapcha = document.getElementById("capcha");
let alert = document.getElementById("alert")

function generateCapcha(){

    for(i=0; i<6; i++){
        if (i%2 == 0){
            capcha[i] = String.fromCharCode(Math.floor(Math.random() * 26 + 65))
        }
        else{
            capcha[i] = Math.floor(Math.random() * 10 + 0)
        }
    }
    activeCapcha.innerText = capcha.join("");
}

function hideAlert(){
    setTimeout(()=>{
        alert.classList.remove("success",  "danger")
    }, 2000)
}

function verfiyCapcha(){
    let count = 0
    let userCapcha = document.getElementById("userCode");
    userCapchaInput = userCapcha.value
    if (userCapchaInput.length == 0){
        alert.classList.add("danger");
        alert.innerHTML = "Please Enter Capcha!";
        hideAlert();
    }
    else{
        for(i=0; i<6; i++){
            if (userCapchaInput.charAt(i) == capcha[i]){
                count = count + 1
                continue
            }
            else{
                console.log("Invalid Capcha")
                alert.classList.add("danger")
                alert.innerHTML = "Invalid Capcha"
                hideAlert()
                break
            }
        }
        console.log(count)
        if (count == userCapchaInput.length){
            alert.classList.add("success")
            alert.innerHTML = "Validated successfully"
            hideAlert()
        }
    }
    
}       