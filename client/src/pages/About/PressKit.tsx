

export default function PressKit() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">

      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Press Kit</h1>
        <p className="text-lg text-gray-600 mt-2">Download media resources, logos, and important information about our company.</p>
      </header>

      {/* Press Kit Content */}
      <section className="max-w-5xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Company Information</h2>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to our Press Kit! Here you’ll find all the necessary resources to write about our company, including logos, media assets, and our press releases.
        </p>
        
        {/* Press Kit Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Resource 1 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="/public/assets/shopping-bagwithouteyes.png"
                width={50}
                alt="Company Logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title">Company Logo</h3>
              <p className="text-gray-600">Download the official company logo in various formats.</p>
              <a href="/public/assets/shopping-bagwithouteyes.png" download className="btn btn-primary mt-4">Download Logo</a>
            </div>
          </div>

          {/* Resource 2 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="/public/assets/shopping-bagwithouteyes.png"
                width={50}
                alt="Media Kit"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title">Media Kit</h3>
              <p className="text-gray-600">Access our full media kit, including press releases and high-resolution images.</p>
              <a href="/path/to/mediakit.zip" download className="btn btn-primary mt-4">Download Media Kit</a>
            </div>
          </div>

          {/* Resource 3 */}
          <div className="card w-full bg-base-100 shadow-lg">
            <figure className="px-6 pt-6">
              <img
                src="/public/assets/shopping-bagwithouteyes.png"
                width={50}
                alt="Press Releases"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title">Press Releases</h3>
              <p className="text-gray-600">Find our latest press releases and news articles for media distribution.</p>
              <a href="/path/to/press-releases.pdf" download className="btn btn-primary mt-4">Download Press Releases</a>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
