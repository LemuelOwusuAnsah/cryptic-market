export function formatMoney(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) return '—'
  if (n >= 1_000_000_000) return '$' + (n / 1_000_000_000).toFixed(2) + 'B'
  if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(2) + 'M'
  if (n >= 1_000) return '$' + (n / 1_000).toFixed(1) + 'K'
  return '$' + n.toFixed(2)
}

export function formatPrice(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) return '—'
  if (n >= 1000) {
    return '$' + n.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }
  return '$' + n.toFixed(2)
}

export function formatChange(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) return { text: '—', dir: 'flat' }
  const dir = n > 0 ? 'up' : n < 0 ? 'down' : 'flat'
  const text = (n >= 0 ? '+' : '') + n.toFixed(2) + '%'
  return { text, dir }
}
