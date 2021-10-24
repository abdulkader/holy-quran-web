import React, { Fragment, useState } from 'react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import { MenuIcon } from '@/components/Icons';
import AnchorLink from '@/components/AnchorLink';
import { useAppContext } from '@/shared/hooks/useAppContext';
import NavigationSidebar from './NavigationSidebar';

const Header = () => {
  const { appState } = useAppContext();
  const { surahs = [] } = appState;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <Fragment>
      <header className="w-full bg-white drop-shadow-2xl">
        <div className="block w-full sticky top-0 z-100">
          <Container className="flex flex-nowrap justify-between align-middle items-stretch">
            <div className="flex justify-center align-middle items-center">
              <AnchorLink
                href="/"
                className="p-4 flex justify-center align-middle items-center ml-0 mr-auto border-4 border-green-100 text-sm text-center"
              >
                Quran
              </AnchorLink>
            </div>
            <div className="flex justify-start align-middle items-center">
              <Button
                className="text-gray-600 hover:text-primary-400 transition-colors duration-300 mx-1 px-1"
                onClick={toggleMenu}
              >
                <MenuIcon />
              </Button>
            </div>
          </Container>
        </div>
      </header>

      {menuOpen ? (
        <NavigationSidebar
          active={menuOpen}
          onClick={toggleMenu}
          data={surahs}
        />
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default Header;
