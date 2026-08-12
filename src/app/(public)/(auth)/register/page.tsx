"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, Mail, Lock, User, CheckCircle2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRegister } from "@/hooks/useAuth";
import BackgroundGradient from "@/app/ui/background-gradient";
import Input from "@/app/ui/Input";
import MainLogo from "../../components/MainLogo";
import { ThemeToggle } from "@/app/ui/theme-toggle";

const passwordRules = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number", test: (p: string) => /[0-9]/.test(p) },
];

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { mutate: register, isPending, error } = useRegister();

  // Extract error message from axios error response
  const errorMessage = (error as any)?.response?.data?.message || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation before hitting API
    if (password.length < 8) return;
    if (!/[A-Z]/.test(password)) return;
    if (!/[0-9]/.test(password)) return;

    register({ name, email, password });
  };

  return (
    <div className="relative min-h-screen px-4 py-6">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        <MainLogo />
        <ThemeToggle />
      </div>
      <BackgroundGradient />

      <div className="flex min-h-[calc(100vh-100px)] w-full items-center justify-center p-4">
        <div className="w-full max-w-sm">
        <div className="mb-4">
          <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-foreground">
            Create your account
          </h1>
          <p className="mt-1 text-sm 2xl:text-base text-muted-foreground">
            Free forever. No credit card needed.
          </p>
        </div>

        {/* API error */}
        {errorMessage && (
          <div className="mb-4 rounded-lg border border-danger/20 bg-danger/10 px-3 py-2.5 text-sm text-danger">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-4">
            <Input
              label="Full Name"
              className="border-primary!"
              type="text"
              placeholder="Awais Faryad"
              leftIcon={<User className="size-4" />}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Email"
              className="border-primary!"
              type="email"
              placeholder="you@example.com"
              leftIcon={<Mail className="size-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div>
              <Input
                label="Password"
                type={show ? "text" : "password"}
                placeholder="••••••••"
                className="border-primary!"
                leftIcon={<Lock className="size-4" />}
                rightIcon={show ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                onRightIconClick={() => setShow(!show)}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Live password strength hints */}
              {password.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {passwordRules.map(({ label, test }) => (
                    <li key={label} className="flex items-center gap-1.5 text-xs">
                      <CheckCircle2
                        className={`size-3.5 ${
                          test(password) ? "text-success" : "text-muted-foreground"
                        }`}
                      />
                      <span className={test(password) ? "text-success" : "text-muted-foreground"}>
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="gradient flex w-full mt-8 items-center justify-center gap-2 rounded-lg py-2.5 2xl:py-3 text-sm font-medium text-white transition-colors disabled:opacity-60"
          >
            {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
            {isPending ? "Creating account..." : "Create account"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Google */}
        <button
          type="button"
          onClick={() => setGoogleLoading(true)}
          disabled={googleLoading}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-background py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 disabled:opacity-60"
        >
          {googleLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <FcGoogle className="size-4.5" />
          )}
          Continue with Google
        </button>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          By signing up you agree to our{" "}
          <Link href="/terms" className="text-primary hover:underline">Terms</Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline">Privacy policy</Link>.
        </p>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
}