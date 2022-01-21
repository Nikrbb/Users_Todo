<template>
    <button @click="clear" class="clear"   type="text">Clear</button>
</template>

<script>
export default {
    props: ['currentTab', 'home', 'work'],
    methods: {
        clear() {
            if (this.currentTab === `Work` && this.work.length === 0) alert(`Nothing to destroy at work`);
            else if (this.currentTab === `Home` && this.home.length === 0) alert(`Nothing to destroy at home`);
            else {
                let isClear = confirm(`Are you sure?`)
                if (isClear) this.$emit('clearTodos')
            }
            
        } 
    }
}
</script>

<style>
    .clear {
        cursor: pointer;
        border-radius: 3px;
        border: 1px solid grey;
        transition: 0.1s;
        max-height: 364px;
    }
    .clear:hover {
        background-color: rgb(228, 228, 228);
    }
</style>