'use client';

import { useState } from 'react';
import { Search, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Folder,
    Code2,
    Calendar,
    CheckCircle2,
    Bug,
    Rocket,
} from 'lucide-react';
import { ProjectCard } from '@/features/project/components/project-card';
import type { Project } from '@/features/project/types';

const MOCK_PROJECTS: Project[] = [
    {
        id: '1',
        name: 'DevLog',
        description: '개발자 협업 및 작업 관리를 위한 올인원 플랫폼 개발 프로젝트',
        status: 'ACTIVE',
        progress: 76,
        totalTasks: 128,
        completedTasks: 76,
        inProgressTasks: 34,
        dueDate: '2025. 06. 30',
        dDay: 24,
        icon: Folder,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-50',
    },
    {
        id: '2',
        name: 'Portfolio API',
        description: '포트폴리오 서비스의 백엔드 API 개발 프로젝트',
        status: 'ACTIVE',
        progress: 54,
        totalTasks: 64,
        completedTasks: 35,
        inProgressTasks: 29,
        dueDate: '2025. 07. 15',
        dDay: 39,
        icon: Code2,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
    },
    {
        id: '3',
        name: 'Study Tracker',
        description: '학습 습관 추적 및 분석 웹 앱 개발 프로젝트',
        status: 'ACTIVE',
        progress: 32,
        totalTasks: 45,
        completedTasks: 14,
        inProgressTasks: 31,
        dueDate: '2025. 07. 31',
        dDay: 55,
        icon: Calendar,
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-50',
    },
    {
        id: '4',
        name: 'Team Wiki',
        description: '팀 지식 공유를 위한 위키 시스템 구축 프로젝트',
        status: 'COMPLETED',
        progress: 100,
        totalTasks: 28,
        completedTasks: 28,
        inProgressTasks: 0,
        dueDate: '2025. 05. 20',
        icon: CheckCircle2,
        iconColor: 'text-green-600',
        iconBg: 'bg-green-50',
    },
    {
        id: '5',
        name: 'Bug Tracker',
        description: '버그 리포트 및 추적 시스템 개선 프로젝트',
        status: 'COMPLETED',
        progress: 100,
        totalTasks: 36,
        completedTasks: 36,
        inProgressTasks: 0,
        dueDate: '2025. 05. 05',
        icon: Bug,
        iconColor: 'text-red-500',
        iconBg: 'bg-red-50',
    },
    {
        id: '6',
        name: 'Landing Page',
        description: '신규 서비스 론칭을 위한 랜딩 페이지 제작',
        status: 'COMPLETED',
        progress: 100,
        totalTasks: 18,
        completedTasks: 18,
        inProgressTasks: 0,
        dueDate: '2025. 04. 18',
        icon: Rocket,
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
    },
];

const STATUS_OPTIONS = [
    { value: 'all', label: '전체 상태' },
    { value: 'ACTIVE', label: '진행 중' },
    { value: 'COMPLETED', label: '완료' },
];

export default function ProjectsPage() {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const filtered = MOCK_PROJECTS.filter((p) => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="p-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Projects</h1>
                <p className="mt-1 text-sm text-slate-500">프로젝트별 작업 현황을 관리하세요</p>
            </div>

            <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="프로젝트 검색"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-10 w-60 rounded-xl border border-slate-200 bg-white pl-9 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10"
                        />
                    </div>

                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="h-10 appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-9 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10"
                        >
                            {STATUS_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-slate-400" />
                    </div>
                </div>

                <button className="flex h-10 items-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700">
                    <Plus className="h-4 w-4" />
                    프로젝트 생성
                </button>
            </div>

            {filtered.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                    <Folder className="mb-3 h-10 w-10" />
                    <p className="text-sm">검색 결과가 없습니다.</p>
                </div>
            )}

            <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-slate-500">총 {MOCK_PROJECTS.length}개 프로젝트</p>
                <div className="flex items-center gap-2">
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50">
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                        1
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50">
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">12개씩 보기</span>
                    <ChevronRight className="h-3.5 w-3.5 rotate-90 text-slate-400" />
                </div>
            </div>
        </div>
    );
}
