"use client";
import React, { FormEvent, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userRegister } from "@/services/actions/userRegister";

const RegisterPage = () => {
  const router = useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    const userInfo = {
      firstname,
      lastname,
      email,
      password,
    };

    if (!firstname || !lastname || !email || !password) {
      return toast.info("All fields are required");
    }

    setLoading(true); 

    try {
      const res = await userRegister(userInfo);

      if (res?.data?.id) {
        toast.success(res.message);
        router.push("/login");
      }
    } catch (error: any) {
      // Parse the error message if it's a stringified object
      let errorMessage = "An unexpected error occurred";
      let errorSources = [];

      try {
        const parsedError = JSON.parse(error.message);
        errorMessage = parsedError.message || errorMessage;
        errorSources = parsedError.errorSources || [];
      } catch (parseError) {
        // If parsing fails, use the raw error message
        errorMessage = error.message || errorMessage;
      }

      if (errorSources.length > 0) {
        // If there are specific error sources, show them
        errorSources.forEach((source: { path: string; message: string }) => {
          toast.error(source.message);
        });
      } else {
        // Otherwise, show the main error message
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Welcome Nihams Ecom!</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="Ahshan"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Habib"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="********"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account..." : "Create an account"}
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
