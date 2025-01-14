'use client'; // Client-side rendering

import { useState } from 'react';

const SlidingPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);

  return (
    <>
              {/* Hamburger button for mobile view */}
              <button onClick={togglePanel}
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
            type="button"
            data-twe-collapse-init=""
            data-twe-target="#navbarSupportedContent12"
            aria-controls="navbarSupportedContent12"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200 lg:hidden block lg:relative absolute right-6 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
      <div
        className={`panel ${isOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left : isOpen ? 0 : '-250px', // Adjust width as needed
          width: '250px',
          height: '100%',
          backgroundColor: '#333',
          transition: 'right 0.3s ease-in-out',
          zIndex: 1000,
        }}
      >
        <nav>
        <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:flex-row lg:pt-auto pt-5"
              data-twe-navbar-nav-ref=""
            >
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref="">
                {/* Dashboard link */}
                <a
                  className="lg:text-black/60 text-white transition duration-200 lg:hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 lg:pl-auto pl-10"
                  href="#"
                  data-twe-nav-link-ref=""
                >
                  Dashboard /
                </a>
              </li>
              <li>
                <a href="#" className='text-white lg:pl-auto pl-10'>Default</a>
              </li>
            </ul>
        </nav>
      </div>
    </>
  );
};

export default SlidingPanel;
