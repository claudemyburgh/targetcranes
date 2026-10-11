import HomeIndexController from './HomeIndexController'
import AboutUsIndexController from './AboutUsIndexController'
import ContactUsIndexController from './ContactUsIndexController'
import ContactUsStoreController from './ContactUsStoreController'
const Controllers = {
    HomeIndexController: Object.assign(HomeIndexController, HomeIndexController),
AboutUsIndexController: Object.assign(AboutUsIndexController, AboutUsIndexController),
ContactUsIndexController: Object.assign(ContactUsIndexController, ContactUsIndexController),
ContactUsStoreController: Object.assign(ContactUsStoreController, ContactUsStoreController),
}

export default Controllers