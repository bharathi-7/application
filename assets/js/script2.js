let inputEle=document.getElementById("location-input")
let tempEle=document.getElementById("temp-value")
let locEle=document.getElementById("location")
let weatherdescEle=document.getElementById('weather-desc')
let btnEle=document.getElementById("btn");
const apikey='bbcf7e39c52ac9db284892ca7e595b5f';
btnEle.onclick= function(){
	if(inputEle.value=="")
		alert("please Enter some location..")
	else{
		loc=inputEle.value;
		const url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
		$.ajax(url)
		.then(data => {
			console.log(data);
			const{name}=data;
			const{feels_like}=data.main;
			
			const{description}=data.weather[0];
			tempEle.innerText=Math.floor(feels_like-273);
			
			locEle.innerText=name;
			weatherdescEle.innerText=description
		})
		.catch(()=>{
			alert("enter valid location");
		});
		inputEle.value= " "
	
	}
}