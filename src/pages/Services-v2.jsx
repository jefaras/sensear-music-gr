import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ServicesV2() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('Services'), { replace: true });
  }, [navigate]);
  
  return null;
}