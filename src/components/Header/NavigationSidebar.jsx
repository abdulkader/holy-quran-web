import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from '@/components/AnchorLink';
import Sidebar from '@/components/Sidebar';

const MenuListItem = ({ data, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0 first:border-t text-sm hover:bg-gray-50 duration-200 transition-all">
      <>
        <div className="flex flex-row justify-between text-theme-blue font-semibold px-1 py-2">
          <div className="block w-full">
            <AnchorLink
              href={`/surah/${data?.number}/${encodeURI(data?.englishName)}`}
              key={data.number}
              onClick={onClick}
              className="px-2 hover:text-primary-500 block"
            >
              <div className="flex justify-between text-md w-full">
                <div className="inline-block px-1">
                  <span className="inline-flex justify-center items-center w-7 h-7 bg-primary-500 text-white text-xs rounded-full mr-2">
                    {data?.number}
                  </span>
                  {data?.englishName}
                </div>
                <div className="inline-block px-1 font-arabic text-right">
                  {data?.name}
                </div>
              </div>
            </AnchorLink>
          </div>
        </div>
      </>
    </div>
  );
};

const SidebarNav = ({ data, active, onClick }) => {
  return (
    <Sidebar active={active} onClose={onClick} title="Menu" position="right">
      <div className="max-h-[92vh] overflow-y-auto">
        {data.map((item) => (
          <MenuListItem data={item} key={`${item.number}`} onClick={onClick} />
        ))}
      </div>
    </Sidebar>
  );
};

MenuListItem.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

SidebarNav.propTypes = {
  active: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SidebarNav;
