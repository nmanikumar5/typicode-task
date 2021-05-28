import React from "react";

import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";

export const SidebarData = [
    {
        title: "Posts",
        path: "/posts",
        icon: <BsIcons.BsFilePost />,
        enabled: true,
        dataField: 'posts'
    },
    {
        title: "Albums",
        path: "/albums",
        icon: <IoIcons.IoMdAlbums />,
        enabled: false,
        enabledFieldNotEmpty: 'posts',
        dataField: 'albums'
    },
    {
        title: "Users-Todos",
        path: "#",
        icon: <RiIcons.RiMenu2Line />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        enabled: false,
        enabledFieldNotEmpty: 'albums',
        subNav: [
            {
                title: "Users",
                path: "/user-todos/users",
                icon: <FiIcons.FiUsers />,
                enabled: false,
                enabledFieldNotEmpty: 'albums',
                dataField: 'users'
            },
            {
                title: "Todos",
                path: "/user-todos/todos",
                icon: <SiIcons.SiTodoist />,
                enabled: false,
                enabledFieldNotEmpty: 'users',
                dataField: 'todos'
            },
        ],
    }
];
