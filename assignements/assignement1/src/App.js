import React from "react"
import SignupForm from "./components/SignupForm";
import SideSection from "./components/SideSection";
import "./basic-style.css";


function App() {

  return (
    <div className="main-container">
      <div className="step-progress">
        <h5 className="step-progress-heading">
          step 1 of 3
        </h5>
        <span className="step-progress-dot dot1">&bull;</span>
        <span className="step-progress-dot dot2">&bull;</span>
        <span className="step-progress-dot dot3">&bull;</span>
      </div>
      <SignupForm />
      <SideSection />
    </div>
  );
}

export default App;
