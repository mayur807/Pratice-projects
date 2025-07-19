export default function Home() {
fetch("https://mdnsearch.dev/api?q=map")
  .then(res => res.json())
  .then(data => {
    data.results.forEach(r => {
      console.log(r.title, "-", r.url);
      console.log(r.excerpt);
    });
  })
  .catch(console.error);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Understanding Artificial Intelligence
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A comprehensive guide to how AI works, its impact on jobs, essential skills to learn, and how to work effectively with AI technology
            </p>
          </div>
        </div>
      </section>

      {/* How AI Actually Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How AI Really Works</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              AI systems learn patterns from massive amounts of data through mathematical algorithms. Instead of being programmed with specific rules, 
              they analyze examples and build internal models to make predictions or generate outputs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Machine Learning Process</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Feed large datasets into algorithms</li>
                  <li>Algorithm finds patterns and relationships</li>
                  <li>Creates a mathematical model</li>
                  <li>Model makes predictions on new data</li>
                  <li>Performance improves with more data</li>
                </ol>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-900">Neural Networks</h3>
                <p className="text-gray-700 mb-3">
                  Inspired by brain neurons, these networks have layers of interconnected nodes that process information. 
                  Each connection has a weight that gets adjusted during training.
                </p>
                <p className="text-gray-700">
                  Deep learning uses many layers (hence "deep") to learn complex patterns like recognizing images or understanding language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current AI in Tech Field */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI's Current State in Technology</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Natural Language Processing</h3>
              <p className="text-gray-700 text-sm">
                ChatGPT, Claude, and similar models can understand and generate human-like text. They're used for writing, coding assistance, 
                customer support, and content creation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Computer Vision</h3>
              <p className="text-gray-700 text-sm">
                AI can now recognize objects, faces, and scenes in images/videos. Used in medical imaging, autonomous vehicles, 
                security systems, and photo organization.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Code Generation</h3>
              <p className="text-gray-700 text-sm">
                Tools like GitHub Copilot and ChatGPT can write code, debug problems, and explain programming concepts. 
                They're becoming essential developer tools.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold mb-2 text-yellow-800">Current Limitations</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-700">
              <li>AI can hallucinate (generate false information confidently)</li>
              <li>Lacks real understanding - operates on pattern matching</li>
              <li>Requires massive computational resources</li>
              <li>Training data cutoffs mean outdated information</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Job Market Reality */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI's Real Impact on Jobs</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Jobs Being Created (High Demand)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">AI/ML Engineers</h4>
                  <p className="text-gray-600 text-sm">$120k-200k+ annually. Build and deploy AI models.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Data Scientists</h4>
                  <p className="text-gray-600 text-sm">$95k-160k annually. Analyze data to extract insights.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Prompt Engineers</h4>
                  <p className="text-gray-600 text-sm">$80k-150k annually. Optimize AI interactions.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">AI Product Managers</h4>
                  <p className="text-gray-600 text-sm">$130k-220k annually. Guide AI product development.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-700">Jobs Being Automated/Reduced</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Data Entry Clerks</h4>
                  <p className="text-gray-600 text-sm">AI can process and input data faster than humans.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Basic Content Writers</h4>
                  <p className="text-gray-600 text-sm">Simple articles and product descriptions are AI-generated.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Junior Developers (some roles)</h4>
                  <p className="text-gray-600 text-sm">Basic coding tasks increasingly handled by AI.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Customer Service (Level 1)</h4>
                  <p className="text-gray-600 text-sm">Chatbots handle routine inquiries effectively.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-blue-900">The Reality</h3>
            <p className="text-blue-800">
              Most jobs won't disappear entirely, but will change. Workers who learn to collaborate with AI will have significant advantages. 
              The key is adapting skills rather than competing directly with AI capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Essential Programming Languages */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Programming Languages for AI (Ranked by Importance)</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">1. Python</h3>
                  <p className="text-gray-700 mt-2">
                    <strong>Why Essential:</strong> TensorFlow, PyTorch, scikit-learn, pandas - all major AI libraries are Python-first. 
                    Simple syntax makes it beginner-friendly.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Used by: Google, OpenAI, Facebook AI, most AI startups</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Must Learn</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-green-700">2. R</h3>
                  <p className="text-gray-700 mt-2">
                    <strong>Best for:</strong> Statistical analysis, data visualization, academic research. Strong in biostatistics and finance.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Used by: Academic institutions, pharmaceutical companies, financial firms</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Data Science</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-purple-700">3. JavaScript</h3>
                  <p className="text-gray-700 mt-2">
                    <strong>Growing Fast:</strong> TensorFlow.js brings AI to browsers. Node.js enables server-side AI applications. 
                    Essential for AI-powered web apps.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Used by: Web-based AI tools, browser AI applications</p>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Web AI</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gray-400">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-700">4. SQL</h3>
                  <p className="text-gray-700 mt-2">
                    <strong>Data Foundation:</strong> Not for AI models directly, but essential for data preparation, 
                    cleaning, and management - which is 80% of AI work.
                  </p>
                </div>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">Data Prep</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use AI Effectively */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use AI Effectively (Not Perfectly)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-700">Do This</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Be Specific in Prompts</h4>
                  <p className="text-sm text-gray-700">Instead of "write code," say "write a Python function that takes a list of numbers and returns the average."</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Verify Everything</h4>
                  <p className="text-sm text-gray-700">AI can confidently give wrong answers. Always fact-check important information and test code outputs.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Iterate and Refine</h4>
                  <p className="text-sm text-gray-700">If the first response isn't perfect, ask follow-up questions or request modifications.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Use AI as a Starting Point</h4>
                  <p className="text-sm text-gray-700">Let AI do the heavy lifting, then add your expertise, creativity, and judgment.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">Avoid This</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Don't Trust Blindly</h4>
                  <p className="text-sm text-gray-700">AI makes mistakes, especially with recent events, complex calculations, or specialized knowledge.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Don't Replace Critical Thinking</h4>
                  <p className="text-sm text-gray-700">AI can't understand context the way humans do. You still need to evaluate if responses make sense.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Don't Use for Sensitive Decisions</h4>
                  <p className="text-sm text-gray-700">Medical, legal, or financial advice should come from qualified professionals, not AI.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Don't Share Private Information</h4>
                  <p className="text-sm text-gray-700">Your conversations may be used for training. Never share passwords, personal data, or confidential information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beginner's Practical Steps */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practical Steps for Beginners</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold">Start Using AI Tools</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Try ChatGPT, Claude, or Gemini for basic tasks</li>
                <li>• Use AI for writing, brainstorming, explaining concepts</li>
                <li>• Experiment with different prompting styles</li>
                <li>• Track what works and what doesn't</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold">Learn Basic Python</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Start with free resources like Python.org tutorial</li>
                <li>• Practice on platforms like Codecademy or freeCodeCamp</li>
                <li>• Focus on data manipulation (pandas, numpy)</li>
                <li>• Don't worry about advanced concepts initially</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold">Build Simple Projects</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Create a personal chatbot using APIs</li>
                <li>• Analyze your own data (fitness, expenses, etc.)</li>
                <li>• Build a simple web scraper</li>
                <li>• Document everything you learn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Building Logical Thinking */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Developing Strong Logical Thinking</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              AI is powerful, but it can't replace logical thinking. Here's how to build problem-solving skills that complement AI:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Core Logical Skills</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Break Down Problems</h4>
                    <p className="text-sm text-gray-700">Take complex issues and divide them into smaller, manageable pieces. This is how both humans and AI work best.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Pattern Recognition</h4>
                    <p className="text-sm text-gray-700">Learn to spot recurring themes, structures, and relationships. This helps you understand when and how to apply AI solutions.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Cause and Effect Thinking</h4>
                    <p className="text-sm text-gray-700">Understand how actions lead to consequences. This is crucial for debugging AI outputs and improving prompts.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Practical Exercises</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Daily Problem Solving</h4>
                    <p className="text-sm text-gray-700">When facing any problem, write down: What exactly is the issue? What are possible solutions? What are the pros/cons of each?</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Learn Basic Algorithms</h4>
                    <p className="text-sm text-gray-700">Study sorting, searching, and basic algorithms. Understanding these concepts improves your logical thinking dramatically.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Practice Debugging</h4>
                    <p className="text-sm text-gray-700">When something doesn't work (code, AI prompt, etc.), systematically test different parts to isolate the issue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            This guide provides practical information about AI's current state and its impact on work and learning. 
            Information is based on 2024-2025 data and industry observations.
          </p>
        </div>
      </footer>
    </div>
  );
}