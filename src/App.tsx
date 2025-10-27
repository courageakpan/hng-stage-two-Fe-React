import { useState } from "react";

const App: React.FC = () => {
  const [page, setPage] = useState("landing");

  const navClass = (p: string) =>
    `block w-full text-left py-2 px-4 rounded-lg font-medium ${
      page === p ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
    }`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-60 z-0"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-blue-300 rounded-full opacity-50 z-0"></div>

      <div className="relative z-10">
        {/* Header / Navbar */}
        {page === "landing" && (
          <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">TicketPro</h1>
            <nav className="space-x-6">
              <button
                onClick={() => setPage("login")}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </button>
              <button
                onClick={() => setPage("signup")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </button>
            </nav>
          </header>
        )}

        {page === "landing" && (
          <section className="flex flex-col items-center justify-center text-center px-6 py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white clip-path-wave"></div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 relative z-10">
              Manage Support Tickets Easily
            </h2>
            <p className="text-gray-600 mb-10 relative z-10 max-w-xl">
              Streamline your ticket workflow with TicketPro. Create, manage, and
              resolve tickets efficiently.
            </p>
            <div className="relative z-10 space-x-4">
              <button
                onClick={() => setPage("login")}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => setPage("signup")}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
              >
                Sign Up
              </button>
            </div>
          </section>
        )}

        {page === "login" && (
          <section className="flex items-center justify-center py-20">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("dashboard");
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-4">
                Don’t have an account?{" "}
                <button
                  onClick={() => setPage("signup")}
                  className="text-blue-600 hover:underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          </section>
        )}

        {page === "signup" && (
          <section className="flex items-center justify-center py-20">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold text-center mb-6">
                Create Account
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("dashboard");
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <button
                  onClick={() => setPage("login")}
                  className="text-blue-600 hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </section>
        )}

        {(page === "dashboard" || page === "tickets") && (
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md flex flex-col">
              <div className="p-6 border-b">
                <h1 className="text-2xl font-bold text-blue-600">TicketPro</h1>
              </div>
              <nav className="flex-1 p-4 space-y-2">
                <button
                  onClick={() => setPage("dashboard")}
                  className={navClass("dashboard")}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setPage("tickets")}
                  className={navClass("tickets")}
                >
                  Tickets
                </button>
              </nav>
              <div className="p-4 border-t">
                <button
                  onClick={() => setPage("landing")}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Logout
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col">
              <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
                <h2 className="text-xl font-semibold capitalize">{page}</h2>
                <nav className="space-x-6">
                  <button
                    onClick={() => setPage("tickets")}
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Tickets
                  </button>
                  <button className="text-gray-700 hover:text-blue-600 font-medium">
                    Settings
                  </button>
                </nav>
              </header>

              {page === "dashboard" && (
                <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: "Total Tickets", value: "128", color: "border-blue-500" },
                    { label: "Open Tickets", value: "42", color: "border-green-500" },
                    { label: "In Progress", value: "18", color: "border-yellow-500" },
                    { label: "Closed Tickets", value: "68", color: "border-gray-400" },
                  ].map((card) => (
                    <div
                      key={card.label}
                      className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${card.color}`}
                    >
                      <h3 className="text-gray-500 text-sm mb-2">{card.label}</h3>
                      <p className="text-3xl font-bold">{card.value}</p>
                    </div>
                  ))}
                </section>
              )}

              {page === "tickets" && (
                <section className="p-8">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="flex justify-between items-center border-b p-4">
                      <h3 className="text-lg font-semibold">Manage Tickets</h3>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        + New Ticket
                      </button>
                    </div>
                    <table className="min-w-full text-left text-sm">
                      <thead className="bg-gray-50 border-b text-gray-600">
                        <tr>
                          <th className="py-3 px-6">ID</th>
                          <th className="py-3 px-6">Subject</th>
                          <th className="py-3 px-6">Priority</th>
                          <th className="py-3 px-6">Assignee</th>
                          <th className="py-3 px-6">Status</th>
                          <th className="py-3 px-6">Last Updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-6 font-medium">#1024</td>
                          <td className="py-3 px-6">Login not working</td>
                          <td className="py-3 px-6">
                            <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                              High
                            </span>
                          </td>
                          <td className="py-3 px-6">Alex Doe</td>
                          <td className="py-3 px-6">
                            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                              Open
                            </span>
                          </td>
                          <td className="py-3 px-6">Oct 25, 2025</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-6 font-medium">#1025</td>
                          <td className="py-3 px-6">API latency issue</td>
                          <td className="py-3 px-6">
                            <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
                              Medium
                            </span>
                          </td>
                          <td className="py-3 px-6">Sarah Lee</td>
                          <td className="py-3 px-6">
                            <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
                              In Progress
                            </span>
                          </td>
                          <td className="py-3 px-6">Oct 24, 2025</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-6 font-medium">#1026</td>
                          <td className="py-3 px-6">Email delivery failed</td>
                          <td className="py-3 px-6">
                            <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                              Low
                            </span>
                          </td>
                          <td className="py-3 px-6">John Smith</td>
                          <td className="py-3 px-6">
                            <span className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full">
                              Closed
                            </span>
                          </td>
                          <td className="py-3 px-6">Oct 23, 2025</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </main>
          </div>
        )}

        <footer className="text-center py-4 bg-blue-50 text-gray-600 text-sm">
          © {new Date().getFullYear()} TicketPro. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
