import { NavLink } from "react-router-dom";

function Header({children}) {

    function getClassName(isActive) {
        const classes = "px-3 py-2 rounded-md font-medium text-base no-underline"
        return isActive ? classes + " bg-gray-900 text-white" : classes + " text-gray-300 hover:bg-gray-700 hover:text-white"
    }

    return (
        <>
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <NavLink to="/" className={({isActive}) => getClassName(isActive)} aria-current="page" >Gurues</NavLink>

                                <NavLink to="/customer" className={({isActive}) => getClassName(isActive)}>Team</NavLink>

                                <NavLink to="/dictionary" className={({isActive}) => getClassName(isActive)}>Dictionary</NavLink>

                                <NavLink to="/others" className={({isActive}) => getClassName(isActive)}>Calendar</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {children}
        </>
    )
}

export default Header;