import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { label: 'Total Tickets', value: 24, color: 'bg-blue-500' },
  { label: 'Open', value: 10, color: 'bg-green-500' },
  { label: 'In Progress', value: 8, color: 'bg-amber-400' },
  { label: 'Closed', value: 6, color: 'bg-gray-400' }
];

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const email = localStorage.getItem('userEmail');
    
    if (!isLoggedIn) {
      navigate('/auth/login');
      return;
    }
    
    if (email) {
      setUserEmail(email);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-[1440px] mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <p className="text-gray-600">Welcome back, {userEmail}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className={`p-6 text-white rounded-lg shadow ${s.color}`}>
              <h3 className="text-lg font-medium">{s.label}</h3>
              <p className="text-3xl font-bold mt-2">{s.value}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}