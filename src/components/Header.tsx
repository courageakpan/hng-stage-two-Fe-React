import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center max-w-[1440px] mx-auto">
      <h1 className="text-2xl font-bold text-blue-600">TicketPro</h1>
      <nav className="flex gap-4 text-sm">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tickets">Tickets</Link>
      </nav>
    </header>
  );
}