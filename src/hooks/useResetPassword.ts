import { isValidEmail } from "@/utils";
import { useState } from "react";

export default function useResetPassword() {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleResetPassword = async (
    email: string,
    code: string,
    password: string,
    rePassword: string
  ) => {
    if (!email || !code || !password || !rePassword) {
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
    if (password !== rePassword) {
      setError("Password does not match!");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setError("");
      setLoading(false);
    }, 1000); // fetch register
  };
  return {
    handleResetPassword,
    isLoading,
    error,
  };
}
