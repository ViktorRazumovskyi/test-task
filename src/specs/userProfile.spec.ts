import {expect} from 'chai';
import {Profile} from '../pages/userProfile.page';
import {Authorization} from '../pages/authorization.page';
import {TEST_USER_EMAIL, TEST_USR_PASSWORD} from '../constants/testUserData';


describe('My profile page. Client area', () => {
    let userProfileInfo
    before(function () {
        Authorization.login(TEST_USER_EMAIL,TEST_USR_PASSWORD)
        Profile.navigateToUserProfile();
        userProfileInfo = Profile.getProfileInfo();
    })
    beforeEach(function () {
        browser.reloadSession()
        Authorization.login(TEST_USER_EMAIL,TEST_USR_PASSWORD)

    });
    it('Compare My profile page data', () => {
        Profile.navigateToUserProfile();
        const userProfileInfoAfterNewLogin = Profile.getProfileInfo();
        expect(userProfileInfo).deep.equal(userProfileInfoAfterNewLogin, `User data not matches after relogin`);

    })
})
