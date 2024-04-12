import React from "react";
import "../Animation.css";
import { BsExclamationSquare } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronUpCircleSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import EventTable from "./Table";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Layout = () => {

  const columns = [
    { Header: "", accessor: "icon" },
    { Header: "Event Name", accessor: "eventName" },
    { Header: "Event Start", accessor: "eventStart" },
    { Header: "Event End", accessor: "eventEnd" },
    { Header: "Client Name", accessor: "clientName" },
    { Header: "Contact Info", accessor: "contactInfo" },
    { Header: "Venue", accessor: "venue" },
    { Header: "City", accessor: "city" },
    { Header: "State", accessor: "state" },
    { Header: "Zip Code", accessor: "zipCode" },
  ];

  const data = [
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    {
      icon : <FaRegEye/>,
      eventName: "Field name",
      eventStart: "Jan 12, 2014",
      eventEnd: "Jan 14, 2014",
      clientName: "Muhammad Asad",
      contactInfo: "+1234 566 7890",
      venue: "Lorem Ipsum Dolor Sit Amet",
      city: "City A",
      state: "State A",
      zipCode: "12345",
    },
    
    
    
    
    
    // Add more objects for additional rows as needed
  ];

  return (
    <div style={{
      height: "100%",
      width:"100%",

    }}>
      <div className="absolute">
        <div className="absolute insert-0 justify-center">
          <div className="top">
            <div className="bg-shape1 bg-violet opacity-50 bg-blur"></div>
          </div>
          <div className="down">
            <div className="bg-shape2 bg-blue opacity-50 bg-blur"></div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <div className="icon">
            <BsExclamationSquare className="icon-color" />
            <IoNotificationsOutline className="icon-color" />
          </div>
          <div className="greet">
            <h4>
              Hi, <span>Muhammad Asad</span>
            </h4>
            <p>Welcome back!</p>
          </div>
          <img
            src="https://t4.ftcdn.net/jpg/06/28/04/87/360_F_628048704_BIm31smMFDYYFCGItT45pS2agYStYZmm.jpg"
            alt=""
          />
        </div>
        <div className="hero">
          <div className="left blur-bg">
            <div className="events">
              <h3>
                Events
                <IoChevronUpSharp />
              </h3>
              <div className="event-down">
                <p>
                  <a
                    style={{ textDecoration: "none", color: "violet" }}
                    href="/second"
                  >
                    New Requests
                  </a>
                  <IoChevronUpSharp />
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/second"
                  >
                    Estimate
                  </a>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/second"
                  >
                    Events
                  </a>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/second"
                  >
                    Partial Requests
                  </a>
                </p>
              </div>
            </div>
            <h3>Positions</h3>
            <h3>Contrators</h3>
            <div className="user">
              <h3>
                Users
                <IoChevronUpSharp />
              </h3>
              <div className="user-down">
                <p>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/second"
                  >
                    Admin
                  </a>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/second"
                  >
                    Clients
                  </a>
                </p>
                <p>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href="/second"
                  >
                    Coordinators
                  </a>
                </p>
              </div>
            </div>
            <h3>Profile</h3>
            <div className="btn">
              <button className="btn-logout">
                <HiOutlineLogout className="logout-icon" />
                Logout
              </button>
            </div>
          </div>
          <div className="right blur-bg">
            <div className="right-header">
              <p>Event Requests</p>
              <div className="search">
                <div className="search-box">
                  <FiSearch className="icon" />
                  <input type="text" placeholder="Search here" />
                </div>
                <span>
                  <AiOutlinePlus />
                </span>
              </div>
            </div>
            <div className="table">
              <EventTable
                columns={columns}
                data={data}
                bgcolor={"rgb(152, 64, 160)"}
              />
            </div>
            <div className="pagination">
              <MdOutlineKeyboardBackspace />
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
