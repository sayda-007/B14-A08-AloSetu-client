import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
    title: "Login | AloSetu",
    description:
        "Sign in to AloSetu to participate in community initiatives and manage your activities.",
};

export default function LoginPage() {
    return (
        <main className="login-page">
            <div className="login-page__container">
                <LoginForm />
            </div>
        </main>
    );
}