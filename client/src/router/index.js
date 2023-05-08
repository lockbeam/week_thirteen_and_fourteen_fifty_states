//this file helps to enable 'navigation' on the page
// it's creating router objects that maintain a list of URL paths for the app
// each URL is assocaited with a component

import { createRouter, createWebHashHistory } from "vue-router";
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        }
    ]
})

