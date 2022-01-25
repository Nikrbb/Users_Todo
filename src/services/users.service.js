import ApiClient from "../libs/api-client";

const baseUrl = process.env.VUE_APP_API;

export default {
    usersList() {
        return ApiClient.get(`${baseUrl}/users`)
    }
}