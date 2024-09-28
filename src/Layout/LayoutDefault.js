

import React from 'react';
import { NavLink, Outlet, Navigate, useNavigate} from 'react-router-dom';
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'; // Import Breadcrumbs

import './LayoutDefault.scss';

function LayoutDefault() {
    const navigator= useNavigate();
    const backHome=()=>{
        navigator("/")
    }
    return (
        <div className="layout-default">
            <header className="layout-default_arm">
                <div onClick={backHome} className="layout-default_arm_logo">Logo</div>
                <div onClick={backHome} className="layout-default_arm_content">Admin Management System</div>
                <button className='layout-default_arm_button'>Log out </button>
            </header>
            <div className="layout-default_body">           
                {/* <Breadcrumbs
                    separator=" > "
                    item={NavLink}
                    finalItem={'span'}
                    finalProps={{ className: 'breadcrumb-final' }}
                /> */}
                <aside className="layout-default_body_header">
                    <div className="layout-default_menu">
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/doctor" className={({ isActive }) => isActive ? 'active' : ''}>Here doctor</NavLink>
                                <ul className='menu_sub'>
                                    {/* <li>
                                        <NavLink to="/doctor/adddoctor" className={({ isActive }) => isActive ? 'active' : ''}>AddDoctor</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/doctor/doctordetails" className={({ isActive }) => isActive ? 'active' : ''}>DoctorDetails</NavLink>
                                    </li> */}
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/patient" className={({ isActive }) => isActive ? 'active' : ''}>Here patient</NavLink>
                                <ul className='menu_sub'>
                                    {/* <li>
                                        <NavLink to="/patient/addpatient" className={({ isActive }) => isActive ? 'active' : ''}>AddPatient</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/patient/patientdetails" className={({ isActive }) => isActive ? 'active' : ''}>PatientDetails</NavLink>
                                    </li> */}
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/service" className={({ isActive }) => isActive ? 'active' : ''}>Here service</NavLink>
                                <ul className='menu_sub'>
                                    {/* <li>
                                        <NavLink to="/service/addservice" className={({ isActive }) => isActive ? 'active' : ''}>AddService</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/service/servicedetails" className={({ isActive }) => isActive ? 'active' : ''}>ServiceDetails</NavLink>
                                    </li> */}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </aside>
                <main className="layout-default_body_main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default LayoutDefault;









































// function LayoutDefault() {
//     const navLinkActive = (e) => {
//         console.log(e);
//     };
//     return (
//         <div className="layout-default">
//             <header className="layout-default_header">
//                 <div className="layout-default_logo">Logo</div>
//                 <div className="layout-default_menu">
//                     <ul>
//                         <li>
//                             <NavLink to="/" className={navLinkActive} activeClassName="active">Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/doctor" className={navLinkActive} activeClassName="active">Here doctor</NavLink>
//                             <ul className='menu_sub'>
//                                 <li>
//                                     <NavLink to="/doctor/adddoctor" className={navLinkActive} activeClassName="active">AddDoctor</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/doctor/doctordetails" className={navLinkActive} activeClassName="active">Doctordetail</NavLink>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li>
//                             <NavLink to="/patient" className={navLinkActive} activeClassName="active">Here doctor</NavLink>
//                             <ul className='menu_sub'>
//                                 <li>
//                                     <NavLink to="/patient/addpatient" className={navLinkActive} activeClassName="active">AddPatient</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/patient/patientdetails" className={navLinkActive} activeClassName="active">PatientDetails</NavLink>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li>
//                             <NavLink to="/service" className={navLinkActive} activeClassName="active">Here service</NavLink>
//                             <ul className='menu_sub'>
//                                 <li>
//                                     <NavLink to="/service/addservice" className={navLinkActive} activeClassName="active">AddDoctor</NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/service/addservice" className={navLinkActive} activeClassName="active">Doctordetail</NavLink>
//                                 </li>
//                             </ul>
//                         </li>
                        
//                     </ul>
//                 </div>
//             </header>
//             <main className="layout-default_main">
//                 <Outlet />
//             </main>
//             <footer className="layout-default_footer">
//                 Copyright..
//             </footer>
//         </div>
//     );
// }

// export default LayoutDefault;