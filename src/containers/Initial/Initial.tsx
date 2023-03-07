import './Initial.scss';
import { Card } from 'antd';
import Hand from '../../components/Hand';
import { useNavigate } from 'react-router-dom';

export default function Initial() {

  const navigate = useNavigate();

  return (
    <div className='choose__gamemode'>
      <h1 className='title'>Choose game mode</h1>
      <div className='mode__container'>
        <Card
          className='mode normal'
          hoverable
          style={{ maxWidth: 300 }}
          cover={<img alt="NormalGame" src="./images/logo.svg" />}
          onClick={() => navigate('/game/normal')}
        >
          <div className='hands'>
            <Hand customClass='' image='./images/icon-rock.svg' edgeThickness='6px' borderColor='#DF3C5A' width='60px' cursor='' />
            <Hand customClass='' image='./images/icon-paper.svg' edgeThickness='6px' borderColor='#5571F2' width='60px' cursor='' />
            <Hand customClass='' image='./images/icon-scissors.svg' edgeThickness='6px' borderColor='#ECA61A' width='60px' cursor='' />
          </div>
        </Card>
        <Card
          className='mode plus'
          hoverable
          style={{ maxWidth: 300 }}
          cover={<img alt="PlusGame" src="./images/logo-bonus.svg" />}
          onClick={() => navigate('/game/plus')}
        >
          <div className='hands'>
            <Hand customClass='' image='./images/icon-rock.svg' edgeThickness='6px' borderColor='#DF3C5A' width='60px' cursor='' />
            <Hand customClass='' image='./images/icon-paper.svg' edgeThickness='6px' borderColor='#5571F2' width='60px' cursor='' />
            <Hand customClass='' image='./images/icon-scissors.svg' edgeThickness='6px' borderColor='#ECA61A' width='60px' cursor='' />
            <Hand customClass='' image='./images/icon-lizard.svg' edgeThickness='6px' borderColor='#8559E1' width='60px' cursor='' />
            <Hand customClass='' image='./images/icon-spock.svg' edgeThickness='6px' borderColor='#4FBCD1' width='60px' cursor='' />
          </div>
        </Card>
      </div>
    </div>
  )
}
