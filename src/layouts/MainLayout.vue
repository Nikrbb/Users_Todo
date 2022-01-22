<template>
<div class="layout">
    <Sidebar class="sidebar" />
    <router-view ></router-view>
</div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
    name: 'MainLayout',
    components: {
        Sidebar
    },

}
</script>

<style scoped>

    .layout {
        display: grid;
        grid-template-columns: 1fr 5fr;
        
    }

    .sidebar {
        margin-top: 200px;
       
    }
 

</style>