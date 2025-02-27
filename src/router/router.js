import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component : () => import('@/views/HomeView.vue')
    },
    {
        path: "/mem",
        name: "Mem",
        component : () => import('@/views/MemView.vue')
    },
    {
        path: "/awards",
        name: "Awards",
        component : () => import('@/views/AwardsView.vue')
    },
    // {
    //     path:"/test",
    //     name:"Test",
    //     component : () => import('../views/Test.vue')
    // }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router