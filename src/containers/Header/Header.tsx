import './Header.scss';
import { useParams } from 'react-router-dom';

interface Iprops { score: number, }

export default function Header({ score }: Iprops) {

  const { mode } = useParams();

  return (
    <div className='header__container'>
      {
        mode == 'normal'
          ? <img src="/images/logo.svg" alt={`${mode} game`} />
          : <img src="/images/logo-bonus.svg" alt={`${mode} game`} />
      }
      <div className='score'>
        <span>SCORE</span>
        <h1>{score}</h1>
      </div>
    </div>
  )
}
