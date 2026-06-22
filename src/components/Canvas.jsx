import { useMemo } from 'react'
import NodeCard from './NodeCard'
import Connectors from './Connectors'

export default function Canvas({ nodes, selectedId, onSelectNode }) {
  const nodeMap = useMemo(
    () => new Map(nodes.map((n) => [n.id, n])),
    [nodes]
  )

  return (
    <div
      className="relative bg-canvas mx-auto overflow-hidden"
      style={{ width: 1200, height: 800 }}
    >
      <Connectors nodes={nodes} nodeMap={nodeMap} />

      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute"
          style={{
            left: node.position.x,
            top: node.position.y,
          }}
        >
          <div
            onClick={() => onSelectNode(node.id)}
            className={`cursor-pointer rounded-xl transition-all ${
              selectedId === node.id
                ? 'ring-2 ring-start ring-offset-2 ring-offset-canvas'
                : 'hover:ring-1 hover:ring-white/30'
            }`}
          >
            <NodeCard node={node} />
          </div>
        </div>
      ))}
    </div>
  )
}