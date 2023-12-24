const myNum = document.querySelectorAll(".conut");

let speed = 20;
console.log(myNum);
myNum.forEach((myCount) => {
  let target_count = myCount.dataset.count;
  let inti_count = +myCount.innerText;
  console.log(inti_count);
  let new_increment_num = Math.floor(target_count / speed);

  const updateNumber = () => {
    inti_count = inti_count + new_increment_num;
    console.log(inti_count);
    myCount.innerText = inti_count;

    if (inti_count < target_count) {
      setTimeout(() => {
        updateNumber();
      }, 100);
    }
  };

  updateNumber();
});
