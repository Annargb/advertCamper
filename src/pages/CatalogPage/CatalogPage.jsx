import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CamperCard } from '../../components/CamperСard/CamperСard';
import { Container } from '../../styles/container';
import { fetchCatalog } from '../../redux/operations';
import { selectCatalogItems } from '../../redux/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const catalogItems = useSelector(selectCatalogItems);
  console.log(catalogItems);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  return (
    <Container>
      <div>Catalog</div>
      <div>
        {catalogItems.length !== 0 &&
          catalogItems.map((item) => (
            <CamperCard key={item.id} camper={item} />
          ))}
      </div>
    </Container>
  );
};

export default CatalogPage;
