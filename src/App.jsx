import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Truck, 
  Globe, 
  Phone, 
  ChevronRight, 
  CheckCircle2, 
  Code2,
  Cpu,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Zap,
  FileSignature,
  SunMedium,
  X,
  Layout,
  Send,
  MessageSquare,
  Mail,
  MapPin
} from 'lucide-react';

/**
 * BH4Logo Bileşeni
 */
const BH4Logo = ({ className = "w-12 h-12" }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-2xl ${className}`}>
      {!imgError ? (
        <img 
          src="/logo.png" 
          alt="BH4Tech Logo" 
          className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-inner italic">
          BH4
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState('call');
  const [activeSlide, setActiveSlide] = useState(0);

  const references = [
    {
      type: "Sanayi",
      title: "CNC Fabrikası Envanter Çözümü",
      desc: "Milyonluk parçaların hatasız takibi için geliştirilen özel mobil barkod mimarisi.",
      stat: "%99.9 Doğruluk",
      icon: <CheckCircle2 className="text-indigo-400" size={24}/>,
      theme: "dark"
    },
    {
      type: "Enerji",
      title: "Lisanssız Elektrik Üretim Takibi",
      desc: "Santraller için anlık üretim verisi analizi ve verimlilik tespit sistemleri.",
      stat: "100% Verimlilik",
      icon: <SunMedium className="text-emerald-500" size={24}/>,
      theme: "light"
    },
    {
      type: "Otomotiv",
      title: "Araç Kiralama Yönetimi",
      desc: "Dijital sözleşme imzalama süreci ve araç teslimat paneli entegrasyonu.",
      stat: "Tam Dijitalleşme",
      icon: <FileSignature className="text-indigo-600" size={24}/>,
      theme: "indigo"
    },
    {
      type: "Lojistik",
      title: "Sevkiyat Takip Otomasyonu",
      desc: "Karmaşık dağıtım ağları için anlık konum ve teslimat doğrulama sistemleri.",
      stat: "Gerçek Zamanlı",
      icon: <Truck className="text-amber-500" size={24}/>,
      theme: "dark"
    }
  ];

  const referencePairs = [];
  for (let i = 0; i < references.length; i += 2) {
    referencePairs.push(references.slice(i, i + 2));
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % referencePairs.length);
    }, 4500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, [referencePairs.length]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const idea = formData.get('idea');
    window.location.href = `mailto:iletisim@bh4tech.com?subject=Proje Fikri: ${name}&body=${encodeURIComponent(idea)}`;
  };

  const toggleModal = (type = 'call') => {
    setFormType(type);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-600 selection:text-white scroll-smooth text-left italic">
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[3.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 border border-slate-100">
            <div className="p-10">
              <div className="flex justify-between items-center mb-10">
                <div className="flex gap-4">
                  <button onClick={() => setFormType('call')} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${formType === 'call' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>Bizi Arayın</button>
                  <button onClick={() => setFormType('idea')} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${formType === 'idea' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>Fikir Paylaş</button>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-300 hover:text-slate-900 transition-colors"><X size={28} /></button>
              </div>

              {formType === 'call' ? (
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6">Hızlı İletişim</h3>
                  <a href="tel:+905315523112" className="flex items-center justify-between p-7 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-400 hover:bg-white transition-all group">
                    <div><span className="text-[10px] font-black uppercase text-slate-400 block mb-1">Kurucu Ortak</span><span className="text-xl font-black text-slate-900 uppercase">Harun Bey</span></div>
                    <div className="bg-indigo-600 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform"><Phone size={24} /></div>
                  </a>
                  <a href="tel:+905392197490" className="flex items-center justify-between p-7 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-400 hover:bg-white transition-all group">
                    <div><span className="text-[10px] font-black uppercase text-slate-400 block mb-1">Kurucu Ortak</span><span className="text-xl font-black text-slate-900 uppercase">Batuhan Bey</span></div>
                    <div className="bg-indigo-600 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform"><Phone size={24} /></div>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">Fikir Paylaşın</h3>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 px-4 tracking-widest">İsim / Firma</label>
                    <input name="name" required type="text" className="w-full bg-slate-50 border-none rounded-3xl px-8 py-5 focus:ring-1 focus:ring-indigo-600 outline-none transition" placeholder="Adınızı belirtin..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 px-4 tracking-widest">Fikriniz</label>
                    <textarea name="idea" required rows="4" className="w-full bg-slate-50 border-none rounded-[2rem] px-8 py-6 focus:ring-1 focus:ring-indigo-600 outline-none transition resize-none" placeholder="Nasıl bir sistem hayal ediyorsunuz?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 text-white font-black py-6 rounded-3xl hover:bg-slate-900 transition flex items-center justify-center gap-4 uppercase italic">Gönder <Send size={20} /></button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-left">
          <div className="flex items-center gap-6 group cursor-pointer text-left" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <BH4Logo className="w-16 h-16 sm:w-20 sm:h-20" />
            <div className="flex flex-col text-left">
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 leading-none uppercase italic">BH4<span className="text-indigo-600">Tech</span></span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase mt-2 leading-none italic">Mühendislik ve Yazılım Çözümleri</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex space-x-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
               <a href="#cozumler" className="hover:text-indigo-600 transition-colors">Çözümler</a>
               <a href="#referanslar" className="hover:text-indigo-600 transition-colors">Referanslar</a>
               <a href="#kurumsal" className="hover:text-indigo-600 transition-colors">Kurumsal</a>
            </div>
            <button onClick={() => toggleModal('call')} className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 text-[11px] uppercase tracking-widest italic">İletişime Geç</button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Compact and Balanced */}
      <header className="relative pt-60 pb-20 px-6 max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-12 items-center text-left">
        <div className="relative z-20">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-indigo-100 shadow-sm italic">
            <Zap size={14} fill="currentColor" className="text-yellow-500 animate-pulse" /> Endüstriyel Yazılım Mimarisi
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] mb-8 text-slate-900 tracking-tighter italic uppercase">
            Veriyi <br/>
            <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Geleceğe</span> <br/>
            Dönüştürün.
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed font-medium italic">
            BH4Tech, işletmenize özel stok takibi, enerji analizi ve dijital süreç yönetimi geliştirerek operasyonlarınızı mühendislik vizyonuyla dijitalleştirir.
          </p>
          <button onClick={() => toggleModal('idea')} className="bg-indigo-600 text-white px-14 py-7 rounded-[2.5rem] font-black shadow-2xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-5 text-2xl group active:scale-95 uppercase italic">
            Fikir Paylaş <MessageSquare size={28} />
          </button>
        </div>

        <div className="hidden lg:block relative z-10">
          <div className="bg-white p-6 rounded-[5rem] shadow-2xl border border-slate-100 rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="bg-slate-900 rounded-[4rem] p-12 aspect-square relative overflow-hidden flex flex-col justify-between">
               <div className="absolute top-0 right-0 opacity-10 -mr-20 -mt-20 scale-150"><BH4Logo className="w-96 h-96 text-white" /></div>
               <div className="relative z-10 flex justify-between items-start text-white">
                  <div className="space-y-4"><div className="h-2.5 w-48 bg-indigo-500 rounded-full animate-pulse"></div><div className="h-2.5 w-32 bg-slate-700 rounded-full"></div></div>
                  <div className="bg-indigo-600/20 p-5 rounded-[2rem] border border-indigo-500/30 flex items-center justify-center"><Cpu className="text-indigo-400" size={50} /></div>
               </div>
               <div className="relative z-10 grid grid-cols-2 gap-8 text-white">
                  <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center">
                    <div className="text-4xl lg:text-5xl font-black mb-1 italic tracking-tighter leading-none">99.9%</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none italic">Veri Doğruluğu</div>
                  </div>
                  <div className="bg-indigo-600 p-8 rounded-[3rem] shadow-2xl shadow-indigo-900/40 flex flex-col items-center justify-center text-center">
                    <BarChart3 className="mb-4 text-white" size={40} />
                    <div className="text-white text-xs font-black uppercase tracking-widest leading-none italic">Anlık Takip</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dijital Çözümler - Balanced Spacing */}
      <section id="cozumler" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-black tracking-[0.4em] uppercase text-xs mb-4 italic">Dijital Dönüşüm</h2>
            <h3 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter italic leading-none uppercase">Çözümlerimiz</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Database className="text-indigo-600" />, title: "Akıllı Stok & Analiz", text: "Üretim tesislerinden butik işletmelere kadar her yapıya uygun, hata payı minimize edilmiş envanter yazılımları." },
              { icon: <FileSignature className="text-emerald-500" />, title: "Sözleşme Yönetimi", text: "Kağıt israfını önleyen, güvenli ve hızlı dijital imzalama süreçleri ile operasyonel hız kazanın." },
              { icon: <Layout className="text-blue-500" />, title: "Kurumsal Dashboard", text: "İşletmenizin tüm verilerini tek bir ekrandan izleyebileceğiniz, yüksek performanslı panel uygulamaları." }
            ].map((s, i) => (
              <div key={i} className="p-12 bg-white rounded-[3.5rem] border border-slate-200 hover:border-indigo-400 transition-all hover:shadow-2xl group text-left">
                <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(s.icon, { size: 36, className: "group-hover:text-white" })}
                </div>
                <h4 className="text-2xl font-black mb-6 text-slate-800 leading-tight uppercase italic">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-10 text-lg">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İkili Sonsuz Referans Sliderı - Compact */}
      <section id="referanslar" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-left">
           <div className="text-center mb-16">
              <h2 className="text-indigo-600 font-black tracking-[0.4em] uppercase text-xs mb-6 italic">Sektörel Tecrübe</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter italic leading-none uppercase">Başarı Hikayelerimiz</h3>
           </div>
           
           <div className="relative">
              <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {referencePairs.map((pair, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                    {pair.map((ref, subIdx) => (
                      <div key={subIdx} className={`rounded-[4rem] p-12 min-h-[450px] flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-2xl text-left ${
                        ref.theme === 'dark' ? 'bg-slate-900 text-white' : 
                        ref.theme === 'indigo' ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-slate-900 border border-slate-200'
                      }`}>
                        <div className="relative z-10 text-left">
                          <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 inline-block italic ${
                            ref.theme === 'light' ? 'bg-indigo-50 text-indigo-600' : 'bg-white/10 text-white'
                          }`}>{ref.type}</span>
                          <h4 className="text-4xl font-black mb-8 leading-tight italic uppercase">{ref.title}</h4>
                          <p className={`text-xl mb-12 leading-relaxed font-medium italic ${
                            ref.theme === 'light' ? 'text-slate-500' : 'text-white/70'
                          }`}>{ref.desc}</p>
                        </div>
                        <div className={`flex items-center gap-6 font-black text-sm uppercase tracking-widest border-t pt-10 ${
                          ref.theme === 'light' ? 'border-slate-200' : 'border-white/10'
                        }`}>
                          {React.cloneElement(ref.icon, { size: 28 })}
                          <span className="text-xl italic uppercase tracking-tighter">{ref.stat}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-12 text-center">
                {referencePairs.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 transition-all duration-500 rounded-full ${activeSlide === idx ? 'w-12 bg-indigo-600' : 'w-4 bg-slate-200'}`}
                  ></button>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Kurumsal - Integrated Spacing */}
      <section id="kurumsal" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative mb-16 lg:mb-0">
             <div className="grid grid-cols-2 gap-8 text-left">
                <div className="space-y-8 text-left">
                  <div className="bg-slate-900 aspect-square rounded-[4rem] flex items-center justify-center p-14 shadow-2xl border-4 border-slate-800"><BH4Logo className="w-40 h-40" /></div>
                  <div className="bg-indigo-600 aspect-[4/3] rounded-[4rem] p-10 flex flex-col justify-end text-white shadow-xl shadow-indigo-100 text-left">
                     <div className="text-5xl font-black tracking-tighter leading-none italic uppercase">2024</div>
                     <div className="text-indigo-200 text-xs font-bold uppercase tracking-widest mt-3 italic">Kuruluş Yılı</div>
                  </div>
                </div>
                <div className="pt-16 space-y-8 text-left">
                  <div className="bg-white aspect-[4/3] rounded-[4rem] p-10 flex flex-col justify-end text-slate-900 shadow-sm border border-slate-200 text-left">
                     <div className="text-5xl font-black tracking-tighter leading-none italic uppercase">10+</div>
                     <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-3 uppercase italic text-left">Mühendislik Çözümü</div>
                  </div>
                  <div className="bg-indigo-50 aspect-square rounded-[4rem] flex items-center justify-center border border-indigo-100"><ShieldCheck size={120} className="text-indigo-600 opacity-20" /></div>
                </div>
             </div>
          </div>
          <div className="text-left italic">
            <h2 className="text-indigo-600 font-black tracking-[0.4em] uppercase text-xs mb-8 italic">Vizyonumuz</h2>
            <h3 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter italic uppercase mb-10">Mühendislik <br/>Disiplini.</h3>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium italic">BH4Tech, teknolojik inovasyonu endüstriyel sahanın ihtiyaçlarıyla birleştiren profesyonel bir yazılım evidir. Karmaşık süreçleri veriye dayalı sistemlere dönüştürerek hız kazandırıyoruz.</p>
            <div className="inline-flex items-center gap-10 p-8 bg-white rounded-[3rem] border border-slate-200 hover:shadow-2xl transition-all">
              <div className="flex -space-x-4">
                 <div className="w-16 h-16 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center text-white font-black text-2xl border-4 border-white shadow-xl italic">B</div>
                 <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center text-white font-black text-2xl border-4 border-white shadow-xl italic">H</div>
              </div>
              <div className="text-left leading-none italic uppercase">
                 <span className="block font-black text-slate-900 text-2xl tracking-tighter mb-2 italic">Kurucu Ekibimiz</span>
                 <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase leading-none">Yazılım Mimarlığı & Analiz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Optimized Height */}
      <footer className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6 text-center italic">
           <div className="bg-slate-900 rounded-[5rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl">
              <h2 className="text-6xl md:text-8xl font-black mb-10 relative z-10 leading-none tracking-tighter italic uppercase underline decoration-indigo-600 underline-offset-[12px] text-center">İş Birliği <br/>Başlatın.</h2>
              <p className="text-2xl text-slate-400 mb-16 relative z-10 font-medium max-w-4xl mx-auto opacity-90 leading-relaxed italic text-center uppercase tracking-tighter">İşletmenizin dijital geleceğini bizimle inşa edin.</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
                <button onClick={() => toggleModal('idea')} className="bg-indigo-600 text-white px-16 py-7 rounded-[2.5rem] font-black text-xl hover:bg-white hover:text-indigo-600 transition-all shadow-2xl active:scale-95 leading-none uppercase italic">Fikir Paylaş</button>
                <button onClick={() => toggleModal('call')} className="bg-slate-800 text-white px-16 py-7 rounded-[2.5rem] font-black text-xl hover:bg-indigo-600 transition-all shadow-2xl active:scale-95 leading-none uppercase italic border border-slate-700">Arama Yap</button>
              </div>
              <div className="mt-24 pt-16 border-t border-white/10 grid md:grid-cols-3 gap-12 text-[12px] font-black uppercase tracking-[0.4em] text-slate-500 opacity-80 leading-none text-left italic">
                 <div className="flex items-center justify-center gap-4 italic"><Mail size={22} className="text-indigo-500" /> iletisim@bh4tech.com</div>
                 <div className="flex items-center justify-center gap-4 italic"><MapPin size={22} className="text-indigo-500" /> Teknokent, İstanbul</div>
                 <div className="flex items-center justify-center gap-4 italic"><Globe size={22} className="text-indigo-600" /> bh4tech.com</div>
              </div>
           </div>
           <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-400 text-[11px] font-black uppercase tracking-[0.5em] text-left italic">
              <span>© 2026 BH4Tech Engineering Solutions</span>
              <div className="flex gap-10 font-bold tracking-widest">
                 <a href="#" className="hover:text-indigo-600 transition-colors uppercase leading-none italic">LinkedIn</a>
                 <a href="#" className="hover:text-indigo-600 transition-colors uppercase leading-none italic">Instagram</a>
              </div>
              <span>Mühendislik ve Analiz Vizyonuyla Geliştirilmiştir.</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
