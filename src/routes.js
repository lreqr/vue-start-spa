import {createRouter, createWebHashHistory} from "vue-router";
import PageViewer from "@/components/PageViewer.vue";
import CreatePage from "@/components/CreatePage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        //Second way to change the data in component by adding index as a prop
        {path: '/:index?', component: PageViewer, props: true},
        {path: '/create', component: CreatePage}
    ]
})

export default router;