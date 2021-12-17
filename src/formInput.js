class FormInput extends HTMLInputElement {
    constructor() {
        super();
    }

    validate() {
        if (this.validity.typeMismatch) {
            this.setCustomValidity("Please enter an E MAIL...");
        } else {
            this.setCustomValidity("");
        }
    }

    checkValidity() {
        return super.checkValidity();
    }

    //returns true if the input contains a number
    containsNumbers() {
        return (/\d/.test(this.textContent));
    }

    // returns true if input is longer than min length
    checkMinLength() {
        return (this.minLength <= this.textContent.length)
    }
}
window.customElements.define('form-input', FormInput, {extends: 'input'});

class Email extends FormInput {
    constructor() {
        super();

        // Instead of checkValidity, I need to do more direct checks of specific validity parameters
        this.addEventListener('input', (e) => {
            this.validate();
        })
    }

    validate() {
        super.validate();   
        this.reportValidity();
    }
    
}
window.customElements.define('email-input', Email, {extends: 'input'});

class Country extends FormInput {
    constructor() {
        super();

        this.addEventListener('input', () => {
            this.validate();
        }); 
    }

    validate() {
        super.validate();

        if (this.validity.patternMismatch) {
            this.setCustomValidity("Country name can only contain letters a-z.");
        }
        this.reportValidity();
    }
}
window.customElements.define('country-form', Country, {extends: 'input'}); 

class Zipcode extends FormInput {
    constructor() {
        super();

        this.addEventListener('input', () => {
            // check validity
            this.validate();
        });
    }

    validite() {
        super.validate();

        if (this.validity.patternMismatch) {
        this.setCustomValidity("Please enter a 5 digit N2MB3R");
    }
    this.reportValidity(); 
    }

}; 
window.customElements.define('zipcode-input', Zipcode, {extends: 'input'});

class Password extends FormInput {
    constructor() {
        super();
        this.seen = false;

        // Toggles seen if field has been clicked 
        this.addEventListener('focus', () => {
            this.seen = true;
            console.log(this.seen);
        })

        this.addEventListener('input', () => {
            this.validate();
        });
    }

    validate() {
        const passwords = document.querySelectorAll(".pwd");
        
        // if both fields have been focused and passwords match, clear validity
        if (passwords[0].seen && passwords[1].seen && passwords[0].value === passwords[1].value) {
            this.setCustomValidity("");
        } else if (!passwords[0].seen || !passwords[1].seen){
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("Passwords must match!")
        }
        this.reportValidity();  
    }
}
window.customElements.define('password-input', Password, {extends: 'input'});