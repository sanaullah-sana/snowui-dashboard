import Image from "next/image";
import React from "react";
import ChartComponent from "@/components/ChartComponent";

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
      <div className="flex items-center py-5 pl-5">
      <Image
          className="dark:invert"
          src="/img-profile-ByeWind.jpg"
          alt="Bye wind Profile"
          width={25}
          height={25}
          priority
        />
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
          className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
        >
          <svg className="svg-inline--fa fa-chart-pie" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M304 240l0-223.4c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16L304 240zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4L256 288 412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288l238.4 0z"></path></svg>
          &nbsp;&nbsp;Overview
        </a>
        <a
          href="#"
          className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
        >
          <svg className="svg-inline--fa fa-bag-shopping" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bag-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg>
          &nbsp;&nbsp;eCommerce
        </a>
        <a
          href="#"
          className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
        >
          <svg className="svg-inline--fa fa-file" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"></path></svg>
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
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >            <svg className="svg-inline--fa fa-user" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"></path></svg>
            &nbsp;&nbsp;User Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >
            <svg className="svg-inline--fa fa-clock" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
            &nbsp;&nbsp;Overview
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >
            <svg className="svg-inline--fa fa-file" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"></path></svg>
            &nbsp;&nbsp;Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >            <svg className="svg-inline--fa fa-bullhorn" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullhorn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z"></path></svg>
            &nbsp;&nbsp;Campaigns
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >
            <svg className="svg-inline--fa fa-file-lines" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-lines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
            &nbsp;&nbsp;Documents
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >
            <svg className="svg-inline--fa fa-user-group" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-group" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"></path></svg>
            &nbsp;&nbsp;Followers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >
            <svg className="svg-inline--fa fa-circle-user" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path></svg>
            &nbsp;&nbsp;Account
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >
            <svg className="svg-inline--fa fa-users" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg>
            &nbsp;&nbsp;Corporate
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >
            <svg className="svg-inline--fa fa-pen-to-square" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"></path></svg>
            &nbsp;&nbsp;Blog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-sm mb-2 pl-10 tracking-wide flex items-center"
          >
            <svg className="svg-inline--fa fa-comments" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.8 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"></path></svg>
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
            <svg className="svg-inline--fa fa-book" width={20} height={20} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
            </a>
            <a href="#" className="pl-3">
            <svg className="svg-inline--fa fa-star" width={20} height={20} aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"></path></svg>
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
            <svg className="svg-inline--fa fa-sun pr-2" width={24} height={24} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path></svg>
            </a>
            {/* Clock icon */}
            <a href="#">
            <svg className="svg-inline--fa fa-clock pr-2" width={24} height={24} aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
            </a>
            {/* Book Icon */}
            <a href="#">
            <svg className="svg-inline--fa fa-book pr-2" width={22} height={22} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
            </a>
            {/* Bell Icon */}
            <a href="#">
            <svg className="svg-inline--fa fa-bell" width={20} height={20} aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path></svg>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="block max-w-[14rem] h-[6rem] rounded-lg bg-blue-500 shadow-md dark:bg-surface-dark dark:text-white text-white">
            <div className="py-4 px-3">
              <h6 className="text-sm mb-1 font-medium leading-tight text-surface/75 dark:text-neutral-300">
                Views
              </h6>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">7,265</h2>
                <h5 className="text-xs">
                  +11.01%&nbsp;&nbsp;
                </h5>
                <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
  <path d="M182.6 48.6c-9.4-9.4-24.6-9.4-33.9 0l-144 144c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L144 121.9V456c0 13.3 10.7 24 24 24s24-10.7 24-24V121.9l105.4 105.4c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-144-144z"/>
                   </svg>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="block max-w-[14rem] h-[6rem] rounded-lg bg-green-500 text-left shadow-md dark:bg-surface-dark dark:text-white text-white">
            <div className="py-4 px-3">
              <h6 className="text-sm mb-1 font-medium leading-tight text-surface/75 dark:text-neutral-300">
                Visits
              </h6>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">3,671</h2>
                <h5 className="text-xs">
                  -0.03%&nbsp;&nbsp;
                </h5>
                <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
  <path d="M143 24c-13.3 0-24 10.7-24 24v334.1L13.7 276.7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l144 144c9.4 9.4 24.6 9.4 33.9 0l144-144c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L168 382.1V48c0-13.3-10.7-24-24-24z"/>
