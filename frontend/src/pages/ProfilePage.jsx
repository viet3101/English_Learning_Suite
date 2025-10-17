import { useState } from 'react'

function ProfilePage() {
  const [editing, setEditing] = useState(false)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Hồ sơ của tôi</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Avatar & basic info */}
        <div className="bg-white rounded-xl shadow p-6 lg:col-span-1">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="h-24 w-24 rounded-full bg-slate-200" />
            <div>
              <div className="text-lg font-semibold">Nguyễn Văn A</div>
              <div className="text-sm text-slate-600">you@example.com</div>
            </div>
            <button type="button" className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2" onClick={() => setEditing(true)}>
              Chỉnh sửa thông tin
            </button>
          </div>
        </div>

        {/* Middle: Edit form */}
        <div className="bg-white rounded-xl shadow p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Thông tin cá nhân</h2>
          {editing ? (
            <form className="space-y-4">
              <div>
                <label htmlFor="displayName" className="block text-sm font-medium text-slate-700 mb-1">Tên hiển thị</label>
                <input id="displayName" type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="Nguyễn Văn A" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input id="email" type="email" disabled className="w-full rounded-lg border border-slate-200 bg-slate-100 text-slate-600 px-3 py-2" defaultValue="you@example.com" readOnly />
              </div>
              <div className="flex gap-2">
                <button type="button" className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2">Cập nhật</button>
                <button type="button" className="rounded-lg border border-slate-300 text-slate-700 font-medium px-4 py-2" onClick={() => setEditing(false)}>Hủy</button>
              </div>
            </form>
          ) : (
            <div className="text-sm text-slate-600">Nhấn "Chỉnh sửa thông tin" để cập nhật hồ sơ.</div>
          )}
        </div>

        {/* Right: Progress */}
        <div className="bg-white rounded-xl shadow p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Tiến độ học tập</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="text-sm text-slate-500">Số từ đã học</div>
              <div className="text-2xl font-semibold">150</div>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="text-sm text-slate-500">Số bài học đã hoàn thành</div>
              <div className="text-2xl font-semibold">24</div>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="text-sm text-slate-500">Điểm trung bình</div>
              <div className="text-2xl font-semibold">8.5/10</div>
            </div>
          </div>
          {/* Simple progress bar */}
          <div className="mt-6">
            <div className="text-sm text-slate-600 mb-2">Mức độ hoàn thành khóa học</div>
            <div className="h-3 w-full rounded-full bg-slate-200">
              <div className="h-3 w-2/3 rounded-full bg-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage


