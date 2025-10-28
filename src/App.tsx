import React, { useState } from "react";

interface Ticket {
  id: number;
  subject: string;
  priority: string;
  assignee: string;
  status: string;
  updated: string;
}

const App: React.FC = () => {
  const [page, setPage] = useState("landing");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Tickets state
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 1024,
      subject: "API latency issue",
      priority: "Medium",
      assignee: "User 1",
      status: "Open",
      updated: "Oct 23, 2025",
    },
    {
      id: 1025,
      subject: "Email failed",
      priority: "Low",
      assignee: "User 2",
      status: "Closed",
      updated: "Oct 24, 2025",
    },
    {
      id: 1026,
      subject: "Login not working",
      priority: "High",
      assignee: "User 3",
      status: "Open",
      updated: "Oct 25, 2025",
    },
  ]);

  // Form state for adding/editing
  const [form, setForm] = useState<Omit<Ticket, "id">>({
    subject: "",
    priority: "Low",
    assignee: "",
    status: "Open",
    updated: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  });

  const [editId, setEditId] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddOrUpdateTicket = () => {
    if (!form.subject.trim() || !form.assignee.trim()) return;

    if (editId) {
      setTickets((prev) =>
        prev.map((t) => (t.id === editId ? { ...t, ...form } : t))
      );
      setEditId(null);
    } else {
      const newTicket: Ticket = {
        id: Math.max(...tickets.map((t) => t.id), 0) + 1,
        ...form,
      };
      setTickets([...tickets, newTicket]);
    }

    setForm({
      subject: "",
      priority: "Low",
      assignee: "",
      status: "Open",
      updated: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
  };

  const handleEdit = (id: number) => {
    const t = tickets.find((ticket) => ticket.id === id);
    if (t) {
      setForm({
        subject: t.subject,
        priority: t.priority,
        assignee: t.assignee,
        status: t.status,
        updated: t.updated,
      });
      setEditId(id);
    }
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      setTickets((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const navClass = (p: string) =>
    `block w-full text-left py-2 px-4 rounded-lg font-medium ${
      page === p ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
    }`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-60 z-0"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-blue-300 rounded-full opacity-50 z-0"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto">
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

            {/* Main Content */}
            <main className="flex-1 flex flex-col mt-16 md:mt-0">
              <header className="fixed md:static top-0 left-0 right-0 bg-white shadow-sm py-3 sm:py-4 px-4 sm:px-8 flex justify-between items-center z-10">
                <h2 className="text-lg sm:text-xl font-semibold capitalize">{page}</h2>
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="md:hidden text-gray-600 hover:text-blue-600"
                >
                  ☰
                </button>
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
                    <div className="border-b p-4">
                      <h3 className="text-base sm:text-lg font-semibold mb-3">
                        Manage Tickets
                      </h3>

                      {/* Inline Add/Edit Form */}
                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-4">
                        <input
                          name="subject"
                          value={form.subject}
                          onChange={handleInputChange}
                          placeholder="Subject"
                          className="border rounded-lg p-2 text-sm"
                        />
                        <select
                          name="priority"
                          value={form.priority}
                          onChange={handleInputChange}
                          className="border rounded-lg p-2 text-sm"
                        >
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                        <input
                          name="assignee"
                          value={form.assignee}
                          onChange={handleInputChange}
                          placeholder="Assignee"
                          className="border rounded-lg p-2 text-sm"
                        />
                        <select
                          name="status"
                          value={form.status}
                          onChange={handleInputChange}
                          className="border rounded-lg p-2 text-sm"
                        >
                          <option value="Open">Open</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Closed">Closed</option>
                        </select>
                        <button
                          onClick={handleAddOrUpdateTicket}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                        >
                          {editId ? "Update" : "Add"} Ticket
                        </button>
                      </div>
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
                            <th className="py-3 px-4 sm:px-6 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tickets.map((t) => (
                            <tr key={t.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4 sm:px-6 font-medium">#{t.id}</td>
                              <td className="py-3 px-4 sm:px-6">{t.subject}</td>
                              <td className="py-3 px-4 sm:px-6">{t.priority}</td>
                              <td className="py-3 px-4 sm:px-6">{t.assignee}</td>
                              <td className="py-3 px-4 sm:px-6">{t.status}</td>
                              <td className="py-3 px-4 sm:px-6">{t.updated}</td>
                              <td className="py-3 px-4 sm:px-6 text-right space-x-2">
                                <button
                                  onClick={() => handleEdit(t.id)}
                                  className="text-blue-600 hover:underline text-xs"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(t.id)}
                                  className="text-red-600 hover:underline text-xs"
                                >
                                  Delete
                                </button>
                              </td>
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
