Circles.create({
  id: 'circles-1',
  value: 550.20,
  maxValue: 615,
  radius: 60,
  width: 10,
  duration: 1,
  textClass: 'BTU-circlesTxt',
  colors: ['#9EBCA8', '#6C9B7C'],
});

Circles.create({
  id: 'circles-2',
  value: 93.8,
  maxValue: 110,
  radius: 60,
  width: 10,
  duration: 1,
  textClass: 'BTU-circlesTxt',
  decimalClass: 'BTU-circlesTxt',
  colors: ['#E191BF', '#DE2891'],
});

Circles.create({
  id: 'circles-3',
  value: 3.87,
  maxValue: 4.5,
  radius: 60,
  width: 10,
  duration: 1,
  textClass: 'BTU-circlesTxt',
  colors: ['#A9E4E8', '#0DBECB'],
});


jQuery("#carousel").owlCarousel({
  // autoplay: true,
  loop: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    863: {
      items: 1
    },
    940: {
      items: 2
    },
    952: {
      items: 2
    },
    1024: {
      items: 2
    },

    1366: {
      items: 3
    }
  }
});

var sidebar = document.querySelector("#sidebar-wrapper");
var togglerButton = document.querySelector(".BTU-toggler");

togglerButton.addEventListener("click", () => {
  sidebar.style.transition = "all 0.5s";
  sidebar.classList.toggle("headMargin");
});

const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.BTU-langSwitch');
const titleEl = document.querySelector('.BTU-headTxt');
const descrEl = document.querySelector('.BTU-sHead');
const mainPage = document.querySelector('.BTU-mainPage');
const takenCourses = document.querySelector('.BTU-takenCourses');
const chosenCourses = document.querySelector('.BTU-chosenCourses');
const programs = document.querySelector('.BTU-programs');
const schedule = document.querySelector('.BTU-listSchedule');
const statetments = document.querySelector('.BTU-statetments');
const persInfo = document.querySelector('.BTU-persInfo');
const resume = document.querySelector('.BTU-resume');
const studCard = document.querySelector('.BTU-studCard');
const recommendatitons = document.querySelector('.BTU-recommendatitons');
const rating = document.querySelector('.BTU-rating');
const ratingCard = document.querySelector('.BTU-cardRating');
const balance = document.querySelector('.BTU-cardBalance');
const GPA = document.querySelector('.BTU-cardGPA');
const lecHead = document.querySelector('.BTU-lecHead');
const lecNameOne = document.querySelector('.lecNameOne');
const lecNameTwo = document.querySelector('.lecNameTwo');
const lectNameOne = document.querySelector('.lectNameOne');
const lectNameTwo = document.querySelector('.lectNameTwo');
const lecJoin = document.querySelector('.BTU-lecJoin');
const lecDisabled = document.querySelector('.BTU-lecDisabled');
const graphTxt = document.querySelector('.BTU-graphTxt');
const monday = document.querySelector('.monday');
const tuesday = document.querySelector('.tuesday');
const wednesday = document.querySelector('.wednesday');
const thursday = document.querySelector('.thursday');
const friday = document.querySelector('.friday');
const saturday = document.querySelector('.saturday');
const newsHeader = document.querySelector('.BTU-newsHeader');
const sliderTxt = document.querySelector('.BTU-sliderText>p');


