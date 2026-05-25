import type { LucideIcon } from 'lucide-react';

export type ProjectStatus = 'ACTIVE' | 'COMPLETED';

export interface Project {
    id: string;
    name: string;
    description: string;
    status: ProjectStatus;
    progress: number;
    totalTasks: number;
    completedTasks: number;
    inProgressTasks: number;
    dueDate: string;
    dDay?: number;
    icon: LucideIcon;
    iconColor: string;
    iconBg: string;
}
