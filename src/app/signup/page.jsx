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

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            image: user.image || undefined,
            email: user.email,
            password: user.password,
        });

        if (error) {
            toast.error(error.message || "Signup failed");
            return;
        }

        toast.success("Account created successfully!");
        router.push("/login");
    };

    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div>
                    <h1 className="text-3xl font-bold text-center mt-10">
                        Create Your Account
                    </h1>

                    <p className="text-center text-gray-600 mt-2">
                        Join StudySpot and start sharing your notes today!
                    </p>
                </div>

                <Card className="mx-auto my-10 p-6 w-full max-w-2xl">
                    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                        <TextField isRequired name="name" type="text">
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                            <FieldError />
                        </TextField>

                        <TextField name="image" type="url">
                            <Label>Image URL</Label>
                            <Input placeholder="Image URL" />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="password"
                            type="password"
                            minLength={8}
                        >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <Description>
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </Description>
                            <FieldError />
                        </TextField>

                        <Button
                            type="submit"
                            className="bg-indigo-600 text-white hover:bg-indigo-700 w-full"
                        >
                            Create Account
                        </Button>

                        <p className="text-center text-sm text-gray-600">or</p>

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={handleGoogle}
                        >
                            <FcGoogle /> Sign up with Google
                        </Button>

                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <a href="/login" className="text-indigo-600 hover:underline">
                                Log in
                            </a>
                        </p>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default SignUpPage;