"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(
        "https://homeestadb.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // If login is successful, store the token (if provided in the response)
      if (data.token) {
        // Store token in localStorage or sessionStorage based on "remember me"
        if (formData.rememberMe) {
          localStorage.setItem("authToken", data.token);
        } else {
          sessionStorage.setItem("authToken", data.token);
        }
      }

      // Redirect to dashboard or home page
      router.push("/dashboard");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Invalid email or password";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="container mx-auto flex min-h-[calc(100vh-64px)] items-center px-4">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Welcome Back</h2>
            {error && (
              <div className="mb-4 rounded bg-red-900/50 p-3 text-sm text-red-200">
                {error}
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-900 text-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-gray-900 text-white"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-green-400 hover:text-green-300"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-300">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-green-400 hover:text-green-300"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
