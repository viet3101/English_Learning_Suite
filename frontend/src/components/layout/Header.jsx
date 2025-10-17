import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [showTranslate, setShowTranslate] = useState(false)
  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-indigo-600 text-white">A</span>
            <span className="text-lg">HocTiengAnh</span>
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6 text-sm">
            <NavLink to="/" className={({isActive}) => `hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'}`}>Trang chủ</NavLink>
            <NavLink to="/vocabulary" className={({isActive}) => `hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'}`}>Từ vựng</NavLink>
            <NavLink to="/grammar" className={({isActive}) => `hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'}`}>Ngữ pháp</NavLink>
            <NavLink to="/conversation" className={({isActive}) => `hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'}`}>Hội thoại</NavLink>
            <NavLink to="/test" className={({isActive}) => `hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'}`}>Bài kiểm tra</NavLink>
            <NavLink to="/profile" className={({isActive}) => `hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-600'}`}>Hồ sơ</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Dịch nhanh"
              onClick={() => setShowTranslate((v) => !v)}
              className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 hover:bg-slate-50"
            >
              {/* Translate icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5h8M8 5c0 7 8 7 8 14M4 5c0 7 8 7 8 14" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 20l-3-3m0 0l-3 3m3-3v-6" />
              </svg>
            </button>
            <Link to="/login" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-700">Đăng nhập</Link>
            <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded">Đăng ký</Link>
          </div>
        </div>
      </div>
      {showTranslate && (
        <div className="border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Dịch nhanh</label>
            <textarea className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={3} placeholder="Nhập từ hoặc câu để dịch..." />
            <div className="flex justify-end mt-2">
              <button type="button" className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2">Dịch</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header


