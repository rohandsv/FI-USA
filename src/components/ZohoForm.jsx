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
#imgid3209734000060076018 { border-radius: 6px; border: 1px solid var(--zf-input-border); height: 45px; margin-top: 10px; }
#crmWebToEntityForm .zcwf_col_fld a { color: var(--zf-primary); margin-left: 12px; }
@media (min-width: 640px) {
  #crmWebToEntityForm form { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  #crmWebToEntityForm .zcwf_row.full-width { grid-column: span 2; }
}
`;

// The exact Zoho reference HTML — no React event handling, no synthetic events.
// Scripts run natively via the browser, exactly as Zoho intended.
const ZOHO_FORM_HTML = `
<div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm" style="max-width:100%;">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<META HTTP-EQUIV="content-type" CONTENT="text/html;charset=UTF-8">
<form id="webform3209734000060076018" action="https://crm.zoho.com/crm/WebToLeadForm" name=WebToLeads3209734000060076018 method="POST" onSubmit='javascript:document.charset="UTF-8"; return checkMandatory3209734000060076018()' accept-charset="UTF-8">
<input type="text" style="display:none;" name="xnQsjsdp" value="526da2c328bc79c83950c5bf87e802cec1865ee9aadd0517b7187c7c9fb940b0">
<input type="hidden" name="zc_gad" id="zc_gad" value="">
<input type="text" style="display:none;" name="xmIwtLD" value="8b3c8db641409c0ebcda7ba3f00e0c8933060493054704298a05d80ecc9f8259a45f38fab276ca4155b93508fb89c04b">
<input type="text" style="display:none;" name="actionType" value="TGVhZHM=">
<input type="text" style="display:none;" name="returnURL" value="https://www.fidigital.co/contact">
<!-- Do not remove this code. -->
<input type="text" style="display:none;" id="ldeskuid" name="ldeskuid">
<input type="text" style="display:none;" id="LDTuvid" name="LDTuvid">
<!-- Do not remove this code. -->
<div class="zcwf_title" style="max-width:600px;color:black;font-family:Arial;">FI Digital US</div>
<div class="zcwf_row"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="First_Name">First Name<span style="color:red;">*</span></label></div><div class="zcwf_col_fld"><input type="text" id="First_Name" aria-required="true" aria-label="First Name" name="First Name" maxlength="40"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Last_Name">Last Name<span style="color:red;">*</span></label></div><div class="zcwf_col_fld"><input type="text" id="Last_Name" aria-required="true" aria-label="Last Name" name="Last Name" maxlength="80"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row full-width"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Email">Email<span style="color:red;">*</span></label></div><div class="zcwf_col_fld"><input type="text" ftype="email" autocomplete="false" id="Email" aria-required="true" aria-label="Email" name="Email" crmlabel="" maxlength="100"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Mobile">Mobile<span style="color:red;">*</span></label></div><div class="zcwf_col_fld"><input type="text" id="Mobile" aria-required="true" aria-label="Mobile" name="Mobile" maxlength="30"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Company">Company<span style="color:red;">*</span></label></div><div class="zcwf_col_fld"><input type="text" id="Company" aria-required="true" aria-label="Company" name="Company" maxlength="200"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row full-width"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF55">Company Size</label></div><div class="zcwf_col_fld"><input type="text" id="LEADCF55" aria-required="false" aria-label="LEADCF55" name="LEADCF55" maxlength="9"><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row full-width"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF130">What are your main pain points?</label></div><div class="zcwf_col_fld"><textarea style="font-family:Arial,sans-serif;" aria-multiline="true" id="LEADCF130" aria-required="false" aria-label="LEADCF130" name="LEADCF130"></textarea><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row full-width"><div class="zcwf_col_lab" id="reCaptchaField" style="font-size:12px;font-family:Arial;">Enter the Captcha</div><div class="zcwf_col_fld"><input type="text" id="captchaField3209734000060076018" aria-labelledby="reCaptchaField" maxlength="10" name="enterdigest"></div></div>
<!-- Do not remove this code. -->
<div class="zcwf_row full-width"><div class="zcwf_col_lab"></div><div class="zcwf_col_fld"><img id="imgid3209734000060076018" src="https://crm.zoho.com/crm/CaptchaServlet?formId=8b3c8db641409c0ebcda7ba3f00e0c8933060493054704298a05d80ecc9f8259a45f38fab276ca4155b93508fb89c04b&grpid=526da2c328bc79c83950c5bf87e802cec1865ee9aadd0517b7187c7c9fb940b0"><a href="javascript:;" onclick="reloadImg3209734000060076018();">Reload</a></div><div class=""></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="LEADCF48">Business Entity</label></div><div class="zcwf_col_fld"><select class="zcwf_col_fld_slt" id="LEADCF48" name="LEADCF48"><option value="-None-">-None-</option><option value="Fristine Infotech">Fristine Infotech</option><option value="FI Digital">FI Digital</option><option value="DSV Corp">DSV Corp</option><option value="FI Digital MEA">FI Digital MEA</option><option value="FI Digital UK">FI Digital UK</option><option selected value="FI Digital US">FI Digital US</option><option value="FI Digital NZ">FI Digital NZ</option></select><div class="zcwf_col_help"></div></div></div>
<div class="zcwf_row wfrm_fld_dpNn"><div class="zcwf_col_lab" style="font-size:12px;font-family:Arial;"><label for="Lead_Status">Lead Status</label></div><div class="zcwf_col_fld"><select class="zcwf_col_fld_slt" id="Lead_Status" name="Lead Status"><option value="-None-">-None-</option><option value="Not Contacted">Not Contacted</option><option value="Attempted to Contact">Attempted to Contact</option><option value="Contact In Future">Contact In Future</option><option value="Contacted">Contacted</option><option value="Qualified">Qualified</option><option value="Junk Lead">Junk Lead</option><option value="Lost Lead">Lost Lead</option><option value="Unqualified">Unqualified</option><option selected value="New Lead">New Lead</option></select><div class="zcwf_col_help"></div></div></div>
<input type="text" type="hidden" style="display:none;" name="aG9uZXlwb3Q" value="">
<div class="zcwf_row full-width"><div class="zcwf_col_lab"></div><div class="zcwf_col_fld"><input type="submit" id="formsubmit" role="button" class="formsubmit zcwf_button" value="Submit" title="Submit"><input type="reset" class="zcwf_button" name="reset" value="Reset" title="Reset"></div></div>
<script>
function addAriaSelected3209734000060076018(){var optionElem=event.target;var previousSelectedOption=optionElem.querySelector('[aria-selected=true]');if(previousSelectedOption){previousSelectedOption.removeAttribute('aria-selected');}optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected='true';}
/* Do not remove this code. */
function reloadImg3209734000060076018(){var captcha=document.getElementById('imgid3209734000060076018');if(captcha.src.indexOf('&d')!==-1){captcha.src=captcha.src.substring(0,captcha.src.indexOf('&d'))+'&d'+new Date().getTime();}else{captcha.src=captcha.src+'&d'+new Date().getTime();}}
function historyBack3209734000060076018(){document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');reloadImg3209734000060076018();window.removeEventListener('focus',historyBack3209734000060076018);}
function validateEmail3209734000060076018(){var form=document.forms['WebToLeads3209734000060076018'];var emailFld=form.querySelectorAll('[ftype=email]');var i;for(i=0;i<emailFld.length;i++){var emailVal=emailFld[i].value;if((emailVal.replace(/^\\s+|\\s+$/g,'')).length!=0){var atpos=emailVal.indexOf('@');var dotpos=emailVal.lastIndexOf('.');if(atpos<1||dotpos<atpos+2||dotpos+2>=emailVal.length){alert('Please enter a valid email address. ');emailFld[i].focus();return false;}}}return true;}
function checkMandatory3209734000060076018(){var mndFileds=new Array('Company','First Name','Last Name','Email','Mobile');var fldLangVal=new Array('Company','First Name','Last Name','Email','Mobile');for(i=0;i<mndFileds.length;i++){var fieldObj=document.forms['WebToLeads3209734000060076018'][mndFileds[i]];if(fieldObj){if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length==0){if(fieldObj.type=='file'){alert('Please select a file to upload.');fieldObj.focus();return false;}alert(fldLangVal[i]+' cannot be empty.');fieldObj.focus();return false;}else if(fieldObj.nodeName=='SELECT'){if(fieldObj.options[fieldObj.selectedIndex].value=='-None-'){alert(fldLangVal[i]+' cannot be none.');fieldObj.focus();return false;}}else if(fieldObj.type=='checkbox'){if(fieldObj.checked==false){alert('Please accept  '+fldLangVal[i]);fieldObj.focus();return false;}}try{if(fieldObj.name=='Last Name'){name=fieldObj.value;}}catch(e){}}}trackVisitor3209734000060076018();if(!validateEmail3209734000060076018()){return false;}var urlparams=new URLSearchParams(window.location.search);if(urlparams.has('service')&&(urlparams.get('service')==='smarturl')){var webform=document.getElementById('webform3209734000060076018');var service=urlparams.get('service');var smarturlfield=document.createElement('input');smarturlfield.setAttribute('type','hidden');smarturlfield.setAttribute('value',service);smarturlfield.setAttribute('name','service');webform.appendChild(smarturlfield);}document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled',true);window.addEventListener('focus',historyBack3209734000060076018);}
function tooltipShow3209734000060076018(el){var tooltip=el.nextElementSibling;var tooltipDisplay=tooltip.style.display;if(tooltipDisplay=='none'){var allTooltip=document.getElementsByClassName('zcwf_tooltip_over');for(i=0;i<allTooltip.length;i++){allTooltip[i].style.display='none';}tooltip.style.display='block';}else{tooltip.style.display='none';}}
</script>
<script type="text/javascript" id="VisitorTracking">
var $zoho=$zoho||{};$zoho.salesiq=$zoho.salesiq||{widgetcode:'siqb15f79c14b9eb7cedc1073ae066f888dd9c03bc51db4381ae6e445aa0868d683',values:{},ready:function(){}};var d=document;s=d.createElement('script');s.type='text/javascript';s.id='zsiqscript';s.defer=true;s.src='https://salesiq.zoho.com/widget';t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
function trackVisitor3209734000060076018(){try{if($zoho){var LDTuvidObj=document.forms['WebToLeads3209734000060076018']['LDTuvid'];if(LDTuvidObj){LDTuvidObj.value=$zoho.salesiq.visitor.uniqueid();}var firstnameObj=document.forms['WebToLeads3209734000060076018']['First Name'];if(firstnameObj){name=firstnameObj.value+' '+name;}$zoho.salesiq.visitor.name(name);var emailObj=document.forms['WebToLeads3209734000060076018']['Email'];if(emailObj){email=emailObj.value;$zoho.salesiq.visitor.email(email);}}}catch(e){}}
</script>
<script src="https://crm.zohopublic.com/crm/WebFormServlet?rid=b3458fba8d6e2e3f7521cf39297fcd47106044ab5b0b717ca7e3ee318c99f608"></script>
<!-- Do not remove this --- Analytics Tracking code starts -->
<script id="wf_anal" src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=6829ce7fb821addc1a40eea005227c2ae2d0cceaaf1b5813bc22373156177b6924d52c2f7f9d115c90a8767ebb38672fgid5f18724014afd0bed1ede1e1b43f9b5b6b3b325e6e820a83472e265d36309607gidad8c95271abe9deb188c916e6456fd9c0d21290b8bc4bc23a4bd0ca0a0270974gidcdb6a55d2dac4fccf95acae354959d1a6119091e9aec6c34e36007d760ca8ba4&tw=7dd103768b56b1e5149227fabf8cbf89251e79b9446edd9c415da5eea5971353"></script>
<!-- Do not remove this --- Analytics Tracking code ends. -->
</form>
<!-- Do not remove this code. -->
<iframe name="captchaFrame" style="display:none;"></iframe>
</div>
`;

export default function ZohoForm({ onSubmitted }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Inject raw HTML
    containerRef.current.innerHTML = ZOHO_FORM_HTML;

    // Execute <script> tags manually (innerHTML doesn't run scripts)
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

    // Listen for form submit to show thank-you without blocking native POST
    const form = document.getElementById('webform3209734000060076018');
    if (form && onSubmitted) {
      form.addEventListener('submit', () => {
        setTimeout(onSubmitted, 600);
      });
    }
  }, [onSubmitted]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CUSTOM_CSS }} />
      <div ref={containerRef} />
    </>
  );
}
