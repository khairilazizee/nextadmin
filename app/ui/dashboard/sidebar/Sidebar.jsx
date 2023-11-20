import React from 'react'

const menuItems = [
    {
        "title": "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
            },
            {
                title: "Users",
                path: "/dashboard/users"
            },
            {
                title: "Products",
                path: "/dashboard/products"
            },

        ]
    }
]

const Sidebar = () => {
    return (
        <div className="">Sidebar</div>
    )
}

export default Sidebar