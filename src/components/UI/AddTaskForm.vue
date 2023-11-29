  <template>
    <!-- v-slot="{ isSubmitting }" -->
    <Form @submit="onSubmit"
      :initialValues="initialValue"
      :validationSchema="validationSchema"
      class="border border-cyan-800 p-7 w-full mw-[700px] mx-auto rounded-lg grid gap-5 mb-5">
      <h4 class="text-title_2">Add task:</h4>
      
        <vee-valid-field 
          name="title"
          placeholder="Add task"
          label="Write task"
          id="test"
          labelForInput="test"
          labelPosition="BottomLeft"
          classes="case3"
        />
        
      <button 
          class="border border-green-500 p-4 w-full disabled:bg-gray-500 rounded-lg hover:bg-green-500"
          :disabled="loading"
      >add item
      </button>
      
    </Form>
  </template>
  <script setup>
  import { Form } from "vee-validate";
  import * as yup from "yup";
  import useTodoStore from "@/stores/todoStore.js"
  import VeeValidField from "@/components/ui/VeeValidField.vue";

  import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError.js";

  const {loading, handler} = useHandleLoadingAndError();
  const todoStore = useTodoStore();

  const initialValue = {
    title: "",
    completed: false,
  };

  const validationSchema = {  
    title: yup.string().required(),
  };

  const onSubmit = async (form, ctx) => {
    const res = await handler(todoStore.addTask(form));
    if(!res.error) {
      ctx.resetForm()
    }
  };
  </script>