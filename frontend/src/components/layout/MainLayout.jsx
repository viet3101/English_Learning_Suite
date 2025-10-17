import Header from './Header'
import Footer from './Footer'

function MainLayout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 max-w-[1800px] mx-auto w-full px-6 lg:px-10 py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout


