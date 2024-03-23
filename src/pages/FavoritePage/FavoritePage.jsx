import { Container } from '../../styles/container';
import { CamperCard } from '../../components/CamperСard/CamperСard';
import * as c from './FavoritePage.styled';
import { useEffect } from 'react';
import { updateFavorites } from '../../redux/slice';
import { selectFavorites } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

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
    <Container>
      <div>Favorite</div>
      <c.CommonList>
        <ul>
          {myFavorites.length !== 0 &&
            myFavorites.map((item) => (
              <CamperCard key={item.id} camper={item} />
            ))}
        </ul>
      </c.CommonList>
    </Container>
  );
};

export default FavoritePage;

// import { Container } from '../../styles/container';
// import { CamperCard } from '../../components/CamperСard/CamperСard';
// import * as c from './FavoritePage.styled';
// import { useEffect, useState } from 'react';
// import { addFavorites } from '../../redux/slice';
// import { selectFavorites } from '../../redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';

// const FavoritePage = () => {
//   const myFavorites = useSelector(selectFavorites);
//   const [favorites, setFavorites] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
//     if (storedFavorites) {
//       dispatch(addFavorites(storedFavorites));
//     }
//   }, [dispatch]);

//   // useEffect(() => {
//   //   const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//   //   // setFavorites(storedFavorites);
//   //   dispatch(addFavorites(storedFavorites));
//   // }, [dispatch]);

//   const handleRemoveFavorite = (removedItem) => {
//     const updatedFavorites = favorites.filter(
//       (item) => item.id !== removedItem.id
//     );
//     setFavorites(updatedFavorites);
//     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//   };

//   return (
//     <Container>
//       <div>Favorite</div>
//       <c.CommonList>
//         <ul>
//           {myFavorites.length !== 0 &&
//             myFavorites.map((item) => (
//               <CamperCard
//                 key={item.id}
//                 camper={item}
//                 onRemoveFavorite={handleRemoveFavorite}
//               />
//             ))}
//         </ul>
//       </c.CommonList>
//     </Container>
//   );
// };

// export default FavoritePage;
