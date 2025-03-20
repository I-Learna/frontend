import {
  IAdminTableData,
  IFreelancerTableData,
  IInstructorTableData,
  IStudentTableData,
} from "@/types/api/responses/Tables";
import students from "@/public/data/students.json";
import freelancers from "@/public/data/freelancers.json";
import instructors from "@/public/data/instructors.json";
import admins from "@/public/data/admins.json";
// import earnings from "@/public/data/earnings.json";

export async function getStudentTableData(): Promise<IStudentTableData> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return students;
}

export async function getFreelancerTableData(): Promise<IFreelancerTableData> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return freelancers;
}

export async function getInstructorTableData(): Promise<IInstructorTableData> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return instructors;
}

export async function getAdminTableData(): Promise<IAdminTableData> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return admins;
}

// export async function getEarningsTableData(): Promise<IEarningsTableData> {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return admins;
// }
