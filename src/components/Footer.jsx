export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50 px-6 py-8 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-secondary">
          &copy; {year} Kajal Verma. All rights reserved.
        </p>
        <p className="text-sm text-secondary">
          ce4162023@niamt.ac.in · Ranchi, India
        </p>
      </div>
    </footer>
  );
}
