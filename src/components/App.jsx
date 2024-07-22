import { useState } from 'react'
import './App.css'
import Form from './Form'
import Result from './Result'

function App() {

  const [value,setValue] = useState("")
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [wind, setWind] = useState("");
  const [err, setErr] = useState("");


  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleCitySubmit = (e) => {
    e.preventDefault();
    console.log("potwierdzone");
    
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=53ad542efa2753b468bb3d0c1ab24e95`;

    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error("Nie udao sie, sprobuj wpisac co innego")
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err)) 
    
  }


  return (

        <div className="App">
        <Form 
        value={value} setValue={setValue} 
        change ={handleInputChange}
        submit ={handleCitySubmit}
        />
        <Result />
        </div>
        
  )
}

export default App
