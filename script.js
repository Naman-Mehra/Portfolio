const caseStudies = [
  { id:'risk', title:'Risk Coaching for SMB Payments', domain:'fintech', role:'Lead Product Designer', value:'Reduced manual risk reviews by 34% through progressive disclosure and model transparency.',
    sections:{context:'Legacy dashboards caused delayed fraud decisions for underwriters across 12 markets.',problem:'Analysts spent 41% of their day hunting transaction evidence; false positives were 22%.',constraints:'Needed to preserve SOC2 logging, avoid model retraining in Q1, and ship in 10 weeks.',process:'Mapped decision pathways from intake to escalation, then prioritized uncertainty points over screen count.',insight:'Trust improves when analysts see confidence + rationale + override path in one surface.',solution:'Designed a triage system blending confidence bands, dynamic evidence cards, and batched decisions.',impact:'Cycle time fell from 18m to 10m; expected annual savings: $1.2M operations cost.',reflection:'Trade-off: we delayed secondary visualization polish to protect rules explainability and launch date.'}},
  { id:'care', title:'Member Journey Redesign for Care Navigation', domain:'health', role:'Senior Product Designer', value:'Improved first-session booking completion by 27% with intent-adaptive onboarding.',
    sections:{context:'Users dropped during intake due to cognitive overload and low confidence.',problem:'45% abandonment before selecting care modality; support tickets showed ambiguity.',constraints:'HIPAA copy standards, legal review, and no net new backend endpoints.',process:'Created hypothesis tree and prototyped 3 onboarding variants; validated via moderated tests.',insight:'Users choose faster when options are framed around outcomes instead of service categories.',solution:'Reframed flow around goals, added confidence checkpoints, and clarified insurance boundaries.',impact:'Completion up 27%; estimated +18% 30-day retention from earlier first value moment.',reflection:'We traded granular personalization for a simpler path that scales across regional policy differences.'}},
  { id:'focus', title:'AI Workspace Attention System', domain:'ai', role:'Staff Product Designer', value:'Increased weekly active teams by 19% via interaction model reducing notification fatigue.',
    sections:{context:'AI-generated updates overwhelmed teams and weakened prioritization.',problem:'Teams muted channels within 2 weeks; critical tasks were buried under low-signal alerts.',constraints:'No ML ranking retrain this quarter; must work on mobile web and desktop.',process:'Clustered alert archetypes, then introduced urgency grammar with interaction tokens.',insight:'Attention is a design resource; interface must pace cognition, not maximize surfaces.',solution:'Shipped digest-first interaction model, urgency gates, and quick actions in-context.',impact:'WAU +19%; notification muting dropped 31%; decision latency improved by 24%.',reflection:'Future bet: adaptive digests per role, but only once baseline comprehension remains stable.'}},
];

const caseGrid = document.getElementById('caseGrid');
const caseStudyRoot = document.getElementById('caseStudyRoot');
const filter = document.getElementById('domainFilter');

function renderCards(domain='all') {
  const items = caseStudies.filter(c => domain === 'all' || c.domain === domain);
  caseGrid.innerHTML = items.map(c => `<article class="case-card" data-id="${c.id}"><p class="tag">${c.domain.toUpperCase()} • ${c.role}</p><h3>${c.title}</h3><p>${c.value}</p></article>`).join('');
  document.querySelectorAll('.case-card').forEach(card => card.onclick = () => renderCaseStudy(card.dataset.id));
}

function renderCaseStudy(id){
  const c = caseStudies.find(s => s.id === id);
  if(!c) return;
  const order = ['context','problem','constraints','process','insight','solution','impact','reflection'];
  caseStudyRoot.innerHTML = `
    <article class="case-study container reveal">
      <div class="case-layout">
        <aside class="sticky-panel"><h3>${c.title}</h3><nav class="toc">${order.map(k=>`<a href="#${id}-${k}">${k[0].toUpperCase()+k.slice(1)}</a>`).join('')}</nav></aside>
        <div class="case-content">${order.map(k => `
          <section id="${id}-${k}" class="story-section ${k === 'insight' ? 'key-insight' : ''} ${k === 'process' ? 'decision' : ''}">
            <h4>${k[0].toUpperCase()+k.slice(1)}</h4>
            <p>${c.sections[k]}</p>
            ${k === 'process' ? '<p><strong>Design Decision:</strong> We optimized for confidence calibration before velocity.</p>' : ''}
            ${k === 'solution' ? `<div class="compare"><div class="compare-card before"><strong>Before</strong><p>Fragmented flows, hidden rationale, reactive support.</p></div><div class="compare-card after"><strong>After</strong><p>Single decision surface, clear rationale, proactive intervention.</p></div></div>`: ''}
            <button class="expand-toggle" type="button">Expand deeper dive</button>
            <div class="expand-content">Artifacts include assumptions ledger, prototype rationale, and instrumentation decisions for post-launch learning.</div>
          </section>`).join('')}</div>
      </div>
    </article>`;
  bindExpands(); initScrollEffects();
}

function bindExpands(){
  document.querySelectorAll('.expand-toggle').forEach(btn=>btn.onclick=()=>btn.nextElementSibling.classList.toggle('open'));
}

function initScrollEffects(){
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.reveal, .story-section').forEach((el)=>{
    gsap.fromTo(el,{opacity:0,y:18},{opacity:1,y:0,duration:.7,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 84%'}});
  });
  document.querySelectorAll('.toc a').forEach(anchor=>{
    const target = document.querySelector(anchor.getAttribute('href'));
    ScrollTrigger.create({trigger:target,start:'top center',end:'bottom center',onToggle:self=>anchor.classList.toggle('active', self.isActive)});
  });
}

filter.addEventListener('change', e => renderCards(e.target.value));
document.getElementById('modeToggle').onclick = () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
};

const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
function raf(time){ lenis.raf(time); requestAnimationFrame(raf);} requestAnimationFrame(raf);
lenis.on('scroll', ({ progress }) => { document.getElementById('progressIndicator').style.width = `${progress * 100}%`; });

renderCards();
renderCaseStudy(caseStudies[0].id);
initScrollEffects();
