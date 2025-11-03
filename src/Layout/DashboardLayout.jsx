import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import useAdmin from "../hooks/useAdmin";
import Header from "../Pages/Shared/Header/Header";
import { AuthContext } from "../Context/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <div className=" drawer md:drawer-open w-full">
          <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

          {/* Main Content */}
          <div className="drawer-content flex flex-col">
            {/* Mobile Toggle Button */}
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-outline btn-primary drawer-button lg:hidden m-4"
            >
              ☰ Menu
            </label>

            <div className="flex-1 p-4 md:p-6 lg:p-10">
              <Outlet />
            </div>
          </div>

          {/* Sidebar */}
          <div className="drawer-side">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4 space-y-4">
              {/* User Routes */}
              <li>
                <NavLink
                  to="/dashboard/my-order"
                  className={({ isActive }) =>
                    `text-lg font-medium px-3 py-2 rounded-lg
                    ${isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`
                  }
                >
                  My Orders
                </NavLink>
              </li>

              {/* Admin Routes */}
              {/* {isAdmin && ( */}
                <>
                  <li>
                    <NavLink
                      to="/dashboard/all-users"
                      className={({ isActive }) =>
                        `text-lg font-medium px-3 py-2 rounded-lg
                        ${isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`
                      }
                    >
                      All Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manage-product"
                      className={({ isActive }) =>
                        `text-lg font-medium px-3 py-2 rounded-lg
                        ${isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`
                      }
                    >
                      Manage Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/add-product"
                      className={({ isActive }) =>
                        `text-lg font-medium px-3 py-2 rounded-lg
                        ${isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`
                      }
                    >
                      Add Product
                    </NavLink>
                  </li>
                </>
              {/* )} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
