"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useLogin } from "@/hooks/useAuth";
import BackgroundGradient from "@/app/ui/background-gradient";
import Input from "@/app/ui/Input";
import MainLogo from "../../components/MainLogo";
import { ThemeToggle } from "@/app/ui/theme-toggle";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { mutate: login, isPending, error } = useLogin();

  // Extract error message from axios error response
  const errorMessage = (error as any)?.response?.data?.message || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  const handleGoogle = () => {
    setGoogleLoading(true);
    // TODO: trigger NextAuth Google signIn("google")
    setTimeout(() => setGoogleLoading(false), 1500);
  };

  return (
    <div className="relative min-h-screen px-4 py-6">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        <MainLogo />
        <ThemeToggle />
      </div>
      <BackgroundGradient />

      <div className="p-4 w-full max-w-sm mx-auto mt-6 lg:mt-20">
        <div className="mb-4">
          <h1 className="text-2xl lg:text-3xl font-semibold">Welcome back!</h1>
          <p className="mt-1 text-sm">Log in to your DevCollab account</p>
        </div>

        {/* API error */}
        {errorMessage && (
          <div className="mb-4 rounded-lg border border-danger/20 bg-danger/10 px-3 py-2.5 text-sm text-danger">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-4">
            <Input
              label="Email"
              className="border-primary! 2xl:py-3"
              type="email"
              placeholder="you@example.com"
              leftIcon={<Mail className="size-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type={show ? "text" : "password"}
              placeholder="••••••••"
              className="border-primary! 2xl:py-3"
              leftIcon={<Lock className="size-4" />}
              rightIcon={show ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              onRightIconClick={() => setShow(!show)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-sm text-end text-primary">
            <Link href="/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="gradient flex w-full mt-8 items-center justify-center gap-2 rounded-lg py-2.5 2xl:py-3.5 text-sm font-medium text-white transition-colors disabled:opacity-60"
          >
            {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
            {isPending ? "Logging in..." : "Log in"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Google OAuth */}
        <button
          type="button"
          onClick={handleGoogle}
          disabled={googleLoading}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-primary bg-background py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 disabled:opacity-60"
        >
          {googleLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <FcGoogle className="size-4.5" />
          )}
          Continue with Google
        </button>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/register" className="font-medium text-primary hover:underline">
            Sign up free
          </Link>
        </p>
      </div>
    </div>
  );
}