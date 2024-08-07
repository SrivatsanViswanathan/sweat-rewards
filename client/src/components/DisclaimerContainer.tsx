import Wrapper from '../css/DisclaimerContainer';
import Title from './Title';

const DisclaimerContainer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Title title='Disclaimer'></Title>
        <div className='content'>
          <p>
            This website was created to provide users a better experience when
            checking the results of prize draws. However, this is not an
            official Sweat Economy Website. I have taken the data from{' '}
            <a
              href='https://drive.google.com/drive/folders/1rBSMVCxYxMxvenfal4sa9USQ0nWjwEUI'
              target='_blank'
            >
              Google Drive
            </a>{' '}
            but cannot guarantee accurate results. The official location to find
            the winners is{' '}
            <a
              href='https://walletrewards.notion.site/Sweat-Wallet-Rewards-5c4aaafe38674b919b317a539f765d17'
              target='_blank'
            >
              Sweat Notion
            </a>{' '}
            .
          </p>
          <p className='accurate'>
            <span className='bold'>
              Due to the Google Drive being the source of winners, I do not have
              the data for September 2022 - February 2023
              <br />
              <br />I check the Google Drive everyday. I only change the date
              when I add rewards to the database
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default DisclaimerContainer;
