class GuestManagement {
  constructor() {
    this.guests = []
  }

  // Create (Add a new guest)
  addNewGuest(firstname, lastname) {
    if (!firstname || !lastname) {
      throw new Error('Both first name and last name are required.')
    }
    const newGuest = { firstname, lastname }
    this.guests.push(newGuest)
    return this.guests
  }

  // Read (Get all guests)
  getAllGuests() {
    return this.guests
  }

  // Delete (Remove a guest)
  removeGuest(deleteGuest) {
    const deleteIndex = this.guests.findIndex(
      (guest) =>
        deleteGuest.firstname.toLowerCase() === guest.firstname.toLowerCase() &&
        deleteGuest.lastname.toLowerCase() === guest.lastname.toLowerCase()
    )
    if (deleteIndex < 0 || deleteIndex >= this.guests.length) {
      throw new Error('Invalid index.')
    }
    return this.guests.splice(deleteIndex, 1)
  }

  // Search (Find guests by keyword)
  searchGuests(keyword) {
    const lowerCaseKeyword = keyword.toLowerCase()
    return this.guests.filter(
      (guest) =>
        guest.firstname.toLowerCase().includes(lowerCaseKeyword) ||
        guest.lastname.toLowerCase().includes(lowerCaseKeyword)
    )
  }
}
//export { GuestManagement }
module.exports = GuestManagement
