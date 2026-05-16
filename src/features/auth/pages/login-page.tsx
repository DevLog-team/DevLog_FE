import { AuthIntroPanel } from '@/features/auth/components/auth-intro-panel';
import { LoginForm } from '@/features/auth/components/login-form';

export function LoginPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-900">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
                <AuthIntroPanel />

                <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
                    <LoginForm />
                </section>
            </div>
        </main>
    );
}