let guestForm = require('./guestForm.js')
const createGuestList = require('./data/guestdata.js')

const fs = require('fs')
const initialHtml = fs.readFileSync('./index.html')
document.body.innerHTML = initialHtml
const { registerEventHandling, displayGuests } = guestForm()

let guestList
beforeEach(() => {
  document.body.innerHTML = initialHtml
  guestList = createGuestList()
})

test('should display initial guests', () => {
  displayGuests(guestList.getAllGuests())
  const displayArea = document.getElementById('display-area')
  expect(displayArea.children.length).toBe(guestList.getAllGuests().length)
  guestList.getAllGuests().forEach((guest, index) => {
    const guestDiv = displayArea.children[index]
    expect(guestDiv.textContent).toContain(
      `${guest.firstname} ${guest.lastname}`
    )
  })
})

test('should add event listeners to remove icons', () => {
  displayGuests(guestList.getAllGuests())
  const displayArea = document.getElementById('display-area')
  const removeIcons = displayArea.getElementsByClassName('remove-icon')
  expect(removeIcons.length).toBe(guestList.getAllGuests().length)
  guestList.getAllGuests().forEach((guest, index) => {
    expect(removeIcons[index].onclick).toBeDefined()
  })
})

test('should display matching guests when searching', () => {
  registerEventHandling()
  displayGuests(guestList.getAllGuests())
  const searchInput = document.getElementById('search-input')
  const query = [...'john']
  let previousQuery = ''
  const event = new Event('keyup')

  query.forEach((q) => {
    const displayArea = document.getElementById('display-area')
    searchInput.value = previousQuery + q
    searchInput.dispatchEvent(event)
    expect(displayArea.children.length).toBe(
      guestList.searchGuests(searchInput.value).length
    )
    previousQuery = searchInput.value
  })
})

test('should remove a guest when clicking on remove icon', () => {
  displayGuests(guestList.getAllGuests())
  const removeFirstname = guestList.getAllGuests()[0].firstname
  const removeLastname = guestList.getAllGuests()[0].lastname
  const displayArea = document.getElementById('display-area')
  const removeIcons = displayArea.getElementsByClassName('remove-icon')
  const event = new Event('click')
  removeIcons[0].dispatchEvent(event)

  guestList.removeGuest({
    firstname: removeFirstname,
    lastname: removeLastname
  })
  expect(displayArea.children.length).toBe(guestList.getAllGuests().length)
  expect(displayArea.children[0].textContent).toContain(
    guestList.getAllGuests()[0].firstname ||
      guestList.getAllGuests()[0].lastname
  )
})

test('should add a new guest', () => {
  registerEventHandling()
  displayGuests(guestList.getAllGuests())
  let displayArea = document.getElementById('display-area')
  const firstNames = [
    'John',
    'Emily',
    'Michael',
    'Sophia',
    'William',
    'Olivia',
    'James',
    'Emma',
    'Robert',
    'Ava'
  ]
  const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Taylor',
    'Anderson'
  ]

  for (let index = 0; index < firstNames.length; index++) {
    const fnValue = firstNames[index]
    const lnValue = lastNames[index]
    const fnInput = document.getElementById('firstname-input')
    const lnInput = document.getElementById('lastname-input')
    fnInput.value = fnValue
    lnInput.value = lnValue

    const event = new Event('click')
    const addGuestBtn = document.getElementById('add-guest-btn')

    addGuestBtn.dispatchEvent(event)
    guestList.addNewGuest(fnValue, lnValue)

    displayArea = document.getElementById('display-area')
    expect(displayArea.children.length).toBe(guestList.getAllGuests().length)
    expect(
      displayArea.children[displayArea.children.length - 1].textContent
    ).toContain(`${fnValue} ${lnValue}`)
  }
})
