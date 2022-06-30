
import { Disclosure } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import {useLocation,Link} from "react-router-dom";

function classNames(...classes:Array<string>) {
    return classes.filter(Boolean).join(' ')
}

export default function Gnb() {
    const {pathname}= useLocation()
    const navigation = [
        { name: 'Home', href: '/', current: pathname==='/' },
        { name: 'Products', href: '/products', current:pathname==='/products' },
        { name: 'Cart', href: '/cart', current:pathname==='/cart'  },
    ]
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_14_2)">
                                                    <path d="M19.5 25.5C19.491 25.8995 19.5618 26.2968 19.7085 26.6685C19.8551 27.0403 20.0745 27.379 20.3538 27.6648C20.6331 27.9505 20.9667 28.1776 21.335 28.3327C21.7033 28.4878 22.0989 28.5677 22.4985 28.5678C22.8981 28.5679 23.2937 28.4882 23.6621 28.3333C24.0304 28.1784 24.3642 27.9515 24.6436 27.6658C24.9231 27.3802 25.1427 27.0416 25.2895 26.6699C25.4363 26.2983 25.5073 25.901 25.4985 25.5015C25.4812 24.7177 25.1577 23.9717 24.5972 23.4234C24.0368 22.8751 23.284 22.568 22.5 22.5678C21.7159 22.5676 20.963 22.8744 20.4023 23.4224C19.8416 23.9704 19.5177 24.7162 19.5 25.5ZM4.5 25.5C4.5 26.2956 4.81607 27.0587 5.37868 27.6213C5.94129 28.1839 6.70435 28.5 7.5 28.5C8.29565 28.5 9.05871 28.1839 9.62132 27.6213C10.1839 27.0587 10.5 26.2956 10.5 25.5C10.5 24.7044 10.1839 23.9413 9.62132 23.3787C9.05871 22.8161 8.29565 22.5 7.5 22.5C6.70435 22.5 5.94129 22.8161 5.37868 23.3787C4.81607 23.9413 4.5 24.7044 4.5 25.5V25.5ZM9.8205 18.258L26.4225 13.515C26.5848 13.4609 26.7269 13.3588 26.83 13.2222C26.9331 13.0856 26.9924 12.921 27 12.75V4.5H6V2.1C6 1.77 5.7285 1.5 5.4015 1.5H0.5985C0.439752 1.50079 0.287754 1.56431 0.175641 1.6767C0.0635289 1.78909 0.000393913 1.94125 0 2.1L0 4.5H3L5.865 17.9355L6 19.35V21.8235C6 22.152 6.27 22.4235 6.6 22.4235H26.4C26.73 22.4235 27 22.1505 27 21.8235V19.5H10.128C8.403 19.5 8.367 18.6735 9.8205 18.258V18.258Z" fill="#F8F8F8"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_14_2">
                                                        <rect width="30" height="30" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}