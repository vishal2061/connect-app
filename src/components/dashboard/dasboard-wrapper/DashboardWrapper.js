import React, { Component } from 'react'
import '../dasboard-wrapper/dashboardWrapper.css';
import {
    FaArrowUp,
    FaArrowDown,
    FaCaretUp,
    FaSquareFull,
} from "react-icons/fa";
import { Doughnut, Bar, Pie, Line } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';

export default class DashboardWrapper extends Component {


    handleOnChange = () => { }


    render() {
        return (
            <div className="dashboard-wrapper">
                <div className="dashboard-finance">
                    <div className="container-fluid dashboard-content">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="page-header">
                                    <h3 className="mb-2">Finance Dashboard </h3>
                                    <p className="pageheader-text">Proin placerat ante duiullam scelerisque a velit ac porta, fusce sit amet vestibulum mi. Morbi lobortis pulvinar quam.</p>
                                    <div className="page-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><NavLink to="/dashboard" className="breadcrumb-link">Dashboard</NavLink></li>
                                                <li className="breadcrumb-item active" aria-current="page">Finance Dashboard Template</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-xl-10 col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                                <form>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text" name="daterange"
                                            value="01/01/2018 - 01/15/2018"
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Total Income</h5>
                                    <div className="card-body">
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$5,79,000</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span className="icon-circle-small icon-box-xs text-success bg-success-light">
                                                <FaArrowUp /></span><span className="ml-1">25%</span>
                                        </div>
                                    </div>
                                    <div className="card-body bg-light p-t-40 p-b-40">
                                        <div id="sparkline-revenue">
                                            <Line
                                                data={{
                                                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                                    datasets: [
                                                        {

                                                            data: [5, 5, 7, 7, 9, 5, 3, 5, 2, 4, 6, 7],
                                                            fill: false,
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgba(255, 99, 132, 0.2)',
                                                        },
                                                    ],




                                                }}
                                                options={{
                                                    scales: {
                                                        yAxes: [
                                                            {
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                },
                                                            },
                                                        ],
                                                    },
                                                    width: '99.5%',
                                                    height: '100',
                                                    lineColor: '#5969ff',
                                                    fillColor: '',
                                                    lineWidth: 2,
                                                    spotColor: undefined,
                                                    minSpotColor: undefined,
                                                    maxSpotColor: undefined,
                                                    highlightSpotColor: undefined,
                                                    highlightLineColor: undefined,
                                                    resize: true
                                                }}

                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer text-center bg-white">
                                        <NavLink to="/dashboard" className="card-link">View Details</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Total Expences</h5>
                                    <div className="card-body">
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$1,79,000</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-secondary font-weight-bold">
                                            <span className="icon-circle-small icon-box-xs text-danger bg-danger-light">
                                                <FaArrowDown /></span><span className="ml-1">15%</span>
                                        </div>
                                    </div>
                                    <div className="card-body text-center bg-light p-t-40 p-b-40">
                                        <div id="sparkline-revenue2">
                                            <Line
                                                data={{
                                                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                                    datasets: [
                                                        {

                                                            data: [3, 7, 6, 4, 5, 4, 3, 5, 5, 2, 3, 1],
                                                            fill: false,
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgba(255, 99, 132, 0.2)',
                                                        },
                                                    ],
                                                }}
                                                options={{
                                                    scales: {
                                                        yAxes: [
                                                            {
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                },
                                                            },
                                                        ],
                                                    }
                                                }}

                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer text-center bg-white">
                                        <NavLink to="/dashboard" className="card-link">View Details</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Cash on Hand</h5>
                                    <div className="card-body">
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$79,000</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span className="icon-circle-small icon-box-xs text-success bg-success-light">
                                                <FaArrowUp /> </span><span className="ml-1">25%</span>
                                        </div>
                                    </div>
                                    <div className="card-body bg-light p-t-40 p-b-40">
                                        <div id="sparkline-revenue3">
                                            <Line
                                                data={{
                                                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                                    datasets: [
                                                        {

                                                            data: [5, 3, 4, 6, 5, 7, 9, 4, 3, 5, 6, 1],
                                                            fill: false,
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgba(255, 99, 132, 0.2)',
                                                        },
                                                    ],
                                                }}
                                                options={{
                                                    scales: {
                                                        yAxes: [
                                                            {
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                },
                                                            },
                                                        ],
                                                    }
                                                }}

                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer text-center bg-white">
                                        <NavLink to="/dashboard" className="card-link">View Details</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Net Profit Margin</h5>
                                    <div className="card-body">
                                        <div className="metric-value d-inline-block">
                                            <h1 className="mb-1">$92,000</h1>
                                        </div>
                                        <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                                            <span className="icon-circle-small icon-box-xs text-success bg-success-light">
                                                <FaArrowUp /></span> <span className="ml-1">25%</span>
                                        </div>
                                    </div>
                                    <div className="card-body bg-light p-b-40 p-t-40">
                                        <div id="sparkline-revenue4">
                                            <Line
                                                data={{
                                                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                                    datasets: [
                                                        {

                                                            data: [6, 5, 3, 4, 2, 5, 3, 8, 6, 4, 5, 1],
                                                            fill: true,
                                                            backgroundColor: 'rgb(255, 99, 132)',
                                                            borderColor: 'rgba(255, 99, 132, 0.2)',
                                                        },
                                                    ],
                                                }}
                                                options={{
                                                    scales: {
                                                        yAxes: [
                                                            {
                                                                ticks: {
                                                                    beginAtZero: true,
                                                                },
                                                            },
                                                        ],
                                                    }
                                                }}

                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer text-center bg-white">
                                        <NavLink to="/dashboard" className="card-link">View Details</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">AP and AR Balance
                                    </h5>
                                    <div className="card-body">
                                        <canvas >
                                            <Bar
                                                data={{
                                                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                                    datasets: [
                                                        {
                                                            label: '# of Votes',
                                                            data: [12, 19, 3, 5, 2, 3],
                                                            backgroundColor: [
                                                                'rgba(255, 99, 132, 0.2)',
                                                                'rgba(54, 162, 235, 0.2)',
                                                                'rgba(255, 206, 86, 0.2)',
                                                                'rgba(75, 192, 192, 0.2)',
                                                                'rgba(153, 102, 255, 0.2)',
                                                                'rgba(255, 159, 64, 0.2)',
                                                            ],
                                                            borderColor: [
                                                                'rgba(255, 99, 132, 1)',
                                                                'rgba(54, 162, 235, 1)',
                                                                'rgba(255, 206, 86, 1)',
                                                                'rgba(75, 192, 192, 1)',
                                                                'rgba(153, 102, 255, 1)',
                                                                'rgba(255, 159, 64, 1)',
                                                            ],
                                                            borderWidth: 1,
                                                        },
                                                    ],
                                                }}

                                            />
                                        </canvas>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">% of Income Budget</h5>
                                    <div className="card-body">
                                        <div id="morris_gross" style={{ height: "272px" }}>
                                            <Doughnut
                                                data={{
                                                    datasets: [
                                                        {
                                                            label: '# of Votes',
                                                            data: [94, 15],
                                                            backgroundColor: [
                                                                'rgb(89, 105, 255)',
                                                                'rgb(168, 176, 255)'
                                                            ],
                                                            borderColor: [
                                                                'rgb(89, 105, 255);',
                                                                'rgb(168, 176, 255)'
                                                            ],
                                                            borderWidth: 1,
                                                        },
                                                    ],
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer bg-white">
                                        <p>Budget <span className="float-right text-dark">12,000.00</span></p>
                                        <p>Balance<span className="float-right text-dark">-2300.00 <span className="ml-2 text-secondary">
                                            <FaCaretUp />25%</span></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">% of Expenses Budget</h5>
                                    <div className="card-body">
                                        <div id="morris_profit" style={{ height: "272px" }}>
                                            <Doughnut
                                                data={{
                                                    datasets: [
                                                        {
                                                            label: '# of Votes',
                                                            data: [93, 15],
                                                            backgroundColor: [
                                                                'rgb(255, 64, 123)',
                                                                'rgb(255, 213, 225)'
                                                            ],
                                                            borderColor: [
                                                                'rgb(255, 64, 123)',
                                                                'rgb(255, 213, 225)'
                                                            ],
                                                            borderWidth: 1,
                                                        },
                                                    ],
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer bg-white">
                                        <p>Budget <span className="float-right text-dark">3500.00</span></p>
                                        <p>Balance <span className="float-right text-dark">230.00 <span className="ml-2 text-secondary">
                                            <FaCaretUp />25%</span></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">EBIT (Earnings Before Interest & Tax)</h5>
                                    <div className="card-body">
                                        <div id="ebit_morris">
                                            <Bar
                                                data={{}}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <span className="legend-item mr-3">
                                                <span className="fa-xs text-secondary mr-1 legend-tile">
                                                    <FaSquareFull /></span>
                                                <span className="legend-text">EBIT (Earnings Before Interest & Tax)</span>
                                            </span>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Cost of goods / Services <span className="float-right">1 Jan 2018 to 31 Dec 2018</span></h5>
                                    <div className="card-body">
                                        <div id="goodservice"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Disputed vs Overdue Invoices</h5>
                                    <div className="card-body">
                                        <div className="ct-chart-invoice ct-golden-section">
                                            <Pie
                                                data={{

                                                    datasets: [
                                                        {
                                                            label: '# of Votes',
                                                            data: [36, 64],
                                                            backgroundColor: [
                                                                '#ff407b',
                                                                '#5969ff'
                                                            ],
                                                            borderColor: [
                                                                '#ff407b',
                                                                '#5969ff'
                                                            ],
                                                            borderWidth: .5,
                                                        }
                                                    ],

                                                }}
                                            />
                                        </div>
                                        <div className="text-center m-t-40">
                                            <span className="legend-item mr-3">
                                                <span className="fa-xs text-primary mr-1 legend-tile">
                                                    <FaSquareFull /></span><span className="legend-text">Disputed Invoices</span>
                                            </span>
                                            <span className="legend-item mr-3">
                                                <span className="fa-xs text-secondary mr-1 legend-tile">
                                                    <FaSquareFull /></span><span className="legend-text">Overdue Invoices</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Disputed Invoices</h5>
                                    <div className="card-body">
                                        <div className="ct-chart-line-invoice ct-golden-section"></div>
                                        <div className="text-center m-t-10">
                                            <span className="legend-item mr-3">
                                                <span className="fa-xs text-primary mr-1 legend-tile">
                                                    <FaSquareFull /></span>
                                                <span className="legend-text">Disputed Invoices</span>
                                            </span>
                                            <span className="legend-item mr-3">
                                                <span className="fa-xs text-secondary mr-1 legend-tile">
                                                    <FaSquareFull /></span>
                                                <span className="legend-text">Avarage</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Accounts Payable Age</h5>
                                    <div className="card-body">
                                        <div id="account" style={{ height: "300px" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Working Capital <span className="float-right">1 Jan 2018 to 31 Dec 2018</span></h5>
                                    <div className="card-body">
                                        <div id="capital"></div>
                                        <div className="text-center m-t-10">
                                            <span className="legend-item mr-3">
                                                <span className="fa-xs text-secondary mr-1 legend-tile">
                                                    <FaSquareFull /></span>
                                                <span className="legend-text">Working Capital</span>
                                            </span>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="card">
                                    <h5 className="card-header">Inventory Turnover</h5>
                                    <div className="card-body">
                                        <div className="ct-chart-inventory ct-golden-section"></div>
                                        <div className="text-center m-t-10">
                                            <span className="legend-item mr-3">
                                                <span className="fa-xs text-primary mr-1 legend-tile">
                                                    <FaSquareFull /></span>
                                                <span className="legend-text">Turnover</span>
                                            </span>
                                            <span className="legend-item mr-3">
                                                <span className="fa-xs text-secondary mr-1 legend-tile">
                                                    <FaSquareFull /></span>
                                                <span className="legend-text">Target</span>
                                            </span>
                                            <span className="legend-item mr-3">
                                                <span className="fa-xs text-info mr-1 legend-tile">
                                                    <FaSquareFull /></span>
                                                <span className="legend-text">Acheived</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                Copyright © 2018 Concept. All rights reserved. Dashboard by <NavLink to="https://colorlib.com/wp/">Colorlib</NavLink>.
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="text-md-right footer-links d-none d-sm-block">
                                    <NavLink to="/dashboard">About</NavLink>
                                    <NavLink to="/dashboard">Support</NavLink>
                                    <NavLink to="/dashboard">Contact Us</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
