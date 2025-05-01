
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  name: string;
  id: string;
  image: string;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, id, image, count }) => {
  return (
    <Link to={`/shop?category=${id}`}>
      <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-gray-200 text-sm">{count} vehicles</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
