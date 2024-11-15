import React from "react";

import { Button, Li, Ul } from "../components";

export const StepFour = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>4. Занимательный вопрос</h2>
            <Ul className="level-variants">
              <Li text="1" name="variant" id="variant-1" />
              <Li text="2" name="variant" id="variant-2" />
              <Li text="3" name="variant" id="variant-3" />
              <Li text="4" name="variant" id="variant-4" />
              <Li text="5" name="variant" id="variant-5" />
            </Ul>            
            <Button disabled text="Далее" type="button" id="next-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};
