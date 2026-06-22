import { useMemo } from 'react'
import NodeCard from './NodeCard'
import Connectors from './Connectors'

export default function Canvas({ nodes }) {
  // Build the lookup map: id → node (the Two Sum pattern)
  const nodeMap = useMemo(
    () => new Map(nodes.map((n) => [n.id, n])),
    [nodes]
  )

  return (
    <div
      className="relative bg-canvas mx-auto overflow-hidden"
      style={{ width: 1200, height: 800 }}
    >
      {/* Lines go BEHIND the cards */}
      <Connectors nodes={nodes} nodeMap={nodeMap} />

      {/* Cards on top */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute"
          style={{
            left: node.position.x,
            top: node.position.y,
          }}
        >
          <NodeCard node={node} />
        </div>
      ))}
    </div>
  )
}