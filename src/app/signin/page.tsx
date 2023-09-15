import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/auth/components/user-auth-form";
import { ThemeToggle } from "@/components/theme/theme-toggle";
 
export default function LoginPage() {
  return (
    <main className="flex h-screen items-center justify-center">
    
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <ThemeToggle />
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[320px]">
        <div className="flex flex-col text-center">
          <img className="logo" src="/logo2-light.jpg" />
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">
              Welcome back
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Click continue to login
            </p>
          </div>
        </div>
        <UserAuthForm />
      </div>
    </main>
  );
}
