import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CamperCard } from '../../components/CamperСard/CamperСard';
import { Loader } from '../../components/Loader/Loader';
import { fetchCatalog } from '../../redux/operations';
import {
  selectCurrentPage,
  selectCatalogIsLoading,
  selectFilteredCampers,
  selectVisibleButton,
} from '../../redux/selectors';
import { showButton, updateCurrentPage } from '../../redux/catalogSlice';
import { resetFilters } from '../../redux/filterSlice';
import * as c from './CatalogPage.styled';
import { Aside } from '../../components/Aside/Aside';
import { NotFound } from '../../components/NotFound/NotFound';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  const isLoading = useSelector(selectCatalogIsLoading);
  const filteredCampers = useSelector(selectFilteredCampers);
  const isVisibleButton = useSelector(selectVisibleButton);

  useEffect(() => {
    dispatch(fetchCatalog(currentPage));
    dispatch(resetFilters());
    dispatch(showButton());
  }, [dispatch, currentPage]);

  return (
    <c.CatalogPageContainer>
      <c.CatalogTitle>Catalog</c.CatalogTitle>
      <c.CatalogWrapper>
        <Aside />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {filteredCampers.length !== 0 && !isLoading ? (
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
              !isLoading && (
                <NotFound
                  text="No campers matching the filters"
                  styles={{ width: '888px', height: '358px' }}
                />
              )
            )}
          </>
        )}
      </c.CatalogWrapper>
    </c.CatalogPageContainer>
  );
};

export default CatalogPage;
