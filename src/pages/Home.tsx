import Layout from "../components/Layout";
import Macro from "../components/Macro/Macro";
import "./Home.scss";
import { useEffect, useReducer } from "react";

// import icons for Macro Components
import caloriesIcon from "../assets/energy.svg";
import proteinIcon from "../assets/chicken.svg";
import carbIcon from "../assets/apple.svg";
import fatIcon from "../assets/cheeseburger.svg";

// import Charts
import StatsChart from "../components/Charts/StatsChart";
import ScoreChart from "../components/Charts/ScoreChart";
import SessionsChart from "../components/Charts/SessionsChart";
import ActivityChart from "../components/Charts/ActivityChart";

import UserProviderInterface from "../interfaces/UserProviderInterface";
import Auth from "../services/Auth";

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, userData: action.payload };
    case "SET_USER_MACROS":
      return { ...state, userMacros: action.payload };
    case "SET_USER_STATS":
      return { ...state, userStats: action.payload };
    case "SET_USER_SCORE":
      return { ...state, userScore: action.payload };
    case "SET_USER_SESSION":
      return { ...state, userSession: action.payload };
    case "SET_USER_ACTIVITIES":
      return { ...state, userActivities: action.payload };
    case "LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return {...state, error: action.payload, loading: false}
    default:
      return state;
  }
}

const initialState = {
  userData: null,
  userMacros: null,
  userStats: null,
  userScore: null,
  userSession: null,
  userActivities: null,
  loading: true,
  error: null,
};

type props = { userProvider: UserProviderInterface };

function Home({ userProvider }: props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const userId = Auth.getUserId();

  if (userId === null) {
    throw "user not found from localStorage";
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "LOADING", payload: true });
  
        const [user, macros, stats, score, session, activities] = await Promise.all([
          userProvider.getUser(userId),
          userProvider.getUserMacros(userId),
          userProvider.getUserStats(userId),
          userProvider.getUserScore(userId),
          userProvider.getSession(userId),
          userProvider.getActivities(userId),
        ]);
  
        dispatch({ type: "SET_USER_DATA", payload: user });
        dispatch({ type: "SET_USER_MACROS", payload: macros });
        dispatch({ type: "SET_USER_STATS", payload: stats });
        dispatch({ type: "SET_USER_SCORE", payload: score });
        dispatch({ type: "SET_USER_SESSION", payload: session });
        dispatch({ type: "SET_USER_ACTIVITIES", payload: activities });
        dispatch({ type: "LOADING", payload: false });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: "Erreur lors du chargement des données. Veuillez réessayer plus tard" });
      }
    };
  
    fetchData();
  }, [userProvider, userId]);
  

  const { userData, userMacros, userStats, userScore, userSession, userActivities, loading, error } = state;

  if (loading) {
    return (
      <Layout>
        <h1>Vos données sont en cours de chargement<br />Merci de patienter</h1>
      </Layout>
    );
  }
  
  if (error) {
    return (
      <Layout>
        <h1>{error}</h1>
      </Layout>
    );
  }

  const { name } = userData;

  const { calories, proteins, carbs, fats } = userMacros;

  return (
    <Layout>
      <div className="main-title-container">
        <h1 className="main-title">
          Bonjour <span>{name}</span>
        </h1>
        <p className="main-title-greetings">
          Félicitations ! Vous avez explosé vos objectifs d'hier 👏
        </p>
      </div>
      <div className="graphics-container">
        <div className="graphics-left-side">
          <div className="daily-graphics">
            <ActivityChart data={userActivities} />
          </div>
          <div className="widgets-container">
            <SessionsChart data={userSession} />
            <StatsChart statistics={userStats} />
            <ScoreChart userScore={userScore} />
          </div>
        </div>
        <div className="graphics-right-side">
          <Macro
            key="0"
            image={caloriesIcon}
            title="Calories"
            value={calories}
            unit="kCal"
          />
          <Macro
            key="1"
            image={proteinIcon}
            title="Proteines"
            value={proteins}
            unit="g"
          />
          <Macro
            key="2"
            image={carbIcon}
            title="Glucides"
            value={carbs}
            unit="g"
          />
          <Macro
            key="3"
            image={fatIcon}
            title="Lipides"
            value={fats}
            unit="g"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
