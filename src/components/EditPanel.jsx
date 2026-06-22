const TYPE_LABELS = {
  start: { text: 'START', color: 'text-start' },
  question: { text: 'QUESTION', color: 'text-question' },
  end: { text: 'END', color: 'text-end' },
}

export default function EditPanel({ node, onUpdateText, onClose }) {
  const label = TYPE_LABELS[node.type]

  return (
    <div className="w-80 bg-surface rounded-xl border border-border-card p-5 shrink-0 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-xs font-semibold tracking-widest uppercase ${label.color}`}
        >
          {label.text}
        </span>
        <button
          onClick={onClose}
          className="text-end hover:text-text-dark text-lg leading-none"
        >
          ✕
        </button>
      </div>

      {/* Node ID */}
      <p className="text-xs text-end mb-3">Node {node.id}</p>

      {/* Editable text field */}
      <label className="block text-xs font-medium text-text-dark mb-1">
        Question text
      </label>
      <textarea
        value={node.text}
        onChange={(e) => onUpdateText(node.id, e.target.value)}
        rows={3}
        className="w-full border border-border-card rounded-lg p-3 text-sm text-text-dark bg-white resize-none focus:outline-none focus:ring-2 focus:ring-start"
      />

      {/* Options (read-only display) */}
      {node.options.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-medium text-text-dark mb-2">Options</p>
          <div className="flex flex-col gap-1.5">
            {node.options.map((opt, i) => (
              <div
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-pill-bg text-question"
              >
                {opt.label} → Node {opt.nextId}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}