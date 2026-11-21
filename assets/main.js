(function(){
var h=document.querySelector('.site-header'),t=document.querySelector('.menu-toggle'),n=document.querySelector('.nav-links');
addEventListener('scroll',function(){h.classList.toggle('scrolled',scrollY>8)},{passive:true});
t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''});
var f=document.getElementById('enquiry');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),b=['Name: '+d.get('name'),'Company: '+d.get('company'),'Email: '+d.get('email'),'Interest: '+d.get('interest'),'','Message:',d.get('message')].join('\n');
location.href='mailto:info@corelinkoversees.com?subject='+encodeURIComponent('Enquiry: '+d.get('interest'))+'&body='+encodeURIComponent(b);
document.getElementById('formNote').textContent='Opening your email app. If nothing opens, write to info@corelinkoversees.com.'});
})();
