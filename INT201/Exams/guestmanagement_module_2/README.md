[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/IkMHx-QI)
# LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# Guest Management Requirements

You are given four files (DO NOT EDIT):

1.  index.html
2.  ./lib/GuestManagement.js - provide guest property, constructor, and methods to manage your guests
3.  ./data/guestdata.js - provide initial guests data created from GuestManagement class
4.  guestForm.js - Your task is to write program in nested functions, do not edit provided initial code

## guestForm.js

The guestForm.js handles guest management operations, such as searching, adding, and removing guests from the list.

## GuestForm Function:

### Constant Variables:

- **guests**: initial guests data list created from GuestManagement class

### (Your task here!) Nested Functions:

- **registerEventHandling()** - The registerEventHandling function is responsible for adding event listeners for two main actions in the guest list management system:

  - register a "keyup" event when a user releases a key on the keyboard after typing in the search input field. When this event is triggered, the "searchGuest" function will be called to search for guests based on user input.
  - register an event listener on the "click" event of the "Add Guest" button for adding new guests. The handler function is "addGuest" function.

- **addGuest()** - To add a new guest from the first name and last name in the respective input fields. The new guest will be added to the list by calling "addNewGuest(_firstname_, _lastname_)" function in GuestManagment and then displayed this new guest in the guest area by calling "displayGuest(_newGuestObject_)" function. You must clear firstname and lastname input textbox before a next guest inputting.

- **displayGuests(_guestResult_)** - You must clear all previous children within div (disply-area) before display the guest list that accepts from a guestResult parameter. For each guest, you call "displayGuest(_guestItem_)" function to display each guest name.

  ```
  <!-- Part 3: Display Area -->
  <div id="display-area" style="border-style: solid; border-width: 1px; padding: 15px; line-height: 1.5;">
      <!-- Guest list will be displayed here -->
  </div>
  ```

- **displayGuest(_guestItem_)** - dynamically creates HTML elements for each guest that accepts from a guestItem parameter and its corresponding remove icon [X] as follows:

  ```
  <div>
    <span>firstname lastname</span>
    <span class="remove-icon" id="firstname-lastname" style="cursor:pointer;color:red">[X]</span>
  <div>
  ```

  Create a div element and two span elements inside it. The first span element contain guest firstname and lastname. The second span contains a remove icon ([X]) and adding event handler function "removeGuest" function when the user clicks on the icon. This span has a class of remove-icon and a style value "cursor:pointer;color:red". An id attribute consists of guest firstname, followed by '-', and lastname. For example, If a guestItem equals to {'Somchai', 'Dee'} then it will create HTML elements as follows:

  ```
  <div>
    <span>Somchai Dee</span>
    <span class="remove-icon" id="Somchai-Dee" style="cursor:pointer;color:red">[X]</span>
  <div>
  ```

- **searchGuest(_event_)** - To search for guests, calling "searchGuests(_keyword_)" function in GuestManagement with the search input field. The matching guests will be displayed in the guest area in real-time by calling "displayGuests(_guestResult_)" function.

- **removeGuest(_event_)** - To remove a guest, click the "X" icon next to the guest's name. The guest will be removed from the list by calling "removeGuest(_deleteGuest_)" function in GuestManagement, and the display area will be updated accordingly by removing div element of the deleted guest.

# Screen Capture Outputs

- ![Capture Output1](/assets/images/CaptureOutput1.JPG)
- ![Capture Output2](/assets/images/CaptureOutput2.JPG)
- ![Capture Output3](/assets/images/CaptureOutput3.JPG)
- ![Capture Output4](/assets/images/CaptureOutput4.JPG)
- ![Capture Output5](/assets/images/CaptureOutput5.JPG)
- ![Capture Output6](/assets/images/CaptureOutput6.JPG)

https://github.com/1-2566-INT201-Exam3-Module2/guests-management/assets/24887330/ccbfefd8-1dc3-4abe-86c0-168b4ec999c3

