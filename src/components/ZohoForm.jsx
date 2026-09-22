'use client';

import { useEffect, useRef } from 'react';

const CUSTOM_CSS = `
#crmWebToEntityForm {
  --zf-primary: #0279FF;
  --zf-text: #1a1a1a;
  --zf-text-secondary: #4b5563;
  --zf-input-bg: #f9fafb;
  --zf-input-border: #e5e7eb;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
[data-theme="dark"] #crmWebToEntityForm,
.dark #crmWebToEntityForm {
  --zf-text: #f3f4f6;
  --zf-text-secondary: #9ca3af;
  --zf-input-bg: #111827;
  --zf-input-border: #374151;
}
#crmWebToEntityForm .zcwf_title { display: none; }
#crmWebToEntityForm .zcwf_row { margin-bottom: 20px; display: flex; flex-direction: column; }
#crmWebToEntityForm .zcwf_col_lab { font-size: 14px; font-weight: 600; margin-bottom: 8px; color: var(--zf-text); width: auto; float: none; }
#crmWebToEntityForm .zcwf_col_fld { width: 100%; float: none; }
#crmWebToEntityForm .zcwf_col_fld input[type=text],
#crmWebToEntityForm .zcwf_col_fld textarea,
#crmWebToEntityForm .zcwf_col_fld select {
  width: 100% !important; padding: 12px 16px; border: 1px solid var(--zf-input-border) !important;
  border-radius: 8px; background-color: var(--zf-input-bg); color: var(--zf-text);
  font-family: inherit; font-size: 15px; box-sizing: border-box; transition: all 0.2s ease;
}
#crmWebToEntityForm .zcwf_col_fld input:focus,
#crmWebToEntityForm .zcwf_col_fld textarea:focus {
  outline: none; border-color: var(--zf-primary) !important; box-shadow: 0 0 0 3px rgba(2,121,255,0.1);
}
#crmWebToEntityForm .formsubmit.zcwf_button {
  background: linear-gradient(135deg, #0279FF 0%, #00A3F3 100%);
  color: white !important; padding: 14px 28px; border: none; border-radius: 8px;
  font-weight: 600; font-size: 16px; cursor: pointer; width: 100%; margin-top: 10px;
  max-width: 100%; transition: all 0.2s ease;
}
#crmWebToEntityForm .formsubmit.zcwf_button:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(2,121,255,0.3); }
#crmWebToEntityForm .formsubmit.zcwf_button:disabled { opacity: 0.7; cursor: not-allowed; }
#crmWebToEntityForm .zcwf_button[name=reset] { display: none; }
#crmWebToEntityForm .wfrm_fld_dpNn { display: none; }
@media (min-width: 640px) {
  #crmWebToEntityForm form { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  #crmWebToEntityForm .zcwf_row.full-width { grid-column: span 2; }
}
`;

