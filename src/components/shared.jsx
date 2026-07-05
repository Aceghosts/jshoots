import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useSpring,
} from "framer-motion";

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

/* Word-by-word masked text reveal. Pass "\n" in text for line breaks.
   The in-view observer must sit on the heading itself: the words start
   fully clipped by their overflow-hidden line, so observing them directly
   never fires. */
export function SplitText({ text, as = "h2", className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.h2;
  const container = {
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: 0.07 } },
  };
  const wordVariant = {
    hidden: reduce ? { y: "0%", rotate: 0, opacity: 1 } : { y: "112%", rotate: 5, opacity: 0 },
    show: { y: "0%", rotate: 0, opacity: 1, transition: { duration: 0.9, ease: EASE } },
  };
  return (
    <Tag
      className={className}
      aria-label={text.replaceAll("\n", " ")}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {text.split("\n").map((line, li) => (
        <span className="split-line" key={li} aria-hidden="true">
          {line.split(" ").map((word, wi, arr) => (
            <motion.span className="split-word" key={wi} variants={wordVariant}>
              {word}
              {wi < arr.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </span>
      ))}
    </Tag>
  );
}

/* Image that drifts vertically inside its frame as it scrolls through the viewport. */
export function ParallaxImg({ src, alt, strength = 7, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : [`-${strength}%`, `${strength}%`]
  );
  return (
    <div className={`parallax-frame ${className}`} ref={ref}>
      <motion.img src={src} alt={alt} loading="lazy" style={{ y }} />
    </div>
  );
}

/* Card that tilts in 3D toward the cursor. */
export function TiltCard({ children, className = "", max = 6 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 18 });

  const onMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * max * 2);
    rotateX.set(-py * max * 2);
  };
  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
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