link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    titleEl.textContent = data[attr].semester;
    descrEl.textContent = data[attr].panel;
    mainPage.textContent = data[attr].mainPage;
    takenCourses.textContent = data[attr].takenCourses;
    chosenCourses.textContent = data[attr].chosenCourses;
    programs.textContent = data[attr].programs;
    schedule.textContent = data[attr].schedule;
    statetments.textContent = data[attr].statetments;
    persInfo.textContent = data[attr].persInfo;
    resume.textContent = data[attr].resume;
    studCard.textContent = data[attr].studCard;
    recommendatitons.textContent = data[attr].recommendatitons;
    rating.textContent = data[attr].rating;
    ratingCard.textContent = data[attr].rating;
    balance.textContent = data[attr].balance;
    lecHead.textContent = data[attr].lecHead;
    lecNameOne.textContent = data[attr].lecNameOne;
    lecNameTwo.textContent = data[attr].lecNameTwo;
    lectNameOne.textContent = data[attr].lectNameOne;
    lectNameTwo.textContent = data[attr].lectNameTwo;
    lecJoin.textContent = data[attr].lecJoin;
    lecDisabled.textContent = data[attr].lecJoin;
    graphTxt.textContent = data[attr].graphTxt;
    monday.textContent = data[attr].monday;
    tuesday.textContent = data[attr].tuesday;
    wednesday.textContent = data[attr].wednesday;
    thursday.textContent = data[attr].thursday;
    friday.textContent = data[attr].friday;
    saturday.textContent = data[attr].saturday;
    newsHeader.textContent = data[attr].newsHeader;
    sliderTxt.textContent = data[attr].sliderTxt;
  });
});



var data = {
  "english": {
    "semester": "Spring Semester 2020-2021",
    "panel": "Control panel",
    "mainPage": "Main page",
    "chosenCourses": "Selected courses",
    "takenCourses": "Courses taken",
    "programs": "My programs",
    "schedule": "My schedule",
    "statetments": "Statements",
    "persInfo": "Personal Information",
    "resume": "Resume",
    "studCard": "Student card",
    "recommendatitons": "Recommendation",
    "rating": "Rating",
    "balance": "Balance",
    "GPA": "GPA",
    "lecHead": "Lectures of the day",
    "lecNameOne": "Vakhtang Tcharaia",
    "lecNameTwo": "Mariam Shoshiashvili",
    "lectNameOne": "Principles of Economics",
    "lectNameTwo": "Finding a job",
    "lecJoin": "Join",
    "graphTxt": "Schedule",
    "monday": "Monday",
    "tuesday": "Tuesday",
    "wednesday": "Wednesday",
    "thursday": "Thursday",
    "friday": "Friday",
    "saturday": "Saturday",
    "newsHeader": "News for students",
    "sliderTxt": "Free Online Course for Georgian language learners begins",
  },
  "georgian": {
    "semester": "2020-2021 წლის გაზაფხულის სემესტრი",
    "panel": "სამართავი პანელი",
    "mainPage": "მთავარი გვერდი",
    "chosenCourses": "არჩეული კურსები",
    "takenCourses": "გავლილი კურსები",
    "finishedCourses": "გავლილი კურსები",
    "programs": "ჩემი პროგრამები",
    "schedule": "ჩემი ცხრილი",
    "statetments": "განცხადებები",
    "persInfo": "პირადი ინფორმაცია",
    "resume": "რეზიუმე",
    "studCard": "სასწავლო ბარათი",
    "recommendatitons": "რეკომენდაცია",
    "rating": "რეიტინგი",
    "balance": "ბალანსი",
    "GPA": "GPA",
    "lecHead": "დღის ლექციები",
    "lecNameOne": "ვახტანგ ჭარაია",
    "lecNameTwo": "მარიამ შოშიაშვილი",
    "lectNameOne": "ეკონომიკის პრინციპები",
    "lectNameTwo": "სამუშაოს მოძიება",
    "lecJoin": "შესვლა",
    "graphTxt": "ცხრილი",
    "monday": "ორშაბათი",
    "tuesday": "სამშაბათი",
    "wednesday": "ოთხშაბათი",
    "thursday": "ხუთშაბათი",
    "friday": "პარასკევი",
    "saturday": "შაბათი",
    "newsHeader": "სიახლეები სტუდენტებისათვის",
    "sliderTxt": "ქართული ენის შემწავლელი უფასო ონლაინ კურსი იწყება",
  }
};