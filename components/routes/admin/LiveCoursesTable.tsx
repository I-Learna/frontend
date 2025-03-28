"use client";

import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AdminLiveCourse } from "@/types/api/responses/IGetAdminLiveCoursesList";
import { useRouter } from "next/navigation";
import { encrypt } from "@/utils/Cryptojs";

interface IProps {
  liveCourses: AdminLiveCourse[];
}

const LiveCoursesTable: React.FC<IProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedCourse(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedCourse(null);
  };

  const onView = (id: number) => {
    handleClose();
  };

  const onDraft = (id: number) => {
    handleClose();
  };

  const onEdit = (id: number) => {
    handleClose();
    router.push(`/admin/live-courses/${encrypt(id.toString())}`);
  };

  const onDelete = (id: number) => {
    handleClose();
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 text-sm text-left rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">COURSE NAME</th>
            <th className="p-3">INSTRUCTOR No.</th>
            <th className="p-3">CREATED DATE</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.liveCourses.map((course) => (
            <tr key={course.id} className="border-b border-gray-200">
              <td className="p-3">{course.id}</td>
              <td className="p-3">{course.name}</td>
              <td className="p-3">{course.instructorNumber}</td>

              <td className="p-3">{course.createDate}</td>
              <td className="p-3">
                <IconButton onClick={(e) => handleClick(e, course.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedCourse === course.id}
                  onClose={handleClose}
                  classes={{ paper: "w-48" }}
                >
                  <MenuItem onClick={() => onView(course.id)}>View</MenuItem>
                  <MenuItem onClick={() => onDraft(course.id)}>Draft</MenuItem>
                  <MenuItem onClick={() => onEdit(course.id)}>Edit</MenuItem>
                  <MenuItem
                    onClick={() => onDelete(course.id)}
                    className="text-red-600"
                  >
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

export default LiveCoursesTable;
