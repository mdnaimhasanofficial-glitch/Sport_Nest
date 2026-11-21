import SignInForm from "@/components/shared/SignInForm";

export default function SignInPage() {
  async function handleSignIn(formData: FormData) {
    "use server";

    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();

    if (!email || !password || password.length < 6) {
      return;
    }

    // এখানে আপনার email/password login লজিক বসাবেন
    console.log({ email, password });
  }

  async function handleGoogleSignIn() {
    "use server";

    // এখানে NextAuth / BetterAuth / Firebase / Supabase Google sign-in কল করবেন
    // যেমন: await signIn("google", { redirectTo: "/" });
    console.log("Google Sign In triggered");
  }

  return <SignInForm />;
}
