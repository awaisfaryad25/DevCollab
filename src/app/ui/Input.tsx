import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      onRightIconClick,
      className,
      id,
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? React.useId();

    return (
      <div className="flex w-full flex-col gap-1.5">
        {/* Label */}
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-text">
            {label}
            {required && (<span className="ml-1 text-danger" aria-hidden="true">*</span>)}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative flex items-center">

          {/* Left icon */}
          {leftIcon && (
            <div className="pointer-events-none absolute left-3 2xl:left-4 flex items-center text-text">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            className={cn(
              // base
              "w-full rounded-lg border bg-background text-sm text-text placeholder:text-muted-foreground",
              "px-3 py-2.5 2xl:px-4 transition-colors outline-none",
              "focus:ring-2 focus:ring-offset-1",
              leftIcon && "pl-9 2xl:pl-10",
              rightIcon && "pr-9",
              !error && " focus:ring-gray-300",
              error && "border-danger focus:ring-danger",
              // disabled state
              disabled && "cursor-not-allowed opacity-50",
              className
            )}
            {...props}
          />

          {/* Right icon */}
          {rightIcon && (
            <div
              className={cn(
                "absolute right-3 2xl:right-4 flex items-center text-muted-foreground",
                onRightIconClick ? "cursor-pointer hover:text-primary" : "pointer-events-none"
              )}
              onClick={onRightIconClick}
              aria-hidden={!onRightIconClick}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {/* Error message */}
        {error && (
          <p id={`${inputId}-error`} className="flex items-center gap-1 text-xs text-danger" role="alert">
            {error}
          </p>
        )}

        {/* Hint text */}
        {!error && hint && (<p id={`${inputId}-hint`} className="text-xs">{hint}</p>)}
      </div>
    );
  }
);

// Input.displayName = "Input";
export default Input;