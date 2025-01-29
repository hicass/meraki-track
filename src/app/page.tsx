'use client';
import LoginForm from "@/components/LoginForm";
import LogoutButton from "@/components/LogoutButton";
import SignUpForm from "@/components/SignUpForm";
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
