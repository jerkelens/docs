+++
archetype = "post"
title = "Standaard: Kwetsbaarhedenmanagement"
menutitle = "Kwetsbaarhedenmanagement"
weight = 2
tags = ["kwetsbaarheden","vulnerabilities","scannen","disclosure","cve","termijnen"]
date = "2021-03-30"
+++

{{% notice style="note" title="Doelstelling" icon="bullseye" %}}
De ANWB gebruikt het kwetsbaarhedenmanagementproces (of ‘Vulnerability Management proces’) om digitale kwetsbaarheden te identificeren en adresseren. Het kwetsbaarhedenmanagementproces is complementair aan het patchmanagementproces, het één kan impact hebben op het ander. Door softwarematige kwetsbaarheden te identificeren, te evalueren en aan te pakken, kan de ANWB haar aanvalsoppervlak verkleinen om zo aanvallen helpen voorkomen en de schade beperken als zich een aanval voordoet.  
{{% /notice %}}

## Maatregelen
**VLN-01**: *"De uitgangspunten van het vulnerability management proces zijn verankerd in het bovenliggende L2 tactisch informatiebeveiligingsbeleid."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'CoE Information Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-02**: *"De ANWB heeft de technische mogelijkheden en bijpassend mandaat om alle systemen die op haar netwerk zijn aangesloten, te scannen op kwetsbaarheden. Dit betreft alles wat IP-technisch adresseerbaar is. Dit bestrijkt de gehele ANWB-omgeving, inclusief dochterondernemingen."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'CoE Information Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-03**: *"De ANWB heeft technische- en beleidsmaatregelen in plaats om alle ICT-apparatuur te scannen of toetsen zodra deze verbinding maakt met een netwerk van de ANWB."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'TLDE - Network & Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-04**: *"De ANWB scant alle informatiesystemen, in elke locatie, op kwetsbaarheden en noemt dit ‘vulnerability scans’. Voor systemen in eigen datacentra en op colocaties is kwetsbaarheden scanning eveneens van toepassing. Voor het scannen van cloud-intrastructuur en hosting bij derde partijen wordt scannen op kwetsbaarheden in de REH  gevraagd  aan de dienstleverancier."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'TLDE - Network & Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-05**: *"Naast vulnerability scans worden er vanuit het CoE Information Security ook pentests gedaan op diensten, infrastructuur en technische oplossingen. Deze testen onderscheiden zich van vulnerability assessments door de zeer beperkte scope van de scan en het moment waarop deze plaatsvindt. Dit is bij ingebruikname van een nieuwe dienst   , proces of applicatie, maar kan ook gebeuren bij een significante technische upgrade van een bestaande dienst, proces of applicatie."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'CoE Information Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-06**: *"De ANWB behoudt een compleet overzicht van alle kwetsbaarheden op alle ICT-middelen. Dit betekent dat ook de onderlinge relaties tussen data, verwerkingen en ICT-bedrijfsmiddelen wordt vastgelegd. Dit overzicht logt de CVE’s en bewaakt voortgang voor alle betrokken partijen  . Daar waar ICT-bedrijfsmiddelen van derden betrokken zijn, zijn hier passende SLA’s en afspraken met betrekking tot handelingsperspectieven voor."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'TLDE - Network & Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-07**: *"De verantwoordelijkheid van het verhelpen van een kwetsbaarheid ligt bij de desbetreffende systeemeigenaar   waar de kwetsbaarheid in wordt aangetroffen."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-08**: *"Indien een informatiesysteem een kwetsbaarheid bevat waarbij de dienstverlening (het technisch beheer) is uitbesteed aan een derde partij, dan is de ANWB systeemeigenaar de eigenaar van de kwetsbaarheid."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-09**: *"Indien een verhelpende update niet geïnstalleerd kan worden, of voor onevenredig grote nadelige bijeffecten zorgt, kan een update uitgesteld worden. Dit kan alleen als er mitigerende maatregelen genomen kunnen worden die het risico terugbrengen tot acceptabel niveau. Dit betreft een uitzonderingssituatie, waartoe de desbetreffende ISO (van het aandachtsgebied waar deze vraag uit voortkomt) kan beslissen, desnoods in overleg met de CISO."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'CoE Information Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-10**: *"Updates installeren om digitale kwetsbaarheden te verhelpen is altijd het doel  . Tijdelijke uitstel kan verleend worden als de systeemeigenaar daar een goede reden voor heeft en er akkoord is vanuit het CoE Information Security."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-11**: *"Naast de TLDE - ‘Network & Security’ practise, waar vanuit periodieke digitale kwetsbaarhedenanalyses worden uitgevoerd, moeten systeemeigenaren zelf ook op de hoogte blijven van eventuele of geduide kwetsbaarheden. Hierbij heeft elke systeemeigenaar de verantwoordelijkheid hier zelf een modus operandi in te vinden, denk bijvoorbeeld aan het abonneren op nieuwsbrieven van de leverancier van het informatiesysteem of het ICT-bedrijfsmiddel, of blogs van desbetreffende oplossingen. Dit geldt extra voor systeemeigenaren van informatiesystemen die (contract)technisch niet kunnen (of mogen) worden gescand."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-12**: *"De publicatie van kwetsbaarheden leidt tot updates, fixes en andere mitigaties. Dit is een top-down benadering van kwetsbaarheden management. Daarnaast kan de publicatie van updates, fixes of mitigaties ook leiden tot een bottom-up benadering van kwetsbaarheden management. Beiden kunnen leiden tot gelijke opvolging van de kwetsbaarheden. "*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-13**: *"Omdat TLDE - ‘Network & Security’ put uit verschillende threat intelligence bronnen is zij vaak als eerste op de hoogte van nieuwe kwetsbaarheden. TLDE - ‘Network & Security’ voert triage uit en definieert vervolgacties. Bij spoedacties, houden zij regie en dragen zij zorg voor adequate doorvoering van de fixes."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'TLDE - Network & Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-14**: *"De eerste opvolging van een aangetroffen  kwetsbaarheid is een risicoweging. Hiervoor gebruikt ANWB altijd de volgende formule:  
Risico = Exposure x Kwetsbaarheid x (Doelgroep + belang + classificatie)  
`Zie X voor meer info`  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-15**: *"De termijn waarin updates moeten worden toegepast is afhankelijk van de uitkomst van de risicoweging in `bijlage`. Zie kolom 'Actie'. Deze uitkomst is bindend en de regie hiervan ligt bij 'TLDE – Network & Security' "*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-16**: *"Wanneer een update met spoed doorgevoerd moet worden wat niet leidt tot dienstverstoring, wordt het PRIO-1 proces gehanteerd. 'TLDE - Network & Security' heeft hierbij de regie en moet dus aangehaakt zijn."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-17**: *"Wanneer een update moet spoed doorgevoerd moet worden wat leidt tot dienstverstoring, wordt het PRIO-1 proces gehanteerd. Afstemming met 'TLDE - Network & Security' is hierbij vereist. De lijnmanager zal een Business Continuity Management (BCM) afweging maken i.v.m. de dienstverstoring. Indien deze er niet uit komt, zal dit besproken worden tussen systeemeigenaar, leadership team en eventueel CIO. Ook blijft het CoE Information Security hier nauw bij betrokken."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-18**: *"Er wordt minimaal 1x per maand gerapporteerd over alle bevonden kwetsbaarheden met opvolgingsstatus en verantwoordelijke. Voor alle openstaande zaken moet op zijn minst een handelingsperspectief opgenomen worden. Dit rapport gaat naar de CISO."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'TLDE – Network & Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-19**: *"'TLDE – Network & Security' heeft een faciliterende rol wanneer bestanden voor de update achter een loginpagina zitten. Ook als rechten nodig zijn voor de installatie, faciliteert 'TLDE – Network & Security' hier ook bij."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'TLDE – Network & Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-20**: *"ANWB kanaliseert responsible disclosures middels security.txt op haar internet domeinnamen."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'Eigenaar ICT-bedrijfsmiddel'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

