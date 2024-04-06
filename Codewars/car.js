// จงเขียนโปรแกรมเพื่อรับจำนวนชั่วโมงและจำนวนนาที ที่ลูกค้านำรถเข้ามาจอดในลานจอดรถของห้างสรรพสินค้าแห่งหนึ่ง ซึ่งให้บริการระหว่างเวลา 06:00 – 02:00 น. (ระบบ 24 ชั่วโมง) เท่านั้น และมีอัตราค่าจอดรถเป็นดังนี้ 2 ชั่วโมงแรกจอดฟรี ชั่วโมงที่ 3 และ 4 ชั่วโมงละ 20 บาท ชั่วโมงที่ 5 เป็นต้นไปชั่วโมงละ 50 บาท และเศษของชั่วโมงปัดเป็น 1 ชั่วโมง นอกจากนี้เมื่อลูกค้าซื้อสินค้าตั้งแต่ 300 – 3,000 บาท ให้จอดฟรีเพิ่มในชั่วโมงที่ 3 และ 4 และเมื่อซื้อสินค้า 3,001 บาทขึ้นไป จอดฟรีตลอดเวลาที่ให้บริการ (ราคาสินค้าที่ซื้อไม่มีหน่วยสตางค์) แล้วให้แสดงผลค่าจอดรถที่ต้องชำระ

// หมายเหตุ ให้แสดงข้อความแจ้งข้อผิดพลาด "Invalid time." ก่อนยุติการทำงาน ถ้าจำนวนชั่วโมงที่รับเข้ามามีค่าอยู่นอกช่วง 0 – 20 ชั่วโมงหรือเมื่อจำนวนนาทีที่รับเข้ามามีค่าอยู่นอกช่วง 0 – 59 นาที

// คำแนะนำ นิสิตควรตรวจข้อมูลเข้าว่าเวลาจอดไม่เกินจำนวนชั่วโมงที่จอดรถได้

// console.log("Enter number of hours: ");
// console.log("Enter number of minutes: ");
// console.log("Enter shopping amount: ");


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let total = 0;
  let free = 0;
  
  readline.question('Enter number of hours: ', (hours) => {
    readline.question('Enter number of minutes: ', (minutes) => {
      readline.question('Enter shopping amount: ', (shopping) => {
        hours = parseInt(hours);
        minutes = parseInt(minutes);
        shopping = parseInt(shopping);
  
        if (hours >= 0 && hours <= 20 && minutes >= 0 && minutes <= 59) {
          if (hours >= 0 && hours <= 2) {
            total = 0;
          } else if (hours >= 3 && hours <= 4) {
            total = (hours - 2) * 20;
          } else if (hours >= 5) {
            total = 40 + (hours - 4) * 50;
          }
          if (shopping >= 300 && shopping <= 3000) {
            free = 40;
          } else if (shopping > 3000) {
            free = total;
          }
          console.log("Total parking fee: " + (total - free) + " Baht.");
        } else {
          console.log("Invalid time.");
        }
  
        readline.close();
      });
    });
  });



