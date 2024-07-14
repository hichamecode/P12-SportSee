import Layout from "../components/Layout";
import Macro from "../components/Macro/Macro";
import "./Home.scss";
import { useEffect, useState } from "react";

import caloriesIcon from "../assets/energy.svg";
import proteinIcon from "../assets/chicken.svg";
import carbIcon from "../assets/apple.svg";
import fatIcon from "../assets/cheeseburger.svg";

import ApiMock from "../services/apiMock";
import { mockUrl } from "../main"; // retirer l'url des paramètre, et l'appeler dans le provider


import User from "../Factory/User";
import UserMacros from "../Factory/UserMacros";
import UserScore from "../Factory/UserScore";
import UserStats from "../Factory/UserStats";
import Session from "../Factory/Session";

import MyD3Component from "../components/Myd3Component";
import apiInterface from "../interfaces/apiInterface";

type props = {userProvider: apiInterface}

function Home({userProvider}: props) { // injection de dépendances


  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // const newApiMock = new ApiMock();

    const getData = async () => {
      return await userProvider.get(id);
    };

    // ajouter l'id au localStorage (token) , ou id dans un fichier en "dur" une classe services pour aller récup l'id dans le localStorage.getItem
    // pour accéder au dashboard l'utilisateur est déjà utiliser
    // passer sur chartJS

    getData()
      .then((result) => {
        const data = result.data;
        setUserData(data)

      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données ", error);
      });
  }, []);


  if (userData === null) {
    return (
      <Layout>
        <h1>
          Vos données sont en cours de chargement <br /> Merci de patienter{" "}
        </h1>
      </Layout>
    );
  }

  type userData = {
    id: number;
    name: string;
    macrosValue: {
      calories: number;
      proteins: number;
      carbs: number;
      fats: number;
    };
  }

const newUser = new User(userData)
const newUserMacros = new UserMacros(userData.macrosValue)
const newUserScore = new UserScore(userData.score)
const newUserStats = new UserStats(userData.statistics)
const newSession = new Session(userData.sessionLength)

console.log(newUserStats)


  return (
    <Layout>
      <div className="main-title-container">
        <h1 className="main-title">
          Bonjour <span>{newUser.name}</span>
        </h1>
        <p className="main-title-greetings">
          Félicitations ! Vous avez explosé vos objectifs d'hier 👏
        </p>
      </div>
      <div className="graphics-container">
        <div className="graphics-left-side">
          <div className="daily-graphics"></div>
          <div className="widgets-container">
          <MyD3Component />
            <div className="widget-wrapper radar-widget"></div>
            <div className="widget-wrapper circle-widget"></div>
          </div>
        </div>
        <div className="graphics-right-side">
          <Macro key="0" image={caloriesIcon} title="Calories" value={newUserMacros.calories} unit="kCal" />
          <Macro key="1" image={proteinIcon} title="Proteines" value={newUserMacros.proteins} unit="g" />
          <Macro key="2" image={carbIcon} title="Glucides" value={newUserMacros.carbs} unit="g" />
          <Macro key="3" image={fatIcon} title="Lipides" value={newUserMacros.fats} unit="g" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
