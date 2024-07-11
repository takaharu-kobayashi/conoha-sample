import React from 'react';

interface AuthTokenInputProps {
  authToken: string;
  setAuthToken: (token: string) => void;
}

const AuthTokenInput: React.FC<AuthTokenInputProps> = ({ authToken, setAuthToken }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="authToken">
        X-Auth-Token
      </label>
      <input
        type="text"
        id="authToken"
        value={authToken}
        onChange={(e) => setAuthToken(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter your auth token"
      />
    </div>
  );
};

export default AuthTokenInput;
