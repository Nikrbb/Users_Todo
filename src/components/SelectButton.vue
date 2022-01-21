<template>
<div class="buttons-wrapper">
    <button 
        :class="['change-button', { active: currentTab === tab }]" 
        v-for="tab in tabs" 
        :key="tab"
        @click="changeTab(tab)"
        >{{ tab }}
    </button>
</div>
    
</template>

<script>
export default {
    name: 'SelectButton',
    props: {
        tabs: {
            type: Array,
            required: true,
        },
        currentTab: {
            type: String,
            required: true,
        }
    }, 
    methods: {
        changeTab(tab) {

            this.$emit('changeTab', tab)
        }
    }   
}
</script>
<style>

    .buttons-wrapper {
        text-align-last: left;
        margin-left: 20px;
    }
    .change-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    .change-button:hover {
        background: #e0e0e0;
    }
    .change-button.active {
        background: #e0e0e0;
    }

</style>