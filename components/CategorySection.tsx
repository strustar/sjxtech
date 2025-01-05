import React from 'react';
import Card from './Card';

type CategorySectionProps = {
  title: string;
  items: {
    title: string;
    description: string;
    url: string;
    imageUrl?: string;
    category?: string;
  }[];
  visitButtonPosition?: 'top' | 'bottom';
  showUrlTopRight?: boolean;
};

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  items,
  visitButtonPosition = 'bottom',
  showUrlTopRight = true,
  }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-green-500 mb-4">{title}</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 p-4 rounded-lg border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
      {items.map((item, index) => (
        <Card
          key={index}
          item={item}
          visitButtonPosition={visitButtonPosition}
          showUrlTopRight={showUrlTopRight}
        />
      ))}
    </div>
  </div>
);

export default CategorySection;
