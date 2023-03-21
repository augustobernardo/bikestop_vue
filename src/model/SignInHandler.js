import AlertClass from './AlertClass';

export default class LoginHandler {
    constructor() {
        this.formLogin = new Object;
    }
    
    static setFormSignIn(formValues) {
        this.formLogin = formValues;
    }

    static validateSignInFields() {
        if (this.formLogin.userRa === "" && this.formLogin.userPass === "") {
            AlertClass.error("Por favor, preencha todos os campos!");
            return false;
        }
        this._validateValues();
    }
    
    static _validateValues() {
        if (this._validateRa(this.formLogin.userRa) === false) {
            AlertClass.error("RA inválido!");
            return false;
        }

        AlertClass.success("Login realizado com sucesso!");
        return true;
    }

    static _validateRa(ra) {
        let regex = new RegExp("^[0-9]+$");

        if (ra.length === 9 && regex.test(ra)) {
            return true;
        }
        return false;
    }
    


}