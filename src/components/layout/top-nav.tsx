'use client';

import { Search, Bell, HelpCircle, ChevronDown } from 'lucide-react';
import { useAuthStore } from '@/store/auth';

export function TopNav() {
    const user = useAuthStore((s) => s.user);
    return (
        <header className="flex h-14 shrink-0 items-center justify-end gap-2 border-b border-slate-200 bg-white px-6">
            <button className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700">
                <Search className="h-4 w-4" />
            </button>

            <button className="relative flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700">
                <Bell className="h-4 w-4" />
                <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                    3
                </span>
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700">
                <HelpCircle className="h-4 w-4" />
            </button>

            <div className="ml-1 h-5 w-px bg-slate-200" />

            <button className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
                <div className="h-7 w-7 overflow-hidden rounded-full bg-slate-200">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=devlog"
                        alt="avatar"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                        }}
                    />
                </div>
                <span>{user?.name ?? '김개발'}</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>
        </header>
    );
}
