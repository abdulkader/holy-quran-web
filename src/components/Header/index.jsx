import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Container from '@/components/Container';
import { CartIcon, UserIcon, SearchIcon } from '@/components/Icons';

const Header = () => {
  return (
    <header className="block w-full relative">
      <div className="bg-yellow-100 p-1">
        <Container>
          <p className="text-xs text-yellow-700 text-center font-semibold">
            Promo banner can be added here
          </p>
        </Container>
      </div>
      <div className="block bg-white shadow-lg z-50 sticky top-0">
        <Container className="flex flex-nowrap justify-between align-middle items-stretch">
          <Link
            to="/"
            className="w-36 p-4 flex justify-center align-middle items-center ml-0 mr-auto border-4 border-primary-100 text-sm"
          >
            Logo
          </Link>
          <div className="flex flex-1 px-4 justify-center align-middle items-stretch">
            <ul className="flex flex-nowrap justify-center align-middle items-stretch">
              <li className="group flex justify-center items-center">
                <Link
                  to="/about-us"
                  className="text-sm font-semibold text-secondary-600 hover:text-primary-500 text-center mx-1 px-1"
                >
                  Bottoms
                </Link>
                <div className="hidden opacity-0 group-hover:opacity-100 group-hover:block w-full absolute top-[3.75rem] left-0 right-0 h-auto bg-white shadow-lg z-[900] md:p-4">
                  <div className="relative flex justify-center align-top">
                    <div className="md:w-1/4">
                      <Link
                        to="/about-us"
                        className="text-sm text-secondary-600 font-semibold hover:text-primary-500"
                      >
                        Sub Menu Item
                      </Link>
                      <ul className="relative block">
                        <li>
                          <Link
                            className="text-sm text-secondary-500 inline-block hover:text-primary-500 p-1"
                            to="/"
                          >
                            Child Menu
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-sm text-secondary-500 inline-block hover:text-primary-500 p-1"
                            to="/"
                          >
                            Child Menu
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-sm text-secondary-500 inline-block hover:text-primary-500 p-1"
                            to="/"
                          >
                            Child Menu
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-sm text-secondary-500 inline-block hover:text-primary-500 p-1"
                            to="/"
                          >
                            Child Menu
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-sm text-secondary-500 inline-block hover:text-primary-500 p-1"
                            to="/"
                          >
                            Child Menu
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/4">
                      <Link
                        to="/about-us"
                        className="text-sm text-secondary-600 font-semibold hover:text-primary-500"
                      >
                        Sub Menu Item
                      </Link>
                    </div>
                    <div className="md:w-1/4">
                      <Link
                        to="/about-us"
                        className="text-sm text-secondary-600 font-semibold hover:text-primary-500"
                      >
                        Sub Menu Item
                      </Link>
                    </div>
                    <div className="md:w-1/4">
                      <Link
                        to="/about-us"
                        className="text-sm text-secondary-600 font-semibold hover:text-primary-500"
                      >
                        Sub Menu Item
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group flex justify-center items-center">
                <Link
                  to="/about-us"
                  className="text-sm font-semibold text-secondary-600 hover:text-primary-500 text-center mx-1 px-1"
                >
                  Pants & Shorts
                </Link>
              </li>
              <li className="group flex justify-center items-center">
                <Link
                  to="/about-us"
                  className="text-sm font-semibold text-secondary-600 hover:text-primary-500 text-center mx-1 px-1"
                >
                  Skirts
                </Link>
              </li>
              <li className="group flex justify-center items-center">
                <Link
                  to="/about-us"
                  className="text-sm font-semibold text-secondary-600 hover:text-primary-500 text-center mx-1 px-1"
                >
                  Tops
                </Link>
              </li>
              <li className="group flex justify-center items-center">
                <Link
                  to="/about-us"
                  className="text-sm font-semibold text-secondary-600 hover:text-primary-500 text-center mx-1 px-1"
                >
                  Dresses
                </Link>
              </li>
              <li className="group flex justify-center items-center">
                <Link
                  to="/about-us"
                  className="text-sm font-semibold text-secondary-600 hover:text-primary-500 text-center mx-1 px-1"
                >
                  Accessories
                </Link>
              </li>
              <li className="group flex justify-center items-center">
                <Link
                  to="/about-us"
                  className="text-sm font-semibold text-secondary-600 hover:text-primary-500 text-center mx-1 px-1"
                >
                  Shop The Look
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-end align-middle items-center">
            <Button className="text-secondary-600 hover:text-primary-400 transition-colors duration-300 mx-1 px-1">
              <SearchIcon />
            </Button>
            <Button className="text-secondary-600 hover:text-primary-400 transition-colors duration-300 mx-1 px-1">
              <UserIcon />
            </Button>
            <Button className="text-secondary-600 hover:text-primary-400 transition-colors duration-300 mx-1 px-1">
              <CartIcon />
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
