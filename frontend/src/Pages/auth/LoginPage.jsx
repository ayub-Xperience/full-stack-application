import { LoginForm } from "@/components/ui/auth/LoginForm";
import { RegisterForm } from "@/components/ui/auth/RegisterForm";
import React from "react";

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/20 opacity-50"> */}
        <div className="z-10 w-full max-w-md px-4">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-foreground">welcome back</h1>
            <p>we're glad see you again</p>
          </div>
          {/* registration form  */}
          <LoginForm />
        </div>
      </div>
    // </div>
  );
};
