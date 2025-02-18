import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="container mx-auto flex min-h-[calc(100vh-64px)] items-center px-4">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-xl bg-gradient-to-br from-green-900 to-teal-900 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Create Account
            </h2>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    First Name
                  </label>
                  <Input className="bg-gray-900 text-white" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Last Name
                  </label>
                  <Input className="bg-gray-900 text-white" />
                </div>
              </div>
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
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Confirm Password
                </label>
                <Input type="password" className="bg-gray-900 text-white" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-300">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-green-400 hover:text-green-300"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-green-400 hover:text-green-300"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500">
                Create Account
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-300">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-green-400 hover:text-green-300"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
