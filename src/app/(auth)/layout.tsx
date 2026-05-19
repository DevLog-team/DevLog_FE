import { AuthIntroPanel } from '@/features/auth/components/auth-intro-panel';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-900">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
                <AuthIntroPanel />
                <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
                    {children}
                </section>
            </div>
        </main>
    );
}