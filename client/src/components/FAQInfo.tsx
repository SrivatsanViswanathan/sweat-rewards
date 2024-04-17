import Wrapper from '../css/FAQInfo';
import { useState } from 'react';

interface questionProps {
  question: {
    title: string;
    description: string;
  };
}

const FAQInfo = ({ question }: questionProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const { title, description } = question;

  return (
    <Wrapper>
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button
            className='btn'
            onClick={() => setShowInfo(!showInfo)}
            aria-label='Show Description'
          >
            {showInfo ? (
              <div className='icon minus'></div>
            ) : (
              <div className='icon plus'></div>
            )}
          </button>
        </header>
        {showInfo ? (
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        ) : null}
      </article>
    </Wrapper>
  );
};

export default FAQInfo;
