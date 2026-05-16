import {
    Code2,
    LayoutDashboard,
    ListChecks,
    ShieldCheck,
} from 'lucide-react';

export function AuthIntroPanel() {
    return (
        <section className="relative hidden overflow-hidden bg-slate-950 px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.25),_transparent_35%)]" />

            <div className="relative z-10">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500 shadow-lg shadow-indigo-500/30">
                        <Code2 className="h-6 w-6" />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold tracking-tight">DevLog</h1>
                        <p className="text-sm text-slate-300">
                            Developer Work Management
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-xl">
                <div className="mb-8 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                    프로젝트, 작업, 회고를 한 곳에서 관리하세요
                </div>

                <h2 className="text-5xl font-bold leading-tight tracking-tight">
                    개발자를 위한
                    <br />
                    작업 기록 플랫폼
                </h2>

                <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                    DevLog는 프로젝트별 작업 관리, 칸반 보드, 주간 회고, 작업 이력을
                    제공하는 개발자 친화적인 생산성 도구입니다.
                </p>

                <div className="mt-10 grid max-w-lg grid-cols-1 gap-4">
                    <FeatureItem
                        icon={<LayoutDashboard className="h-5 w-5" />}
                        title="프로젝트 대시보드"
                        description="진행률, 완료 작업, 지연 작업을 한눈에 확인"
                    />

                    <FeatureItem
                        icon={<ListChecks className="h-5 w-5" />}
                        title="작업 관리"
                        description="TODO, 진행 중, 완료, 보류 상태 기반 관리"
                    />

                    <FeatureItem
                        icon={<ShieldCheck className="h-5 w-5" />}
                        title="작업 이력 추적"
                        description="상태 변경과 주요 수정 이력을 기록"
                    />
                </div>
            </div>

            <div className="relative z-10 text-sm text-slate-400">
                © 2026 DevLog. All rights reserved.
            </div>
        </section>
    );
}

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
    return (
        <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-indigo-200">
                {icon}
            </div>

            <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">{description}</p>
            </div>
        </div>
    );
}