//import { createGuestList } from './data/guestdata.js'
const createGuestList = require('./data/guestdata.js')
//65130500054 Phuttinan Phaksawaeng
const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const searchBox = document.getElementById("search-input")
    searchBox.addEventListener("keyup" ,searchGuest)

    const btnAdd = document.getElementById("add-guest-btn")
    btnAdd.addEventListener("click",addGuest)

  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const display = document.getElementById("display-area");
    const newDivGuest = document.createElement("div")

    const newName = document.createElement("span")
    newName.textContent = `${guestItem.firstname} ${guestItem.lastname}`
    newDivGuest.appendChild(newName)

    const newRemove = document.createElement("span")
    newRemove.setAttribute("class", "remove-icon")
    newRemove.setAttribute("id", `${guestItem.firstname}-${guestItem.lastname}`)
    newRemove.style = "cursor:pointer;color:red"
    newRemove.textContent = "[X]"
    newRemove.addEventListener("click",removeGuest)
    newDivGuest.appendChild(newRemove)

    display.appendChild(newDivGuest)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const display = document.getElementById("display-area");
    display.textContent = ""
    guestResult.forEach(guestItem => {
      displayGuest(guestItem)
    });
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    if(event !== undefined ){
      const searchBox = document.getElementById("search-input")
        displayGuests(guests.searchGuests(searchBox.value))
    }else{
        displayGuests(guests.getAllGuests())
    }
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstnameBox = document.getElementById("firstname-input") 
    const lastnameBox = document.getElementById("lastname-input")
    if(firstnameBox.value?.length !== 0 && lastnameBox.value?.length !== 0){
      const newGuest = guests.addNewGuest(firstnameBox.value,lastnameBox.value)
      firstnameBox.value = ""
      lastnameBox.value = ""
      displayGuest(newGuest[newGuest.length - 1])
    }
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    if(event !== undefined){
      let eventId = event.target.id.split("-")
      guests.removeGuest({firstname:eventId[0],lastname:eventId[1]})
      event.target.parentElement.remove()
    }
  }
  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
module.exports = guestForm
// export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())
