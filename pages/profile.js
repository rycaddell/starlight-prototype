
import Link from 'next/link';

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-indigo-600">Profile</h1>
      <p>User ID: user_123</p>
      <p># of Journals: 17</p>
      <p># of Mirrors: 2</p>

      <div className="mt-4 space-y-2">
        <button className="bg-red-100 text-red-700 px-4 py-2 rounded">Delete My Data</button>
        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded">Give Feedback</button>
        <button className="bg-green-100 text-green-700 px-4 py-2 rounded">Share</button>
      </div>

    </div>
  );
}
