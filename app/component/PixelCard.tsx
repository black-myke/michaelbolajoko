// import { useEffect, useRef, ReactNode } from "react";

// class Pixel {
//   width: number;
//   height: number;
//   ctx: CanvasRenderingContext2D;
//   x: number;
//   y: number;
//   color: string;
//   speed: number;
//   size: number;
//   sizeStep: number;
//   minSize: number;
//   maxSizeInteger: number;
//   maxSize: number;
//   delay: number;
//   counter: number;
//   counterStep: number;
//   isIdle: boolean;
//   isReverse: boolean;
//   isShimmer: boolean;

//   constructor(
//     canvas: HTMLCanvasElement,
//     context: CanvasRenderingContext2D,
//     x: number,
//     y: number,
//     color: string,
//     speed: number,
//     delay: number
//   ) {
//     this.width = canvas.width;
//     this.height = canvas.height;
//     this.ctx = context;
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.speed = this.getRandomValue(0.1, 0.9) * speed;
//     this.size = 0;
//     this.sizeStep = Math.random() * 0.4;
//     this.minSize = 0.5;
//     this.maxSizeInteger = 2;
//     this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
//     this.delay = delay;
//     this.counter = 0;
//     this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
//     this.isIdle = false;
//     this.isReverse = false;
//     this.isShimmer = false;
//   }

//   private getRandomValue(min: number, max: number): number {
//     return Math.random() * (max - min) + min;
//   }

//   draw() {
//     const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
//     this.ctx.fillStyle = this.color;
//     this.ctx.fillRect(
//       this.x + centerOffset,
//       this.y + centerOffset,
//       this.size,
//       this.size
//     );
//   }

//   appear() {
//     this.isIdle = false;
//     if (this.counter <= this.delay) {
//       this.counter += this.counterStep;
//       return;
//     }
//     if (this.size >= this.maxSize) {
//       this.isShimmer = true;
//     }
//     if (this.isShimmer) {
//       this.shimmer();
//     } else {
//       this.size += this.sizeStep;
//     }
//     this.draw();
//   }

//   disappear() {
//     this.isShimmer = false;
//     this.counter = 0;
//     if (this.size <= 0) {
//       this.isIdle = true;
//       return;
//     } else {
//       this.size -= 0.1;
//     }
//     this.draw();
//   }

//   shimmer() {
//     if (this.size >= this.maxSize) {
//       this.isReverse = true;
//     } else if (this.size <= this.minSize) {
//       this.isReverse = false;
//     }
//     if (this.isReverse) {
//       this.size -= this.speed;
//     } else {
//       this.size += this.speed;
//     }
//   }
// }

// function getEffectiveSpeed(value: string | number, reducedMotion: boolean): number {
//   const min = 0;
//   const max = 100;
//   const throttle = 0.001;
//   const parsed = typeof value === "string" ? parseInt(value, 10) : value;

//   if (parsed <= min || reducedMotion) {
//     return min;
//   } else if (parsed >= max) {
//     return max * throttle;
//   } else {
//     return parsed * throttle;
//   }
// }

// interface VariantConfig {
//   activeColor: string | null;
//   gap: number;
//   speed: number;
//   colors: string;
//   noFocus: boolean;
// }

// const VARIANTS: Record<string, VariantConfig> = {
//   default: {
//     activeColor: null,
//     gap: 5,
//     speed: 35,
//     colors: "#f8fafc,#f1f5f9,#cbd5e1",
//     noFocus: false,
//   },
//   blue: {
//     activeColor: "#e0f2fe",
//     gap: 10,
//     speed: 25,
//     colors: "#e0f2fe,#7dd3fc,#0ea5e9",
//     noFocus: false,
//   },
//   yellow: {
//     activeColor: "#fef08a",
//     gap: 3,
//     speed: 20,
//     colors: "#fef08a,#fde047,#eab308",
//     noFocus: false,
//   },
//   pink: {
//     activeColor: "#fecdd3",
//     gap: 6,
//     speed: 80,
//     colors: "#fecdd3,#fda4af,#e11d48",
//     noFocus: true,
//   },
// };

// interface PixelCardProps {
//   variant?: string;
//   gap?: number;
//   speed?: number;
//   colors?: string;
//   noFocus?: boolean;
//   className?: string;
//   children?: ReactNode;
// }

// export default function PixelCard({
//   variant = "default",
//   gap,
//   speed,
//   colors,
//   noFocus,
//   className = "",
//   children,
// }: PixelCardProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const pixelsRef = useRef<Pixel[]>([]);
//   const animationRef = useRef<number>(0);
//   const timePreviousRef = useRef<number>(performance.now());
//   const reducedMotion = useRef<boolean>(
//     window.matchMedia("(prefers-reduced-motion: reduce)").matches
//   ).current;

//   const variantCfg = VARIANTS[variant] || VARIANTS.default;
//   const finalGap = gap ?? variantCfg.gap;
//   const finalSpeed = speed ?? variantCfg.speed;
//   const finalColors = colors ?? variantCfg.colors;
//   const finalNoFocus = noFocus ?? variantCfg.noFocus;

