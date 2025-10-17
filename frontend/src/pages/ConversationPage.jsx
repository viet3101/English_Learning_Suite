const convo = {
  title: 'Tại sân bay',
  audio: '',
  messages: [
    { who: 'A', en: 'Hello, may I see your passport?', vi: 'Xin chào, tôi có thể xem hộ chiếu của bạn không?' },
    { who: 'B', en: 'Here you are.', vi: 'Của bạn đây.' },
    { who: 'A', en: 'What is the purpose of your visit?', vi: 'Mục đích chuyến đi của bạn là gì?' },
    { who: 'B', en: 'Tourism. I will stay for one week.', vi: 'Du lịch. Tôi sẽ ở lại một tuần.' },
  ],
}

function ConversationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{convo.title}</h1>
      <div className="bg-white rounded-xl shadow p-4">
        <audio controls className="w-full">
          <source src={convo.audio} type="audio/mpeg" />
          Trình duyệt của bạn không hỗ trợ phát âm thanh.
        </audio>
      </div>
      <div className="space-y-3">
        {convo.messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.who === 'A' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow bg-white border ${m.who === 'A' ? 'rounded-bl-none' : 'rounded-br-none bg-indigo-50 border-indigo-200'}`}>
              <div className="text-xs font-medium text-slate-500 mb-1">{m.who}</div>
              <div className="text-slate-900">{m.en}</div>
              <div className="text-sm text-slate-600 mt-1">{m.vi}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConversationPage


