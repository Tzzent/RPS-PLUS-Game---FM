import './Game.scss'
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header';
import Hand from '../../components/Hand';
import Competing from '../../components/Competing';
import Rules from '../Rules';

const normalOptions = [
  { name: "rock", color: "#DF3C5A", image: './images/icon-rock.svg' },
  { name: "paper", color: "#5571F2", image: './images/icon-paper.svg' },
  { name: "scissors", color: "#ECA61A", image: './images/icon-scissors.svg' },
];

const plusOptions = [
  { name: "rock", color: "#DF3C5A", image: './images/icon-rock.svg' },
  { name: "paper", color: "#5571F2", image: './images/icon-paper.svg' },
  { name: "scissors", color: "#ECA61A", image: './images/icon-scissors.svg' },
  { name: "lizard", color: "#8559E1", image: './images/icon-lizard.svg' },
  { name: "spock", color: "#4FBCD1", image: './images/icon-spock.svg' },
];

interface IOption {
  name: string,
  color: string,
  image: string,
}

export default function Game() {

  const { mode } = useParams();
  const navigate = useNavigate();

  const [pick, setPick] = useState<IOption | null>(null);
  const [score, setScore] = useState<number>(0);
  const [isRulesOpen, setIsRulesOpen] = useState<boolean>(false);

  const handlePick = (pick: IOption) => {
    mode == 'normal'
      ? document.querySelector('.normal__game')?.classList.add('rotate-out-center')
      : document.querySelector('.plus__game')?.classList.add('rotate-out-center')
    setTimeout(() => {
      setPick(pick);
    }, 1000);
  }
  return (
    <>
      <div className='game__container'>
        <Header score={score} />
        <Layout>
          {
            pick ? <Competing pick={pick} setPick={setPick} setScore={setScore} options={mode == 'normal' ? normalOptions : plusOptions} /> :
              mode == 'normal' ? <GameMode options={normalOptions} handlePick={handlePick} /> : <GameMode options={plusOptions} handlePick={handlePick} />
          }
        </Layout >
        <div className='buttons'>
          <button className='rules__button' onClick={() => setScore(0)}>RESET</button>
          <button className='rules__button' onClick={() => setIsRulesOpen(true)} >RULES</button>
          <button className='rules__button' onClick={() => navigate('/')}>CHANGE MODE</button>
        </div>
      </div >
      {isRulesOpen && <Rules isRulesOpen={isRulesOpen} setIsRulesOpen={setIsRulesOpen} />}
    </>
  )
}


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout'>
      {children}
    </div>
  )
}

function GameMode({ options, handlePick }: { options: Array<IOption>, handlePick: (pick: IOption) => void }) {
  return (
    <>
      {
        options.length == 3
          ?
          <>
            <div className='box__game'>
              <div className="normal__game">
                {
                  options.map((op: IOption, index: number) => (
                    <div className={op.name} onClick={() => handlePick(op)} key={index}>
                      <Hand customClass='' image={op.image} edgeThickness='16px' borderColor={op.color} width='calc(6em + 4vw)' cursor='pointer' />
                    </div>
                  ))
                }
              </div>
            </div>
          </>
          :
          <>
            <div className='box__game'>
              <div className="plus__game">
                {
                  options.map((op: IOption, index: number) => (
                    <div className={op.name} onClick={() => handlePick(op)} key={index}>
                      <Hand customClass='' image={op.image} edgeThickness='16px' borderColor={op.color} width='' cursor='pointer' />
                    </div>
                  ))
                }
              </div>
            </div>
          </>
      }

    </>
  )
}