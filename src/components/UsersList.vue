<template>
    <h1>Users List</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FakeDataService from "@/services/FakeDataService";
import type IAddUser from "@/types/IAddUser";
import type ResponseData from "@/types/ResponseData";

export default defineComponent({
    name: "users-list",
    data() {
        return {
            users: [] as IAddUser[],
            currentUser: {} as IAddUser,
            currentIndex: -1,
            name: "",
        };
    },
    // methods: {
    // getAllUsers() {
    //     FakeDataService.getUsers()
    //         .then((response: ResponseData) => {
    //             this.users = response.data;
    //             console.log(`Reponse getUsers: ${response.data}`);
    //         })
    //         .catch((e: Error) => {
    //             console.log(e);
    //         });
    // },
    //     refreshList() {
    //         this.getAllUsers();
    //         this.currentUser = {} as IUser;
    //         this.currentIndex = -1;
    //     },
    //     setActiveUser(user: IUser, index = -1) {
    //         this.currentUser = user;
    //         this.currentIndex = index;
    //     },
    // },
    // mounted() {
    //     this.getAllUsers();
    // },
});
</script>

<style></style>
