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
    }

    checkValidity() {
        if (super.checkValidity()) {
            return super.checkMinLength();
        } else 
        return false;
    };
}
window.customElements.define('email-input', Email, {extends: 'input'});
