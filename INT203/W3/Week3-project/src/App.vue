<script setup>
import { ref } from 'vue'

const newGroup = ref({
  section: '',
  groupName: '',
  repo: '',
  members: []
})

//members:[{
//     projectCo:false,
//     studentId:'',
//     studentName:''
// },]
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
</script>

<template>
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
          <button class="px-2 py-1 bg-red-600 text-white rounded-lg">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>