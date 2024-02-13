<script setup>
import { ref, computed } from 'vue'
import SortIcon from './components/icons/Sort.vue'
import SearchIcon from './components/icons/SearchIcon.vue'
import groups from '../data/groups.json'
import {
  sortBySection,
  getLastPage,
  getRowsInPage,
  searchGroupWorks
} from './libs/utilities.js'
const workGroups = ref(getRowsInPage(groups, 10, 1))
const newGroup = ref({
  section: '',
  groupName: '',
  repo: '',
  members: []
})
const numOfMembers = ref(0)
const saveNewGroup = () => {
  console.log(newGroup.value)
}
const addNewMember = () => {
  newGroup.value.members = []
  for (let index = 0; index < numOfMembers.value; index++) {
    newGroup.value.members.push({
      projectCo: false,
      studentId: '',
      studentName: ''
    })
  }
}
const addMode = ref(false)

const currentPage = ref(1)

const getRows = (n) => {
  currentPage.value = n
  workGroups.value = getRowsInPage(groups, 10, n)
}

const searchKeywords = ref('')
// const search = () => {
//   console.log('search...')
//   searchGroupWorks(workGroups.value, searchKeywords.value)
// }
const filteredGroupWorks = computed(() => {
  console.log('computed working...')
  return searchGroupWorks(workGroups.value, searchKeywords.value)
})
</script>

<template>
  <div class="w-full">
    <header>
      <section
        class="flex items-center p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500"
      >
        <img src="./assets/vue-icon.png" class="h-14" />
        <div>
          <h1 class="text-white text-4xl">Creative Projects</h1>
          <h2 class="italic text-indigo-200 text-xl">Play and Learn</h2>
        </div>
      </section>
    </header>
    <main class="p-5">
      <!-- toggle adding groupwork -->
      <section>
        <div class="italic cursor-pointer text-purple-600 hover:text-cyan-500">
          <p v-on:click="addMode = true">Add New Group</p>
        </div>
      </section>

      <section class="flex justify-end pt-2">
        <div
          class="w-1/4 flex items-center gap-3 border border-gray-300 p-1 rounded-lg"
        >
          <SearchIcon />
          <input
            class="outline-none"
            type="text"
            placeholder="type your keyword..."
            v-model="searchKeywords"
          />
        </div>
      </section>
      <!-- Modal Window -->
      <section v-show="addMode" class="w-full pt-2 flex justify-center">
        <div class="w-1/2 flex flex-col gap-2 bg-slate-50 p-10 rounded-lg">
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
                @click="addMode = false"
                class="px-2 py-1 bg-red-600 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- Display -->
      <section v-show="addMode === false">
        <div class="grid grid-cols-12 gap-2 font-semibold text-xl pb-3">
          <div class="flex items-center">
            <h3>Section</h3>
            <!-- Sorting Groupworks by section (ascending) -->
            <SortIcon
              @click="sortBySection(workGroups)"
              class="cursor-pointer"
            />
          </div>

          <h3 class="col-span-2">Group Name</h3>
          <h3 class="col-span-5">GitHub Repository</h3>
          <h3 class="col-span-4">Members</h3>
        </div>
        <div
          v-for="(group, index) in filteredGroupWorks"
          :key="group.ID"
          class="grid grid-cols-12 gap-2"
          :class="index % 2 === 0 ? 'bg-slate-100' : ''"
        >
          <p>{{ group.section }}</p>
          <p class="col-span-2">{{ group.groupName }}</p>
          <p class="col-span-5">{{ group.repo }}</p>
          <!-- <p class="col-span-4">{{group.members  }}</p> -->
          <ul class="col-span-4 list-disc list-inside">
            <!-- <li v-for="member in group.members">{{ member.studentId }} {{ member.studentName }}</li> -->
            <li
              v-for="{ studentId, studentName } in group.members"
              :key="studentId"
            >
              {{ `${studentId}  ${studentName}` }}
            </li>
          </ul>
        </div>
        <!-- Paginate -->
        <div class="flex justify-center gap-2">
          <p
            @click="getRows(n)"
            :class="currentPage === n ? 'bg-white text-black' : ''"
            v-for="(n, index) in getLastPage(groups, 10)"
            :key="index"
            class="bg-gray-400 p-1 text-white hover:bg-blue-500 cursor-pointer"
          >
            {{ n }}
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped></style>