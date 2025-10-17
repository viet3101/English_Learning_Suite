import VocabularyCard from '../components/ui/VocabularyCard'
import { mockVocabulary } from '../services/mockDb'

function VocabularyPage() {
  const speak = (text) => {
    try {
      const utter = new SpeechSynthesisUtterance(text)
      utter.lang = 'en-US'
      window.speechSynthesis.speak(utter)
    } catch {}
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Học Từ Vựng</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockVocabulary.map((w) => (
          <VocabularyCard
            key={w.id}
            word={w.word}
            phonetic={w.phonetic}
            meaning={w.meaning}
            onSpeak={() => speak(w.word)}
          />
        ))}
      </div>
    </div>
  )
}

export default VocabularyPage


