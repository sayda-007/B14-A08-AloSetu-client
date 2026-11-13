"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePassword(value) {
    if (!value) {
        return "Password is required.";
    }

    if (value.length < 6) {
        return "Password must be at least 6 characters long.";
    }

    if (!/[a-z]/.test(value)) {
        return "Password must include at least one lowercase letter.";
    }

    if (!/[A-Z]/.test(value)) {
        return "Password must include at least one uppercase letter.";
    }

    return "";
}

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        profilePhoto: "",
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
        const nextErrors = {};

        if (!formData.fullName.trim()) {
            nextErrors.fullName = "Full name is required.";
        }

        if (!formData.email.trim()) {
            nextErrors.email = "Email address is required.";
        } else if (!validateEmail(formData.email)) {
            nextErrors.email = "Please enter a valid email address.";
        }

        if (!formData.profilePhoto.trim()) {
            nextErrors.profilePhoto = "Profile photo URL is required.";
        } else {
            try {
                new URL(formData.profilePhoto);
            } catch {
                nextErrors.profilePhoto = "Please enter a valid image URL.";
            }
        }

        const passwordError = validatePassword(formData.password);
        if (passwordError) {
            nextErrors.password = passwordError;
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setNotice("");

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            setNotice("Registration is not connected yet. Authentication will be added in a later milestone.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="login-page">
            <div className="login-page__container">
                <div className="login-card">
                    <div className="login-brand register-brand">
                        <Link href="/" aria-label="Go to AloSetu homepage">
                            <Image
                                src="/alosetu-logo-horizontal-light.svg"
                                alt="AloSetu"
                                width={190}
                                height={55}
                                priority
                                className="h-auto w-[170px] object-contain sm:w-[190px]"
                            />
                        </Link>
                    </div>

                    <div className="mb-7 text-center">
                        <h1 className="register-heading text-2xl font-bold tracking-tight sm:text-3xl">
                            Create your account
                        </h1>
                        <p className="register-subtitle mt-2 text-sm leading-6">
                            Join AloSetu and help build stronger, kinder communities.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form register-form">
                        <div>
                            <label htmlFor="fullName" className="register-label mb-2 block text-sm font-semibold">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                autoComplete="name"
                                className="login-input register-input"
                            />
                            {errors.fullName && (
                                <p className="mt-1.5 text-xs text-[#A52F3B]">{errors.fullName}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="register-label mb-2 block text-sm font-semibold">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="login-input register-input"
                            />
                            {errors.email && (
                                <p className="mt-1.5 text-xs text-[#A52F3B]">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="profilePhoto" className="register-label mb-2 block text-sm font-semibold">
                                Profile Photo URL
                            </label>
                            <input
                                id="profilePhoto"
                                type="url"
                                name="profilePhoto"
                                value={formData.profilePhoto}
                                onChange={handleChange}
                                placeholder="https://example.com/avatar.jpg"
                                autoComplete="url"
                                className="login-input register-input"
                            />
                            {errors.profilePhoto && (
                                <p className="mt-1.5 text-xs text-[#A52F3B]">{errors.profilePhoto}</p>
                            )}
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <label htmlFor="password" className="register-label block text-sm font-semibold">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((previous) => !previous)}
                                    className="password-toggle"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>

                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                autoComplete="new-password"
                                className="login-input register-input"
                            />

                            <p className="register-helper mt-2 text-[11px]">
                                Use at least 6 characters, including 1 uppercase and 1 lowercase letter.
                            </p>

                            {errors.password && (
                                <p className="mt-1.5 text-xs text-[#A52F3B]">{errors.password}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="login-submit-button"
                        >
                            {isSubmitting ? "Registering..." : "Register"}
                        </button>

                        {notice && (
                            <p
                                role="status"
                                aria-live="polite"
                                className="rounded-lg bg-[#F5D887]/40 px-3 py-2 text-center text-xs text-[#62544A]"
                            >
                                {notice}
                            </p>
                        )}
                    </form>

                    <p className="register-account mt-7 text-center text-sm">
                        Already have an account? {" "}
                        <Link href="/login" className="register-account-link font-bold transition">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
