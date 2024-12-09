

export default function HostingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Reliable Hosting Solutions</h1>
        <p className="text-lg text-gray-600 mt-2">Secure, fast, and scalable hosting for your business needs.</p>
      </header>

      {/* Hosting Features Section */}
      <section className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Fast Performance</h3>
              <p className="text-gray-600 mt-2">Enjoy lightning-fast load times with optimized servers and content delivery networks (CDN).</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">99.9% Uptime</h3>
              <p className="text-gray-600 mt-2">We guarantee high availability, ensuring your website stays online around the clock.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 mt-2">Our dedicated support team is available 24/7 to help you with any issues or questions.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Choose Your Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Basic Plan */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Basic Hosting</h3>
              <p className="text-lg text-gray-600 mt-2">$5.99 / month</p>
              <ul className="text-left text-gray-600 mt-4">
                <li>1 Website</li>
                <li>10 GB Storage</li>
                <li>Free SSL</li>
                <li>24/7 Support</li>
              </ul>
              <a href="#" className="btn btn-primary mt-6">Sign Up</a>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Standard Hosting</h3>
              <p className="text-lg text-gray-600 mt-2">$9.99 / month</p>
              <ul className="text-left text-gray-600 mt-4">
                <li>5 Websites</li>
                <li>50 GB Storage</li>
                <li>Free SSL</li>
                <li>24/7 Support</li>
              </ul>
              <a href="#" className="btn btn-primary mt-6">Sign Up</a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Premium Hosting</h3>
              <p className="text-lg text-gray-600 mt-2">$14.99 / month</p>
              <ul className="text-left text-gray-600 mt-4">
                <li>Unlimited Websites</li>
                <li>Unlimited Storage</li>
                <li>Free SSL</li>
                <li>Priority Support</li>
              </ul>
              <a href="#" className="btn btn-primary mt-6">Sign Up</a>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get Started with Our Hosting Services Today</h2>
        <p className="text-lg text-gray-600 mb-4">Sign up now and take advantage of our fast, secure, and reliable hosting solutions!</p>
        <a href="#" className="btn btn-primary text-xl">Start Now</a>
      </section>

    </div>
  );
}
