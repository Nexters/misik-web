import confetti from "canvas-confetti";

import type { Options as ConfettiOptions } from "canvas-confetti";

export const handleConfetti = () => {
  const setting: ConfettiOptions = {
    particleCount: 100,
    spread: 100,
    origin: { y: 0.2 },
    colors: ["#f4abfe", "#cd90f2", "#eff0ff", "#6f91ff"],
    ticks: 50,
  };

  confetti({
    ...setting,
  });
};
