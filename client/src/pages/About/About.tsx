

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-2">Learn more about our mission, values, and team.</p>
      </header>

      {/* About Section */}
      <section className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4">
          We are dedicated to providing the best solutions to our customers. Our team is passionate about innovation,
          and we work hard to bring you the most reliable and efficient services.
        </p>
      </section>

      {/* Features or Team Section */}
      <section className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="https://img.freepik.com/free-vector/black-friday-concept-illustration_114360-3657.jpg"
                alt="Feature 1"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title">Innovative Solutions</h3>
              <p className="text-gray-600">
                We provide innovative solutions that help our clients stay ahead in their industries.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="https://img.freepik.com/free-vector/playful-analytics-concept-illustration_114360-7215.jpg"
                alt="Feature 2"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title">Customer Focused</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We aim to exceed their expectations at every turn.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="https://img.freepik.com/free-vector/auction-concept-illustration_114360-7211.jpg"
                alt="Feature 3"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title">Dedicated Team</h3>
              <p className="text-gray-600">
                Our team is made up of skilled professionals who are passionate about delivering excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
}
