import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import DietList from '@/components/DietList'
import NewMeal from '@/components/NewMeal'
import EditMeal from '@/components/EditMeal'
import ViewMeal from '@/components/ViewMeal'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'dashboard',
        component: Dashboard
    }, {
        path: '/diet-list',
        name: 'diet-list',
        component: DietList
    }, {
        path: '/new',
        name: 'new-meal',
        component: NewMeal
    }, {
        path: '/edit/:meal_id',
        name: 'edit-meal',
        component: EditMeal
    }, {
        path: '/:diet_id',
        name: 'view-meal',
        component: ViewMeal
    }]
})