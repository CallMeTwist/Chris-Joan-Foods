/* Chris Joan — pages */

const { fmt, catBySlug, prodBySlug, byCat } = window.CJ_HELPERS;

/* ============ HOME ============ */
const HomePage = ({ onQuickView }) => {
  const featured = window.CJ_PRODUCTS.filter(p => p.featured).slice(0, 6);
  return (
    <main className="page-enter" data-screen-label="Home">
      {/* ===== HERO ===== */}
      <section style={{position:'relative', overflow:'hidden'}}>
        <div className="container-wide" style={{paddingTop:'clamp(40px, 6vw, 84px)', paddingBottom:'clamp(40px, 6vw, 72px)'}}>
          <div style={{display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:48, alignItems:'center'}} className="hero-grid">
            <div>
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:26}}>
                <span style={{display:'inline-flex', alignItems:'center', gap:8, padding:'6px 14px', borderRadius:9999, background:'rgba(212,164,88,0.18)', color:'var(--caramel-2)', fontSize:12.5, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase'}}>
                  <Ico.flame size={14}/> Made fresh, daily in Lagos
                </span>
              </div>
              <h1 className="display-xl">
                Taste you'll <span className="script" style={{display:'inline-block', color:'var(--orange)', fontSize:'0.95em', transform:'translateY(0.08em)'}}>always</span><br/>
                remember.
              </h1>
              <p className="lede" style={{maxWidth:520, marginTop:24}}>
                Homemade Nigerian dishes, party-ready small chops and made-to-order cakes — prepared with care, freshness and a generous pour of love by Chris Joan.
              </p>
              <div style={{display:'flex', gap:12, marginTop:32, flexWrap:'wrap'}}>
                <Link to="/products" className="btn btn-coral btn-lg">Order now <Ico.arrow/></Link>
                <a href={`https://wa.me/${window.CJ_BRAND.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg" style={{color:'var(--chocolate)'}}>
                  <Ico.whatsapp/> Chat on WhatsApp
                </a>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:24, marginTop:42, flexWrap:'wrap'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                  {['food-01.jpeg','food-04.jpeg','food-20.jpeg','food-10.jpeg'].map((f,i) => (
                    <img key={f} src={`images/${f}`} alt="" style={{width:40, height:40, borderRadius:'50%', objectFit:'cover', border:'2px solid var(--cream)', marginLeft: i===0?0:-12}}/>
                  ))}
                </div>
                <div>
                  <div style={{display:'flex', alignItems:'center', gap:6}}>
                    <Stars value={5}/> <span style={{fontWeight:600, color:'var(--chocolate)'}}>4.9</span>
                  </div>
                  <div className="muted" style={{fontSize:13}}>800+ happy plates this month</div>
                </div>
              </div>
            </div>

            {/* HERO BENTO COLLAGE */}
            <div style={{position:'relative', aspectRatio:'1/1.05', minHeight:480}}>
              {/* big card */}
              <div style={{position:'absolute', top:'4%', left:'8%', width:'62%', height:'62%', borderRadius:'var(--r-lg)', overflow:'hidden', boxShadow:'var(--shadow-lg)', transform:'rotate(-2deg)'}}>
                <img src="images/food-04.jpeg" alt="Chris Joan small chops" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              {/* cake card */}
              <div className="floaty-2" style={{position:'absolute', top:'-2%', right:'2%', width:'40%', height:'42%', borderRadius:'var(--r-lg)', overflow:'hidden', boxShadow:'var(--shadow-md)', transform:'rotate(4deg)', background:'var(--cream-3)'}}>
                <img src="images/food-20.jpeg" alt="Anniversary cake" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              {/* jollof card */}
              <div className="floaty" style={{position:'absolute', bottom:'8%', right:'-2%', width:'48%', height:'40%', borderRadius:'var(--r-lg)', overflow:'hidden', boxShadow:'var(--shadow-md)', transform:'rotate(-3deg)'}}>
                <img src="images/food-01.jpeg" alt="Smoky jollof" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              {/* badge */}
              <div style={{position:'absolute', bottom:'2%', left:'2%', background:'var(--chocolate)', color:'var(--cream)', borderRadius:'var(--r-md)', padding:'14px 18px', boxShadow:'var(--shadow-md)', maxWidth:220}}>
                <div style={{fontFamily:'var(--font-script)', fontSize:34, color:'var(--gold)', lineHeight:1}}>fresh</div>
                <div style={{fontSize:12, color:'rgba(250,246,236,0.7)', letterSpacing:'.14em', textTransform:'uppercase', marginTop:6}}>Cooked the day you order</div>
              </div>
              {/* gold blob */}
              <svg style={{position:'absolute', top:'40%', left:'-5%', width:100, height:100, zIndex:-1}} viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="var(--gold)" opacity="0.35"/></svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Marquee value props ===== */}
      <section style={{background:'var(--cream-2)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div className="container-wide" style={{padding:'22px 28px'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:36, flexWrap:'wrap'}}>
            {[
              {ico: <Ico.leaf size={20}/>, label:'Fresh, quality ingredients'},
              {ico: <Ico.spark size={20}/>, label:'Neat & hygienic preparation'},
              {ico: <Ico.flame size={20}/>, label:'Hot, made-to-order'},
              {ico: <Ico.whatsapp size={20}/>, label:'Reliable WhatsApp service'},
              {ico: <Ico.heart size={20}/>, label:'Great taste in every bite'}
            ].map((v,i) => (
              <div key={i} style={{display:'flex', alignItems:'center', gap:10, color:'var(--ink-3)', fontSize:14}}>
                <span style={{color:'var(--caramel-2)'}}>{v.ico}</span>
                <span>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Categories ===== */}
      <section className="section">
        <div className="container-wide">
          <Reveal className="flex items-end justify-between" style={{marginBottom:36, flexWrap:'wrap', gap:16}}>
            <div>
              <span className="eyebrow">Browse by craving</span>
              <h2 className="display-lg" style={{marginTop:10}}>What are you in the<br/><span className="italic" style={{color:'var(--orange)'}}>mood for</span> today?</h2>
            </div>
            <Link to="/products" className="btn btn-ghost">See full menu <Ico.arrow size={14}/></Link>
          </Reveal>
          <Reveal stagger className="cat-grid" style={{display:'grid', gridTemplateColumns:'repeat(12, 1fr)', gap:18}}>
            {[
              {slug:'nigerian-dishes', span:5, h:380},
              {slug:'small-chops',     span:4, h:380},
              {slug:'cakes-and-treats',span:3, h:380},
              {slug:'rice-dishes',     span:3, h:300},
              {slug:'pastries',        span:3, h:300},
              {slug:'snacks',          span:3, h:300},
              {slug:'drinks',          span:3, h:300}
            ].map(({slug, span, h}) => {
              const c = catBySlug(slug); if (!c) return null;
              return (
                <Link key={slug} to={`/products/${slug}`} style={{gridColumn:`span ${span}`, height:h}} className="cat-card">
                  <div style={{position:'relative', width:'100%', height:'100%', borderRadius:'var(--r-md)', overflow:'hidden', background:'var(--cream-2)'}}>
                    <img src={c.img} alt={c.name} style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform .8s ease'}} onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.06)'} onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'}/>
                    <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(20,10,4,0) 30%, rgba(20,10,4,0.65) 100%)'}}/>
                    <span className="chip" style={{position:'absolute', top:16, left:16, background:'rgba(255,253,246,0.9)', color:'var(--chocolate)'}}>{c.tag}</span>
                    <div style={{position:'absolute', bottom:16, left:18, right:18, color:'var(--cream)'}}>
                      <h3 className="h3" style={{color:'var(--cream)', marginBottom:4}}>{c.name}</h3>
                      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:10}}>
                        <span style={{fontSize:13, opacity:0.85, maxWidth:280}}>{c.count} items</span>
                        <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:32, height:32, borderRadius:'50%', background:'var(--orange)'}}>
                          <Ico.arrow size={14}/>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ===== Featured / Popular ===== */}
      <section className="section" style={{paddingTop:0}}>
        <div className="container-wide">
          <Reveal className="flex items-end justify-between" style={{marginBottom:32, flexWrap:'wrap', gap:16}}>
            <div>
              <span className="eyebrow">Most loved this week</span>
              <h2 className="display-lg" style={{marginTop:10}}>Popular at the<br/><span className="italic" style={{color:'var(--burgundy)'}}>Joan's kitchen.</span></h2>
            </div>
          </Reveal>
          <Reveal stagger style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:22}}>
            {featured.map(p => <ProductCard key={p.slug} p={p} onQuickView={onQuickView}/>)}
          </Reveal>
        </div>
      </section>

      {/* ===== About preview ===== */}
      <section className="section" style={{background:'var(--cream-2)'}}>
        <div className="container-wide" style={{display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:60, alignItems:'center'}}>
          <Reveal style={{position:'relative', aspectRatio:'1/1', minHeight:420}}>
            <img src="images/food-15.jpeg" alt="" style={{position:'absolute', top:0, left:'4%', width:'62%', height:'62%', objectFit:'cover', borderRadius:'var(--r-lg)', boxShadow:'var(--shadow-md)'}}/>
            <img src="images/food-09.jpeg" alt="" className="floaty" style={{position:'absolute', bottom:0, right:'2%', width:'58%', height:'58%', objectFit:'cover', borderRadius:'var(--r-lg)', boxShadow:'var(--shadow-md)', border:'8px solid var(--cream-2)'}}/>
            <div style={{position:'absolute', top:'40%', left:'-2%', background:'var(--chocolate)', color:'var(--cream)', borderRadius:'var(--r-md)', padding:'18px 22px', boxShadow:'var(--shadow-md)'}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:46, color:'var(--gold)', lineHeight:1}}>5+ yrs</div>
              <div style={{fontSize:11.5, letterSpacing:'.18em', textTransform:'uppercase', opacity:0.7, marginTop:6}}>cooking with love</div>
            </div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">Our story, in one bite</span>
            <h2 className="display-lg" style={{marginTop:12, marginBottom:20}}>Good food brings <span className="italic" style={{color:'var(--orange)'}}>happiness.</span> We cook with that in mind.</h2>
            <p className="lede" style={{marginBottom:14}}>
              Chris Joan started in a small home kitchen with one promise — that every plate that leaves us should taste like home. Today, we cook for hangouts, weddings, Sunday lunches and surprise anniversaries across Lagos.
            </p>
            <p className="lede" style={{marginBottom:24}}>
              We hand-pick our ingredients at dawn, fry our small chops to order, and pipe every cake by hand. No shortcuts, no microwaves, no microwave-meal energy.
            </p>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:14, marginBottom:28}}>
              {[
                'Fresh, quality ingredients',
                'Neat &amp; hygienic preparation',
                'Affordable, honest pricing',
                'Reliable WhatsApp service'
              ].map(t => (
                <div key={t} style={{display:'flex', alignItems:'center', gap:10, fontSize:14}}>
                  <span style={{width:24, height:24, borderRadius:'50%', background:'var(--orange)', color:'white', display:'grid', placeItems:'center'}}><Ico.check size={14}/></span>
                  <span dangerouslySetInnerHTML={{__html: t}}/>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-primary">Read our full story <Ico.arrow size={14}/></Link>
          </Reveal>
        </div>
      </section>

      {/* ===== Special occasions ===== */}
      <section className="section">
        <div className="container-wide">
          <Reveal className="text-center" style={{maxWidth:680, margin:'0 auto 48px'}}>
            <span className="eyebrow">Special occasions</span>
            <h2 className="display-lg" style={{marginTop:10}}>From birthdays to <span className="italic" style={{color:'var(--burgundy)'}}>big weddings,</span> we cook the day for you.</h2>
          </Reveal>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:18}} className="occasions">
            {[
              { title:'Birthdays', img:'images/food-09.jpeg', desc:'Custom cakes, mini boxes, party trays.', tag:'From ₦9,500' },
              { title:'Weddings & engagements', img:'images/food-01.jpeg', desc:'Wholesale jollof, fried rice and small chops.', tag:'From ₦80,000' },
              { title:'Office &amp; hangouts', img:'images/food-04.jpeg', desc:'Friday trays delivered hot — never greasy.', tag:'From ₦12,000' }
            ].map((o,i) => (
              <Reveal key={i} className="card" style={{padding:0}}>
                <div style={{aspectRatio:'4/3', overflow:'hidden'}}>
                  <img src={o.img} alt={o.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </div>
                <div style={{padding:'24px 24px 28px'}}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                    <h3 className="h3" dangerouslySetInnerHTML={{__html: o.title}}/>
                    <span className="chip chip-orange">{o.tag}</span>
                  </div>
                  <p className="muted" style={{marginTop:10, fontSize:14.5}} dangerouslySetInnerHTML={{__html: o.desc}}/>
                  <a href={`https://wa.me/${window.CJ_BRAND.whatsappRaw}`} target="_blank" rel="noreferrer" style={{display:'inline-flex', alignItems:'center', gap:6, marginTop:14, color:'var(--caramel-2)', fontWeight:500, fontSize:14}}>Plan an order <Ico.arrowUR/></a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="section" style={{background:'var(--chocolate)', color:'var(--cream)'}}>
        <div className="container-wide">
          <Reveal className="text-center" style={{maxWidth:760, margin:'0 auto 48px'}}>
            <span className="eyebrow on-dark">Kind words</span>
            <h2 className="display-lg" style={{marginTop:10, color:'var(--cream)'}}>"My grandmother used to make it<br/>this way." — <span className="script" style={{color:'var(--gold)', fontSize:'0.9em'}}>actual customer</span></h2>
          </Reveal>
          <Reveal stagger style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:18}}>
            {window.CJ_TESTIMONIALS.map((t,i) => (
              <div key={i} style={{padding:'28px 26px', borderRadius:'var(--r-md)', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)'}}>
                <Stars value={t.rating}/>
                <p style={{fontFamily:'var(--font-display)', fontSize:22, lineHeight:1.3, marginTop:16, color:'var(--cream)', letterSpacing:'-0.01em'}}>"{t.text}"</p>
                <div style={{marginTop:22, fontSize:14, color:'var(--gold)'}}>{t.name}</div>
                <div style={{fontSize:13, color:'rgba(250,246,236,0.55)'}}>{t.loc}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== Gallery preview ===== */}
      <section className="section">
        <div className="container-wide">
          <Reveal className="flex items-end justify-between" style={{marginBottom:32, flexWrap:'wrap', gap:16}}>
            <div>
              <span className="eyebrow">From the kitchen</span>
              <h2 className="display-lg" style={{marginTop:10}}>A peek at our<br/><span className="italic" style={{color:'var(--orange)'}}>plates &amp; people.</span></h2>
            </div>
            <Link to="/gallery" className="btn btn-ghost">Open gallery <Ico.arrow size={14}/></Link>
          </Reveal>
          <Reveal stagger style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gridAutoRows:'160px', gap:14}}>
            {[
              {src:'images/food-04.jpeg', c:2, r:2},
              {src:'images/food-10.jpeg', c:2, r:1},
              {src:'images/food-20.jpeg', c:2, r:1},
              {src:'images/food-01.jpeg', c:2, r:1},
              {src:'images/food-07.jpeg', c:1, r:1},
              {src:'images/food-09.jpeg', c:1, r:1},
              {src:'images/food-15.jpeg', c:2, r:1},
              {src:'images/food-05.jpeg', c:2, r:1}
            ].map((g, i) => (
              <Link key={i} to="/gallery" style={{gridColumn:`span ${g.c}`, gridRow:`span ${g.r}`, borderRadius:'var(--r-md)', overflow:'hidden', position:'relative'}}>
                <img src={g.src} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{padding:'80px 0'}}>
        <div className="container-wide">
          <div style={{background:'var(--orange)', color:'white', borderRadius:'var(--r-lg)', padding:'clamp(40px, 6vw, 72px)', position:'relative', overflow:'hidden'}}>
            <svg style={{position:'absolute', top:-30, right:-30, opacity:0.15}} width="280" height="280" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="white"/></svg>
            <svg style={{position:'absolute', bottom:-50, left:-20, opacity:0.12}} width="220" height="220" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="white"/></svg>
            <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:36, alignItems:'center', position:'relative'}}>
              <div>
                <span className="eyebrow" style={{color:'rgba(255,255,255,0.85)'}}>Hungry already?</span>
                <h2 className="display-lg" style={{color:'white', marginTop:12, marginBottom:18}}>One message away from <span className="script" style={{fontSize:'1em', color:'var(--cream)'}}>your favourite meal.</span></h2>
                <p style={{fontSize:17, color:'rgba(255,255,255,0.92)', maxWidth:520}}>WhatsApp us, pick a tray, and we'll deliver hot. Same-day before 4pm, party trays with 24h notice.</p>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:12, alignItems:'flex-start'}}>
                <a href={`https://wa.me/${window.CJ_BRAND.whatsappRaw}`} target="_blank" rel="noreferrer" className="btn btn-lg" style={{background:'white', color:'var(--orange-2)', width:'100%', justifyContent:'center'}}>
                  <Ico.whatsapp/> {window.CJ_BRAND.whatsapp}
                </a>
                <Link to="/products" className="btn btn-lg" style={{background:'var(--chocolate)', color:'var(--cream)', width:'100%', justifyContent:'center'}}>Browse the full menu <Ico.arrow size={14}/></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .cat-grid > * { grid-column: span 6 !important; height: 240px !important; }
          .occasions { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
};

/* ============ PRODUCTS catalog ============ */
const ProductsPage = ({ initialCategory = null, onQuickView }) => {
  const allCats = window.CJ_CATEGORIES;
  const [cat, setCat] = useState(initialCategory || 'all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('popular');
  const [view, setView] = useState('grid');

  useEffect(() => { setCat(initialCategory || 'all'); }, [initialCategory]);

  const filtered = useMemo(() => {
    let list = window.CJ_PRODUCTS.slice();
    if (cat !== 'all') list = list.filter(p => p.category === cat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }
    if (sort === 'price-low') list.sort((a,b) => a.price - b.price);
    else if (sort === 'price-high') list.sort((a,b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);
    else list.sort((a,b) => b.reviews - a.reviews);
    return list;
  }, [cat, query, sort]);

  const activeCat = cat === 'all' ? null : catBySlug(cat);

  return (
    <main className="page-enter" data-screen-label="Menu">
      {/* Page hero */}
      <section style={{padding:'56px 0 24px', background:'var(--cream-2)', borderBottom:'1px solid var(--line)'}}>
        <div className="container-wide">
          <div className="crumb" style={{fontSize:13, color:'var(--muted)', marginBottom:14, letterSpacing:'.04em'}}>
            <Link to="/">Home</Link> · <span>Menu</span>{activeCat && <> · <span>{activeCat.name}</span></>}
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:32, alignItems:'end'}} className="ph-grid">
            <div>
              <span className="eyebrow">{activeCat ? activeCat.tag : 'Full menu'}</span>
              <h1 className="display-lg" style={{marginTop:10}}>{activeCat ? activeCat.name : <>Every <span className="italic" style={{color:'var(--orange)'}}>delicious thing</span> we make.</>}</h1>
              {activeCat && <p className="lede" style={{maxWidth:520, marginTop:12}}>{activeCat.blurb}</p>}
            </div>
            <div className="input-wrap" style={{maxWidth:480, width:'100%', justifySelf:'end'}}>
              <Ico.search/>
              <input className="input" placeholder="Search jollof, cakes, suya…" value={query} onChange={(e) => setQuery(e.target.value)}/>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section style={{padding:'24px 0', borderBottom:'1px solid var(--line)', position:'sticky', top:76, background:'rgba(250,246,236,0.92)', backdropFilter:'blur(12px)', zIndex:30}}>
        <div className="container-wide" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:18, flexWrap:'wrap'}}>
          <div style={{display:'flex', gap:8, overflowX:'auto', paddingBottom:4}}>
            <button onClick={() => { setCat('all'); window.location.hash = '/products'; }} className="chip" style={cat==='all' ? {background:'var(--chocolate)', color:'var(--cream)'} : {}}>All ({window.CJ_PRODUCTS.length})</button>
            {allCats.map(c => (
              <button key={c.slug} onClick={() => { setCat(c.slug); window.location.hash = `/products/${c.slug}`; }} className="chip" style={cat===c.slug ? {background:'var(--chocolate)', color:'var(--cream)'} : {}}>{c.name}</button>
            ))}
          </div>
          <div style={{display:'flex', gap:10, alignItems:'center'}}>
            <span className="muted" style={{fontSize:13}}>Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)} style={{height:38, padding:'0 14px', borderRadius:9999, border:'1px solid var(--line-2)', background:'var(--paper)', color:'var(--ink)', font:'inherit', fontSize:14}}>
              <option value="popular">Most popular</option>
              <option value="rating">Highest rated</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section">
        <div className="container-wide">
          {filtered.length === 0 ? (
            <div style={{textAlign:'center', padding:'80px 12px'}}>
              <h3 className="display" style={{marginBottom:8}}>No matches found</h3>
              <p className="muted" style={{marginBottom:20}}>Try a different search or category.</p>
              <button className="btn btn-primary" onClick={() => { setQuery(''); setCat('all'); }}>Reset filters</button>
            </div>
          ) : (
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:22}}>
              {filtered.map(p => <ProductCard key={p.slug} p={p} onQuickView={onQuickView}/>)}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) { .ph-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
};

