import SignInHandler from "./SignInHandler.js";
import SignUpHandler from "./SignUpHandler.js";

export default class FormHandler {
    constructor() {
        this.mode = new String();
        this.formValues = new Object();
    }

    static setFormValues(formValues) {
        this.formValues = formValues;
    }

    static setMode(mode) {
        this.mode = mode;
    }

    static checkFields() {
        switch (this.mode) {
            case "signIn":
                SignInHandler.setFormSignIn(this.formValues);
                SignInHandler.validateSignInFields();
                break;

            case "signUp":
                SignUpHandler.setFormSignUp(this.formValues);
                SignUpHandler.validateSignUpFields();
                break;

            default:
                break;
        }
    }


}