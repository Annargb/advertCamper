import * as c from './CamperСard.styled';
import { useEffect, useState } from 'react';
import { CamperDetails } from '../CamperDetails/CamperDetails';
import { CamperModal } from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { updateFavorites } from '../../redux/catalogSlice';

export const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(checkFavorite(camper) || false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites !== null && storedFavorites !== undefined) {
      dispatch(updateFavorites(storedFavorites));
    }
  }, [dispatch]);

  function checkFavorite(camper) {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (Array.isArray(storedFavorites)) {
      return storedFavorites.some((favorite) => favorite.id === camper.id);
    }
    return false;
  }
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const addToFavorites = (camper) => {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!Array.isArray(storedFavorites)) {
      storedFavorites = [];
    }
    const updatedFavorites = [...storedFavorites, camper];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(true);
    if (storedFavorites.length > 0) {
      dispatch(updateFavorites(updatedFavorites));
    }
  };

  const removeFromFavorites = (camper) => {
    let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = storedFavorites.filter(
      (favorite) => favorite.id !== camper.id
    );

    if (updatedFavorites.length === 0) {
      localStorage.removeItem('favorites');
      dispatch(updateFavorites([]));
    } else {
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      dispatch(updateFavorites(updatedFavorites));
    }

    setIsFavorite(false);
  };

  const handleClick = (camper) => {
    return isFavorite ? removeFromFavorites(camper) : addToFavorites(camper);
  };

  return (
    <c.CardWrapper>
      <div>
        <c.CamperImg src={camper.gallery[0]} alt={camper.name} />
      </div>
      <div>
        <c.CamperTitleWrapper>
          <c.CamperTitle>{camper.name}</c.CamperTitle>
          <c.PriceWrapper>
            <c.CamperTitle>{`₴${camper.price}`}</c.CamperTitle>
            <c.ButtonFavoriteCamper
              type="button"
              onClick={() => handleClick(camper)}
            >
              {isFavorite ? <c.PressedHeartIcon /> : <c.HeartIcon />}
            </c.ButtonFavoriteCamper>
          </c.PriceWrapper>
        </c.CamperTitleWrapper>
        <c.CamperSubtitleWrapper>
          <c.SubtitleWrapper>
            <c.StarIcon />
            <c.CamperSubtitleText>{`${camper.rating}(${camper.reviews.length} Reviews)`}</c.CamperSubtitleText>
          </c.SubtitleWrapper>
          <c.SubtitleWrapper>
            <c.LocationIcon />
            <c.CamperSubtitleText>{camper.location}</c.CamperSubtitleText>
          </c.SubtitleWrapper>
        </c.CamperSubtitleWrapper>
        <c.CamperDescription>{camper.description}</c.CamperDescription>
        <CamperDetails camper={camper} />
        <c.ShowMoreButton type="button" onClick={openModal}>
          Show more
        </c.ShowMoreButton>
      </div>
      <CamperModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        camper={camper}
      />
    </c.CardWrapper>
  );
};
