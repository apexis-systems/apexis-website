import { motion } from "framer-motion";

export function DashboardMockup() {
  return (
    <div className="relative">
      <div className="bg-surface-dark rounded-xl border border-foreground/10 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/5">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-gold/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-3 text-xs text-surface-dark-foreground/40 font-mono">apexis — dashboard</span>
        </div>

        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-surface-dark-foreground">Project Overview</div>
              <div className="text-xs text-surface-dark-foreground/40 mt-0.5">Meridian Tower — Phase 2</div>
            </div>
            <div className="flex gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 bg-primary rounded-md text-xs font-medium text-primary-foreground cursor-pointer"
              >
                Generate Report
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 bg-surface-dark-foreground/10 rounded-md text-xs font-medium text-surface-dark-foreground cursor-pointer"
              >
                Upload Media
              </motion.div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Completion", value: "67%", color: "bg-primary" },
              { label: "Open Issues", value: "12", color: "bg-gold" },
              { label: "Reports Sent", value: "28", color: "bg-green-500/70" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-dark-foreground/5 rounded-lg p-3">
                <div className="text-xs text-surface-dark-foreground/40">{stat.label}</div>
                <div className="text-xl font-bold text-surface-dark-foreground mt-1">{stat.value}</div>
                <div className={`h-1 mt-2 rounded-full ${stat.color} opacity-60`} style={{ width: `${Math.random() * 40 + 40}%` }} />
              </div>
            ))}
          </div>

          {/* Activity */}
          <div className="bg-surface-dark-foreground/5 rounded-lg p-4">
            <div className="text-xs font-medium text-surface-dark-foreground/60 mb-3">Recent Activity</div>
            {[
              { text: "Site inspection photos uploaded", time: "2 min ago" },
              { text: "Weekly report generated", time: "1 hour ago" },
              { text: "Client update released", time: "3 hours ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-surface-dark-foreground/5 last:border-0">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-xs text-surface-dark-foreground/70">{item.text}</span>
                </div>
                <span className="text-[10px] text-surface-dark-foreground/30">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-3xl -z-10" />
    </div>
  );
}
