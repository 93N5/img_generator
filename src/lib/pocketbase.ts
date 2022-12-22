import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('http://127.0.0.1:8090');
export const currentUser = writable();
let change = false;

pb.authStore.onChange((auth) => {
    let change = true;
    console.log('authStore changed', auth);
    currentUser.set(pb.authStore.model);
});