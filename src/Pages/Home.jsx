const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Navbar
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-indigo-600">MyApp</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Features</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Login
          </button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-bold mb-6">
          Build Better Apps <span className="text-indigo-600">Faster</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          A modern platform to build, manage, and scale your applications with ease.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
            Get Started
          </button>
          <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Fast Performance</h4>
            <p className="text-gray-600">
              Optimized architecture for blazing fast speed.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Secure</h4>
            <p className="text-gray-600">
              Industry-grade security with modern authentication.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Easy to Use</h4>
            <p className="text-gray-600">
              Simple UI that anyone can use without learning curve.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-gray-600">
        © 2025 MyApp. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;
