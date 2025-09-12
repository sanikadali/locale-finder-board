import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Business } from '@/data/mockBusinesses';

interface FavoritesContextType {
  favorites: Business[];
  addFavorite: (business: Business) => void;
  removeFavorite: (businessId: string) => void;
  toggleFavorite: (business: Business) => void;
  isFavorite: (businessId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Business[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('cityconnect-favorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error);
        localStorage.removeItem('cityconnect-favorites');
      }
    }
  }, []);

  const addFavorite = (business: Business) => {
    setFavorites(prev => {
      const newFavorites = [...prev, business];
      localStorage.setItem('cityconnect-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFavorite = (businessId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(fav => fav.id !== businessId);
      localStorage.setItem('cityconnect-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
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

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addFavorite,
      removeFavorite,
      toggleFavorite,
      isFavorite,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};