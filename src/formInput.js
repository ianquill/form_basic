class FormInput extends HTMLInputElement {
    constructor() {
        super();
    }

    validate() {
        console.log("validate running");
        console.log(this);
        if (this.validity.typeMismatch) {
            console.log("setting custom validity");
            this.setCustomValidity("Please enter an E MAIL...");
        } else if (this.validity.patternMismatch) {
            this.setCustomValidity("Please enter a N2MB3R");
        } else {
            this.setCustomValidity("");
        }
        this.reportValidity(); 
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
        // this.addEventListener('change', (e) => {
        //     if (!this.checkValidity()) {
        //         // this.setCustomValidity("Testing testing 1 2 3...");
        //     } else {
        //         this.setCustomValidity("");
        //         this.reportValidity();
        //     }
        // })
    }

    validate() {
        console.log("validate running"); 
        if (this.validity.typeMismatch) {
            console.log("setting custom validity");
            this.setCustomValidity("Please enter an E MAIL...");
        } else {
            this.setCustomValidity("");
        }
        this.reportValidity(); 
    }
    
    checkValidity() {
        console.log('checkValidity()');
        console.log(super.checkValidity());
        if (super.checkValidity()) {
            console.log('passed 1st check');
            return true;
        } else return false;
    };
}
window.customElements.define('email-input', Email, {extends: 'input'});

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
    }

    checkValidity() {
        if (super.checkValidity()) {
            return super.containsNumbers();
        } else return false;
    }
}
window.customElements.define('zipcode-input', Zipcode, {extends: 'input'});