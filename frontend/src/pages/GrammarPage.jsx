const lessons = [
  { id: 1, title: 'Thì Hiện tại đơn', desc: 'Cấu trúc, cách dùng và ví dụ minh họa.' },
  { id: 2, title: 'Thì Hiện tại tiếp diễn', desc: 'Diễn tả hành động đang xảy ra tại thời điểm nói.' },
  { id: 3, title: 'Thì Quá khứ đơn', desc: 'Miêu tả hành động đã xảy ra và kết thúc trong quá khứ.' },
  { id: 4, title: 'Thì Tương lai đơn', desc: 'Diễn tả dự đoán, ý định hoặc quyết định tại thời điểm nói.' },
]

function GrammarPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Học Ngữ pháp</h1>
      <div className="bg-white rounded-xl shadow divide-y">
        {lessons.map((l) => (
          <a key={l.id} href={`#/grammar/${l.id}`} className="block p-5 hover:bg-slate-50">
            <div className="font-semibold text-slate-900">{l.title}</div>
            <div className="text-sm text-slate-600">{l.desc}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default GrammarPage


