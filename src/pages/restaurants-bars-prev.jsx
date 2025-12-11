import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function RestaurantsBarsPrev() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('restaurants-bars'), { replace: true });
  }, [navigate]);
  
  return null;
}