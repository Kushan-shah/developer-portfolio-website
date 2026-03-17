import { useEffect, useRef } from 'react';

export const useMagneticHover = (magneticPull = 0.3) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Calculate pull amounts
      const xPull = x * magneticPull;
      const yPull = y * magneticPull;

      el.style.transform = `translate(${xPull}px, ${yPull}px) scale(1.05)`;
    };

    const handleMouseLeave = () => {
      // Elastic snap back
      el.style.transform = `translate(0px, 0px) scale(1)`;
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magneticPull]);

  return ref;
};
