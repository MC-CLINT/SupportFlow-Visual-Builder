# SupportFlow Visual Builder

A visual decision tree editor for customer support chatbot flows. Support managers can see their conversation logic as a connected flowchart, edit questions in real-time, and preview the bot experience before deploying.

**Live demo:** https://support-flow-visual-builder-one.vercel.app/

**Design system:** [Figma](https://www.figma.com/design/jEKvfNMBEbmvKOSRmkYv0o/SupportFlow-Visual-Builder-%E2%80%94-Design-System?node-id=0-1&t=jdAb4v2a3vRWvInd-1)

## Features

### Visual flowchart
Nodes render on a 1200×800 canvas at their JSON-defined positions. Cubic Bézier SVG connectors link parent nodes to children, with vertical control points creating a natural downward flow. Color-coded left bars indicate node type; lime for start, purple for question, gray for end.

### Live editor
Click any node to open the edit panel. Text changes reflect instantly on the canvas through React state. All edits are in-memory, no backend required.

### Preview mode
The Play button toggles to a chat interface. The app traverses the decision graph from the start node, presenting options at each step. Leaf nodes (empty options array) trigger a Restart button.

### Export as JSON (Wildcard feature)
The Export button downloads the current flow state, including any edits, as a formatted JSON file. This lets managers save their work and share it with engineering for deployment.

**Why this feature:** Without export, every edit is lost on refresh — the tool is a demo, not a workflow. Export bridges the gap between visual editing and production deployment.

## Design system

The Figma file documents canvas dimensions, the three node card variants (start / question / end), typography, color encoding by node type, and the cubic-Bézier connector approach used in the implementation. Key decisions:

- **Color encodes node type, not aesthetics.** Users can identify start, question, and end nodes at a glance from the left-bar accent color alone.
- **Cubic Bézier connectors** with vertically-placed control points create a clean top-to-bottom reading direction, matching how decision trees are naturally understood.
- **White cards on a deep purple canvas** provide strong contrast and a focused editing environment.

## Technical decisions

- **Node lookup via Map:** A `Map(id → node)` provides O(1) lookups for both connector rendering and preview traversal, avoiding repeated array searches.
- **Immutable state updates:** Edits use spread operators to create new objects, ensuring React detects changes and re-renders reliably.
- **Absolute positioning:** Matches the JSON's x/y coordinate model; CSS Grid or Flexbox would fight freeform canvas placement.
- **Bézier control points placed vertically:** Offset straight down from the source and straight up into the target, producing a flowing downward curve instead of harsh diagonal lines.
- **SVG overlay with pointer-events-none:** Connector lines render behind interactive cards without blocking click events.

## Tech stack

- React 18 (Vite)
- Tailwind CSS v4 with custom theme tokens
- Custom SVG rendering (no react-flow, jsPlumb, or mermaid)
- No component libraries (no MUI, Bootstrap, or Chakra)

## Project structure

src/

├── App.jsx              # State management, mode toggle

├── index.css            # Tailwind + custom theme tokens

├── components/

│   ├── Canvas.jsx       # 1200×800 canvas with node placement

│   ├── NodeCard.jsx     # Individual node card component

│   ├── Connectors.jsx   # SVG Bézier connector rendering

│   ├── EditPanel.jsx    # Side panel for editing node text

│   ├── Preview.jsx      # Chat-style graph traversal

│   └── ExportButton.jsx # JSON export (wildcard feature)

flow_data.json           # Source decision tree data


## Getting started

```bash
npm install
npm run dev
```