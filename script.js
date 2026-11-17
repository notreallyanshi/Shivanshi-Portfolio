const btn=document.getElementById('editBtn');
const saveBtn=document.getElementById('saveBtn');
const downloadBtn=document.getElementById('downloadBtn');
const toast=document.getElementById('toast');
const editableSelector='[data-edit], .hero .eyebrow, .hero h1, .chip, .scribble, .sectionhead .eyebrow, .sectionhead h2, .aboutnote .eyebrow, .aboutnote .mono, .edu .year, .skill b, .skill small, .projectvisual span, .projectmeta b, .projectmeta small, .coffee h2, .coffee .eyebrow, .contact .eyebrow, .contact h2, .contactbottom span';
let editing=false;
function showToast(message){toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2400)}
function editableElements(){return [...document.querySelectorAll(editableSelector)];}
function restoreSaved(){
  try { const saved=JSON.parse(localStorage.getItem('shivanshiPortfolioEdits')||'{}');
    editableElements().forEach((el,i)=>{if(Object.prototype.hasOwnProperty.call(saved,i)) el.innerHTML=saved[i];});
  } catch(e) { console.warn('Could not restore saved edits.',e); }
}
function saveEdits(){
  const saved={}; editableElements().forEach((el,i)=>saved[i]=el.innerHTML);
  try {localStorage.setItem('shivanshiPortfolioEdits',JSON.stringify(saved));showToast('Your changes are saved in this browser.');}
  catch(e){showToast('Browser storage is unavailable. Use Download HTML to keep your edits.');}
}
btn.addEventListener('click',()=>{
  editing=!editing; document.body.classList.toggle('editable',editing);
  editableElements().forEach(el=>el.contentEditable=editing?'true':'false');
  btn.classList.toggle('active',editing); btn.textContent=editing?'✓ Finish editing':'✎ Edit page';
  if(!editing) saveEdits(); else showToast('Edit mode on — click any highlighted text to change it.');
});
saveBtn.addEventListener('click',saveEdits);
downloadBtn.addEventListener('click',()=>{
  if(editing){editableElements().forEach(el=>el.contentEditable='false');document.body.classList.remove('editable');editing=false;btn.classList.remove('active');btn.textContent='✎ Edit page';}
  saveEdits();
  const clone=document.documentElement.cloneNode(true);
  clone.querySelectorAll('[contenteditable]').forEach(el=>el.removeAttribute('contenteditable'));
  clone.querySelectorAll('.editable').forEach(el=>el.classList.remove('editable'));
  const clonedBtn=clone.querySelector('#editBtn'); if(clonedBtn){clonedBtn.classList.remove('active');clonedBtn.textContent='✎ Edit page';}
  const html='<!DOCTYPE html>\n'+clone.outerHTML;
  const blob=new Blob([html],{type:'text/html;charset=utf-8'}); const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='shivanshi-patidar-portfolio.html';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
  showToast('Your editable website file is downloading.');
});
restoreSaved();
