<template>
    <div>
        <AddUser />

        <div class="flex justify-content-center mt-7">
            <UserDetails />
            <Divider layout="vertical" />
            <UserDetails />
        </div>
    </div>
</template>

<script setup lang="ts">
import AddUser from "../components/AddUser.vue";
import UserDetails from "../components/UserDetails.vue";
</script>
