import { useState } from "react";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="bg-orange-600 text-white p-4 flex justify-between items-center">
        <div className="font-bold text-xl">Prestigious Air</div>
        <div className="space-x-4">
          <button
            onClick={() => setShowLogin(true)}
            className="bg-white text-orange-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-96 relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-orange-600">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 p-2 border rounded"
            />
            <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 mb-3">
              Submit
            </button>
            <p className="text-sm text-gray-500">
              Don’t have an account?{" "}
              <button
                onClick={() => {
                  setShowLogin(false);
                  setShowSignup(true);
                }}
                className="text-orange-600 font-medium hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Sign-Up Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-96 relative">
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-orange-600">Sign Up</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mb-3 p-2 border rounded"
            />
            <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 mb-3">
              Submit
            </button>
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <button
                onClick={() => {
                  setShowSignup(false);
                  setShowLogin(true);
                }}
                className="text-orange-600 font-medium hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}