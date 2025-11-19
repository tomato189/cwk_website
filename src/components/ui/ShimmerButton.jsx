export default function ShimmerButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={
        "shiny-wrap relative inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-3 text-white shadow hover:opacity-95 transition " +
        className
      }
    >
      <span className="relative z-[1] flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
