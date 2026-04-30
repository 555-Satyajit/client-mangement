import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useApp } from "@/context/AppContext"
import { useNavigate } from "react-router-dom"

export function LoginForm({
  className,
  ...props
}) {
  const { login } = useApp()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password, "client")
    navigate(`/client/dashboard`)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-12" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <img src="/logo_client.png" alt="Logo" className="h-20 w-auto object-contain" />
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white">Client Portal</h1>
                <p className="text-sm text-slate-400 mt-1">
                  Secure access to your project dashboard
                </p>
              </div>

              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 h-11 focus:border-primary/50"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password" name="password" className="text-slate-300">Password</Label>
                    <a href="#" className="ml-auto text-xs text-primary hover:text-primary/80 transition-colors">
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/5 border-white/10 text-white h-11 focus:border-primary/50"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 mt-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                  Sign In
                </Button>
              </div>

              <p className="text-center text-xs text-slate-500">
                Managed by Agency Platform
              </p>
            </div>
          </form>
          <div className="relative hidden md:block overflow-hidden border-l border-white/5">
            <img
              src="/login-bg.png"
              alt="Agency Hub"
              className="absolute inset-0 h-full w-full object-cover brightness-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center z-20">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Agency Hub</h3>
                <p className="text-slate-200 text-sm leading-relaxed font-medium">
                  Experience high-velocity collaboration.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-slate-500 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary transition-colors">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
