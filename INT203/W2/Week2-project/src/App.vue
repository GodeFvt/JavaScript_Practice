<script setup>
import SearchIcone from "./components/icons/SearchIcon.vue"
import groups from "../data/groups.json"
let msg ="Gode"
const getToday = (x)=>{
  return `${new Date (Date.now())} , ${x}` 
}
const isShow = true
const score = 85

</script>
  
<template>
<header>
  <nav class="flex mx-auto items-center p-6 bg-gradient-to-r from-violet-200">
    <div>
      <img class="h-20 w-auto" src="./assets/vue-icon.png" alt="">
    </div>
    <div>
      <h1 class="text-white text-4xl">Creative Project</h1>
      <h1 class="italic text-black-200 text-xl">Play and Learn</h1>
    </div>
  </nav>
</header>
<main>
  <section class="flex justify-end mx-auto pr-10 pt-5">
    <div class="flex items-center input input-bordered w-full max-w-xs">
      <SearchIcone/>
      <input type="text" placeholder="type your keyword..." class="pl-2"/>
    </div>
  </section>

  <section class="px-5">
    <div class="grid grid-cols-12 gap-2 pb-5 pt-5">
        <h3>Section</h3>
        <h3 class="col-span-2">Group Name</h3>
        <h3 class="col-span-5">Github Repository</h3>
        <h3 class="col-span-4">Members</h3>
    </div>
    <div class="grid grid-cols-12 gap-2" :class="index%2 === 0 ? 'bg-slate-200' : 'bg-white' " v-for="(Group,index) in groups" :key="Group.ID">
      <p>{{ Group.section }}</p>
      <p class="col-span-2">{{ Group.groupName}}</p>
      <p class="col-span-5">{{ Group.repo}}</p>
      <div class="col-span-4" >
          <p v-for="member in Group.members" :key="member.studentId">{{ member.studentId }} {{ member.studentName }}</p>
      </div>
  </div>
  </section>
  <!-- <section class="flex mx-auto p-6">
    <div>
      <h1>{{ getToday(msg) }}</h1>
      <p v-show="isShow">Hello, {{ msg.toLowerCase() }} ,Good bye</p>
      <details class="dropdown pr-4">
        <summary class="btn btn-sm">open</summary>
          <ul class="dropdown-content">
            <li v-if="score >= 80"><a >A</a></li>
             <li v-else-if="score>=75"><a>B+</a></li>
          </ul>
      </details>
      <button class="btn btn-sm" >test</button>
    </div>
  </section> -->
</main>
</template>
 
<style scoped>

</style>