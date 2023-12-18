"use client";
import { usePathname } from "next/navigation";
import AdminSidebarItem from "./AdminSidebarItem";
import { MdDashboard, MdBorderOuter, MdOutlineCreate } from "react-icons/md";

const AdminSidebar = () => {
  const pathname = usePathname();
  const adminPanel = [
    {
      name: "Dashboard",
      icon: MdDashboard,
      url: "/admin",
    },
    {
      name: "Create Product",
      icon: MdOutlineCreate,
      url: "/admin/create",
    },
    {
      name: "Manage Products",
      icon: MdOutlineCreate,
      url: "/admin/manage",
    },
    {
      name: "My Orders",
      icon: MdBorderOuter,
      url: "/admin/order",
    },
  ];
  return (
    <div className="w-[19%] border-r h-[100vh] p-6 bg-gray-500">
      <div className="space-y-4">
        {adminPanel.map((admin, i) => (
          <AdminSidebarItem
            key={i}
            selected={pathname == admin.url}
            icon={admin.icon}
            name={admin.name}
            url={admin.url}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
