import { AuthVisuals } from "@/components/auth/RegisterVisuals";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-blue-hero ">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-25"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-300 items-center justify-between gap-6 lg:gap-8 xl:gap-10">
        <AuthVisuals
          title="Sign in with ease"
          description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
        />
        <LoginForm />
      </div>
    </main>
  );
}
