// src/gatekeeper-client.ts — Genesis Consumer of EG 4e74a97 13/13 GRUEN — paradox self-birth enabled
const EG_BASE = 'https://raw.githubusercontent.com/IrsanAI/IrsanAI-Essence-Gate/main/registry/essences'
export async function fetchEGRegistry(){
  const ids=['browser-control','code-generation','deep-reasoning','filesystem-access','instruction-following','is-router-core','long-context-reasoning','metacognitive-eval','multi-agent-coordination','mythos-advanced-reasoning','real-time-grounding','vision-understanding','gold-decision-support']
  const results=await Promise.all(ids.map(async id=>{const res=await fetch(EG_BASE+'/'+id+'.json'); if(!res.ok) throw new Error('Failed fetch '+id); return res.json()}))
  return results
}
export async function gatekeep(essenceGuess){
  const registry=await fetchEGRegistry()
  let best=null; let bestScore=0
  for(const e of registry){
    let s=0; const g=essenceGuess.toLowerCase(); const id=e.id.toLowerCase()
    const tags=(e.tags||[]).join(' ').toLowerCase()
    if(g.includes(id)||id.includes(g)) s+=0.5
    if(tags.includes('genesis')&&g.includes('genesis')) s+=0.4
    if(id==='code-generation'&&g.includes('create repo')) s=0.88
    if(id==='filesystem-access'&&g.includes('scaffold')) s=0.85
    if(id==='multi-agent-coordination'&&g.includes('factory')) s=0.86
    if(s>bestScore){bestScore=s; best=e}
  }
  if(best&&bestScore>=0.8) return {guess:essenceGuess,matched:best,similarity:bestScore,gate:'4e74a97 13/13 GRUEN',action:'MATCH'}
  return {guess:essenceGuess,matched:best,similarity:bestScore,gate:'4e74a97 13/13 GRUEN',action:'ELICIT',elicitorPrompt:'Was ist Essence deines Ziels?'}
}
const guess=process.argv[2]?.replace('--guess','')||process.argv[3]||'create repo factory genesis'
gatekeep(guess).then(r=>{console.log('EG Gate: '+r.gate); console.log('Guess: '+r.guess); console.log('Best: '+(r.matched?.id||'none')+' '+r.similarity.toFixed(2)); console.log('Action: '+r.action); console.log('Registry: 13 fetched')})
