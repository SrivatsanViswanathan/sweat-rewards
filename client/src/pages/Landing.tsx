import Wrapper from '../css/Landing';
import FindContainer from '../components/FindContainer';
import SearchContainer from '../components/SearchContainer';
import { FAQContainer, WinnerContainer } from '../components';
import axios from 'axios';
import { useActionData } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

interface landingProps {
  walletAddress: string;
}

interface LandingContextType {
  response: any;
}

const winnerQuery = (wallet: landingProps) => {
  if (wallet !== undefined) {
    return {
      queryKey: ['winner', wallet.walletAddress],
      queryFn: async () => {
        try {
          const response = await axios.get(
            `api/v1/rewards/${wallet.walletAddress}`
          );
          return response;
        } catch (error: any) {
          toast.error(error.response.data.message);
          return error;
        }
      },
    };
  }
  return {
    queryKey: ['winner', null],
    queryFn: async () => {
      return null;
    },
  };
};

export const action = async ({ request }: any) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // const response = await axios.get(`api/v1/rewards/${data.walletAddress}`);
    // return response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const LandingContext = createContext({} as LandingContextType);

const Landing = () => {
  const data: any = useActionData();
  const response = useQuery(winnerQuery(data));
  const res = response.data ? response.data.data : undefined;

  return (
    <LandingContext.Provider value={{ response: res }}>
      <Wrapper>
        <SearchContainer></SearchContainer>
        <WinnerContainer></WinnerContainer>
        <FindContainer></FindContainer>
        <FAQContainer></FAQContainer>
      </Wrapper>
    </LandingContext.Provider>
  );
};

export const useLandingContext = () => {
  return useContext(LandingContext);
};

export default Landing;
