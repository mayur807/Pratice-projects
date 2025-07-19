import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
            <span className="text-2xl font-bold text-white">JS</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">JavaScript Programming</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world's most popular programming language and unlock endless career opportunities
          </p>
        </div>

        {/* What is JavaScript */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is JavaScript?</h2>
          <p className="text-lg text-gray-700 mb-4">
            JavaScript is a versatile, high-level programming language that powers the modern web. Originally created for web browsers, it has evolved to become a full-stack language capable of running on servers, mobile devices, and desktop applications.
          </p>
          <p className="text-lg text-gray-700">
            It's the only programming language that runs natively in web browsers, making it essential for web development and increasingly important for all types of software development.
          </p>
        </div>

        {/* How JavaScript is Used */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How JavaScript is Used</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Interactive websites, web applications, and user interfaces</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-600">Cross-platform mobile applications using React Native</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🖥️</div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">Server-side applications and APIs using Node.js</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">AI applications using TensorFlow.js and other libraries</p>
            </div>
          </div>
        </div>

        {/* What You Can Build */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Can Build with JavaScript</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Social media platforms (Facebook, Twitter)</li>
                <li>• E-commerce websites (Shopify, Amazon)</li>
                <li>• Streaming services (Netflix, YouTube)</li>
                <li>• Online banking and fintech apps</li>
                <li>• Educational platforms and learning management systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beyond the Web</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Desktop applications (Visual Studio Code, Discord)</li>
                <li>• Mobile apps (Instagram, WhatsApp Business)</li>
                <li>• Game development (browser and mobile games)</li>
                <li>• IoT and embedded systems</li>
                <li>• Browser extensions and automation tools</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Frontend Developer</h3>
              <p className="text-blue-800 mb-4">Create user interfaces and user experiences for web applications</p>
              <p className="text-sm text-blue-700">Technologies: React, Vue, Angular, HTML, CSS</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Backend Developer</h3>
              <p className="text-green-800 mb-4">Build server-side applications, APIs, and database systems</p>
              <p className="text-sm text-green-700">Technologies: Node.js, Express, MongoDB, PostgreSQL</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Full-Stack Developer</h3>
              <p className="text-purple-800 mb-4">Work on both frontend and backend development</p>
              <p className="text-sm text-purple-700">Technologies: MEAN/MERN Stack, Next.js</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-3">Mobile App Developer</h3>
              <p className="text-red-800 mb-4">Create cross-platform mobile applications</p>
              <p className="text-sm text-red-700">Technologies: React Native, Ionic</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">DevOps Engineer</h3>
              <p className="text-yellow-800 mb-4">Automate deployment and infrastructure management</p>
              <p className="text-sm text-yellow-700">Technologies: Node.js scripts, AWS, Docker</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">Technical Lead</h3>
              <p className="text-indigo-800 mb-4">Lead development teams and make architectural decisions</p>
              <p className="text-sm text-indigo-700">Skills: Leadership, System Design, Code Review</p>
            </div>
          </div>
        </div>

        {/* Salary Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-xl font-bold">💰</div>
            <h2 className="text-3xl font-bold text-gray-900">Salary Expectations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Entry Level</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$45-65K</p>
              <p className="text-sm text-gray-600">0-2 years experience</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mid Level</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$65-95K</p>
              <p className="text-sm text-gray-600">2-5 years experience</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Senior Level</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$95-140K</p>
              <p className="text-sm text-gray-600">5-10 years experience</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead/Architect</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">$140K+</p>
              <p className="text-sm text-gray-600">10+ years experience</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            * Salaries vary by location, company size, and specific skills. Tech hubs typically offer 20-40% higher compensation.
          </p>
        </div>

        {/* Learning Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-xl font-bold">⏰</div>
            <h2 className="text-3xl font-bold text-gray-900">Learning Timeline</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold mr-6">1-3</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Months: Basics</h3>
                <p className="text-gray-600">Learn syntax, variables, functions, DOM manipulation, and basic projects</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold mr-6">3-6</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Months: Intermediate</h3>
                <p className="text-gray-600">Master frameworks (React/Vue), APIs, databases, and build real applications</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold mr-6">6-12</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Months: Job Ready</h3>
                <p className="text-gray-600">Build portfolio, contribute to open source, and apply for entry-level positions</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold mr-6">1-2</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Years: Professional</h3>
                <p className="text-gray-600">Gain experience, specialize in specific areas, and advance to senior roles</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Earn Money */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-xl font-bold">📈</div>
            <h2 className="text-3xl font-bold text-gray-900">Ways to Earn Money</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">While Learning</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-1">Freelance</span>
                  <span>Small projects on Upwork, Fiverr ($10-50/hour)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-1">Tutoring</span>
                  <span>Teach basics to other beginners ($15-30/hour)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-1">Content</span>
                  <span>Create tutorials, blogs, YouTube videos</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Level</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-1">Full-time</span>
                  <span>Permanent positions at companies ($45K-140K+/year)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-1">Contract</span>
                  <span>Project-based work ($50-150/hour)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded mr-3 mt-1">Products</span>
                  <span>Build and sell your own apps/SaaS products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What You Can Become */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Progression Path</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold z-10">1</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">Junior Developer</h3>
                  <p className="text-gray-600">Learn on the job, work on small features, gain experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold z-10">2</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">Mid-Level Developer</h3>
                  <p className="text-gray-600">Handle complex features, mentor juniors, make technical decisions</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold z-10">3</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">Senior Developer</h3>
                  <p className="text-gray-600">Lead projects, architect systems, guide team technical direction</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold z-10">4</div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">Specialist Roles</h3>
                  <p className="text-gray-600">Tech Lead, Solution Architect, Principal Engineer, Engineering Manager, CTO</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your JavaScript Journey?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">1. Learn the Basics</h3>
              <p>Start with free resources like freeCodeCamp, MDN docs, and JavaScript.info</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">2. Build Projects</h3>
              <p>Create a portfolio with real projects that showcase your skills to employers</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">3. Join Community</h3>
              <p>Connect with other developers, contribute to open source, and keep learning</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl">The best time to start was yesterday. The second best time is now!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;