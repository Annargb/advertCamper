import { CamperCard } from '../../components/CamperСard/CamperСard';
import * as c from './FavoritePage.styled';
import { useEffect } from 'react';
import { updateFavorites } from '../../redux/catalogSlice';
import { selectFavorites } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { NotFound } from '../../components/NotFound/NotFound';

const FavoritePage = () => {
  const myFavorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites !== null && storedFavorites !== undefined) {
      dispatch(updateFavorites(storedFavorites));
    }
  }, [dispatch]);

  return (
    <c.FavoritePageContainer>
      <c.FavoriteTitle>Favorite</c.FavoriteTitle>
      <c.CommonList>
        {!myFavorites.length ? (
          <NotFound
            text={`It seems like you don't have your favorite campervans`}
          />
        ) : (
          <ul>
            {myFavorites.length !== 0 &&
              myFavorites.map((item) => (
                <CamperCard key={item.id} camper={item} />
              ))}
          </ul>
        )}
      </c.CommonList>
    </c.FavoritePageContainer>
  );
};

export default FavoritePage;
