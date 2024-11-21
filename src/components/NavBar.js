import { NavLink, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';


/* const NavBar = ({ brandName, navItems, searchValue, setSearchValue }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-lime-500">{brandName}</div>
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className="text-orange-600 hover:text-gray-400">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  brandName: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
 */ 

//test



const NavBar = ({ brandName, navItemsCopy, searchValue, setSearchValue, isLoggedIn, setNavItems }) => {
  //const navigate = useNavigate();

  const handleClickMovie = (event) => {
    //alert("handleClickMovie");
    //console.log(label);
    //.log(`isloggedindelanavbar :${isLoggedIn}`);
    //if (label==="Movies"   && isLoggedIn===false ) {
      alert("Veuillez vous identidier pour accéder aux films")
      //navigate('/Login');
      //setNavItems[1].path = "/Login";
      //this.path = '/Login';
      //path = '/Login';
      //console.log(path);
      //console.log(navItemsCopy);
      //navItemsCopy[1].path = path;
      //navItemsCopy[1]=navItemsCopy[5];
      //console.log(navItemsCopy);
      //setNavItems(navItemsCopy);
      //navItemsCopy.path["Movies"] = navItemsCopy.path["Login"];
      //this.navItemsCopy.path.replace('/Movies','/Login');
      //setNavItems(navItemsCopy);
    }
  

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-lime-500">{brandName}</div>
        <ul className="flex space-x-4">
          {navItemsCopy.map((item, index) => (
            <li key={index}>
              {isLoggedIn &&
              <NavLink to={item.path}  className="text-orange-600 hover:text-gray-400"> {item.label} </NavLink> }
              {(!isLoggedIn && item.label==="Movies") &&
              <NavLink to="/Login" onClick={(event) => handleClickMovie(event)} className="text-orange-600 hover:text-gray-400">
              {item.label}
              </NavLink>}
              {(!isLoggedIn && item.label!=="Movies") &&
              <NavLink to={item.path} className="text-orange-600 hover:text-gray-400">{item.label} </NavLink>}

{/*               <NavLink to={item.path} onClick={(event) => handleClickMovie(event,item.label, item.path, isLoggedIn, setNavItems)} className="text-orange-600 hover:text-gray-400">
                {item.label}
              </NavLink>
 */}            </li>
          ))}
        </ul>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  brandName: PropTypes.string.isRequired,
  navItemsCopy: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};



export default NavBar;


