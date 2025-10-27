import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="border rounded p-2" />
            <input type="password" placeholder="Password" className="border rounded p-2" />
            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            Don't have an account? <Link to="/auth/signup" className="text-blue-600">Sign up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}