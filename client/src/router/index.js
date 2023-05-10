//this file helps to enable 'navigation' on the page
// it's creating router objects that maintain a list of URL paths for the app
// each URL is assocaited with a component

import { createRouter, createWebHashHistory } from "vue-router";
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'


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
        },
        {   //this path will have the expanded detail for each state
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        }
    ]
})

