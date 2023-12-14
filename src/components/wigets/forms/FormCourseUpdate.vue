<template>
  <form
    @submit="onSubmit"
    class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >
    <div class="border border-red-500 text-red-500 rounded-lg mb-5 p-4">
      {{ error }}
    </div>

    <text-field-validate
      name="title"
      label="Title"
      placeholder="title"
      class="w-full"
    />

    <text-field-validate
      name="slug"
      label="Slug"
      placeholder="slug"
      class="w-full"
    />
    <text-field-validate
      name="id"
      label="Course ID: "
      placeholder="slug"
      class="w-full"
      disabled
    />

    <!-- type="file" component -->
    <input name="file" type="file" class="my-6" />
    <textarea-field-validate
      name="info"
      label="Call to action box "
      placeholder="Enter action"
      class="w-full"
    />
    <base-editor
      name="info"
      label="Call to action box "
      placeholder="Enter action"
      class="w-full"
    />

    <textarea-field-validate
      name="summary"
      label="Summary"
      placeholder="Enter action"
      class="w-full"
    />
    <textarea-field-validate
      name="description"
      label="Course Description"
      placeholder="Enter description"
      class="w-full"
    />
    <textarea-field-validate
      name="objective"
      label="Objectives"
      placeholder="Enter objectives"
      class="w-full"
    />
    <text-field-validate
      name="video"
      label="Video url"
      placeholder="Enter video url"
      class="w-full"
    />
    <pre>{{ errors }}</pre>
    <combobox-field-validate
      name="language"
      label="Select Languages"
      :items="selects.languages"
      item-title="name"
      item-value="id"
      :return-object="false"
      auto-select-first="exact"
    />

    <combobox-field-validate
      name="author_id"
      label="Select author"
      :items="selects.authors"
      item-title="name"
      item-value="id"
    />
    <!--    item-title="author_id"
        item-value="id"
    :return-object="false"-->

    <combobox-field-validate
      name="state_ids"
      label="states"
      :items="selects.states"
      item-title="name"
      item-value="id"
      multiple
    />
    <pre>{{ values.feature_ids }}</pre>
    <combobox-field-validate
      name="feature_ids"
      label="Other Training Options"
      :items="selects.features"
      item-title="name"
      item-value="id"
      multiple
    />
    <combobox-field-validate
      name="option_ids"
      label="Options"
      :items="selects.options"
      item-title="name"
      item-value="id"
      multiple
    />
    <combobox-field-validate
      name="agency_ids"
      label="Course Topics(agencies)"
      :items="selects.agencies"
      item-title="name"
      item-value="id"
      multiple
    />

    <combobox-field-validate
      name="tag_id"
      label="Tags"
      :items="selects.tags"
      item-title="name"
      item-value="id"
      multiple
    />

    <combobox-field-validate
      name="subtitle_ids"
      label="Subtitles"
      :items="selects.subtitles"
      item-title="name"
      item-value="id"
      multiple
    />
    <!-- Select Subtitles *  component: v-select  -->

    <text-field-validate
      name="meta_title"
      label="Meta Title"
      placeholder="Enter meta title *"
      class="w-full"
    />
    <textarea-field-validate
      name="meta_description"
      label="Meta Description"
      placeholder="Enter meta description"
      class="w-full"
    />
    <!-- type="file" component -->
    <!-- Search Phrases & Words   *  component: v-combobox  -->
    <div class="text-center">
      <v-btn type="submit" :loading="loading">Submit</v-btn>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import TextFieldValidate from "@/components/ui/TextFieldValidate.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";
import apiRouter from "@/api/apiRouter.js";
import TextareaFieldValidate from "@/components/ui/TextareaFieldValidate.vue";
import useCashStore from "@/stores/cashStore";
import ComboboxFieldValidate from "@/components/ui/ComboboxFieldValidate.vue";
import BaseEditor from "@/components/ui/BaseEditor.vue";

