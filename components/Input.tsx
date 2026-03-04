import { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        min={0}
        className={`px-3 py-2 min-w-0 rounded-lg border border-gray-300 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        focus:border-blue-500 transition-all duration-200
        ${error ? "border-red-500 focus:ring-red-500" : ""}
        ${className || ""}`}
        {...props}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
