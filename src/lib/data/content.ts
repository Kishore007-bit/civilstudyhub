import { TopicContent } from "../types";

export const topicContents: Record<string, TopicContent> = {
  // Engineering Mechanics
  "force-systems": {
    topicId: "force-systems",
    explanation: `**Force** (விசை) என்பது ஒரு object-ஐ move பண்ண அல்லது அதன் shape-ஐ மாற்ற முயற்சிக்கும் ஒரு physical quantity ஆகும்.

**Force System** என்றால் ஒரு body மேல் act பண்ணும் பல forces-ன் combination. இது mainly இரண்டு types:

1. **Concurrent Forces**: எல்லா forces-ம் ஒரே point-ல் meet ஆகும். Example: Crane hook-ல் attach ஆன cables.

2. **Non-concurrent Forces**: Forces வெவ்வேறு points-ல் act பண்ணும். Example: Building-ன் column loads.

**Equilibrium** என்றால் ஒரு body rest-ல் இருக்கும் போது அல்லது uniform velocity-ல் move ஆகும் போது. அப்போது:
- Sum of all forces = 0
- Sum of all moments = 0

இது Civil Engineering-ல் மிக முக்கியம், ஏனெனில் structures stable-ஆ இருக்க equilibrium conditions satisfy ஆக வேண்டும்.`,
    formulas: [
      {
        name: "Resultant of Two Forces",
        formula: "R = √(P² + Q² + 2PQ cos θ)",
        description: "Two forces P and Q acting at angle θ",
      },
      {
        name: "Equilibrium Conditions",
        formula: "ΣFx = 0, ΣFy = 0, ΣM = 0",
        description: "Three equations of equilibrium",
      },
      {
        name: "Lami's Theorem",
        formula: "P/sin α = Q/sin β = R/sin γ",
        description: "For three concurrent forces in equilibrium",
      },
    ],
    keyPoints: [
      "Force is a vector quantity with both magnitude and direction",
      "Concurrent forces meet at a single point",
      "For equilibrium: ΣFx = 0, ΣFy = 0, and ΣM = 0",
      "Lami's theorem applies only to three concurrent forces in equilibrium",
      "Free body diagram (FBD) is essential for solving equilibrium problems",
      "Moment = Force × Perpendicular distance",
    ],
    videos: [
      {
        title: "Force Systems in Tamil - Complete Basics",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Equilibrium of Forces - Engineering Mechanics",
        videoId: "dQw4w9WgXcQ",
        channel: "Learn Civil Tamil",
      },
    ],
  },

  friction: {
    topicId: "friction",
    explanation: `**Friction** (உராய்வு) என்பது இரண்டு surfaces contact-ல் இருக்கும் போது motion-ஐ oppose பண்ணும் force.

**Types of Friction:**
1. **Static Friction (μs)**: Object move ஆகாமல் இருக்கும் போது act பண்ணும். Maximum value = Limiting friction.
2. **Kinetic/Dynamic Friction (μk)**: Object already moving-ஆ இருக்கும் போது act பண்ணும். Always less than static friction.

**Laws of Friction:**
1. Friction force is proportional to normal reaction (F ∝ N)
2. Friction is independent of contact area
3. Kinetic friction < Static friction
4. Friction depends on nature of surfaces

**Angle of Repose (α)**: ஒரு inclined plane-ல் object just slide ஆக start பண்ணும் angle. tan α = μ

**Applications in Civil Engineering:**
- Foundation design (soil friction)
- Brake systems in construction equipment
- Belt drives and pulley systems`,
    formulas: [
      {
        name: "Friction Force",
        formula: "F = μN",
        description: "μ = coefficient of friction, N = normal reaction",
      },
      {
        name: "Angle of Friction",
        formula: "tan φ = μ",
        description: "φ is the angle of friction",
      },
      {
        name: "Angle of Repose",
        formula: "tan α = μ (at impending motion)",
        description: "α = angle of inclined plane",
      },
    ],
    keyPoints: [
      "Static friction > Kinetic friction always",
      "Coefficient of friction (μ) depends only on surface materials",
      "Angle of repose = Angle of friction",
      "Friction is a self-adjusting force up to limiting value",
      "Normal reaction (N) = Weight × cos θ on inclined plane",
      "Rolling friction is much less than sliding friction",
    ],
    videos: [
      {
        title: "Friction in Engineering Mechanics - Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Angle of Repose Problems Solved",
        videoId: "dQw4w9WgXcQ",
        channel: "Engineering Basics Tamil",
      },
    ],
  },

  centroid: {
    topicId: "centroid",
    explanation: `**Centroid** (மையப்புள்ளி) என்பது ஒரு plane figure-ன் geometric center. இது figure-ன் area முழுவதும் uniformly distribute ஆன point.

**Center of Gravity** (ஈர்ப்பு மையம்) என்பது body-ன் total weight act பண்ணும் point. 2D shapes-க்கு centroid = center of gravity.

**Calculating Centroid:**
- Simple shapes-க்கு standard formulas இருக்கு (rectangle, triangle, circle)
- Complex shapes-ஐ simple shapes-ஆ divide பண்ணி calculate பண்ணுவோம்

**Composite Figures Method:**
1. Complex shape-ஐ simple shapes-ஆ divide பண்ணு
2. Each simple shape-ன் area (Ai) and centroid (xi, yi) கண்டுபிடி
3. Use formula: x̄ = ΣAixi/ΣAi, ȳ = ΣAiyi/ΣAi

**Engineering Applications:**
- Beam design (neutral axis location)
- Column design
- Stability analysis of structures`,
    formulas: [
      {
        name: "Centroid of Composite Area",
        formula: "x̄ = ΣAᵢxᵢ/ΣAᵢ, ȳ = ΣAᵢyᵢ/ΣAᵢ",
        description: "For composite sections",
      },
      {
        name: "Rectangle Centroid",
        formula: "x̄ = b/2, ȳ = h/2",
        description: "From corner of rectangle",
      },
      {
        name: "Triangle Centroid",
        formula: "x̄ = b/3, ȳ = h/3",
        description: "From right angle corner",
      },
    ],
    keyPoints: [
      "Centroid is the geometric center of a plane figure",
      "For symmetric figures, centroid lies on the axis of symmetry",
      "For holes/cutouts, use negative area in calculations",
      "Triangle centroid is at 1/3 height from base",
      "Circle centroid is at its center",
      "Semicircle centroid: ȳ = 4r/3π from diameter",
    ],
    videos: [
      {
        title: "Centroid Calculation in Tamil - Easy Method",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Center of Gravity Problems Solved",
        videoId: "dQw4w9WgXcQ",
        channel: "Learn Mechanics Tamil",
      },
    ],
  },

  "moment-of-inertia": {
    topicId: "moment-of-inertia",
    explanation: `**Moment of Inertia** (I) என்பது ஒரு body rotation-ஐ எவ்வளவு resist பண்றது என்பதை measure பண்ணும் property. இதை **Second Moment of Area** என்றும் சொல்வோம்.

**Why is it Important?**
Beam bending-ல் strength calculate பண்ண MI மிக முக்கியம். Higher I = More resistance to bending.

**Types:**
1. **Ixx**: X-axis பற்றிய moment of inertia
2. **Iyy**: Y-axis பற்றிய moment of inertia
3. **Polar MI (J)**: Perpendicular axis பற்றிய = Ixx + Iyy

**Parallel Axis Theorem:**
ஒரு axis-ல் இருந்து distance 'd'-ல் உள்ள parallel axis பற்றிய MI கண்டுபிடிக்க:
I = Ic + Ad²
Where Ic = MI about centroidal axis, A = Area

**Engineering Applications:**
- Beam design (bending strength)
- Column buckling analysis
- Shaft design (torsional resistance)`,
    formulas: [
      {
        name: "Rectangle MI",
        formula: "Ixx = bh³/12, Iyy = hb³/12",
        description: "About centroidal axes",
      },
      {
        name: "Parallel Axis Theorem",
        formula: "I = Ic + Ad²",
        description: "Ic = centroidal MI, d = distance",
      },
      {
        name: "Radius of Gyration",
        formula: "k = √(I/A)",
        description: "k relates I and A",
      },
    ],
    keyPoints: [
      "MI units: mm⁴ or m⁴",
      "Higher MI means more resistance to bending",
      "Parallel axis theorem: I = Ic + Ad²",
      "Perpendicular axis theorem: Iz = Ix + Iy (for lamina)",
      "Radius of gyration k = √(I/A)",
      "For hollow sections, subtract inner MI from outer MI",
    ],
    videos: [
      {
        title: "Moment of Inertia Made Easy - Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "MI Problems with Parallel Axis Theorem",
        videoId: "dQw4w9WgXcQ",
        channel: "Engineering Basics Tamil",
      },
    ],
  },

  "simple-machines": {
    topicId: "simple-machines",
    explanation: `**Simple Machine** என்பது small force-ஐ use பண்ணி heavy load-ஐ lift பண்ண உதவும் device. Construction sites-ல் இது daily use ஆகுது.

**Key Terms:**
1. **Mechanical Advantage (MA)**: Load/Effort ratio. MA = W/P
2. **Velocity Ratio (VR)**: Distance moved by effort / Distance moved by load
3. **Efficiency (η)**: MA/VR × 100%

**Types of Simple Machines:**
1. **Lever**: Crowbar, seesaw
2. **Pulley**: Single, double, block and tackle
3. **Inclined Plane**: Ramps for loading
4. **Wheel and Axle**: Crane winch
5. **Screw Jack**: For lifting heavy loads

**Law of Machine:**
P = mW + C
Where P = Effort, W = Load, m = slope of line, C = constant

**Reversibility:**
- **Reversible**: Machine moves load down when effort removed (η > 50%)
- **Irreversible/Self-locking**: Load stays in place (η < 50%)`,
    formulas: [
      {
        name: "Mechanical Advantage",
        formula: "MA = W/P = Load/Effort",
        description: "Ratio of load to effort",
      },
      {
        name: "Efficiency",
        formula: "η = (MA/VR) × 100%",
        description: "Always less than 100%",
      },
      {
        name: "Screw Jack VR",
        formula: "VR = 2πR/p",
        description: "R = handle length, p = pitch",
      },
    ],
    keyPoints: [
      "Ideal machine: MA = VR, η = 100% (theoretical only)",
      "Real machines always have η < 100% due to friction",
      "Self-locking machines have η ≤ 50%",
      "Pulleys: VR = number of rope segments supporting load",
      "Screw jack is self-locking (useful for lifting)",
      "Higher VR doesn't always mean better machine",
    ],
    videos: [
      {
        title: "Simple Machines in Tamil - All Types",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Screw Jack and Pulley Problems",
        videoId: "dQw4w9WgXcQ",
        channel: "Mechanics Tamil",
      },
    ],
  },

  "stress-strain": {
    topicId: "stress-strain",
    explanation: `**Stress** (அழுத்தம்) என்பது material-ல் internal resistance. Formula: σ = Force/Area (N/mm² or MPa)

**Strain** (திரிபு) என்பது original dimension-ல் ஏற்படும் change ratio. Formula: ε = ΔL/L (dimensionless)

**Types of Stress:**
1. **Tensile Stress**: Pulling force (tension)
2. **Compressive Stress**: Pushing force (compression)
3. **Shear Stress**: Cutting/sliding force (τ = F/A)

**Stress-Strain Diagram:**
1. **Proportional Limit**: Stress ∝ Strain region
2. **Elastic Limit**: Material returns to original shape
3. **Yield Point**: Permanent deformation starts
4. **Ultimate Stress**: Maximum stress material can take
5. **Breaking Point**: Material fractures

**Hooke's Law:**
Within elastic limit, Stress ∝ Strain
σ = E × ε
Where E = Young's Modulus (Modulus of Elasticity)`,
    formulas: [
      {
        name: "Stress",
        formula: "σ = P/A (N/mm²)",
        description: "P = Force, A = Area",
      },
      {
        name: "Strain",
        formula: "ε = ΔL/L (dimensionless)",
        description: "ΔL = change in length, L = original length",
      },
      {
        name: "Hooke's Law",
        formula: "σ = E × ε",
        description: "E = Young's modulus",
      },
    ],
    keyPoints: [
      "Stress units: N/mm² = MPa",
      "Strain has no units (it's a ratio)",
      "Young's Modulus E for steel ≈ 2 × 10⁵ N/mm²",
      "Factor of Safety = Ultimate Stress / Working Stress",
      "Poisson's Ratio μ = Lateral Strain / Longitudinal Strain",
      "Ductile materials (steel) show yielding; Brittle materials (concrete) don't",
    ],
    videos: [
      {
        title: "Stress and Strain Basics in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Hooke's Law and Young's Modulus",
        videoId: "dQw4w9WgXcQ",
        channel: "SOM Tamil",
      },
    ],
  },

  // Engineering Mathematics
  matrices: {
    topicId: "matrices",
    explanation: `**Matrix** (அணி) என்பது numbers-ஐ rows மற்றும் columns-ல் arrange பண்ணிய rectangular array. Engineering-ல் linear equations solve பண்ண மிக useful.

**Types of Matrices:**
1. **Square Matrix**: Rows = Columns
2. **Identity Matrix (I)**: Diagonal elements = 1, others = 0
3. **Null Matrix**: All elements = 0
4. **Symmetric Matrix**: A = Aᵀ

**Matrix Operations:**
- **Addition/Subtraction**: Same size matrices only
- **Multiplication**: A(m×n) × B(n×p) = C(m×p)
- **Transpose**: Rows ↔ Columns exchange

**Determinant:**
2×2 matrix: |A| = ad - bc for [a b; c d]
3×3 matrix: Expansion along any row or column

**Inverse Matrix:**
A⁻¹ = adj(A)/|A|
Only exists when |A| ≠ 0 (non-singular matrix)`,
    formulas: [
      {
        name: "2×2 Determinant",
        formula: "|A| = ad - bc",
        description: "For matrix [a,b; c,d]",
      },
      {
        name: "Matrix Inverse",
        formula: "A⁻¹ = adj(A)/|A|",
        description: "|A| ≠ 0 required",
      },
      {
        name: "Cramer's Rule",
        formula: "x = Dx/D, y = Dy/D",
        description: "For solving linear equations",
      },
    ],
    keyPoints: [
      "Matrix multiplication is NOT commutative: AB ≠ BA",
      "det(AB) = det(A) × det(B)",
      "det(A⁻¹) = 1/det(A)",
      "(AB)ᵀ = BᵀAᵀ",
      "Singular matrix: det = 0, no inverse exists",
      "Eigenvalues: |A - λI| = 0",
    ],
    videos: [
      {
        title: "Matrices for Engineering - Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Maths Tamil",
      },
      {
        title: "Matrix Inverse and Determinants",
        videoId: "dQw4w9WgXcQ",
        channel: "Engineering Maths Tamil",
      },
    ],
  },

  "differential-calculus": {
    topicId: "differential-calculus",
    explanation: `**Differentiation** (வகையீடு) என்பது function-ன் rate of change கண்டுபிடிப்பது. dy/dx = Rate of change of y with respect to x.

**Basic Rules:**
1. **Power Rule**: d/dx(xⁿ) = nxⁿ⁻¹
2. **Sum Rule**: d/dx(u+v) = du/dx + dv/dx
3. **Product Rule**: d/dx(uv) = u(dv/dx) + v(du/dx)
4. **Quotient Rule**: d/dx(u/v) = [v(du/dx) - u(dv/dx)]/v²
5. **Chain Rule**: dy/dx = (dy/du)(du/dx)

**Applications in Engineering:**
- Finding slope of curves
- Maxima and Minima problems
- Rate of change problems
- Optimization in design

**Maxima & Minima:**
1. Find f'(x) = 0 (critical points)
2. Check f''(x): Negative = Maximum, Positive = Minimum`,
    formulas: [
      {
        name: "Power Rule",
        formula: "d/dx(xⁿ) = nxⁿ⁻¹",
        description: "Basic differentiation rule",
      },
      {
        name: "Product Rule",
        formula: "d/dx(uv) = u(dv/dx) + v(du/dx)",
        description: "For product of two functions",
      },
      {
        name: "Chain Rule",
        formula: "dy/dx = (dy/du)(du/dx)",
        description: "For composite functions",
      },
    ],
    keyPoints: [
      "d/dx(eˣ) = eˣ",
      "d/dx(ln x) = 1/x",
      "d/dx(sin x) = cos x, d/dx(cos x) = -sin x",
      "For maxima: f'(x) = 0 and f''(x) < 0",
      "For minima: f'(x) = 0 and f''(x) > 0",
      "Point of inflection: f''(x) = 0",
    ],
    videos: [
      {
        title: "Differentiation Basics in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Maths Tamil",
      },
      {
        title: "Maxima Minima Problems Solved",
        videoId: "dQw4w9WgXcQ",
        channel: "Engineering Maths Tamil",
      },
    ],
  },

  "integral-calculus": {
    topicId: "integral-calculus",
    explanation: `**Integration** (தொகையீடு) என்பது differentiation-ன் reverse process. Area under curve கண்டுபிடிக்க use பண்றோம்.

**Types:**
1. **Indefinite Integral**: ∫f(x)dx = F(x) + C (general antiderivative)
2. **Definite Integral**: ∫[a to b] f(x)dx = F(b) - F(a) (specific value)

**Basic Integration Rules:**
1. ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)
2. ∫1/x dx = ln|x| + C
3. ∫eˣ dx = eˣ + C
4. ∫sin x dx = -cos x + C
5. ∫cos x dx = sin x + C

**Integration Techniques:**
- **Substitution**: Change variable to simplify
- **By Parts**: ∫u dv = uv - ∫v du
- **Partial Fractions**: For rational functions

**Engineering Applications:**
- Area and volume calculations
- Center of mass
- Work done by varying force`,
    formulas: [
      {
        name: "Power Rule",
        formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C",
        description: "n ≠ -1",
      },
      {
        name: "Integration by Parts",
        formula: "∫u dv = uv - ∫v du",
        description: "LIATE rule for choosing u",
      },
      {
        name: "Definite Integral",
        formula: "∫[a,b] f(x)dx = F(b) - F(a)",
        description: "Fundamental theorem",
      },
    ],
    keyPoints: [
      "Always add +C for indefinite integrals",
      "LIATE: Logarithmic, Inverse trig, Algebraic, Trig, Exponential",
      "∫1/(1+x²) dx = tan⁻¹(x) + C",
      "For definite integrals, +C cancels out",
      "Area = ∫y dx (between curve and x-axis)",
      "If curve is below x-axis, area is negative",
    ],
    videos: [
      {
        title: "Integration Basics in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Maths Tamil",
      },
      {
        title: "Integration by Parts & Substitution",
        videoId: "dQw4w9WgXcQ",
        channel: "Engineering Maths Tamil",
      },
    ],
  },

  "differential-equations": {
    topicId: "differential-equations",
    explanation: `**Differential Equation** என்பது derivatives contain பண்ணும் equation. Engineering problems model பண்ண இது essential.

**Order & Degree:**
- **Order**: Highest derivative order (dy/dx = 1st order, d²y/dx² = 2nd order)
- **Degree**: Highest power of highest derivative (after removing radicals)

**Types:**
1. **ODE** (Ordinary DE): Single independent variable
2. **PDE** (Partial DE): Multiple independent variables

**First Order DE Solutions:**
1. **Variable Separable**: dy/dx = f(x)g(y) → ∫dy/g(y) = ∫f(x)dx
2. **Homogeneous**: dy/dx = f(y/x) → Put y = vx
3. **Linear**: dy/dx + Py = Q → IF = e^(∫P dx)

**Second Order Linear DE:**
d²y/dx² + P(dy/dx) + Qy = R
Solve using auxiliary equation: m² + Pm + Q = 0`,
    formulas: [
      {
        name: "Linear First Order",
        formula: "IF = e^(∫P dx)",
        description: "Integrating factor method",
      },
      {
        name: "Auxiliary Equation",
        formula: "m² + Pm + Q = 0",
        description: "For second order DE",
      },
      {
        name: "General Solution (2nd order)",
        formula: "y = C₁e^(m₁x) + C₂e^(m₂x)",
        description: "When roots are real and distinct",
      },
    ],
    keyPoints: [
      "Separable: Get all y terms with dy, all x terms with dx",
      "Homogeneous: f(tx, ty) = tⁿf(x,y)",
      "Linear 1st order: Always multiply by IF",
      "For repeated roots: y = (C₁ + C₂x)eᵐˣ",
      "For complex roots m = α ± iβ: y = eᵅˣ(C₁cos βx + C₂sin βx)",
      "Particular Integral: Use method of undetermined coefficients",
    ],
    videos: [
      {
        title: "Differential Equations in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Maths Tamil",
      },
      {
        title: "First Order DE Problems",
        videoId: "dQw4w9WgXcQ",
        channel: "Engineering Maths Tamil",
      },
    ],
  },

  "vector-calculus": {
    topicId: "vector-calculus",
    explanation: `**Vector Calculus** என்பது vectors-ஐ differentiate மற்றும் integrate பண்றது. Fluid mechanics, electromagnetics போன்ற areas-ல் essential.

**Vector Operations:**
1. **Dot Product**: A·B = |A||B|cos θ = A₁B₁ + A₂B₂ + A₃B₃
2. **Cross Product**: A×B = |A||B|sin θ n̂ (perpendicular vector)

**Del Operator (∇):**
∇ = î(∂/∂x) + ĵ(∂/∂y) + k̂(∂/∂z)

**Important Concepts:**
1. **Gradient (∇φ)**: Direction of maximum increase of scalar field
2. **Divergence (∇·F)**: Measure of "source" or "sink" at a point
3. **Curl (∇×F)**: Measure of rotation/circulation

**Theorems:**
1. **Green's Theorem**: Line integral ↔ Double integral
2. **Stokes' Theorem**: Line integral ↔ Surface integral
3. **Gauss' Divergence**: Surface integral ↔ Volume integral`,
    formulas: [
      {
        name: "Gradient",
        formula: "∇φ = (∂φ/∂x)î + (∂φ/∂y)ĵ + (∂φ/∂z)k̂",
        description: "For scalar field φ",
      },
      {
        name: "Divergence",
        formula: "∇·F = ∂Fx/∂x + ∂Fy/∂y + ∂Fz/∂z",
        description: "For vector field F",
      },
      {
        name: "Curl",
        formula: "∇×F = |î ĵ k̂; ∂/∂x ∂/∂y ∂/∂z; Fx Fy Fz|",
        description: "Determinant form",
      },
    ],
    keyPoints: [
      "Gradient is always perpendicular to level surfaces",
      "If ∇·F = 0, F is called solenoidal (incompressible)",
      "If ∇×F = 0, F is called irrotational (conservative)",
      "∇²φ = Laplacian = ∂²φ/∂x² + ∂²φ/∂y² + ∂²φ/∂z²",
      "Conservative field: Work done is path independent",
      "∇×(∇φ) = 0 always",
    ],
    videos: [
      {
        title: "Vector Calculus Basics in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Maths Tamil",
      },
      {
        title: "Gradient, Divergence, Curl Explained",
        videoId: "dQw4w9WgXcQ",
        channel: "Engineering Maths Tamil",
      },
    ],
  },

  "laplace-transforms": {
    topicId: "laplace-transforms",
    explanation: `**Laplace Transform** என்பது time domain function-ஐ frequency domain-க்கு convert பண்ணும் technique. Differential equations easily solve பண்ண மிக useful.

**Definition:**
L{f(t)} = F(s) = ∫[0 to ∞] f(t)e⁻ˢᵗ dt

**Why Use Laplace Transform?**
- Differential equations → Algebraic equations ஆக மாறும்
- Initial conditions automatically incorporated
- Solve, then inverse transform for answer

**Standard Transforms:**
1. L{1} = 1/s
2. L{t} = 1/s²
3. L{tⁿ} = n!/sⁿ⁺¹
4. L{eᵃᵗ} = 1/(s-a)
5. L{sin at} = a/(s² + a²)
6. L{cos at} = s/(s² + a²)

**Inverse Laplace Transform:**
Use partial fractions to break F(s) into simple terms, then apply standard inverse formulas.`,
    formulas: [
      {
        name: "Laplace Definition",
        formula: "L{f(t)} = ∫₀^∞ f(t)e⁻ˢᵗ dt",
        description: "Transform integral",
      },
      {
        name: "First Shifting",
        formula: "L{eᵃᵗf(t)} = F(s-a)",
        description: "Shifting in s-domain",
      },
      {
        name: "Derivative Transform",
        formula: "L{f'(t)} = sF(s) - f(0)",
        description: "For first derivative",
      },
    ],
    keyPoints: [
      "L{f''(t)} = s²F(s) - sf(0) - f'(0)",
      "L{∫f(t)dt} = F(s)/s",
      "Convolution: L{f*g} = F(s)·G(s)",
      "Final Value: lim(t→∞) f(t) = lim(s→0) sF(s)",
      "Initial Value: lim(t→0⁺) f(t) = lim(s→∞) sF(s)",
      "Use partial fractions for inverse transform",
    ],
    videos: [
      {
        title: "Laplace Transform in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Maths Tamil",
      },
      {
        title: "Inverse Laplace Problems Solved",
        videoId: "dQw4w9WgXcQ",
        channel: "Engineering Maths Tamil",
      },
    ],
  },

  // Building Materials
  "material-properties": {
    topicId: "material-properties",
    explanation: `**Building Materials** construction-ல் use பண்றோம். ஒவ்வொரு material-க்கும் specific properties இருக்கும், அதை புரிஞ்சா correct material select பண்ணலாம்.

**Physical Properties:**
1. **Density**: Mass per unit volume (kg/m³)
2. **Porosity**: Volume of voids / Total volume
3. **Water Absorption**: % of water absorbed by dry material
4. **Durability**: Resistance to weathering

**Mechanical Properties:**
1. **Strength**: Resistance to failure (Compressive, Tensile, Shear)
2. **Elasticity**: Ability to regain original shape
3. **Plasticity**: Permanent deformation capability
4. **Hardness**: Resistance to scratching/indentation
5. **Toughness**: Energy absorption before fracture

**Thermal Properties:**
- Thermal conductivity
- Thermal expansion
- Fire resistance

**Selection Criteria:**
Strength, durability, cost, availability, workability, and environmental impact consider பண்ணணும்.`,
    formulas: [
      {
        name: "Density",
        formula: "ρ = Mass/Volume (kg/m³)",
        description: "Mass per unit volume",
      },
      {
        name: "Porosity",
        formula: "n = Vᵥ/V × 100%",
        description: "Void ratio percentage",
      },
      {
        name: "Water Absorption",
        formula: "WA = (W₂-W₁)/W₁ × 100%",
        description: "W₁=dry, W₂=saturated weight",
      },
    ],
    keyPoints: [
      "Higher porosity = Lower strength generally",
      "Good thermal insulator has low conductivity",
      "Ductile materials deform before failure",
      "Brittle materials fail suddenly",
      "Fire resistance is critical for safety",
      "Cost vs performance balance is important",
    ],
    videos: [
      {
        title: "Building Materials Properties - Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Material Testing Basics",
        videoId: "dQw4w9WgXcQ",
        channel: "Construction Tamil",
      },
    ],
  },

  cement: {
    topicId: "cement",
    explanation: `**Cement** (சிமெந்து) என்பது construction-ன் most important binding material. Water-உடன் mix பண்ணா set ஆகி hard ஆகும்.

**Types of Cement:**
1. **OPC (Ordinary Portland Cement)**: General construction, 3 grades - 33, 43, 53
2. **PPC (Portland Pozzolana Cement)**: Mass concrete, marine structures
3. **Rapid Hardening Cement**: Quick construction, repairs
4. **Low Heat Cement**: Massive structures like dams
5. **Sulphate Resisting Cement**: Foundation in sulphate soil

**Manufacture Process:**
Raw materials (Limestone + Clay) → Crushing → Burning at 1450°C → Clinker → Grinding with Gite → Cement

**Bogue's Compounds:**
1. C₃S (Tricalcium Silicate): Early strength
2. C₂S (Dicalcium Silicate): Later strength
3. C₃A (Tricalcium Aluminate): Flash set, heat generation
4. C₄AF (Tetracalcium Aluminoferrite): Color, sulphate resistance`,
    formulas: [
      {
        name: "Water-Cement Ratio",
        formula: "w/c = Weight of water / Weight of cement",
        description: "Lower w/c = Higher strength",
      },
      {
        name: "Fineness (Blaine)",
        formula: "Specific surface area (m²/kg)",
        description: "Min 225 m²/kg for OPC",
      },
      {
        name: "Soundness (Le-Chatelier)",
        formula: "Expansion ≤ 10mm",
        description: "Test for free lime",
      },
    ],
    keyPoints: [
      "OPC 53 grade: Minimum 53 MPa at 28 days",
      "Initial setting time: Min 30 minutes",
      "Final setting time: Max 600 minutes",
      "Normal consistency: 25-35% water",
      "C₃S gives early strength, C₂S gives late strength",
      "PPC has better workability and durability",
    ],
    videos: [
      {
        title: "Types of Cement in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Cement Tests Explained",
        videoId: "dQw4w9WgXcQ",
        channel: "Construction Tamil",
      },
    ],
  },

  concrete: {
    topicId: "concrete",
    explanation: `**Concrete** (கான்கிரீட்) என்பது Cement + Fine Aggregate + Coarse Aggregate + Water mixture. World's most used construction material.

**Ingredients:**
1. **Cement**: Binding material (10-15%)
2. **Fine Aggregate**: Sand (20-25%)
3. **Coarse Aggregate**: Gravel/Stone (40-45%)
4. **Water**: For hydration and workability

**Mix Design:**
Proportioning of ingredients for required strength and workability.

**Grades of Concrete:**
- M15, M20, M25... (M = Mix, number = characteristic strength in MPa at 28 days)
- M20 means 20 N/mm² minimum strength

**Properties:**
- **Workability**: Ease of placing (Slump test)
- **Compressive Strength**: Main property
- **Durability**: Long-term performance

**Curing:**
Keeping concrete moist for hydration. Minimum 7-14 days. Methods: Ponding, wet covering, membrane curing.`,
    formulas: [
      {
        name: "Nominal Mix (M20)",
        formula: "1:1.5:3 (Cement:Sand:Aggregate)",
        description: "By volume ratio",
      },
      {
        name: "Water-Cement Ratio",
        formula: "w/c ≈ 0.45 to 0.55",
        description: "For normal concrete",
      },
      {
        name: "Workability (Slump)",
        formula: "25-50mm (low), 50-100mm (medium)",
        description: "Slump cone test",
      },
    ],
    keyPoints: [
      "Lower w/c ratio = Higher strength but less workability",
      "Aggregates should be well-graded",
      "Curing is essential - 70% strength in 7 days",
      "Concrete is strong in compression, weak in tension",
      "Admixtures modify properties (plasticizers, retarders)",
      "Cover provides protection to reinforcement",
    ],
    videos: [
      {
        title: "Concrete Mix Design in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Concrete Testing Methods",
        videoId: "dQw4w9WgXcQ",
        channel: "Construction Tamil",
      },
    ],
  },

  bricks: {
    topicId: "bricks",
    explanation: `**Brick** (செங்கல்) என்பது oldest building material. Clay-ஐ mold பண்ணி burn பண்றோம். India-ல் standard size: 190mm × 90mm × 90mm.

**Classification by Quality:**
1. **First Class**: Perfect shape, deep red, metallic sound
2. **Second Class**: Slight irregularities, still good strength
3. **Third Class**: Under-burnt, for temporary structures
4. **Fourth Class**: Over-burnt, only for foundations

**Manufacturing Process:**
1. Preparation of clay (weathering, blending)
2. Moulding (hand or machine)
3. Drying (natural or artificial)
4. Burning (clamp, kiln)

**Tests on Bricks:**
1. **Compressive Strength**: Min 3.5 N/mm² (first class: 10 N/mm²)
2. **Water Absorption**: < 20% (first class: < 15%)
3. **Efflorescence**: White salt deposits
4. **Soundness**: Metallic ring when struck`,
    formulas: [
      {
        name: "Compressive Strength",
        formula: "σ = P/A (N/mm²)",
        description: "Load at failure / Area",
      },
      {
        name: "Water Absorption",
        formula: "WA = (W₂-W₁)/W₁ × 100%",
        description: "After 24hr immersion",
      },
      {
        name: "Bricks per m³",
        formula: "≈ 500 bricks (with mortar)",
        description: "For 230mm thick wall",
      },
    ],
    keyPoints: [
      "Standard brick size: 190 × 90 × 90 mm",
      "Modular brick: 200 × 100 × 100 mm",
      "Good brick has uniform color and sharp edges",
      "Over-burnt bricks are brittle but very hard",
      "Fly ash bricks are eco-friendly alternative",
      "Frog (depression) helps in better mortar bonding",
    ],
    videos: [
      {
        title: "Types of Bricks in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Brick Testing Methods",
        videoId: "dQw4w9WgXcQ",
        channel: "Construction Tamil",
      },
    ],
  },

  timber: {
    topicId: "timber",
    explanation: `**Timber** (மரம்) என்பது natural building material. Doors, windows, formwork, temporary structures-ல் widely used.

**Classification:**
1. **Softwood**: Deodar, Pine, Fir (fast-growing, lighter)
2. **Hardwood**: Teak, Sal, Oak (slow-growing, heavier)

**Structure of Tree:**
- **Bark**: Outer protective layer
- **Cambium**: Growth layer
- **Sapwood**: Outer living wood
- **Heartwood**: Inner dead wood (darker, stronger)
- **Pith**: Central soft core

**Defects in Timber:**
1. **Knots**: Branch marks
2. **Shakes**: Cracks due to shrinkage
3. **Warping**: Distortion from moisture changes
4. **Decay**: Fungal/insect attack

**Seasoning:**
Reducing moisture content from 50%+ to 10-15% for use. Methods: Air seasoning, kiln seasoning.

**Preservation:**
Protect from decay: Creosote, CCA treatment, painting.`,
    formulas: [
      {
        name: "Moisture Content",
        formula: "MC = (W₁-W₂)/W₂ × 100%",
        description: "W₁=wet, W₂=oven-dry weight",
      },
      {
        name: "Shrinkage",
        formula: "More along width than length",
        description: "Tangential > Radial > Longitudinal",
      },
    ],
    keyPoints: [
      "Teak is best timber (durable, termite resistant)",
      "Heartwood is stronger than sapwood",
      "Proper seasoning prevents warping",
      "Moisture content for use: 12-15%",
      "Plywood is stronger than solid wood",
      "Annual rings indicate tree age",
    ],
    videos: [
      {
        title: "Timber Properties in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "Defects in Timber Explained",
        videoId: "dQw4w9WgXcQ",
        channel: "Construction Tamil",
      },
    ],
  },

  steel: {
    topicId: "steel",
    explanation: `**Steel** (எஃகு) என்பது iron + carbon alloy (0.15-1.5% carbon). Construction-ல் reinforcement, structural members-க்கு essential.

**Types of Steel:**
1. **Mild Steel (MS)**: 0.15-0.3% C, ductile, most common
2. **High Carbon Steel**: > 0.6% C, harder but brittle
3. **Alloy Steel**: Added elements (Cr, Ni, V)
4. **Stainless Steel**: 12%+ Chromium, corrosion resistant

**Reinforcement Types:**
1. **Plain Bars**: Smooth surface
2. **Deformed Bars (TMT)**: Ribs for better bonding
3. **TMT (Thermo-Mechanically Treated)**: High strength, ductile

**Properties:**
- High tensile strength: 415-500 N/mm² (Fe 415, Fe 500)
- High modulus of elasticity: 2 × 10⁵ N/mm²
- Ductile: Can bend without breaking
- Weldable: Can be joined by welding

**Corrosion:**
Steel rusts in presence of moisture and oxygen. Prevention: Coating, galvanizing, adequate concrete cover.`,
    formulas: [
      {
        name: "Steel Grades",
        formula: "Fe 415, Fe 500, Fe 550",
        description: "Number = Yield strength in N/mm²",
      },
      {
        name: "Percentage Elongation",
        formula: "% = (Final - Original)/Original × 100",
        description: "Ductility measure",
      },
      {
        name: "Young's Modulus",
        formula: "E = 2 × 10⁵ N/mm²",
        description: "For all structural steel",
      },
    ],
    keyPoints: [
      "Fe 500 means yield strength = 500 N/mm²",
      "TMT has soft core, hard surface",
      "Cover to reinforcement: 25-75 mm typically",
      "Minimum elongation: 12% for Fe 500",
      "Carbon increases strength but reduces ductility",
      "Galvanized steel resists corrosion better",
    ],
    videos: [
      {
        title: "Steel for Construction in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
      {
        title: "TMT Bar Manufacturing Process",
        videoId: "dQw4w9WgXcQ",
        channel: "Construction Tamil",
      },
    ],
  },

  // Environmental Science
  ecosystem: {
    topicId: "ecosystem",
    explanation: `**Ecosystem** (சூழலியல் அமைப்பு) என்பது living organisms மற்றும் non-living environment-ன் interaction. Energy flows through ecosystem, materials cycle within it.

**Components:**
1. **Abiotic (Non-living)**: Sunlight, water, soil, air, temperature
2. **Biotic (Living)**: 
   - Producers (plants) - Photosynthesis
   - Consumers (animals) - Herbivores, Carnivores, Omnivores
   - Decomposers (bacteria, fungi) - Break down dead matter

**Types of Ecosystems:**
1. **Terrestrial**: Forest, grassland, desert
2. **Aquatic**: Freshwater (pond, river), Marine (ocean)
3. **Artificial**: Cropland, aquarium

**Energy Flow:**
Sun → Producers → Primary Consumers → Secondary Consumers → Tertiary Consumers
Only 10% energy transfers to next level (10% rule)

**Nutrient Cycles:**
- Carbon cycle
- Nitrogen cycle
- Water cycle (Hydrological cycle)`,
    formulas: [
      {
        name: "10% Energy Rule",
        formula: "Only 10% energy → next trophic level",
        description: "Rest lost as heat",
      },
      {
        name: "Ecological Pyramid",
        formula: "Energy/Biomass/Numbers",
        description: "Represents trophic levels",
      },
    ],
    keyPoints: [
      "Producers form the base of food chain",
      "Energy flow is unidirectional",
      "Nutrient cycling is circular",
      "Decomposers are essential for recycling",
      "Biodiversity indicates ecosystem health",
      "Food web > Food chain (more realistic)",
    ],
    videos: [
      {
        title: "Ecosystem Basics in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Environmental Science Tamil",
      },
      {
        title: "Food Chain and Energy Flow",
        videoId: "dQw4w9WgXcQ",
        channel: "Ecology Tamil",
      },
    ],
  },

  "water-pollution": {
    topicId: "water-pollution",
    explanation: `**Water Pollution** (நீர் மாசுபாடு) என்பது harmful substances water bodies-ல் சேர்வது, அது water quality-ஐ affect பண்றது.

**Sources:**
1. **Point Sources**: Specific locations (factory outlets, sewage pipes)
2. **Non-point Sources**: Diffuse sources (agricultural runoff, urban stormwater)

**Types of Pollutants:**
1. **Organic Matter**: BOD increase, oxygen depletion
2. **Nutrients**: Nitrogen, Phosphorus (eutrophication)
3. **Pathogens**: Bacteria, viruses (diseases)
4. **Heavy Metals**: Lead, Mercury, Cadmium (toxic)
5. **Thermal**: Hot water from industries

**Water Quality Parameters:**
- **BOD (Biochemical Oxygen Demand)**: Organic pollution indicator
- **DO (Dissolved Oxygen)**: Should be > 4 mg/L
- **pH**: Should be 6.5-8.5
- **TDS (Total Dissolved Solids)**

**Treatment Methods:**
1. Primary: Physical (screening, sedimentation)
2. Secondary: Biological (activated sludge, trickling filter)
3. Tertiary: Advanced (filtration, disinfection)`,
    formulas: [
      {
        name: "BOD",
        formula: "BOD₅ = (DO₁ - DO₅)",
        description: "5-day BOD at 20°C",
      },
      {
        name: "DO Saturation",
        formula: "≈ 9 mg/L at 20°C",
        description: "Decreases with temperature",
      },
    ],
    keyPoints: [
      "BOD₅ < 30 mg/L for safe discharge",
      "Eutrophication: Excess nutrients → Algal bloom",
      "Coliform bacteria indicate fecal contamination",
      "Chlorination is common disinfection method",
      "Industrial effluent treatment is mandatory",
      "Zero liquid discharge (ZLD) is ideal",
    ],
    videos: [
      {
        title: "Water Pollution in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Environmental Science Tamil",
      },
      {
        title: "Sewage Treatment Process",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
    ],
  },

  "air-pollution": {
    topicId: "air-pollution",
    explanation: `**Air Pollution** (காற்று மாசுபாடு) என்பது harmful gases, particulates காற்றில் சேர்வது.

**Major Pollutants:**
1. **Particulate Matter (PM10, PM2.5)**: Dust, smoke
2. **SO₂ (Sulphur Dioxide)**: Coal burning, industries
3. **NOx (Nitrogen Oxides)**: Vehicle exhaust
4. **CO (Carbon Monoxide)**: Incomplete combustion
5. **O₃ (Ozone)**: Secondary pollutant
6. **VOCs**: Paints, solvents

**Sources:**
1. **Mobile**: Vehicles
2. **Stationary**: Industries, power plants
3. **Area**: Construction sites, agricultural burning

**Effects:**
- Health: Respiratory diseases, cancer
- Environment: Acid rain, global warming, ozone depletion
- Materials: Corrosion, soiling

**Control Methods:**
1. **Particulates**: Cyclone separator, electrostatic precipitator, bag filter
2. **Gaseous**: Scrubbers, adsorption, catalytic converters

**Air Quality Index (AQI)**: 0-500 scale, lower is better`,
    formulas: [
      {
        name: "AQI Categories",
        formula: "0-50 Good, 51-100 Moderate, 101-200 Poor",
        description: "Higher = More polluted",
      },
      {
        name: "PM2.5 Standard",
        formula: "60 μg/m³ (24hr), 40 μg/m³ (annual)",
        description: "Indian NAAQS",
      },
    ],
    keyPoints: [
      "PM2.5 is more dangerous than PM10 (enters lungs deeply)",
      "SO₂ + Water = Acid rain (H₂SO₄)",
      "Catalytic converters reduce vehicle emissions",
      "Ozone at ground level is pollutant, in stratosphere protects us",
      "Green belt around industries reduces pollution",
      "Electrostatic precipitator: 99% efficiency for particles",
    ],
    videos: [
      {
        title: "Air Pollution Basics in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Environmental Science Tamil",
      },
      {
        title: "Air Pollution Control Devices",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
    ],
  },

  "solid-waste": {
    topicId: "solid-waste",
    explanation: `**Solid Waste Management** (திடக்கழிவு மேலாண்மை) என்பது collection, transport, treatment, and disposal of solid wastes.

**Types of Solid Waste:**
1. **Municipal Solid Waste (MSW)**: Household, commercial
2. **Industrial Waste**: Factory residues
3. **Biomedical Waste**: Hospitals, clinics
4. **E-Waste**: Electronic devices
5. **Construction & Demolition**: Building debris

**Waste Hierarchy (3R):**
1. **Reduce**: Minimize waste generation
2. **Reuse**: Use again without processing
3. **Recycle**: Process and use as raw material

**Collection & Segregation:**
- Source segregation: Wet (biodegradable), Dry (recyclable), Hazardous
- Door-to-door collection
- Community bins

**Disposal Methods:**
1. **Landfill**: Engineered disposal site
2. **Composting**: Biodegradable waste → Manure
3. **Incineration**: Burning (volume reduction)
4. **Biogas Plant**: Anaerobic digestion`,
    formulas: [
      {
        name: "Per Capita Waste",
        formula: "0.3-0.6 kg/person/day (India urban)",
        description: "Varies by city",
      },
      {
        name: "Landfill Volume",
        formula: "V = W × (1/density)",
        description: "Consider compaction factor",
      },
    ],
    keyPoints: [
      "Segregation at source is most effective",
      "Sanitary landfill has liner and leachate collection",
      "Composting reduces waste by 50%",
      "Biomedical waste needs special treatment",
      "E-waste contains valuable metals for recovery",
      "Waste-to-energy plants generate electricity",
    ],
    videos: [
      {
        title: "Solid Waste Management in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Environmental Science Tamil",
      },
      {
        title: "Composting and Recycling Process",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
    ],
  },

  eia: {
    topicId: "eia",
    explanation: `**Environmental Impact Assessment (EIA)** என்பது proposed project-ன் environmental effects-ஐ predict பண்ணி evaluate பண்ணும் process. India-ல் 1994 முதல் mandatory.

**Purpose:**
1. Identify potential environmental impacts
2. Suggest mitigation measures
3. Compare project alternatives
4. Ensure sustainable development

**EIA Process:**
1. **Screening**: EIA required or not?
2. **Scoping**: Key issues identification
3. **Baseline Study**: Existing environment data
4. **Impact Prediction**: Assess likely impacts
5. **Mitigation Measures**: Solutions proposed
6. **EIA Report**: Document findings
7. **Public Hearing**: Community consultation
8. **Decision Making**: Approval/Rejection

**Categories (India):**
- Category A: Central level clearance (MoEFCC)
- Category B: State level clearance (SEIAA)

**Projects Requiring EIA:**
Mining, thermal plants, industries, infrastructure, townships above certain thresholds.`,
    formulas: [
      {
        name: "EIA Notification",
        formula: "2006 (Amended 2020)",
        description: "Current Indian regulation",
      },
      {
        name: "Validity of EC",
        formula: "7-10 years typically",
        description: "Environmental Clearance period",
      },
    ],
    keyPoints: [
      "EIA is preventive tool, not reactive",
      "Public participation is mandatory",
      "Cumulative impact assessment is important",
      "Post-project monitoring ensures compliance",
      "Strategic Environmental Assessment (SEA) for policies",
      "EMP (Environmental Management Plan) is part of EIA",
    ],
    videos: [
      {
        title: "EIA Process in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Environmental Science Tamil",
      },
      {
        title: "Environmental Clearance Explained",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
    ],
  },

  sustainability: {
    topicId: "sustainability",
    explanation: `**Sustainable Development** (நிலையான வளர்ச்சி) என்பது present needs-ஐ meet பண்றது without compromising future generations' ability to meet their needs.

**Three Pillars:**
1. **Environmental**: Natural resource conservation
2. **Economic**: Financial viability
3. **Social**: Equity and well-being

**Principles:**
1. Inter-generational equity
2. Precautionary principle
3. Polluter pays principle
4. Prevention is better than cure

**Sustainable Construction:**
1. **Green Buildings**: Energy efficient, reduced water use
2. **LEED/GRIHA Certification**: Rating systems
3. **Renewable Energy**: Solar, wind integration
4. **Water Harvesting**: Rainwater collection
5. **Waste Minimization**: Reduce, reuse, recycle

**UN SDGs (Sustainable Development Goals):**
17 goals for 2030 including:
- Clean water and sanitation
- Affordable clean energy
- Sustainable cities
- Climate action`,
    formulas: [
      {
        name: "Triple Bottom Line",
        formula: "People + Planet + Profit",
        description: "Sustainability framework",
      },
      {
        name: "Carbon Footprint",
        formula: "Total CO₂ equivalent emissions",
        description: "Measured in kg CO₂",
      },
    ],
    keyPoints: [
      "Brundtland Report (1987) defined sustainable development",
      "Life Cycle Assessment (LCA) evaluates environmental impact",
      "Embodied energy includes material production energy",
      "Net Zero Energy Building: Produces as much as it consumes",
      "Green concrete uses industrial waste (fly ash, slag)",
      "Rainwater harvesting is mandatory in many states",
    ],
    videos: [
      {
        title: "Sustainable Development in Tamil",
        videoId: "dQw4w9WgXcQ",
        channel: "Environmental Science Tamil",
      },
      {
        title: "Green Building Concepts",
        videoId: "dQw4w9WgXcQ",
        channel: "Civil Engineering Tamil",
      },
    ],
  },
};

export function getTopicContent(topicId: string): TopicContent | undefined {
  return topicContents[topicId];
}
