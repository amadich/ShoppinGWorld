import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Contact Us</h2>
        <p className="text-center text-gray-600">We'd love to hear from you! Please fill out the form below.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text text-gray-700">Your Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text text-gray-700">Your Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="message" className="label">
              <span className="label-text text-gray-700">Your Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea textarea-bordered w-full"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-gray-600">
          <p>If you prefer, you can also reach us at <span className="text-blue-500">me@amadich.tn</span></p>
        </div>
      </div>
    </div>
  );
}
