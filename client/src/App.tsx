import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, Winners } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { action as landingAction } from './pages/Landing';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1 hour
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        action: landingAction,
      },
      {
        path: 'winners',
        element: <Winners></Winners>,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