//   const onMouseEnter = () => handleAnimation("appear");
//   const onMouseLeave = () => handleAnimation("disappear");

//   return (
//     <div
//       ref={containerRef}
//       className={`h-[400px] w-[300px] relative ${className}`}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       onFocus={!finalNoFocus ? onMouseEnter : undefined}
//       onBlur={!finalNoFocus ? onMouseLeave : undefined}
//       tabIndex={finalNoFocus ? -1 : 0}
//     >
//       <canvas className="w-full h-full" ref={canvasRef} />
//       {children}
//     </div>
//   );
// }

// import { useEffect, useRef, ReactNode } from "react";

// class Pixel {
//   width: number;
//   height: number;
//   ctx: CanvasRenderingContext2D;
//   x: number;
//   y: number;
//   color: string;
//   speed: number;
//   size: number;
//   sizeStep: number;
//   minSize: number;
//   maxSizeInteger: number;
//   maxSize: number;
//   delay: number;
//   counter: number;
//   counterStep: number;
//   isIdle: boolean;
//   isReverse: boolean;
//   isShimmer: boolean;

//   constructor(
//     canvas: HTMLCanvasElement,
//     context: CanvasRenderingContext2D,
//     x: number,
//     y: number,
//     color: string,
//     speed: number,
//     delay: number
//   ) {
//     this.width = canvas.width;
//     this.height = canvas.height;
//     this.ctx = context;
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.speed = this.getRandomValue(0.1, 0.9) * speed;
//     this.size = 0;
//     this.sizeStep = Math.random() * 0.4;
//     this.minSize = 0.5;
//     this.maxSizeInteger = 2;
//     this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
//     this.delay = delay;
//     this.counter = 0;
//     this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
//     this.isIdle = false;
//     this.isReverse = false;
//     this.isShimmer = false;
//   }

//   private getRandomValue(min: number, max: number): number {
//     return Math.random() * (max - min) + min;
//   }

//   draw() {
//     const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
//     this.ctx.fillStyle = this.color;
//     this.ctx.fillRect(
//       this.x + centerOffset,
//       this.y + centerOffset,
//       this.size,
//       this.size
//     );
//   }

//   appear() {
//     this.isIdle = false;
//     if (this.counter <= this.delay) {
//       this.counter += this.counterStep;
//       return;
//     }
//     if (this.size >= this.maxSize) {
//       this.isShimmer = true;
//     }
//     if (this.isShimmer) {
//       this.shimmer();
//     } else {
//       this.size += this.sizeStep;
//     }
//     this.draw();
//   }

//   disappear() {
//     this.isShimmer = false;
//     this.counter = 0;
//     if (this.size <= 0) {
//       this.isIdle = true;
//       return;
//     } else {
//       this.size -= 0.1;
//     }
//     this.draw();
//   }

//   shimmer() {
//     if (this.size >= this.maxSize) {
//       this.isReverse = true;
//     } else if (this.size <= this.minSize) {
//       this.isReverse = false;
//     }
//     if (this.isReverse) {
//       this.size -= this.speed;
//     } else {
//       this.size += this.speed;
//     }
//   }
// }

// interface PixelCardProps {
//   variant?: string;
//   gap?: number;
//   speed?: number;
//   colors?: string;
//   noFocus?: boolean;
//   className?: string;
//   children?: ReactNode;
// }

// const PixelCard = ({
//   variant = "default",
//   gap,
//   speed,
//   colors,
//   noFocus,
//   className = "",
//   children,
// }: PixelCardProps) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const pixelsRef = useRef<Pixel[]>([]);
//   const animationRef = useRef<number>(0);
//   const timePreviousRef = useRef<number>(performance.now());

//   const handleAnimation = (name: "appear" | "disappear") => {
//     cancelAnimationFrame(animationRef.current);
//     animationRef.current = requestAnimationFrame(() => doAnimate(name));
//   };

//   const doAnimate = (fnName: "appear" | "disappear") => {
//     animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
//     const timeNow = performance.now();
//     const timePassed = timeNow - timePreviousRef.current;
//     const timeInterval = 1000 / 60; // ~60 FPS

//     if (timePassed < timeInterval) return;
//     timePreviousRef.current = timeNow - (timePassed % timeInterval);

//     const ctx = canvasRef.current?.getContext("2d");
//     if (!ctx || !canvasRef.current) return;

//     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

//     let allIdle = true;
//     for (const pixel of pixelsRef.current) {
//       pixel[fnName]();
//       if (!pixel.isIdle) {
//         allIdle = false;
//       }
//     }
//     if (allIdle) {
//       cancelAnimationFrame(animationRef.current);
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={`h-[400px] w-[300px] relative ${className}`}
//       onMouseEnter={() => handleAnimation("appear")}
//       onMouseLeave={() => handleAnimation("disappear")}
//       onFocus={!noFocus ? () => handleAnimation("appear") : undefined}
//       onBlur={!noFocus ? () => handleAnimation("disappear") : undefined}
//       tabIndex={noFocus ? -1 : 0}
//     >
//       <canvas className="w-full h-full" ref={canvasRef} />
//       {children}
//     </div>
//   );
// };

// export default PixelCard;
