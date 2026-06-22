export default function ExportButton({ nodes }) {
  const handleExport = () => {
    const data = {
      meta: {
        theme: 'dark',
        canvas_size: { w: 1200, h: 800 },
        exported_at: new Date().toISOString(),
      },
      nodes: nodes,
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    })

    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'support-flow.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 rounded-lg text-sm font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
    >
      ↓ Export JSON
    </button>
  )
}