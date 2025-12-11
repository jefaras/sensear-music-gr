import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function IndustriesOld() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('Industries'), { replace: true });
  }, [navigate]);
  
  return null;
}