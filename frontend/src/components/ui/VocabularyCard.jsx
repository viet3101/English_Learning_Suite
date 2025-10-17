function VocabularyCard({ word, phonetic, meaning, onSpeak }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-lg font-semibold text-gray-900">{word}</div>
          {phonetic && (
            <div className="text-sm text-gray-500">{phonetic}</div>
          )}
        </div>
        {onSpeak && (
          <button
            type="button"
            onClick={onSpeak}
            className="shrink-0 inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm hover:bg-gray-50 active:bg-gray-100"
            aria-label="Phát âm"
          >
            <span role="img" aria-hidden>
              🔊
            </span>
            <span>Nghe</span>
          </button>
        )}
      </div>
      <div className="text-gray-700">{meaning}</div>
    </div>
  )
}

export default VocabularyCard


