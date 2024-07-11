import React from 'react';

interface ApiResponseProps {
  response: string;
  error: string;
}

const ApiResponse: React.FC<ApiResponseProps> = ({ response, error }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">API Response</h2>
      {response && (
        <pre className="bg-gray-100 text-black p-4 rounded border overflow-auto h-full max-w-full">
          {response}
        </pre>
      )}
      {error && (
        <div className="bg-red-100 text-black p-4 rounded border overflow-auto h-full max-w-full">
          {error}
        </div>
      )}
    </div>
  );
};

export default ApiResponse;
