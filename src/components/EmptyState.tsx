
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  actionHref,
  icon
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {icon && <div className="text-muted-foreground mb-6">{icon}</div>}
      
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      
      <p className="text-muted-foreground mb-8 max-w-md">
        {description}
      </p>
      
      <Link to={actionHref}>
        <Button className="bg-gold hover:bg-gold-dark text-white">
          {actionLabel}
        </Button>
      </Link>
    </div>
  );
};

export default EmptyState;
