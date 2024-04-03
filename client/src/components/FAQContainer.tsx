import Wrapper from '../css/FAQContainer';
import Title from './Title';
import faq from '../utils/faq';
import FAQInfo from './FAQInfo';
import discord from '../assets/images/discord.webp';
import thumbnail from '../assets/images/thumbnail.webp';

const FAQContainer = () => {
  const questions = faq;
  return (
    <Wrapper>
      <Title title='Frequently Asked Questions'></Title>
      <div className='container'>
        <section className='info'>
          {questions.map((question) => {
            const { id } = question;
            return <FAQInfo key={id} question={question}></FAQInfo>;
          })}
        </section>
        <section className='extra'>
          <div className='video'>
            <h4>
              Join David as he draws the winners for some of the Sweat Wallet
              Rewards!
            </h4>
            <a
              href='https://www.youtube.com/watch?v=6x-rLCWx3nM'
              target='_blank'
              aria-label='Sweat Economy YouTube Video'
            >
              <img className='img' src={thumbnail} alt='youtube video' />
            </a>
            <a
              href='https://discord.gg/sweateconomy'
              className='discord-link'
              target='_blank'
              aria-label='Sweat Economy Discord Server'
            >
              <img src={discord} alt='discord' />
            </a>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default FAQContainer;
