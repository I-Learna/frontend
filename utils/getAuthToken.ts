export function getAuthToken(): string | undefined {
  if (typeof window === "undefined") {
    // Dynamically import next/headers only on the server
    const { cookies } = require("next/headers");
    return cookies().get("token")?.value;
  } else {
    // Client-side: Access cookies from document.cookie
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
  }
}
