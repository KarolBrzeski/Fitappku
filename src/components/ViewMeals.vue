<template>
<div id="view-meals">
    <ul class="collection with-header">
        <li class="collection-header">
            <h4>List of meals</h4>
        </li>
        <li class="collection-item">
            <span class="diet-title">Meals 1 </span>
        </li>
         <li class="collection-item">
            <span class="diet-title">Meals 2 </span>
        </li>
         <li class="collection-item">
            <span class="diet-title">Meals 3 </span>
        </li>
         <li class="collection-item">
            <span class="diet-title">Meals 4 </span>
        </li>
         <li class="collection-item">
            <span class="diet-title">Meals 5 </span>
        </li>
    </ul>
</div>
</template>

<script>
import db from '../config/firebaseInit'
export default {
    name: 'view-meals',
    data() {
        return {}
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
