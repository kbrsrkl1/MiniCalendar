const monthNameEl = document.getElementById("month-name")
const dayNameEl = document.getElementById("day-name")
const dayNumEl = document.getElementById("day-number")
const yearEl = document.getElementById("year")

const date = new Date();

monthNameEl.innerText = date.toLocaleString("en", {
    month:"long"
})

dayNameEl.innerText =  date.toLocaleString("en", {
    weekday:"long",
    hour: "2-digit",
    minute: "2-digit"
})

dayNumEl.innerText = date.getDate()

yearEl.innerText = date.getFullYear()