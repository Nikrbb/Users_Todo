<template>
    <div class="border">
        <form ref="form" @submit.prevent="submit" action="" class="form">
          <h1  class="form__title">{{ currentTab }} task</h1>
          <input class="form__title" ref="input" name="title" type="text" placeholder="title">
          <h2 class="form__descr">Description</h2>
          <textarea class="form__descr" ref="textarea" name="description" id="descr" cols="30" rows="10" placeholder="Add your task"></textarea>
          <button class="submit"   type="submit">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'Form',
    props: ['currentTab'],
    data() {
        return {
            input: null,
            textarea: null
        }
    },
    methods: {
        submit() {
            const obj = {}
            const inputs = [this.$refs.input, this.$refs.textarea]
            for (let i of inputs) {
                obj[i.name] = i.value;
            }
            if (this.validate(obj)) {
                this.$refs.form.reset();
                this.$emit('sendData', obj)
            }
        },

        validate(obj) {
            for (let i in obj) {
                if (!obj[i].trim()) return false
            }
            return true
        }
    }

    
}
</script>

<style>
    .border {
        padding: 10px;
        background-color: rgb(228, 227, 227);
        border: 1px solid grey;
        border-radius: 10px;
        height: fit-content;
    }
    .form {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        max-width: 400px;
        max-height: 350px;
        
    }
    .form__descr {
        margin-top: 20px;
        resize: none;
    }

    .submit {
        cursor: pointer;
    }
</style>
