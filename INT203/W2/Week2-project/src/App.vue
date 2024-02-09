<script setup>
import SearchIcone from "./components/icons/SearchIcon.vue";
import Sort from "./components/icons/Sort.vue";
import groups from "../data/groups.json";
import {
  sortBySection,
  getTotalPages,
  getRowInPage,
} from "./libs/utilities.js";
import { ref } from "vue";
const searchKeyWord = ref("");
const workGroups = ref(groups);
const currentPage = ref(1);
const rows = 10;
const isShow = ref(true);

function searchWorkGroups(allGroup,keyword){
  
}

const newGroup = ref({
  section: "",
  groupName: "",
  repo: "",
  members: [],
});

const numOfMembers = ref(1);
const saveNewGroup = () => {
  console.log(newGroup.value);
};

const addNewMember = () => {
  newGroup.value.members = [];
  for (let index = 0; index < numOfMembers.value; index++) {
    newGroup.value.members.push({
      projectCo: false,
      studentId: "",
      studentName: "",
    });
  }
};
</script>

<template>
  <header>
    <nav class="flex mx-auto items-center p-6 bg-gradient-to-r from-violet-200">
      <div>
        <img class="h-20 w-auto" src="./assets/vue-icon.png" alt="" />
      </div>
      <div>
        <h1 class="text-white text-4xl">Creative Project</h1>
        <h1 class="italic text-black-200 text-xl">Play and Learn</h1>
      </div>
    </nav>
  </header>
  <main>
    <div v-show="isShow">
      <section class="flex justify-between mx-auto pr-10 pt-5">
        <div class="flex items-center">
          <a @click="isShow = false"> Add New Geoupwork</a>
        </div>
        <div class="flex items-center input input-bordered w-full max-w-xs">
          <SearchIcone />
          <input
            v-model="searchKeyWord"
            type="text"
            placeholder="type your keyword..."
            class="pl-2"
          />
        </div>
      </section>
      <section class="px-5">
        <div class="grid grid-cols-12 gap-2 pb-5 pt-5">
          <h3 class="flex">
            Section <a @click="sortBySection(workGroups)"><Sort /></a>
          </h3>
          <h3 class="col-span-2">Group Name</h3>
          <h3 class="col-span-5">Github Repository</h3>
          <h3 class="col-span-4">Members</h3>
        </div>
        <div
          class="grid grid-cols-12 gap-2"
          :class="index % 2 === 0 ? 'bg-slate-200' : 'bg-white'"
          v-for="(Group, index) in getRowInPage(workGroups, currentPage, rows)"
          :key="Group.ID"
        >
          <p>{{ Group.section }}</p>
          <p class="col-span-2">{{ Group.groupName }}</p>
          <p class="col-span-5">{{ Group.repo }}</p>
          <div class="col-span-4">
            <p v-for="member in Group.members" :key="member.studentId">
              {{ member.studentId }} {{ member.studentName }}
            </p>
          </div>
        </div>
      </section>
      <section class="flex px-5 justify-center">
        <div v-for="Page in getTotalPages(workGroups, rows)" class="">
          <button
            class="btn"
            :style="currentPage == Page ? 'background-color : red' : ''"
            @click="currentPage = Page"
          >
            {{ Page }}
          </button>
        </div>
      </section>
    </div>

    <div v-show="!isShow">
      <div class="w-full">
        <div class="flex flex-col gap-2 bg-slate-100 p-3">
          <div>
            Section:
            <select v-model="newGroup.section">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            {{ newGroup.section }}
          </div>
          <div>
            Group Name:
            <input
              type="text"
              v-model.trim="newGroup.groupName"
              class="w-1/2 border border-gray-300 p-0.5 outline-none rounded-lg"
            />
            {{ newGroup.groupName }}
          </div>
          <div>
            GitHub Repository:
            <input
              type="text"
              v-model.trim="newGroup.repo"
              class="w-1/2 border border-gray-300 p-0.5 outline-none rounded-lg"
            />
            {{ newGroup.repo }}
          </div>
          <div>
            <div>
              Number of Members:
              <input
                @change="addNewMember"
                id="input-number-members"
                type="number"
                min="0"
                v-model.number="numOfMembers"
                class="border border-gray-300 p-0.5 outline-none rounded-lg"
              />
              {{ numOfMembers }}
            </div>
            <div
              v-for="(member, index) in newGroup.members"
              :key="index"
              class="flex flex-row gap-2 space-y-2 items-center"
            >
              <input type="checkbox" v-model="member.projectCo" />[Project
              Coordinator] {{ member.projectCo }} Student Id:
              <input
                v-model.number="member.studentId"
                type="text"
                class="border border-gray-300 p-0.5 outline-none rounded-lg"
              />{{ member.studentId }}
              Student Name:
              <input
                v-model.trim="member.studentName"
                type="text"
                class="border border-gray-300 p-0.5 outline-none rounded-lg"
              />{{ member.studentName }}
            </div>
            <div class="flex gap-2">
              <button
                class="px-2 py-1 bg-green-600 text-white rounded-lg"
                v-on:click="saveNewGroup"
              >
                OK
              </button>
              <button
                @click="isShow = true"
                class="px-2 py-1 bg-red-600 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
