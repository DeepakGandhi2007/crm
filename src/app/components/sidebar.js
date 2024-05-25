"use client";

import React, { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import TokenDecoder from './Cookies';
import { useRouter } from 'next/navigation';
import axios from 'axios'; 
const Sidebar = () => {
    const [showSubMenu, setShowSubMenu] = useState(null);

    const handleToggleSubMenu = (menu) => {
        setShowSubMenu(showSubMenu === menu ? null : menu);
    };
  
  const handleLogout = () => {
        axios.post('/api/users/logout')
            .then(() => {
                window.location.href = '/login';
            })
            .catch(error => {
                console.error('Failed to logout inactive user:', error);
            });
    };

     const userdata = TokenDecoder();
    const userid = userdata ? userdata.id : null;
    const username = userdata ? userdata.name : null;
    const userrole = userdata ? userdata.role : null;

    return (
        <>
            <div className="vertical-menu">
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                      <li>
                               <p className="px-4 mb-3" >
                                    <i className="ri-hammer-fill"></i>
                                    <span style={{ cursor: "pointer" }} className="ri-shut-down-line float-end me-1 text-danger h-logout" onClick={handleLogout}></span>
                                    <span> {username}</span>
                                </p>
                            </li>
                        
                      
                            <li>
                                <Link href={'/profile'}>
                                    <i className="ri-dashboard-line"></i>
                                    <span className="badge rounded-pill bg-success float-end">3</span>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                        {(userrole === "Admin" || userrole === "HR") && (
                        <li>
                            <Link href={'/Staff'}>
                                <i className="fas fa-user"></i>
                                <span className="badge rounded-pill bg-success float-end">3</span>
                                <span>Staff</span>
                            </Link>
                        </li>
              )}
                        <li>
                            <a onClick={() => handleToggleSubMenu('leads')}>
                                <i className="ri-notification-2-fill"></i>
                                <span>Leads <i className="has-arrow waves-effect float-right"></i></span>
                            </a>
                            <ul className={`sub-menu ${showSubMenu === 'leads' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={showSubMenu === 'leads'}>
                                <li><Link href={'/Cold'}>Community Leads</Link></li>
                            </ul>
                        </li>

                        {userrole === "Admin" ? (
                            <li>
                                <a onClick={() => handleToggleSubMenu('reports')}>
                                    <i className=" ri-line-chart-fill"></i>
                                    <span>Reports <i className="has-arrow waves-effect float-right"></i></span>
                                </a>
                                <ul className={`sub-menu ${showSubMenu === 'reports' ? 'mm-show' : 'mm-collapse'}`} aria-expanded={showSubMenu === 'reports'}>
                                    <li><Link href={'/Timesheet'}>TimeSheet</Link></li>
                                    <li><Link href={'/report'}>Detailed Progress Report</Link></li>
                                </ul>
                            </li>
                        ) : null}
                        
                        <li>
                            <Link href={'/Invoice'}>
                                <i className="fas fa-user"></i>
                                <span className="badge rounded-pill bg-success float-end">3</span>
                                <span>Your Deals</span>
                            </Link>
                        </li>
                     
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;


