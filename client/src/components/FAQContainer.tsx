import Wrapper from '../css/FAQContainer';
import Title from './Title';
import faq from '../utils/faq';
import FAQInfo from './FAQInfo';
import discord from '../assets/images/discord.webp';
import thumbnail from '../assets/images/thumbnail.webp';
import reddit from '../assets/images/reddit.png';
import telegram from '../assets/images/telegram.png';
import twitter from '../assets/images/twitter.png';

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
            <div className='socials'>
              <a
                href='https://discord.gg/sweateconomy'
                className='discord-link'
                target='_blank'
                aria-label='Sweat Economy Discord Server'
              >
                <img src={discord} alt='discord' />
              </a>
              <a
                href='https://t.me/sweateconomy/'
                className='telegram-link'
                target='_blank'
                aria-label='Sweat Economy Telegram Server'
              >
                <div className='telegram-container'>
                  <img className='telegram-img' src={telegram} alt='telegram' />
                  <h4>Telegram</h4>
                </div>
              </a>
              <a
                href='https://twitter.com/SweatEconomy'
                className='twitter-link'
                target='_blank'
                aria-label='Sweat Economy Twitter'
              >
                <img className='twitter-img' src={twitter} alt='twitter' />
              </a>
              <a
                href='https://www.reddit.com/r/Sweateconomy'
                className='reddit-link'
                target='_blank'
                aria-label='Sweat Economy Reddit'
              >
                <img src={reddit} alt='reddit' />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default FAQContainer;
