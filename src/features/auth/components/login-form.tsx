'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { login } from '@/lib/auth/api';

const schema = z.object({
    email: z.string().email('올바른 이메일 형식이 아닙니다'),
    password: z.string().min(1, '비밀번호를 입력해주세요'),
});

type LoginFormValues = z.infer<typeof schema>;

export function LoginForm() {
    const router = useRouter();
    const [apiError, setApiError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        setApiError('');
        try {
            const { accessToken } = await login(data);
            document.cookie = `access_token=${accessToken}; path=/`;
            router.push('/dashboard');
        } catch {
            setApiError('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div className="w-full max-w-md">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
                <div className="mb-10 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
                        <Code2 className="h-6 w-6" />
                    </div>

                    <h1 className="text-2xl font-bold text-slate-950">DevLog</h1>
                    <p className="mt-2 text-sm text-slate-500">
                        개발자를 위한 작업 기록 및 회고 플랫폼
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <Input
                        id="email"
                        label="이메일"
                        type="email"
                        placeholder="devlog@example.com"
                        autoComplete="email"
                        errorMessage={errors.email?.message}
                        {...register('email')}
                    />

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-slate-700"
                            >
                                비밀번호
                            </label>

                            <button
                                type="button"
                                className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700"
                            >
                                비밀번호 찾기
                            </button>
                        </div>

                        <Input
                            id="password"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            autoComplete="current-password"
                            errorMessage={errors.password?.message}
                            {...register('password')}
                        />
                    </div>

                    {apiError && (
                        <p className="text-sm font-medium text-red-500">{apiError}</p>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? '로그인 중...' : '로그인'}
                    </Button>
                </form>

                <div className="mt-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-100" />
                    <span className="text-xs text-slate-400">또는</span>
                    <div className="h-px flex-1 bg-slate-100" />
                </div>

                <div className="pt-6 text-center">
                    <p className="text-sm text-slate-500">
                        아직 계정이 없으신가요?{' '}
                        <Link
                            href="/register"
                            className="font-semibold text-indigo-600 transition hover:text-indigo-700"
                        >
                            회원가입
                        </Link>
                    </p>
                </div>
            </div>

            <p className="mt-6 text-center text-xs text-slate-400">
                로그인 시 DevLog의 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
            </p>
        </div>
    );
}