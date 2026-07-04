import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: i * 0.12 },
  }),
};

export function Reveal({ children, as = "div", className = "", delay = 0, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function RotatingBadge({ text, href = "#contact", className = "" }) {
  return (
    <a href={href} className={`badge ${className}`} aria-label={text.replaceAll("·", ",")}>
      <svg viewBox="0 0 128 128" aria-hidden="true">
        <defs>
          <path
            id={`circ-${text.length}`}
            d="M 64,64 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
          />
        </defs>
        <text>
          <textPath href={`#circ-${text.length}`}>{text}</textPath>
        </text>
      </svg>
      <span className="arrow" aria-hidden="true">↘</span>
    </a>
  );
}
