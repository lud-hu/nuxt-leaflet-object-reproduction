<template>
    <client-only>
        <div class="map-wrapper">
            <l-map ref="map" :center="[47.41322, -1.219482]" :use-global-leaflet="false" @ready="init">
                <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    layer-type="base"
                    name="OpenStreetMap"
                ></l-tile-layer>
            </l-map>
        </div>
    </client-only>
</template>

<script lang="ts" setup>
import "leaflet/dist/leaflet.css";
import type L from "leaflet";

import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

const map = ref<any>();

const init = () => {
  if (map) {
    map.value.leafletObject.fitBounds([[47.41322, -1.219482], [47.51322, -1.319482]]);
  }
};
</script>

<style>
.map-wrapper {
    height: 75vh;
    width: 100%;
}
</style>
