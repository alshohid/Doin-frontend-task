"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchBarProps {
  placeholder?: string;
  button?: ReactNode;
  action?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  showDropdown?: boolean;
  dropdownOptions?: string[];
  selectedOption?: string;
  onSelectOption?: (option: string) => void;
  defaultValue?: string;
}

export function SearchBar({
  placeholder = "Course, topic, creator",
  button = "Search",
  action = "/courses",
  className,
  inputClassName,
  buttonClassName,
  showDropdown = false,
  dropdownOptions = ["Courses", "Design", "Business", "Data & Analytics", "Productivity"],
  selectedOption,
  onSelectOption,
  defaultValue = "",
}: SearchBarProps) {
  const [currentOption, setCurrentOption] = useState(
    selectedOption ?? dropdownOptions[0] ?? "Courses"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedOption) {
      setCurrentOption(selectedOption);
    }
  }, [selectedOption]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setCurrentOption(option);
    setIsDropdownOpen(false);
    onSelectOption?.(option);
  };

  return (
    <form
      action={action}
      className={cn("mx-auto flex w-full max-w-155 items-center gap-3 max-md:gap-2", className)}
    >
      <label
        className={cn(
          "flex h-13 min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 sm:px-6 text-text-secondary shadow-sm transition-shadow focus-within:shadow-md",
          inputClassName
        )}
      >
        <Search size={19} aria-hidden="true" className="shrink-0 text-text-muted" />
        <input
          className="w-full border-0 bg-transparent text-[14px] text-text-dark outline-none placeholder:text-text-muted"
          name="q"
          defaultValue={defaultValue}
          placeholder={placeholder}
          aria-label={placeholder}
        />
        {showDropdown && <input type="hidden" name="category" value={currentOption} />}
      </label>

      {showDropdown ? (
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className={cn(
              "inline-flex h-13 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-brand-lime px-6 text-sm font-semibold text-text-dark shadow-sm transition-transform hover:-translate-y-0.5 active:scale-95 sm:px-7 sm:text-base",
              buttonClassName
            )}
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
          >
            <span>{currentOption}</span>
            <ChevronDown
              className={cn(
                "size-4 transition-transform duration-200",
                isDropdownOpen && "rotate-180"
              )}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 min-w-44 overflow-hidden rounded-2xl border border-neutral-100 bg-white py-1.5 shadow-xl animate-in fade-in zoom-in-95">
              {dropdownOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-2.5 text-left text-xs font-medium transition-colors hover:bg-neutral-50 sm:text-sm",
                    currentOption === option
                      ? "text-brand-blue font-semibold"
                      : "text-neutral-700"
                  )}
                >
                  {option}
                  {currentOption === option && <Check className="size-4 text-brand-blue" />}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <button
          className={cn(
            "inline-flex h-12 sm:h-13 shrink-0 cursor-pointer items-center justify-center rounded-full bg-brand-lime px-6.75 text-sm sm:text-base font-semibold text-text-dark transition-transform hover:-translate-y-0.5 max-md:px-5 max-[420px]:h-11 max-[420px]:px-3.5",
            buttonClassName
          )}
          type="submit"
        >
          {button}
        </button>
      )}
    </form>
  );
}
