import AlertClass from './AlertClass';

export default class SignUpHandler {
    constructor() {
        this.formSignUp = new Object;
    }
    
    static setFormSignUp(formValues) {
        this.formSignUp = formValues;
    }

    static validateSignUpFields() {
        if (this.formSignUp.userRa === "" && this.formSignUp.userEmail === "" && this.formSignUp.userPass === "") {
            AlertClass.error("Por favor, preencha todos os campos!");
            return false;
        }
        this._validateValues();
    }
    
    static _validateValues() {
        if (this._validateRa(this.formSignUp.userRa) === false) {
            AlertClass.error("RA inválido!");
            return false;
        }

        if (this._validateEmail(this.formSignUp.userEmail) === false) {
            AlertClass.error("Email inválido!");
            return false;
        }

        AlertClass.success("Formulário enviado com sucesso!");
        return true;
    }

    static _validateRa(ra) {
        let regex = new RegExp("^[0-9]+$");

        if (ra.length === 9 && regex.test(ra)) {
            return true;
        }
        return false;
    }

    static _validateEmail(email) { 
        let regex = new RegExp("^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$");

        if (regex.test(email) && email.length > 5) {
            return true;
        }
        return false;
    }
    


}