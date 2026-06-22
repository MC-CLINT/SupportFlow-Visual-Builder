import { useState } from 'react'

export default function Preview({ nodeMap, startNode }) {
  const [currentId, setCurrentId] = useState(startNode.id)
  const [messages, setMessages] = useState([
    { type: 'bot', text: startNode.text, nodeId: startNode.id },
  ])

  const currentNode = nodeMap.get(currentId)
  const isEnd = currentNode.options.length === 0

  const handleOptionClick = (option) => {
    const nextNode = nodeMap.get(option.nextId)

    setMessages((prev) => [
      ...prev,
      { type: 'user', text: option.label },
      { type: 'bot', text: nextNode.text, nodeId: nextNode.id },
    ])

    setCurrentId(option.nextId)
  }

  const handleRestart = () => {
    setCurrentId(startNode.id)
    setMessages([
      { type: 'bot', text: startNode.text, nodeId: startNode.id },
    ])
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-surface rounded-xl border border-border-card overflow-hidden">
        {/* Chat header */}
        <div className="bg-canvas px-5 py-3">
          <p className="text-white text-sm font-semibold">SupportFlow Bot</p>
          <p className="text-white/50 text-xs">Preview mode: test your flow</p>
        </div>

        {/* Messages */}
        <div className="p-5 space-y-3 min-h-80 max-h-96 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm ${
                  msg.type === 'user'
                    ? 'bg-start text-canvas-deep rounded-br-sm'
                    : 'bg-pill-bg text-text-dark rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Options or Restart */}
        <div className="border-t border-border-card p-4">
          {isEnd ? (
            <div className="text-center">
              <p className="text-xs text-end mb-3">Conversation ended</p>
              <button
                onClick={handleRestart}
                className="px-5 py-2 bg-start text-canvas-deep rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                ↺ Restart
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {currentNode.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt)}
                  className="px-4 py-2 bg-pill-bg text-question rounded-full text-sm font-medium hover:bg-question hover:text-white transition-colors"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}