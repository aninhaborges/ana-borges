import Vue from "vue";
import VouRouter from "vue-router";

Vue.use(VouRouter);

const routes=[

    {
        path: "/argentina",
        name: "Argentina",
        // route level code-splitting
        // this generates a separate a chunk(brazil.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ("../pages/argentina.vue")
    },
    {
        path: "/bolivia",
        name: "Bolivia",
        // route level code-splitting
        // this generates a separate a chunk(brazil.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ("../pages/bolivia.vue")
    },
    {
        path: "/brazil",
        name: "Brazil",
        // route level code-splitting
        // this generates a separate a chunk(brazil.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ("../pages/brazil.vue")
    },
    {
        path: "/chile",
        name: "Chile",
        // route level code-splitting
        // this generates a separate a chunk(brazil.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ("../pages/chile.vue")
    },
    {
        path: "/colombia",
        name: "Colombia",
        // route level code-splitting
        // this generates a separate a chunk(brazil.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ("../pages/colombia.vue")
    },
    

]