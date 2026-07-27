"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, CheckCircle2, XCircle, Users } from "lucide-react";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/auth.store";
import BackgroundGradient from "@/app/ui/background-gradient";
import MainLogo from "../../components/MainLogo";

type InviteStatus = "loading" | "valid" | "accepted" | "invalid" | "expired";

export default function AcceptInvitePage() {
  const { token } = useParams<{ token: string }>();
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  const [status, setStatus] = useState<InviteStatus>("loading");
  const [workspaceName, setWorkspaceName] = useState("");
  const [accepting, setAccepting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Verify the invite token on mount
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await api.get(`/invites/verify/${token}`);
        setWorkspaceName(res.data.workspaceName);
        setStatus("valid");
      } catch (err: any) {
        const msg = err?.response?.data?.message || "";
        if (msg.toLowerCase().includes("expired")) {
          setStatus("expired");
        } else {
          setStatus("invalid");
        }
      }
    };

    if (token) verifyToken();
  }, [token]);

  const handleAccept = async () => {
    // If not logged in — redirect to register with token in URL
    if (!isAuthenticated) {
      router.push(`/register?invite=${token}`);
      return;
    }

    setAccepting(true);
    try {
      await api.post(`/invites/accept/${token}`);
      setStatus("accepted");
      // redirect to dashboard after 2s
      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (err: any) {
      setErrorMessage(err?.response?.data?.message || "Failed to accept invite.");
      setAccepting(false);
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-6">
      <div className="w-full max-w-7xl mx-auto">
        <MainLogo />
      </div>
      <BackgroundGradient />

      <div className="p-4 w-full max-w-sm mx-auto mt-6 lg:mt-20 text-center">

        {/* Loading */}
        {status === "loading" && (
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Verifying invite link...</p>
          </div>
        )}

        {/* Valid — show accept button */}
        {status === "valid" && (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold text-foreground">
              You're invited!
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              You've been invited to join the{" "}
              <span className="font-semibold text-foreground">
                {workspaceName || "DevCollab"}
              </span>{" "}
              workspace.
            </p>

            {errorMessage && (
              <div className="mt-4 rounded-lg border border-danger/20 bg-danger/10 px-3 py-2.5 text-sm text-danger">
                {errorMessage}
              </div>
            )}

            <button
              onClick={handleAccept}
              disabled={accepting}
              className="gradient mt-8 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium text-white transition-colors disabled:opacity-60"
            >
              {accepting && <Loader2 className="h-4 w-4 animate-spin" />}
              {accepting
                ? "Joining..."
                : isAuthenticated
                ? "Accept invite"
                : "Sign up to accept"}
            </button>

            {!isAuthenticated && (
              <p className="mt-3 text-xs text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href={`/login?invite=${token}`}
                  className="text-primary hover:underline"
                >
                  Log in
                </Link>
              </p>
            )}
          </>
        )}

        {/* Accepted */}
        {status === "accepted" && (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-7 w-7 text-success" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              Welcome to the team!
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              You've joined <span className="font-semibold text-foreground">{workspaceName}</span>.
              Redirecting to dashboard...
            </p>
          </>
        )}

        {/* Expired */}
        {status === "expired" && (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber/10">
              <XCircle className="h-7 w-7 text-amber" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              Invite link expired
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This invite link has expired. Ask your workspace admin to send a new one.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white"
            >
              Go to login
            </Link>
          </>
        )}

        {/* Invalid */}
        {status === "invalid" && (
          <>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-danger/10">
              <XCircle className="h-7 w-7 text-danger" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              Invalid invite link
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This invite link is invalid or has already been used.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white"
            >
              Go to login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}