import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = true; // Replace with real auth check
    router.push(isAuthenticated ? '/home' : '/login');
  }, []);

  return <p>Redirecting...</p>;
}
