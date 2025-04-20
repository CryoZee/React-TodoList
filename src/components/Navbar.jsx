export default function Navbar({ items, clearItems }) {
    return (
        <nav className="navbar bg-dark px-5 py-3 border-bottom">
            <div className="container-fluid">
                <a
                    className="navbar-brand text-white"
                    href="">React Todo Application
                </a>
                {(items.length > 0) && (<button
                    className="btn btn-outline-success rounded-5 text-white"
                    onClick={() => clearItems()}
                >
                    Clear items
                </button>)}
            </div>
        </nav>
    )
}