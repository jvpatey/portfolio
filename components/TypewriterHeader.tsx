"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterHeaderProps {
  fullText: string;
  delay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function TypewriterHeader({
  fullText,
  delay = 0,
  speed = 60,
  className = "",
  style,
}: TypewriterHeaderProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      {
        threshold: 0.3, // Start animation when 30% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    // Add delay before typing starts
    const startTyping = setTimeout(() => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [fullText, delay, speed, hasStarted]);

  // Cursor blink effect - only when not typing
  useEffect(() => {
    if (!isTyping && showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [isTyping, showCursor]);

  return (
    <span ref={elementRef} className={className} style={style}>
      {displayedText}
      {showCursor && (
        <span style={{ visibility: showCursor ? "visible" : "hidden" }}>|</span>
      )}
    </span>
  );
}
