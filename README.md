# SupportFlow Visual Builder

A visual decision tree editor for chatbot conversation flows. Built as the AmaliTech Practical Capstone Challenge.

**Live demo:** https://support-flow-visual-builder-one.vercel.app/

## Design

The design system, color semantics, node card variants, connector style, and a desktop editor mockup live in Figma:

**Figma link:** https://www.figma.com/design/jEKvfNMBEbmvKOSRmkYv0o/SupportFlow-Visual-Builder-%E2%80%94-Design-System?node-id=0-1&t=jdAb4v2a3vRWvInd-1

The design system page documents canvas dimensions, the three node card variants (start / question / end), typography, color encoding by node type, and the cubic-Bézier connector approach used in the implementation.

## Status

🚧 In progress. See commit history for daily progress.

## Tech stack

- React 18 (Vite)
- Tailwind CSS v4
- Custom SVG rendering for connectors (no external graph libraries)

## Getting started

\`\`\`bash
npm install
npm run dev
\`\`\`