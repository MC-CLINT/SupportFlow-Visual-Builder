import { useState } from 'react'
import Canvas from './components/Canvas'
import EditPanel from './components/EditPanel'
import flowData from '../flow_data.json'

function App() {
  const [nodes, setNodes] = useState(flowData.nodes)
  const [selectedId, setSelectedId] = useState(null)

  const selectedNode = nodes.find((n) => n.id === selectedId)

  const handleUpdateText = (id, newText) => {
    setNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, text: newText } : n))
    )
  }

  return (
    <div className="min-h-screen bg-canvas-deep flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold text-white mb-6">
        SupportFlow Visual Builder
      </h1>

      <div className="flex gap-6 items-start">
        <Canvas
          nodes={nodes}
          selectedId={selectedId}
          onSelectNode={setSelectedId}
        />

        {selectedNode && (
          <EditPanel
            node={selectedNode}
            onUpdateText={handleUpdateText}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>
    </div>
  )
}

export default App