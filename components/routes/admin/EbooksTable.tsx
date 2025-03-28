"use client";

import React, { MouseEvent, useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AdminEbook } from "@/types/api/responses/IGetAdminEbooksList";
import { useRouter } from "next/navigation";
import { encrypt } from "@/utils/Cryptojs";

const statusColors: Record<string, string> = {
  published: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  drafted: "bg-gray-100 text-gray-700",
  rejected: "bg-red-100 text-red-700",
};

interface IProps {
  ebooks: AdminEbook[];
}

const EbooksTable: React.FC<IProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedEbook, setSelectedEbook] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedEbook(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedEbook(null);
  };

  const onView = (id: number) => {
    handleClose();
  };

  const onDraft = (id: number) => {
    handleClose();
  };

  const onEdit = (id: number) => {
    handleClose();
    router.push(`/admin/ebooks/${encrypt(id.toString())}`);
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
            <th className="p-3">E-BOOKS NAME</th>
            <th className="p-3">INSTRUCTOR</th>
            <th className="p-3">STATUS</th>
            <th className="p-3">CREATED DATE</th>
            <th className="p-3">STAGE STATUS</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.ebooks.map((ebook) => (
            <tr key={ebook.id} className="border-b border-gray-200">
              <td className="p-3">{ebook.id}</td>
              <td className="p-3">{ebook.name}</td>
              <td className="p-3">{ebook.instructor.name}</td>
              <td className="p-3">
                <span
                  className={`p-3 rounded px-2 py-1 text-xs font-semibold ${
                    statusColors[ebook.status]
                  }`}
                >
                  {ebook.status}
                </span>
              </td>
              <td className="p-3">{ebook.createDate}</td>
              <td className="p-3">{ebook.stageStatus}</td>
              <td className="p-3">
                <IconButton onClick={(e) => handleClick(e, ebook.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedEbook === ebook.id}
                  onClose={handleClose}
                  classes={{ paper: "w-48" }}
                >
                  <MenuItem onClick={() => onView(ebook.id)}>View</MenuItem>
                  <MenuItem onClick={() => onDraft(ebook.id)}>Draft</MenuItem>
                  <MenuItem onClick={() => onEdit(ebook.id)}>Edit</MenuItem>
                  <MenuItem
                    onClick={() => onDelete(ebook.id)}
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

export default EbooksTable;
