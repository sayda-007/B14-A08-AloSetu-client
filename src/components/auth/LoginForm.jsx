"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function GoogleIcon() {
    return (
        <svg
            viewBox="0 0 48 48"
            className="h-5 w-5"
            aria-hidden="true"
        >
            <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
            />
            <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.92c-.58 2.96-2.25 5.48-4.73 7.18l7.26 5.64c4.23-3.91 6.67-9.67 6.67-17.29Z"
            />
            <path
                fill="#FBBC05"
                d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a24 24 0 0 0 0 21.56l7.98-6.19Z"
            />
            <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.26-5.64c-2.01 1.35-4.59 2.15-8.64 2.15-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
            />
        </svg>
    );
}

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notice, setNotice] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: "",
        }));

        setNotice("");
    };

    const validateForm = () => {
        const newErrors = {};

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.password) {
            newErrors.password = "Password is required.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setNotice("");

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Authentication will be connected in the next development step.
            setNotice("Login authentication is not connected yet.");
        } catch (error) {
            setNotice("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleSignIn = () => {
        setNotice("Google authentication is not connected yet.");
    };

    return (
        <div className="flex w-full justify-center px-2 py-12 sm:py-16">
            <div className="w-full max-w-[440px] rounded-[26px] border border-[#F5D887]/30 bg-[#E8D9C8] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] ring-1 ring-black/5 sm:p-8">

                {/* Logo */}
                <div className="mb-7 flex justify-center">
                    <Link href="/" aria-label="Go to AloSetu homepage">
                        <Image
                            src="/alosetu-logo-horizontal.svg"
                            alt="AloSetu"
                            width={190}
                            height={55}
                            priority
                            className="h-auto w-[170px] object-contain sm:w-[190px]"
                        />
                    </Link>
                </div>

                {/* Heading */}
                <div className="mb-7 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-[#302923] sm:text-3xl">
                        Welcome Back!
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-[#62544A]">
                        Sign in to continue making a difference with AloSetu.
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-semibold text-[#302923]"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            autoComplete="email"
                            className="w-full rounded-xl border border-[#6C7F54]/30 bg-[#302923] px-4 py-3 text-sm text-[#F8F4EC] outline-none transition placeholder:text-[#B3A69A] focus:border-[#C44B56] focus:ring-2 focus:ring-[#C44B56]/20"
                        />

                        {errors.email && (
                            <p className="mt-1.5 text-xs text-[#A52F3B]">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-[#302923]"
                            >
                                Password
                            </label>

                            <button
                                type="button"
                                onClick={() => setShowPassword((previous) => !previous)}
                                className="text-[10px] font-semibold text-[#6C7F54] transition hover:text-[#C44B56]"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            className="w-full rounded-xl border border-[#6C7F54]/30 bg-[#302923] px-4 py-3 text-sm text-[#F8F4EC] outline-none transition placeholder:text-[#B3A69A] focus:border-[#C44B56] focus:ring-2 focus:ring-[#C44B56]/20"
                        />

                        {errors.password && (
                            <p className="mt-1.5 text-xs text-[#A52F3B]">
                                {errors.password}
                            </p>
                        )}
                    </div>


                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <Link
                            href="/forgot-password"
                            className="login-forgot-password"
                        >
                            Forgot password?
                        </Link>
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-[#C44B56] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#C44B56]/20 transition hover:bg-[#AD3F4A] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Signing In..." : "Sign In"}
                    </button>

                    {notice && (
                        <p
                            role="status"
                            className="rounded-lg bg-[#F5D887]/40 px-3 py-2 text-center text-xs text-[#62544A]"
                        >
                            {notice}
                        </p>
                    )}
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-[#B9A998]" />
                    <span className="text-xs font-medium text-[#76685D]">
                        OR CONTINUE WITH
                    </span>
                    <div className="h-px flex-1 bg-[#B9A998]" />
                </div>

                {/* Google Sign In */}
                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#D8D0C8] bg-white px-5 py-3 text-sm font-semibold text-[#302923] transition hover:bg-[#F8F4EC]"
                >
                    <GoogleIcon />
                    Continue with Google
                </button>

                {/* Registration Link */}
                <p className="mt-7 text-center text-sm text-[#62544A]">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="font-bold text-[#C44B56] transition hover:text-[#AD3F4A]"
                    >
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
}