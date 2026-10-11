import HomeIndexController from './HomeIndexController'
import AboutUsIndexController from './AboutUsIndexController'
import SafetyIndexController from './SafetyIndexController'
import ContactUsIndexController from './ContactUsIndexController'
import ContactUsStoreController from './ContactUsStoreController'
import PrivacyPolicyController from './PrivacyPolicyController'
import TermsOfServiceController from './TermsOfServiceController'
import SitemapController from './SitemapController'
const Controllers = {
    HomeIndexController: Object.assign(HomeIndexController, HomeIndexController),
AboutUsIndexController: Object.assign(AboutUsIndexController, AboutUsIndexController),
SafetyIndexController: Object.assign(SafetyIndexController, SafetyIndexController),
ContactUsIndexController: Object.assign(ContactUsIndexController, ContactUsIndexController),
ContactUsStoreController: Object.assign(ContactUsStoreController, ContactUsStoreController),
PrivacyPolicyController: Object.assign(PrivacyPolicyController, PrivacyPolicyController),
TermsOfServiceController: Object.assign(TermsOfServiceController, TermsOfServiceController),
SitemapController: Object.assign(SitemapController, SitemapController),
}

export default Controllers