import Wrapper from '../css/FindContainer';
import Title from './Title';
import profile from '../assets/images/profile.webp';
import receive from '../assets/images/receive.webp';
import wallet from '../assets/images/wallet.webp';
const FindContainer = () => {
  return (
    <Wrapper>
      <Title title='Find your sweat wallet address'></Title>
      <div className='container'>
        <div className='section'>
          <h4>Step 1</h4>
          <img className='img' src={profile} alt='profile' />
        </div>
        <div className='section'>
          <h4>Step 2</h4>
          <img className='img' src={receive} alt='receive' />
        </div>
        <div className='section'>
          <h4>Step 3</h4>
          <img className='img' src={wallet} alt='wallet' />
        </div>
      </div>
    </Wrapper>
  );
};

export default FindContainer;
