import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { getToken } from "./auth";

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: "pusher",
    key: "local",
    cluster: "mt1",
    forceTLS: false,
    authEndpoint: "http://localhost:8000/broadcasting/auth",
    auth: {
        headers: {
        Authorization: `Bearer ${getToken()}`
        }
    }
});

export default echo;
