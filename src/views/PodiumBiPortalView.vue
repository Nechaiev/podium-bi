<template>

  <h1>PodiumBiPortalView</h1>
  <div class="d-flex flex-wrap justify-center gap-3 mx-auto px-3 max-w-2xl">


   <div class="d-flex flex-col gap-4 w-full">
      <h2 class="text-xl-h1">{{comboValue}}</h2>
      <v-text-field label="Label" variant="outlined" type="input"></v-text-field>
      <v-text-field label="email" variant="outlined" type="email"></v-text-field>
      <v-text-field label="password" variant="outlined" type="password" error error-messages="my error"></v-text-field>
      <combobox-validate :items="comboItems" v-model="comboValue" syncVModel></combobox-validate>
    </div>-->
  </div>

</template>

<script setup>
/*import ComboboxValidate from "@/components/ui/ComboboxValidate.vue";
import {ref} from 'vue';*/
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import apiRouter from "@/api/apiRouter";
import useHandleLoadingAndError from "@/composables/useHandleLoadingAndError";

/*const comboValue = ref('Texas')
const comboItems = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']*/
const languageItems = ['English'];
const authorItems = ['Andrew Easler, Esq.','Andrew Easler, Esq.','Andrew Easler, Esq.',];
const agenciesItems = ["DER COURSES",
                       "DOT COURSES",
                       "EMPLOYEE & SUPERVISOR TRAINING",
                       "WORKPLACE TESTING LAWS",
                       "DRUG-FREE WORKPLACE",
                       "ALCOHOL TESTING",
                       "TRAIN-THE-TRAINER",
                       "REASONABLE SUSPICION",
                      ];
const otherItems = [];
const subtitlesItems = [];

const featureItems = [
                     "DOT Compliant",
                     "Created by Attorneys",
                     "Live Customer Support",
                     "Learn Anytime & Anywhere",
                     "Credits Never Expire",
                     "Instant Course Access",
                     "2 Hours of Learning",
                     "Downloadable Certificate",
                     "Instant Manager Accounts",
                     "Volume Discounts",
                     "Approved for CE Credits",
                    ];

const topicsItems = [
                    "FMCSA",
                    "DOT",
                    "PHMSA",
                    "FAA",
                    "USCG",
                    "FRA",
                    "OSHA",
                    "FTA",
                    ];

const stateItems = [
                    "Alabama",
                    "Alaska",
                    "Arizona",
                    "Arkansas",
                    "California",
                    "Colorado",
                    "Connecticut",
                    "Delaware",
                    "Florida",
                    "Georgia",
                    "Hawaii",
                    "Idaho",
                    "Illinois",
                    "Indiana",
                    "Iowa",
                    "Kansas",
                    "Kentucky",
                    "Louisiana",
                    "Maine",
                    "Maryland",
                    "Massachusetts",
                    "Michigan",
                    "Minnesota",
                    "Mississippi",
                    "Missouri",
                    "Montana",
                    "Nebraska",
                    "Nevada",
                    "New Hampshire",
                    "New Jersey",
                    "New Mexico",
                    "New York",
                    "North Carolina",
                    "North Dakota",
                    "Ohio",
                    "Oklahoma",
                    "Oregon",
                    "Pennsylvania",
                    "Rhode Island",
                    "South Carolina",
                    "South Dakota",
                    "Tennessee",
                    "Texas",
                    "Utah",
                    "Vermont",
                    "Virginia",
                    "Washington",
                    "West Virginia",
                    "Wisconsin",
                    "Wyoming",
                   ]

const tagsItems = [];

const {handler, loading, error} = useHandleLoadingAndError()

const initialState = {
    title: "string",
    meta_title: "string",
    meta_description: "text",
    slug: "se11d-excepturi-molestiae-labore-dolor-inventore",
    info: "text",
    description: "string",
    objective: "string",
    subtitles: ["sub1", "sub2"],
    seo_keywords: "seo1,seo2",
    max_discount: 5,
    min_credit_price:100,
    author_id: 1,
    tags: "string",
    video: "string",
    category_ids:[2,3],
    language:1,
    state_ids:[1],
    agency_ids:[],
    option_ids:[1],
    feature_ids:[],
    question_category_ids:[],
    subtitle_ids:[],
    is_certificate_required: true,
    can_be_reenrolled: true,
    due_dates: 10,
    expired_on: 160,
    available_on:50,
    allow_shipping:true,
}


const state = reactive({
  ...initialState,
})

/*
const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]
*/

const rules = {
  title: { required },
  slug: {required},
  id: {required},
  fileInput: {required},
  callToActionBox: {required},
  summary: {required},
  courseDescription: {required},
  objectives: {required},
  video: {required},
  language: {required},
  author: {required},
  agencies: {required},
  other: {required},
  feature: {required},
  topics: {required},
  subtitles: {required},
  state: {required},
  tags: {required},
  metaTitle: {required},
  metaDescription: {required},
  seoImage: {required},
  searchPrasesAndWords: {required},

}

const v$ = useVuelidate(rules, state)





const onSetCourse = async () => {
  console.log(240, state)
  await handler(apiRouter.admin.courses.update( 240, state));
};


function clear () {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}
</script>

<style scoped>

</style>