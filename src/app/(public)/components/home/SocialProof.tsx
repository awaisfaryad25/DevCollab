// components/social-proof/SocialProof.tsx
const SocialProof = () => {
  return (
    <section className="border-y border-border bg-muted/40 py-8">
      <div className="w-full max-w-5xl mx-auto px-6 text-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by dev teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
          {["Techify", "LaunchPad", "CodeHive", "StackBridge", "BuildFast"].map(
            (name) => (
              <span key={name} className="text-sm font-semibold text-foreground">
                {name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;