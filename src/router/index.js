import {createRouter, createWebHistory} from "vue-router"

import MainPage from "@/pages/MainPage"
import ProjectPage from "@/pages/ProjectPage"
import EditProjectPage from "@/pages/EditProjectPage"
import PreviewPage from "@/pages/PreviewPage"
import ProfilePage from "@/pages/ProfilePage"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: MainPage
        },
        {
            path: '/profile',
            name: 'Profile',
            component: ProfilePage
        },
        {
            path: '/project/:projectId',
            params: { projectId: 'public' },
            name: 'Project',
            component: ProjectPage
        },
        {
            path: '/page/:pageId',
            name: 'Edit Page',
            component: EditProjectPage
        },
        {
            path: '/preview/:pageId',
            name: 'Preview Page',
            component: PreviewPage
        }
    ]
})

export default router