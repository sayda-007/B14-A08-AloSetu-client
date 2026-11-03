"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState({
    type: "",
    text: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setNotice({
      type: "",
      text: "",
    });
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.password.trim()) {
      nextErrors.password = "Password is required.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setNotice({
        type: "error",
        text: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setErrors({
      email: "",
      password: "",
    });
    setIsSubmitting(true);
    setNotice({
      type: "info",
      text: "Login will be available once authentication is connected.",
    });

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 600);
  };

  const handleGoogleSignIn = () => {
    setNotice({
      type: "info",
      text: "Google authentication will be connected during the authentication milestone.",
    });
  };

  return (
    <div className="w-full max-w-md">
      <div className="rounded-[30px] border border-white/10 bg-[#2b2421] p-5 shadow-[0_18px_42px_rgba(60,41,35,0.06)] sm:p-7 lg:p-8">
        <div className="mb-7 flex items-center justify-center">
          <Link href="/" className="inline-flex items-center justify-center" aria-label="AloSetu home">
            <Image
              src="/alosetu-logo-horizontal.svg"
              alt="AloSetu"
              width={220}
              height={64}
              priority
              className="h-auto w-[180px] sm:w-[200px]"
            />
          </Link>
        </div>

        <div className="mb-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5d887]">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#f8f4ec] sm:text-4xl">
            Sign in to AloSetu
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#e8ded1] sm:text-base">
            Log in to join community initiatives, stay involved, and help shape stronger neighborhoods.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-[#f8f4ec]">
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
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`h-12 w-full rounded-full border px-4 text-sm text-[#f8f4ec] placeholder:text-[#e8ded1]/70 outline-none transition focus:ring-2 ${
                errors.email
                  ? "border-[#f2897b] bg-[#352f2b] focus:border-[#f2897b] focus:ring-[#f2897b]/30"
                  : "border-white/10 bg-[#352f2b] focus:border-[#f5d887] focus:ring-[#f5d887]/30"
              }`}
            />
            {errors.email ? (
              <p id="email-error" className="text-sm text-[#f2897b]">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-[#f8f4ec]">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? "password-error" : undefined}
                className={`h-12 w-full rounded-full border px-4 pr-12 text-sm text-[#f8f4ec] placeholder:text-[#e8ded1]/70 outline-none transition focus:ring-2 ${
                  errors.password
                    ? "border-[#f2897b] bg-[#352f2b] focus:border-[#f2897b] focus:ring-[#f2897b]/30"
                    : "border-white/10 bg-[#352f2b] focus:border-[#f5d887] focus:ring-[#f5d887]/30"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                className="absolute inset-y-0 right-3 flex items-center justify-center rounded-full px-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f5d887] transition hover:text-[#f8f4ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d887]/60"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password ? (
              <p id="password-error" className="text-sm text-[#f2897b]">
                {errors.password}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#c44b56] px-5 text-sm font-semibold text-white transition hover:bg-[#ae3b4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6c7f54] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d1916] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>

          {notice.text ? (
            <p
              role="status"
              className={`text-sm leading-6 ${
                notice.type === "error" ? "text-[#f2897b]" : "text-[#f5d887]"
              }`}
            >
              {notice.text}
            </p>
          ) : null}
        </form>

        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" aria-hidden="true" />
          <span className="relative bg-[#2b2421] px-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e8ded1]">
            Or
          </span>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-[#352f2b] px-5 text-sm font-semibold text-[#f8f4ec] transition hover:border-[#f5d887]/40 hover:bg-[#3a322f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d887]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d1916]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black text-[#1d1916]">
            G
          </span>
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-[#e8ded1]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-[#f5d887] transition hover:text-[#f8f4ec]">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
