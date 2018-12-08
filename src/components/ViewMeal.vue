<template>
<div id="view-meal">
    <ul class="collection with-header">
        <li class="collection-header">
            <h4>Dzień {{day_number}}</h4>
        </li>
    </ul>
</div>
</template>

<script>
import db from '../config/firebaseInit'
export default {
    name: 'view-meal',
    data() {      
        return {
            diet_id: null,
            title: null,
            type: null,
            day_number: null
        }         
    },
    beforeRouteEnter(to, from, next) {
        db.collection("diet").where('diet_id', '==', to.params.diet_id)
            .get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    next(vm => {
                        vm.diet_id = doc.data().diet_id
                        vm.title = doc.data().title
                        vm.type = doc.data().type
                        vm.day_number = doc.data().days.day.day_number
                    })
                })
            })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            db.collection("diet").where('diet_id', '==', this.$route.params.diet_id)
                .get().then(querySnapshot => {
                    console.log('this.$route.params.diet_id', this.$route.params.diet_id);
                    querySnapshot.forEach(doc => {
                        this.diet_id = doc.data().diet_id
                        this.title = doc.data().title
                        this.type = doc.data().type
                        vm.day_number = doc.data().days.day.day_number
                    })
                })
        }
    }
}
</script>
