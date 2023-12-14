  //import { GuestManagement } from '../lib/GuestManagement.js'
const GuestManagement = require('../lib/GuestManagement.js')

const createGuestList = () => {
  const guestList = new GuestManagement()
  guestList.addNewGuest('John', 'Doe')
  guestList.addNewGuest('Jane', 'Smith')
  guestList.addNewGuest('Michael', 'Johnson')
  guestList.addNewGuest('Emily', 'Williams')
  guestList.addNewGuest('Robert', 'Brown')
  guestList.addNewGuest('Jessica', 'Jones')
  guestList.addNewGuest('William', 'Davis')
  guestList.addNewGuest('Sophia', 'Miller')
  guestList.addNewGuest('David', 'Wilson')
  guestList.addNewGuest('Olivia', 'Taylor')
  guestList.addNewGuest('James', 'Anderson')
  guestList.addNewGuest('Ava', 'Thomas')
  guestList.addNewGuest('Joseph', 'Martinez')
  guestList.addNewGuest('Isabella', 'Moore')
  guestList.addNewGuest('Charles', 'Clark')
  guestList.addNewGuest('Mia', 'Rodriguez')
  guestList.addNewGuest('Daniel', 'Lopez')
  guestList.addNewGuest('Grace', 'Lee')
  guestList.addNewGuest('Matthew', 'Gonzalez')
  guestList.addNewGuest('Harper', 'Harris')
  return guestList
}
module.exports = createGuestList
 //export { createGuestList }
