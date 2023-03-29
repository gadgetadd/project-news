const daysTag = document.querySelector('.days');
const currentDate = document.querySelector('.current-date');
const prevNextIcon = document.querySelectorAll('.calendar-icons span');
const yearChosingIcon = document.querySelectorAll('.wrapper-current-date span');

// getting new date, current year and month
let date = new Date();
let currDay = date.getDate();
let currMonth = date.getMonth();
let currYear = date.getFullYear();
function showCurrentDate() {
  let value1 = currDay + '-' + (currMonth + 1) + '-' + currYear;
  document.getElementById('input-picker').value = value1;
}

//активні кнопки та модульний календар
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('body'),
    modal: document.querySelector('[data-modal]'),
    input: document.querySelector('.calendar-input'),
    calendarBtn: document.querySelector('.calendar__button-calendar'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  document.addEventListener('click', hideModals);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-wrapper');
    refs.input.classList.toggle('isActive');
    refs.calendarBtn.classList.toggle('switchedColor');
  }

  function hideModals(evt) {
    let dataValue = document.getElementById('input-picker').value;
    if (evt.target.closest('.calendar-form')) {
      return;
    }
    if (refs.input.classList.contains('isActive')) {
      refs.modal.classList.add('is-hidden-wrapper');
      refs.input.classList.remove('isActive');
      refs.calendarBtn.classList.remove('switchedColor');
      document.getElementById('input-picker').value = '';
      localStorage.removeItem('VALUE');
      localStorage.removeItem('date');
    }
  }
})();

// storing full name of all months in array
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const renderCalendar = number => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = '';
  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear();
    //   ? 'active'
    //   : '';
    liTag += `<li class="${isToday}">${i}</li>`;
    //console.log(isToday);
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
  // console.log(liTag);
  const dayChange = document.querySelector('.days');
  // function addChangingDayListener() {

  dayChange.addEventListener('click', evt => {
    [...evt.currentTarget.children].forEach(item => {
      item.classList.remove('active');
    });

    evt.target.classList.add('active');
    let newValueDay = evt.target.textContent;
    if (evt.target.textContent.length > 10) {
      return;
    }
    let month = (currMonth + 1).toString();
    document.getElementById('input-picker').value =
      currYear +
      '/' +
      month.padStart(2, '0') +
      '/' +
      newValueDay.padStart(2, '0');

    localStorage.setItem('VALUE', JSON.stringify(newValueDay));

    let inputDateValue = document.querySelector('.calendar-input').value;

    localStorage.setItem('date', JSON.stringify(inputDateValue));
    document.querySelector('[data-modal]').classList.add('is-hidden-wrapper');
    document.querySelector('.calendar-input').classList.remove('isActive');
    document
      .querySelector('.calendar__button-calendar')
      .classList.remove('switchedColor');
  });
  //}
};

renderCalendar();
let findUl = document.querySelector('.days');

prevNextIcon.forEach(icon => {
  // getting prev and next icons
  icon.addEventListener('click', () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
    let test = JSON.parse(localStorage.getItem('VALUE'));
    let reachUl = daysTag.childNodes;
    reachUl.forEach(elem => {
      if (elem.textContent === test) {
        elem.classList.add('active');
      }
    });
  });
});

localStorage.removeItem('VALUE');
localStorage.removeItem('date');
