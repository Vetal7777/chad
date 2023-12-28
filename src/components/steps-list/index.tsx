import { useEffect, useState } from "react";
import { StepStatus, type StepData, type StepTitle } from "../../@types";
import { steps as stepsData } from "../../data/content";
import { StepsItem } from "../steps-item";

export function StepsList() {
  //TODO: toggle useState to useReducer
  const [steps, setSteps] = useState(generateInitialSteps(stepsData));

  useEffect(
    () => {},
    [
      //TODO: set first step is active
    ],
  );

  function generateInitialSteps(array: StepTitle[]) {
    return array.map<StepData>((item) => ({
      ...item,
      status: StepStatus.none,
    }));
  }

  return (
    <>
      <div className="flex flex-col gap-steps-gap">
        {steps.map((step, key) => {
          const renderLine = key !== steps.length - 1;

          return <StepsItem item={step} key={key} renderLine={renderLine} />;
        })}
      </div>
    </>
  );
}
