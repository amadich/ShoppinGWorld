

export default function DevPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Meet the Developer</h1>
        <p className="text-lg text-gray-600 mt-2">Mohamed Jeridi, a skilled software developer behind Amadich.</p>
      </header>

      {/* About Section */}
      <section className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">About Mohamed Jeridi</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="https://avatars.githubusercontent.com/u/74735976?v=4"
            alt="Mohamed Jeridi"
            className="rounded-full w-32 h-32 border-4 border-gray-300 mb-6 md:mb-0 md:mr-8 object-cover "
          />
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600 mb-4">
              Mohamed Jeridi is a passionate developer with experience in creating high-quality, scalable software applications. He is the founder of <b>amadich</b>, a company that focuses on delivering custom software solutions to clients worldwide.
            </p>
            <p className="text-lg text-gray-600">
              Mohamed is proficient in both front-end and back-end development, specializing in modern frameworks like React, Node.js, and more. His approach to development is to build clean, efficient, and maintainable code while providing a seamless user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill 1 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Frontend Development</h3>
              <p className="text-gray-600 mt-2">Experienced with React, Next.js, and other modern JavaScript frameworks to create dynamic, user-friendly websites and applications.</p>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Backend Development</h3>
              <p className="text-gray-600 mt-2">Skilled in Node.js, Express.js, and database management (SQL, MongoDB) to create powerful server-side solutions.</p>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">API Integration</h3>
              <p className="text-gray-600 mt-2">Expert in integrating third-party APIs and building RESTful services for seamless data exchange between systems.</p>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">DevOps & Deployment</h3>
              <p className="text-gray-600 mt-2">Proficient in cloud platforms like AWS and deployment tools such as Docker to ensure scalable, secure applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="https://avatars.githubusercontent.com/u/74735976?v=4"
                alt="Project 1"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">E-commerce Platform</h3>
              <p className="text-gray-600 mt-2">A fully responsive e-commerce website built with React and Node.js, offering a seamless shopping experience.</p>
              <a href="https://github.com/amadich" className="btn btn-primary mt-4">View Project</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="https://avatars.githubusercontent.com/u/74735976?v=4"
                alt="Project 2"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Portfolio Website</h3>
              <p className="text-gray-600 mt-2">A personal portfolio website showcasing projects, skills, and achievements, built with React and Next.js.</p>
              <a href="https://amadich.tn" className="btn btn-primary mt-4">View Portfolio</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="https://avatars.githubusercontent.com/u/74735976?v=4"
                alt="Project 3"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold text-gray-800">Blog Application</h3>
              <p className="text-gray-600 mt-2">A blog platform with authentication and CRUD functionalities, built with React and Express.js.</p>
              <a href="https://github.com/amadich" className="btn btn-primary mt-4">View Project</a>
            </div>
          </div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-4">Interested in working with Mohamed Jeridi? Reach out to discuss your project.</p>
        <a href="mailto:me@amadich.tn" className="btn btn-primary text-xl">Contact Me</a>
      </section>

    </div>
  );
}
