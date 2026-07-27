"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Eye, EyeOff, Loader2, CheckCircle2, Lock } from "lucide-react";
import { useResetPassword } from "@/hooks/useAuth";
import BackgroundGradient from "@/app/ui/background-gradient";
import Input from "@/app/ui/Input";
import MainLogo from "../../components/MainLogo";

export default function ResetPasswordPage() {
  const { token } = useParams<{ token: string }>();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { mutate: resetPassword, isPending, error, isSuccess } = useResetPassword(token);

  // Errors
  const mismatch = confirm.length > 0 && password !== confirm;
  const errorMessage = (error as any)?.response?.data?.message || "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mismatch || password.length < 8) return;
    resetPassword({ password, confirmPassword: confirm });
  };

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="w-full max-w-7xl mx-auto">
        <MainLogo />
      </div>
      <BackgroundGradient />

      <div className="p-4 w-full max-w-sm mx-auto mt-6 lg:mt-20">
        {!isSuccess ? (
          <>
            <div className="mb-4">
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-foreground">
                Change Password
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Must be at least 8 characters.
              </p>
            </div>

            {/* API error — e.g. expired or invalid token */}
            {errorMessage && (
              <div className="mb-4 rounded-lg border border-danger/20 bg-danger/10 px-3 py-2.5 text-sm text-danger">
                {errorMessage}{" "}
                <Link href="/forgot-password" className="font-medium underline">
                  Request a new link
                </Link>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="space-y-4">
                <Input
                  label="New Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="border-primary!"
                  leftIcon={<Lock className="size-4" />}
                  rightIcon={showPassword ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                  onRightIconClick={() => setShowPassword(!showPassword)}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div>
                  <Input
                    label="Confirm Password"
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    className="border-primary!"
                    leftIcon={<Lock className="size-4" />}
                    rightIcon={showConfirm ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                    onRightIconClick={() => setShowConfirm(!showConfirm)}
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    error={mismatch ? "Passwords don't match." : ""}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending || mismatch || password.length < 8}
                className="gradient mt-8 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium text-white transition-colors disabled:opacity-60"
              >
                {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                {isPending ? "Resetting..." : "Reset password"}
              </button>
            </form>
          </>
        ) : (
          // Success state — useResetPassword redirects automatically
          // but we show this briefly before redirect
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-6 w-6 text-success" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              Password updated
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your password has been reset successfully. Redirecting you to dashboard...
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white"
            >
              Go to login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}