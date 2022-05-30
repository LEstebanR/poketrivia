import { Key } from "react";
import firstLetterUpperCase from "../utils/FirstLetterUpperCase";

import Button from "./Button";

const checkAnswer = () => {
  console.log("checkAnswer");
}

const Options = ({ options }) => {
  return (
    <>
      {options.map((option: { name: string; }, index: Key | null | undefined) => {
        return (
          <Button key={index} onClick={checkAnswer}>
            {firstLetterUpperCase(option.name)}
          </Button>
        )
        })
      }    
    </>
  )

  
}

export default Options;
