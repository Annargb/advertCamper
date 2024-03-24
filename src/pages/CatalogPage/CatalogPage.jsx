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

const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const catalogItems = useSelector(selectCatalogItems);
  const isLoading = useSelector(selectCatalogIsLoading);

  const isVisibleButton = catalogItems.length % 4 === 0;

  const filteredCampers = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(fetchCatalog(currentPage));
  }, [dispatch, currentPage]);

  return (
    <c.CatalogPageContainer>
      <c.CatalogTitle>Catalog</c.CatalogTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <c.CatalogWrapper>
          <Aside />
          <c.CamperListContainer>
            {/* <ul>
              {catalogItems.length !== 0 &&
                catalogItems.map((item) => (
                  <CamperCard key={item.id} camper={item} />
                ))}
            </ul> */}
            <ul>
              {filteredCampers.length !== 0 &&
                filteredCampers.map((item) => (
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
        </c.CatalogWrapper>
      )}
    </c.CatalogPageContainer>
  );
};

export default CatalogPage;