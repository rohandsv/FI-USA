const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
	<style>
		:root {
			--primary: #0279FF;
			--primary-hover: #006be4;
			--text: #1a1a1a;
			--text-secondary: #4b5563;
			--bg: #ffffff;
			--input-bg: #f9fafb;
			--input-border: #e5e7eb;
			--error: #ef4444;
		}

		:root.dark-mode {
			--text: #f3f4f6;
			--text-secondary: #9ca3af;
			--bg: transparent;
			--input-bg: #111827;
			--input-border: #374151;
		}

		html, body {
			margin: 0;
			padding: 0;
			background: transparent;
			font-family: 'Plus Jakarta Sans', sans-serif;
			color: var(--text);
			overflow-x: hidden;
		}

		#crmWebToEntityForm {
			width: 100%;
			max-width: 100%;
			margin: 0 auto;
			padding: 2px;
			box-sizing: border-box;
		}

		.zcwf_title {
			display: none;
		}

		.zcwf_row {
			margin-bottom: 20px;
			display: flex;
			flex-direction: column;
		}

		.zcwf_col_lab {
			font-size: 14px;
			font-weight: 600;
			margin-bottom: 8px;
			color: var(--text);
		}

		.zcwf_col_fld input[type=text], 
		.zcwf_col_fld input[type=email], 
		.zcwf_col_fld textarea,
		.zcwf_col_fld select {
			width: 100%;
			padding: 12px 16px;
			border: 1px solid var(--input-border);
			border-radius: 8px;
			background-color: var(--input-bg);
			color: var(--text);
			font-family: inherit;
			font-size: 15px;
			box-sizing: border-box;
			transition: all 0.2s ease;
		}

		.zcwf_col_fld input:focus, 
		.zcwf_col_fld textarea:focus,
		.zcwf_col_fld select:focus {
			outline: none;
			border-color: var(--primary);
			box-shadow: 0 0 0 3px rgba(2, 121, 255, 0.1);
		}

		.formsubmit.zcwf_button {
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

		.formsubmit.zcwf_button:hover {
			transform: translateY(-1px);
			box-shadow: 0 4px 12px rgba(2, 121, 255, 0.3);
		}

		.formsubmit.zcwf_button:disabled {
			opacity: 0.7;
			cursor: not-allowed;
		}

		.captcha-container {
			display: flex;
			align-items: center;
			gap: 15px;
			margin-top: 10px;
		}

		#imgid3209734000060076018 {
			border-radius: 6px;
			border: 1px solid var(--input-border);
			height: 45px;
		}

		.reload-link {
			color: var(--primary);
			text-decoration: none;
			font-size: 14px;
			font-weight: 500;
		}

		.wfrm_fld_dpNn {
			display: none;
		}

		@media (min-width: 640px) {
			#crmWebToEntityForm form {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 20px;
			}
			.full-width {
				grid-column: span 2;
			}
		}
	</style>
