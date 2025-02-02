import React from "react";

import { Button, Input } from "../components";

export const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <Input type="text" name="answer" placeholder="Ваш ответ" errorMessage="Введите ответ в правильном формате"/>            
            <Button disabled text="Далее" type="button" id="next-btn" />            
          </div>
        </div>
      </div>
    </div>
  );
};
