import {Router} from "@vaadin/router";

const oulet = document.getElementById("app");

const router = new Router(oulet);

router.setRoutes([
    {
        path:"/",
        component: "mi-home"
    },
    {
        path:"/gallery",
        component: "mi-gallery"
    }
    ,{
        path:"/direction",
        component: "mi-direccion"
    },
    {
        path: "/question",
        component: "my-question"
    },
    {
        path: "/nosotros",
        component:"mi-nosotros"
    },
    {

        path:"(.*)",
        redirect:"/"
    }
]);

export {router}