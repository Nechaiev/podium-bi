<template>
    <div class="relative mx-6 py-4 group">
        <input class="border border-cyan-500 p-4 w-full rounded-lg peer hidden"
               :name="name" 
               :type="type"
               :checked="checked"
               :id="id"
               :value="checked ? checkedValue : uncheckedValue"
               @change="handleChange"
               />

        <label :label="label" :for="id" v-if="label" class="peer-checked:text-sky-500">
            {{ label }}
        </label>
        <ErrorMessage class="text-red-600" :name="name"/>
        
            <h2 class="group-hover:text-green-500 text-red-500">
              Published
            </h2>
        
    </div>
</template>

<script setup>
import {useField, ErrorMessage} from 'vee-validate';



const props = defineProps({
    label: String, 
    id: String,
    for: String,
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "checkbox",
        validator: (val)=> ['checkbox', 'radio'].includes(val)
    },
    checkedValue: {
        type: Boolean,
        default: true,
    },
    uncheckedValue: {
        type: Boolean,
        default: false,
    },
   
})

const {handleChange, checked} = useField(()=> props.name, undefined, {
    type: props.type,
    checkedValue: props.checkedValue,
    uncheckedValue: props.uncheckedValue,
})


</script>
 <!-- <style>
input[type="checkbox"] {
    display: none;
}
input[type="checkbox"] + label {
 
    display: inline-block;
    width: 48px;
    height: 48px;
    cursor: pointer;
    border: 2px solid currentColor;
    border-radius: 4px;
}

input[type="checkbox"] + label:before {
    content: "";
    font-size: 36px;
    display: inline-block;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

input[type="checkbox"]:checked + label:before {
    content: "\2713";
}
</style>  -->