import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import InputText from 'primevue/inputtext';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row


import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import '/node_modules/primeflex/primeflex.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('TabMenu', TabMenu)
app.component('InputText', InputText)

app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)



app.mount('#app')
