import {createRouter, createWebHashHistory} from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePage from "./views/CreatePage.vue";
import Pages from "./views/Pages.vue";
import PagesList from "./views/PagesList.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        //Second way to change the data in component by adding index as a prop
        {path: '/:index?', component: PageViewer, props: true},
        {
            path: '/pages',
            component: Pages,
            children: [
                {path: '', component: PagesList},
                {path: 'create', component: CreatePage},
            ]
        },
    ]
})

export default router;