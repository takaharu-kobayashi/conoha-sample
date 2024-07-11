import React from 'react';

interface ApiMenuProps {
  onApiSelect: (apiType: string) => void;
}

const ApiMenu: React.FC<ApiMenuProps> = ({ onApiSelect }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">API Menu</h2>
      <button
        className="w-full p-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => onApiSelect('volumeTypes')}
      >
        ボリュームタイプ一覧取得
      </button>
      <button
        className="w-full p-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => onApiSelect('volumeList')}
      >
        ボリューム一覧取得
      </button>
    </div>
  );
};

export default ApiMenu;
