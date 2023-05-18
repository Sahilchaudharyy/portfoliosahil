import { child, get, ref, set } from "firebase/database";
import { firebaseDatabase } from "../firebase-config";

export const userModel = {
    path: "user",

    async syncUser() {
        const dbRef = ref(firebaseDatabase);
        get(child(dbRef, this.path))
    },


    async createUser(user) {
        set(ref(firebaseDatabase, this.path), user)

    },


    async deleteUser() { }
}