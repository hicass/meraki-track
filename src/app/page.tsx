'use client';
import LoginForm from "@/features/auth/LoginForm";
import LogoutButton from "@/features/auth/LogoutButton";
import SignUpForm from "@/features/auth/SignUpForm";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { session } = useAuth();

  return (
    <main>
    <h1>Hello World!</h1>

    {session ? (
        <p>Hello {session.user?.user_metadata.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}

    <SignUpForm />
    <LoginForm />
    <LogoutButton />
    </main>
  );
}
