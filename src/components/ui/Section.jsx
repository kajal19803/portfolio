import { motion } from "framer-motion";

export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto w-full max-w-content"
      >
        {children}
      </motion.div>
    </section>
  );
}
