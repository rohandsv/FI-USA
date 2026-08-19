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
    window.reloadImg3209734000060076018 = function () {
      var captcha = document.getElementById('imgid3209734000060076018');
      if (!captcha) return;
      if (captcha.src.indexOf('&d') !== -1) {
        captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
      } else {
        captcha.src = captcha.src + '&d' + new Date().getTime();
      }
    };

    window.validateEmail3209734000060076018 = function () {
      var form = document.forms['WebToLeads3209734000060076018'];
      var emailFld = form.querySelectorAll('[ftype=email]');
      for (var i = 0; i < emailFld.length; i++) {
        var emailVal = emailFld[i].value;
        if (emailVal.trim().length !== 0) {
          var atpos = emailVal.indexOf('@');
          var dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Please enter a valid email address.');
            emailFld[i].focus();
            return false;
          }
        }
      }
      return true;
    };

    window.trackVisitor3209734000060076018 = function () {
      try {
        var zoho = window.$zoho;
        if (zoho && zoho.salesiq) {
          var LDTuvidObj = document.forms['WebToLeads3209734000060076018']?.['LDTuvid'];
          if (LDTuvidObj) {
            LDTuvidObj.value = zoho.salesiq.visitor.uniqueid();
          }
        }
      } catch (e) {}
    };

    window.checkMandatory3209734000060076018 = function () {
      var mndFileds = ['Company', 'First Name', 'Last Name', 'Email', 'Mobile'];
      var fldLangVal = ['Company', 'First Name', 'Last Name', 'Email', 'Mobile'];
      for (var i = 0; i < mndFileds.length; i++) {
        var fieldObj = document.forms['WebToLeads3209734000060076018'][mndFileds[i]];
        if (fieldObj) {
          if (fieldObj.value.trim().length === 0) {
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          }
        }
      }
      if (!window.validateEmail3209734000060076018()) return false;
      window.trackVisitor3209734000060076018();
      document.getElementById('formsubmit').disabled = true;
      document.getElementById('formsubmit').value = 'Sending...';
      return true;
    };

    window.tooltipShow3209734000060076018 = function (el) {
      var tooltip = el.nextElementSibling;
      var tooltipDisplay = tooltip.style.display;
      if (tooltipDisplay === 'none') {
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
      delete window.validateEmail3209734000060076018;
      delete window.trackVisitor3209734000060076018;
      delete window.checkMandatory3209734000060076018;
      delete window.tooltipShow3209734000060076018;
    };
  }, []);

  const handleSubmit = (e) => {
    if (!window.checkMandatory3209734000060076018()) {
      e.preventDefault();
      return;
    }
    // Validation passed — form will POST into the hidden iframe.
    // Show thank you after a short delay to let the POST fire.
    if (onSubmitted) {
      setTimeout(onSubmitted, 500);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FORM_CSS }} />
      <div id="crmWebToEntityForm">
        <form
          id="webform3209734000060076018"
          action="https://crm.zoho.com/crm/WebToLeadForm"
          name="WebToLeads3209734000060076018"
          method="POST"
          target="zoho_submit_frame"
          onSubmit={handleSubmit}
          acceptCharset="UTF-8"
        >
          <input type="text" style={{ display: 'none' }} name="xnQsjsdp" defaultValue="7c42a34e0f527335db665511efdcca866a0206693114e239cf115370bb3804e9" readOnly />
          <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
          <input type="text" style={{ display: 'none' }} name="xmIwtLD" defaultValue="afe609924d7adaa602ad53109e77a1de992b33c001919f526e0443c8e334d775d1cc34036a59aea9537c15d7b7d981ae" readOnly />
          <input type="text" style={{ display: 'none' }} name="actionType" defaultValue="TGVhZHM=" readOnly />
          <input type="text" style={{ display: 'none' }} name="returnURL" defaultValue="about:blank" readOnly />
          <input type="text" style={{ display: 'none' }} id="ldeskuid" name="ldeskuid" defaultValue="" />
          <input type="text" style={{ display: 'none' }} id="LDTuvid" name="LDTuvid" defaultValue="" />

          <div className="zcwf_row">
            <div className="zcwf_col_lab"><label htmlFor="First_Name">First Name <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="First_Name" name="First Name" maxLength={40} required /></div>
          </div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab"><label htmlFor="Last_Name">Last Name <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="Last_Name" name="Last Name" maxLength={80} required /></div>
          </div>

          <div className="zcwf_row full-width">
            <div className="zcwf_col_lab"><label htmlFor="Email">Email <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" ftype="email" id="Email" name="Email" maxLength={100} required /></div>
          </div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab"><label htmlFor="Mobile">Mobile <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="Mobile" name="Mobile" maxLength={30} required /></div>
          </div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab"><label htmlFor="Company">Company <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="Company" name="Company" maxLength={200} required /></div>
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
              <input type="text" id="captchaField3209734000060076018" name="enterdigest" maxLength={10} required />
              <div className="captcha-container">
                <img
                  id="imgid3209734000060076018"
                  src="https://crm.zoho.com/crm/CaptchaServlet?formId=afe609924d7adaa602ad53109e77a1de992b33c001919f526e0443c8e334d775d1cc34036a59aea9537c15d7b7d981ae&grpid=7c42a34e0f527335db665511efdcca866a0206693114e239cf115370bb3804e9"
                  alt="Captcha"
                />
                <a href="javascript:;" onClick={() => window.reloadImg3209734000060076018?.()} className="reload-link">Reload</a>
              </div>
            </div>
          </div>

          <div className="zcwf_row wfrm_fld_dpNn">
            <div className="zcwf_col_lab"><label htmlFor="LEADCF48">Business Entity</label></div>
            <div className="zcwf_col_fld">
              <select id="LEADCF48" name="LEADCF48" defaultValue="FI Digital US">
                <option value="-None-">-None-</option>
                <option value="Fristine Infotech">Fristine Infotech</option>
                <option value="FI Digital">FI Digital</option>
                <option value="DSV Corp">DSV Corp</option>
                <option value="FI Digital MEA">FI Digital MEA</option>
                <option value="FI Digital UK">FI Digital UK</option>
                <option value="FI Digital US">FI Digital US</option>
                <option value="FI Digital NZ">FI Digital NZ</option>
                <option value="DSV Consulting">DSV Consulting</option>
              </select>
            </div>
          </div>

          <div className="zcwf_row wfrm_fld_dpNn">
            <div className="zcwf_col_lab"><label htmlFor="Lead_Status">Lead Status</label></div>
            <div className="zcwf_col_fld">
              <select id="Lead_Status" name="Lead Status" defaultValue="New Lead">
                <option value="-None-">-None-</option>
                <option value="Not Contacted">Not Contacted</option>
                <option value="New Lead">New Lead</option>
              </select>
            </div>
          </div>

          <input type="hidden" name="aG9uZXlwb3Q" defaultValue="" />

          <div className="zcwf_row full-width">
            <div className="zcwf_col_fld">
              <input type="submit" id="formsubmit" className="formsubmit zcwf_button" value="Submit" />
            </div>
          </div>
        </form>
      </div>

      {/* Hidden iframe — receives the Zoho POST so the page does not reload */}
      <iframe name="zoho_submit_frame" style={{ display: 'none' }} />

      <Script
        src="https://crm.zohopublic.com/crm/WebFormServlet?rid=b3458fba8d6e2e3f7521cf39297fcd47106044ab5b0b717ca7e3ee318c99f608"
        strategy="afterInteractive"
      />
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=b8b59fb296872dbb85ac4db260342d6721c911cd4c01a49d4f50e5b73da1a564d28d23835ae9b7f9021b1eb17542fd2agid56729dee31f77783b34acff87dd30e24f823eef8634047e4aef9c7f9d0fdf2b4gidc3b34b6f75f7365c60b7c7285f3dc2dc61a8a22c962d3ecc6861cdf2371b5c5bgid9305017eb9737e7842c6dbc97a07c1b00d30b74e572e0c93749e504bd49d2f1b&tw=3d83ec64716c7f8cdc952c6c4ab28af1cc2bab909088b7334046b846a9942cd1"
        strategy="afterInteractive"
      />
    </>
  );
}
