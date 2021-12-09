class FormInput extends HTMLInputElement {
    constructor() {
        super();
    }

    checkValidity() {
        super.checkValidity();
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

        this.addEventListener('input', () => {
           if (!this.checkValidity()) {
               this.setCustomValidity("Please input an email address.");
           } else {
               this.setCustomValidity("");
           }
        })
    }

    checkValidity() {
        console.log('checkValidity()');
        if (super.checkValidity()) {
            console.log('passed 1st check');
            return super.checkMinLength();
        } else return false;
    };
}
window.customElements.define('email-input', Email, {extends: 'input'});

class Zipcode extends FormInput {
    constructor() {
        super();

        this.addEventListener('change', () => {
            // check validity
            console.log('running event listener'); 
            this.setCustomValidity("Testing 1 2 3");
        });

        this.textContent = "hello world";

    }

    checkValidity() {
        if (super.checkValidity()) {
            return super.containsNumbers();
        } else return false;
    }
}
window.customElements.define('zipcode-input', Zipcode, {extends: 'input'});