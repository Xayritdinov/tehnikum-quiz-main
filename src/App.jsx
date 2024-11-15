import React from "react";

import { Welcome, StepOne, StepTwo, Thanks, StepThree, StepFour } from './pages';

import "./App.css";
import "./styles/main.css";

export const App = () => {
  return (
    <div className="App">
      <Welcome />
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <Thanks />
    </div>
  );
};