const props = defineProps({
  courseId: {
    type: [String, Number],
    required: true,
  },
  source: {
    type: Object,
    default: () => ({
      title: "",
      slug: "",
      id: "",
      info: "",
      summary: "",
      description: "",
      objective: "",
      video: "",
      language: {},
      author_id: {},
      states: [],
      features: [],
      options: [],
      agencies: [],
      tags: [],
      meta_title: "",
      meta_description: "",
      subtitles: [],
    }),
  },
});

const emit = defineEmits(["success"]);

const cashStore = useCashStore();

const selects = computed(() => cashStore.cashData.selects);
console.log(selects);

const initialValue = computed(() => ({
  title: props.source.title,
  slug: props.source.slug,
  id: props.source.id,
  info: props.source.info,
  summary: props.source.summary,
  description: props.source.description,
  objective: props.source.objective,
  video: props.source.video,
  language: props.source.language ? props.source.language.id : "",
  author_id: props.source.author ? props.source.author.id : "",
  state_ids: props.source.states.length
    ? props.source.states.map((item) => item.id)
    : [],
  feature_ids: props.source.features.length
    ? props.source.features.map((item) => item.id)
    : [],
  option_ids: props.source.options.length
    ? props.source.options.map((item) => item.id)
    : [],
  agency_ids: props.source.agencies.length
    ? props.source.agencies.map((item) => item.id)
    : [],
  tag_id: props.source.tags.length
    ? props.source.tags.map((item) => item.id)
    : [],
  meta_title: props.source.meta_title,
  meta_description: props.source.meta_description,
  subtitle_ids:
    props.source.subtitles && props.source.subtitles.length
      ? props.source.subtitles.map((item) => item.id)
      : [],
}));

const { handler, loading, error } = useHandleLoadingAndError();

const { handleSubmit, errors, values } = useForm({
  initialValues: initialValue,
  validationSchema: yup.object({
    title: yup.string().max(255).required(),
    slug: yup
      .string()
      .matches(/^[0-9A-Z_-]*$/i, "invalid slug")
      .max(255)
      .required(),
    id: yup.string().required(),
    info: yup.string(),
    summary: yup.string(),
    description: yup.string(),
    objective: yup.string(),
    video: yup.string().max(255),
    meta_title: yup.string().max(255).required(),
    meta_description: yup.string().max(255).required(),
    language: yup.string().required(),
    author_id: yup.string().required(),
    state_ids: yup.array().of(yup.string()).required(),
    feature_ids: yup.array().of(yup.string()).required(),

    agency_ids: yup.array().of(yup.string()).required(),
    tag_id: yup.array().of(yup.string()).required(),
  }),
});

/*const onSubmit = handleSubmit(async (data) => {
  console.log(data)
  const res = await handler(apiRouter.admin.courses.update(props.courseId, data))

  if (!res.error) {
    console.log(res)
    console.log(res.data)
    emit('success', res.data)
  }
})*/
const originalValues = ref({ ...props.source });

const changedFields = ref({}); // Об'єкт для зберігання змінених полів

// Відстежування змін у формі
watch(
  values,
  (newValues) => {
    for (const key in originalValues.value) {
      if (
        JSON.stringify(newValues[key]) !==
        JSON.stringify(originalValues.value[key])
      ) {
        changedFields.value[key] = newValues[key]; // Зберігаємо змінені поля
      } else {
        delete changedFields.value[key]; // Видаляємо поле, якщо воно повернулося до початкового стану
      }
    }
  },
  { deep: true },
);

const getChangedFields = () => {
  return changedFields.value; // Повертаємо змінені поля
};

const onSubmit = handleSubmit(async () => {
  const changedData = getChangedFields();
  console.log("Змінені дані для відправки:", changedData);

  const res = await handler(
    apiRouter.admin.courses.update(props.courseId, changedData),
  );

  if (!res.error) {
    console.log(res);
    console.log(res.data);
    emit("success", res.data);
  }
});
</script>
