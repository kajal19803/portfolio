export default function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-12 md:mb-16">
      {label && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-purple">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
