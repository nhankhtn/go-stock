import { isValidEmail } from "@/utils";
import { useState } from "react";
import useProfile from "./useProfile";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { loadUser } = useProfile();
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      setError("Please fill in all fields!");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Email invalid!");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setError("");
      loadUser({});
      router.push("/");
    }, 1000); // fetch login
  };

  return {
    handleLogin,
    isLoading,
    error,
  };
}
