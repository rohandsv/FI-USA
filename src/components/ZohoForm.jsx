'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const FORM_CSS = `
#crmWebToEntityForm {
  --zf-primary: #0279FF;
  --zf-primary-hover: #006be4;
  --zf-text: #1a1a1a;
  --zf-text-secondary: #4b5563;
  --zf-input-bg: #f9fafb;
  --zf-input-border: #e5e7eb;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 2px;
  box-sizing: border-box;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--zf-text);
}

[data-theme="dark"] #crmWebToEntityForm,
.dark #crmWebToEntityForm {
  --zf-text: #f3f4f6;
  --zf-text-secondary: #9ca3af;
  --zf-input-bg: #111827;
  --zf-input-border: #374151;
}

#crmWebToEntityForm .zcwf_title { display: none; }

#crmWebToEntityForm .zcwf_row {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

#crmWebToEntityForm .zcwf_col_lab {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--zf-text);
}

#crmWebToEntityForm .zcwf_col_fld input[type=text],
#crmWebToEntityForm .zcwf_col_fld input[type=email],
#crmWebToEntityForm .zcwf_col_fld textarea,
#crmWebToEntityForm .zcwf_col_fld select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--zf-input-border);
  border-radius: 8px;
  background-color: var(--zf-input-bg);
  color: var(--zf-text);
  font-family: inherit;
  font-size: 15px;
  box-sizing: border-box;
  transition: all 0.2s ease;
}

#crmWebToEntityForm .zcwf_col_fld input:focus,
#crmWebToEntityForm .zcwf_col_fld textarea:focus,
#crmWebToEntityForm .zcwf_col_fld select:focus {
  outline: none;
  border-color: var(--zf-primary);
  box-shadow: 0 0 0 3px rgba(2, 121, 255, 0.1);
}

#crmWebToEntityForm .formsubmit.zcwf_button {
  background: linear-gradient(135deg, #0279FF 0%, #00A3F3 100%);
  color: white !important;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: 10px;
}

#crmWebToEntityForm .formsubmit.zcwf_button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(2, 121, 255, 0.3);
}

#crmWebToEntityForm .formsubmit.zcwf_button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

#crmWebToEntityForm .captcha-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
}

#imgid3209734000060076018 {
  border-radius: 6px;
  border: 1px solid var(--zf-input-border);
  height: 45px;
}

