"use client";

import { IAdminTableRecord } from "@/types/api/responses/Tables";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  published: "bg-yellow-100 text-yellow-700",
  pending: "bg-gray-100 text-gray-700",
  drafted: "bg-red-100 text-red-700",
  rejected: "bg-red-100 text-red-700",
};

interface IProps {
  admins: IAdminTableRecord[];
}

const AdminsTable: React.FC<IProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedCourse(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedCourse(null);
  };

  const onView = () => {
    handleClose();
  };

  const onDraft = () => {
    handleClose();
  };

  const onEdit = () => {
    handleClose();
    // router.push(`/admin/courses/${encrypt(id.toString())}`);
  };

  const onDelete = () => {
    handleClose();
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 text-sm text-left rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Instructor Name</th>
            <th className="p-3">Email address</th>
            <th className="p-3">Role</th>
            <th className="p-3">Access Level</th>
            <th className="p-3">Last Activity</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.admins.map((admin) => (
            <tr key={admin.id} className="border-b border-gray-200">
              <td className="p-3">{admin.id}</td>
              <td className="p-3">{admin.name}</td>
              <td className="p-3">{admin.email}</td>

              <td className="p-3">{admin.role}</td>
              <td className="p-3">{admin.accessLevel}</td>
              <td className="p-3">{admin.lastActivity}</td>

              <td className="p-3">
                <IconButton onClick={(e) => handleClick(e, admin.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedCourse === admin.id}
                  onClose={handleClose}
                  classes={{ paper: "w-48" }}
                >
                  <MenuItem onClick={onView}>View</MenuItem>
                  <MenuItem onClick={onDraft}>Draft</MenuItem>
                  <MenuItem onClick={onEdit}>Edit</MenuItem>
                  <MenuItem onClick={onDelete} className="text-red-600">
                    Delete
                  </MenuItem>
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminsTable;
