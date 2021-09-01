import React, { Component } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import DashboardWrapper from './dasboard-wrapper/DashboardWrapper';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-main-wrapper">
                <Header />
                <Sidebar />
                <DashboardWrapper />
            </div>
        )
    }
}
