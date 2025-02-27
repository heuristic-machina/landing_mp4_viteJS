const Header = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Product</a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Features</a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Marketplace</a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Company</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
    )
};

export default Header;