<template>
<div id="dashboard">
    <ul class="collection with-header">
        <li class="collection-header">
            <h4>List of meals</h4>
        </li>
        <li v-for="diet in diets" v-bind:key="diet.id" class="collection-item">
            <router-link v-bind:to="{name: 'view-meal', params: {meal_id: diet.id}}">
                <span class="diet-title">{{diet.name}}</span>
                <div class="chip green">{{diet.type}}</div>
                <div class="chip blue">{{diet.diet_number}}</div>
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
import db from '../config/firebaseInit'
export default {
    name: 'dashboard',
    data() {
        return {
            diets: []
        }
    },
    created() {
        db.collection("diet").where("diet_number", "==", 1)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const data = {
                        'id': doc.id,
                        'type': doc.data().type,
                        'diet_number': doc.data().diet_number,
                        'date': doc.data().date,
                        'name': doc.data().name,
                        'energy': doc.data().energy,
                        'protein': doc.data().protein,
                        'fat': doc.data().fat,
                        'carbohydrates': doc.data().carbohydrates,
                        'components_man': doc.data().components_man,
                        'components_woman': doc.data().components_woman,
                        'description': doc.data().description
                    };
                    console.log('data', data);
                    this.diets.push(data)
                });
            });
    }
}
</script>
<style>
.diet-title{
    color: #535353;
    font-weight: bold;
    padding-right: 10px;
}
</style>