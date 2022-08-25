import sidebarBgImage from '../../assets/img/sidebar/sidebar-4.jpg';
import SourceLink from '../SourceLink';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import {
  MdDashboard,
  MdBorderAll,
  MdChromeReaderMode,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdViewList,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';
// const {lang, language1}=require('../host/lang')


const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


const navComponents = [
  // { to: '/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
  { to: '/product', name: `${(localStorage.getItem("lang"))=="uz"?("Mahsulot"):((localStorage.getItem("lang"))=="en"?("Product"):("Товар"))}`, exact: false, Icon: MdBorderAll },

  {
    to: '/category',
    name: `${(localStorage.getItem("lang"))=="uz"?("Turkum"):((localStorage.getItem("lang"))=="en"?("Category"):("Категория"))}`,
    exact: false, 
    Icon: MdGroupWork,
  },
  { to: '/subcategory', name:`${(localStorage.getItem("lang"))=="uz"?("Pastki kategoriya"):((localStorage.getItem("lang"))=="en"?("Subcategory"):("Подкатегория"))}`, exact: false, Icon: MdInsertChart },
  // { to: '/productimg', name: 'Product Images', exact: false, Icon: MdChromeReaderMode },
  { to: '/promotions', name: `${(localStorage.getItem("lang"))=="uz"?("Aqsiya"):((localStorage.getItem("lang"))=="en"?("Aksiya"):("Аксия"))}`, exact: false, Icon: MdViewList },
  // {
  //   to: '/dropdowns',
  //   name: 'dropdowns',
  //   exact: false,
  //   Icon: MdArrowDropDownCircle,
  // },
  // { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
  // { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
  // { to: '/progress', name: 'progress', exact: false, Icon: MdBrush },
  // { to: '/modals', name: 'modals', exact: false, Icon: MdViewDay },
];


const navItems = [
  { to: '/', name:`${(localStorage.getItem("lang"))=="uz"?("Bosh sahifa"):((localStorage.getItem("lang"))=="en"?("Dashboard"):("Домашняя страница"))}` , exact: true, Icon: MdDashboard },
  // { to: '/cards', name: 'cards', exact: false, Icon: MdWeb },

  // { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },  
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };


  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <span className="text-white">
                ITeen <FaHome />
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start"> {(localStorage.getItem("lang"))=="uz"?("Komponentlar"):((localStorage.getItem("lang"))=="en"?("Components"):("Составные части"))} </span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdSend className={bem.e('nav-item-icon')} />
                  <span className="">Contents</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse> */}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