/* ============ PRODUCT DETAIL ============ */
const ProductDetailPage = ({ slug, onQuickView }) => {
  const p = prodBySlug(slug);
  const cart = useCart();
  const [qty, setQty] = useState(1);
  const [portion, setPortion] = useState(p ? p.portions[0] : null);
  const [activeImg, setActiveImg] = useState(0);

  if (!p) {
    return (
      <main className="container section text-center page-enter">
        <h2 className="display">We can't find that item.</h2>
        <p className="muted" style={{marginTop:10}}>It may have been renamed or sold out.</p>
        <Link to="/products" className="btn btn-primary" style={{marginTop:20}}>Back to menu</Link>
      </main>
    );
  }

  const cat = catBySlug(p.category);
  const related = byCat(p.category).filter(x => x.slug !== p.slug).slice(0, 4);
  const gallery = [p.img, 'images/food-15.jpeg', 'images/food-07.jpeg', 'images/food-04.jpeg'];

  return (
    <main className="page-enter" data-screen-label={`Product: ${p.name}`}>
      <section style={{padding:'40px 0 16px'}}>
        <div className="container-wide">
          <div className="crumb" style={{fontSize:13, color:'var(--muted)', marginBottom:18}}>
            <Link to="/">Home</Link> · <Link to="/products">Menu</Link> · <Link to={`/products/${cat.slug}`}>{cat.name}</Link> · <span>{p.name}</span>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48, alignItems:'flex-start'}} className="detail-grid">
            <div>
              <div style={{aspectRatio:'1/1', borderRadius:'var(--r-lg)', overflow:'hidden', background:'var(--cream-2)', marginBottom:14}}>
                <img src={gallery[activeImg]} alt={p.name} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:10}}>
                {gallery.map((g, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} style={{aspectRatio:'1/1', borderRadius:'var(--r-md)', overflow:'hidden', border: i===activeImg ? '2px solid var(--chocolate)' : '1px solid var(--line)', padding:0}}>
                    <img src={g} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                  </button>
                ))}
              </div>
            </div>
            <div style={{position:'sticky', top:96}}>
              <span className="eyebrow">{cat.name}</span>
              <h1 className="display-lg" style={{marginTop:10}}>{p.name}</h1>
              <div style={{display:'flex', alignItems:'center', gap:12, marginTop:14}}>
                <Stars value={p.rating}/>
                <span style={{fontSize:14, color:'var(--muted)'}}>{p.rating} · {p.reviews} reviews</span>
              </div>
              <div style={{display:'flex', alignItems:'baseline', gap:12, marginTop:18}}>
                <span style={{fontFamily:'var(--font-display)', fontSize:48, color:'var(--chocolate)', letterSpacing:'-0.02em'}}>{fmt(p.price)}</span>
                {p.was && <span className="muted" style={{textDecoration:'line-through'}}>{fmt(p.was)}</span>}
              </div>
              <p className="lede" style={{marginTop:18}}>{p.desc}</p>
              {p.story && <p style={{marginTop:14, color:'var(--ink-3)', fontStyle:'italic', borderLeft:'2px solid var(--orange)', paddingLeft:16}}>"{p.story}"</p>}

              <div style={{marginTop:28}}>
                <div className="eyebrow" style={{marginBottom:10}}>Portion</div>
                <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                  {p.portions.map(opt => (
                    <button key={opt} onClick={() => setPortion(opt)} className="chip" style={portion===opt ? {background:'var(--chocolate)', color:'var(--cream)', padding:'0 16px', height:36} : {padding:'0 16px', height:36}}>{opt}</button>
                  ))}
                </div>
              </div>

              <div style={{marginTop:28, display:'flex', gap:14, alignItems:'center', flexWrap:'wrap'}}>
                <div className="qty" style={{padding:6}}>
                  <button onClick={() => setQty(Math.max(1, qty-1))} style={{width:36, height:36}}><Ico.minus/></button>
                  <span style={{minWidth:36, fontSize:16}}>{qty}</span>
                  <button onClick={() => setQty(qty+1)} style={{width:36, height:36}}><Ico.plus/></button>
                </div>
                <button className="btn btn-coral btn-lg" style={{flex:1, minWidth:220, justifyContent:'center'}} onClick={() => cart.add(p, qty, portion)}>
                  Add to cart · {fmt(p.price * qty)}
                </button>
              </div>
              <a className="btn btn-lg" href={`https://wa.me/${window.CJ_BRAND.whatsappRaw}?text=Hi%20Chris%20Joan,%20I'd%20like%20to%20order%20${encodeURIComponent(p.name)}%20(${qty}%20×%20${encodeURIComponent(portion)})`} target="_blank" rel="noreferrer" style={{marginTop:12, width:'100%', justifyContent:'center', background:'#25D366', color:'white'}}>
                <Ico.whatsapp/> Order on WhatsApp
              </a>

              {p.ingredients.length > 0 && (
                <div style={{marginTop:30, paddingTop:24, borderTop:'1px solid var(--line)'}}>
                  <div className="eyebrow" style={{marginBottom:10}}>What's inside</div>
                  <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
                    {p.ingredients.map(i => <span key={i} className="chip" style={{background:'var(--cream-2)'}}>{i}</span>)}
                  </div>
                </div>
              )}

              <div style={{marginTop:24, display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:14, fontSize:13, color:'var(--ink-3)'}}>
                <div style={{display:'flex', alignItems:'center', gap:8}}><Ico.flame size={16}/> <span>Made to order</span></div>
                <div style={{display:'flex', alignItems:'center', gap:8}}><Ico.leaf size={16}/> <span>Fresh, no MSG</span></div>
                <div style={{display:'flex', alignItems:'center', gap:8}}><Ico.clock size={16}/> <span>Ready 60–90 min</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section" style={{background:'var(--cream-2)'}}>
        <div className="container-wide">
          <div className="flex items-end justify-between" style={{marginBottom:32, flexWrap:'wrap', gap:16}}>
            <div>
              <span className="eyebrow">Reviews</span>
              <h2 className="display" style={{marginTop:8}}>What people say about this dish</h2>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:14}}>
              <span style={{fontFamily:'var(--font-display)', fontSize:48, color:'var(--chocolate)', lineHeight:1}}>{p.rating}</span>
              <div>
                <Stars value={p.rating}/>
                <div className="muted" style={{fontSize:13, marginTop:2}}>{p.reviews} reviews</div>
              </div>
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:18}}>
            {window.CJ_TESTIMONIALS.slice(0,3).map((t,i) => (
              <div key={i} className="card" style={{padding:'24px 24px 26px', background:'var(--paper)'}}>
                <Stars value={t.rating}/>
                <p style={{marginTop:14, color:'var(--ink-3)', lineHeight:1.6, fontSize:15}}>"{t.text}"</p>
                <div style={{marginTop:18, fontWeight:600, color:'var(--chocolate)'}}>{t.name}</div>
                <div className="muted" style={{fontSize:13}}>{t.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section">
          <div className="container-wide">
            <h2 className="display" style={{marginBottom:30}}>You might also love</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:22}}>
              {related.map(rp => <ProductCard key={rp.slug} p={rp} onQuickView={onQuickView}/>)}
            </div>
          </div>
        </section>
      )}

      <style>{`@media (max-width: 880px) { .detail-grid { grid-template-columns: 1fr !important; gap: 32px !important; } .detail-grid > div:nth-child(2) { position: static !important; } }`}</style>
    </main>
  );
};

