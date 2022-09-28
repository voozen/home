import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='grow mt-[70px] py-5'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
