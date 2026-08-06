"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, Mail, ArrowLeft } from "lucide-react";
import { useForgotPassword } from "@/hooks/useAuth";
import BackgroundGradient from "@/app/ui/background-gradient";
import Input from "@/app/ui/Input";
import MainLogo from "../../components/MainLogo";
import { ThemeToggle } from "@/app/ui/theme-toggle";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const { mutate: forgotPassword, isPending, error, isSuccess } = useForgotPassword();

  // Extract error message
  const errorMessage = (error as any)?.response?.data?.message || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    forgotPassword({ email });
  };

  return (
    <div className="relative min-h-screen px-4 py-6">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4">
        <MainLogo />
        <ThemeToggle />
      </div>
      <BackgroundGradient />

      <div className="p-4 w-full max-w-sm mx-auto mt-6 lg:mt-20">
        {!isSuccess ? (
          <>
            <div className="mb-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold">
                Forgot your password?
              </h1>
              <p className="mt-2 text-sm">
                Enter your email and we'll send you a reset link.
              </p>
            </div>

            {/* API error */}
            {errorMessage && (
              <div className="mb-4 rounded-lg border border-danger/20 bg-danger/10 px-3 py-2.5 text-sm text-danger">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email address"
                className="border-primary! 2xl:py-3"
                type="email"
                placeholder="you@example.com"
                leftIcon={<Mail className="size-4" />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                disabled={isPending}
                className="gradient mt-8 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 2xl:py-3.5 text-sm font-medium text-white transition-colors disabled:opacity-60"
              >
                {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                {isPending ? "Sending..." : "Send reset link"}
              </button>
            </form>

            <div className="mt-2">
              <Link
                href="/login"
                className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5 group-hover:text-primary" />
                Back to login
              </Link>
            </div>
          </>
        ) : (
          // Success state — API always returns 200 for security
          // so we show this whenever the request succeeds
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <Mail className="h-6 w-6 text-success" />
            </div>
            <h2 className="text-lg font-semibold">Check your inbox</h2>
            <p className="mt-2 text-sm">
              We sent a password reset link to{" "}
              <span className="font-medium text-foreground">{email}</span>.
              It expires in 30 minutes.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Didn't get it?{" "}
              <button
                onClick={() => forgotPassword({ email })}
                disabled={isPending}
                className="text-primary hover:underline disabled:opacity-60"
              >
                {isPending ? "Resending..." : "Resend"}
              </button>
            </p>
            <div className="mt-2">
              <Link
                href="/login"
                className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5 group-hover:text-primary" />
                Back to login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}