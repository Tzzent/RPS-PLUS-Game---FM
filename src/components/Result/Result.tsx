import './Result.scss';

interface IOption {
  name: string,
  color: string,
  image: string,
}

interface Iprops {
  stateResult: string,
  setPick: React.Dispatch<React.SetStateAction<IOption | null>>,
}

export default function Result({ stateResult, setPick }: Iprops) {
  return (
    <div className='result__container'>
      <h2>{stateResult}</h2>
      <button onClick={() => { setPick(null) }}>PLAY AGAIN</button>
    </div>
  )
}
