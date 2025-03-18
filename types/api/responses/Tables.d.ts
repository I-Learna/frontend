export interface IStudentTableRecord {
  id: string;
  name: string;
  email: string;
  status: string;
  enrolledCourses: string;
  lastActivity: string;
}

export interface IStudentTableData {
  totals: {
    all: number;
    active: number;
    pending: number;
    suspended: number;
    rejected: number;
  };
  records: IStudentTableRecord[];
}

export interface IFreelancerTableRecord {
  id: string;
  name: string;
  email: string;
  status: string;
  createdCourses: string;
  averageRating: string;
  lastActivity: string;
}

export interface IFreelancerTableData {
  totals: {
    all: number;
    active: number;
    pending: number;
    suspended: number;
    rejected: number;
  };
  records: IFreelancerTableRecord[];
}

export interface IInstructorTableRecord {
  id: string;
  name: string;
  email: string;
  status: string;
  createdCourses: string;
  averageRating: string;
  lastActivity: string;
}

export interface IInstructorTableData {
  totals: {
    all: number;
    active: number;
    pending: number;
    suspended: number;
    rejected: number;
  };
  records: IInstructorTableRecord[];
}

export interface IAdminTableRecord {
  id: string;
  name: string;
  email: string;
  role: string;
  accessLevel: string;
  lastActivity: string;
}

export interface IAdminTableData {
  totals: {
    all: number;
    active: number;
    pending: number;
    suspended: number;
    rejected: number;
  };
  records: IAdminTableRecord[];
}

export interface IEarningsTableRecord {
  id: string;
  instructorName: string;
  status: string;
  total: string;
  pending: string;
  lastPayout: string;
}

export interface IEarningsTableData {
  totals: {
    all: number;
    paid: number;
    pending: number;
    failed: number;
  };
  records: IEarningsTableRecord[];
}

export interface IPurchasesTableRecord {
  id: string;
  studentName: string;
  status: string;
  course: string;
  amount: string;
  paymentMethod: string;
  date: string;
}

export interface IPurchasesTableData {
  totals: {
    all: number;
    paid: number;
    pending: number;
    failed: number;
  };
  records: IPurchasesTableRecord[];
}
