const CARD_WIDTH = 208  // w-52 = 13rem = 208px
const CARD_HEIGHT = 140 // estimated average card height

export default function Connectors({ nodes, nodeMap }) {
  // Build all the edges: for each node, for each option, one line
  const edges = []

  nodes.forEach((node) => {
    node.options.forEach((option) => {
      const target = nodeMap.get(option.nextId)
      if (!target) return // safety check

      edges.push({
        id: `${node.id}-${option.nextId}`,
        source: node,
        target: target,
      })
    })
  })

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={1200}
      height={800}
    >
      {edges.map((edge) => {
        // Source: bottom-center of parent card
        const sx = edge.source.position.x + CARD_WIDTH / 2
        const sy = edge.source.position.y + CARD_HEIGHT

        // Target: top-center of child card
        const tx = edge.target.position.x + CARD_WIDTH / 2
        const ty = edge.target.position.y

        // Vertical offset for control points (half the vertical gap)
        const offset = Math.abs(ty - sy) * 0.5

        // Control points: straight down from source, straight up into target
        const c1x = sx
        const c1y = sy + offset
        const c2x = tx
        const c2y = ty - offset

        return (
          <path
            key={edge.id}
            d={`M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${tx} ${ty}`}
            fill="none"
            stroke="white"
            strokeOpacity={0.6}
            strokeWidth={2}
          />
        )
      })}
    </svg>
  )
}