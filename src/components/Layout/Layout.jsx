import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Layout.styled';
import { NavBar } from 'components/NavBar/NavBar';

export const Layout = () => {
  return (
    <>
    <NavBar/>
      {/* <main> */}
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      {/* </main> */}
    </>
  );
};

export default Layout