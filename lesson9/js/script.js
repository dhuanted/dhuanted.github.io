let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  let dayName = daynames[d.getDay()];
  let monthName = months[d.getMonth()];
  let fullDate =
    dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();
  document.getElementById("currentDate").textContent = fullDate;
  document.getElementById("currentYear").textContent = d.getFullYear();
  let vLastModified = new Date(document.lastModified);
  document.getElementById("lastModified").textContent = vLastModified;
  
  function toggleMenu() {
      //console.log("it worwed");
      //console.log(document.getElementById("primaryNav").classList);
      document.getElementById("primaryNav").classList.toggle("hide");
  }
