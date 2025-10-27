import Header from '../components/Header';
import Footer from '../components/Footer';

const stats = [
  { label: 'Total Tickets', value: 24, color: 'bg-blue-500' },
  { label: 'Open', value: 10, color: 'bg-green-500' },
  { label: 'In Progress', value: 8, color: 'bg-amber-400' },
  { label: 'Closed', value: 6, color: 'bg-gray-400' }
];

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-[1440px] mx-auto p-6 grid md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className={`p-6 text-white rounded-lg shadow ${s.color}`}>
            <h3 className="text-lg font-medium">{s.label}</h3>
            <p className="text-3xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}