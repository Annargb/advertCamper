import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Toaster } from 'react-hot-toast';
import { Container } from '../../styles/container';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-right"
        gutter={14}
        toastOptions={{ duration: 2000 }}
      />
    </Container>
  );
};

export default SharedLayout;
