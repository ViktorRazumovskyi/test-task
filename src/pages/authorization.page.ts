import { Page } from '../@base';
import {
    waitAndClickWithPause,
    waitAndSetValueWithPause,
    waitAndSetValue,
} from '../utils/customWdionCommands';

const navigateToLoginPageBtn = `//span[contains(text(),'Log in')]`;
const emailField = `[type='email']`;
const passwordField = `[type='password']`;
const loginBtn = `.btn-box .primary`;
const errorMessageNotification = `.noty_text`;
const showPasswordIcon = '.btn-input-block';


class AuthorizationPO{
    get navigateToLoginPageBtn() {
        return $(navigateToLoginPageBtn);
    }
    get emailField() {
        return $(emailField);
    }
    get passwordField() {
        return $(passwordField);
    }
    get loginBtn() {
        return $(loginBtn);
    }
    get errorMessageNotification() {
        return $(errorMessageNotification);
    }
    get showPasswordIcon() {
        return $(showPasswordIcon);
    }

    public login (email:string, password: string) {
        browser.url('/');
        waitAndClickWithPause(this.navigateToLoginPageBtn,500);
        waitAndSetValueWithPause(this.emailField, email, 350);
        waitAndSetValue(this.passwordField, password);
        waitAndClickWithPause(this.loginBtn, 1500);
    }

}

export const Authorization = new AuthorizationPO();
