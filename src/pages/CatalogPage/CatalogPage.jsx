import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CamperCard } from '../../components/CamperСard/CamperСard';
import { Loader } from '../../components/Loader/Loader';
import { fetchCatalog } from '../../redux/operations';
import {
  selectCatalogItems,
  selectCurrentPage,
  selectCatalogIsLoading,
  selectFilteredCampers,
} from '../../redux/selectors';
import { updateCurrentPage } from '../../redux/catalogSlice';
import * as c from './CatalogPage.styled';
import { Aside } from '../../components/Aside/Aside';
import { NotFound } from '../../components/NotFound/NotFound';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const catalogItems = useSelector(selectCatalogItems);
  const isLoading = useSelector(selectCatalogIsLoading);
  const filteredCampers = useSelector(selectFilteredCampers);
  const isVisibleButton = catalogItems.length % 4 === 0;

  useEffect(() => {
    dispatch(fetchCatalog(currentPage));
  }, [dispatch, currentPage]);

  return (
    <c.CatalogPageContainer>
      <c.CatalogTitle>Catalog</c.CatalogTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <c.CatalogWrapper>
            <Aside />
            {filteredCampers.length !== 0 ? (
              <c.CamperListContainer>
                <ul>
                  {filteredCampers.map((item) => (
                    <CamperCard key={item.id} camper={item} />
                  ))}
                </ul>
                {isVisibleButton && (
                  <c.LoadMoreButton
                    type="button"
                    onClick={() => dispatch(updateCurrentPage())}
                  >
                    Load more
                  </c.LoadMoreButton>
                )}
              </c.CamperListContainer>
            ) : (
              <NotFound
                text="No campers matching the filters"
                styles={{ width: '888px', height: '358px' }}
              />
            )}
          </c.CatalogWrapper>
        </>
      )}
    </c.CatalogPageContainer>
  );
};

export default CatalogPage;
