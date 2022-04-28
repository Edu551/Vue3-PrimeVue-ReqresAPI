<template>
    <div>
        <div class="card">
            <TabMenu :model="items" />
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default {
    name: "App",
    data() {
        return {
            items: [
                { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
                {
                    label: "About",
                    icon: "pi pi-fw pi-user",
                    to: "/about",
                },
            ],
        };
    },
};
</script>

<style>
@media (min-width: 1024px) {
}
</style>
