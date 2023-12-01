import { useEffect, useState } from 'react';
import { NodeHiveClient } from 'nodehive-js';

interface Props {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: Props) => {
  const client = new NodeHiveClient(
    process.env.NEXT_PUBLIC_DRUPAL_REST_BASE_URL
  );

  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkUserIsLoggedIn = client.isLoggedIn();

    setUserIsLoggedIn(checkUserIsLoggedIn);
  }, []);

  if (!userIsLoggedIn) {
    return null;
  }

  return <>{children}</>;
};
