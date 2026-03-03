import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { motion } from "framer-motion";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 6) {
      setError("Please enter the full 6-digit code");
      return;
    }
    // Mock verification
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
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
            <h1 className="text-2xl font-display font-bold">Verify Your Account</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Enter the 6-digit code sent to your registered email or mobile number.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              {error && <p className="text-xs text-destructive">{error}</p>}
              <Button type="submit" variant="hero" className="w-full">
                Verify &amp; Continue
              </Button>
              <p className="text-xs text-muted-foreground">
                Didn't receive a code?{" "}
                <button type="button" className="text-primary hover:underline">Resend</button>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
