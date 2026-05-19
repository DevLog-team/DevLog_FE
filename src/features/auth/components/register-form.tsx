'use client'

import {Code2} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function RegisterForm() {
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

                    <form className="space-y-5">
                            <Input
                                id="nickname"
                                label="이름"
                                type="nickname"
                                placeholder="이름을 입력하세요."
                                autoComplete="nickname"
                            />

                            <Input
                                id="email"
                                label="이메일"
                                type="email"
                                placeholder="이메일을 입력하세요."
                                autoComplete="email"
                            />

                            <Input
                                id="password"
                                label="비밀번호"
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                autoComplete="current-password"
                            />

                            <Input
                                id="check-password"
                                label="비밀번호 확인"
                                type="check-password"
                                placeholder="비밀번호를 다시 입력하세요"
                                autoComplete="check-password"
                            />
                        <Button type="submit" size="lg" className="w-full">
                            회원가입
                        </Button>
                    </form>

                    <div className="mt-8 flex items-center gap-4">
                        <div className="h-px flex-1 bg-slate-100" />
                        <span className="text-xs text-slate-400">또는</span>
                        <div className="h-px flex-1 bg-slate-100" />
                    </div>

                    <div className="pt-6 text-center">
                        <p className="text-sm text-slate-500">
                            이미 계정이 있으신가요?{' '}
                            <Link
                                href="/login"
                                className="font-semibold text-indigo-600 transition hover:text-indigo-700"
                            >
                                로그인
                            </Link>
                        </p>
                    </div>
                </div>

            <p className="mt-6 text-center text-xs text-slate-400">
                회원가입 시 DevLog의 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
            </p>
        </div>
    );
}