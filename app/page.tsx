import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* Mian */}
  <main className="main-wrapper">
    {/* Left Side Bar */}
    <aside
      id="nav"
      className="left-side-panel fixed top-0 bottom-0 left-0 border-r border-slate-500 w-52 transform transition-transform -translate-x-full lg:translate-x-0 ease-in duration-150 bg-white z-40"
    >
      {/* Profile */}
      <div className="flex py-5 pl-5">
        
        <a href="#" className="text-sm pl-2">
          Bye Wind
        </a>
      </div>
      {/* /Profile */}
      <div className="flex gap-3 pl-5">
        <a href="#" className="text-slate-500 text-sm">
          Favorites
        </a>
        <a href="#" className="text-slate-400 text-sm">
          Recently
        </a>
      </div>
      {/* Overview & Projects */}
      <div className="list-inside list-disc pl-8 pt-3">
        <a href="#" className="text-black text-sm block mb-2">
          Overview
        </a>
        <a href="#" className="text-black text-sm block">
          Projects
        </a>
      </div>
      {/* /Overview & Projects */}
      {/* Dashboard Options */}
      <h3 className="text-slate-500 text-sm py-4 pl-5">Dashboards</h3>
      <div className="list-inside">
        <a
          href="#"
          className="text-black text-sm block mb-2 pl-10 tracking-wide"
        >
          <i className="fa-solid fa-chart-pie" />
          &nbsp;&nbsp;Overview
        </a>
        <a
          href="#"
          className="text-black text-sm block mb-2 pl-10 tracking-wide"
        >
          <i className="fa-solid fa-bag-shopping" />
          &nbsp;&nbsp;eCommerce
        </a>
        <a
          href="#"
          className="text-black text-sm block mb-2 pl-10 tracking-wide"
        >
          <i className="fa-solid fa-file" />
          &nbsp;&nbsp;Projects
        </a>
      </div>
      {/* /Dashboard Options */}
      {/* Pages  */}
      <h3 className="text-slate-500 text-sm py-4 pl-5">Pages</h3>
      <ul className="list-inside">
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-regular fa-user" />
            &nbsp;&nbsp;User Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-regular fa-clock" />
            &nbsp;&nbsp;Overview
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-solid fa-file" />
            &nbsp;&nbsp;Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-solid fa-bullhorn" />
            &nbsp;&nbsp;Campaigns
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-solid fa-file-lines" />
            &nbsp;&nbsp;Documents
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-solid fa-user-group" />
            &nbsp;&nbsp;Followers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-solid fa-user-circle" />
            &nbsp;&nbsp;Account
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-solid fa-users" />
            &nbsp;&nbsp;Corporate
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-solid fa-pen-to-square" />
            &nbsp;&nbsp;Blog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm block mb-2 pl-10 tracking-wide"
          >
            <i className="fa-regular fa-comments" />
            &nbsp;&nbsp;Social
          </a>
        </li>
      </ul>
      {/* /Pages */}
      <div className="fixed-bottom flex justify-center">
        
        <Image
          className="dark:invert"
          src="/snowui-logo.svg"
          alt="Snow UI logo"
          width={180}
          height={38}
          priority
        />
      </div>
    </aside>
    {/* /Left Side Bar */}
    {/* Center Contents */}
    <div className="md:ml-64 centered-content lg:ml-52 lg:mr-72 overflow-y-auto h-screen">
      {/* Main navigation container */}
      <nav className="flex flex-wrap items-center justify-between w-full bg-zinc-50 pb-2 shadow dark:bg-surface-dark lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
            type="button"
            data-twe-collapse-init=""
            data-twe-target="#navbarSupportedContent12"
            aria-controls="navbarSupportedContent12"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
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
          {/* Collapsible navigation container */}
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent12"
            data-twe-collapse-item=""
          >
            {/* Dashboard Icons */}
            <a href="#">
              <i className="fa-solid fa-book" />
            </a>
            <a href="#" className="pl-3">
              <i className="fa-regular fa-star" />
            </a>
            {/* Left navigation links */}
            <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
              data-twe-navbar-nav-ref=""
            >
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref="">
                {/* Dashboard link */}
                <a
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#"
                  data-twe-nav-link-ref=""
                >
                  Dashboard /
                </a>
              </li>
              <li>
                <a href="#">Default</a>
              </li>
            </ul>
          </div>
          {/* Right elements */}
          <div className="relative flex items-center">
            <form
              className="relative flex items-center"
              role="search"
              aria-label="Search form"
            >
              <i className="fa-solid fa-magnifying-glass pr-2" />
              <input
                type="search"
                className="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search input"
                id="exampleFormControlInput2"
              />
              <button
                type="submit"
                className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
                aria-label="Submit search"
              ></button>
            </form>
            {/* Light Icon */}
            <a href="#" id="toggleButton">
            <svg className="svg-inline--fa fa-sun pr-2" width={20} height={20} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path></svg>
            </a>
            {/* Clock icon */}
            <a href="#">
              <i className="fa-regular fa-clock pr-2" />
            </a>
            {/* Book Icon */}
            <a href="#">
              <i className="fas fa-book pr-2" aria-hidden="true" />
            </a>
            {/* Container with two dropdown menus */}
            <div
              className="relative"
              data-twe-dropdown-ref=""
              data-twe-dropdown-alignment="end"
            >
              {/* First dropdown trigger */}
              <a
                className="me-4 flex items-center text-secondary-500 transition duration-200 hover:text-secondary-600/70 hover:ease-in-out focus:text-secondary-600/70 active:text-secondary-600/70 motion-reduce:transition-none dark:text-secondary-500 dark:hover:text-secondary-500/80 dark:focus:text-secondary-500/80 dark:active:text-secondary-500/80"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-twe-dropdown-toggle-ref=""
                aria-expanded="false"
              >
                {/* Dropdown trigger icon */}
              </a>
              <a href="#">
                <i className="fa-regular fa-bell" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Overview & Today */}
      <div className="container py-5">
        <h3 className="text-sm font-bold float-start py-3 pl-4">Overview</h3>
        <h3 className="text-sm text-slate-500 float-end py-3 pr-4">Today</h3>
      </div>
      {/* /Overview & Today */}
      {/* Section Users Activity */}
      <section className="container mx-auto my-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="block max-w-[14rem] h-[6rem] rounded-lg bg-indigo-50 shadow-md dark:bg-surface-dark dark:text-white">
            <div className="py-4 px-3">
              <h6 className="text-sm mb-1 font-medium leading-tight text-surface/75 dark:text-neutral-300">
                Views
              </h6>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">7,265</h2>
                <h5 className="text-xs">
                  +11.01%&nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-up" />
                </h5>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="block max-w-[14rem] h-[6rem] rounded-lg bg-blue-50 text-left shadow-md dark:bg-surface-dark dark:text-white">
            <div className="py-4 px-3">
              <h6 className="text-sm mb-1 font-medium leading-tight text-surface/75 dark:text-neutral-300">
                Visits
              </h6>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">3,671</h2>
                <h5 className="text-xs">
                  -0.03%&nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-down" />
                </h5>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="block max-w-[14rem] h-[6rem] rounded-lg bg-indigo-50 text-left shadow-md dark:bg-surface-dark dark:text-white">
            <div className="py-4 px-3">
              <h6 className="text-sm mb-1 font-medium leading-tight text-surface/75 dark:text-neutral-300">
                New Users
              </h6>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">156</h2>
                <h5 className="text-xs">
                  +15.03%&nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-up" />
                </h5>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="block max-w-[14rem] h-[6rem] rounded-lg bg-blue-50 text-left shadow-md dark:bg-surface-dark dark:text-white">
            <div className="py-4 px-3">
              <h6 className="text-sm mb-1 font-medium leading-tight text-surface/75 dark:text-neutral-300">
                Active Users
              </h6>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">2,318</h2>
                <h5 className="text-xs">
                  +6.08%&nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-up" />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Section Users Activity */}
      {/* Section Zig zag chart */}
      <section className="section-zig-zag-chart">
        <div className="container mx-auto px-4">
          {/* Grid */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <canvas id="myChart" className="w-full h-64" />
            </div>
            <div className="col-span-4">
              <h3 className="font-bold text-center text-sm">
                Traffic by Website
              </h3>
              <div className="flex gap-2 my-4">
                <h4 className="text-xs">Google</h4>
                <div className="w-full bg-neutral-200 dark:bg-black">
                  <div
                    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  >
                    75%
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <h4 className="text-xs">YouTube</h4>
                <div className="w-full bg-neutral-200 dark:bg-black">
                  <div
                    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  >
                    50%
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <h4 className="text-xs">Instagram</h4>
                <div className="w-full bg-neutral-200 dark:bg-black">
                  <div
                    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  >
                    25%
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <h4 className="text-xs">Pinterest</h4>
                <div className="w-full bg-neutral-200 dark:bg-black">
                  <div
                    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  >
                    33%
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <h4 className="text-xs">Facebook</h4>
                <div className="w-full bg-neutral-200 dark:bg-black">
                  <div
                    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  >
                    47%
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <h4 className="text-xs">Twitter</h4>
                <div className="w-full bg-neutral-200 dark:bg-black">
                  <div
                    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                    role="progressbar"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "25%" }}
                  >
                    54%
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Grid */}
        </div>
      </section>
      {/* /Section Zig zag Chart */}
      {/* Section Bar & Pie Chart */}
      <section className="section-bar-pie-charts">
        <div className="container mx-auto px-4">
          {/* Grid */}
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-6">
              <canvas id="stylishBarChart" />
            </div>
            <div className="col-span-6">
              <canvas id="stylishPieChart" />
            </div>
          </div>
          {/* /Grid */}
        </div>
      </section>
      {/* /Section Bar & Pie Chart */}
    </div>
    {/* /Center Contents */}
    {/* Right Side Bar */}
    <div className="right-side-panel fixed top-0 bottom-0 right-0 border-l border-slate-500 w-72 lg:block hidden overflow-y-auto">
      {/* Notifications */}
      <h3 className="text-sm pt-3 pl-5">Notifications</h3>
      <div className="flex flex-col justify-center py-1 pl-5">
        <div>
          <a className="text-sm" href="#">
            <i className="fa-solid fa-bug" />
            &nbsp;&nbsp;You fixed a bug.
          </a>
          <h6 className="text-slate-400 pl-6">Just now</h6>
        </div>
      </div>
      <div className="flex flex-col justify-center py-1 pl-5">
        <div>
          <a className="text-sm" href="#">
            <i className="fa-regular fa-user" />
            &nbsp;&nbsp;New user registered.
          </a>
          <h6 className="text-slate-400 pl-6">59 minutes ago</h6>
        </div>
      </div>
      <div className="flex flex-col justify-center py-1 pl-5">
        <div>
          <a className="text-sm" href="#">
            <i className="fa-solid fa-bug" />
            &nbsp;&nbsp;You fixed a bug.
          </a>
          <h6 className="text-slate-400 pl-6">12 hours ago</h6>
        </div>
      </div>
      <div className="flex flex-col justify-center py-1 pl-5">
        <div>
          <a className="text-sm" href="#">
            <i className="fa-solid fa-bug" />
            &nbsp;&nbsp;Andi Lane subscribed to you.
          </a>
          <h6 className="text-slate-400 pl-6">Today, 11:59 AM</h6>
        </div>
      </div>
      {/* Notifications */}
      {/* Activties */}
      <h3 className="text-sm py-3 pl-5">Activities</h3>
      <div className="flex py-1 pl-5">
        <div className="pt-1">
          
        </div>
        <div>
          <a className="text-sm" href="#">
            &nbsp;&nbsp;Changed the style.
          </a>
          <h6 className="text-slate-400 pl-3">Just now</h6>
        </div>
      </div>
      <div className="flex py-1 pl-5">
        <div className="pt-1">
          
        </div>
        <div>
          <a className="text-sm" href="#">
            &nbsp;&nbsp;Submitted a bug.
          </a>
          <h6 className="text-slate-400 pl-3">59 minutes ago</h6>
        </div>
      </div>
      <div className="flex py-1 pl-5">
        <div className="pt-1">
          
        </div>
        <div>
          <a className="text-sm" href="#">
            &nbsp;&nbsp;Released a new version.
          </a>
          <h6 className="text-slate-400 pl-3">12 hours ago</h6>
        </div>
      </div>
      <div className="flex py-1 pl-5">
        <div className="pt-1">
          
        </div>
        <div>
          <a className="text-sm" href="#">
            &nbsp;&nbsp;Modified A data in Page X.
          </a>
          <h6 className="text-slate-400 pl-3">Today, 11:59 AM</h6>
        </div>
      </div>
      <div className="flex py-1 pl-5">
        <div className="pt-1">
          
        </div>
        <div>
          <a className="text-sm" href="#">
            &nbsp;&nbsp;Deleted a page in Project X.
          </a>
          <h6 className="text-slate-400 pl-3">Feb 2, 2024</h6>
        </div>
      </div>
      {/* /Activties */}
      {/* Contacts */}
      <h3 className="text-sm py-3 pl-5">Contacts</h3>
      <div className="flex py-2 pl-5">
        
        <a href="#" className="text-sm pl-2">
          Natali Craig
        </a>
      </div>
      <div className="flex py-2 pl-5">
        
        <a href="#" className="text-sm pl-2">
          Drew Cano
        </a>
      </div>
      <div className="flex py-2 pl-5">
        
        <a href="#" className="text-sm pl-2">
          Andi Lane
        </a>
      </div>
      <div className="flex py-2 pl-5">
        
        <a href="#" className="text-sm pl-2">
          Koray Okumus
        </a>
      </div>
      <div className="flex py-2 pl-5">
        
        <a href="#" className="text-sm pl-2">
          Kate Morrison
        </a>
      </div>
      <div className="flex py-2 pl-5">
        
        <a href="#" className="text-sm pl-2">
          Melody Macy
        </a>
      </div>
      {/* Contacts */}
    </div>
    {/* /Right Side Bar */}
  </main>
  {/* /Mian */}
    </div>
  );
}
