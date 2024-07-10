import Layout from "../components/Layout";
import Macro from "../components/Macro/Macro";
import "./Home.scss";
import { useEffect, useState } from "react";
import caloriesIcon from "../assets/energy.svg";
import proteinIcon from "../assets/chicken.svg";
import carbIcon from "../assets/apple.svg";
import fatIcon from "../assets/cheeseburger.svg";

// import d3 library for data visualization
// import * as d3 from "d3";
import ApiMock from "../services/apiMock";
import { mockUrl } from "../main";

import User from "../Factory/User";
import UserType from "../Factory/User";
import UserMacros from "../Factory/UserMacros";
import Macros from "../Factory/UserMacros"
import UserScore from "../Factory/UserScore";
import UserStats from "../Factory/UserStats";
import StatsType from "../Factory/UserStats";

function Home() {

  const [user, setUser] = useState(null);
  const [userMacros, setUserMacros] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    const newApiMock = new ApiMock();

    const getData = async () => {
      return await newApiMock.getAll(mockUrl);
    };

    getData()
      .then((result) => {
        const data = result.data;
       

        const id = new User(data.id)
        const name = new User(data.name)
        const user = new User(data.userValue as UserType);
        const macros = new UserMacros(data.macros as Macros);
        const score = new UserScore(data.score);
        const stats = new UserStats(data.stats as StatsType);
        setUser(id)
        setUser(name);
        setUserMacros(macros);
        setUserScore(score);
        setUserStats(stats);
        
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données ", error);
      });
  }, []);

  if (!user || !userMacros || !userScore || !userStats) {
    return (
      <Layout>
        <h1>
          Vos données sont en cours de chargement <br /> Merci de patienter{" "}
        </h1>
      </Layout>
    );
  }

  // créer une factory pour destructurer, puis instancier l'user et lui passer les attributs, une méthode par provider (depuis mock ou depuis une api)

  return (
    <Layout>
      <div className="main-title-container">
        <h1 className="main-title">
          Bonjour <span>{user.name}</span>
        </h1>
        <p className="main-title-greetings">
          Félicitations ! Vous avez explosé vos objectifs d'hier 👏
        </p>
      </div>
      <div className="graphics-container">
        <div className="graphics-left-side">
          <div className="daily-graphics"></div>
          <div className="widgets-container">
            <div className="widget-wrapper"></div>
            <div className="widget-wrapper"></div>
            <div className="widget-wrapper"></div>
          </div>
        </div>
        <div className="graphics-right-side">
          <Macro key="0" image={caloriesIcon} title="Calories" value="" />
          <Macro key="1" image={proteinIcon} title="Proteines" value="" />
          <Macro key="2" image={carbIcon} title="Glucides" value="" />
          <Macro key="3" image={fatIcon} title="Lipides" value="" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
