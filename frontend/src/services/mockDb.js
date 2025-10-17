// Simple in-memory mock DB. Replace with real API later.

export const mockVocabulary = [
  { id: 1, word: 'apple', phonetic: '/ˈæp.əl/', meaning: 'quả táo' },
  { id: 2, word: 'book', phonetic: '/bʊk/', meaning: 'quyển sách' },
  { id: 3, word: 'computer', phonetic: '/kəmˈpjuː.tər/', meaning: 'máy tính' },
  { id: 4, word: 'teacher', phonetic: '/ˈtiː.tʃər/', meaning: 'giáo viên' },
  { id: 5, word: 'water', phonetic: '/ˈwɔː.tər/', meaning: 'nước' },
  { id: 6, word: 'language', phonetic: '/ˈlæŋ.ɡwɪdʒ/', meaning: 'ngôn ngữ' },
]

export const mockTests = {
  tenses: {
    id: 'tenses',
    title: 'Bài kiểm tra: Thì trong tiếng Anh',
    questions: [
      {
        id: 'q1',
        text: 'She usually ____ coffee in the morning.',
        options: [
          { key: 'A', label: 'drink' },
          { key: 'B', label: 'drinks' },
          { key: 'C', label: 'drank' },
          { key: 'D', label: 'is drinking' },
        ],
        correct: 'B',
      },
      {
        id: 'q2',
        text: 'They ____ to the cinema yesterday.',
        options: [
          { key: 'A', label: 'go' },
          { key: 'B', label: 'goes' },
          { key: 'C', label: 'went' },
          { key: 'D', label: 'are going' },
        ],
        correct: 'C',
      },
      {
        id: 'q3',
        text: 'I ____ dinner when you called.',
        options: [
          { key: 'A', label: 'cook' },
          { key: 'B', label: 'cooked' },
          { key: 'C', label: 'was cooking' },
          { key: 'D', label: 'am cooking' },
        ],
        correct: 'C',
      },
    ],
  },
}

export function gradeTest(testId, answers) {
  const test = mockTests[testId]
  if (!test) return { score: 0, total: 0, details: [] }
  let score = 0
  const details = test.questions.map((q) => {
    const correct = q.correct
    const chosen = answers[q.id]
    const isCorrect = chosen === correct
    if (isCorrect) score += 1
    return { id: q.id, correct, chosen, isCorrect }
  })
  return { score, total: test.questions.length, details }
}



