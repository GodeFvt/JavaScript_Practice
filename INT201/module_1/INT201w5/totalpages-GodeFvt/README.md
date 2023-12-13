[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/VNyA2lCF)
# test-totalPages

#### ให้เขียน Function ชื่อ totalPages (arrayItems, rowsPerPage) โดยที่ arrayItems คือ array ของรายการ Items ทั้งหมด และ rowsPerPage คือ จำนวนรายการ Item ที่จะแสดงต่อ 1 Page โดยฟังก์ชันจะ return จำนวน page ที่คำนวณได้

- กรณี arrayItems เป็น null หรือ undefined ให้ return undefined
- กรณี rowsPerPage เป็น null หรือ undefined หรือเป็น 0 จะ return 1

- ตัวอย่างเช่น

  1. arrayItems = [item1, item2, item3,…, item35] , rowsPerPage = 15 return 3
  2. arrayItems = [item1, item2, item3,…, item10] , rowsPerPage = 20 return 1
  3. arrayItems = [item1, item2, item3,…, item40] , rowsPerPage = 10 return 4
  4. arrayItems = [item1, item2, item3,…, item25] , rowsPerPage = 0 return 1
  5. arrayItems = [item1, item2, item3,…, item25] , rowsPerPage = null return 1
  6. arrayItems = [item1, item2, item3,…, item25] , rowsPerPage = undefined return 1
  7. arrayItems = null, rowsPerPage = 20 return undefined
  8. arrayItems = undefined, rowsPerPage = 20 return undefined
