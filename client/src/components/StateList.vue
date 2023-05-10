<!--This component is responsible for getting all the state info-->

<template>

    <div>
        <div> <!--This is seperate because seperate divs are always nice but also because the state-list below has some flexbox code-->
            <state-summary v-bind:states="states"></state-summary>
        </div>
        <div class="state-list-container">
            <!--Reminder v-bind key is binding the data in each paragraph to a unique identifier so for example we want to change the order of the states the data is already tied together-->
            <!--v-bind:state is binding the detail about the prop for each state from StateDetail
                this creates a list of State Detail components :) -->
            <div class="state-container" v-for="state in states" v-bind:key="state.name">
                <state-detail
                v-bind:state="state"
                v-on:update-visited="updateVisited"
                ></state-detail>
            </div>
        </div>
    </div>
</template>

<script>
import StateDetail from './StateDetail.vue'
import StateSummary from './StateSummary.vue'


export default {
    components: { 
        StateDetail,
        StateSummary
    },
    name: 'StateList',
    data() {
        return {
            states: []
        }
    },
    mounted() {
        this.fetchAllStates()
    }
    ,methods: {
        fetchAllStates() {
            this.$stateService.getAllStates().then( states => {
                this.states = states
            })
            .catch( err => {
                alert('Sorry, can\'t fetch state list at this time')
                console.error(err)
            })
        },
        //below created as a method to take messages from child StateDetail when visited selection changes
        //also allows us to make an API call to setVisited
        updateVisited(stateName, visited) {
            this.$stateService.setVisited(stateName, visited).then( () => {
                this.fetchAllStates() // calling above method to refresh status of all states
            })
            .catch( err => {
                alert('Sorry, can\'t update state at this time')
                console.error(err)
            })
        }
    }
}

</script>

<style scoped>

.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.state-container {
    margin: 1rem;
}

</style>