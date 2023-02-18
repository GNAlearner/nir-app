const Header = () => {
    return(
    <header className="header">
        <div>
            <img src="logo_head.png" alt="logo" width="200px"/>
        </div>
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;