/* ============ ABOUT ============ */
const AboutPage = () => (
  <main className="page-enter" data-screen-label="About">
    <section style={{padding:'72px 0 24px'}}>
      <div className="container-wide">
        <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48, alignItems:'center'}} className="about-hero">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h1 className="display-xl" style={{marginTop:12}}>Cooking <span className="script" style={{fontSize:'0.78em', color:'var(--orange)'}}>happiness,</span> one plate at a time.</h1>
            <p className="lede" style={{marginTop:24, maxWidth:560}}>
              Welcome to Chris Joan Food and More — where delicious taste meets quality and satisfaction. We specialise in mouthwatering homemade meals, tasty chops, and satisfying dishes prepared with care, freshness and love.
            </p>
          </Reveal>
          <Reveal style={{position:'relative', aspectRatio:'4/5'}}>
            <img src="images/food-04.jpeg" alt="" style={{position:'absolute', top:0, left:0, width:'78%', height:'78%', objectFit:'cover', borderRadius:'var(--r-lg)', boxShadow:'var(--shadow-md)'}}/>
            <img src="images/food-20.jpeg" alt="" className="floaty" style={{position:'absolute', bottom:0, right:0, width:'58%', height:'48%', objectFit:'cover', borderRadius:'var(--r-lg)', boxShadow:'var(--shadow-md)', border:'8px solid var(--cream)'}}/>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Pillars */}
    <section className="section">
      <div className="container-wide">
        <Reveal className="text-center" style={{maxWidth:640, margin:'0 auto 48px'}}>
          <span className="eyebrow">What we believe</span>
          <h2 className="display-lg" style={{marginTop:10}}>Good food brings <span className="italic" style={{color:'var(--orange)'}}>happiness.</span></h2>
          <p className="lede" style={{marginTop:14}}>Which is why every order from our kitchen is built on five non-negotiables.</p>
        </Reveal>
        <Reveal stagger style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:18}}>
          {[
            { ico:<Ico.leaf size={22}/>,  t:'Fresh, quality ingredients', d:'We shop daily — no frozen shortcuts, no MSG.' },
            { ico:<Ico.spark size={22}/>, t:'Neat & hygienic kitchen',     d:'Clean surfaces, gloves, sealed packs every time.' },
            { ico:<Ico.heart size={22}/>, t:'Affordable, honest prices',   d:'No hidden charges. What you see is what you pay.' },
            { ico:<Ico.whatsapp size={22}/>, t:'Reliable WhatsApp service',d:'One message and we are on it. Quick replies, on-time.' },
            { ico:<Ico.flame size={22}/>, t:'Great taste in every bite',   d:'If we wouldn\'t serve it to family, we don\'t serve it.' }
          ].map((b,i) => (
            <div key={i} className="card" style={{padding:'28px 26px'}}>
              <div style={{width:52, height:52, borderRadius:14, background:'rgba(224,122,54,0.12)', color:'var(--orange-2)', display:'grid', placeItems:'center', marginBottom:18}}>{b.ico}</div>
              <h3 className="h4">{b.t}</h3>
              <p className="muted" style={{marginTop:10, fontSize:14.5}}>{b.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    {/* Long quote */}
    <section className="section" style={{background:'var(--chocolate)', color:'var(--cream)'}}>
      <div className="container" style={{textAlign:'center', maxWidth:880, margin:'0 auto'}}>
        <Reveal>
          <span className="eyebrow on-dark">A small promise</span>
          <p style={{fontFamily:'var(--font-display)', fontSize:'clamp(28px, 3.6vw, 48px)', lineHeight:1.25, color:'var(--cream)', marginTop:18, letterSpacing:'-0.02em'}}>
            "Whether you need a quick meal, small chops for hangouts, or delicious food for special occasions — we have got you covered. Your satisfaction is our priority, and we look forward to serving you the best flavours, always."
          </p>
          <div style={{marginTop:36, fontFamily:'var(--font-script)', fontSize:42, color:'var(--gold)'}}>— Chris &amp; Joan</div>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section">
      <div className="container-wide text-center">
        <h2 className="display-lg" style={{maxWidth:680, margin:'0 auto'}}>Come hungry. <span className="italic" style={{color:'var(--burgundy)'}}>Leave with a story.</span></h2>
        <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:24, flexWrap:'wrap'}}>
          <Link to="/products" className="btn btn-coral btn-lg">Browse the menu <Ico.arrow size={14}/></Link>
          <Link to="/contact" className="btn btn-ghost btn-lg">Get in touch</Link>
        </div>
      </div>
    </section>

    <style>{`@media (max-width: 880px) { .about-hero { grid-template-columns: 1fr !important; } }`}</style>
  </main>
);

/* ============ GALLERY ============ */
const GalleryPage = () => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const groups = {
    'All': window.CJ_GALLERY,
    'Mains': ['images/food-01.jpeg','images/food-02.jpeg','images/food-03.jpeg','images/food-10.jpeg','images/food-11.jpeg','images/food-13.jpeg'],
    'Small chops': ['images/food-04.jpeg','images/food-06.jpeg','images/food-05.jpeg'],
    'Cakes': ['images/food-07.jpeg','images/food-08.jpeg','images/food-09.jpeg','images/food-15.jpeg','images/food-20.jpeg','images/food-27.jpeg']
  };
  return (
    <main className="page-enter" data-screen-label="Gallery">
      <section style={{padding:'56px 0 32px', borderBottom:'1px solid var(--line)'}}>
        <div className="container-wide">
          <span className="eyebrow">Gallery</span>
          <h1 className="display-xl" style={{marginTop:10}}>Eat with <span className="italic" style={{color:'var(--orange)'}}>your eyes</span> first.</h1>
          <p className="lede" style={{marginTop:18, maxWidth:560}}>Real plates, real customers, real days at Chris Joan. No stock photography in sight.</p>
          <div style={{display:'flex', gap:8, marginTop:28, flexWrap:'wrap'}}>
            {Object.keys(groups).map(g => (
              <button key={g} onClick={() => setFilter(g)} className="chip" style={filter===g ? {background:'var(--chocolate)', color:'var(--cream)', padding:'0 16px', height:36} : {padding:'0 16px', height:36}}>{g}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-wide">
          <div className="masonry">
            {groups[filter].map((src, i) => (
              <div key={src+i} onClick={() => setLightbox(src)}>
                <img src={src} alt="" loading="lazy"/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={`lightbox ${lightbox ? 'open' : ''}`} onClick={() => setLightbox(null)}>
        {lightbox && <img src={lightbox} alt=""/>}
        <button className="icon-btn" style={{position:'absolute', top:24, right:24, background:'var(--cream)'}} onClick={() => setLightbox(null)}><Ico.close/></button>
      </div>
    </main>
  );
};

/* ============ CONTACT ============ */
const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); e.target.reset(); };
  const { whatsapp, phone, email, address, instagram, hours, whatsappRaw } = window.CJ_BRAND;
  return (
    <main className="page-enter" data-screen-label="Contact">
      <section style={{padding:'56px 0 24px'}}>
        <div className="container-wide">
          <span className="eyebrow">Contact us</span>
          <h1 className="display-xl" style={{marginTop:10}}>Tell us what you're <span className="italic" style={{color:'var(--orange)'}}>craving.</span></h1>
          <p className="lede" style={{marginTop:18, maxWidth:560}}>The fastest way to reach Chris Joan is WhatsApp — we usually reply within minutes during open hours.</p>
        </div>
      </section>
      <section className="section" style={{paddingTop:32}}>
        <div className="container-wide" style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48}} className="contact-grid">
          <div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:14, marginBottom:28}}>
              {[
                { ico:<Ico.whatsapp size={20}/>, t:'WhatsApp', v:whatsapp, href:`https://wa.me/${whatsappRaw}`, accent:'#25D366' },
                { ico:<Ico.phone size={20}/>,    t:'Call us',  v:phone,    href:`tel:${phone.replace(/\s/g,'')}` },
                { ico:<Ico.mail size={20}/>,     t:'Email',    v:email,    href:`mailto:${email}` },
                { ico:<Ico.pin size={20}/>,      t:'Location', v:address }
              ].map((c,i) => (
                <a key={i} href={c.href} target={c.href && c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="card" style={{padding:'22px 22px', display:'block'}}>
                  <div style={{width:44, height:44, borderRadius:12, background:'rgba(224,122,54,0.12)', color: c.accent || 'var(--orange-2)', display:'grid', placeItems:'center', marginBottom:14}}>{c.ico}</div>
                  <div className="eyebrow" style={{fontSize:11}}>{c.t}</div>
                  <div style={{fontFamily:'var(--font-display)', fontSize:22, color:'var(--chocolate)', marginTop:6}}>{c.v}</div>
                </a>
              ))}
            </div>

            <div className="card" style={{padding:'24px 24px 20px'}}>
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:14}}>
                <Ico.clock size={20}/> <span className="h4">Business hours</span>
              </div>
              <ul style={{listStyle:'none', display:'grid', gap:8}}>
                {hours.map((h,i) => (
                  <li key={i} style={{display:'flex', justifyContent:'space-between', fontSize:14.5, color:'var(--ink-3)', borderBottom: i<hours.length-1 ? '1px dashed var(--line)' : 'none', paddingBottom:8}}>
                    <span style={{fontWeight:500}}>{h.day}</span>
                    <span className="muted">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="card" style={{marginTop:18, padding:0, overflow:'hidden', height:200, position:'relative', background:'var(--cream-2)'}}>
              <svg viewBox="0 0 600 200" style={{width:'100%', height:'100%', display:'block'}}>
                <rect width="600" height="200" fill="#ecdfc3"/>
                <path d="M0 80 Q150 60 280 90 T600 70" stroke="#d4a458" strokeWidth="1.5" fill="none" opacity="0.5"/>
                <path d="M0 130 Q200 110 360 140 T600 120" stroke="#d4a458" strokeWidth="1.5" fill="none" opacity="0.5"/>
                <path d="M0 170 Q180 150 320 180 T600 160" stroke="#d4a458" strokeWidth="1.5" fill="none" opacity="0.5"/>
                <line x1="300" y1="0" x2="300" y2="200" stroke="#c88a3d" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.6"/>
                <line x1="0" y1="100" x2="600" y2="100" stroke="#c88a3d" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.6"/>
                <circle cx="300" cy="100" r="14" fill="#e07a36"/>
                <circle cx="300" cy="100" r="6" fill="white"/>
              </svg>
              <div style={{position:'absolute', bottom:14, left:14, background:'var(--paper)', padding:'8px 14px', borderRadius:9999, fontSize:13, color:'var(--ink-3)', boxShadow:'var(--shadow-sm)'}}>
                <Ico.pin size={13}/> &nbsp;{address}
              </div>
            </div>
          </div>

          <div className="card" style={{padding:'32px 32px 36px'}}>
            <h2 className="h3">Send a message</h2>
            <p className="muted" style={{marginTop:6, marginBottom:22, fontSize:14.5}}>For catering quotes, custom cakes or any question — drop a note and we'll get back the same day.</p>
            <form onSubmit={submit} style={{display:'flex', flexDirection:'column', gap:14}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
                <input className="input" style={{paddingLeft:18}} placeholder="Your name" required/>
                <input className="input" style={{paddingLeft:18}} placeholder="Phone or WhatsApp" required/>
              </div>
              <input className="input" type="email" style={{paddingLeft:18}} placeholder="Email"/>
              <select className="input" style={{paddingLeft:18, appearance:'none'}} required defaultValue="">
                <option value="" disabled>What do you need?</option>
                <option>Regular order</option>
                <option>Catering / party tray</option>
                <option>Custom cake</option>
                <option>Question / feedback</option>
              </select>
              <textarea className="input" rows="5" placeholder="Tell us a bit more…" style={{height:'auto', padding:'14px 18px', borderRadius:18, resize:'vertical'}}/>
              <div style={{display:'flex', gap:10, alignItems:'center', marginTop:6}}>
                <button type="submit" className="btn btn-primary btn-lg" style={{flex:1, justifyContent:'center'}}>Send message <Ico.arrow size={14}/></button>
                <a className="btn btn-lg" href={`https://wa.me/${whatsappRaw}`} target="_blank" rel="noreferrer" style={{background:'#25D366', color:'white'}}><Ico.whatsapp/></a>
              </div>
              {sent && <div className="chip chip-leaf" style={{marginTop:6, alignSelf:'flex-start'}}><Ico.check size={14}/> Sent! We'll be in touch shortly.</div>}
            </form>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 880px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  );
};

Object.assign(window, { HomePage, ProductsPage, ProductDetailPage, AboutPage, GalleryPage, ContactPage });
