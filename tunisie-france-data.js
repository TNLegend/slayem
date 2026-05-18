// Entreprises présentes en Tunisie ET en France - Cybersécurité / IT Sécurité - Stages 2021-2026
const COMPANIES_TN_FR = [
// === BIG 4 / CABINETS CONSEIL ===
{n:"EY Tunisie",c:"Big4 / Cabinet Conseil",vtn:"Tunis",vfr:"Paris",t:"GE",s:"ey.com",sp:["Audit","GRC","Cyber Risk","Consulting"],sr:"LinkedIn, Indeed"},
{n:"Deloitte Tunisie",c:"Big4 / Cabinet Conseil",vtn:"Tunis",vfr:"Paris",t:"GE",s:"deloitte.com",sp:["Audit","Cyber Advisory","GRC","Forensics"],sr:"LinkedIn, Indeed"},
{n:"PwC Tunisie",c:"Big4 / Cabinet Conseil",vtn:"Tunis",vfr:"Paris",t:"GE",s:"pwc.fr",sp:["Audit","Cyber","Privacy","GRC"],sr:"LinkedIn, Indeed"},
{n:"KPMG Tunisie",c:"Big4 / Cabinet Conseil",vtn:"Tunis",vfr:"Paris",t:"GE",s:"kpmg.fr",sp:["Audit","GRC","Cloud Security"],sr:"LinkedIn, Indeed"},
{n:"Mazars Tunisie (Forvis Mazars)",c:"Big4 / Cabinet Conseil",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"forvismazars.com",sp:["Audit","GRC","Cyber"],sr:"LinkedIn"},
{n:"Grant Thornton Tunisie",c:"Big4 / Cabinet Conseil",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"grantthornton.fr",sp:["Audit","GRC","Risk"],sr:"LinkedIn"},
{n:"BearingPoint (Tunisie)",c:"Big4 / Cabinet Conseil",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"bearingpoint.com",sp:["Consulting","GRC","Transformation"],sr:"LinkedIn"},

// === ESN / CONSULTING IT ===
{n:"Sopra Steria (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"soprasteria.com",sp:["Consulting","IAM","SOC","Intégration","Cybersécurité"],sr:"LinkedIn, Indeed, WTTJ"},
{n:"Sopra Banking Software (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"soprabanking.com",sp:["FinSec","AppSec","Banking"],sr:"LinkedIn"},
{n:"Capgemini (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"capgemini.com",sp:["Consulting","SOC","Cloud Security","IAM"],sr:"LinkedIn, Indeed"},
{n:"Atos / Eviden (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"eviden.com",sp:["SOC","Cloud Security","IAM","HPC"],sr:"LinkedIn, Indeed"},
{n:"CGI Tunisie",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"cgi.com",sp:["Consulting","IAM","SOC","Intégration"],sr:"LinkedIn"},
{n:"Talan (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"talan.com",sp:["Cybersécurité","Cloud","Data","Consulting"],sr:"LinkedIn, WTTJ"},
{n:"Devoteam (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"devoteam.com",sp:["Cloud Security","IAM","GRC"],sr:"LinkedIn"},
{n:"Accenture (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"accenture.com",sp:["Consulting","Security Strategy","Cloud"],sr:"LinkedIn"},
{n:"Sofrecom (Orange - Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"sofrecom.com",sp:["Telecom Security","Network","SOC","Consulting"],sr:"LinkedIn"},
{n:"NTT Data (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"nttdata.com",sp:["MSSP","SOC","Consulting"],sr:"LinkedIn"},
{n:"Inetum (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"inetum.com",sp:["Consulting","IAM","SOC"],sr:"LinkedIn"},
{n:"Aubay (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"aubay.com",sp:["Consulting","Finance","Sécurité"],sr:"LinkedIn"},
{n:"SII Group (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"sii-group.com",sp:["Consulting","Testing","Cyber"],sr:"LinkedIn"},
{n:"Alten (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"alten.com",sp:["Consulting","OT Security","Défense"],sr:"LinkedIn"},
{n:"Assystem (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"assystem.com",sp:["Nuclear Security","OT","Engineering"],sr:"LinkedIn"},
{n:"Smile (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"smile.eu",sp:["Open Source","DevSecOps","Cloud"],sr:"LinkedIn"},
{n:"Keyrus / Opsky (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"keyrus.com",sp:["Cybersécurité","Infra","Cloud Security","GRC"],sr:"LinkedIn"},
{n:"Linedata (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"linedata.com",sp:["FinSec","AppSec","Cloud"],sr:"LinkedIn"},
{n:"Open (Groupe) Tunisie",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"open.global",sp:["Consulting","Cloud","Sécurité"],sr:"LinkedIn"},
{n:"Amaris / Mantu (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"amaris.com",sp:["Consulting","IT Security","Cloud"],sr:"LinkedIn"},
{n:"Scalian (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"scalian.com",sp:["OT Security","IoT","Consulting"],sr:"LinkedIn"},

// === TELECOM / OPÉRATEURS ===
{n:"Orange Tunisie",c:"Telecom / Cloud",vtn:"Tunis",vfr:"Paris",t:"GE",s:"orange.tn",sp:["Network Security","SOC","Telecom","5G"],sr:"LinkedIn"},
{n:"Orange Cyberdefense (via Sofrecom TN)",c:"Telecom / Cloud",vtn:"Tunis",vfr:"Paris",t:"GE",s:"orangecyberdefense.com",sp:["SOC","Pentest","MSSP","CTI"],sr:"LinkedIn"},

// === ENTREPRISES INDUSTRIELLES AVEC ÉQUIPE CYBER ===
{n:"Valeo (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis / Sousse",vfr:"Paris",t:"GE",s:"valeo.com",sp:["Automotive Security","OT Security","Embedded","CSMS"],sr:"LinkedIn, Indeed"},
{n:"Thales (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"thalesgroup.com",sp:["Défense","Chiffrement","IAM","SOC"],sr:"LinkedIn"},
{n:"Airbus (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Toulouse",t:"GE",s:"airbus.com",sp:["SOC","OT Security","Aviation"],sr:"LinkedIn"},
{n:"Safran (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"safran-group.com",sp:["OT Security","IAM","Défense"],sr:"LinkedIn"},
{n:"STMicroelectronics (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Grenoble",t:"GE",s:"st.com",sp:["Embedded Security","Chip","IoT"],sr:"LinkedIn"},
{n:"Schneider Electric (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"se.com",sp:["OT Security","SCADA","IoT"],sr:"LinkedIn"},
{n:"Leoni (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Sousse",vfr:"Paris",t:"GE",s:"leoni.com",sp:["Automotive Security","OT","Network"],sr:"LinkedIn"},
{n:"Actia (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Toulouse",t:"ETI",s:"actia.com",sp:["Automotive Security","Embedded","OT"],sr:"LinkedIn"},
{n:"Groupe Seb (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Lyon",t:"GE",s:"groupeseb.com",sp:["IoT Security","Cloud","OT"],sr:"LinkedIn"},
{n:"Sagemcom (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"sagemcom.com",sp:["IoT Security","Embedded","Telecom"],sr:"LinkedIn"},
{n:"Zodiac Aerospace / Safran (TN)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"safran-group.com",sp:["Aviation Security","Embedded"],sr:"LinkedIn"},

// === ENTREPRISES TUNISIENNES avec filiale/activité en France ===
{n:"Vermeg",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"vermeg.com",sp:["FinSec","Regulatory","Banking Security","Compliance"],sr:"LinkedIn, WTTJ"},
{n:"Telnet Holding",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"groupe-telnet.com",sp:["Embedded Security","Telecom","Engineering","R&D"],sr:"LinkedIn"},
{n:"Proxym Group",c:"ESN / Consulting IT",vtn:"Sousse",vfr:"Paris",t:"PME",s:"proxym-group.com",sp:["AppSec","FinTech Security","Mobile"],sr:"LinkedIn"},
{n:"RBK Group",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"PME",s:"rbk.tn",sp:["Consulting","Infra","Security"],sr:"LinkedIn"},
{n:"Advyteam Consulting",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris (Issy)",t:"PME",s:"advyteam.com",sp:["IT Audit","Security Consulting","GRC"],sr:"LinkedIn"},
{n:"Cynoia",c:"Pure Player Cyber",vtn:"Tunis",vfr:"Paris",t:"PME",s:"cynoia.com",sp:["Pentest","Audit","SOC","GRC"],sr:"LinkedIn"},
{n:"Tunisian Cloud",c:"Pure Player Cyber",vtn:"Tunis",vfr:"Paris",t:"PME",s:"tunisiancloud.com",sp:["SOC","Audit","Formation","Fortinet"],sr:"LinkedIn"},
{n:"SecurIT Valley",c:"Pure Player Cyber",vtn:"Tunis",vfr:"Paris",t:"TPE",s:"securitvalley.com",sp:["Pentest","Audit","GRC","Formation"],sr:"LinkedIn"},
{n:"ESET Tunisie (Partenaire)",c:"Intégrateur / MSSP",vtn:"Tunis",vfr:"Lyon",t:"PME",s:"eset.com",sp:["Endpoint","Antivirus","MDR"],sr:"LinkedIn"},
{n:"Neoledge / Archimed (Tunisie)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Toulouse",t:"PME",s:"neoledge.com",sp:["Document Security","GED","Compliance"],sr:"LinkedIn"},
{n:"MediaNet (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"PME",s:"medianet.tn",sp:["Web Security","DevSecOps","Mobile"],sr:"LinkedIn"},

// === BANQUES / FINANCE (présence France & Tunisie) ===
{n:"Société Générale (Tunisie - UIB)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"societegenerale.com",sp:["SOC","FinSec","Fraud","IAM"],sr:"LinkedIn, Indeed"},
{n:"BNP Paribas (UBCI Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"bnpparibas.com",sp:["SOC","Fraud","IAM","GRC"],sr:"LinkedIn, Indeed"},
{n:"Groupe BPCE (BTK Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"groupebpce.com",sp:["FinSec","SOC","IAM"],sr:"LinkedIn"},
{n:"AXA Assurances (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"axa.com",sp:["SOC","GRC","Cloud Security"],sr:"LinkedIn"},
{n:"Groupama (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"groupama.com",sp:["SOC","GRC"],sr:"LinkedIn"},

// === ÉDITEURS / SOLUTIONS (présence Tunisie & France) ===
{n:"Fortinet (Partenaires Tunisie)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"GE",s:"fortinet.com",sp:["Firewall","SD-WAN","SASE"],sr:"LinkedIn"},
{n:"Sophos (Partenaires Tunisie)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"GE",s:"sophos.com",sp:["Endpoint","Firewall","MDR"],sr:"LinkedIn"},
{n:"Check Point (Partenaires TN)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"GE",s:"checkpoint.com",sp:["Firewall","Cloud Security","Endpoint"],sr:"LinkedIn"},
{n:"Trend Micro (Partenaires TN)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"GE",s:"trendmicro.com",sp:["Endpoint","Cloud","XDR"],sr:"LinkedIn"},

// === AUTRES MULTINATIONALES IT avec activité cyber en Tunisie ===
{n:"Expleo (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"expleo.com",sp:["Testing","OT Security","Quality"],sr:"LinkedIn"},
{n:"Wipro (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"wipro.com",sp:["MSSP","Consulting","Cloud"],sr:"LinkedIn"},
{n:"DXC Technology (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"dxc.com",sp:["MSSP","Infra Security","Cloud"],sr:"LinkedIn"},
{n:"Infosys (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"infosys.com",sp:["Consulting","MSSP","Cloud"],sr:"LinkedIn"},
{n:"Cognizant (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"GE",s:"cognizant.com",sp:["Consulting","Cloud Security","AppSec"],sr:"LinkedIn"},
{n:"IBM (Tunisie)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"GE",s:"ibm.com",sp:["SIEM","SOAR","IAM","Consulting"],sr:"LinkedIn"},
{n:"Microsoft (Tunisie)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"GE",s:"microsoft.com",sp:["Cloud Security","Identity","XDR"],sr:"LinkedIn"},
{n:"Cisco (Partenaires Tunisie)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"GE",s:"cisco.com",sp:["Network Security","XDR","SASE"],sr:"LinkedIn"},
{n:"Palo Alto Networks (Partenaires TN)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"GE",s:"paloaltonetworks.com",sp:["Firewall","XDR","Cloud Security"],sr:"LinkedIn"},

// === INTÉGRATEURS / MSSP Tunisie-France ===
{n:"Axians (Tunisie - Vinci)",c:"Intégrateur / MSSP",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"axians.com",sp:["SOC","Intégration","Network Security"],sr:"LinkedIn"},
{n:"Spie ICS (Tunisie)",c:"Intégrateur / MSSP",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"spie-ics.com",sp:["Intégration","MSSP","Cloud"],sr:"LinkedIn"},
{n:"Dataprotect (Tunisie/France)",c:"Pure Player Cyber",vtn:"Tunis",vfr:"Paris",t:"PME",s:"dataprotect.ma",sp:["SOC","Pentest","GRC","Audit"],sr:"LinkedIn"},
{n:"NSE (Network Systems Engineering)",c:"Intégrateur / MSSP",vtn:"Tunis",vfr:"Paris",t:"PME",s:"nse.tn",sp:["Intégration","Firewall","SOC"],sr:"LinkedIn"},
{n:"ITS (Intelligent Technology Solutions)",c:"Intégrateur / MSSP",vtn:"Tunis",vfr:"Paris",t:"PME",s:"its.tn",sp:["Intégration","Security","Cloud"],sr:"LinkedIn"},

// === FORMATION / ÉCOLE Cyber (Tunisie - France) ===
{n:"PECB (Tunisie/France)",c:"Formation / Certification",vtn:"Tunis",vfr:"Paris",t:"PME",s:"pecb.com",sp:["ISO 27001","Formation","Certification"],sr:"LinkedIn"},
{n:"EC-Council (Partenaires TN)",c:"Formation / Certification",vtn:"Tunis",vfr:"Paris",t:"PME",s:"eccouncil.org",sp:["CEH","Formation","Pentest"],sr:"LinkedIn"},

// === AUTRES ESN Nearshore Tunisie -> France ===
{n:"Satoripop",c:"ESN / Consulting IT",vtn:"Sousse",vfr:"Paris",t:"PME",s:"satoripop.com",sp:["DevSecOps","Web Security","Agile"],sr:"LinkedIn"},
{n:"Wevioo (ex-Oxia)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"PME",s:"wevioo.com",sp:["Consulting","Cloud","Digital Security"],sr:"LinkedIn"},
{n:"Soprema Digital / Sopromed",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Strasbourg",t:"PME",s:"soprema.com",sp:["IT Security","Cloud","Infra"],sr:"LinkedIn"},
{n:"Tinubu (Tunisie)",c:"Éditeur / Solutions",vtn:"Tunis",vfr:"Paris",t:"PME",s:"tinubu.com",sp:["FinSec","Fraud","Insurance Tech"],sr:"LinkedIn"},
{n:"Oxia (Tunisie)",c:"ESN / Consulting IT",vtn:"Tunis",vfr:"Paris",t:"PME",s:"oxia-group.com",sp:["Cloud","Infra Security","Consulting"],sr:"LinkedIn"},
{n:"BIAT (SI Sécurité)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"biat.com.tn",sp:["FinSec","SOC","IAM","Fraud"],sr:"LinkedIn"},
{n:"Attijari Bank (Tunisie - filiale Attijariwafa)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"attijaribank.com.tn",sp:["FinSec","SOC","Fraud"],sr:"LinkedIn"},
{n:"Amen Bank (SI Sécurité)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"ETI",s:"amenbank.com.tn",sp:["FinSec","SOC","IAM"],sr:"LinkedIn"},
{n:"Tunisie Telecom (Cyber)",c:"Telecom / Cloud",vtn:"Tunis",vfr:"Paris",t:"GE",s:"tunisietelecom.tn",sp:["Network Security","SOC","Telecom"],sr:"LinkedIn"},
{n:"Ooredoo Tunisie (Cyber)",c:"Telecom / Cloud",vtn:"Tunis",vfr:"Paris",t:"GE",s:"ooredoo.tn",sp:["Network Security","SOC","Mobile"],sr:"LinkedIn"},
{n:"Totalenergies (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"totalenergies.com",sp:["OT Security","SCADA","SOC"],sr:"LinkedIn"},
{n:"Engie (Tunisie)",c:"Entreprise avec équipe cyber",vtn:"Tunis",vfr:"Paris",t:"GE",s:"engie.com",sp:["OT Security","SOC","SCADA"],sr:"LinkedIn"},
];
