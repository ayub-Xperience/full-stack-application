import React, { useState } from "react";
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

import { useNavigate } from "react-router";
import { Loader } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api/apiClient";
import { extractErrorMessages } from "@/util/errorUtils";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const loginMutation = useMutation({
    mutationFn: async (Credentials) => {
      const response = await api.post("/user/login", Credentials);
      return response.data;
    },
    onSuccess: (data) => {
      // todo : handle token
      // navigate("/dashboard");
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
      setError(extractErrorMessages(error));
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!formValues.email || !formValues.password) {
      setError("All fields are required ");
      return;
    }
    loginMutation.mutate({
      email: formValues.email,
      password: formValues.password,
    });
  };

  return (
    <Card className="w-full border-border">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-xl text-center">Signin</CardTitle>
        <CardDescription className="text-center">
          Enter your credentails to access your accont
        </CardDescription>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-2 pt-0">
              {error && (
                <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md">
                  {error}
                </div>
              )}

              <div className="text-sm font-medium text-left">Eamil</div>
              <Input
                name="email"
                placeholder="email@gmail.com"
                required
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2 pt-0">
              <div className="text-sm font-medium text-left">password</div>
              <Input
                name="password"
                placeholder="******"
                required
                value={formValues.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="py-4">
              <Button type="submit" className={"w-full cursor-pointer"}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    {" "}
                    <Loader /> login account..{" "}
                  </span>
                ) : (
                  "Loggin Account"
                )}
              </Button>
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
