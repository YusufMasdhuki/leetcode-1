import usePokemons from '@/hook/use-pokemons';
import useTheme from '@/hook/use-theme';
import React from 'react';
import { useTranslation } from 'react-i18next';

const useHome = () => {
  const [loading, setLoading] = React.useState(false);
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const { pokemons } = usePokemons();

  return {
    loading,
    setLoading,
    toggleTheme,
    changeLanguage,
    t,
    i18n,
    pokemons,
  };
};

export default useHome;
