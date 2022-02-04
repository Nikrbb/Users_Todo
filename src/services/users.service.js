import ApiClient from "../libs/api-client";

const baseUrl = process.env.VUE_APP_API;

export default {
    usersList(amount = 10) {
        return ApiClient.get(`${baseUrl}/users?perPage=${amount}`)
    },
    usersId(id) {
        return ApiClient.get(`${baseUrl}/users/${id}`)
    },
}