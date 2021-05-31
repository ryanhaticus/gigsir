import { useEffect } from 'react';

const PingTool = ({ children }) => {
  useEffect(() => {
    // Need to ping a route or something similar? Put it here!
  }, []);
  return <>{children}</>;
};

export default PingTool;
