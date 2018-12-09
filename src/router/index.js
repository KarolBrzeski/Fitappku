import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import DietList from '@/components/DietList'
import NewMeal from '@/components/NewMeal'
import EditMeal from '@/components/EditMeal'
import ViewDietDays from '@/components/ViewDietDays'
import ViewMeals from '@/components/ViewMeals'
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
        },
        {
            path: '/:diet_id',
            name: 'view-diet-days',
            component: ViewDietDays
        }, {
            path: '/:day_number',
            name: 'view-meals',
            component: ViewMeals
        },
        {
            path: '/:diet_id',
            name: 'view-meal',
            component: ViewMeal
        }
    ]
})