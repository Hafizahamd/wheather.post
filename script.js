const apiKey = "c6be21a35e2f27d12d9e8c99d25b09dc";
const apiUrl  = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const  searchBox = document.querySelector('.Search input');
const seaechBtn = document.querySelector('.Search button');
const wheathericons = document.querySelector('.wheater-icon');

async function checkWheather (city) {
     
     const response = await fetch(apiUrl +  city + `&appid=${apiKey}`);
     
     //console.log(response);
     if(response.status == 404){
          document.querySelector('.error').style.display = 'block';
          document.querySelector('.wheather').style.display = 'none';
          
     } else {
        
          
     var data =  await response.json();
     //console.log(data);


     document.querySelector('.city').innerHTML = data.name;
     document.querySelector('.temp').innerHTML = Math.round( data.main.temp) +"°C";
     document.querySelector('.humidity').innerHTML =   data.main.humidity +'%';
     document.querySelector('.wind').innerHTML = data.wind.speed +'km/h';
     
     
     if (data.weather[0].main == 'Clouds') {
          wheathericons.src = 'img/clouds.png';
     } else if (data.weather[0].main == 'Clear'){
          wheathericons.src = 'img/clear.png';
     } else if (data.weather[0].main == 'Rain'){
           wheathericons.src = 'img/rain.png';


     } else if (data.weather[0].main == 'Drizzle'){
          wheathericons.src = 'img/drizzle.png';

   
     
}   else if (data.weather[0].main == 'Mist'){
     wheathericons.src = 'img/mist.png';



}

document.querySelector('.error').style.display = 'none';
 document.querySelector('.wheather').style.display = 'block';

          
     
     }
}
seaechBtn.addEventListener('click', ()=> {

     checkWheather(searchBox.value);
})