#crmWebToEntityForm .reload-link {
  color: var(--zf-primary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

#crmWebToEntityForm .wfrm_fld_dpNn { display: none; }

@media (min-width: 640px) {
  #crmWebToEntityForm form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  #crmWebToEntityForm .full-width {
    grid-column: span 2;
  }
}
`;

export default function ZohoForm({ onSubmitted }) {
  useEffect(() => {
    // SalesIQ widget initialization — matches reference exactly
    var $zoho = window.$zoho = window.$zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
      widgetcode: 'siqb15f79c14b9eb7cedc1073ae066f888dd9c03bc51db4381ae6e445aa0868d683',
      values: {},
      ready: function () {}
    };
    var d = document;
    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.id = 'zsiqscript';
    s.defer = true;
    s.src = 'https://salesiq.zoho.com/widget';
    var t = d.getElementsByTagName('script')[0];
    if (t && t.parentNode && !d.getElementById('zsiqscript')) {
      t.parentNode.insertBefore(s, t);
    }

    /* Do not remove this code. */
    window.reloadImg3209734000060076018 = function () {
      var captcha = document.getElementById('imgid3209734000060076018');
      if (!captcha) return;
      if (captcha.src.indexOf('&d') !== -1) {
        captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
      } else {
        captcha.src = captcha.src + '&d' + new Date().getTime();
      }
    };

    window.historyBack3209734000060076018 = function () {
      document.querySelector('.crmWebToEntityForm .formsubmit')?.removeAttribute('disabled');
      window.reloadImg3209734000060076018();
      window.removeEventListener('focus', window.historyBack3209734000060076018);
    };

    window.validateEmail3209734000060076018 = function () {
      var form = document.forms['WebToLeads3209734000060076018'];
      var emailFld = form.querySelectorAll('[ftype=email]');
      var i;
      for (i = 0; i < emailFld.length; i++) {
        var emailVal = emailFld[i].value;
        if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
          var atpos = emailVal.indexOf('@');
          var dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Please enter a valid email address. ');
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    };

    window.trackVisitor3209734000060076018 = function () {
      try {
        if (window.$zoho) {
          var LDTuvidObj = document.forms['WebToLeads3209734000060076018']['LDTuvid'];
          if (LDTuvidObj) {
            LDTuvidObj.value = window.$zoho.salesiq.visitor.uniqueid();
          }
          var firstnameObj = document.forms['WebToLeads3209734000060076018']['First Name'];
          if (firstnameObj) {
            window._zohoVisitorName = firstnameObj.value + ' ' + (window._zohoVisitorName || '');
          }
          window.$zoho.salesiq.visitor.name(window._zohoVisitorName);
          var emailObj = document.forms['WebToLeads3209734000060076018']['Email'];
          if (emailObj) {
            window.$zoho.salesiq.visitor.email(emailObj.value);
          }
        }
      } catch (e) {}
    };

    window.checkMandatory3209734000060076018 = function () {
      var mndFileds = new Array('Company', 'First Name', 'Last Name', 'Email', 'Mobile');
      var fldLangVal = new Array('Company', 'First\x20Name', 'Last\x20Name', 'Email', 'Mobile');
      for (var i = 0; i < mndFileds.length; i++) {
        var fieldObj = document.forms['WebToLeads3209734000060076018'][mndFileds[i]];
        if (fieldObj) {
          if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
            if (fieldObj.type == 'file') {
              alert('Please select a file to upload.');
              fieldObj.focus();
              return false;
            }
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName == 'SELECT') {
            if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
              alert(fldLangVal[i] + ' cannot be none.');
              fieldObj.focus();
              return false;
            }
          } else if (fieldObj.type == 'checkbox') {
            if (fieldObj.checked == false) {
              alert('Please accept  ' + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
          try {
            if (fieldObj.name == 'Last Name') {
              window._zohoVisitorName = fieldObj.value;
            }
          } catch (e) {}
        }
      }
      window.trackVisitor3209734000060076018();
      if (!window.validateEmail3209734000060076018()) {
        return false;
      }
      var urlparams = new URLSearchParams(window.location.search);
      if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
        var webform = document.getElementById('webform3209734000060076018');
        var service = urlparams.get('service');
        var smarturlfield = document.createElement('input');
        smarturlfield.setAttribute('type', 'hidden');
        smarturlfield.setAttribute('value', service);
        smarturlfield.setAttribute('name', 'service');
        webform.appendChild(smarturlfield);
      }
      document.querySelector('.crmWebToEntityForm .formsubmit')?.setAttribute('disabled', true);
      window.addEventListener('focus', window.historyBack3209734000060076018);
    };

    window.tooltipShow3209734000060076018 = function (el) {
      var tooltip = el.nextElementSibling;
      var tooltipDisplay = tooltip.style.display;
      if (tooltipDisplay == 'none') {
        var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
        for (var i = 0; i < allTooltip.length; i++) {
          allTooltip[i].style.display = 'none';
        }
        tooltip.style.display = 'block';
      } else {
        tooltip.style.display = 'none';
      }
    };

    return () => {
      delete window.reloadImg3209734000060076018;
      delete window.historyBack3209734000060076018;
      delete window.validateEmail3209734000060076018;
      delete window.trackVisitor3209734000060076018;
      delete window.checkMandatory3209734000060076018;
      delete window.tooltipShow3209734000060076018;
    };
  }, []);

  const handleSubmit = (e) => {
    try { document.charset = 'UTF-8'; } catch (_) {}
    if (window.checkMandatory3209734000060076018() === false) {
      e.preventDefault();
      return;
    }
    // Validation passed — form will POST into the hidden iframe.
    if (onSubmitted) {
      setTimeout(onSubmitted, 500);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FORM_CSS }} />
      <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm">
        <form
          id="webform3209734000060076018"
          action="https://crm.zoho.com/crm/WebToLeadForm"
          name="WebToLeads3209734000060076018"
          method="POST"
          target="zoho_submit_frame"
          onSubmit={handleSubmit}
          acceptCharset="UTF-8"
        >
          <input type="text" style={{ display: 'none' }} name="xnQsjsdp" defaultValue="526da2c328bc79c83950c5bf87e802cec1865ee9aadd0517b7187c7c9fb940b0" />
          <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
          <input type="text" style={{ display: 'none' }} name="xmIwtLD" defaultValue="8b3c8db641409c0ebcda7ba3f00e0c8933060493054704298a05d80ecc9f8259a45f38fab276ca4155b93508fb89c04b" />
          <input type="text" style={{ display: 'none' }} name="actionType" defaultValue="TGVhZHM=" />
          <input type="text" style={{ display: 'none' }} name="returnURL" defaultValue="https://www.fidigital.co/contact.html" />
          {/* Do not remove this code. */}
          <input type="text" style={{ display: 'none' }} id="ldeskuid" name="ldeskuid" defaultValue="" />
          <input type="text" style={{ display: 'none' }} id="LDTuvid" name="LDTuvid" defaultValue="" />
          {/* Do not remove this code. */}

          <div className="zcwf_row">
            <div className="zcwf_col_lab"><label htmlFor="First_Name">First Name <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="First_Name" name="First Name" maxLength={40} /></div>
          </div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab"><label htmlFor="Last_Name">Last Name <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="Last_Name" name="Last Name" maxLength={80} /></div>
          </div>

          <div className="zcwf_row full-width">
            <div className="zcwf_col_lab"><label htmlFor="Email">Email <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" ftype="email" autoComplete="false" id="Email" name="Email" crmlabel="" maxLength={100} /></div>
          </div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab"><label htmlFor="Mobile">Mobile <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="Mobile" name="Mobile" maxLength={30} /></div>
          </div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab"><label htmlFor="Company">Company <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="Company" name="Company" maxLength={200} /></div>
          </div>

          <div className="zcwf_row full-width">
            <div className="zcwf_col_lab"><label htmlFor="LEADCF55">Company Size</label></div>
            <div className="zcwf_col_fld"><input type="text" id="LEADCF55" name="LEADCF55" maxLength={9} /></div>
          </div>

          <div className="zcwf_row full-width">
            <div className="zcwf_col_lab"><label htmlFor="LEADCF130">What are your main pain points?</label></div>
            <div className="zcwf_col_fld"><textarea id="LEADCF130" name="LEADCF130" rows={4} /></div>
          </div>

          <div className="zcwf_row full-width">
            <div className="zcwf_col_lab" id="reCaptchaField">Enter the Captcha <span style={{ color: 'red' }}>*</span></div>
            <div className="zcwf_col_fld">
              <input type="text" id="captchaField3209734000060076018" name="enterdigest" maxLength={10} />
              <div className="captcha-container">
                <img
                  id="imgid3209734000060076018"
                  src="https://crm.zoho.com/crm/CaptchaServlet?formId=8b3c8db641409c0ebcda7ba3f00e0c8933060493054704298a05d80ecc9f8259a45f38fab276ca4155b93508fb89c04b&grpid=526da2c328bc79c83950c5bf87e802cec1865ee9aadd0517b7187c7c9fb940b0"
                  alt="Captcha"
                />
                <a href="javascript:;" onClick={() => window.reloadImg3209734000060076018?.()} className="reload-link">Reload</a>
              </div>
            </div>
          </div>

          {/* Do not remove this code. */}
          <div className="zcwf_row wfrm_fld_dpNn">
            <div className="zcwf_col_lab"><label htmlFor="LEADCF48">Business Entity</label></div>
            <div className="zcwf_col_fld">
              <select className="zcwf_col_fld_slt" id="LEADCF48" name="LEADCF48" defaultValue="FI Digital US">
                <option value="-None-">-None-</option>
                <option value="Fristine Infotech">Fristine Infotech</option>
                <option value="FI Digital">FI Digital</option>
                <option value="DSV Corp">DSV Corp</option>
                <option value="FI Digital MEA">FI Digital MEA</option>
                <option value="FI Digital UK">FI Digital UK</option>
                <option value="FI Digital US">FI Digital US</option>
                <option value="FI Digital NZ">FI Digital NZ</option>
              </select>
            </div>
          </div>

          <div className="zcwf_row wfrm_fld_dpNn">
            <div className="zcwf_col_lab"><label htmlFor="Lead_Status">Lead Status</label></div>
            <div className="zcwf_col_fld">
              <select className="zcwf_col_fld_slt" id="Lead_Status" name="Lead Status" defaultValue="New Lead">
                <option value="-None-">-None-</option>
                <option value="Not Contacted">Not Contacted</option>
                <option value="Attempted to Contact">Attempted to Contact</option>
                <option value="Contact In Future">Contact In Future</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Junk Lead">Junk Lead</option>
                <option value="Lost Lead">Lost Lead</option>
                <option value="Unqualified">Unqualified</option>
                <option value="New Lead">New Lead</option>
              </select>
            </div>
          </div>

          <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" defaultValue="" />

          <div className="zcwf_row full-width">
            <div className="zcwf_col_fld">
              <input type="submit" id="formsubmit" className="formsubmit zcwf_button" value="Submit" />
            </div>
          </div>
        </form>
      </div>

      {/* Hidden iframe — receives the Zoho POST so the page does not reload */}
      <iframe name="zoho_submit_frame" style={{ display: 'none' }} />
      {/* Do not remove this code. */}
      <iframe name="captchaFrame" style={{ display: 'none' }} />

      <Script
        src="https://crm.zohopublic.com/crm/WebFormServlet?rid=b3458fba8d6e2e3f7521cf39297fcd47106044ab5b0b717ca7e3ee318c99f608"
        strategy="afterInteractive"
      />
      {/* Do not remove this --- Analytics Tracking code */}
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=6829ce7fb821addc1a40eea005227c2ae2d0cceaaf1b5813bc22373156177b6924d52c2f7f9d115c90a8767ebb38672fgid5f18724014afd0bed1ede1e1b43f9b5b6b3b325e6e820a83472e265d36309607gidad8c95271abe9deb188c916e6456fd9c0d21290b8bc4bc23a4bd0ca0a0270974gidcdb6a55d2dac4fccf95acae354959d1a6119091e9aec6c34e36007d760ca8ba4&tw=7dd103768b56b1e5149227fabf8cbf89251e79b9446edd9c415da5eea5971353"
        strategy="afterInteractive"
      />
    </>
  );
}
