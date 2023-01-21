import Link from "next/link";
import ActiveLink from "./ActiveLink";



const Header = () => {

    const menuItems = <>
        <li className='mr-2 font-semibold text-white'>
            <ActiveLink href={"/login"}>Login</ActiveLink>
        </li>



        <Link href="/cart">
            <div className="nav-bag text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-handbag-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
                <span className="bag-quantity">

                </span>
            </div>
        </Link>


    </>
    return (
        <div className='bg-blue-500 py-4'>
            <div className="flex  justify-between  max-w-7xl mx-auto ">
                <div >
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}

                        </ul>
                    </div>
                    <Link href="/" className="text-3xl font-bold"><span className="text-white">Ame</span> <span className="text-black">lia</span></Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}

                    </ul>
                </div>
            </div>
        </div>

    );
};
export default Header;