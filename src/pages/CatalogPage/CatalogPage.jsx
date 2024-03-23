import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CamperCard } from '../../components/CamperСard/CamperСard';
import { Container } from '../../styles/container';
import { fetchCatalog } from '../../redux/operations';
import {
  selectCatalogItems,
  selectVisibleItems,
  selectCurrentPage,
} from '../../redux/selectors';
import { updateCurrentPage } from '../../redux/slice';
import * as c from './CatalogPage.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  let currentPage = useSelector(selectCurrentPage);
  const catalogItems = useSelector(selectCatalogItems);
  const visibleItems = useSelector(selectVisibleItems);
  let isVisibleButton = visibleItems.length !== catalogItems.length;

  // const handleClick = () => {
  //   dispatch(updateCurrentPage());
  //   dispatch(fetchCatalog(currentPage));
  // };

  useEffect(() => {
    dispatch(fetchCatalog(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Container>
      <div>Catalog</div>
      <c.CamperList>
        {visibleItems.length !== 0 &&
          visibleItems.map((item) => (
            <CamperCard key={item.id} camper={item} />
          ))}
      </c.CamperList>

      {isVisibleButton && (
        <c.LoadMoreButton
          type="button"
          onClick={() => dispatch(updateCurrentPage())}
        >
          Load more
        </c.LoadMoreButton>
      )}
    </Container>
  );
};

export default CatalogPage;
