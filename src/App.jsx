import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./assets/css/styles.css";
import "./assets/css/responsive.css";
import AppGetComments from "./components/comments/AppGetComments";
import AppBanner from "./components/shared/AppBanner";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import AppSidebar from "./components/shared/AppSidebar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <AppBanner />
        <br />
        <br />
        <div id="body">
          <div id="content">
            <AppRouter />
            <br /><br />
            <AppGetComments />
          </div>
          <AppSidebar />
          <div className="clearfix"></div>
        </div>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
