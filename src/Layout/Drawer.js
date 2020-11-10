import React, { Component } from 'react';  
  
export class Drawer extends Component {  
    render() {  

        return(
            <div>
                {/* <!-- Drawer --> */}

            <div class="mdk-drawer js-mdk-drawer"
                 id="default-drawer">
                <div class="mdk-drawer__content">
                    <div class="sidebar sidebar-dark-pickled-bluewood sidebar-left"
                         data-perfect-scrollbar>

                        {/* <!-- Sidebar Content --> */}

                        <div class="d-flex align-items-center navbar-height">
                            <form action="index.html"
                                  class="search-form search-form--black mx-16pt pr-0 pl-16pt">
                                <input type="text"
                                       class="form-control pl-0"
                                       placeholder="Search">
                                <button class="btn"
                                        type="submit" /><i class="material-icons">search</i></button>
                            
                        </div>

                        <a href="index.html"
                           class="sidebar-brand ">
                            {/* <!-- <img class="sidebar-brand-icon" src="../../public/images/illustration/student/128/white.svg" alt="Luma"> --> */}

                            <span class="avatar avatar-xl sidebar-brand-icon h-auto">

                                <span class="avatar-title rounded bg-primary"><img src="../../public/images/illustration/student/128/white.svg"
                                         class="img-fluid"
                                         alt="logo" /></span>

                            </span>

                            <span>Luma</span>
                        </a>

                        <div class="application-shell-content">
                            <span class="sidebar-text">Add your sidebar content here.</span>
                        </div>

                        {/* <!-- // END Sidebar Content --> */}

                    </div>
                </div>
            </div>
            )
        }
    }

export default Drawer;