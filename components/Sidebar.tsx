// components/Sidebar.tsx
import { useState } from 'react';

interface SidebarProps {
 onSelectCategory: (category: string) => void;  // props 타입 정의
}

const Sidebar = ({ onSelectCategory }: SidebarProps) => {
  const [selectedItem, setSelectedItem] = useState('Getting Started');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    if (onSelectCategory) {  // props 존재 확인
      onSelectCategory(item);
    }
  };

  return (
    <aside className="w-[400px] bg-gray-900/50 text-white p-6 min-h-screen">
      <h2 className="text-2xl font-bold mt-12 mb-6">CATEGORIES</h2>
      <ul className="space-y-4 ml-4">
        {['Getting Started', 'Develop', 'Research Features'].map((item) => (
          <li
            key={item}
            onClick={() => handleItemClick(item)}
            className={`text-xl cursor-pointer ${
              selectedItem === item 
                ? 'text-green-400' 
                : 'text-gray-400 hover:text-orange-400'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;