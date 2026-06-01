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
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());

        const { error } = await authClient.signUp.email({
            name: user.name,
            image: user.image,
            email: user.email,
            password: user.password,
        });

        if (error) {
            toast.error(error.message || "Registration failed");
            return;
        }

        toast.success("Registration successful! Please login.");

        router.push("/login");
    };

    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
                <Card className="w-full p-5 sm:p-8 shadow-lg">
                    <div className="mb-6 text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold">
                            Create Your Account
                        </h1>

                        <p className="mt-2 text-sm sm:text-base text-gray-600">
                            Join StudySpot and start sharing your notes today!
                        </p>
                    </div>

                    <Form
                        className="flex flex-col gap-4"
                        onSubmit={onSubmit}
                    >
                        <TextField
                            isRequired
                            name="name"
                            type="text"
                        >
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="image"
                            type="url"
                        >
                            <Label>Photo URL</Label>
                            <Input placeholder="https://example.com/photo.jpg" />
                            <FieldError />
                        </TextField>

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
                            validate={(value) => {
                                if (value.length < 6) {
                                    return "Password must be at least 6 characters";
                                }

                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }

                                if (!/[a-z]/.test(value)) {
                                    return "Password must contain at least one lowercase letter";
                                }

                                return null;
                            }}
                        >
                            <Label>Password</Label>

                            <Input placeholder="Enter your password" />

                            <Description>
                                Minimum 6 characters, 1 uppercase and 1 lowercase letter
                            </Description>

                            <FieldError />
                        </TextField>

                        <Button
                            type="submit"
                            className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                        >
                            Register
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
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="font-medium text-indigo-600 hover:underline"
                            >
                                Login
                            </a>
                        </p>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default SignUpPage;