"use client";

import {
  IEarningsTableRecord,
  IFreelancerTableRecord,
  IInstructorTableRecord,
  IStudentTableRecord,
} from "@/types/api/responses/Tables";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const statusColors: Record<string, string> = {
  paid: "bg-green-100 text-green-700",
  published: "bg-yellow-100 text-yellow-700",
  pending: "bg-gray-100 text-gray-700",
  drafted: "bg-red-100 text-red-700",
  failed: "bg-red-100 text-red-700",
};

interface IProps {
  earnings: IEarningsTableRecord[];
}

const EarningsTable: React.FC<IProps> = (props) => {
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
            <th className="p-3">Status</th>
            <th className="p-3">Total Earnings</th>
            <th className="p-3">Pending Payout</th>
            <th className="p-3">Last Payout</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.earnings.map((earn) => (
            <tr key={earn.id} className="border-b border-gray-200">
              <td className="p-3">{earn.id}</td>
              <td className="p-3">{earn.instructorName}</td>
              <td className="p-3">
                <span className={`p-3 rounded px-2 py-1 text-xs font-semibold ${statusColors[earn.status]}`}>
                  {earn.status}
                </span>
              </td>

              <td className="p-3">{earn.total}</td>
              <td className="p-3">{earn.pending}</td>
              <td className="p-3">{earn.lastPayout}</td>

              <td className="p-3">
                <IconButton onClick={(e) => handleClick(e, earn.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedCourse === earn.id}
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

export default EarningsTable;
