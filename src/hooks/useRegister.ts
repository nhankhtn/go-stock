import { isValidEmail } from "@/utils";
import { useState } from "react";
import useProfile from "./useProfile";
import { useRouter } from "next/navigation";

export default function useRegister() {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { loadUser } = useProfile();
  const router = useRouter();

  const handleRegister = async (
    email: string,
    username: string,
    password: string
  ) => {
    if (!email || !username || !password) {
      setError("Please fill in all fields!");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Email is invalid!");
      return;
    }
    if (password.length < 6) {
      setError("Password is too short!");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setError("");
      loadUser({});
      setLoading(false);
      router.push("/");
    }, 1000); // fetch register
  };
  return {
    handleRegister,
    isLoading,
    error,
  };
}
