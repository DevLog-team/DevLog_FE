import * as React from 'react';
import { cn } from '@/lib/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    errorMessage?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, errorMessage, id, ...props }, ref) => {
        return (
            <div className="space-y-2">
                {label && (
                    <label htmlFor={id} className="text-sm font-medium text-slate-700">
                        {label}
                    </label>
                )}

                <input
                    ref={ref}
                    id={id}
                    className={cn(
                        'h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400',
                        errorMessage &&
                        'border-red-400 focus:border-red-500 focus:ring-red-500/10',
                        className,
                    )}
                    {...props}
                />

                {errorMessage && (
                    <p className="text-sm font-medium text-red-500">{errorMessage}</p>
                )}
            </div>
        );
    },
);

Input.displayName = 'Input';