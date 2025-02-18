import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="container mx-auto flex min-h-[calc(100vh-64px)] items-center px-4">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Welcome Back</h2>
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>
                <Input type="email" className="bg-gray-900 text-white" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Password
                </label>
                <Input type="password" className="bg-gray-900 text-white" />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-green-400 hover:text-green-300"
                >
                  Forgot password?
                </Link>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500">
                Sign In
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