</svg>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="block max-w-[14rem] h-[6rem] rounded-lg bg-red-500 text-left shadow-md dark:bg-surface-dark text-white">
            <div className="py-4 px-3">
              <h6 className="text-sm mb-1 font-medium leading-tight text-surface/75 dark:text-neutral-300">
                New Users
              </h6>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">156</h2>
                <h5 className="text-xs">
                  +15.03%&nbsp;&nbsp;
                </h5>
                <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
            <path d="M182.6 48.6c-9.4-9.4-24.6-9.4-33.9 0l-144 144c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L144 121.9V456c0 13.3 10.7 24 24 24s24-10.7 24-24V121.9l105.4 105.4c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-144-144z"/>
                   </svg>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="block max-w-[14rem] h-[6rem] rounded-lg bg-black text-left shadow-md dark:bg-surface-dark text-white">
            <div className="py-4 px-3">
              <h6 className="text-sm mb-1 font-medium leading-tight text-surface/75 dark:text-neutral-300">
                Active Users
              </h6>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">2,318</h2>
                <h5 className="text-xs">
                  +6.08%&nbsp;&nbsp;
                </h5>
                <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
  <path d="M182.6 48.6c-9.4-9.4-24.6-9.4-33.9 0l-144 144c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L144 121.9V456c0 13.3 10.7 24 24 24s24-10.7 24-24V121.9l105.4 105.4c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-144-144z"/>
                   </svg>
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
              <ChartComponent />
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
      <h3 className="text-sm py-3 pl-5">Notifications</h3>
      <div className="flex flex-col justify-center py-1 pl-5">
        <div className="flex items-start gap-2">
          <a className="text-sm" href="#">
          <svg className="svg-inline--fa fa-bug" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"></path></svg>
            </a>
          <div>
          <h5 className="text-sm">You fixed a bug.</h5>
          <h6 className="text-slate-400 text-sm">Just now</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-1 pl-5">
        <div className="flex items-start gap-2">
          <a className="text-sm" href="#">
          <svg className="svg-inline--fa fa-user" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"></path></svg>
            </a>
          <div>
          <h5 className="text-sm">New user registered.</h5>
          <h6 className="text-slate-400 text-sm">59 minutes ago</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-1 pl-5">
        <div className="flex items-start gap-2">
          <a className="text-sm" href="#">
          <svg className="svg-inline--fa fa-bug" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"></path></svg>
            </a>
          <div>
          <h5 className="text-sm">You fixed a bug.</h5>
          <h6 className="text-slate-400 text-sm">12 hours ago</h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-1 pl-5">
        <div className="flex items-start gap-2">
          <a className="text-sm" href="#">
          <svg className="svg-inline--fa fa-bug" width={15} height={15} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c53 0 96 43 96 96l0 3.6c0 15.7-12.7 28.4-28.4 28.4l-135.1 0c-15.7 0-28.4-12.7-28.4-28.4l0-3.6c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4l112 0c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5l64.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6L272 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 239.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.3 0c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"></path></svg>
            </a>
          <div>
          <h5 className="text-sm pb-1"> Andi Lane subscribed to you.</h5>
          <h6 className="text-slate-400 text-sm">Today, 11:59 AM</h6>
          </div>
        </div>
      </div>
      {/* Notifications */}
      {/* Activties */}
      <h3 className="text-sm py-3 pl-5">Activities</h3>
      <div className="flex py-1 pl-5">
        <div className="pt-1">
        <Image
          className="dark:invert"
          src="/activity-1.jpg"
          alt="Activity 1"
          width={25}
          height={25}
          priority
        />
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
        <Image
          className="dark:invert"
          src="/activity-2.jpg"
          alt="Activity 2"
          width={25}
          height={25}
          priority
        />
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
        <Image
          className="dark:invert"
          src="/activity-3.jpg"
          alt="Activity 3"
          width={25}
          height={25}
          priority
        />
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
        <Image
          className="dark:invert"
          src="/activity-4.jpg"
          alt="Activity 4"
          width={25}
          height={25}
          priority
        />
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
        <Image
          className="dark:invert"
          src="/activity-5.jpg"
          alt="Activity 5"
          width={25}
          height={25}
          priority
        />
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
      <Image
          className="dark:invert"
          src="/img-contact-1.jpg"
          alt="Contact 1"
          width={25}
          height={25}
          priority
        />
        <a href="#" className="text-sm pl-2">
          Natali Craig
        </a>
      </div>
      <div className="flex py-2 pl-5">
      <Image
          className="dark:invert"
          src="/img-contact-2.jpg"
          alt="Contact 2"
          width={25}
          height={25}
          priority
        />
        <a href="#" className="text-sm pl-2">
          Drew Cano
        </a>
      </div>
      <div className="flex py-2 pl-5">
      <Image
          className="dark:invert"
          src="/img-contact-3.jpg"
          alt="Contact 3"
          width={25}
          height={25}
          priority
        />
        <a href="#" className="text-sm pl-2">
          Andi Lane
        </a>
      </div>
      <div className="flex py-2 pl-5">
      <Image
          className="dark:invert"
          src="/img-contact-4.jpg"
          alt="Contact 4"
          width={25}
          height={25}
          priority
        />
        <a href="#" className="text-sm pl-2">
          Koray Okumus
        </a>
      </div>
      <div className="flex py-2 pl-5">
      <Image
          className="dark:invert"
          src="/img-contact-5.jpg"
          alt="Contact 5"
          width={25}
          height={25}
          priority
        />
        <a href="#" className="text-sm pl-2">
          Kate Morrison
        </a>
      </div>
      <div className="flex py-2 pl-5">
      <Image
          className="dark:invert"
          src="/img-contact-6.jpg"
          alt="Contact 6"
          width={25}
          height={25}
          priority
        />
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
