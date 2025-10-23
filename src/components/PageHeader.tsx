import React from 'react';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;