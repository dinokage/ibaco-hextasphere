"use client";

import React, { useState } from 'react';
import { Tabs, TabsTrigger, TabsList } from '../ui/tabs';
import Image from 'next/image';

// Custom Card component
interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, onClick, className, style }) => (
  <div onClick={onClick} className={className} style={style}>
    {children}
  </div>
);

const tabs = [
  'Atlas Copco',
  'SEW Eurodrive',
  'Kirlroskar',
  'Danfoss Drives',
  'Symphony Air Coolers',
  'Snap On Tools',
  'Praj Hipurity Systems',
  'Nilfisk',
  'WEG Motors',
  'Everest Vacuum Pumps & Blowers',
  'BMD ENGINEERING SCRAPPERS',
];

// Card Component
interface ProductCardProps {
  imageSrc: string;
  title: string;
  className: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, className }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Image Section */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

const ProductDisplay = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const handleLeftClick = () => {
    setCurrentSet((prevSet) => (prevSet === 0 ? 1 : 0));
  };

  const handleRightClick = () => {
    setCurrentSet((prevSet) => (prevSet === 0 ? 1 : 0));
  };

  const productSets = [
    [
      {
        imageSrc: "/image 67 (1).png",
        title: "Symphony Air Coolers For Industrial Purpose",
        backgroundSrc: "/Rectangle 81.png",
        backgroundTitle: "Symphony Air Coolers For Industrial Purpose"
      },
      {
        imageSrc: "/image 68 (2).png",
        title: "Symphony Easily Coolers For Industrial Purpose",
        backgroundSrc: "/Rectangle 81.png",
        backgroundTitle: "Symphony Easily Coolers For Industrial Purpose"
      },
      {
        imageSrc: "/image 69 (1).png",
        title: "Venticool 25 U Model",
        backgroundSrc: "/Rectangle 81.png",
        backgroundTitle: "Venticool 25 U Model"
      }
    ],
    [
      {
        imageSrc: "/image 70 (1).png",
        title: "Vacon NXP Air Cooled AC Drives",
        backgroundSrc: "/Rectangle 81.png",
        backgroundTitle: "Vacon NXP Air Cooled AC Drives"
      }
    ]
  ];

  return (
    <div className="relative flex flex-row items-center justify-center mt-10 space-x-8">
      <button 
        onClick={handleLeftClick} 
        className="absolute left-35 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        <Image src="/vector.png" alt="Left Arrow" width={24} height={24} />
      </button>
      {productSets[currentSet].map((product, index) => (
        <div key={index} className="relative z-10 mt-20 ml-58">
          <div className="relative flex flex-col items-center">
            <ProductCard 
              imageSrc={product.imageSrc} 
              title={product.title} 
              className="w-[319px] h-[344px] rounded-tl-[5px] rounded-tr-[5px] rounded-br-[100px] rounded-bl-[100px]" 
            />
            <div className="relative -mt-25">
              <ProductCard 
                imageSrc={product.backgroundSrc} 
                title="" 
                className="w-[450.73px] h-[333.24px] rounded-[20px] transform z-[-10]" 
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center">
                <span className="text-white text-2xl font-bold">{product.backgroundTitle}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button 
        onClick={handleRightClick} 
        className="absolute -right-15 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        <Image src="/vector (2).png" alt="Right Arrow" width={24} height={24} />
      </button>
    </div>
  );
};

// Main Component
const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (tabs[index] === 'SEW Eurodrive') {
      window.location.href = '/path/to/this/page'; // Update with the correct path
    }
  };

  return (
    <div className="flex flex-col items-start mt-18 w-full h-[100vh]" style={{ backgroundColor: '#ECDFCF' }}>
      {/* Products Header */}
      <h1 className="font-patua-one text-[51px] leading-[100%] tracking-[0%] font-bold mb-6 ml-25 mt-9">PRODUCTS</h1>

      {/* Tabs */}
      <div className="flex justify-center items-center space-x-[-40px] mt-20 ml-76">
        <Tabs>
          <TabsList className="flex justify-center">
            {tabs.map((tab, index) => (
              <TabsTrigger key={index} value={tab}>
                <Card
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer transition-transform duration-300 transform hover:scale-105 ${
                    activeTab === index
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-700 text-white'
                  } w-[140px] h-[120px] flex items-center justify-center text-center text-sm font-medium p-2 overflow-hidden`}
                  style={{
                    borderRadius: '5px',
                    transform: 'rotate(-7deg)', // Slight angle to match reference
                    zIndex: tabs.length - index,
                  }}
                >
                  <span className="block break-words">{tab}</span>
                </Card>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="mt-10">
        <ProductDisplay />
      </div>
    </div>
  );
};

export default ProductTabs;
