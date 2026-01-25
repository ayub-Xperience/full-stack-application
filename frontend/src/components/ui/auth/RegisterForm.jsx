import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../input";
import { Button } from "../button";

export const RegisterForm = () => {
  return (
    <Card className="w-full border-border">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-xl text-center">Create an account</CardTitle>
        <CardDescription className="text-center">
          Enter your details to register
        </CardDescription>
        <form>
          <CardContent>
            <div className="space-y-2 pt-0">
              <div className="text-sm font-medium text-left">Full Name</div>
              <Input name="name" placeholder="john Doe" required />
            </div>
            <div className="space-y-2 pt-0">
              <div className="text-sm font-medium text-left">Eamil</div>
              <Input name="email" placeholder="email@gmail.com" required />
            </div>
            <div className="space-y-2 pt-0">
              <div className="text-sm font-medium text-left">password</div>
              <Input name="password" placeholder="******" required />
            </div>
            <div className="space-y-2 pt-0 mb-2">
              <div className="text-sm font-medium text-left">
                Confirm password
              </div>
              <Input name="password" placeholder="******" required />
            </div>
            <Button className="pt-2 w-full">Register</Button>
          </CardContent>
          <div>
            <CardFooter className={"flex justify-center pt-0"}>
                <div className="text-center text-sm">already have an account ? <a href="" className="text-primary hover:underline cursor-pointer">Sign in</a></div>
            </CardFooter>
          </div>
        </form>
      </CardHeader>
    </Card>
  );
};
