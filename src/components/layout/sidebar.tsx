'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Folder, FileEdit, Bell, Settings, ChevronsLeft, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const navItems = [
    { href: '/dashboard', label: '대시보드', icon: Home },
    { href: '/projects', label: '프로젝트', icon: Folder },
    { href: '/retrospectives', label: '회고', icon: FileEdit },
    { href: '/notifications', label: '알림', icon: Bell },
    { href: '/settings', label: '설정', icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="flex h-screen w-52 shrink-0 flex-col border-r border-slate-200 bg-white">
            <div className="flex items-center gap-2.5 px-5 py-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    <Code2 className="h-4 w-4" />
                </div>
                <span className="text-lg font-bold text-slate-900">DevLog</span>
            </div>

            <nav className="flex-1 px-3 py-2">
                <ul className="space-y-0.5">
                    {navItems.map(({ href, label, icon: Icon }) => {
                        const active = pathname === href || pathname.startsWith(href + '/');
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={cn(
                                        'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                                        active
                                            ? 'bg-indigo-50 text-indigo-600'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                                    )}
                                >
                                    <Icon className="h-4 w-4 shrink-0" />
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="border-t border-slate-100 p-3">
                <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700">
                    <ChevronsLeft className="h-4 w-4 shrink-0" />
                    사이트맵 접기
                </button>
            </div>
        </aside>
    );
}
