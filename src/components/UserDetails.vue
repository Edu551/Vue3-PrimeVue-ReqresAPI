<template>
    <h1>User Details</h1>
    <div>
        <div>
            <Card style="width: 18rem">
                <template #title>Usuário</template>
                <template #content>
                    <p><b>Nome:</b> {{ currentUser.first_name }}</p>
                    <p><b>Sobrenome:</b> {{ currentUser.last_name }}</p>
                </template>
                <template #footer>
                    <span class="p-float-label">
                        <InputText
                            class="ml-4"
                            id="usernumber"
                            type="text"
                            v-model="currentUser.id"
                        />
                        <label class="texto" for="usernumber">
                            ID do Usuário
                        </label>
                        <Button
                            label="Buscar Usuário"
                            class="p-button-rounded p-button-secondary mt-3"
                            @click="getUser"
                        />
                    </span>
                </template>
            </Card>
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

<style scoped>
.texto {
    margin: -2.3rem 0 0 1.5rem;
}
Button {
    margin-left: 3.3rem;
}
</style>
