import { useState } from "react";

const App: React.FC = () => {
  const [page, setPage] = useState("landing");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <header className="bg-white shadow-sm py-4 px-4 sm:px-8 flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600">TicketPro</h1>
            <nav className="space-x-3 sm:space-x-6 text-sm sm:text-base">
              <button
                onClick={() => setPage("login")}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Login
              </button>
              <button
                onClick={() => setPage("signup")}
                className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </button>
            </nav>
          </header>
        )}

        {/* Landing Page */}
        {page === "landing" && (
          <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 py-16 sm:py-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Manage Support Tickets Easily
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl text-sm sm:text-base">
              Streamline your ticket workflow with TicketPro. Create, manage, and resolve tickets efficiently.
            </p>
            <div className="space-x-3 sm:space-x-4">
              <button
                onClick={() => setPage("login")}
                className="bg-blue-600 text-white px-5 sm:px-6 py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Login
              </button>
              <button
                onClick={() => setPage("signup")}
                className="bg-gray-200 text-gray-700 px-5 sm:px-6 py-3 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
              >
                Sign Up
              </button>
            </div>
          </section>
        )}

        {/* Login */}
        {page === "login" && (
          <section className="flex items-center justify-center px-4 py-16 sm:py-20">
            <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
              <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Login</h2>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("dashboard");
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                >
                  Login
                </button>
              </form>
              <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
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

        {/* Signup */}
        {page === "signup" && (
          <section className="flex items-center justify-center px-4 py-16 sm:py-20">
            <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
              <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
                Create Account
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("dashboard");
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
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

        {/* Dashboard & Tickets */}
        {(page === "dashboard" || page === "tickets") && (
          <div className="flex flex-col md:flex-row min-h-screen">
            {/* Sidebar */}
            <aside
              className={`${
                sidebarOpen ? "block" : "hidden md:flex"
              } w-full md:w-64 bg-white shadow-md flex flex-col fixed md:static top-0 left-0 h-full md:h-auto z-20 transition-all`}
            >
              <div className="p-6 border-b flex justify-between items-center md:block">
                <h1 className="text-2xl font-bold text-blue-600">TicketPro</h1>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="md:hidden text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
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

            {/* Overlay for Mobile Sidebar */}
            {sidebarOpen && (
              <div
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-10"
              ></div>
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col mt-16 md:mt-0">
              <header className="fixed md:static top-0 left-0 right-0 bg-white shadow-sm py-3 sm:py-4 px-4 sm:px-8 flex justify-between items-center z-10">
                <h2 className="text-lg sm:text-xl font-semibold capitalize">{page}</h2>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="md:hidden text-gray-600 hover:text-blue-600"
                  >
                    ☰
                  </button>
                  <button
                    onClick={() => setPage("tickets")}
                    className="hidden md:inline text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Tickets
                  </button>
                  <button className="hidden md:inline text-gray-700 hover:text-blue-600 font-medium">
                    Settings
                  </button>
                </div>
              </header>

              {page === "dashboard" && (
                <section className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
                  {[
                    { label: "Total Tickets", value: "128", color: "border-blue-500" },
                    { label: "Open Tickets", value: "42", color: "border-green-500" },
                    { label: "In Progress", value: "18", color: "border-yellow-500" },
                    { label: "Closed Tickets", value: "68", color: "border-gray-400" },
                  ].map((card) => (
                    <div
                      key={card.label}
                      className={`bg-white rounded-xl shadow-md p-5 sm:p-6 border-l-4 ${card.color}`}
                    >
                      <h3 className="text-gray-500 text-sm mb-2">{card.label}</h3>
                      <p className="text-2xl sm:text-3xl font-bold">{card.value}</p>
                    </div>
                  ))}
                </section>
              )}

              {page === "tickets" && (
                <section className="p-4 sm:p-8 mt-4">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0 items-center border-b p-4">
                      <h3 className="text-base sm:text-lg font-semibold">Manage Tickets</h3>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                        + New Ticket
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left text-xs sm:text-sm">
                        <thead className="bg-gray-50 border-b text-gray-600">
                          <tr>
                            <th className="py-3 px-4 sm:px-6">ID</th>
                            <th className="py-3 px-4 sm:px-6">Subject</th>
                            <th className="py-3 px-4 sm:px-6">Priority</th>
                            <th className="py-3 px-4 sm:px-6">Assignee</th>
                            <th className="py-3 px-4 sm:px-6">Status</th>
                            <th className="py-3 px-4 sm:px-6">Updated</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3].map((i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4 sm:px-6 font-medium">#102{i + 3}</td>
                              <td className="py-3 px-4 sm:px-6">
                                {i === 1 ? "API latency issue" : i === 2 ? "Email failed" : "Login not working"}
                              </td>
                              <td className="py-3 px-4 sm:px-6">
                                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                                  {i === 1 ? "Medium" : i === 2 ? "Low" : "High"}
                                </span>
                              </td>
                              <td className="py-3 px-4 sm:px-6">User {i}</td>
                              <td className="py-3 px-4 sm:px-6">
                                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                                  {i === 2 ? "Closed" : "Open"}
                                </span>
                              </td>
                              <td className="py-3 px-4 sm:px-6">Oct {22 + i}, 2025</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              )}
            </main>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-4 bg-blue-50 text-gray-600 text-xs sm:text-sm">
          © {new Date().getFullYear()} TicketPro. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
