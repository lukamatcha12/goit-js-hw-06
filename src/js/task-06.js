const inputEl = document.getElementById('validation-input');

const handleLength = function (e) {
    const inputValue = this.value.trim().length;
    const requiredLength = parseInt(this.dataset.length); 

    if (inputValue === requiredLength) { 
        this.classList.remove("invalid");
        this.classList.add("valid"); 
    } else {
        this.classList.remove("valid"); 
        this.classList.add("invalid");
    }
}

inputEl.addEventListener("blur", handleLength);