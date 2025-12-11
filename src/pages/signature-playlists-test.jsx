import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function SignaturePlaylistsTest() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(createPageUrl('signature-playlists'), { replace: true });
  }, [navigate]);
  
  return null;
}