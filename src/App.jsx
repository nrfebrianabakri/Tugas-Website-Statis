import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Internet from "./pages/Internet";
import Browser from "./pages/Browser";
import HttpHttps from "./pages/HttpHttps";
import Domain from "./pages/Domain";
import Dns from "./pages/Dns";
import Hosting from "./pages/Hosting";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("Internet");

  const renderContent = () => {
    switch (activePage) {
      case "Internet":
        return <Internet />;
      case "Browser":
        return <Browser />;
      case "Http & Https":
        return <HttpHttps />;
      case "Domain":
        return <Domain />;
      case "Dns":
        return <Dns />;
      case "Hosting":
        return <Hosting />;
      default:
        return <Internet />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="content">
        <Header />
        <main className="main-content">{renderContent()}</main>
      </div>
    </div>
  );
};

export default App;
