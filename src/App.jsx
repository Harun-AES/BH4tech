import React, { useState, useEffect } from 'react';
import { 
  Terminal, Database, Truck, Globe, 
  Users, MapPin, Mail, Phone, 
  ChevronRight, CheckCircle2, Code2,
  Cpu, ArrowRight, BarChart3, ShieldCheck, Zap 
} from 'lucide-react';

/**
 * BH4Logo Bileşeni
 * Not: Bu bileşen 'public/logo.png' dosyasını arar.
 * React kuralları gereği bileşen ismi Büyük Harfle başlamalıdır.
 */
const BH4Logo = ({ className = "w-12 h-12" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-xl ${className}`}>
      {!imgError ? (
        <img 
          src="/logo.png" 
          alt="BH4Tech Logo" 
          className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        // Logo.png bulunamazsa gösterilecek şık yedek ikon (SVG)
        <div className="w-full h-full bg-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-inner">
          BH4
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendEmail = () => {
    window.location.href = "mailto:iletisim@bh4tech.com?subject=BH4Tech Hizmet Talebi&body=Merhaba BH4Tech Ekibi,";
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-600 selection:text-white scroll-smooth text-left">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <BH4Logo className="w-14 h-14" />
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">BH4<span className="text-indigo-600 uppercase">Tech</span></span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mt-1">Yazılım Çözümleri</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#hizmetler" className="hover:text-indigo-600 transition-colors">Hizmetler</a>
            <a href="#kurumsal" className="hover:text-indigo-600 transition-colors">Kurumsal</a>
            <a href="#referanslar" className="hover:text-indigo-600 transition-colors">Referanslar</a>
          </div>

          <button 
            onClick={sendEmail}
            className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 active:scale-95 text-xs uppercase tracking-widest"
          >
            İletişime Geç
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-4 max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-indigo-100 shadow-sm">
            <Zap size={14} fill="currentColor" className="text-yellow-500 animate-pulse" /> Endüstriyel Yazılımda BH4 Kalitesi
          </div>
          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] mb-10 text-slate-900 tracking-tighter italic">
            Operasyonu <br/><span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Analizle</span> <br/>Yönetin.
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
            BH4Tech, işletmelere özel stok takibi, envanter analizi ve sevkiyat yönetim sistemleri kurgulayarak dijital dönüşümünüze mühendislik vizyonu katar.
          </p>
          <button onClick={sendEmail} className="bg-indigo-600 text-white px-12 py-6 rounded-[2rem] font-black shadow-2xl shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center gap-4 text-xl group active:scale-95">
            İş Birliği Başlat <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="hidden lg:block relative">
          <div className="bg-white p-6 rounded-[4rem] shadow-2xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="bg-slate-900 rounded-[3.5rem] p-16 aspect-square relative overflow-hidden flex flex-col justify-between">
               <div className="absolute top-0 right-0 opacity-10 -mr-20 -mt-20 scale-150">
                 <BH4Logo className="w-96 h-96" />
               </div>
               <div className="relative z-10 flex justify-between items-start text-white">
                  <div className="space-y-3">
                    <div className="h-2 w-40 bg-indigo-500 rounded-full"></div>
                    <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                  </div>
                  <div className="bg-indigo-600/20 p-5 rounded-3xl border border-indigo-500/30">
                    <Cpu className="text-indigo-400" size={40} />
                  </div>
               </div>
               <div className="relative z-10 grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                    <div className="text-4xl font-black text-white mb-1">99.9%</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Veri Doğruluğu</div>
                  </div>
                  <div className="bg-indigo-600 p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-900/40">
                    <BarChart3 className="text-white mb-2" size={32} />
                    <div className="text-white text-xs font-black uppercase tracking-widest leading-none">Anlık Takip</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section id="hizmetler" className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-indigo-600 font-black tracking-[0.4em] uppercase text-xs mb-4">Uzmanlık Alanlarımız</h2>
            <h3 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter italic">Dijital Çözümler</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Database className="text-indigo-600" />, title: "Akıllı Stok & Envanter", text: "Üretim tesislerinden butik işletmelere kadar her yapıya uygun, hata payı minimize edilmiş envanter yazılımları." },
              { icon: <Truck className="text-emerald-500" />, title: "Lojistik & Sevkiyat", text: "Sevkiyat süreçlerinizi otomatize eden, rota ve kaynak optimizasyonu sağlayan özelleştirilmiş yazılım mimarileri." },
              { icon: <Code2 className="text-blue-500" />, title: "Kurumsal Dashboards", text: "İşletmenizin verilerini tek bir noktadan yönetebileceğiniz, yüksek performanslı dashboard uygulamaları." }
            ].map((s, i) => (
              <div key={i} className="p-12 bg-white rounded-[3.5rem] border border-slate-200 hover:border-indigo-400 transition-all hover:shadow-2xl group">
                <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(s.icon, { size: 36 })}
                </div>
                <h4 className="text-2xl font-black mb-6 text-slate-800 leading-tight">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-10 text-lg">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurumsal */}
      <section id="kurumsal" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative mb-20 lg:mb-0">
             <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="bg-slate-900 aspect-square rounded-[3.5rem] flex items-center justify-center p-12 shadow-2xl border-4 border-slate-800">
                     <BH4Logo className="w-40 h-40" />
                  </div>
                  <div className="bg-indigo-600 aspect-[4/3] rounded-[3.5rem] p-10 flex flex-col justify-end text-white shadow-xl shadow-indigo-100">
                     <div className="text-5xl font-black tracking-tighter leading-none">2024</div>
                     <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest mt-2">Launching Year</div>
                  </div>
                </div>
                <div className="pt-20 space-y-8">
                  <div className="bg-slate-100 aspect-[4/3] rounded-[3.5rem] p-10 flex flex-col justify-end text-slate-900 shadow-sm border border-slate-200">
                     <div className="text-5xl font-black tracking-tighter leading-none">10+</div>
                     <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2 font-mono">Project Milestone</div>
                  </div>
                  <div className="bg-indigo-50 aspect-square rounded-[3.5rem] flex items-center justify-center border border-indigo-100">
                     <ShieldCheck size={100} className="text-indigo-600 opacity-20" />
                  </div>
                </div>
             </div>
          </div>
          
          <div>
            <h2 className="text-indigo-600 font-black tracking-[0.4em] uppercase text-xs mb-8 text-center lg:text-left">Kurumsal Vizyonumuz</h2>
            <h3 className="text-5xl lg:text-7xl font-black mb-10 text-slate-900 leading-[1.05] tracking-tighter italic">BH4Tech: Uzman Ekip Altyapısı.</h3>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              BH4Tech, teknolojik inovasyonu endüstriyel sahanın gerçek ihtiyaçlarıyla birleştiren profesyonel bir yazılım kadrosudur. Kurucu ekibimiz, karmaşık süreçleri veriye dayalı, güvenli ve ölçeklenebilir sistemlere dönüştürerek markanıza değer katar.
            </p>
            <div className="inline-flex items-center gap-6 p-8 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-lg transition-all">
              <div className="flex -space-x-6">
                 <div className="w-20 h-20 bg-indigo-600 rounded-[1.8rem] flex items-center justify-center text-white font-black text-2xl border-4 border-white shadow-xl">B</div>
                 <div className="w-20 h-20 bg-slate-900 rounded-[1.8rem] flex items-center justify-center text-white font-black text-2xl border-4 border-white shadow-xl">H</div>
              </div>
              <div className="text-left">
                 <span className="block font-black text-slate-900 text-2xl tracking-tighter uppercase leading-none">Kurucu Ekibimiz</span>
                 <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 italic leading-none">Analiz & Yazılım Uzmanları</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <section id="referanslar" className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-indigo-600 font-black tracking-[0.4em] uppercase text-xs mb-6">Sektörel Tecrübe</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter italic leading-none">Referans Projelerimiz</h3>
           </div>
           <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="relative z-10">
                    <span className="bg-indigo-600 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 inline-block">Ağır Sanayi</span>
                    <h4 className="text-4xl font-black mb-6 leading-tight italic underline decoration-indigo-500 underline-offset-8">CNC Fabrikası <br/>Envanter Takip Sistemi</h4>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium text-left">Binlerce kalem metal parça ve ham maddenin saniyeler içinde hatasız sayılmasını sağlayan bulut tabanlı mobil mimari.</p>
                    <div className="flex items-center gap-3 text-indigo-400 font-black text-sm uppercase tracking-widest transition-colors"><CheckCircle2 size={24}/> Doğruluk Payı: %99.9</div>
                  </div>
              </div>
              <div className="bg-white rounded-[4rem] p-16 text-slate-900 border border-slate-200 group hover:shadow-2xl transition-all duration-500">
                  <div className="relative z-10">
                    <span className="bg-slate-100 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 inline-block text-slate-500 shadow-sm border border-slate-200 uppercase tracking-tighter font-black">Gıda & Lojistik</span>
                    <h4 className="text-4xl font-black mb-6 leading-tight italic underline decoration-slate-300 underline-offset-8 text-slate-800 uppercase tracking-tighter">Butik Tatlıcı <br/>Operasyon Takip</h4>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">Üretimden sevkiyata, fire oranlarından günlük tezgâh analizine kadar her aşamanın kontrol edildiği akıllı ERP çözümü.</p>
                    <div className="flex items-center gap-3 text-indigo-600 font-black text-sm uppercase tracking-widest"><CheckCircle2 size={24}/> Verimlilik Artışı: %35</div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <div className="bg-indigo-600 rounded-[5rem] p-20 md:p-32 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
              <h2 className="text-6xl md:text-8xl font-black mb-10 relative z-10 leading-none tracking-tighter italic uppercase">Geleceği <br/>Birlikte Yazalım.</h2>
              <p className="text-2xl text-indigo-100 mb-20 relative z-10 font-medium max-w-3xl mx-auto opacity-90 leading-relaxed">
                İşletmenizin dijital dönüşüm süreçlerinde uzman mühendis kadromuzla yanınızdayız. Profesyonel bir başlangıç için bize ulaşın.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
                 <button onClick={sendEmail} className="bg-white text-indigo-600 px-16 py-7 rounded-[2.5rem] font-black text-xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl active:scale-95">
                    Hemen Mail Atın
                 </button>
                 <a href="tel:+905550004444" className="bg-indigo-700 text-white px-16 py-7 rounded-[2.5rem] font-black text-xl hover:bg-indigo-800 transition-all border border-indigo-400/30 flex items-center justify-center gap-4 active:scale-95 shadow-xl">
                    <Phone size={28} /> Bizi Arayın
                 </a>
              </div>
              <div className="mt-32 pt-16 border-t border-white/10 grid md:grid-cols-3 gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-indigo-100 opacity-80 leading-none">
                 <div className="flex items-center justify-center gap-3"><Mail size={18} /> iletisim@bh4tech.com</div>
                 <div className="flex items-center justify-center gap-3"><MapPin size={18} /> Teknokent, İstanbul</div>
                 <div className="flex items-center justify-center gap-3"><Globe size={18} /> bh4tech.com</div>
              </div>
           </div>
           
           <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
              <span>© 2026 BH4Tech Software Engineering Solutions</span>
              <span>Design & Developed by BH4Team</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;