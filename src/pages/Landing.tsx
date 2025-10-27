import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-blue-500 clip-path-wave" />
        <div className="z-10 max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Simplify Your Ticket Management</h1>
          <p className="text-gray-600 mb-6">A modern way to create, track, and manage support tickets efficiently.</p>
          <div className="flex justify-center gap-4">
            <Link to="/auth/login" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Login</Link>
            <Link to="/auth/signup" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50">Get Started</Link>
          </div>
        </div>
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-60" />
      </section>
      <Footer />
    </div>
  );
}