import { cn } from "@/lib/utils";

const DashboardPreview = () => {
  return (
    <div>
      <div className="relative mx-auto mt-16 max-w-7xl">
        <div className="overflow-hidden rounded-xl border border-border bg-muted shadow-2xl shadow-primary dark:shadow-secondary/20">
          
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-danger" />
            <div className="h-2.5 w-2.5 rounded-full bg-warning" />
            <div className="h-2.5 w-2.5 rounded-full bg-success" />
            <div className="ml-4 flex-1 rounded bg-muted px-3 py-1 text-xs text-muted-foreground">
              app.devcollab.io/workspace/dashboard
            </div>
          </div>

          {/* Mock dashboard body */}
          <div className="grid grid-cols-4 gap-0 bg-background p-0">
            {/* Sidebar */}
            <div className="col-span-1 hidden border-r border-border p-4 sm:block">
              <div className="mb-4 flex items-center gap-2">
                <div className="gradient size-6 rounded " />
                <div className="h-3 w-16 rounded bg-muted" />
              </div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="mb-2 flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-muted" />
                   <div
                      className={cn( "h-2.5 rounded bg-muted", i === 0 ? "w-20 bg-violet-100" : "w-14")}
                    />
                </div>
              ))}
            </div>
            {/* Main content */}
            <div className="col-span-4 p-4 sm:col-span-3">
              <div className="mb-4 grid grid-cols-3 gap-3">
                {["Total tasks", "In progress", "Completed"].map((l, i) => (
                  <div key={l} className="rounded-lg border border-border bg-muted p-3">
                    <div className="mb-1 text-xs text-muted-foreground">
                      {l}
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {["48", "12", "36"][i]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["To do", "In progress", "Done"].map((col) => (
                  <div key={col} className="rounded-lg border border-border bg-muted p-2">
                    <div className="mb-2 text-xs font-medium text-muted-foreground">
                      {col}
                    </div>
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="mb-1.5 h-8 rounded-md border border-border bg-background"/>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview