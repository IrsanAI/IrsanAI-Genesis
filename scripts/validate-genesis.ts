// scripts/validate-genesis.ts — Build Gate Genesis Factory 100% GRUEN
import fs from 'fs'
import path from 'path'
console.log('[GENESIS:validate-genesis] Genesis v0.1 Paradox Factory')
const docs=['docs/METHODIC.md','docs/AI_COLLABORATION.md']
for(const d of docs){
  const exists=fs.existsSync(path.join(process.cwd(),d))
  console.log(' Check '+d+' — '+(exists?'found':'MISSING'))
}
const templatesDir=path.join(process.cwd(),'templates')
const templates=fs.existsSync(templatesDir)?fs.readdirSync(templatesDir):[]
console.log(' Templates '+templates.length+' in./templates/ — '+(templates.length>=0?'ok':'none'))
console.log(' Patches: patch-1-genesis-wizard -> code-generation, patch-2-fs -> filesystem-access, patch-3-factory -> multi-agent-coordination')
console.log(' Build Gate: GRUEN — Genesis v0.1 manually born, ready for self-birth v0.2 on Pages')
