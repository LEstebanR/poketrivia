import { Key } from "react";
import firstLetterUpperCase from "../utils/FirstLetterUpperCase";
import Swal from 'sweetalert2'

import Button from "./Button";

const Options = ({ options, pokemon, setRound, round }) => {

  const checkAnswer = (event) => {
    const select = event.target.name
    if ( select === pokemon.name ){
      console.log('correct')
      setRound(round + 1)
    }else{
      console.log('incorrect')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La respuesta es incorrecta',
      })
    }
  }

  return (
    <>
      {options.map((option: { name: string; }, index: Key | null | undefined) => {
        return (
          <Button key={index} onClick={checkAnswer} name={option.name}>
            {firstLetterUpperCase(option.name)}
          </Button>
        )
        })
      }    
    </>
  )

  
}

export default Options;
