import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/mirror', label: 'Mirror' },
    { href: '/profile', label: 'Profile' },
    { href: '/logout', label: 'Logout' },
  ];

  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Starlight</h1>
        <div className="space-x-4">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span className={`cursor-pointer font-medium ${router.pathname === href ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}>
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
