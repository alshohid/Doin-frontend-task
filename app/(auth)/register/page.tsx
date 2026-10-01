import { RegisterVisuals } from "@/components/auth/RegisterVisuals";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-blue-hero ">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-25"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-300 items-center justify-between gap-6 lg:gap-8 xl:gap-10">
        <RegisterVisuals />
        <RegisterForm />
      </div>
    </main>
  );
}
