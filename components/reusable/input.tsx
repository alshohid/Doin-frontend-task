import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  labelClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      error,
      helperText,
      type = "text",
      className,
      containerClassName,
      labelClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("w-full", containerClassName)}>
        {label ? (
          <label
            htmlFor={id}
            className={cn(
              "block text-xs font-medium text-neutral-700 sm:text-sm",
              labelClassName
            )}
          >
            {label}
          </label>
        ) : null}
        <input
          id={id}
          ref={ref}
          type={type}
          className={cn(
            "mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors  focus:outline-none sm:py-3",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />
        {error ? (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        ) : helperText ? (
          <p className="mt-1 text-xs text-neutral-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
