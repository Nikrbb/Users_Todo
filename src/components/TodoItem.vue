<template>
    <div class="task">
        <div class="task__wrapper">
            <h3 class="task__title">{{ item.title }}</h3>
            <p class="task__text">{{ item.description }}</p>
            <button class="task__button" @click="deleteItem(item)">delete</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TodoItem',
    props: {
        item: {
            type: Object,
            required: true,
            validator: function(value) {
                return value.id && value.description && value.title;
            }
        },
        workTasks: {
            type: Array,
            default: [],
            required: false,
            validator: function(value) {
                for (const i of value) {
                    console.log(i);
                    if (typeof(i) !== 'object') return false
                }
                return true
            }
        },
        homeTasks: {
            type: Array,
            default: [],
            required: false,
            validator: function(value) {
                for (const i of value) {
                    console.log(i);
                    if (typeof(i) !== 'object') return false
                }
                return true
            }
        },
        currentTab: {
            type: String,
            required: true,
            validator: function(value) {
                return value === "Work" || value === "Home"
            },
        },
    },


    methods: {
        deleteItem(item) {
            let newArr = [];
            if (this.currentTab === `Work`) {
                for (let i of this.workTasks) {
                    if(i.id !== item.id) newArr.push(i);
                }
            } else {
                for (let i of this.homeTasks) {
                    if(i.id !== item.id) newArr.push(i);
                }
            }
            
            this.$emit('deleteTodo', newArr)
        },
    }
    
}
</script>

<style>

    .task {
        display: inline-block;
        width: 300px;
        height: 170px;
        padding: 10px;
        border: 1px solid grey;
        border-radius: 10px;
        background-color: rgb(228, 227, 227);
        transition: 0.2s;
    }
    .task:hover {
        box-shadow: 0px 0px 3px grey;
    }
    .task__wrapper {
        background-color: #fff;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        padding: 10px;
        position: relative;
    }
    .task__title {
        border-bottom: 1px solid grey;
    }
    .task__text {
        margin-top: 5px;
        text-align-last: left;
    }
    .task__button {
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }
</style>