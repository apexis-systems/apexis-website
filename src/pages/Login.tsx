import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

const languages = ["English", "Hindi", "Telugu"];

export default function Login() {
  const navigate = useNavigate();
  const [lang, setLang] = useState("English");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!email.trim()) e.email = "Email or mobile number is required";
    if (!password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Mock login - navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Language selector */}
      <div className="flex justify-end p-4 gap-2">
        {languages.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`text-xs font-medium px-2 py-1 rounded transition-colors ${
              lang === l ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-lg border-border/50">
            <CardHeader className="text-center pb-2">
              <Link to="/" className="font-display text-2xl font-bold tracking-tight mb-4 block">
                Apexis
              </Link>
              <h1 className="text-2xl font-display font-bold">Welcome Back</h1>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email or Mobile Number</Label>
                  <Input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={errors.password ? "border-destructive" : ""}
                  />
                  {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  Login
                </Button>
                <div className="text-center">
                  <button type="button" className="text-sm text-primary hover:underline">
                    Forgot Password
                  </button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-3 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary font-medium hover:underline">
                  Create Account
                </Link>
              </p>
              <p className="text-xs text-muted-foreground">
                Secure access for registered project teams.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