---

**VLN-21**: *"Standaard krijgen alle scrum-teams inzicht in voor hen relevante kwetsbaarheden via dashboarding, aangeleverd vanuit Rapid7 door CoE Information Security."*  
<br>{{%icon user %}} Uitvoeringsverantwoordelijke: 'TLDE – Network & Security'  
<sub>{{% icon "link" %}}&nbsp;&nbsp;ISO/IEC27001:2022-art. 5,6 & 7  | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1</sub>

## Uitwerking formule risicoweging
De door de ANWB gehanteerde formule is als volgt:  
&emsp;**Risico = Exposure x Kwetsbaarheid x (Doelgroep + Belang + Classificatie)**  

### Exposure
Exposure geeft inzicht in welke mate of vorm het systeem of applicatie is blootgesteld aan de buitenwereld.
* Externe exposure: **8**
* Interne exposure: **4**
* Geisoleerde interne exposure: **1**

### Kwetsbaarheid
De classificatie op basis van de CVSS (v3) methode. [^1]
* Critical (9.0 – 10):  **8**
* High (7.0 – 8.9): **6**
* Medium (4.0 – 6.9): **4**
* Low (0.1 – 3.9): **2**
* No Impact (0): **0**

### Doelgroep
Wat is de scope van de impact wanneer de kwetsbaarheid misbruikt wordt. Wie wordt er door geraakt.
* ANWB: **4**
* Business unit: **3**
* Afdeling: **2**
* Individu: **1**

### Belang
Wat is het belang van het informatiesysteem voor de organisatie.
* Hoog: **4**
* Laag: **2**

### Classificatie
De classificatie van het informatiesysteem.
* Boven baseline: **4**
* Baseline: **2**

Dit geeft een bepaalde waarde, die leidt tot handelingsperspectief:
| Risico score | Handelingsperspectief |
| :-- | :-- |
| 0 - 239 | De update wordt binnen een regulier onderhoudsvenster doorgevoerd |
| 240 - 499 | De update is binnen een maand doorgevoerd |
| 500 - 575 | De update is binnen een week doorgevoerd |
| 575 > | De update wordt direct doorgevoerd |

### Rekenvoorbeeld
Er is een kwetsbaarheid aangetoond in het centrale e-mailplatform van ANWB, met een kritieke CVSS score (9.8). Hieruit halen we:
| Criterium | Zwaarte | Verklaring |
| :-- | :--: | :-- |
| Exposure | 8 | E-mail is inherent internet-facing |
| Kwetsbaarheid | 8 | Een 9,8 CVSS valt in de kwetsbaarheidscategorie 'Critical' |
| Doelgroep | 4 | E-mail wordt gebruikt door de gehele organisatie |
| Belang | 4 | Het e-mailplatform kent een kritiek bedrijfsbelang |
| Classificatie | 4 | Het e-mailplatform is geclassificeerd als 'boven baseline' | 


Volgens de formule betekent dit een risico score van: 8 x 8 x (4 + 4 + 4) = ***768***; en deze is hoger dan de hoogste risico score en de update moet **dus direct doorgevoerd** worden.


[^1]: https://www.first.org/cvss/v3.0/specification-document