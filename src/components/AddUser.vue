<template>
    <div>
        <h1>Add User</h1>
    </div>
    <div class="submit-form">
        <div v-if="!submitted">
            <div>
                <span class="p-float-label">
                    <InputText id="username" type="text" v-model="user.name" />
                    <label for="username">Nome do Usuário</label>
                </span>
            </div>
            <div class="mt-5">
                <span class="p-float-label">
                    <InputText id="userjob" type="text" v-model="user.job" />
                    <label for="userjob">Trabalho</label>
                </span>
            </div>
            <Button
                label="Enviar"
                class="p-button-rounded p-button-secondary mt-3 ml-7"
                @click="saveUser"
            />
        </div>
        <div v-else>
            <h4>Usuário adicionado com sucesso!!</h4>
            <Button
                label="Novo Usuário"
                class="p-button-rounded p-button-secondary ml-6"
                @click="newUser"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FakeDataService from "@/services/FakeDataService";
import type AddUserModel from "@/model/AddUserModel";
import type ResponseData from "@/types/ResponseData";

export default defineComponent({
    name: "add-data",
    data() {
        return {
            user: {
                id: null,
                name: "",
                job: "",
            } as AddUserModel,
            submitted: false,
        };
    },
    methods: {
        saveUser() {
            let data = {
                name: this.user.name,
                job: this.user.job,
            };
            FakeDataService.createUser(data)
                .then((response: ResponseData) => {
                    this.user.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        },
        newUser() {
            this.submitted = false;
            this.user = {} as AddUserModel;
        },
    },
});
</script>

<style scoped>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>
