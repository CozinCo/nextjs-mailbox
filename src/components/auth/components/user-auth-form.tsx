"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "@/hooks/use-toast";

// updated
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/common/spinner";
import { z } from "zod";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLFormElement> { }


export function UserAuthForm({
  className,
  ...props
}: {

  className?: string;
  props?: UserAuthFormProps;
}) {
  const router = useRouter();
  const searchParams = useSearchParams()


  const [isLoading, setIsLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);


  let callbackURL = "/";
  if (searchParams.has("redirect")) {
    callbackURL = `${searchParams.get("redirect")}`;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const AuthCredentials = {
        email: (document.getElementById("email")! as HTMLInputElement).value,
        password: (document.getElementById("password")! as HTMLInputElement).value,
      }
      const user = z.object({ email: z.string().email(), password: z.string(), })
      // const requiredUser = user.required().parse(AuthCredentials);      
      if (AuthCredentials.email === "" || AuthCredentials.password === "") {
        console.log(AuthCredentials)
        toast({
          title: "Something went wrong",
          description: "data.message",
          variant: "destructive",
        })
        return;
      }
      const response = await fetch('/api/signin', { method: 'POST', body: JSON.stringify(AuthCredentials) });
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      localStorage.setItem("iauth", AuthCredentials.email);
      router.replace("/mailbox")
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false);
    }
  }


  function keyPress(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    let retry = true;
    if (retry) {
      setInterval(() => {
        const redirect = window.localStorage.getItem("redirect") || null;
        if (redirect) {
          // setLoader(false)
          retry = false;
          router.push(callbackURL);
          window.localStorage.removeItem("redirect");
        }
      }, 5000);
    }
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // setLoader(false)
      }
    };

    return () => document.removeEventListener("keydown", down);
  }, [callbackURL, router]);

  return (
    <>
      {isLoading && <Spinner />}
      <form
        onKeyUpCapture={() => keyPress}
        onSubmit={(event) => onSubmit(event)}
        className={cn("grid gap-6 p-4", className)}
        {...props}
      >
        <div className="flex flex-col space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              placeholder="Enter your email address..."

            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"

            />
          </div>
          <Button type="submit" disabled={disabled}>
            Sign In
          </Button>
        </div>
      </form>

    </>
  );
}
