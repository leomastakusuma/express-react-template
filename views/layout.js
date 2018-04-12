import React,{Component} from 'react';
import USER from '../views/users'
export default class Layout extends Component {
  render() {
    return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <meta charset="utf-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
                    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="vendor/themify-icons/css/themify-icons.css"/>
                    <link rel="stylesheet" href="vendor/pace/themes/orange/pace-theme-minimal.css"/>
                    <link rel="stylesheet" href="vendor/datatables/css-main/jquery.dataTables.min.css"/>
                    <link rel="stylesheet" href="css/main.css"/>
                    <link rel="stylesheet" href="css/skins/sidebar-nav-darkgray.css" type="text/css"/>
                    <link rel="stylesheet" href="css/skins/navbar3.css" type="text/css"/>
                </head>    
                <body>
                    <div id="wrapper">
                        <nav class="navbar navbar-default navbar-fixed-top">
                            <div class="brand">
                                <a href=""><img src="img/logo-white.png" alt="Logo" class="img-responsive logo"/></a>
                            </div>
                            <div class="container-fluid">
                                <div id="tour-fullwidth" class="navbar-btn">
                                    <button type="button" class="btn-toggle-fullwidth"><i class="ti-arrow-circle-left"></i></button>
                                </div>
                                <div id="navbar-menu">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="img/user.png" alt="Avatar"/><span>LEO MASTA KUSUMA</span></a>
                                            <ul class="dropdown-menu logged-user-menu">
                                                <li><a href="#"><i class="ti-settings"></i> <span>Settings</span></a></li>
                                                <li><a href="<?php echo site_url('goLogout')?>"><i class="ti-power-off"></i> <span>Logout</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div id="sidebar-nav" class="sidebar">
                            <nav>
                                <ul class="nav" id="sidebar-nav-menu">
                                    <li class="panel">
                                        <a href="" class="active"><i class="ti-dashboard"></i><span class="title">Dashboards</span></a>
                                    </li>
                                    <li class="panel">
                                        <a href="#usermanagement" data-toggle="collapse" data-parent="#sidebar-nav-menu"  class="collapsed "><i class="ti-user"></i> <span class="title">User Management</span> <i class="icon-submenu ti-angle-left"></i></a>
                                        <div id="usermanagement" class="collapse ">
                                            <ul class="submenu">
                                                    <li><a href="" class="">User Level</a></li>
                                                    <li><a href="" class="">User Acces Control</a></li>
                                                    <li><a href="" class="">User</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <button type="button" class="btn-toggle-minified" title="Toggle Minified Menu"><i class="ti-arrows-horizontal"></i></button>
                            </nav>
                        </div>

                        <div class="main">
                                <USER/>
                        </div>
                        <div class="clearfix"></div>
                        <footer>
                            <div class="container-fluid">
                                <p class="copyright">&copy; 2018 <a href="#">ION</a>. All Rights Reserved.</p>
                            </div>
                        </footer>
                    </div>    
                </body>
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="vendor/pace/pace.min.js"></script>
                <script src="vendor/switchery/switchery.min.js"></script>
                <script src="scripts/klorofilpro-common.js"></script>
            </html>
    );
  }
}

