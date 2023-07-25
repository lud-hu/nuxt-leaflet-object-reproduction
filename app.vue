<template>
    <client-only>
        <div class="map-wrapper">
            <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]" :use-global-leaflet="false">
                <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    layer-type="base"
                    name="OpenStreetMap"
                ></l-tile-layer>
            </l-map>
        </div>
    </client-only>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import type L from "leaflet";

import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
    },
    data() {
        return {
            zoom: 10,
        };
    },
    mounted() {
        this.$nextTick(() => {
            console.log(this.$refs);
            (this.$refs.map as any).leafletObject.fitBounds([]);
        });
    },
};
</script>

<style>
.map-wrapper {
    height: 75vh;
    width: 100%;
}
</style>
