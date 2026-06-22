import { useState, useMemo } from 'react'
import Canvas from './components/Canvas'
import EditPanel from './components/EditPanel'
import Preview from './components/Preview'
import flowData from '../flow_data.json'

function App() {
  const [nodes, setNodes] = useState(flowData.nodes)
  const [selectedId, setSelectedId] = useState(null)
  const [mode, setMode] = useState('editor') // 'editor' or 'preview'

  const nodeMap = useMemo(
    () => new Map(nodes.map((n) => [n.id, n])),
    [nodes]
  )

  const selectedNode = nodes.find((n) => n.id === selectedId)

  const handleUpdateText = (id, newText) => {
    setNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, text: newText } : n))
    )
  }

  const startNode = nodes.find((n) => n.type === 'start')

  return (
    <div className="min-h-screen bg-canvas-deep flex flex-col items-center py-8">
      {/* Header with mode toggle */}
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-white">
          SupportFlow Visual Builder
        </h1>
        <button
          onClick={() => {
            setMode(mode === 'editor' ? 'preview' : 'editor')
            setSelectedId(null)
          }}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
            mode === 'preview'
              ? 'bg-white text-canvas-deep'
              : 'bg-start text-canvas-deep'
          }`}
        >
          {mode === 'editor' ? '▶ Play' : '✕ Back to Editor'}
        </button>
      </div>

      {/* Conditional rendering based on mode */}
      {mode === 'editor' ? (
        <div className="flex gap-6 items-start">
          <Canvas
            nodes={nodes}
            selectedId={selectedId}
            onSelectNode={setSelectedId}
            nodeMap={nodeMap}
          />
          {selectedNode && (
            <EditPanel
              node={selectedNode}
              onUpdateText={handleUpdateText}
              onClose={() => setSelectedId(null)}
            />
          )}
        </div>
      ) : (
        <Preview nodeMap={nodeMap} startNode={startNode} />
      )}
    </div>
  )
}

export default App