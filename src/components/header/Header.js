import React, { Component } from 'react';
import '../header/header.css';
import { FaBell, FaBuromobelexperte } from "react-icons/fa";
import avatar1 from '../../assests/images/avatar-1.jpg';
import avtar2 from '../../assests/images/avatar-2.jpg'
import avatar3 from '../../assests/images/avatar-3.jpg'
import avatar4 from '../../assests/images/avatar-4.jpg';
import avatar5 from '../../assests/images/avatar-5.jpg';
import slack from '../../assests/images/slack.png';
import mail_chimp from '../../assests/images/mail_chimp.png';
import bitbucket from '../../assests/images/bitbucket.png';
import dropbox from '../../assests/images/dropbox.png';
import github from '../../assests/images/github.png';
import dribbble from '../../assests/images/dribbble.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="dashboard-header">
                <nav className="navbar navbar-expand-lg bg-white fixed-top">
                    <NavLink className="navbar-brand" to="index.html">Concept</NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-right-top">
                            <li className="nav-item">
                                <div id="custom-search" className="top-search-bar">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Search.."
                                    />
                                </div>
                            </li>
                            <li className="nav-item dropdown notification">
                                <NavLink to="/dashboard" className="nav-link nav-icons" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FaBell /> <span className="indicator"></span></NavLink>
                                <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                                    <li>
                                        <div className="notification-title"> Notification</div>
                                        <div className="notification-list">
                                            <div className="list-group">
                                                <NavLink to="/dashboard" className="list-group-item list-group-item-action active">
                                                    <div className="notification-info">
                                                        <div className="notification-list-user-img">
                                                            <img
                                                                src={avtar2}
                                                                alt="a2"
                                                                className="user-avatar-md rounded-circle" />
                                                        </div>
                                                        <div className="notification-list-user-block">
                                                            <span className="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                                                            <div className="notification-date">2 min ago</div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <NavLink to="/dashboard" className="list-group-item list-group-item-action">
                                                    <div className="notification-info">
                                                        <div className="notification-list-user-img">
                                                            <img
                                                                src={avatar3}
                                                                alt="a3"
                                                                className="user-avatar-md rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="notification-list-user-block">
                                                            <span className="notification-list-user-name">John Abraham </span>is now following you
                                                            <div className="notification-date">2 days ago</div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <NavLink to="/dashboard" className="list-group-item list-group-item-action">
                                                    <div className="notification-info">
                                                        <div className="notification-list-user-img">
                                                            <img
                                                                src={avatar4}
                                                                alt="a4"
                                                                className="user-avatar-md rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="notification-list-user-block"><span className="notification-list-user-name">Monaan Pechi</span> is watching your main repository
                                                            <div className="notification-date">2 min ago</div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <NavLink to="/dashboard" className="list-group-item list-group-item-action">
                                                    <div className="notification-info">
                                                        <div className="notification-list-user-img">
                                                            <img
                                                                src={avatar5}
                                                                alt="a5"
                                                                className="user-avatar-md rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="notification-list-user-block"><span className="notification-list-user-name">Jessica Caruso</span>accepted your invitation to join the team.
                                                            <div className="notification-date">2 min ago</div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list-footer"> <NavLink to="/dashboard" >View all notifications</NavLink></div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown connection">
                                <NavLink to="/dashboard" className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <FaBuromobelexperte /> </NavLink>
                                <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                                    <li className="connection-list">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                                <NavLink to="/dashboard" className="connection-item">
                                                    <img
                                                        src={github}
                                                        alt="github" /> <span>Github</span></NavLink>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                                <NavLink to="/dashboard" className="connection-item">
                                                    <img
                                                        src={dribbble}
                                                        alt="dribble" />
                                                    <span>Dribbble</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                                <NavLink to="/dashboard" className="connection-item">
                                                    <img
                                                        src={dropbox}
                                                        alt="dropbox" />
                                                    <span>Dropbox</span>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                                <NavLink to="/dashboard" className="connection-item">
                                                    <img
                                                        src={bitbucket}
                                                        alt="bitbucket" />
                                                    <span>Bitbucket</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                                <NavLink to="/dashboard" className="connection-item">
                                                    <img
                                                        src={mail_chimp}
                                                        alt="mail_chimp.png"
                                                    />
                                                    <span>Mail chimp</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                                <NavLink to="/dashboard" className="connection-item">
                                                    <img
                                                        src={slack}
                                                        alt="slack"
                                                    />
                                                    <span>Slack</span>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="conntection-footer"><NavLink to="/dashboard" >More</NavLink></div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown nav-user">
                                <NavLink to="/dashboard"
                                    className="nav-link nav-user-img"

                                    id="navbarDropdownMenuLink2"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <img
                                        src={avatar1}
                                        alt="a1"
                                        className="user-avatar-md rounded-circle" />
                                </NavLink>
                                <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                                    <div className="nav-user-info">
                                        <h5 className="mb-0 text-white nav-user-name">John Abraham </h5>
                                        <span className="status"></span><span className="ml-2">Available</span>
                                    </div>
                                    <NavLink to="/dashboard" className="dropdown-item" ><i className="fas fa-user mr-2"></i>Account</NavLink>
                                    <NavLink to="/dashboard" className="dropdown-item" ><i className="fas fa-cog mr-2"></i>Setting</NavLink>
                                    <NavLink to="/dashboard" className="dropdown-item" ><i className="fas fa-power-off mr-2"></i>Logout</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;
