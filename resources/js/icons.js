window.Vue = require("vue");
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faFacebook,
    faTwitter,
    faWhatsapp,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
    faSearch,
    faStream,
    faShoppingCart,
    faPhone,
    faArrowLeft,
    faArrowUp,
    faChevronLeft,
    faLocationArrow,
    faPlus,
    faMinus,
    faSpinner,
    faCogs,
    faTh,
    faListUl,
    faComments,
    faDesktop,
    faMapMarkedAlt,
    faMobileAlt,
    faEnvelope,
    faHome,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

import {
    faBuilding,
    faSmileWink,
    faImages,
    faCheckCircle,
    faFileAlt
} from "@fortawesome/free-regular-svg-icons";

library.add(
    faFacebook,
    faTwitter,
    faWhatsapp,
    faInstagram,
    faSearch,
    faStream,
    faShoppingCart,
    faPhone,
    faBuilding,
    faArrowLeft,
    faChevronLeft,
    faSmileWink,
    faArrowUp,
    faLocationArrow,
    faPlus,
    faMinus,
    faImages,
    faSpinner,
    faCogs,
    faTh,
    faListUl,
    faComments,
    faDesktop,
    faCheckCircle,
    faMapMarkedAlt,
    faEnvelope,
    faMobileAlt,
    faHome,
    faUsers,
    faFileAlt
);

Vue.component("fa-icon", FontAwesomeIcon);
