import { motion } from 'framer-motion';

// Isometric beam connection pattern - inspired by structural detailing
export const BeamConnectionPattern = ({ className = '', opacity = 0.1 }) => (
  <svg 
    className={className} 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    {/* Vertical beam */}
    <path d="M100 20 L120 30 L120 170 L100 180 L80 170 L80 30 Z" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M80 30 L100 40 L120 30" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M80 170 L100 160 L120 170" stroke="currentColor" strokeWidth="1" fill="none" />
    
    {/* Horizontal beam left */}
    <path d="M20 90 L80 90 L80 110 L20 110 Z" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M20 90 L30 80 L90 80 L80 90" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M30 80 L30 100 L20 110" stroke="currentColor" strokeWidth="1" fill="none" />
    
    {/* Horizontal beam right */}
    <path d="M120 90 L180 90 L180 110 L120 110 Z" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M120 90 L130 80 L190 80 L180 90" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M190 80 L190 100 L180 110" stroke="currentColor" strokeWidth="1" fill="none" />
    
    {/* Connection bolts */}
    <circle cx="90" cy="95" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="90" cy="105" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="110" cy="95" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="110" cy="105" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

// Aluminium profile cross-section pattern
export const AluminiumProfilePattern = ({ className = '', opacity = 0.15 }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    {/* Outer frame */}
    <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="1" fill="none" />
    {/* Inner channels */}
    <rect x="20" y="20" width="25" height="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <rect x="55" y="20" width="25" height="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <rect x="20" y="55" width="25" height="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <rect x="55" y="55" width="25" height="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
    {/* Center cross */}
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Geometric grid pattern for backgrounds
export const GeometricGridPattern = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg 
      className="w-full h-full" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.1" />
        </pattern>
        <pattern id="gridLarge" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#gridLarge)" />
    </svg>
  </div>
);

// Isometric cube pattern
export const IsometricPattern = ({ className = '', color = '#D4AF37' }) => (
  <svg 
    className={className}
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="isometric" width="30" height="52" patternUnits="userSpaceOnUse">
        {/* Isometric cube */}
        <path d="M15 0 L30 8.66 L30 26 L15 34.66 L0 26 L0 8.66 Z" stroke={color} strokeWidth="0.5" fill="none" opacity="0.2" />
        <path d="M15 0 L15 17.32 M0 8.66 L15 17.32 L30 8.66" stroke={color} strokeWidth="0.5" fill="none" opacity="0.2" />
        
        <path d="M15 17.32 L30 26 L30 43.3 L15 52 L0 43.3 L0 26 Z" stroke={color} strokeWidth="0.5" fill="none" opacity="0.15" transform="translate(0, 17.32)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#isometric)" />
  </svg>
);

// Animated blueprint lines
export const BlueprintLines = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(5)].map((_, i) => (
        <motion.line
          key={i}
          x1="0%"
          y1={`${20 + i * 15}%`}
          x2="100%"
          y2={`${20 + i * 15}%`}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: i * 0.2, ease: "easeOut" }}
        />
      ))}
    </svg>
  </div>
);

