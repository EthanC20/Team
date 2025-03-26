import { createRouter, createWebHistory } from "vue-router";
import LayoutView from '@/views/LayoutView.vue'

function lazyLoad(view) {
    return () => import(`@/views/${view}View.vue`)
  }
const routes = [
    {
        layout: "default",
        path: "/",
        name: "Layout",
        redirect: "/home",
        component: LayoutView,
        children: [
            {
                path: "/home",
                name: "Home",
                component: lazyLoad('Home'),
                meta: {
                    title: 'Home',
                    description: '网站首页'
                }
            },
            {
                path: "/mem",
                name: "Mem",
                component: lazyLoad('Mem'),
                meta: {
                  title: '团队成员',
                  description: '我们的团队成员介绍'
                }
            },
            {
                path: "/awards",
                name: "Awards",
                component:lazyLoad('Awards'),
                meta: {
                  title: '荣誉奖项',
                  description: '我们获得的荣誉和奖项'
                }
            }
        ]
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router