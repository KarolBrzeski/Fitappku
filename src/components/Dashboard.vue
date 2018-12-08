<template>
<div id="dashboard">
    <ul class="collection with-header">
        <li class="collection-header">
            <h4>List of meals</h4>
        </li>
        <li v-for="diet in diets" v-bind:key="diet.diet_id" class="collection-item">
            <router-link v-bind:to="{name: 'view-meal', params: {diet_id: diet.diet_id}}">
                <span class="diet-title">{{diet.title}}</span>
                <div class="chip green">{{diet.isActive}}</div>
                <div class="chip blue">{{diet.create_date | dateFormat('YYYY.MM.DD')}}</div>
            </router-link>
        </li>
    </ul>
    <div class="fixed-action-btn">
        <router-link to="/new" class="btn-floating btn-large">
            <i class="fa fa-plus"></i>
        </router-link>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import VueFilterDateFormat from 'vue-filter-date-format'
import db from '../config/firebaseInit'

Vue.use(VueFilterDateFormat)

export default {
    name: 'dashboard',
    data() {
        return {
            diets: []
        }
    },
    created() {

        db.collection("diet")
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id': doc.id,
                        'diet_id': doc.data().diet_id,
                        'title': doc.data().title,
                        'isActive': doc.data().isActive,
                        'create_date': doc.data().create_date,
                        'day_number': doc.data().days.day.day_number
                    };
                    console.log('data', data);
                    this.diets.push(data)
                });
            });
    }
}
</script>

<style>
.diet-title {
    color: #535353;
    font-weight: bold;
    padding-right: 10px;
}
</style>
