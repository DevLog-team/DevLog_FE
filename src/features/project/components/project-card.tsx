import { MoreHorizontal, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const isActive = project.status === 'ACTIVE';
    const Icon = project.icon;

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className={cn(
                            'flex h-10 w-10 items-center justify-center rounded-xl',
                            project.iconBg,
                        )}
                    >
                        <Icon className={cn('h-5 w-5', project.iconColor)} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{project.name}</h3>
                </div>
                <button className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600">
                    <MoreHorizontal className="h-4 w-4" />
                </button>
            </div>

            <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-slate-500">
                {project.description}
            </p>

            <div className="mb-3">
                <span
                    className={cn(
                        'inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold',
                        isActive
                            ? 'bg-green-50 text-green-600'
                            : 'bg-teal-50 text-teal-600',
                    )}
                >
                    {project.status}
                </span>
            </div>

            <div className="mb-4">
                <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">진행률</span>
                    <span className="text-xs font-bold text-slate-700">{project.progress}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                        className="h-full rounded-full bg-indigo-600 transition-all"
                        style={{ width: `${project.progress}%` }}
                    />
                </div>
            </div>

            <div className="mb-4 flex gap-5">
                <Stat label="전체 작업" value={project.totalTasks} />
                <Stat label="완료" value={project.completedTasks} />
                <Stat label="진행 중" value={project.inProgressTasks} />
            </div>

            <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{isActive ? '종료 예정일' : '종료일'}</span>
                </div>
                <span className="font-medium text-slate-600">
                    {project.dueDate}
                    {isActive && project.dDay !== undefined && (
                        <span className="ml-1.5 text-slate-400">
                            (D-{project.dDay})
                        </span>
                    )}
                </span>
            </div>
        </div>
    );
}

function Stat({ label, value }: { label: string; value: number }) {
    return (
        <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="text-[11px] text-slate-500">{label}</span>
            </div>
            <span className="pl-2.5 text-sm font-bold text-slate-800">{value}</span>
        </div>
    );
}
