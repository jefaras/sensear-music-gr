import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function EventsExperiencesPrev() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('events-experiences'), { replace: true });
  }, [navigate]);
  
  return null;
}