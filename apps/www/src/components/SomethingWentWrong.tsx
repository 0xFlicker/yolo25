import { FC } from "react";

const SomethingWentWrong: FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Please try refreshing the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default SomethingWentWrong;
