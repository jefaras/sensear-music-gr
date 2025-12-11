import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HomeTestNew() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('Home'), { replace: true });
  }, [navigate]);
  
  return null;
}