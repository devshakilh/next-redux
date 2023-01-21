import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="pt-20 text-white bg-blue-500">
            <div className="container w-11/12 px-6 pt-6 pb-20 mx-auto">
                <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2">
                    <div className="mb-6">
                        <h2 className="mb-1 text-3xl font-semibold uppercase">
                            Amelia Soft
                        </h2>
                        <p className="text-center md:text-start">
                            If you want the comforts of home while you’re
                            halfway around the world, then next-tour is an
                            excellent alternativehref traditionalhrefur booking
                            sites.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 text-2xl text-center md:text-start">
                            Explore
                        </h5>
                        <ul className="mb-0 text-center list-none md:text-start">
                            <li>
                                <Link href="/">
                                    <p>Vacation Packages</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <p>Hotels in United States</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <p>Domestic Flights</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <p>Car Rentals in United States</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 text-2xl text-center md:text-start">
                            Policies
                        </h5>

                        <ul className="mb-0 text-center list-none md:text-start">
                            <li>
                                <Link href="/">
                                    <p>Privacy Policy</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <p>Terms of Use</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <p>Accessibility</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <p>Personal Info Security</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <div className="">
                            <h6 className="flex justify-center mb-3 text-2xl font-semibold uppercase md:justify-start">
                                Help
                            </h6>
                            <ul className="mb-0 text-center list-none md:text-start">
                                <li>
                                    <Link href="/">
                                        <p>Support</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <p>Cancel rental Booking</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <p>Cancel your flight</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <p>
                                            Refund timelines, policies &
                                            processes
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 text-center bg-blue-600">
                <span>&#169; 2023 </span>
                <Link hrefLang="/" className="text-white" href="#">
                    All Right Reserved By Amelia Soft.
                </Link>
            </div>
        </footer>
    );
};

export default Footer;