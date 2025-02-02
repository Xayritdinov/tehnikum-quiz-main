import React from "react";

import { Button, Li, Ul } from "../components";

export const StepThree = () => {
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
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <h2>3. Занимательный вопрос</h2>
            <Ul className="emoji-variants">
              <Li text={<p>Ваш ответ 1</p>} name="variant" id="variant-1" htmlFor="variant-1" img src="./img/laugh.png" alt="laugh" />
              <Li text={<p>Ваш ответ 2</p>} name="variant" id="variant-2" htmlFor="variant-2" img src="./img/hearts.png" alt="hearts" />
              <Li text={<p>Ваш ответ 3</p>} name="variant" id="variant-3" htmlFor="variant-3" img src="./img/smirk.png" alt="smirk" />
              <Li text={<p>Ваш ответ 4</p>} name="variant" id="variant-4" htmlFor="variant-4" img src="./img/fright.png" alt="fright" />
            </Ul>            
            <Button disabled text="Далее" type="button"  id="next-btn"/>
          </div>
        </div>
      </div>
    </div>
  );
};
