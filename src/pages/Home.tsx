
import Layout from "../components/Layout";
import Macro from "../components/Macro/Macro";
import "./Home.scss"
import calories from "../assets/energy.svg"
import protein from "../assets/chicken.svg"
import carb from "../assets/apple.svg"
import fat from "../assets/cheeseburger.svg" 

// import d3 library for data visualization
import * as d3 from "d3";

// import axios form http calls
import axios from "axios";


function Home() {
    return (

        <Layout>
            <div className="main-title-container">
                <h1 className="main-title">Bonjour <span>Thomas</span></h1>
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
                    image={calories}
                    title="Calories"
                    value=""/>
                     <Macro 
                    key="1"
                    image={protein}
                    title="Proteines"
                    value=""/>
                    <Macro 
                    key="2"
                    image={carb}
                    title="Glucides"
                    value=""/>
                    <Macro 
                    key="3"
                    image={fat}
                    title="Lipides"
                    value=""/>
                </div>
            </div>
        </Layout>
    )
}

export default Home;