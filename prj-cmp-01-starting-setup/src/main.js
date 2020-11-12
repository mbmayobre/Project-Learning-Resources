import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App)

// components listed here are global components
// they can be used anywhere in the app
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
