import React from "react";

function PasswordInput() {
  return (
    <div className="w-full min-h-[89vh] flex items-center justify-around p-8">
      {/* Form Section */}
      <div className="w-full h-[80vh] max-w-md bg-white rounded-xl shadow-lg border border-gray-200">
        <form className="p-8">
          <h1 className="text-3xl font-bold text-start mb-8 text-gray-800">
            Add New Password
          </h1>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Site Name
              </label>
              <input
                type="text"
                placeholder="example.com"
                className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                placeholder="your_username"
                className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-md"
          >
            Add Password
          </button>
        </form>
      </div>

      {/* Preview Section */}
      <div className="w-[55%] h-[80vh] ml-8 bg-white rounded-xl shadow-lg border border-gray-200 p-8 overflow-auto">
        <h2 className="text-2xl font-bold text-start mb-8 text-gray-800">
          Password Preview
        </h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg">
            <div className="space-y-4">
              <div>
                <nav className="text-sm font-medium text-gray-500">Site Link</nav>
                <a href="#" className="text-primary hover:underline">example.com</a>
              </div>
              <div>
                <nav className="text-sm font-medium text-gray-500">Username</nav>
                <label className="text-gray-700">surajsavle</label>
              </div>
              <div>
                <nav className="text-sm font-medium text-gray-500">Password</nav>
                <label className="text-gray-700">56156</label>
              </div>
            </div>
          </div>

          {/* Additional preview cards can be added here */}
          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
            <div className="space-y-4">
              <div>
                <nav className="text-sm font-medium text-gray-500">Site Link</nav>
                <a href="#" className="text-primary hover:underline">another.com</a>
              </div>
              <div>
                <nav className="text-sm font-medium text-gray-500">Username</nav>
                <label className="text-gray-700">user123</label>
              </div>
              <div>
                <nav className="text-sm font-medium text-gray-500">Password</nav>
                <label className="text-gray-700">•••••••</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordInput;