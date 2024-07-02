import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
         <Sidebar /> 
              <main className="main"> {children} </main>
      </div>
     
    </div>
  );
};

export default Layout;
