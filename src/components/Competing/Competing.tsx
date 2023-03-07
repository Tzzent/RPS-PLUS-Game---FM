import './Competing.scss';
import { useState, useEffect } from 'react';
import Result from '../Result';
import Hand from '../Hand';

interface IOption {
  name: string,
  color: string,
  image: string,
}

interface Iprops {
  pick: IOption | null,
  setPick: React.Dispatch<React.SetStateAction<IOption | null>>,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  options: Array<object>,
}

export default function Competing({ pick, setPick, setScore, options }: Iprops) {

  const [computerOption, setComputerOption] = useState<IOption>();
  const [result, setResult] = useState<string | null>(null);
  const [stateResult, setStateResult] = useState<string | null>(null);

  const choiseComputer = (): IOption => options[Math.floor(Math.random() * options.length)] as IOption;

  const determineWinner = (user: string, computer: string) => {
    const res = user === computer
      ? 'DRAW'
      : (user === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
        (user === 'paper' && (computer === 'rock' || computer === 'spock')) ||
        (user === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
        (user === 'lizard' && (computer === 'spock' || computer === 'paper')) ||
        (user === 'spock' && (computer === 'scissors' || computer === 'rock'))
        ? 'YOU WIN'
        : 'YOU LOSE';
    setStateResult(res);
    return res;
  }


  useEffect(() => {
    const machine: IOption = choiseComputer();

    setTimeout(() => {
      const res = determineWinner(pick!.name, machine!.name);
      setComputerOption(machine);
      setResult(res);
      res == 'DRAW' ? null :
        res == 'YOU WIN' ? setScore((prevScore: number) => prevScore + 1) : setScore((prevScore: number) => prevScore - 1);
    }, 3000);

  }, [pick]);

  return (
    <div className='competing__container'>
      <div className='user'>
        {
          pick && <><Hand customClass={stateResult == 'YOU WIN' || stateResult == 'DRAW' ? 'pin__winner' : ''} edgeThickness='16px' borderColor={pick.color} image={pick.image} width='calc(7em + 4vw)' cursor='' /></>
        }
        <span>YOU PICKED</span>
      </div>
      <div className='result'>
        {
          result && <Result stateResult={result} setPick={setPick} />
        }
      </div>
      <div className='computer'>
        {
          computerOption ? <><Hand customClass={stateResult == 'YOU LOSE' || stateResult == 'DRAW' ? 'pin__winner' : ''} edgeThickness='16px' borderColor={computerOption.color} image={computerOption.image} width='calc(7em + 4vw)' cursor='' /></> : <Thinking />
        }
        <span>THE HOUSE PICKED</span>
      </div>
    </div >
  )
}


function Thinking() {
  return (
    <div className='thinking'>
      {/* Beating sphere */}
    </div>
  )
}