import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { motion } from "framer-motion";
import { BarChart3, Upload, FileText, Activity } from "lucide-react";

const role = "Admin"; // Mock role

const welcomeMessages: Record<string, string> = {
  Admin: "Welcome back. Monitor your project clarity.",
  Contributor: "Welcome back. Track execution with precision. Make informed decisions.",
  Builder: "Welcome back. Protect your margins.",
  Developer: "Welcome back. Protect your margins.",
  Client: "Welcome back. View the progress.",
};

const stats = [
  { label: "Active Projects", value: "12", icon: BarChart3 },
  { label: "Reports Generated", value: "48", icon: FileText },
  { label: "Media Uploaded", value: "236", icon: Upload },
  { label: "Updates This Week", value: "17", icon: Activity },
];

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-surface-dark text-surface-dark-foreground">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border/20 px-4 gap-3">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
            <span className="font-display font-bold text-lg">Apexis</span>
          </header>

          <main className="flex-1 p-6 lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-2xl lg:text-3xl font-display font-bold mb-1">
                {welcomeMessages[role] || welcomeMessages.Admin}
              </h1>
              <p className="text-sm text-muted-foreground mb-8">
                {role} Dashboard
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border/20 bg-card/10 p-5 flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-display font-bold">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-xl border border-border/20 bg-card/10 p-6">
                  <h2 className="font-display font-bold mb-4">Recent Activity</h2>
                  <div className="space-y-3">
                    {["Site inspection uploaded — Block A", "Weekly report generated", "Client dashboard updated", "New media added — 12 photos"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-border/20 bg-card/10 p-6 flex flex-col items-center justify-center gap-4">
                  <FileText className="w-10 h-10 text-primary/40" />
                  <p className="text-muted-foreground text-sm text-center">
                    Generate your next project report
                  </p>
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                    Generate Report
                  </button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
