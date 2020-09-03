import Home from "./views/home/Home.vue";
import About from "./views/about/About.vue";
import Works from "./views/works/Works.vue";
import SingleWorks from "./views/works/SingleWorks.vue";
import Clients from "./views/clients/Clients.vue";
import Blog from "./views/blog/Blog.vue";
import Contact from "./views/contact/Contact.vue";
import SingleService from "./views/services/SingleService.vue";
import SinglePost from "./views/blog/SinglePost.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home Page"
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: "About Page"
        }
    },
    {
        path: "/services/:permalink",
        name: "services",
        component: SingleService,
        meta: {
            title: "Single Service"
        }
    },
    {
        path: "/Works",
        name: "Works",
        component: Works,
        meta: {
            title: "Works Page"
        },
    
    },
    {
        path: "/Works/:permalink",
        name: "SingleWorks",
        component: SingleWorks,
        meta: {
            title: "Single Works Page"
        }
    },
    {
        path: "/Clients",
        name: "Clients",
        component: Clients,
        meta: {
            title: "Clients Page"
        }
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
        meta: {
            title: "Blog Page"
        }
    },
    {
        path: "/blog/post/:id",
        name: "post",
        component: SinglePost,
        meta: {
            title: "Single Service"
        }
    },

    {
        path: "/Contact",
        name: "Contact",
        component: Contact,
        meta: {
            title: "Contact Page"
        }
    }
];

export default routes;
