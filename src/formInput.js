class FormInput extends HTMLInputElement {
    constructor() {
        super();
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

        this.addEventListener('input', (e) => {
           if (!this.checkValidity()) {
               console.log("hello");
               // this.setCustomValidity("This is a custom message.");
            //    this.reportValidity();
            //    e.preventDefault();
           } else {
               this.setCustomValidity("");
               this.reportValidity();
           }
        })
        this.addEventListener('change', (e) => {
            if (!this.checkValidity()) {
                // this.setCustomValidity("Testing testing 1 2 3...");
            } else {
                this.setCustomValidity("");
                this.reportValidity();
            }
        })
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
            console.log('running event listener'); 
            this.setCustomValidity("Testing 1 2 3");
        });
    }

    checkValidity() {
        if (super.checkValidity()) {
            return super.containsNumbers();
        } else return false;
    }
}
window.customElements.define('zipcode-input', Zipcode, {extends: 'input'});