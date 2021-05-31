import { createContext, useContext } from 'react';

import { useRouter } from 'next/router';

const RedirectContext = createContext<(route: string) => Promise<void>>(null);

const RedirectProvider = ({ children }) => {
  const router = useRouter();
  const redirect = async (route: string) => {
    if (router.asPath === route) {
      return;
    }
    router.push(route);
  };
  return (
    <RedirectContext.Provider value={redirect}>
      {children}
    </RedirectContext.Provider>
  );
};

export default RedirectProvider;

export const useRedirect = () =>
  useContext<(route: string) => Promise<void>>(RedirectContext);
