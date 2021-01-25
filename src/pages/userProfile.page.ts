import {
    waitAndClick,
    waitAndClickWithPause
} from '../utils/customWdionCommands';


const userAccountDropDown = `.ssls-icon.ssls-icon-user-circle+span`;
const navigateToProfileControl = `[href="/user/profile"]`;
const profileInfoText = `div.description`;
const newsLetterToggle = `.toggle-btn.on`;

class UserProfilePO {
    get userAccountDropDown() {
        return $(userAccountDropDown);
    }

    get navigateToProfileControl() {
        return $(navigateToProfileControl);
    }

    get profileInfoText() {
        return $$(profileInfoText);
    }

    get newsLetterToggle() {
        return $(newsLetterToggle);
    }
    public navigateToUserProfile() {
        waitAndClickWithPause(this.userAccountDropDown,500);
        waitAndClick(this.navigateToProfileControl);
    }

    public getProfileInfo() {
        const profileInfo = [];
        $(profileInfoText).waitForDisplayed()
        this.profileInfoText.forEach(item => {
            profileInfo.push(item.getText());
        })
        profileInfo.push(this.newsLetterToggle.isExisting());
        return profileInfo
    }

}

export const Profile = new UserProfilePO();
