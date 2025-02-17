import axiosInstance from "@/lib/axiosInstance";
import { IRegisterRequest } from "@/types/api/requests/Auth";

export async function register(request: IRegisterRequest) {
  await axiosInstance.post("/api/auth/register", request);
}
