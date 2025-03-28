export interface Instructor {
  id: number;
  name: string;
}

export type AdminEbooksStatus = "published" | "pending" | "drafted" | "rejected";

export interface AdminEbook {
  id: number;
  name: string;
  instructor: Instructor;
  status: string;
  createDate: string;
  stageStatus: string;
}

export interface IGetAdminEbooksList {
  allEbooks: number;
  published: number;
  pending: number;
  drafted: number;
  rejected: number;
  ebooks: AdminEbook[];
}
