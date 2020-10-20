import axios from "axios";
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Object.keys(rules).forEach(rule => extend(rule, {...rules[rule], message: messages[rule]}));


const meta = document.head.querySelector('meta[name="csrf-token"]');
// const app = document.getElementById('app');


export const csrf = meta.getAttribute('content');

// export const auth = JSON.parse(app.dataset.auth);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
