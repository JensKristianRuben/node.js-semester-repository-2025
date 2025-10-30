import { writable } from "svelte/store";

function fridgemessageCustomStore() {
    const { subscribe, update, set } = writable(["Write a fridge message"]);

    return {
        subscribe,
        update,
        set
    }

}


export const fridgeMessages = fridgemessageCustomStore();
// export const fridgeMessages = writable(["Write a fridge message", ]);