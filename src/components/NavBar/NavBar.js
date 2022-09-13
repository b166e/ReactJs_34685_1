import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
//import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, Route, NavLink } from "react-router-dom";

import CartWidget from "./CartWidget";
const navigation = {
  categories: [
    {
      id: "Accesorios",
      name: "Accesorios",
      featured: [
        {
          name: "Nuevos Ingresos",
          href: "#",
          imageSrc:
            "https://www.elit.com.ar/images/productos/disco-ssd-480gb-a400-sata3-2-5_2166218.jpg",
          imageAlt: "Disco SSD",
        },
        {
          name: "Ver Todo DDR4",
          href: "#",
          imageSrc:
            "https://www.elit.com.ar/images/productos/memoria-crucial-basic-sodimm-ddr4-8gb-2666mhz_2163693.jpg",
          imageAlt: "Memoria Crucial",
        },
      ],
      sections: [
        {
          id: "Accesorios",
          name: "Accesorios",
          items: [
            { name: 'TECLADOS', href: 'rubro/TECLADOS' },
            { name: 'MOUSES', href: 'rubro/MOUSES' },
            { name: 'CAMARAS WEB', href: 'rubro/CAMARAS WEB' },
            { name: 'CAMARAS WIFI', href: 'rubro/CAMARAS WIFI' },
            { name: 'UPS', href: 'rubro/UPS' },
            { name: 'PROTECTORES', href: 'rubro/PROTECTORES' },
            { name: 'ESTABILIZADORES', href: 'rubro/ESTABILIZADORES' },
          ],
        },
        {
          id: "Audio",
          name: "Audio",
          items: [
            { name: 'MICROFONOS', href: 'rubro/MICROFONOS' },
            { name: 'AURICULARES', href: 'rubro/AURICULARES' },
            { name: 'PARLANTES', href: 'rubro/PARLANTES' },
          ],
        },
        {
          id: "Almacenamiento",
          name: "Almacenamiento",
          items: [
            { name: 'DISCOS EXTERNOS', href: 'rubro/DISCOS EXTERNOS' },
            { name: 'DISCOS INTERNOS SSD', href: 'rubro/DISCOS INTERNOS SSD' },
            { name: 'PEN DRIVE', href: 'rubro/PEN DRIVE' },
            { name: 'MEMORIAS FLASH', href: 'rubro/MEMORIAS FLASH' },
          ],
        },
      ],
    },
    {
      id: "Computo e Impresión",
      name: "Computo e Impresión",
      featured: [
        {
          name: "Notebooks en Stock",
          href: "#",
          imageSrc:
            "https://www.elit.com.ar/images/productos/notebook-hp-240g8-14-i5-1135g7-8gb-512ssd-w11h_2165565.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Mouse Gamer Logitech",
          href: "#",
          imageSrc:
            "https://www.elit.com.ar/images/productos/mouse-inalambrico-logitech-g502-lightspeed_2083056.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "Computadoras",
          name: "Computadoras",
          items: [

            { name: 'ALL IN ONE', href: 'rubro/ALL IN ONE' },
            { name: 'MONITORES', href: 'rubro/MONITORES' },
            { name: 'NOTEBOOKS CORPORATIVO', href: 'rubro/NOTEBOOKS CORPORATIVO' },
            { name: 'MEMORIAS NOTEBOOK', href: 'rubro/MEMORIAS NOTEBOOK' },
          ],
        },
        {
          id: "Impresión",
          name: "Impresión",
          items: [
            { name: 'CARTUCHOS DE TINTA', href: 'rubro/CARTUCHOS DE TINTA' },
            { name: 'IMPRESORAS INKJET', href: 'rubro/IMPRESORAS INKJET' },
            { name: 'IMPRESORAS MULTIFUNCIÓN', href: 'rubro/IMPRESORAS MULTIFUNCIÓN' },
          ],
        },
     
      ],
    },
  ],
  pages: [
    { name: "Quienes Somos", href: "#" },

  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-indigo-600 border-indigo-600"
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pt-10 pb-8"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <NavLink
                        className="-m-2 block p-2 font-medium text-gray-900"
                        to="/"
                        exact
                      >
                        {page.name}
                      </NavLink>
                    </div>
                  ))}
                </div>


          
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <a href="#">
                    <span className="sr-only">Elit</span>

                    <img
                      src="/assets/logo.svg"
                      alt="logo"
                      className=" w-auto"
                    />
                  </a>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <NavLink
                                                  className="hover:text-gray-800"
                                                  to={item.href}
                                                  exact
                                                >
                                                  {item.name}
                                                </NavLink>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
               
               

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                  </a>
                </div>

                {/* Cart */}
      
                <div className="ml-4 flow-root lg:ml-6">
                <CartWidget />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
