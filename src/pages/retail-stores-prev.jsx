import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function RetailStoresPrev() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('retail-stores'), { replace: true });
  }, [navigate]);
  
  return null;
}