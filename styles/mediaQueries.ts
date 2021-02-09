const breakpoints = {
  tiny: 320,
  small: 420,
  medium: 768,
  large: 1024,
  xlarge: 1200,
  xxlarge: 1680
};

export function upFromBreakpoint(breakpoint: keyof typeof breakpoints) {
  return `@media (min-width: ${breakpoints[breakpoint]}px)`;
}

export function upToBreakpoint(breakpoint: keyof typeof breakpoints) {
  return `@media (max-width: ${breakpoints[breakpoint] - 1}px)`;
}
