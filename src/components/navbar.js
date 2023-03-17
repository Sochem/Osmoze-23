import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="navSection px-[46px] fixed w-full top-0 z-50">
            <div className=" pr-6 rounded-b-2xl bg-white bg-opacity-50 backdrop-blur-lg drop-shadow-lg">
                <div className="hidden sm:flex flex-row items-center justify-between py-1">
                    <div className="flex m-0">
                        <Link href="/">
                        <Image
                            src="/images/Osmoze.svg"
                            width={87}
                            height={87}
                            alt="Osmoze"
                        />
                        </Link>
                    </div>

                    <div className="justify-end hidden items-center sm:flex space-x-12 2xl:space-x-16 font-medium">
                        <div>
                            <Link href="/events">
                                <button className="2xl:text-xl underline-offset-4 hover:underline">
                                    EVENTS
                                </button>
                            </Link>
                        </div>

                        <div>
                            <Link href="https://www.instagram.com/sochem_iitbhu/?hl=en">
                                <button className="2xl:text-xl underline-offset-4 hover:underline">
                                    ANNOUNCEMENT
                                </button>
                            </Link>
                        </div>

                        <div>
                            <Link href="/about">
                                <button className="2xl:text-xl underline-offset-4 hover:underline">
                                    ABOUT US
                                </button>
                            </Link>
                        </div>

                        <div>
                            <Link href="/comingsoon">
                                <button className="2xl:text-xl underline-offset-4 hover:underline">
                                    TEAM
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}