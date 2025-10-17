function LoginPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Chào mừng trở lại!</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input id="email" type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Mật khẩu</label>
            <input id="password" type="password" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5">Đăng nhập</button>
        </form>
        <p className="text-sm text-center text-slate-600 mt-4">
          Chưa có tài khoản? <a href="/register" className="text-indigo-600 hover:underline">Đăng ký</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage


