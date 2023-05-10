<template>
    <div class="state-map">
        
        <h2>The state of {{  state.name }}</h2>
    
        <p v-if="state.visited">You have visited this state</p>
        <p v-else>You have not visited this state yet</p>
    
        <!--creating prebuilt leaflet components for the maps - will only show if map is ready to be rendered-->
        <div id="map-container" v-if="dataReady">
            <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
                <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreet Map contributors">

                </l-tile-layer>
            </l-map>

        </div>

    </div>

</template>

<script>

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
    name: 'StateMap',
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
            state: {},
            dataReady: false,
            mapReady: false
        }
    },
    mounted() {
        this.state.name = this.$route.params.state
        //request to fetch state data:
        this.fetchStateData()
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOneState(this.state.name).then( state => {
            //overwrite state data:
                this.state = state
                this.dataReady = true //we now know that we have the data to then build the map
            })
            .catch( err => {
                if (err.response && err.response.status === 404) {
                    this.state.name = 'Helpless'
                } else {
                    alert('Sorry, error fetching data about this state')
                    console.error(err) // all other errors, likely server or developer error
                }
            })
        },
        onMapReady() {
            this.mapReady = true //using v-on:ready to then call a method once the map is ready to be rendered
        },
        setMapView() {
            if (this.mapReady && this.dataReady) {
                // once mapReady and dataReady are true begin to show map with correct zoom level:
                this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
            }
        }
    },
    computed: {
        mapCenter() {
            return [ this.state.lat, this.state.lon]
        }
    }
}

</script>

<style scoped>

#map-container {
    height: 30rem;
}

</style>