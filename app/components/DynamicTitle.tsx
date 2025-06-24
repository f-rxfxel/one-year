'use client';

import { useState, useEffect } from 'react';

const DynamicTitle = () => {
  const calculateTimePassed = () => {
    const startDate = new Date('2024-06-09T00:00:00');
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const [title, setTitle] = useState(calculateTimePassed());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTitle = calculateTimePassed();
      setTitle(newTitle);
      document.title = newTitle;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default DynamicTitle; 