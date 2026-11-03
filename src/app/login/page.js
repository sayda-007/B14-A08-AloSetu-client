import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Login | AloSetu",
  description:
    "Sign in to AloSetu to participate in community initiatives and manage your activities.",
};

export default function LoginPage() {
  return (
    <main className="flex-1 bg-[#1d1916] text-[#F8F4EC]">
      <section className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <LoginForm />
      </section>
    </main>
  );
}
