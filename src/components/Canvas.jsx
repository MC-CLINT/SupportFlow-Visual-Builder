import NodeCard from './NodeCard'

export default function Canvas({ nodes }) {
  return (
    <div
      className="relative bg-canvas mx-auto overflow-hidden"
      style={{ width: 1200, height: 800 }}
    >
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