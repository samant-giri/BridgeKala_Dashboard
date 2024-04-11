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
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineStar } from "react-icons/md";
import SearchBox from "./SearchBox";

const SecondPage = () => {

  const columns = [
    { Header: "Position", accessor: "eventName" },
    { Header: "Time", accessor: "eventStart" },
    { Header: "Info", accessor: "eventEnd" },
    { Header: "Quantity", accessor: "clientName" },
    { Header: "", accessor: "contactInfo" },
  ];

  const data = [
    {
      eventName: "Camera 1 (Video)",
      eventStart: "9 am - 7 pm",
      eventEnd: "LP Default",
      clientName: "20",
      contactInfo: <SearchBox/>,
    },
    {
      eventName: "Camera 1 (Video)",
      eventStart: "9 am - 7 pm",
      eventEnd: "LP Default",
      clientName: "20",
      contactInfo: <SearchBox/>,
    },
    {
      eventName: "Camera 1 (Video)",
      eventStart: "9 am - 7 pm",
      eventEnd: "LP Default",
      clientName: "20",
      contactInfo: <SearchBox/>,
    },
    {
      eventName: "Camera 1 (Video)",
      eventStart: "9 am - 7 pm",
      eventEnd: "LP Default",
      clientName: "20",
      contactInfo: <SearchBox/>,
    },
  ]

  return (
    <>
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
                  New Requests
                  <IoChevronUpSharp />
                </p>
                <p>Estimate</p>
                <p>Events</p>
                <p>Partial Requests</p>
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
                <p>Admin</p>
                <p>Clients</p>
                <p>Coordinators</p>
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
            <div className="right2-header">
              <p>
                Event Name <span>(Venue Details)</span>
              </p>
            </div>
            <div className="span-collection">
              <span>Event Details</span>
              <span>Assign Coordinator/Coordinator</span>
              <span>Session Management</span>
              <span>Generate SHOW</span>
            </div>

            <div className="coor-detail">
              <div className="left">
                <p>Assign Coordinator</p>
                <div className="box">
                  <input type="text" placeholder="Search coordinator" />
                  <FaAngleDown />
                </div>
                <p>Add New Coordinator</p>
              </div>
              <div className="right">
                <p className="first">
                  Event Name <span>(Venue Here)</span>
                </p>
                <div className="second">
                  <p>
                    Start: <strong>12-12-2023</strong>
                  </p>
                  <p>
                    End: <strong>15-12-2023</strong>
                  </p>
                </div>
                <p className="third">
                  Venue Address:{" "}
                  <strong>Some Location 12, Name Here, City, State</strong>
                </p>
              </div>
            </div>

            <div className="contractor">
              <p>Assign Contractor</p>
              <div className="add">
                <div className="c-box">
                  <div className="c-detail">
                    <p>
                      Meeting Room 1 <MdOutlineStar className="star" />{" "}
                      <span>12 Positions</span>
                    </p>
                    <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                  </div>
                  <div className="c-detail">
                    <p>
                      Meeting Room 1 <MdOutlineStar className="star" />{" "}
                      <span>12 Positions</span>
                    </p>
                    <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                  </div>
                  <div className="c-detail">
                    <p>
                      Meeting Room 1 <MdOutlineStar className="star" />{" "}
                      <span>12 Positions</span>
                    </p>
                    <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                  </div>
                </div>
                <div className="table2">
                  <p>Positions</p>
                  <div className="table22">
                    <EventTable columns={columns} data={ data} bgcolor={"black"} />
                  </div>
                </div>
              </div>
            </div>

            <div className="bttn">
              <button>Save Edits</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
