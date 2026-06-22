const TYPE_STYLES = {
  start: {
    bar: 'bg-start',
    label: 'text-start',
    labelText: 'START',
  },
  question: {
    bar: 'bg-question',
    label: 'text-question',
    labelText: 'QUESTION',
  },
  end: {
    bar: 'bg-end',
    label: 'text-end',
    labelText: 'END',
  },
}

export default function NodeCard({ node }) {
  const style = TYPE_STYLES[node.type]

  return (
    <div className="flex bg-surface rounded-xl border border-border-card w-52 overflow-hidden shadow-sm">
      {/* The colored left bar */}
      <div className={`w-1 shrink-0 ${style.bar}`} />

      <div className="p-3 flex-1 min-w-0">
        {/* Type label */}
        <span className={`text-[10px] font-semibold tracking-widest uppercase ${style.label}`}>
          {style.labelText}
        </span>

        {/* Question text */}
        <p className="text-sm font-medium text-text-dark mt-1 leading-snug">
          {node.text}
        </p>

        {/* Option pills — only if the node has options */}
        {node.options.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {node.options.map((opt, i) => (
              <span
                key={i}
                className="text-[11px] px-3 py-1 rounded-full bg-pill-bg text-question"
              >
                {opt.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}