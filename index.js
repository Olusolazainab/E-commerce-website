
const form = document.getElementsByTagName("form")
const emailID = document.getElementById("validationCustom05")
const errorMessage = document.querySelector("#validationCustom05 + span.error")


emailID.addEventListener("input", function(event){
    if(emailID.validity.valid){
        errorMessage.textContent = "";
        errorMessage.className = "error"
    }else{
        showError()
    }
});

form.addEventListener("submit",function (event){
    if (!emailID.validity.valid){
        showError()
        event.preventDefault()
    }
})

function showError(){
    if(emailID.validity.valueMissing){
        errorMessage.textContent = "You need to enter an email address"
    }else
    if(emailID.validity.typeMismatch){
        errorMessage.textContent = " value need to be an emaill address"
    }

    errorMessage.className = "error active"
}



