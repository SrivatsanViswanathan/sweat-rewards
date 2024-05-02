import { Form, useLocation, Link } from 'react-router-dom';
import Wrapper from '../css/SearchContainer';
import { useState } from 'react';
const SearchContainer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const walletAddress: any = queryParams.get('walletAddress');
  const [clipboardText, setClipboardText] = useState(walletAddress);

  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        setClipboardText(text);
      })
      .catch((error) => {
        console.error('Failed to read clipboard:', error);
      });
  };

  return (
    <Wrapper>
      <Form method='get' className='form'>
        <div className='update-container'>
          <div className='update'>
            Winners data is up to date as of May 2 2024
          </div>
          <div className='underline'></div>
        </div>
        <label htmlFor='walletAddress' className='form-label'>
          Sweat Wallet Address
        </label>
        <div className='paste-button-container'>
          <Link
            to={'/'}
            className='reload'
            onClick={() => setClipboardText('')}
          >
            <span>&#x21bb;</span>
          </Link>

          <input
            type='text'
            id='walletAddress'
            name='walletAddress'
            className='form-input'
            placeholder='1d61e465ce62e0de5900b7f090b864585c771c316d868d2582d3a43630509d8b'
            minLength={64}
            required
            value={clipboardText || ''}
            onChange={(e) => setClipboardText(e.target.value)}
          />
          <button
            type='button'
            onClick={handlePaste}
            className='paste-button'
            aria-label='Paste Wallet Address'
          >
            <div className='paste-icon'>
              <div className='clip'></div>
              <div className='arrow'></div>
            </div>
          </button>
        </div>
        <button
          type='submit'
          className='btn btn-block'
          aria-label='Submit Wallet Address'
        >
          submit
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
