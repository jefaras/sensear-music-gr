import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ArtMuseumsFashionPrev() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('art-museums-fashion'), { replace: true });
  }, [navigate]);
  
  return null;
}