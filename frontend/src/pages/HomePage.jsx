import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="space-y-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nền tảng học tiếng Anh</h1>
          <p className="text-slate-600 mt-2">Chọn một module để bắt đầu học.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        {[ 
          { to: '/vocabulary', title: 'Học Từ vựng', desc: 'Từ vựng, phiên âm, phát âm' },
          { to: '/grammar', title: 'Học Ngữ pháp', desc: 'Cấu trúc và ví dụ' },
          { to: '/conversation', title: 'Học Hội thoại', desc: 'Hội thoại song ngữ + audio' },
          { to: '/test', title: 'Bài kiểm tra', desc: 'Trắc nghiệm đánh giá' },
          { to: '/profile', title: 'Hồ sơ', desc: 'Thông tin cá nhân & tiến độ' },
          { to: '/login', title: 'Đăng nhập', desc: 'Vào học và đồng bộ' },
        ].map((item) => (
          <Link key={item.to} to={item.to} className="block bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition">
            <div className="font-semibold text-slate-900 text-lg">{item.title}</div>
            <div className="text-sm text-slate-600 mt-1">{item.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage


