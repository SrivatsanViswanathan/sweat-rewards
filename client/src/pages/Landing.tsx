import Wrapper from '../css/Landing';
import FindContainer from '../components/FindContainer';
import SearchContainer from '../components/SearchContainer';
import {
  DisclaimerContainer,
  FAQContainer,
  WinnerContainer,
} from '../components';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

interface LandingContextType {
  response: any;
}

const winnerQuery = (walletAddress: any) => {
  if (walletAddress !== undefined && walletAddress !== null) {
    return {
      queryKey: ['winner', walletAddress],
      queryFn: async () => {
        try {
          const response = await axios.get(
            `api/v1/?walletAddress=${walletAddress}`
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

// export const action = async (queryParams: any) => {
//   try {
//     const { walletAddress } = queryParams;
//     if (walletAddress) {
//       const response = await axios.get(
//         `api/v1/?walletAddress=${walletAddress}`
//       );
//       return response.data;
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };

const LandingContext = createContext({} as LandingContextType);

const Landing = () => {
  // const response = useQuery(winnerQuery(data));
  // const res = response.data ? response.data.data : undefined;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const walletAddress = queryParams.get('walletAddress');
  const response = useQuery(winnerQuery(walletAddress));
  const res = response?.data?.data;

  // const response = walletAddress ? useQuery(winnerQuery(walletAddress)) : null;
  // const res = response?.data?.data;

  // const fetchData = async () => {
  //   const queryParams = new URLSearchParams(location.search);
  //   try {
  //     const result = await action({
  //       walletAddress: queryParams.get('walletAddress'),
  //     });
  //     setData(result);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // // Call fetchData when component mounts or location changes
  // useEffect(() => {
  //   fetchData();
  // }, [location.search]);

  return (
    <LandingContext.Provider value={{ response: res }}>
      <Wrapper>
        <DisclaimerContainer></DisclaimerContainer>
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
