
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CartIcon from "../cartIcon/CartIcon";
import { FiLogOut } from "react-icons/fi";
import "./nav.css";

const Nav = () => {
    const { username, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="nav">
            <div className="nav__content container">

                {/* Logo clicable */}
                <Link to="/products" className="nav__logo-box">
                    <img
                        className="nav__logo-image"
                        src="./src/assets/icon-logo.webp"
                        alt="Logo de Market"
                    />
                    <span className="nav__logo-text">Market App</span>
                </Link>

                {/* Mensaje centrado */}
                <div className="nav__center-text">
                    <h1 className="title-hello">
                        {isAuthenticated ? `¡Hola ${username}!` : '¡Bienvenido! Inicia sesión'}
                    </h1>
                </div>

                {/* Avatar, carrito y botón salir */}
                <div className="nav__actions">
                    {isAuthenticated && (
                        <div className="nav__user-box">
                            <div className="user-avatar">
                                {username?.charAt(0).toUpperCase()}
                            </div>
                            <span className="user-text">{username}</span>
                        </div>
                    )}
                    <div className="nav__cart-box">
                        <CartIcon />
                        <span className="cart-text">Mi carrito</span>
                    </div>
                    {isAuthenticated && (
                        <button onClick={handleLogout} className="logout-btn">
                            <FiLogOut className="logout-icon" />
                            <span className="logout-text">Salir</span>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;

