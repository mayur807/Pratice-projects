import React from 'react';

const Contactus = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <span className="text-2xl font-bold text-white">ℹ️</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted source for comprehensive JavaScript programming information and career guidance
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are dedicated to providing free, accurate, and up-to-date information about JavaScript programming to help aspiring developers make informed decisions about their career paths. Our goal is to bridge the gap between curiosity and knowledge in the world of web development.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a complete beginner wondering if JavaScript is right for you, or someone looking to understand the career opportunities in web development, we're here to provide clear, honest, and comprehensive information.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Provide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">📚</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Educational Content</h3>
              <p className="text-blue-800">Comprehensive guides about JavaScript fundamentals, applications, and real-world usage</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">💼</div>
              <h3 className="text-xl font-semibold text-green-900 mb-3">Career Information</h3>
              <p className="text-green-800">Detailed insights into job opportunities, salary expectations, and career progression paths</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">🎯</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Learning Roadmaps</h3>
              <p className="text-purple-800">Clear timelines and structured paths to help you plan your JavaScript learning journey</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">📊</div>
              <h3 className="text-xl font-semibold text-red-900 mb-3">Market Insights</h3>
              <p className="text-red-800">Current trends, salary data, and industry demands in JavaScript development</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">🔧</div>
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Practical Knowledge</h3>
              <p className="text-yellow-800">Information about tools, technologies, and frameworks used in JavaScript development</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">🌟</div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">Success Stories</h3>
              <p className="text-indigo-800">Real examples of companies and products built with JavaScript to inspire your journey</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🆓</span>
                Always Free
              </h3>
              <p className="text-gray-700 mb-6">
                We believe that access to quality programming information should be free for everyone. We don't sell courses, charge subscriptions, or hide content behind paywalls.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">✅</span>
                Accurate & Updated
              </h3>
              <p className="text-gray-700">
                Our information is regularly reviewed and updated to reflect current market trends, salary data, and industry standards in JavaScript development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Practical Focus
              </h3>
              <p className="text-gray-700 mb-6">
                We focus on practical, actionable information that helps you make real decisions about your programming career and learning path.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🌍</span>
                Accessible to All
              </h3>
              <p className="text-gray-700">
                Our content is designed to be understandable for beginners while still being valuable for those with some programming experience.
              </p>
            </div>
          </div>
        </div>

        {/* Why JavaScript */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Why We Focus on JavaScript</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🚀 Most Popular Language</h3>
              <p className="mb-6">
                JavaScript has been the most popular programming language for over 10 consecutive years according to Stack Overflow surveys, making it highly relevant for career seekers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">💡 Versatile Applications</h3>
              <p className="mb-6">
                From web development to mobile apps, from server-side programming to machine learning, JavaScript offers unprecedented versatility in the programming world.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">📈 High Demand</h3>
              <p className="mb-6">
                JavaScript developers are in high demand across industries, with excellent salary prospects and numerous career advancement opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🔰 Beginner Friendly</h3>
              <p>
                Unlike many programming languages, JavaScript is relatively easy to learn and doesn't require complex setup, making it perfect for beginners.
              </p>
            </div>
          </div>
        </div>

        {/* What We Don't Do */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Don't Do</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-3">❌ We Don't Sell Courses</h3>
                <p className="text-red-800 mb-4">We provide information, not paid educational content or training programs.</p>
                
                <h3 className="text-lg font-semibold text-red-900 mb-3">❌ We Don't Offer Certifications</h3>
                <p className="text-red-800">We focus purely on providing information rather than formal credentials.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-3">❌ We Don't Provide Job Placement</h3>
                <p className="text-red-800 mb-4">We offer career guidance and information, not recruitment or job matching services.</p>
                
                <h3 className="text-lg font-semibold text-red-900 mb-3">❌ We Don't Promise Quick Results</h3>
                <p className="text-red-800">We provide realistic timelines and honest information about the effort required to succeed.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-6">
              We are committed to being your reliable source of JavaScript programming information. Our content is research-based, regularly updated, and designed to help you make informed decisions about your programming career.
            </p>
            <p className="mb-6">
              We understand that choosing a programming language and career path is a significant decision. That's why we strive to provide comprehensive, unbiased information that covers both the opportunities and challenges in JavaScript development.
            </p>
            <p>
              Whether you're exploring programming as a career change, a student considering your options, or someone curious about the tech industry, we're here to provide the information you need to make the best decision for your future.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Questions or Feedback?</h2>
          <p className="text-xl mb-6">
            While we don't offer personal consultations or support, we're always working to improve our content based on what people need to know about JavaScript careers.
          </p>
          <p className="text-lg">
            Our mission is simple: provide accurate, helpful, and free information about JavaScript programming careers. 
            Thank you for choosing us as your information resource!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;