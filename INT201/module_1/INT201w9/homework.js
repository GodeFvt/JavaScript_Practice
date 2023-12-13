// Homework
const students = [
    { id: 1, name: 'John Lee' },
    { id: 2, name: 'adam Smith' },
    { id: 3, name: 'Bbam Smith'}
  ]
  //sorting by id (ascending, descending)
  console.log(students.sort((id1,id2) => id1.id - id2.id));
  console.log(students.sort((id1,id2) => id2.id - id1.id));
  //sorting by name (ascending, descending)
  console.log(students.sort((name1,name2) =>   name1.name.localeCompare(name2.name)));
  console.log(students.sort((name1,name2) =>   name2.name.toLowerCase().localeCompare(name1.name.toLowerCase())));

  //ต้องให้ค่าออกเป็นสามกลุ่มเสมอ ค่าบวกตัวเเรกมากว่าตัวหลัง ,ลบตัวเเรกน้อยกว่าตัวหลัง, 0 แปลว่ามันเท่ากัน

  console.log(students.sort((name1,name2) => {
    if (name1.name.toLowerCase() > name2.name.toLowerCase()) {
      return 1;
    }
    if (name1.name.toLowerCase() < name2.name.toLowerCase()) {
      return -1;
    }
    return 0;
  }))