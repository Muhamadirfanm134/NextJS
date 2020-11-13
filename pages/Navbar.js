import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
        <a className="navbar-brand">HelloApp</a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link href="/"><a className="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/Bitcoin"><a className="nav-link">Bitcoin</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/About"><a className="nav-link">About</a></Link>
                </li>

            </ul>
        </div>
    </div>

    </nav>

);

export default Navbar;