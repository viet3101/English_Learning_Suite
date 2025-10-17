import { useState } from 'react'
import { mockTests, gradeTest } from '../services/mockDb'

function TestPage() {
  const test = mockTests.tenses
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const onChoose = (qid, key) => {
    setAnswers((prev) => ({ ...prev, [qid]: key }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const graded = gradeTest('tenses', answers)
    setResult(graded)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{test.title}</h1>
        <div className="text-slate-600">Số câu hỏi: {test.questions.length}</div>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 max-w-4xl">
        {test.questions.map((q, idx) => (
          <div key={q.id} className="bg-white rounded-xl shadow p-6">
            <p className="font-medium text-slate-900 mb-3">Câu {idx + 1}: {q.text}</p>
            <div className="grid gap-2">
              {q.options.map((opt) => {
                const checked = answers[q.id] === opt.key
                return (
                  <label key={opt.key} className={`flex items-center gap-3 cursor-pointer rounded-lg border p-3 ${checked ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:bg-slate-50'}`}>
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.key}
                      checked={checked}
                      onChange={() => onChoose(q.id, opt.key)}
                      className="h-4 w-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                    />
                    <span className="text-slate-800">{opt.key}. {opt.label}</span>
                  </label>
                )
              })}
            </div>
          </div>
        ))}
        <div className="flex items-center gap-4">
          <button type="submit" className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5">Nộp bài</button>
          {result && (
            <div className="text-slate-800">
              Kết quả: <span className="font-semibold">{result.score}/{result.total}</span>
            </div>
          )}
        </div>
      </form>
      {result && (
        <div className="bg-white rounded-xl shadow p-6 max-w-4xl">
          <h2 className="font-semibold mb-3">Chi tiết kết quả</h2>
          <div className="grid gap-2">
            {result.details.map((d, i) => (
              <div key={d.id} className={`rounded-lg border p-3 ${d.isCorrect ? 'border-emerald-300 bg-emerald-50' : 'border-rose-300 bg-rose-50'}`}>
                <div className="text-sm">Câu {i + 1}: {d.isCorrect ? 'Đúng' : 'Sai'}</div>
                <div className="text-xs text-slate-600">Chọn: {d.chosen || '-'} | Đáp án đúng: {d.correct}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TestPage


