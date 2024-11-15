import React from "react";

import { Button, Li, Ul } from "../components";

export const StepTwo = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <Ul className="variants">
              <Li text="Ваш ответ 1" name="variant-1" id="variant-1" />
              <Li text="Ваш ответ 2" name="variant-2" id="variant-2" />
              <Li text="Ваш ответ 3" name="variant-3" id="variant-3" />
              <Li text="Ваш ответ 4" name="variant-4" id="variant-4" />
            </Ul>            
            <Button disabled text="Далее" type="button" id="next-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};
