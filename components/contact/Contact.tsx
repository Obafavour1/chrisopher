"use client"

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    console.log(formData)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response)

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="w-full">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#243447] py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.05),transparent_50%)]"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss your project or explore collaboration opportunities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:max-w-7xl mt-10 mx-auto px-4 md:px-6 lg:px-8 -mt-8 pb-20">
        <div className="bg-white rounded-xl p-2 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Mail className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Email</p>
                      <a href="mailto:em.abugaofficial@gmail.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                        em.abugaofficial@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Phone className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+234 9152055481</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <MapPin className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <Link 
                    href="#" 
                    className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </Link>
                  <Link 
                    href="#" 
                    className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </Link>
                  <Link 
                    href="#" 
                    className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-700" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-slate-50/50 rounded-2xl border border-gray-100 p-4 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all bg-white"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all bg-white resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/20"
                  >
                    {status === 'sending' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                      <p className="text-green-700 text-center font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                      <p className="text-red-700 text-center font-medium">Failed to send message. Please try again later.</p>
                    </div>
                  )}
                </form>
              </div>

              <div className="mt-12 w-full bg-blue-50/50 border border-blue-100 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <span className="font-bold">Note:</span> I typically respond to inquiries within 24-48 hours. Please ensure your email address is correct for a timely response.
            </p>
          </div>
            </div>
          
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;