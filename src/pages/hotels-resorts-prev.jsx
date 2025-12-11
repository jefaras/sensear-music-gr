import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HotelsResortsPrev() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('hotels-resorts'), { replace: true });
  }, [navigate]);
  
  return null;
}