import Wrapper from '../css/DisclaimerContainer';
import Title from './Title';

const DisclaimerContainer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Title title='Disclaimer'></Title>
        <div className='content'>
          <p>
            This is not an official Sweat Economy website. The information you
            receive here may not be accurate. I have taken all the information
            from{' '}
            <a
              href='https://drive.google.com/drive/folders/1rBSMVCxYxMxvenfal4sa9USQ0nWjwEUI'
              target='_blank'
            >
              Google Drive
            </a>{' '}
            to the best of my ability but cannot guarantee accurate results. For
            example, I may have made a mistake in retrieving the data or not all
            the draws are present there. The official location to find the
            winners is{' '}
            <a
              href='https://walletrewards.notion.site/Sweat-Wallet-Rewards-5c4aaafe38674b919b317a539f765d17'
              target='_blank'
            >
              Sweat Notion
            </a>
            .
            <br /> <br />
          </p>
          <p className='accurate'>
            <span className='bold'>
              Due to the Google Drive being the source, I do not have the data
              for all the winners from September 2022 - February 2023
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default DisclaimerContainer;