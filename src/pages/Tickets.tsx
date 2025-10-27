import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tickets = [
  { id: 1, title: 'Login Bug', status: 'open', desc: 'User unable to login' },
  { id: 2, title: 'UI Glitch', status: 'in_progress', desc: 'Dashboard card overlap' },
  { id: 3, title: 'Email issue', status: 'closed', desc: 'Email notifications delayed' }
];

export default function Tickets() {
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

  const statusColor = {
    open: 'bg-green-100 text-green-700',
    in_progress: 'bg-amber-100 text-amber-700',
    closed: 'bg-gray-100 text-gray-600'
  };

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
            <h2 className="text-2xl font-semibold">Ticket Management</h2>
            <p className="text-gray-600">Welcome, {userEmail}</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">+ Add Ticket</button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tickets.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{t.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${statusColor[t.status as keyof typeof statusColor]}`}>{t.status}</span>
              </div>
              <p className="text-sm text-gray-600">{t.desc}</p>
              <div className="flex gap-2 mt-4 text-sm">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}