const date = new Date();

let myBirthday = new Date("2023-06-30");
let dadBirthday = new Date("2023-09-21");
let momBirthday = new Date("2023-01-21");
let workday = new Date("2023-05-01");
let independence = new Date("2023-10-01");
let childrensday = new Date("2023-05-27");
let christmas = new Date("2023-12-25");
let newyear = new Date("2023-01-21");
let democracy = new Date("2023-01-21");



const renderCalender = () =>{
    date.setDate(1);

    console.log(date.getDate())

    const monthsDays = document.querySelector(".days");
    
    const lastday = new Date(date.getFullYear(),
    date.getMonth() + 1,0).getDate();
    
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    
    const firstDayIndex =  date.getDay()
    
    const lastDayIndex = new Date (
        date.getFullYear(),
        date.getMonth() + 1, 0
    ).getDay();
    
    const nextDays = 7 - lastDayIndex - 1;
    
    const months = [
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
        "December"
    ];
    
    document.querySelector('.date h1').innerHTML
    = months [date.getMonth()]
    
    document.querySelector(".date p").innerHTML
    = date.toDateString();
    
    let days ='';
    for(let x = firstDayIndex; x > 0; x-- ){
        days += `<div class= "prev-date">${prevLastDay - x + 1}</div>`
    }
    
    for(let i = 1; i <= 31; i++){
        if(i === new Date().getDate() && date.getMonth()===new Date().getMonth() && date.getFullYear() 
        === new Date().getFullYear() ) {
        days += `<div class= "today">${i}</div>`
        }

        else if(((i=== myBirthday.getDate() && date.getMonth()=== myBirthday.getMonth()))){
        days += `<div class= "mybirthday">${i}</div>`
        }

        else if(((i=== dadBirthday.getDate() && date.getMonth()=== dadBirthday.getMonth()))){
            days += `<div class= "dadbirthday">${i}</div>`
        }
        else if(((i=== momBirthday.getDate() && date.getMonth()=== momBirthday.getMonth()))){
            days += `<div class= "mombirthday">${i}</div>`
        }
        else if(((i=== workday.getDate() && date.getMonth()=== workday.getMonth()))){
            days += `<div class= "workday">${i}</div>`
        }
        else if(((i=== independence.getDate() && date.getMonth()=== independence.getMonth()))){
            days += `<div class= "independence">${i}</div>`
        }
        else if(((i=== childrensday.getDate() && date.getMonth()=== childrensday.getMonth()))){
            days += `<div class= "childrensday">${i}</div>`
        }
        else if(((i=== christmas.getDate() && date.getMonth()=== christmas.getMonth()))){
            days += `<div class= "christmas">${i}</div>`
        }
        else if(((i=== democracy.getDate() && date.getMonth()=== democracy.getMonth()))){
            days += `<div class= "democracy">${i}</div>`
        }
        else if(((i=== newyear.getDate() && date.getMonth()=== newyear.getMonth()))){
            days += `<div class= "newyear">${i}</div>`
        }

        else{
        days += `<div>${i}</div>`;
        }
        
    }
    
    for(let j = 1; j <+ nextDays; j++){
        days += `<div class="next-date">${j}</div>`;
    }
    monthsDays.innerHTML = days;
}

document.querySelector('.prev').addEventListener('click',() => {
    date.setMonth(date.getMonth() - 1);
    renderCalender();
})

document.querySelector('.next').addEventListener('click',() => {
    date.setMonth(date.getMonth() + 1);
    renderCalender();

})

renderCalender();