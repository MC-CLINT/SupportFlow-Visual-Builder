import { useState } from 'react'
import Canvas from './components/Canvas'
import flowData from '../flow_data.json'

function App() {
  const [nodes, setNodes] = useState(flowData.nodes)

  return (
    <div className="min-h-screen bg-canvas-deep flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold text-white mb-6">
        SupportFlow Visual Builder
      </h1>
      <Canvas nodes={nodes} />
    </div>
  )
}

export default App