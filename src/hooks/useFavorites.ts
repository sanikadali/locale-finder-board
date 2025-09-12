import { useState, useEffect } from 'react';
import { Business } from '@/data/mockBusinesses';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Business[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('cityconnect-favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (business: Business) => {
    const newFavorites = [...favorites, business];
    setFavorites(newFavorites);
    localStorage.setItem('cityconnect-favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (businessId: string) => {
    const newFavorites = favorites.filter(fav => fav.id !== businessId);
    setFavorites(newFavorites);
    localStorage.setItem('cityconnect-favorites', JSON.stringify(newFavorites));
  };

  const toggleFavorite = (business: Business) => {
    const isFavorite = favorites.some(fav => fav.id === business.id);
    if (isFavorite) {
      removeFavorite(business.id);
    } else {
      addFavorite(business);
    }
  };

  const isFavorite = (businessId: string) => {
    return favorites.some(fav => fav.id === businessId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
};