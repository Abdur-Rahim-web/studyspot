"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());

        const { error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });

        if (error) {
            toast.error(error.message || "Invalid email or password");
            return;
        }

        toast.success("Logged in successfully!");

        router.push(callbackUrl);
        router.refresh();
    };

    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: callbackUrl,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                <Card className="w-full p-5 sm:p-8 shadow-lg">
                    <div className="mb-6 text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold">
                            Login to Your Account
                        </h1>

                        <p className="mt-2 text-sm sm:text-base text-gray-600">
                            Access your StudySpot account and continue learning.
                        </p>
                    </div>

                    <Form
                        className="flex flex-col gap-4"
                        onSubmit={onSubmit}
                    >
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="password"
                            type="password"
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>
                                Enter your account password
                            </Description>
                            <FieldError />
                        </TextField>

                        <Button
                            type="submit"
                            className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                        >
                            Login
                        </Button>

                        <div className="flex items-center gap-3 w-full">
                            <div className="h-px flex-1 bg-gray-300" />
                            <span className="text-sm text-gray-500">OR</span>
                            <div className="h-px flex-1 bg-gray-300" />
                        </div>

                        <Button
                            type="button"
                            variant="bordered"
                            className="w-full"
                            onClick={handleGoogle}
                        >
                            <FcGoogle className="text-xl" />
                            Continue with Google
                        </Button>

                        <p className="text-center text-sm text-gray-600">
                            Don&apos;t have an account?{" "}
                            <a
                                href="/register"
                                className="font-medium text-indigo-600 hover:underline"
                            >
                                Register
                            </a>
                        </p>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;