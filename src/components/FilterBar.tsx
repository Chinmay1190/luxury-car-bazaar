
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { categories, brands } from '@/data/cars';

interface FilterBarProps {
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceChange: (priceRange: [number, number]) => void;
  onSortChange: (sort: string) => void;
  maxPrice: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onCategoryChange,
  onBrandChange,
  onPriceChange,
  onSortChange,
  maxPrice,
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      notation: 'compact',
      compactDisplay: 'short',
    }).format(price);
  };

  return (
    <div className="bg-card rounded-lg shadow-sm p-4 mb-6 border border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <Select
            value={selectedCategory}
            onValueChange={(value) => {
              setSelectedCategory(value);
              onCategoryChange(value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Brand</label>
          <Select
            value={selectedBrand}
            onValueChange={(value) => {
              setSelectedBrand(value);
              onBrandChange(value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Sort By</label>
          <Select
            defaultValue="featured"
            onValueChange={onSortChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name-az">Name: A-Z</SelectItem>
              <SelectItem value="name-za">Name: Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
          </label>
          <Slider
            defaultValue={[0, maxPrice]}
            max={maxPrice}
            step={maxPrice / 100}
            value={[priceRange[0], priceRange[1]]}
            onValueChange={handlePriceChange}
            className="mt-6"
          />
        </div>
      </div>
      
      <div className="flex justify-end mt-4">
        <Button
          variant="outline"
          onClick={() => {
            setSelectedCategory('all');
            setSelectedBrand('All Brands');
            setPriceRange([0, maxPrice]);
            onCategoryChange('all');
            onBrandChange('All Brands');
            onPriceChange([0, maxPrice]);
            onSortChange('featured');
          }}
          className="text-sm"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
