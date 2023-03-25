
let theme = document.querySelector('.theme')
let roll = document.querySelector('.roll')
let main = document.querySelector('main')


document.querySelector('.theme').addEventListener('click',(event)=>{
    event.preventDefault()

    roll.classList.toggle('change')
    main.classList.toggle('change-img')


})


let hrs_span = document.querySelector('.hours-span')
let min_span = document.querySelector('.minutes-span')
let sec_span = document.querySelector('.seconds-span')

let day_span = document.querySelector('.day')
let month_span = document.querySelector('.month')
let date_span = document.querySelector('.date')
let year_span = document.querySelector('.year')
let am_span = document.querySelector('.am')

setInterval(()=>{

    let time = new Date()

    let hrs = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    let day = time.getDay()
    let month = time.getMonth()
    let date = time.getDate()
    let year = time.getFullYear()
    
    // HOUR LOGIC
    if(hrs <= 9){
        hrs_span.innerHTML = "0" + hrs
    }else(
        hrs_span.innerHTML = hrs
    )

    // MINUTES LOGIC
    if(min <= 9){
        min_span.innerHTML = "0" + min
    }else(
        min_span.innerHTML = min
    )

    // SECONDS LOGIC
    if(sec <= 9){
        sec_span.innerHTML = "0" + sec
    }else(
        sec_span.innerHTML = sec
    )

    // AM & PM LOGIC
    if(hrs <=11){
        am_span.innerHTML = "AM"
    }else(
        am_span.innerHTML = "PM"
    )

    //  DAY LOGIC
    switch(day){
        case 0:
            day_span.innerHTML = "Sunday"
        break;

        case 1:
            day_span.innerHTML = "Monday"
        break;

        case 2:
            day_span.innerHTML = "Tuesday"
        break;

        case 3:
            day_span.innerHTML = "Wednesday"
        break;

        case 4:
            day_span.innerHTML = "Thursday"
        break;

        case 5:
            day_span.innerHTML = "Friday"
        break;

        case 6:
            day_span.innerHTML = "Saturday"
        break;
        
    }
    //    MONTH LOGIC
    switch(month){
        case 0:
            month_span.innerHTML = "Janurary"
        break;

        case 1:
            month_span.innerHTML = "Feburary"
        break;

        case 2:
            month_span.innerHTML = "March"
        break;

        case 3:
            month_span.innerHTML = "April"
        break;

        case 4:
            month_span.innerHTML = "May"
        break;

        case 5:
            month_span.innerHTML = "June"
        break;

        case 6:
            month_span.innerHTML = "July"
        break;

        case 7:
            month_span.innerHTML = "August"
        break;

        case 8:
            month_span.innerHTML = "September"
        break;

        case 9:
            month_span.innerHTML = "October"
        break;

        case 10:
            month_span.innerHTML = "November"
        break;

        case 11:
            month_span.innerHTML = "December"
        break;
    }

    // DATE & YEAR LOGIC
    date_span.innerHTML = date

    year_span.innerHTML = year


},1000)


document.querySelector('.generate-btn').addEventListener('click',(event)=>{
    event.preventDefault()

    let qr_text = document.querySelector('.qr-text').value
    let img_container = document.querySelector('.img-container')
    let qr_img = document.querySelector('.qr-image')

    if(qr_text.length > 0){
        qr_img.src = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qr_text

        img_container.classList.add('show')
    }else{
               document.querySelector('.qr-text').classList.add('error')

               setTimeout(()=>{
               document.querySelector('.qr-text').classList.remove('error')
          },1000)
    }
})

let menu = document.querySelector('.menu')
let nav = document.querySelector('nav')

menu.addEventListener('click',()=>{
    nav.classList.toggle('slide')
})