// Zoho form with latest tokens (Sep 2026).
// Visible: First Name, Last Name, Email, Mobile, "What do you want to automate?"
// Hidden: Company, Company Size, Business Entity, Lead Status, all tracking fields
const ZOHO_FORM_HTML = `
<div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm" style="max-width:100%;">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<META HTTP-EQUIV="content-type" CONTENT="text/html;charset=UTF-8">
<form id="webform3209734000060076018" action="https://crm.zoho.com/crm/WebToLeadForm" name=WebToLeads3209734000060076018 method="POST" onSubmit='javascript:document.charset="UTF-8"; return checkMandatory3209734000060076018()' accept-charset="UTF-8">
<input type="text" style="display:none;" name="xnQsjsdp" value="59c35a183086ae54bf805a9798cc9d202d0531a74e8cfc833fc27b207ce3b476">
<input type="hidden" name="zc_gad" id="zc_gad" value="">
<input type="text" style="display:none;" name="xmIwtLD" value="cb9bd1335cd6ae36053b22cda11d519a411106b42e2b42fd882bdfab539bd77c4e33f798cc1514b66c204adc476fc484">
<input type="text" style="display:none;" name="actionType" value="TGVhZHM=">
<input type="text" style="display:none;" name="returnURL" value="https://www.fidigital.co/thank-you">
<!-- Do not remove this code. -->
<input type="text" style="display:none;" id="ldeskuid" name="ldeskuid">
<input type="text" style="display:none;" id="LDTuvid" name="LDTuvid">
<!-- Do not remove this code. -->
<div class="zcwf_title" style="max-width:600px;color:black;font-family:Arial;">FI Digital USA</div>
<div class="zcwf_row"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="First_Name">First Name</label></div><div class="zcwf_col_fld"><input type="text" id="First_Name" aria-required="false" aria-label="First Name" name="First Name" maxlength="40"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Last_Name">Last Name<span style="color:red;">*</span></label></div><div class="zcwf_col_fld"><input type="text" id="Last_Name" aria-required="true" aria-label="Last Name" name="Last Name" maxlength="80"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row full-width"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Email">Email<span style="color:red;">*</span></label></div><div class="zcwf_col_fld"><input type="text" ftype="email" autocomplete="false" id="Email" aria-required="true" aria-label="Email" name="Email" crmlabel="" maxlength="100"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row full-width"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Mobile">Mobile</label></div><div class="zcwf_col_fld"><input type="text" id="Mobile" aria-required="false" aria-label="Mobile" name="Mobile" maxlength="30"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row full-width"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF130">What do you want to automate?</label></div><div class="zcwf_col_fld"><textarea style="font-family:Arial,sans-serif;" aria-multiline="true" id="LEADCF130" aria-required="false" aria-label="LEADCF130" name="LEADCF130"></textarea><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Company">Company</label></div><div class="zcwf_col_fld"><input type="text" id="Company" aria-required="false" aria-label="Company" name="Company" maxlength="200"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF55">Company Size</label></div><div class="zcwf_col_fld"><input type="text" id="LEADCF55" aria-required="false" aria-label="LEADCF55" name="LEADCF55" maxlength="9"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF48">Business Entity</label></div><div class="zcwf_col_fld"><select class="zcwf_col_fld_slt" role="combobox" aria-expanded="false" aria-haspopup="listbox" id="LEADCF48" onChange="addAriaSelected3209734000060076018()" aria-required="false" aria-label="LEADCF48" name="LEADCF48"><option value="-None-">-None-</option><option value="Fristine Infotech">Fristine Infotech</option><option value="FI Digital">FI Digital</option><option value="DSV Corp">DSV Corp</option><option value="FI Digital MEA">FI Digital MEA</option><option value="FI Digital UK">FI Digital UK</option><option selected value="FI Digital US">FI Digital US</option><option value="FI Digital NZ">FI Digital NZ</option><option value="DSV Consulting">DSV Consulting</option></select><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Lead_Status">Lead Status</label></div><div class="zcwf_col_fld"><select class="zcwf_col_fld_slt" role="combobox" aria-expanded="false" aria-haspopup="listbox" id="Lead_Status" onChange="addAriaSelected3209734000060076018()" aria-required="false" aria-label="Lead Status" name="Lead Status"><option value="-None-">-None-</option><option value="Not Contacted">Not Contacted</option><option value="Attempted to Contact">Attempted to Contact</option><option value="Contact In Future">Contact In Future</option><option value="Contacted">Contacted</option><option value="Qualified">Qualified</option><option value="Junk Lead">Junk Lead</option><option value="Lost Lead">Lost Lead</option><option value="Unqualified">Unqualified</option><option selected value="New Lead">New Lead</option></select><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF155">utm source</label></div><div class="zcwf_col_fld"><input type="text" id="LEADCF155" aria-required="false" aria-label="LEADCF155" name="LEADCF155" maxlength="255"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF157">utm medium</label></div><div class="zcwf_col_fld"><input type="text" id="LEADCF157" aria-required="false" aria-label="LEADCF157" name="LEADCF157" maxlength="255"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF156">utm campaign</label></div><div class="zcwf_col_fld"><input type="text" id="LEADCF156" aria-required="false" aria-label="LEADCF156" name="LEADCF156" maxlength="255"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF153">utm term</label></div><div class="zcwf_col_fld"><input type="text" id="LEADCF153" aria-required="false" aria-label="LEADCF153" name="LEADCF153" maxlength="255"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF158">utm content</label></div><div class="zcwf_col_fld"><input type="text" id="LEADCF158" aria-required="false" aria-label="LEADCF158" name="LEADCF158" maxlength="255"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF159">g clid</label></div><div class="zcwf_col_fld"><input type="text" id="LEADCF159" aria-required="false" aria-label="LEADCF159" name="LEADCF159" maxlength="255"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF154">fbclid</label></div><div class="zcwf_col_fld"><input type="text" id="LEADCF154" aria-required="false" aria-label="LEADCF154" name="LEADCF154" maxlength="255"><div class="zcwf_col_help"></div></div></div>
<input type="text" type="hidden" style="display:none;" name="aG9uZXlwb3Q" value="">
<div class="zcwf_row full-width"><div class="zcwf_col_lab"></div><div class="zcwf_col_fld"><input type="submit" id="formsubmit" role="button" class="formsubmit zcwf_button" value="Submit" aria-label="Submit" title="Submit"><input type="reset" class="zcwf_button" role="button" name="reset" value="Reset" aria-label="Reset" title="Reset"></div></div>
<script>
function addAriaSelected3209734000060076018(){var optionElem=event.target;var previousSelectedOption=optionElem.querySelector('[aria-selected=true]');if(previousSelectedOption){previousSelectedOption.removeAttribute('aria-selected');}optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected='true';}
function validateEmail3209734000060076018(){var form=document.forms['WebToLeads3209734000060076018'];var emailFld=form.querySelectorAll('[ftype=email]');var i;for(i=0;i<emailFld.length;i++){var emailVal=emailFld[i].value;if((emailVal.replace(/^\\s+|\\s+$/g,'')).length!=0){var atpos=emailVal.indexOf('@');var dotpos=emailVal.lastIndexOf('.');if(atpos<1||dotpos<atpos+2||dotpos+2>=emailVal.length){alert('Please enter a valid email address. ');emailFld[i].focus();return false;}}}return true;}
function checkMandatory3209734000060076018(isAjax){var mndFileds=new Array('Last Name','Email');var fldLangVal=new Array('Last Name','Email');for(i=0;i<mndFileds.length;i++){var fieldObj=document.forms['WebToLeads3209734000060076018'][mndFileds[i]];if(fieldObj){if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length==0){if(fieldObj.type=='file'){alert('Please select a file to upload.');fieldObj.focus();return false;}alert(fldLangVal[i]+' cannot be empty.');fieldObj.focus();return false;}else if(fieldObj.nodeName=='SELECT'){if(fieldObj.options[fieldObj.selectedIndex].value=='-None-'){alert(fldLangVal[i]+' cannot be none.');fieldObj.focus();return false;}}else if(fieldObj.type=='checkbox'){if(fieldObj.checked==false){alert('Please accept  '+fldLangVal[i]);fieldObj.focus();return false;}}try{if(fieldObj.name=='Last Name'){name=fieldObj.value;}}catch(e){}}}trackVisitor3209734000060076018();if(!validateEmail3209734000060076018()){return false;}var urlparams=new URLSearchParams(window.location.search);if(urlparams.has('service')&&(urlparams.get('service')==='smarturl')){var webform=document.getElementById('webform3209734000060076018');var service=urlparams.get('service');var smarturlfield=document.createElement('input');smarturlfield.setAttribute('type','hidden');smarturlfield.setAttribute('value',service);smarturlfield.setAttribute('name','service');webform.appendChild(smarturlfield);}document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled',true);}
_wFa_ajax_will_be_replaced=false;if(typeof _wfa_fstprtcken=='undefined'){_wfa_fstprtcken={};}_wfa_fstprtcken[3209734000060076018]=true;
function tooltipShow3209734000060076018(el){var tooltip=el.nextElementSibling;var tooltipDisplay=tooltip.style.display;if(tooltipDisplay=='none'){var allTooltip=document.getElementsByClassName('zcwf_tooltip_over');for(i=0;i<allTooltip.length;i++){allTooltip[i].style.display='none';}tooltip.style.display='block';}else{tooltip.style.display='none';}}
</script>
<script type="text/javascript" id="VisitorTracking">
var $zoho=$zoho||{salesiq:{values:{},ready:function(){}}};var d=document;s=d.createElement('script');s.type='text/javascript';s.defer=true;s.src='https://salesiq.zoho.com/fristineinfotechpvtltd/float.ls?embedname=embed1.fidigital';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
function trackVisitor3209734000060076018(){try{if($zoho){var LDTuvidObj=document.forms['WebToLeads3209734000060076018']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value=$zoho.salesiq.visitor.uniqueid();}var firstnameObj=document.forms['WebToLeads3209734000060076018']['First Name'];if(firstnameObj){name=firstnameObj.value+' '+name;}$zoho.salesiq.visitor.name(name);var emailObj=document.forms['WebToLeads3209734000060076018']['Email'];if(emailObj){email=emailObj.value;$zoho.salesiq.visitor.email(email);}}}catch(e){}}
</script>
<script src="https://crm.zohopublic.com/crm/WebFormServlet?rid=b3458fba8d6e2e3f7521cf39297fcd47106044ab5b0b717ca7e3ee318c99f608"></script>
<!-- Do not remove this --- Analytics Tracking code starts -->
<script id="wf_anal" src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=d8c871eba25b265ba8f2ff59de8522c277bc857b7973a93ed8d10c44d281d0732294552e7448c0c60648f0a384c57cc0gidac9ceba5a0ccd5b90fdf787bb59cd1fe164088755225ecb582cc3b798f14d875gid8a9ad62d90e859af91610d1539c1fc98b8570d4990a950be9cd425d7284d1a2egida0e8d675e9eaa62609c68a546caa8ce755d7e24d3a48da19d23287da1244b5ca&tw=1506cf843563e5ac48d1170ea6f2ddb3d7c1577d8ba1eec08638123bdd7e3a65&version=v2"></script>
<!-- Do not remove this --- Analytics Tracking code ends. -->
</form>
<script>
(function () {
  var KEYS = ['gclid','gbraid','wbraid','utm_source','utm_medium','utm_campaign','utm_term','utm_content','fbclid'];
  var store = {};
  try { store = JSON.parse(sessionStorage.getItem('fi_ad') || '{}'); } catch (e) {}
  var q = new URLSearchParams(window.location.search);
  KEYS.forEach(function (k) { if (q.get(k)) store[k] = q.get(k); });
  if (!store.landing) store.landing = window.location.href.split('?')[0];
  if (!store.first_seen) store.first_seen = new Date().toISOString();
  try { sessionStorage.setItem('fi_ad', JSON.stringify(store)); } catch (e) {}
  function put(id, v) { var el = document.getElementById(id); if (el && v) el.value = v; }
  put('zc_gad',   store.gclid);
  put('LEADCF159', store.gclid);
  put('LEADCF155', store.utm_source);
  put('LEADCF157', store.utm_medium);
  put('LEADCF156', store.utm_campaign);
  put('LEADCF153', store.utm_term);
  put('LEADCF158', store.utm_content);
  put('LEADCF154', store.fbclid);
})();
</script>
<!-- Do not remove this code. -->
</div>
`;

export default function ZohoForm() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = ZOHO_FORM_HTML;

    const scripts = containerRef.current.querySelectorAll('script');
    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script');
      if (oldScript.src) {
        newScript.src = oldScript.src;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      if (oldScript.id) newScript.id = oldScript.id;
      if (oldScript.type) newScript.type = oldScript.type;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CUSTOM_CSS }} />
      <div ref={containerRef} />
    </>
  );
}
