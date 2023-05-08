<template>
    <!--The below is creating nice little boxes for each state-->
    <div class="state-info">
         
        <span class="state-name"> {{ state.name }} </span>
    
        <div>
            <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
        </div>
    
    </div>

</template>

<script>

export default {
    name: 'StateDetail',
    emits: ['update-visited'], 
    props: {
        state: Object 
    },
    data() {
        return {
            visited: this.state.visited
            //visited value from the state Object in the prop
        }
    },
    methods: {
        //parent should handle all API calls together:
        visitedChanged() {
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }
}

//stateDetail will send a message to its parent StateList every time that a visited box is selected or unselected

</script>

<style scoped>

.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px gray solid;
    border-radius: .3rem;
    background-color: rgb(183, 240, 240);
}

.visit-state {
    margin: 1rem;
    text-align: center;
}

</style>