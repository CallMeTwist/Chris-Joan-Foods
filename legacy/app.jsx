/* Chris Joan — App shell, router, mount */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#e07a36",
  "palette": "warm",
  "displayFont": "Fraunces",
  "showHero": true,
  "showWhatsAppFAB": true,
  "heroStyle": "bento"
}/*EDITMODE-END*/;

const PALETTES = {
  warm:      { canvas:'#faf6ec', card:'#f4ecd8', chocolate:'#2d160b', orange:'#e07a36', orange2:'#c0531a', gold:'#d4a458', caramel2:'#a5681f', burgundy:'#7a1f2e' },
  burgundy:  { canvas:'#f7efe8', card:'#f0e4d8', chocolate:'#2a0e16', orange:'#a8324b', orange2:'#7a1f2e', gold:'#cf9c5d', caramel2:'#8a4a1a', burgundy:'#5a1422' },
  caramel:   { canvas:'#fbf5e3', card:'#f4e7c4', chocolate:'#3d2410', orange:'#d97a2a', orange2:'#b15a12', gold:'#e6b46a', caramel2:'#a06318', burgundy:'#7a3520' }
};

const applyPalette = (key) => {
  const p = PALETTES[key] || PALETTES.warm;
  const r = document.documentElement.style;
  r.setProperty('--cream', p.canvas);
  r.setProperty('--cream-2', p.card);
  r.setProperty('--chocolate', p.chocolate);
  r.setProperty('--chocolate-2', p.chocolate);
  r.setProperty('--orange', p.orange);
  r.setProperty('--orange-2', p.orange2);
  r.setProperty('--gold', p.gold);
  r.setProperty('--caramel-2', p.caramel2);
  r.setProperty('--burgundy', p.burgundy);
};

/* ---------- Router ---------- */
const App = () => {
  const [path, setPath] = useState(parseHash());
  const [qv, setQv] = useState(null);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const onHash = () => { setPath(parseHash()); window.scrollTo({top:0, behavior:'instant'}); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => { applyPalette(tweaks.palette); }, [tweaks.palette]);
  useEffect(() => { document.documentElement.style.setProperty('--orange', tweaks.accent); document.documentElement.style.setProperty('--orange-2', tweaks.accent); }, [tweaks.accent]);
  useEffect(() => { document.documentElement.style.setProperty('--font-display', `'${tweaks.displayFont}', 'Cormorant Garamond', Georgia, serif`); }, [tweaks.displayFont]);

  const go = (to) => { window.location.hash = to; };

  let page;
  if (path === '/' || path === '') page = <HomePage onQuickView={setQv}/>;
  else if (path === '/products') page = <ProductsPage onQuickView={setQv}/>;
  else if (path.startsWith('/products/')) page = <ProductsPage initialCategory={path.split('/')[2]} onQuickView={setQv}/>;
  else if (path.startsWith('/product/')) page = <ProductDetailPage slug={path.split('/')[2]} onQuickView={setQv}/>;
  else if (path === '/about') page = <AboutPage/>;
  else if (path === '/gallery') page = <GalleryPage/>;
  else if (path === '/contact') page = <ContactPage/>;
  else page = <HomePage onQuickView={setQv}/>;

  return (
    <RouteContext.Provider value={{ path, go }}>
      <CartProvider>
        <Nav/>
        {page}
        <Footer/>
        <CartDrawer/>
        <QuickView product={qv} onClose={() => setQv(null)}/>
        {tweaks.showWhatsAppFAB && <WhatsAppFAB/>}
        <TweaksUI tweaks={tweaks} setTweak={setTweak}/>
      </CartProvider>
    </RouteContext.Provider>
  );
};

const WhatsAppFAB = () => (
  <a href={`https://wa.me/${window.CJ_BRAND.whatsappRaw}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{position:'fixed', bottom:24, right:24, zIndex:55, width:60, height:60, borderRadius:'50%', background:'#25D366', color:'white', display:'grid', placeItems:'center', boxShadow:'0 14px 30px rgba(37,211,102,0.4)', transition:'transform .25s'}} onMouseOver={e=>e.currentTarget.style.transform='scale(1.06)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}>
    <Ico.whatsapp size={28}/>
  </a>
);

const TweaksUI = ({ tweaks, setTweak }) => (
  <TweaksPanel>
    <TweakSection title="Palette">
      <TweakRadio label="Theme" value={tweaks.palette} onChange={(v)=>setTweak('palette', v)} options={[
        { value:'warm', label:'Warm' },
        { value:'burgundy', label:'Burgundy' },
        { value:'caramel', label:'Caramel' }
      ]}/>
      <TweakColor label="Accent" value={tweaks.accent} onChange={(v)=>setTweak('accent', v)} options={['#e07a36','#c0531a','#7a1f2e','#a5681f','#d4a458']}/>
    </TweakSection>
    <TweakSection title="Typography">
      <TweakRadio label="Display font" value={tweaks.displayFont} onChange={(v)=>setTweak('displayFont', v)} options={[
        { value:'Fraunces', label:'Fraunces' },
        { value:'Cormorant Garamond', label:'Cormorant' },
        { value:'Playfair Display', label:'Playfair' }
      ]}/>
    </TweakSection>
    <TweakSection title="Layout">
      <TweakToggle label="Show WhatsApp button" value={tweaks.showWhatsAppFAB} onChange={(v)=>setTweak('showWhatsAppFAB', v)}/>
    </TweakSection>
  </TweaksPanel>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
