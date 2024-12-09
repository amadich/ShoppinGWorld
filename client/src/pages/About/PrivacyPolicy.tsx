
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mt-2">Your privacy is important to us. Please review our privacy practices below.</p>
      </header>

      {/* Policy Content */}
      <section className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
        <p className="text-lg text-gray-600 mt-4">
          We collect various types of personal data from users of our website, including your name, email address,
          and any other information you provide when filling out forms or interacting with our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">2. How We Use Your Information</h2>
        <p className="text-lg text-gray-600 mt-4">
          The information we collect is used to improve our services, respond to inquiries, send newsletters, and
          personalize your experience on our website. We may also use your data for marketing and communication
          purposes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">3. Data Security</h2>
        <p className="text-lg text-gray-600 mt-4">
          We take appropriate measures to protect your personal data from unauthorized access or disclosure. However,
          no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">4. Cookies</h2>
        <p className="text-lg text-gray-600 mt-4">
          Our website uses cookies to enhance user experience, analyze site traffic, and deliver personalized content.
          You can control cookie settings through your browser.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">5. Third-Party Services</h2>
        <p className="text-lg text-gray-600 mt-4">
          We may share your information with third-party service providers who assist us in operating our website or
          conducting business. These providers are obligated to protect your data and use it only for the purpose of
          fulfilling their duties.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">6. Your Rights</h2>
        <p className="text-lg text-gray-600 mt-4">
          You have the right to access, update, or delete your personal data. If you wish to exercise any of these
          rights, please contact us using the information below.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8">7. Contact Information</h2>
        <p className="text-lg text-gray-600 mt-4">
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p className="text-lg text-gray-600 mt-4">
          <strong>Email:</strong> <a href="mailto:me@amadich.tn" className="text-blue-500">me@amadich.tn</a>
        </p>
      </section>

    </div>
  );
}
