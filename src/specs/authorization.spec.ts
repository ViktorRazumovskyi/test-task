import {expect} from 'chai';
import {Authorization} from '../pages/authorization.page';
import {
    waitAndClickWithPause,
    waitAndGetText,
    waitAndSetValue,
    waitAndSetValueWithPause,
    waitUntilGetTextMatchesExpectedValue
} from '../utils/customWdionCommands';
import {TEST_USER_EMAIL, TEST_USR_PASSWORD} from '../constants/testUserData';


describe('Authorization', () => {
    beforeEach(function () {
        browser.reloadSession()
    });
    it('Not registered user, unsuccessful login', () => {
        browser.url('/');
        expect(browser.getUrl()).eqls('https://www.sbzend.ssls.com/');
        expect(browser.getTitle()).eqls('Cheap SSL Certificates—Buy SSL Certs $3.44 & Save 68%');

        waitAndClickWithPause(Authorization.navigateToLoginPageBtn, 2000);
        expect(browser.getUrl()).eqls('https://www.sbzend.ssls.com/authorize');
        expect(browser.getTitle()).eqls('Sign In | SSLs.com');

        waitAndSetValueWithPause(Authorization.emailField, 'testes3212@test.com', 200);
        waitAndSetValue(Authorization.passwordField, 'tes321');

        // click on "eye" icon
        Authorization.showPasswordIcon.click();
        const unmaskedPassword = $$('.form-control')[1].getValue();
        expect(unmaskedPassword).eqls('tes321');

        waitAndClickWithPause(Authorization.loginBtn, 2000);
        const errorMessage = waitAndGetText(Authorization.errorMessageNotification);
        expect(errorMessage).eqls('Uh oh! Email or password is incorrect');
    })
    it('Registered user, successful login', () => {
        Authorization.login(TEST_USER_EMAIL, TEST_USR_PASSWORD);
        waitUntilGetTextMatchesExpectedValue($('.ssls-icon.ssls-icon-user-circle+span'), TEST_USER_EMAIL);
    })
})
