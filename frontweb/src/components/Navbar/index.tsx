import { useContext, useEffect } from 'react';
import { getTokenData, isAuthenticated } from '../../util/auth';
import { AuthContext } from '../../AuthContext';
import { removeAuthData } from '../../util/storage';

import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
  };

  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
        <div className="nav-logout">
          {authContextData.authenticated ? (
            <>
              <a href="/" onClick={handleLogoutClick}>
                SAIR
              </a>
            </>
          ) : (
              <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
