<template>
    <div class="user">
        <h1>User Info</h1>
    <user-info ></user-info>
    </div>
</template>

<script>
import UserInfo from '../components/UserInfo.vue'
import store from '../store/index.js'
import  NProgress  from 'nprogress'

export default {
    name: 'User',
    components: {
        UserInfo
    },
    beforeRouteEnter(routeTo, RouteFrom, next) {
        NProgress.start()
        store.dispatch('getUserById', routeTo.params.id).then(() => {
            NProgress.done();
            next()
        })
    },
}
</script>