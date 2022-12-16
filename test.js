/* const isTodayMyBirthday = () => {

};
console.log(isTodayMyBirthday()); */

const isTodayMyBirthday = () => {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let completeDate = day + "" + month;
  if (completeDate === "32") {
    console.log(true);
  } else {
    console.log(false);
  }
};
isTodayMyBirthday(); //Funziona, ma non è possibile chiedere se una data in particolare è il mio compleanno.
