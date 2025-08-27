import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex justify-center gap-2 md:justify-start mb-10">
        <div className="flex flex-col items-center font-medium text-primary">
          <FaHome className="size-12 text-primary" />
          <span className="text-2xl leading-[1]">
            rent
            <b>safe</b>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 text-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
        <p className="text-content text-md text-balance">Sign in to continue</p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-content">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            className="placeholder:text-content/50 placeholder:text-sm"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-content">
              Password
            </Label>
            <Link
              href="#"
              className="ml-auto text-xs text-primary font-medium underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            className="placeholder:text-content/50 placeholder:text-sm"
            placeholder="Enter your password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </div>
      <div className="text-center text-sm text-content">
        Don&apos;t have an account?{" "}
        <Link href="register" className=" text-primary font-bold">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
