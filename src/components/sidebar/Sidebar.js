import React, { Component } from 'react'
import '../sidebar/sidebar.css';
import {
    FaUserCircle, FaRocket, FaChartPie, FaWpforms, FaTable, FaFile, FaInbox,
    FaColumns,
    FaMapMarkerAlt,
    FaFolder
} from "react-icons/fa";
import { a } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a href="/dashboard" className="d-xl-none d-lg-none" >Dashboard</a>
                        <button
                            className="navbar-hrefggler"
                            type="button"
                            data-hrefggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="hrefggle navigation">
                            <span className="navbar-hrefggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Menu
                                </li>
                                <li className="nav-item ">
                                    <a href="/dashboard"
                                        className="nav-link active"

                                        data-hrefggle="collapse"
                                        aria-expanded="false"
                                        data-target="#submenu-1"
                                        aria-controls="submenu-1">
                                        <FaUserCircle /> Dashboard <span className="badge badge-success">6</span></a>
                                    <div id="submenu-1" className="collapse submenu" >
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a href="/dashboard"
                                                    className="nav-link"

                                                    data-hrefggle="collapse"
                                                    aria-expanded="false"
                                                    data-target="#submenu-1-2"
                                                    aria-controls="submenu-1-2">
                                                    E-Commerce
                                                </a>
                                                <div id="submenu-1-2" className="collapse submenu" >
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a
                                                                className="nav-link"
                                                                href="index.html">E Commerce Dashboard</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                className="nav-link"
                                                                href="ecommerce-product.html">Product List</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                className="nav-link"
                                                                href="ecommerce-product-single.html">Product Single</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a
                                                                className="nav-link"
                                                                href="ecommerce-product-checkout.html">Product Checkout</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="dashboard-finance.html">Finance</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="dashboard-sales.html">Sales</a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    data-hrefggle="collapse"
                                                    aria-expanded="false"
                                                    data-target="#submenu-1-1"
                                                    href="index.html"
                                                    aria-controls="submenu-1-1">Infulencer</a>
                                                <div id="submenu-1-1" className="collapse submenu" >
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="dashboard-influencer.html">Influencer</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="influencer-finder.html">Influencer Finder</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="influencer-profile.html">Influencer Profile</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="/dashboard"
                                        data-hrefggle="collapse"
                                        aria-expanded="false"
                                        data-target="#submenu-2"
                                        aria-controls="submenu-2"><FaRocket /> UI Elements</a>
                                    <div id="submenu-2" className="collapse submenu" >
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/cards.html">Cards <span className="badge badge-secondary">New</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/general.html">General</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/carousel.html">Carousel</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/listgroup.html">List Group</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/typography.html">Typography</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/accordions.html">Accordions</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/tabs.html">Tabs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="/dashboard"
                                        data-hrefggle="collapse"
                                        aria-expanded="false"
                                        data-target="#submenu-3"
                                        aria-controls="submenu-3">
                                        <FaChartPie />Chart</a>
                                    <div id="submenu-3" className="collapse submenu" >
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/chart-c3.html">C3 Charts</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/chart-chartist.html">Chartist Charts</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/chart-charts.html">Chart</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/chart-morris.html">Morris</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/chart-sparkline.html">Sparkline</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/chart-gauge.html">Guage</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item ">
                                    <a
                                        className="nav-link"
                                        href="/dashboard"
                                        data-hrefggle="collapse"
                                        aria-expanded="false"
                                        data-target="#submenu-4"
                                        aria-controls="submenu-4">
                                        <FaWpforms />Forms</a>
                                    <div id="submenu-4" className="collapse submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/form-elements.html">Form Elements</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/form-validation.html">Parsely Validations</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/multiselect.html">Multiselect</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/datepicker.html">Date Picker</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/bootstrap-select.html">Bootstrap Select</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="/dashboard"
                                        data-hrefggle="collapse"
                                        aria-expanded="false"
                                        data-target="#submenu-5"
                                        aria-controls="submenu-5">
                                        <FaTable />Tables</a>
                                    <div id="submenu-5" className="collapse submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/general-table.html">General Tables</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/data-tables.html">Data Tables</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-divider">
                                    Features
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="/dashboard"
                                        data-hrefggle="collapse"
                                        aria-expanded="false"
                                        data-target="#submenu-6"
                                        aria-controls="submenu-6">
                                        <FaFile /> Pages </a>
                                    <div id="submenu-6" className="collapse submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="pages/blank-page.html">Blank Page</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/blank-page-header.html">Blank Page Header</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/login.html">Login</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/404-page.html">404 page</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/sign-up.html">Sign up Page</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/forgot-password.html">Forgot Password</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/pricing.html">Pricing Tables</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/timeline.html">Timeline</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/calendar.html">Calendar</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/sortable-nestable-lists.html">Sortable/Nestable List</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/widgets.html">Widgets</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/media-object.html">Media Objects</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/cropper-image.html">Cropper</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/color-picker.html">Color Picker</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="/dashboard"
                                        data-hrefggle="collapse"
                                        aria-expanded="false"
                                        data-target="#submenu-7"
                                        aria-controls="submenu-7">
                                        <FaInbox />Apps <span className="badge badge-secondary">New</span></a>
                                    <div id="submenu-7" className="collapse submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/inbox.html">Inbox</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/email-details.html">Email Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/email-compose.html">Email Compose</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/message-chat.html">Message Chat</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="/dashboard" className="nav-link" data-hrefggle="collapse" aria-expanded="false" data-target="#submenu-8" aria-controls="submenu-8">
                                        <FaColumns />Icons</a>
                                    <div id="submenu-8" className="collapse submenu">
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/icon-fontawesome.html">FontAwesome Icons</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/icon-material.html">Material Icons</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/icon-simple-lineicon.html">Simpleline Icon</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/icon-themify.html">Themify Icon</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/icon-flag.html">Flag Icons</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/icon-weather.html">Weather Icon</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="/dashboard" className="nav-link" data-hrefggle="collapse" aria-expanded="false" data-target="#submenu-9" aria-controls="submenu-9">
                                        <FaMapMarkerAlt />Maps</a>
                                    <div id="submenu-9" className="collapse submenu" >
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/map-google.html">Google Maps</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/map-vechrefr.html">Vechrefr Maps</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="index.html"
                                        className="nav-link"
                                        data-hrefggle="collapse"
                                        aria-expanded="false"
                                        data-target="#submenu-10"
                                        aria-controls="submenu-10">
                                        <FaFolder />Menu Level</a>
                                    <div id="submenu-10" className="collapse submenu" >
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a href="/dashboard" className="nav-link">Level 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/dashboard" className="nav-link" data-hrefggle="collapse" aria-expanded="false" data-target="#submenu-11" aria-controls="submenu-11">Level 2</a>
                                                <div id="submenu-11" className="collapse submenu" >
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item">
                                                            <a href="/dashboard" className="nav-link">Level 1</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a href="/dashboard" className="nav-link">Level 2</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/dashboard" className="nav-link">Level 3</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
