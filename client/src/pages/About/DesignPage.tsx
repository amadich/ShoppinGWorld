

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Creative & Professional Design</h1>
        <p className="text-lg text-gray-600 mt-2">We create visually stunning designs that make your brand stand out.</p>
      </header>

      {/* Portfolio Section */}
      <section className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Portfolio Item 1 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="https://img.freepik.com/premium-vector/business-team-celebrating-work-success-office-together-happy-colleagues-employees-giving-high-five-corporate-goal-achievement-flat-graphic-vector-illustration-isolated-white-background_198278-19070.jpg"
                alt="Design 1"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Branding Design</h3>
              <p className="text-gray-600 mt-2">A modern and memorable brand identity for our client.</p>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="https://img.freepik.com/free-vector/non-binary-people-pack_23-2148931403.jpg"
                alt="Design 2"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Web Design</h3>
              <p className="text-gray-600 mt-2">A responsive and user-friendly website design for an e-commerce business.</p>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-people-talking-table_23-2149075400.jpg"
                alt="Design 3"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600 mt-2">Optimizing user experience with clean, intuitive designs.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Design Services Section */}
      <section className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Design Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Logo Design</h3>
              <p className="text-gray-600 mt-2">We create unique and memorable logos that reflect your brand’s identity.</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Website Design</h3>
              <p className="text-gray-600 mt-2">Beautiful, responsive websites designed to engage your audience and convert leads.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600 mt-2">Designing intuitive and user-friendly interfaces that make your website or app easy to use.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl w-full bg-gray-100 rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Testimonial 1 */}
          <div className="card w-full bg-base-100 shadow-lg p-6">
            <p className="text-lg text-gray-600 italic">"The design team at [amadich] exceeded our expectations. They created a stunning brand identity for us that truly represents our business."</p>
            <h4 className="mt-4 font-semibold text-gray-800">Mohamed Jeridi</h4>
            <p className="text-gray-500">CEO, Company XYZ</p>
          </div>

          {/* Testimonial 2 */}
          <div className="card w-full bg-base-100 shadow-lg p-6">
            <p className="text-lg text-gray-600 italic">"Our website design is now much more user-friendly, and we've seen an increase in conversions. Highly recommend their services!"</p>
            <h4 className="mt-4 font-semibold text-gray-800">Mohamed Jeridi</h4>
            <p className="text-gray-500">Marketing Director, ABC Corp.</p>
          </div>
          
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Let’s Bring Your Vision to Life</h2>
        <p className="text-lg text-gray-600 mb-4">Contact us today to discuss how we can help design your next project.</p>
        <a href="#" className="btn btn-primary text-xl">Get in Touch</a>
      </section>

    </div>
  );
}
