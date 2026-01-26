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
import { useFormStatus } from "react-dom";
import { useNavigate } from "react-router";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className={"w-full cursor-pointer"}>
      {pending ? (
        <span className="flex items-center gap-2">
          <Loader /> Creating account...
        </span>
      ) : (
        "Create Account"
      )}
    </Button>
  );
}

export const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Card className="w-full border-border">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-xl text-center">Signin</CardTitle>
        <CardDescription className="text-center">
          Enter your credentails to access your accont
        </CardDescription>
        <form>
          <CardContent>
            <div className="space-y-2 pt-0">
              <div className="text-sm font-medium text-left">Eamil</div>
              <Input name="email" placeholder="email@gmail.com" required />
            </div>
            <div className="space-y-2 pt-0">
              <div className="text-sm font-medium text-left">password</div>
              <Input name="password" placeholder="******" required />
            </div>

            <div className="py-4">
              <SubmitButton />
            </div>
          </CardContent>
          <div>
            <CardFooter className={"flex justify-center pt-0"}>
              <div className="text-center text-sm">
                {" "}
                Don't have an account ?{" "}
                <a
                  onClick={() => navigate("/register")}
                  className="text-primary hover:underline cursor-pointer"
                >
                  Sign up
                </a>
              </div>
            </CardFooter>
          </div>
        </form>
      </CardHeader>
    </Card>
  );
};
