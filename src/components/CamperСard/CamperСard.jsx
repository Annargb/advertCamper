import * as c from './CamperСard.styled';
// import icons from '../../images/icons.svg';
import { useState } from 'react';
import { CamperDetails } from '../CamperDetails/CamperDetails';
import { CamperModal } from '../Modal/Modal';
// import { useDispatch } from 'react-redux';

export const CamperCard = ({ camper, onRemoveFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(checkFavorite(camper));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const addToFavorites = (camper) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((favorite) => favorite.id === camper.id)) {
      favorites.push(camper);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  const removeFromFavorites = (camper) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex((favorite) => favorite.id === camper.id);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(false);
      onRemoveFavorite(camper);
    }
  };

  function checkFavorite(camper) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some((favorite) => favorite.id === camper.id);
  }

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
            {/* <c.Location>
              <use href={`${icons}#location`}></use>
            </c.Location> */}
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