// Corner bracket decorations
export const CornerBrackets = ({ className = '', size = 40, color = '#D4AF37' }) => (
  <>
    {/* Top left */}
    <svg 
      className={`absolute top-0 left-0 ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 40 40"
    >
      <path d="M0 40 L0 0 L40 0" stroke={color} strokeWidth="2" fill="none" />
      <path d="M0 30 L0 10 L10 10 L10 0" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
    
    {/* Top right */}
    <svg 
      className={`absolute top-0 right-0 ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 40 40"
    >
      <path d="M0 0 L40 0 L40 40" stroke={color} strokeWidth="2" fill="none" />
      <path d="M30 0 L30 10 L40 10 L40 30" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
    
    {/* Bottom left */}
    <svg 
      className={`absolute bottom-0 left-0 ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 40 40"
    >
      <path d="M0 0 L0 40 L40 40" stroke={color} strokeWidth="2" fill="none" />
      <path d="M0 10 L0 30 L10 30 L10 40" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
    
    {/* Bottom right */}
    <svg 
      className={`absolute bottom-0 right-0 ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 40 40"
    >
      <path d="M40 0 L40 40 L0 40" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40 10 L40 30 L30 30 L30 40" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  </>
);

// Animated structural joint
export const AnimatedJoint = ({ className = '' }) => (
  <motion.svg 
    className={className}
    viewBox="0 0 120 120" 
    fill="none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Main vertical beam */}
    <motion.path 
      d="M50 0 L70 0 L70 120 L50 120 Z" 
      stroke="#D4AF37" 
      strokeWidth="1.5" 
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    
    {/* Horizontal beam */}
    <motion.path 
      d="M0 50 L120 50 L120 70 L0 70 Z" 
      stroke="#C0C0C0" 
      strokeWidth="1.5" 
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
    />
    
    {/* Gusset plate */}
    <motion.path 
      d="M45 45 L75 45 L75 75 L45 75 Z" 
      stroke="#D4AF37" 
      strokeWidth="2" 
      fill="rgba(212, 175, 55, 0.1)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    />
    
    {/* Bolts */}
    {[[52, 52], [68, 52], [52, 68], [68, 68]].map(([cx, cy], i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={cy}
        r="3"
        stroke="#D4AF37"
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
      />
    ))}
  </motion.svg>
);

// Section divider with architectural pattern
export const ArchitecturalDivider = ({ className = '' }) => (
  <div className={`w-full py-8 ${className}`}>
    <div className="flex items-center justify-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-arch-gold/30 to-arch-gold/50" />
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
        <path d="M0 10 L15 2 L30 10 L45 2 L60 10" stroke="#D4AF37" strokeWidth="1" fill="none" />
        <path d="M0 10 L15 18 L30 10 L45 18 L60 10" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="30" cy="10" r="3" fill="#D4AF37" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-arch-gold/30 to-arch-gold/50" />
    </div>
  </div>
);

// Floating technical drawings for hero backgrounds
export const TechnicalDrawingBg = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {/* Large faded structural drawing */}
    <motion.div
      className="absolute -right-20 -top-20 w-[600px] h-[600px] opacity-[0.03]"
      animate={{ rotate: 360 }}
      transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-arch-gold">
        <BeamConnectionPattern className="w-full h-full" opacity={1} />
      </svg>
    </motion.div>
    
    {/* Floating profile sections */}
    <motion.div
      className="absolute left-10 bottom-20 w-32 h-32 opacity-[0.05]"
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <AluminiumProfilePattern className="w-full h-full text-arch-silver" opacity={1} />
    </motion.div>
    
    <motion.div
      className="absolute right-1/4 top-1/3 w-24 h-24 opacity-[0.04]"
      animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <AluminiumProfilePattern className="w-full h-full text-arch-gold" opacity={1} />
    </motion.div>
  </div>
);

// Window frame pattern for service cards
export const WindowFramePattern = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 100 140" fill="none">
    {/* Outer frame */}
    <rect x="5" y="5" width="90" height="130" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Inner frame */}
    <rect x="10" y="10" width="80" height="120" stroke="currentColor" strokeWidth="1" fill="none" />
    {/* Horizontal divider */}
    <line x1="10" y1="70" x2="90" y2="70" stroke="currentColor" strokeWidth="2" />
    {/* Vertical divider */}
    <line x1="50" y1="10" x2="50" y2="130" stroke="currentColor" strokeWidth="2" />
    {/* Glass panes indication */}
    <rect x="15" y="15" width="30" height="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    <rect x="55" y="15" width="30" height="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    <rect x="15" y="75" width="30" height="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    <rect x="55" y="75" width="30" height="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    {/* Handle */}
    <circle cx="85" cy="70" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

// Curtain wall pattern
export const CurtainWallPattern = ({ className = '', rows = 4, cols = 6 }) => (
  <svg className={className} viewBox={`0 0 ${cols * 30} ${rows * 40}`} fill="none">
    {[...Array(rows)].map((_, row) =>
      [...Array(cols)].map((_, col) => (
        <g key={`${row}-${col}`}>
          <rect
            x={col * 30 + 2}
            y={row * 40 + 2}
            width="26"
            height="36"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity={0.3 + Math.random() * 0.3}
          />
          {/* Glass reflection */}
          <line
            x1={col * 30 + 5}
            y1={row * 40 + 5}
            x2={col * 30 + 15}
            y2={row * 40 + 15}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </g>
      ))
    )}
    {/* Mullions */}
    {[...Array(cols + 1)].map((_, i) => (
      <line
        key={`v-${i}`}
        x1={i * 30}
        y1="0"
        x2={i * 30}
        y2={rows * 40}
        stroke="currentColor"
        strokeWidth="2"
      />
    ))}
    {[...Array(rows + 1)].map((_, i) => (
      <line
        key={`h-${i}`}
        x1="0"
        y1={i * 40}
        x2={cols * 30}
        y2={i * 40}
        stroke="currentColor"
        strokeWidth="2"
      />
    ))}
  </svg>
);

export default {
  BeamConnectionPattern,
  AluminiumProfilePattern,
  GeometricGridPattern,
  IsometricPattern,
  BlueprintLines,
  CornerBrackets,
  AnimatedJoint,
  ArchitecturalDivider,
  TechnicalDrawingBg,
  WindowFramePattern,
  CurtainWallPattern
};
