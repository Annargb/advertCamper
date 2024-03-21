import { Container } from '../../styles/container';
import { CamperCard } from '../../components/CamperСard/CamperСard';
import * as c from './FavoritePage.styled';
import { useEffect, useState } from 'react';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (removedItem) => {
    const updatedFavorites = favorites.filter(
      (item) => item.id !== removedItem.id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Container>
      <div>Favorite</div>
      <c.CommonList>
        <ul>
          {favorites.length !== 0 &&
            favorites.map((item) => (
              <CamperCard
                key={item.id}
                camper={item}
                onRemoveFavorite={handleRemoveFavorite}
              />
            ))}
        </ul>
      </c.CommonList>
    </Container>
  );
};

export default FavoritePage;
