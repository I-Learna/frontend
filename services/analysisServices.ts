import topInstructors from "@/public/data/topInstructors.json";

export async function getTopInstructors() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return topInstructors;
}
