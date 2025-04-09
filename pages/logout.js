import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    console.log('Logging out...');
    router.push('/login');
  }, []);

  return <p>Logging out...</p>;
}
