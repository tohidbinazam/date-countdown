const userall = document.querySelector('.userall');
const countdown_clock = document.querySelector('.countdown_clock');


userall.addEventListener('submit', function(e){
  e.preventDefault()

  // .this dose not work in arrow function with event
  let date = this.querySelector('#user_date').value;
  let time = this.querySelector('#user_time').value;

  let stop_count = setInterval(() => {
  let start_time = new Date();
  let End_time = new Date(date + ' ' + time);
   
  let all_times = End_time.getTime() - start_time.getTime();
  
  
  let main_sec = Math.floor(all_times / 1000);
  let main_min = Math.floor(main_sec / 60);
  let main_hour = Math.floor(main_min / 60);

  let main_day = Math.floor(main_hour / 24);
  
  
  // let h = main_hour - (main_day * 24);
  // let m = main_min - (main_day * 24 * 60) - (h * 60);
  // let s = main_sec  - (main_day * 24 * 60 * 60) - (h * 60 * 60) - (m * 60);


  let h = main_hour - (main_day * 24);
  let m = main_min - (main_hour * 60);
  let s = main_sec - (main_min * 60);

  // let h = main_hour % 24;
  // let m = main_min % 60;
  // let s = main_sec % 60;

  // console.log(main_day, h, m, s);


  countdown_clock.innerHTML = `${zero(main_day)} : ${zero(h)} : ${zero(m)} : ${zero(s)}`;

  s == 0 && m == 0 && h == 0 && main_day == 0 ? clearInterval(stop_count) : '' ;

 }, 1000);

})





// to do list



const todo = document.getElementById('todo');
const do_name = document.getElementById('do_name');
const priority = document.getElementById('priority');
const list = document.querySelector('.m_list');


todo.addEventListener('submit', function(e){
  e.preventDefault();

  names = do_name.value;
  do_priority =  priority.value;

  let li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between';
  li.innerHTML = `<b class ='text-danger'>${names}</b><b>${do_priority}</b>`;


  let crose = document.createElement('button');
  // crose.innerHTML = '&times;';
  crose.className = 'btn-close';

  li.appendChild(crose);
  list.appendChild(li);
  
  do_name.value = '';

  crose.addEventListener('click', function(){
    this.parentElement.remove();
  })

})


const form = document.getElementById('agcal_form');
const all_data = document.querySelector('.all_data');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="name"]').value;
    let bir_date = this.querySelector('input[name="date"]').value;
    let bir_time = this.querySelector('input[name="time"]').value;

    setInterval(() =>{
      let now = new Date();
      let bir_date_time = new Date(bir_date + ' ' + bir_time);

      let diff = now.getTime() - bir_date_time.getTime();

      let seconds = Math.floor(diff / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let day = Math.floor(hours / 24);
      let Week = Math.floor(day / 7);
      let months = Math.floor(Week / 4);
      let year = Math.floor(months / 12);

      
      let mo = months - (year * 12);
      let we = Week - (months * 4);
      let da = day - (Week * 7);
      let ho = hours - (day * 24);
      let min = minutes - (hours * 60);
      let sec = seconds - (minutes * 60);
      let s_mili = diff - (seconds * 1000);

      all_data.innerHTML = `<h5>${diff} Milliseconds</h5>
      <h5>${seconds} Seconds</h5>
      <h5>${minutes} Minutes</h5>
      <h5>${hours} Hours</h5>
      <h5>${day} Days</h5>
      <h5>${Week} Weeks</h5>
      <h5>${months} months</h5>
      <h5>${year} years</h5>
      <hr>
      <h5 class ='text-danger'>Hi ${name}, now your age is <b class='text-dark'>${year}</b> Years, <b class='text-dark'>${mo}</b> Months, <b class='text-dark'>${we}</b> Weeks, <b class='text-dark'>${da}</b> Days, <b class='text-dark'>${ho}</b> Hours, <b class='text-dark'>${min}</b> Minutes, <b class='text-dark'>${sec}</b> Seconds, <b class='text-dark'>${s_mili}</b> Milliseconds</h5>`
    }, 1000)
    
    
})



