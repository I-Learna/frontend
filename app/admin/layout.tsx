import Logo from "@/components/layout/Logo";
import SidebarMenu from "@/components/layout/SidebarMenu";
import SideMenuLink from "@/components/layout/SideMenuLink";
import React, { ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LiaUsersSolid } from "react-icons/lia";
import { GoGear } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="border-r shrink-0">
        <div className="p-3 bg-accent-light">
          <Logo className="w-28" white />
        </div>

        <div className="px-4 py-2">
          <SideMenuLink href="/admin">
            <FaHome />
            Dashboard
          </SideMenuLink>

          <SidebarMenu
            title={
              <div className="flex items-center gap-2">
                <FaHome />
                <span>Course Management</span>
              </div>
            }
          >
            <SideMenuLink href="/admin/courses">All Courses</SideMenuLink>
            <SideMenuLink href="/admin/courses/new-course">Create Recorded Course</SideMenuLink>
            <SideMenuLink href="#">Create Live Course</SideMenuLink>
            <SideMenuLink href="#">Create Track Course</SideMenuLink>
            <SideMenuLink href="#">Create E-Book</SideMenuLink>
            <SideMenuLink href="#">Featured Courses</SideMenuLink>
            <SideMenuLink href="#">Certificates</SideMenuLink>
          </SidebarMenu>

          <SidebarMenu
            title={
              <div className="flex items-center gap-2">
                <LuUserRound />
                <span>User Management</span>
              </div>
            }
          >
            <SideMenuLink href="/admin/users/students">Students Management</SideMenuLink>
            <SideMenuLink href="/admin/users/instructors">Instructors Management</SideMenuLink>
            <SideMenuLink href="/admin/users/freelancers">Freelancers Management</SideMenuLink>
            <SideMenuLink href="/admin/users/admins">Admins & Moderators</SideMenuLink>
          </SidebarMenu>

          <SidebarMenu
            title={
              <div className="flex items-center gap-2">
                <RiMoneyDollarCircleLine />
                <span>Payments</span>
              </div>
            }
          >
            <SideMenuLink href="/admin/users/students">Earnings & Payouts</SideMenuLink>
            <SideMenuLink href="/admin/users/students">Student Purchases</SideMenuLink>
          </SidebarMenu>

          <SidebarMenu
            title={
              <div className="flex items-center gap-2">
                <LiaUsersSolid />
                <span>Community</span>
              </div>
            }
          >
            <SideMenuLink href="#">#</SideMenuLink>
          </SidebarMenu>

          <p className="px-6 text-sm text-gray-500 mt-6">SETTINGS</p>

          <SidebarMenu
            title={
              <div className="flex items-center gap-2">
                <GoGear />
                <span>System Settings</span>
              </div>
            }
          >
            <SideMenuLink href="#">#</SideMenuLink>
          </SidebarMenu>

          <SidebarMenu
            title={
              <div className="flex items-center gap-2">
                <IoIosHelpCircleOutline />
                <span>Support & Help</span>
              </div>
            }
          >
            <SideMenuLink href="#">#</SideMenuLink>
          </SidebarMenu>
        </div>
      </div>
      <div className="app-wrapper">{children}</div>
    </div>
  );
}
