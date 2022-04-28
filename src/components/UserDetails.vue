<template>
    <h1>User Details</h1>
    <div>
        <div>
            <span class="p-float-label">
                <InputText
                    id="usernumber"
                    type="text"
                    v-model="currentUser.id"
                />
                <label for="usernumber">Número do Usuário</label>
                <Button
                    label="Buscar Usuário"
                    class="p-button-rounded p-button-secondary mt-3 ml-7"
                    @click="getUser"
                />
            </span>
        </div>
        <div>
            <h4>Usuário</h4>
            <div key="{{currentUser.id}}">
                <label>Nome</label>
                {{ currentUser.first_name }}
            </div>
            <div key="{{currentUser.id}}">
                <label>Sobrenome</label>
                {{ currentUser.last_name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FakeDataService from "@/services/FakeDataService";
import type UserDetailModel from "@/model/UserDetailModel";
import type ResponseData from "@/types/ResponseData";

export default defineComponent({
    name: "user-details",
    data() {
        return {
            currentUser: {
                id: null,
            } as UserDetailModel,
        };
    },
    methods: {
        async getUser() {
            // let idNovo = { id: this.currentUser.id };
            this.currentUser = await FakeDataService.getUser(
                this.currentUser.id
            )
                .then((response: ResponseData) => {
                    console.log(response.data);
                    return response.data.data;
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },
        refreshList() {
            // this.getUser(-1);
            this.currentUser = {} as UserDetailModel;
        },
        deleteUser() {
            FakeDataService.deleteUser(this.currentUser.id)
                .then((response: ResponseData) => {
                    console.log(response.data);
                    this.$router.push({ name: "users" });
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        // this.getUser(this.$route.params.id);
        // this.getUser();
    },
});
</script>

<style></style>
