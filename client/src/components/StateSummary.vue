<!--Child of StateList that will display a total of all states visited-->

<template>
    <div>
        <p>There are a total of {{ states.length }} states (including District of Columbia)</p>
        <p>You have visited {{ totalVisited }} {{ units }} total!</p>

        <p id="all-visited-message" v-if="areAllVisited">You have visited all the states (and the District of Columbia)!</p>
    </div>
</template>

<script>

export default {
    name: 'StateSummary',
    props: {
        states: Array
    },
    computed: {
        // used to display total visited states
        totalVisited() {
            let visitedCount = 0
            this.states.forEach( state => {
                if (state.visited) {
                    visitedCount++
                }
            })
            return visitedCount
        },
        units() {
            if (this.totalVisited == 1) {
                return 'state'
            } else {
                return 'states'
            }
        },
        areAllVisited() {
            return this.totalVisited === this.states.length
        }
    }
}

</script>

<style scoped>
#all-visited-message {
    color: pink;
    font-weight: 700;
}

</style>