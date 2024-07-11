import React, { useState } from 'react';
import axios from 'axios';
import ApiMenu from './components/ApiMenu';
import ApiResponse from './components/ApiResponse';
import AuthTokenInput from './components/AuthTokenInput';

const App: React.FC = () => {
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [authToken, setAuthToken] = useState<string>('');

  const handleApiCall = async (apiType: string) => {
    setResponse('');
    setError('');

    const urlMap: { [key: string]: string } = {
      volumeTypes: '/api/v3/a9a801c0a92346e997a61b6a6c2d368f/types',
      volumeList: '/api/v3/a9a801c0a92346e997a61b6a6c2d368f/volumes',
    };

    try {
      const res = await axios.get(
        urlMap[apiType],
        {
          headers: {
            'Accept': 'application/json',
            'X-Auth-Token': authToken,
          },
        }
      );
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response);
        setError(error.response ? error.response.data : error.message);
      } else {
        console.error('Unexpected error:', error);
        setError('Unexpected error occurred');
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-gray-300">
        <AuthTokenInput authToken={authToken} setAuthToken={setAuthToken} />
      </div>
      <div className="flex flex-1">
        <div className="w-1/4 p-4 bg-gray-200">
          <ApiMenu onApiSelect={handleApiCall} />
        </div>
        <div className="w-3/4 p-4">
          <ApiResponse response={response} error={error} />
        </div>
      </div>
    </div>
  );
};

export default App;
