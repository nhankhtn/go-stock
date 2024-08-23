import { useContext } from "react";

import { ProfileCContext } from "@/context/Profile";

export default function useProfile() {
  const context = useContext(ProfileCContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
