import { Key } from "react";
import firstLetterUpperCase from "../utils/FirstLetterUpperCase";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import Redirect from "react-router-dom";

import Button from "./Button";

const mySwal = withReactContent(Swal);

const Options = ({ options, pokemon, setRound, round }) => {

  const checkAnswer = (event) => {
    const select = event.target.name
    if ( select === pokemon.name ){
      setRound(round + 1)
    }else{
      mySwal.fire({
        title: '¡Incorrecto!',
        text: `El pokemon correcto es ${firstLetterUpperCase(pokemon.name)} tu puntuación fnal es ${round}`,
        icon: 'error',
        confirmButtonText: '¡Vuelve a intentarlo!',
        didClose: () => {
          window.location.reload()
        }
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
