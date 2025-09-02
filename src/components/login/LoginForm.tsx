"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/auth.store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UserData } from "@/types/user";

export function LoginForm() {
  const { setToken, setUserLoggedIn } = useAuthStore();

  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});
  const [touched, setTouched] = useState<{
    username?: boolean;
    password?: boolean;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [listUsers, setListUsers] = useState<UserData[]>([]);
  const handleGetUsers = async () => {
    const response = await api.get("/users", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      setListUsers(response.data);
    } else {
      console.log(response);
      setListUsers([]);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  // Validar campos individuales
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "username":
        if (!value.trim()) return "Username or email is required";
        break;
      case "password":
        if (!value.trim()) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        break;
    }
    return "";
  };

  // Validar todo el formulario
  const validateForm = (): boolean => {
    const newErrors = {
      username: validateField("username", username),
      password: validateField("password", password),
    };

    setErrors(newErrors);
    setTouched({ username: true, password: true });

    return !newErrors.username && !newErrors.password;
  };

  // Manejar blur de los campos
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const loginData = {
          username, // O email, dependiendo de lo que espere tu API
          password,
        };

        const response = await api.post("/login", loginData, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.data.success) {
          setToken("token");

          const user_selected = listUsers.find(
            (user) => user.username === username
          );
          if (user_selected) {
            setUserLoggedIn(user_selected);
            toast.success("Login successful", {
              position: "top-right",
              duration: 3000,
            });
            router.push("/home");
          }
        }
      } catch (error) {
        console.log("Error:", error);

        toast.error("Login failed. Please try again.", {
          position: "top-right",
          duration: 5000,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      toast.warning("Please fix the errors in the form.", {
        position: "top-right",
        duration: 5000,
      });
    }
  };

  return (
    <form className={cn("flex flex-col gap-6")} onSubmit={handleSubmit}>
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
          <Label htmlFor="username" className="text-content">
            Username or Email
          </Label>
          <Input
            id="username"
            name="username"
            type="text"
            className={`placeholder:text-content/50 placeholder:text-sm ${errors.username && touched.username ? "border-red-500" : ""}`}
            placeholder="Enter your username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={handleBlur}
            required
          />
          {errors.username && touched.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
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
            name="password"
            type="password"
            className={`placeholder:text-content/50 placeholder:text-sm ${errors.password && touched.password ? "border-red-500" : ""}`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleBlur}
            required
          />
          {errors.password && touched.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing In..." : "Sign In"}
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
