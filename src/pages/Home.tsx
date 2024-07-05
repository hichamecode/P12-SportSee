
import Layout from "../components/Layout";
import Macro from "../components/Macro/Macro";
import "./Home.scss";
import { useEffect, useState } from "react";
import React from "react";
import caloriesIcon from "../assets/energy.svg"
import proteinIcon from "../assets/chicken.svg"
import carbIcon from "../assets/apple.svg"
import fatIcon from "../assets/cheeseburger.svg" 

// import d3 library for data visualization
// import * as d3 from "d3";
import ApiMock from "../services/apiMock";

const urlMock = "../mocks/mock.json"



function Home() {

const [userData, setUserData] = useState(null)

 useEffect( ()  =>  {
    const newApiMock = new ApiMock();

    const toto = async () => {
        return await newApiMock.getAll(urlMock)
    }
    toto().then(result => {
    const userData = result.data;

    setUserData(userData);
  })
  .catch(error => {
    console.error('erreur, impossible de récupérer les données ', error)
  })

}, [])
    
if(userData === null) {

   return  <h1>data is loading </h1>
   // inclure le layout pour faire propre
} 

const { id, name, macrosValue, statistics, score, sessionLength, dailyActivity } = userData;
const { calories, proteins, carbs, fat } = macrosValue;
const { intensity, speed, strength, endurance, energy, cardio } = statistics;
const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = sessionLength;
const { dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven, dayEight, dayNine, dayTen } = dailyActivity;

// créer une factory pour destructurer, puis instancier l'user et lui passer les attributs, une méthode par provider (depuis mock ou depuis une api)



    return (

        <Layout>
            <div className="main-title-container">
                <h1 className="main-title">Bonjour <span>{name}</span></h1>
                <p className="main-title-greetings">Félicitations ! Vous avez explosé vos objectifs d'hier 👏</p>
            </div>
            <div className="graphics-container">
                <div className="graphics-left-side">
                    <div className="daily-graphics">

                    </div>
                    <div className="widgets-container">
                        <div className="widget-wrapper"></div>
                        <div className="widget-wrapper"></div>
                        <div className="widget-wrapper"></div>
                    </div>

                </div>
                <div className="graphics-right-side">
                    <Macro 
                    key="0"
                    image={caloriesIcon}
                    title="Calories"
                    value=""/>
                     <Macro 
                    key="1"
                    image={proteinIcon}
                    title="Proteines"
                    value=""/>
                    <Macro 
                    key="2"
                    image={carbIcon}
                    title="Glucides"
                    value=""/>
                    <Macro 
                    key="3"
                    image={fatIcon}
                    title="Lipides"
                    value=""/>
                </div>
            </div>
        </Layout>
    )
}

export default Home;