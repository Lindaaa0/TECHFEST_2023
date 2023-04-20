// TODO: replace all instances of this file with timer injector

// const unixTargetTime = 1687712400;

// const day1 = document.getElementById("day1");
// const day2 = document.getElementById("day2");
// const hour1 = document.getElementById("hour1");
// const hour2 = document.getElementById("hour2");
// const min1 = document.getElementById("min1");
// const min2 = document.getElementById("min2");

// if (
//   day1 &&
//   day2 &&
//   hour1 &&
//   hour2 &&
//   min1 &&
//   min2 &&
//   unixTargetTime > Date.now() / 1000
// ) {
//   setInterval(() => {
//     const unixCurTime = Math.floor(Date.now() / 1000);
//     const timeLeft = unixTargetTime - unixCurTime;

//     const days = Math.floor(timeLeft / 86400);
//     const hours = Math.floor((timeLeft / 3600) % 24);
//     const minutes = Math.floor((timeLeft / 60) % 60);

//     day1.innerHTML = String(days).padStart(2, "0").charAt(0);
//     day2.innerHTML = String(days).padStart(2, "0").charAt(1);
//     hour1.innerHTML = String(hours).padStart(2, "0").charAt(0);
//     hour2.innerHTML = String(hours).padStart(2, "0").charAt(1);
//     min1.innerHTML = String(minutes).padStart(2, "0").charAt(0);
//     min2.innerHTML = String(minutes).padStart(2, "0").charAt(1);
//   }, 1000);
// }
