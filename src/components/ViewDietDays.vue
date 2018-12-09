<template>
<div id="view-diet-days">
    <ul class="collection with-header">
        <li class="collection-header">
            <h4>List of meals in the selected diet</h4>
        </li>
        <li v-for="diet in diets" v-bind:key="diet.diet_id" class="collection-item">
            <div v-for="day in diet.days" :key="day.meals" class="chip red">
                {{day.meals}}
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import Vue from 'vue'
import db from '../config/firebaseInit'

export default {
    name: 'view-diet-days',
    data() {
        return {
            diets: []
        }
    },
    created() {
        // TODO
        db.collection("diet").where('diet_id', '==', '00001')
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {

                    const data = {
                        'id': doc.id,
                        'diet_id': doc.data().diet_id,
                        'title': doc.data().title,
                        'isActive': doc.data().isActive,
                        'create_date': doc.data().create_date,
                        'days': doc.data().days,
                        'days_number': doc.data().days.lenght
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
    padding-right: 16px;
}
</style>