</head>
<body>
	<div id='crmWebToEntityForm'>
		<form id='webform3209734000060076018' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads3209734000060076018' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory3209734000060076018()' accept-charset='UTF-8'>
			<input type='text' style='display:none;' name='xnQsjsdp' value='7c42a34e0f527335db665511efdcca866a0206693114e239cf115370bb3804e9'>
			<input type='hidden' name='zc_gad' id='zc_gad' value=''>
			<input type='text' style='display:none;' name='xmIwtLD' value='afe609924d7adaa602ad53109e77a1de992b33c001919f526e0443c8e334d775d1cc34036a59aea9537c15d7b7d981ae'>
			<input type='text' style='display:none;' name='actionType' value='TGVhZHM='>
			<input type='text' style='display:none;' name='returnURL' value='https://www.fidigital.co/contact'>
			<input type='text' style='display:none;' id='ldeskuid' name='ldeskuid'>
			<input type='text' style='display:none;' id='LDTuvid' name='LDTuvid'>

			<div class='zcwf_row'>
				<div class='zcwf_col_lab'><label for='First_Name'>First Name <span style='color:red;'>*</span></label></div>
				<div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40' required></div>
			</div>

			<div class='zcwf_row'>
				<div class='zcwf_col_lab'><label for='Last_Name'>Last Name <span style='color:red;'>*</span></label></div>
				<div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80' required></div>
			</div>

			<div class='zcwf_row full-width'>
				<div class='zcwf_col_lab'><label for='Email'>Email <span style='color:red;'>*</span></label></div>
				<div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100' required></div>
			</div>

			<div class='zcwf_row'>
				<div class='zcwf_col_lab'><label for='Mobile'>Mobile <span style='color:red;'>*</span></label></div>
				<div class='zcwf_col_fld'><input type='text' id='Mobile' name='Mobile' maxlength='30' required></div>
			</div>

			<div class='zcwf_row'>
				<div class='zcwf_col_lab'><label for='Company'>Company <span style='color:red;'>*</span></label></div>
				<div class='zcwf_col_fld'><input type='text' id='Company' name='Company' maxlength='200' required></div>
			</div>

			<div class='zcwf_row full-width'>
				<div class='zcwf_col_lab'><label for='LEADCF55'>Company Size</label></div>
				<div class='zcwf_col_fld'><input type='text' id='LEADCF55' name='LEADCF55' maxlength='9'></div>
			</div>

			<div class='zcwf_row full-width'>
				<div class='zcwf_col_lab'><label for='LEADCF130'>What are your main pain points?</label></div>
				<div class='zcwf_col_fld'><textarea id='LEADCF130' name='LEADCF130' rows='4'></textarea></div>
			</div>

			<div class='zcwf_row full-width'>
				<div class='zcwf_col_lab' id='reCaptchaField'>Enter the Captcha <span style='color:red;'>*</span></div>
				<div class='zcwf_col_fld'>
					<input type='text' id='captchaField3209734000060076018' name='enterdigest' maxlength='10' required>
					<div class='captcha-container'>
						<img id='imgid3209734000060076018' src='https://crm.zoho.com/crm/CaptchaServlet?formId=afe609924d7adaa602ad53109e77a1de992b33c001919f526e0443c8e334d775d1cc34036a59aea9537c15d7b7d981ae&grpid=7c42a34e0f527335db665511efdcca866a0206693114e239cf115370bb3804e9'>
						<a href='javascript:;' onclick='reloadImg3209734000060076018();' class='reload-link'>Reload</a>
					</div>
				</div>
			</div>

			<div class='zcwf_row wfrm_fld_dpNn'>
				<div class='zcwf_col_lab'><label for='LEADCF48'>Business Entity</label></div>
				<div class='zcwf_col_fld'>
					<select id='LEADCF48' name='LEADCF48'>
						<option value='-None-'>-None-</option>
						<option value='Fristine Infotech'>Fristine Infotech</option>
						<option value='FI Digital'>FI Digital</option>
						<option value='DSV Corp'>DSV Corp</option>
						<option value='FI Digital MEA'>FI Digital MEA</option>
						<option value='FI Digital UK'>FI Digital UK</option>
						<option selected value='FI Digital US'>FI Digital US</option>
						<option value='FI Digital NZ'>FI Digital NZ</option>
						<option value='DSV Consulting'>DSV Consulting</option>
					</select>
				</div>
			</div>

			<div class='zcwf_row wfrm_fld_dpNn'>
				<div class='zcwf_col_lab'><label for='Lead_Status'>Lead Status</label></div>
				<div class='zcwf_col_fld'>
					<select id='Lead_Status' name='Lead Status'>
						<option value='-None-'>-None-</option>
						<option value='Not Contacted'>Not Contacted</option>
						<option selected value='New Lead'>New Lead</option>
					</select>
				</div>
			</div>

			<input type='hidden' name='aG9uZXlwb3Q' value=''/>

			<div class='zcwf_row full-width'>
				<div class='zcwf_col_fld'>
					<input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit'>
				</div>
			</div>
		</form>
	</div>

	<script>
		function syncTheme() {
			try {
				const isDark = window.parent.document.documentElement.getAttribute('data-theme') === 'dark' || 
							 window.parent.document.body.classList.contains('dark');
				if (isDark) {
					document.documentElement.classList.add('dark-mode');
				} else {
					document.documentElement.classList.remove('dark-mode');
				}
			} catch (e) {}
		}

		function reportHeight() {
			try {
				const height = document.getElementById('crmWebToEntityForm').offsetHeight;
				window.parent.postMessage({ type: 'zoho-resize', height: height }, '*');
			} catch (e) {}
		}

		window.addEventListener('DOMContentLoaded', () => {
			syncTheme();
			setInterval(syncTheme, 500);
			setTimeout(reportHeight, 500);
			setInterval(reportHeight, 2000);
		});

		function reloadImg3209734000060076018() {
			var captcha = document.getElementById('imgid3209734000060076018');
			if (captcha.src.indexOf('&d') !== -1) {
				captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
			} else {
				captcha.src = captcha.src + '&d' + new Date().getTime();
			}
		}

		function validateEmail3209734000060076018() {
			var form = document.forms['WebToLeads3209734000060076018'];
			var emailFld = form.querySelectorAll('[ftype=email]');
			for (var i = 0; i < emailFld.length; i++) {
				var emailVal = emailFld[i].value;
				if (emailVal.trim().length != 0) {
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
		}

		function checkMandatory3209734000060076018() {
			var mndFileds = ['Company', 'First Name', 'Last Name', 'Email', 'Mobile'];
			var fldLangVal = ['Company', 'First Name', 'Last Name', 'Email', 'Mobile'];
			for (var i = 0; i < mndFileds.length; i++) {
				var fieldObj = document.forms['WebToLeads3209734000060076018'][mndFileds[i]];
				if (fieldObj) {
					if (fieldObj.value.trim().length == 0) {
						alert(fldLangVal[i] + ' cannot be empty.');
						fieldObj.focus();
						return false;
					}
				}
			}
			if (!validateEmail3209734000060076018()) return false;
			
			trackVisitor3209734000060076018();
			document.getElementById('formsubmit').disabled = true;
			document.getElementById('formsubmit').value = 'Sending...';
			return true;
		}

		function tooltipShow3209734000060076018(el){
			var tooltip = el.nextElementSibling;
			var tooltipDisplay = tooltip.style.display;
			if (tooltipDisplay == 'none') {
				var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
				for (i = 0; i < allTooltip.length; i++ ) {
					allTooltip[i].style.display = 'none';
				}
				tooltip.style.display = 'block';
			} else {
				tooltip.style.display = 'none';
			}
		}

		function trackVisitor3209734000060076018() {
			try {
				var zoho = window.$zoho || (window.parent && window.parent.$zoho);
				if (zoho && zoho.salesiq) {
					var LDTuvidObj = document.forms['WebToLeads3209734000060076018']?.['LDTuvid'];
					if (LDTuvidObj) {
						LDTuvidObj.value = zoho.salesiq.visitor.uniqueid();
					}
				}
			} catch (e) {}
		}
	</script>


	<script src='https://crm.zohopublic.com/crm/WebFormServlet?rid=b3458fba8d6e2e3f7521cf39297fcd47106044ab5b0b717ca7e3ee318c99f608'></script>
	<script id='wf_anal' src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=b8b59fb296872dbb85ac4db260342d6721c911cd4c01a49d4f50e5b73da1a564d28d23835ae9b7f9021b1eb17542fd2agid56729dee31f77783b34acff87dd30e24f823eef8634047e4aef9c7f9d0fdf2b4gidc3b34b6f75f7365c60b7c7285f3dc2dc61a8a22c962d3ecc6861cdf2371b5c5bgid9305017eb9737e7842c6dbc97a07c1b00d30b74e572e0c93749e504bd49d2f1b&tw=3d83ec64716c7f8cdc952c6c4ab28af1cc2bab909088b7334046b846a9942cd1'></script>
</body>
</html>`;

export async function GET() {
	return new Response(HTML, {
		headers: {
			'Content-Type': 'text/html; charset=utf-8',
			'Content-Security-Policy': "frame-ancestors 'self'",
		},
	});
}
