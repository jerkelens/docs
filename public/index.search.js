var relearn_search_index = [
  {
    "content": "\rDoelstelling\rZorgen voor correct en doeltreffend gebruik van cryptografie om de vertrouwelijkheid, authenticiteit en/of integriteit van informatie te beschermen.\nRelaties\rNorth Star capabilities: ‘Domeinarchitectuur Security’ - Control 10 ISO/IEC: 27001:2022, 27002:2022 CIS: artikel 1-5 Baseline maatregelen\rBoven-baseline maatregelen\rControl ID Maatregel Verantwoordelijke CRG-01 Toepassing van beveiligingsmaatregelen (waaronder encryptie) vindt plaats op basis van informatieclassificatie van de desbetreffende verwerking. Dit geschied op basis van risicoanalyse en functionaliteitseisen Eigenaar ICT-bedrijfsmiddel CRG-02 ANWB volgt geldende wet- en regelgeving voor toepassing van passende encryptiemaatregelen en -parameters (zoals onder andere beschreven door het NCSC: https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-transport-layer-security-tls Eigenaar ICT-bedrijfsmiddel CRG-03 Erkende cryptografische technieken per toepassingsgebied zijn:\n* Integriteit: encryptie (hashing)\n* Vertrouwelijkheid: encryptie\n* Onweerlegbaarheid: digitale handtekening\n* Authenticatie: digitale handtekening\nDaar waar borging van verschillende toepassingsgebieden nodig is, kan dit leiden tot toepassing van meerdere cryptografische technieken. Eigenaar ICT-bedrijfsmiddel CRG-04 Transportversleuteling is een afgeleide van informatieclassificatie en volgt onderstaande schema:\n* Classificatieniveau ‘laag’: transportbeveiliging binnen en buiten het interne netwerk\n* Classificatieniveau ‘midden’: transportbeveiliging binnen en buiten het interne netwerk\n* Classificatieniveau ‘hoog’: transport en berichtbeveiliging Eigenaar ICT-bedrijfsmiddel CRG-05 Tussen alle serversystemen van de ANWB, danwel in gebruik door de ANWB wordt altijd mutual TLS gebruikt Eigenaar ICT-bedrijfsmiddel CRG-06 Voor validatie van e-mailsystemen wordt minimaal STARTTLS gebruikt Eigenaar ICT-bedrijfsmiddel CRG-07 Om de informatie met het classificatielabel ‘vertrouwelijk’ en ‘zeer vertrouwelijk’ op verwijderbare media te beschermen, zodat deze informatie niet in onbevoegde handen kan vallen bij onjuist gebruik, verlies of diefstal, dient deze te worden versleuteld. Eigenaar ICT-bedrijfsmiddel CRG-08 Om authenticatiemiddelen zoals wachtwoorden te beschermen tegen inzage en wijzigingen door onbevoegden tijdens transport en opslag, dienen deze te worden versleuteld. Eigenaar ICT-bedrijfsmiddel CRG-09 Om een correcte en veilige bediening van mobiele (privé-)apparatuur en thuiswerkplek te waarborgen, is de ANWB bevoegd om beveiligingsinstellingen af te dwingen. Dit heeft betrekking op zowel door de ANWB verstrekte middelen, als privé-apparatuur (‘bring your own device’ (BYOD)). Dit betreft onder meer versleuteling. Eigenaar ICT-bedrijfsmiddel CRG-10 Om bedrijfsinformatie op mobiele apparaten te beveiligen zijn deze zo ingericht dat geen bedrijfsinformatie wordt opgeslagen (‘zero footprint’). Voor het geval dat zero footprint (nog) niet realiseerbaar is, of functioneel onwenselijk is, wordt de toegang tot het apparaat beschermd door middel van een wachtwoord, eventuele biometrie zoals fingerprint, en is apparaat versleuteling geïmplementeerd (conform classificatie-eisen). Dit gebeurt in ieder geval bij beveiligde opslag van ANWB informatie en bedrijfsinformatie van derde partijen, waar de ANWB niet de bronhouder is, maar via het ANWB platform wordt ontsloten. Als deze informatie al wordt toegestaan op het apparaat. Eigenaar ICT-bedrijfsmiddel CRG-11 Voor alle data geldt dat versleuteling geregeld is op een manier die recht doet aan de ANWB beschermingseisen zoals beschreven in het ‘Informatiebeveiligingsbeleid’. Eigenaar ICT-bedrijfsmiddel CRG-12 Interne en externe communicatie naar webservers verloopt altijd over HTTPS Eigenaar ICT-bedrijfsmiddel CRG-13 Digitale documenten van de ANWB waar derden rechten aan kunnen ontlenen, maken gebruik van certificaten voor tekenen en/of encryptie. Eigenaar ICT-bedrijfsmiddel CRG-14 Dataencryptie vindt plaats in alle fasen van de data levenscyclus: creatie, opslag, gebruik, deling, archivering, vernietiging en ongeacht de gegevensdrager Eigenaar ICT-bedrijfsmiddel CRG-15 ANWB is altijd de eigenaar en houder van private keys. In het geval van ‘hosted key vaults’ worden ANWB-keys daar geplaatst. Het eigenaarschap van elke key pair ligt bij de diensteigenaar Eigenaar ICT-bedrijfsmiddel CRG-16 Data dat buiten systemen van de ANWB wordt opgeslagen, dient te worden voorzien van dataencryptie waarbij de ANWB eigenaar is van het sleutelpaar Eigenaar ICT-bedrijfsmiddel CRG-17 Data in Transit (data wat van locatie A naar locatie B gaat) dient altijd te worden voorzien van transportversleuteling Eigenaar ICT-bedrijfsmiddel CRG-18 Data at Rest (data ergens opgeslagen op disk) dient altijd te worden voorzien van minimaal diskencryptie, en afhankelijk van de informatieclassificatie ook van dataencryptie Eigenaar ICT-bedrijfsmiddel CRG-19 Data in Use (data die momenteel ingelezen is als onderdeel van een actieve verwerking) wordt voorzien van format-preserving encryption áls de dienst dit ondersteunt. Eigenaar ICT-bedrijfsmiddel CRG-20 Direct na ontvangst van het certificaat, maar in ieder geval alvorens over te gaan tot installatie en gebruik, het digitale certificaat op haar volledige en juiste inhoud zal worden gecontroleerd. Eigenaar ICT-bedrijfsmiddel CRG-21 Certificaten worden centraal bijgehouden in een certificate inventory. Eigenaar ICT-bedrijfsmiddel CRG-22 Daar waar van toepassing moet ‘reversible encryption’ altijd worden uitgeschakeld. Eigenaar ICT-bedrijfsmiddel CRG-23 Keys worden gegenereerd door .. en bewaard in .. ?? CRG-24 Keypairs worden na creatie overgedragen aan de producteigenaren via .. ?? CRG-25 Key revocation wordt gedaan door .. ?? CRG-26 Key renewals worden gedaan door .. ?? CRG-27 Er zijn op dit moment binnen ANWB geen use-cases voor hardtokens Eigenaar ICT-bedrijfsmiddel CRG-28 Diskencryptie van harde schijven (Windows clients): BitLocker XTS-AES 128 of hoger Eigenaar ICT-bedrijfsmiddel CRG-29 Diskencryptie van harde schijven (Windows clients) wordt opgeslagen in TPM (minimaal versie 1.2) Eigenaar ICT-bedrijfsmiddel CRG-30 Andere diskencryptiestandaarden die gebruikt mogen worden, dienen FIPS 140-2 gecertificeerd te zijn Eigenaar ICT-bedrijfsmiddel CRG-31 Keylengtes, algoritmes, encryptiemethoden en de toepassing van salts worden bepaald op basis van risicoanalyse van de desbetreffende usecase Eigenaar ICT-bedrijfsmiddel CRG-32 SSL 1.0, 2.0 en 3.0, alsmede TLS 1.0, 1.1 en 1.2 mogen niet meer gebruikt worden, TLS 1.3 is standaard (zie: https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 13) Eigenaar ICT-bedrijfsmiddel CRG-33 Voor geaccepteerde hashing algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 18 Eigenaar ICT-bedrijfsmiddel CRG-34 Voor geaccepteerde sleuteluitwisseling algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 18. Eigenaar ICT-bedrijfsmiddel CRG-35 Voor geaccepteerde certificaatvalidatie algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 19. Eigenaar ICT-bedrijfsmiddel CRG-36 Voor geaccepteerde bulkversleuteling algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 20 Eigenaar ICT-bedrijfsmiddel CRG-37 Voor geaccepteerde sleutellengtes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 20. Eigenaar ICT-bedrijfsmiddel CRG-38 De TLS certificaat mag maximaal 13 maanden gelden zijn, dit weerspiegelt ANWB voor certificaten die intern worden uitgegeven via een PKI op basis van het ‘webserver’-template. Eigenaar ICT-bedrijfsmiddel Control ID Maatregel Verantwoordelijke CRG-39 Certificate pinning voor boven baseline systemen is wenselijk, indien de dienst dit ondersteunt. Eigenaar ICT-bedrijfsmiddel ",
    "description": "",
    "tags": [
      "cryptografie",
      "encryptie"
    ],
    "title": "Standaard: Cryptografie",
    "uri": "/l3/cryptografie/index.html"
  },
  {
    "content": "Hier komt inleiding\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "1. Inleiding",
    "uri": "/l1/inleiding/index.html"
  },
  {
    "content": "Voor u ligt de informatiebeveiligingsbaseline van de ANWB Groep (hierna te noemen: ANWB), dit is een tactisch beleidsdocument (L2). Deze baseline vormt het uitgangspunt voor de ANWB om inhoud te geven aan informatiebeveiliging binnen de organisatie.\nHet beleid is opgesteld aan de hand van de ISO27001-informatiebeveiligingsnorm. Binnen de ANWB worden de meerdere beleidsniveaus onderscheiden met de onderstaande samenhang. De ANWB dient te voldoen aan de moderne eisen met betrekking tot informatiebeveiliging en privacywetgeving. Dit maakt het van belang dat er strategisch en tactisch beleid is geformuleerd, operationele procedures zijn uitgewerkt en dat door middel van periodieke toetsing de status van geïmplementeerde maatregelen in kaart wordt gebracht.\nIn dit document staan de doelstellingen en uitgangspunten van het informatiebeveiligingsbeleid beschreven. Dit voorliggende document moet in het verlengde worden gelezen van het strategisch informatiebeveiligingsbeleid (L1).\nIn de standaarden (L3) zal hoog over het “hoe” uitgeschreven worden. Deze standaarden zijn het product van zowel de 1e als 2e lijn. In het verlengde van de standaarden bestaan er werkinstructies (L4) die in meer detail het “hoe” beschrijven.. Werkinstructies zijn het product van de 1e lijn. Alle gepubliceerde standaarden en richtlijnen zijn te raadplegen via de SharePoint-pagina van Security \u0026 Privacy.\nMet de vaststelling en het van kracht worden van dit voorliggende document (en het bijbehorende strategische informatiebeveiligingsbeleid), komen de eerder opgemaakt informatiebeveiligingsdocumenten te vervallen.\n",
    "description": "",
    "tags": [
      "tactisch",
      "beleidsstructuur"
    ],
    "title": "1. Inleiding",
    "uri": "/l2/inleiding/index.html"
  },
  {
    "content": "L1\n",
    "description": "",
    "tags": null,
    "title": "Introductie",
    "uri": "/basics/index.html"
  },
  {
    "content": "Het informatiebeveiligingsbeleid bestaat uit vier niveaus 1\n1. L1: Strategisch beleid 2. L2: Tactisch informatiebeveiligingsbeleid 3. L3: Tactisch-Operationele standaarden 4. L4: Werkinstructies L1 is definitief, L2 t/m L4 zijn in revisie. Dit betekent echter niet dat er geen beleid is, deze is echter toe aan vernieuwing. ↩︎\n",
    "description": "",
    "tags": null,
    "title": "Samenhang",
    "uri": "/basics/samenhang/index.html"
  },
  {
    "content": "\rDoelstelling\rDe ANWB gebruikt het kwetsbaarhedenmanagementproces (of ‘Vulnerability Management proces’) om digitale kwetsbaarheden te identificeren en adresseren. Het kwetsbaarhedenmanagementproces is complementair aan het patchmanagementproces, het één kan impact hebben op het ander. Door softwarematige kwetsbaarheden te identificeren, te evalueren en aan te pakken, kan de ANWB haar aanvalsoppervlak verkleinen om zo aanvallen helpen voorkomen en de schade beperken als zich een aanval voordoet.\nMaatregelen VLN-01: “De uitgangspunten van het vulnerability management proces zijn verankerd in het bovenliggende L2 tactisch informatiebeveiligingsbeleid.”\nUitvoeringsverantwoordelijke: ‘CoE Information Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-02: “De ANWB heeft de technische mogelijkheden en bijpassend mandaat om alle systemen die op haar netwerk zijn aangesloten, te scannen op kwetsbaarheden. Dit betreft alles wat IP-technisch adresseerbaar is. Dit bestrijkt de gehele ANWB-omgeving, inclusief dochterondernemingen.”\nUitvoeringsverantwoordelijke: ‘CoE Information Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-03: “De ANWB heeft technische- en beleidsmaatregelen in plaats om alle ICT-apparatuur te scannen of toetsen zodra deze verbinding maakt met een netwerk van de ANWB.”\nUitvoeringsverantwoordelijke: ‘TLDE - Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-04: “De ANWB scant alle informatiesystemen, in elke locatie, op kwetsbaarheden en noemt dit ‘vulnerability scans’. Voor systemen in eigen datacentra en op colocaties is kwetsbaarheden scanning eveneens van toepassing. Voor het scannen van cloud-intrastructuur en hosting bij derde partijen wordt scannen op kwetsbaarheden in de REH gevraagd aan de dienstleverancier.”\nUitvoeringsverantwoordelijke: ‘TLDE - Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-05: “Naast vulnerability scans worden er vanuit het CoE Information Security ook pentests gedaan op diensten, infrastructuur en technische oplossingen. Deze testen onderscheiden zich van vulnerability assessments door de zeer beperkte scope van de scan en het moment waarop deze plaatsvindt. Dit is bij ingebruikname van een nieuwe dienst , proces of applicatie, maar kan ook gebeuren bij een significante technische upgrade van een bestaande dienst, proces of applicatie.”\nUitvoeringsverantwoordelijke: ‘CoE Information Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-06: “De ANWB behoudt een compleet overzicht van alle kwetsbaarheden op alle ICT-middelen. Dit betekent dat ook de onderlinge relaties tussen data, verwerkingen en ICT-bedrijfsmiddelen wordt vastgelegd. Dit overzicht logt de CVE’s en bewaakt voortgang voor alle betrokken partijen . Daar waar ICT-bedrijfsmiddelen van derden betrokken zijn, zijn hier passende SLA’s en afspraken met betrekking tot handelingsperspectieven voor.”\nUitvoeringsverantwoordelijke: ‘TLDE - Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-07: “De verantwoordelijkheid van het verhelpen van een kwetsbaarheid ligt bij de desbetreffende systeemeigenaar waar de kwetsbaarheid in wordt aangetroffen.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-08: “Indien een informatiesysteem een kwetsbaarheid bevat waarbij de dienstverlening (het technisch beheer) is uitbesteed aan een derde partij, dan is de ANWB systeemeigenaar de eigenaar van de kwetsbaarheid.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-09: “Indien een verhelpende update niet geïnstalleerd kan worden, of voor onevenredig grote nadelige bijeffecten zorgt, kan een update uitgesteld worden. Dit kan alleen als er mitigerende maatregelen genomen kunnen worden die het risico terugbrengen tot acceptabel niveau. Dit betreft een uitzonderingssituatie, waartoe de desbetreffende ISO (van het aandachtsgebied waar deze vraag uit voortkomt) kan beslissen, desnoods in overleg met de CISO.”\nUitvoeringsverantwoordelijke: ‘CoE Information Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-10: “Updates installeren om digitale kwetsbaarheden te verhelpen is altijd het doel . Tijdelijke uitstel kan verleend worden als de systeemeigenaar daar een goede reden voor heeft en er akkoord is vanuit het CoE Information Security.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-11: “Naast de TLDE - ‘Network \u0026 Security’ practise, waar vanuit periodieke digitale kwetsbaarhedenanalyses worden uitgevoerd, moeten systeemeigenaren zelf ook op de hoogte blijven van eventuele of geduide kwetsbaarheden. Hierbij heeft elke systeemeigenaar de verantwoordelijkheid hier zelf een modus operandi in te vinden, denk bijvoorbeeld aan het abonneren op nieuwsbrieven van de leverancier van het informatiesysteem of het ICT-bedrijfsmiddel, of blogs van desbetreffende oplossingen. Dit geldt extra voor systeemeigenaren van informatiesystemen die (contract)technisch niet kunnen (of mogen) worden gescand.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-12: “De publicatie van kwetsbaarheden leidt tot updates, fixes en andere mitigaties. Dit is een top-down benadering van kwetsbaarheden management. Daarnaast kan de publicatie van updates, fixes of mitigaties ook leiden tot een bottom-up benadering van kwetsbaarheden management. Beiden kunnen leiden tot gelijke opvolging van de kwetsbaarheden. “\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-13: “Omdat TLDE - ‘Network \u0026 Security’ put uit verschillende threat intelligence bronnen is zij vaak als eerste op de hoogte van nieuwe kwetsbaarheden. TLDE - ‘Network \u0026 Security’ voert triage uit en definieert vervolgacties. Bij spoedacties, houden zij regie en dragen zij zorg voor adequate doorvoering van de fixes.”\nUitvoeringsverantwoordelijke: ‘TLDE - Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-14: *“De eerste opvolging van een aangetroffen kwetsbaarheid is een risicoweging. Hiervoor gebruikt ANWB altijd de volgende formule:\nRisico = Exposure x Kwetsbaarheid x (Doelgroep + belang + classificatie)\nZie X voor meer info\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-15: “De termijn waarin updates moeten worden toegepast is afhankelijk van de uitkomst van de risicoweging in bijlage. Zie kolom ‘Actie’. Deze uitkomst is bindend en de regie hiervan ligt bij ‘TLDE – Network \u0026 Security’ “\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-16: “Wanneer een update met spoed doorgevoerd moet worden wat niet leidt tot dienstverstoring, wordt het PRIO-1 proces gehanteerd. ‘TLDE - Network \u0026 Security’ heeft hierbij de regie en moet dus aangehaakt zijn.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-17: “Wanneer een update moet spoed doorgevoerd moet worden wat leidt tot dienstverstoring, wordt het PRIO-1 proces gehanteerd. Afstemming met ‘TLDE - Network \u0026 Security’ is hierbij vereist. De lijnmanager zal een Business Continuity Management (BCM) afweging maken i.v.m. de dienstverstoring. Indien deze er niet uit komt, zal dit besproken worden tussen systeemeigenaar, leadership team en eventueel CIO. Ook blijft het CoE Information Security hier nauw bij betrokken.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-18: “Er wordt minimaal 1x per maand gerapporteerd over alle bevonden kwetsbaarheden met opvolgingsstatus en verantwoordelijke. Voor alle openstaande zaken moet op zijn minst een handelingsperspectief opgenomen worden. Dit rapport gaat naar de CISO.”\nUitvoeringsverantwoordelijke: ‘TLDE – Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-19: \"‘TLDE – Network \u0026 Security’ heeft een faciliterende rol wanneer bestanden voor de update achter een loginpagina zitten. Ook als rechten nodig zijn voor de installatie, faciliteert ‘TLDE – Network \u0026 Security’ hier ook bij.”\nUitvoeringsverantwoordelijke: ‘TLDE – Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-20: “ANWB kanaliseert responsible disclosures middels security.txt op haar internet domeinnamen.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-21: “Standaard krijgen alle scrum-teams inzicht in voor hen relevante kwetsbaarheden via dashboarding, aangeleverd vanuit Rapid7 door CoE Information Security.”\nUitvoeringsverantwoordelijke: ‘TLDE – Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nUitwerking formule risicoweging De door de ANWB gehanteerde formule is als volgt:\nRisico = Exposure x Kwetsbaarheid x (Doelgroep + Belang + Classificatie)\nExposure Exposure geeft inzicht in welke mate of vorm het systeem of applicatie is blootgesteld aan de buitenwereld.\nExterne exposure: 8 Interne exposure: 4 Geisoleerde interne exposure: 1 Kwetsbaarheid De classificatie op basis van de CVSS (v3) methode. 1\nCritical (9.0 – 10): 8 High (7.0 – 8.9): 6 Medium (4.0 – 6.9): 4 Low (0.1 – 3.9): 2 No Impact (0): 0 Doelgroep Wat is de scope van de impact wanneer de kwetsbaarheid misbruikt wordt. Wie wordt er door geraakt.\nANWB: 4 Business unit: 3 Afdeling: 2 Individu: 1 Belang Wat is het belang van het informatiesysteem voor de organisatie.\nHoog: 4 Laag: 2 Classificatie De classificatie van het informatiesysteem.\nBoven baseline: 4 Baseline: 2 Dit geeft een bepaalde waarde, die leidt tot handelingsperspectief:\nRisico score Handelingsperspectief 0 - 239 De update wordt binnen een regulier onderhoudsvenster doorgevoerd 240 - 499 De update is binnen een maand doorgevoerd 500 - 575 De update is binnen een week doorgevoerd 575 \u003e De update wordt direct doorgevoerd Rekenvoorbeeld Er is een kwetsbaarheid aangetoond in het centrale e-mailplatform van ANWB, met een kritieke CVSS score (9.8). Hieruit halen we:\nCriterium Zwaarte Verklaring Exposure 8 E-mail is inherent internet-facing Kwetsbaarheid 8 Een 9,8 CVSS valt in de kwetsbaarheidscategorie ‘Critical’ Doelgroep 4 E-mail wordt gebruikt door de gehele organisatie Belang 4 Het e-mailplatform kent een kritiek bedrijfsbelang Classificatie 4 Het e-mailplatform is geclassificeerd als ‘boven baseline’ Volgens de formule betekent dit een risico score van: 8 x 8 x (4 + 4 + 4) = 768; en deze is hoger dan de hoogste risico score en de update moet dus direct doorgevoerd worden.\nhttps://www.first.org/cvss/v3.0/specification-document ↩︎\n",
    "description": "",
    "tags": [
      "kwetsbaarheden",
      "vulnerabilities",
      "scannen",
      "disclosure",
      "cve",
      "termijnen"
    ],
    "title": "Standaard: Kwetsbaarhedenmanagement",
    "uri": "/l3/kwetsbaarheden/index.html"
  },
  {
    "content": "Hier komt beleidsmatige inrichting\n",
    "description": "",
    "tags": null,
    "title": "2. Beleidsmatige inrichting",
    "uri": "/l1/inrichting/index.html"
  },
  {
    "content": "Het beleid vormt de basis voor een evenwichtig (doeltreffend en doelmatig) stelsel van onderling samenhangende maatregelen die de informatievoorziening beschermen tegen interne en externe bedreigingen.\nDe doelstellingen op het gebied van informatiebeveiliging worden geconcretiseerd als onderdeel van het ISMS-proces risicobeoordeling en -behandeling. De doelstellingen zijn als volgt vastgesteld:\nWaarborgen van de continuïteit van de interne bedrijfsvoering en primaire processen; Waarborgen van klantafspraken en het voldoen aan relevante wet- en regelgeving en andere eisen die verband houden met informatiebeveiliging; Weerbaarheid en veerkracht: Minimalisatie van de schade en de overige nadelige gevolgen als gevolg van beveiligingsincidenten; Een lerend en zichzelf verbeterend ISMS, gericht op continue verbetering en groei in volwassenheid. Scope Het voorliggende beleid heeft betrekking op de processen voor de dienstverlening richting leden en klanten, als ook de interne bedrijfsprocessen ondersteunend hieraan. Alle gegevens die in relatie staan met de dienstverlening van de ANWB Groep en haar medewerkers vallen binnen het werkingsgebied. Eventueel kunnen per bedrijfsonderdeel van de ANWB aanvullingen en verduidelijkingen worden vastgesteld. Voor Unigarant geldt dat het Informatiebeveiligingsbeleid wordt vastgesteld door haar eigen directie, gezien specifieke regulering of benodigde vereisten.\nWerkingsgebied Het informatiebeveiligingsbeleid van de ANWB is van toepassing op: het interne personeel, tijdelijk personeel en personeel dat ingezet wordt door derden om diensten te verlenen aan de ANWB en de systemen en middelen welke worden ingezet om deze dienstverlening uit te voeren.\nDoelstelling De volgende hoofdstukken beschrijven de beleidsuitgangspunten die gelden voor de ANWB en die gezamenlijk het informatiebeveiligingsbeleid van de ANWB vormen. Met de beleidsuitgangspunten worden de volgende doelstellingen gerealiseerd:\nVoldoen aan de informatiebeveiligingsdoelstellingen. Duidelijkheid verschaffen aan (tijdelijk) personeel hoe de ANWB omgaat met informatiebeveiliging. Duidelijkheid verschaffen aan stakeholders hoe de ANWB omgaat met informatiebeveiliging. Duidelijk maken aan interne en externe auditors welk belang de ANWB toekent aan de verschillende aandachtgebieden binnen de informatiebeveiliging (nodig voor verklaring van toepasselijkheid). Een verbeterde risicohouding en alertheid van alle medewerkers ten aanzien van informatiebeveiliging binnen de ANWB. Gebruik van de baseline Het beveiligingsniveau van deze baseline is zo vormgegeven dat dit voor de meeste bedrijfsmiddelen bij de ANWB voldoende is. Voor de bedrijfskritische systemen is er een classificatie boven baseline, waarbij aanvullende maatregelen getroffen dienen te worden.\nEen informatiesysteem is bedrijfskritisch als één of meerdere van onderstaande zaken aan de orde is:\nHet systeem of de informatie in het systeem is belang voor het functioneren van de primaire processen van de ANWB (denk aan Hulpverlening, het online- en winkelverkoopproces, etc.). Het systeem of de informatie in het systeem kent wettelijke beperkingen of vereisten voor strikt vertrouwelijke data conform AVG-wetgeving. Het systeem of de informatie in het systeem is waardevol voor de ANWB en daarmee ‘strikt vertrouwelijk’ (denk aan strategische informatie). Met het toepassen van de baseline wordt de beschikbaarheid, integriteit en vertrouwelijkheid van de informatie geborgd tot het in de onderstaande figuur weergegeven niveau: Om vast te stellen dat het niveau van deze baseline voldoende is, moet een baselinetoets uitgevoerd worden. De eigenaar van een bedrijfsmiddel is initiatiefnemer en verantwoordelijk voor het (laten) uitvoeren van deze toets en kan deze verantwoordelijkheid delegeren.\nClassificatie Bepaal het beschikbaarheids-, integriteits- en vertrouwelijkheidsniveau van de informatie door het uitvoeren van de classificatie quickscan beschreven in het document ‘Classificatie van informatie en informatiesystemen’. Op basis van de classificatie zijn er twee mogelijkheden:\nHet niveau is op geen enkel punt hoger dan door de ANWB baseline wordt gedekt. Er zijn geen aanvullende maatregelen nodig. Het implementeren van alle maatregelen beschreven in deze baseline is voldoende. Het niveau is voor één of meer punten hoger dan het niveau dat door de ANWB baseline wordt gedekt. Het betreft een bedrijfskritisch systeem. In dit geval geldt dat aanvullende maatregelen noodzakelijk kunnen zijn, die ook in deze baseline beschreven zijn. Risicoanalyse Voor alle bedrijfsmiddelen wordt naast een (BIV)classificatie ook een risicoanalyse uitgevoerd. De risico’s worden geïdentificeerd en op zwaarte beoordeeld (kans x impact). De geprioriteerde risico’s worden gewogen met de risicobereidheid (hoeveel risico wil men lopen). Afhankelijk van die afweging wordt gekozen of men een risico wil:\nAccepteren: geen maatregelen nemen, desgewenst wel bewaken; Beheersen: beheersmaatregelen implementeren; Delen: verzekeren, uitbesteden; Vermijden: stoppen met activiteiten. Acceptatie mogelijke restrisico’s Een evenwichtig stelsel van onderling samenhangende maatregelen wordt ontwikkeld om de risico’s terug te brengen tot een aanvaardbaar niveau. Na het selecteren van alle relevante maatregelen dienen de restrisico’s in kaart te worden gebracht door de eigenaar (1e lijn) in samenwerking met de (C)ISO. Als er wel restrisico’s zijn, bestaan er de volgende mogelijkheden:\nEr worden nieuwe maatregelen genomen of de huidige maatregelen wordt verbeterd, zodat de restrisico’s verdwijnen. Een manager of directielid die restrisico’s kan en mag dragen, accepteert deze in overleg met (C)ISO. Dit wordt formeel opgenomen in het risicoregister ‘Highbond’. Risico’s kunnen alleen voor een bepaalde periode worden geaccepteerd (bijvoorbeeld 3 maanden of 1 jaar). Periodiek wordt bekeken of het restrisico nog acceptabel is. ",
    "description": "",
    "tags": null,
    "title": "2. Doel informatiebeveiliging",
    "uri": "/l2/doel/index.html"
  },
  {
    "content": "L1\n",
    "description": "",
    "tags": null,
    "title": "L1 - Strategisch",
    "uri": "/l1/index.html"
  },
  {
    "content": "Breaking A change that requires action by you after upgrading to assure the site is still functional.\nChange A change in default behavior. This may requires action by you / may or may not be revertable by configuration.\nNew Marks new behavior you might find interesting or comes configurable.\n1.1 (Gepland eind Q1-2023) New Start meertalige ondersteuning.\nNew Eerste reviewronde op gehele beleid.\n1.0 (Gepland 22-12-15) New Integratie met GitHub.\nNew Integratie met Netlify.\nNew Toevoeging van tags aan alle pagina’s, zie de tags taxonomy.\nChange Site branding aangepast.\nChange Menustructuur aangepast.\n0.1 (Gepland 2022-12-8) New POC L1 in GOHUGO.\nNew POC L2 in GOHUGO.\nNew POC L3 in GOHUGO.\nNew POC L4 in GOHUGO.\n",
    "description": "",
    "tags": null,
    "title": "Wijzigingshistorie",
    "uri": "/basics/historie/index.html"
  },
  {
    "content": "\rInfo\rDoelstelling\nBeheren van de informatiebeveiliging (IB) binnen de organisatie. Er is informatiebeveiligingsbeleid vastgesteld om de implementatie van informatiebeveiliging in de organisatie te initiëren en te beheersen. Er vindt goedkeuring van het informatiebeveiligingsbeleid plaats door het management, er is aandacht voor de toewijzing van rollen en de coördinatie en beoordeling van de implementatie van het beleid binnen de organisatie.\nBinnen de ANWB worden de meerdere beleidsniveaus onderscheiden met de volgende samenhang: De ANWB directie geeft opdracht aan de CISO om het strategische informatie-beveiligingsbeleid op te stellen en de directie keurt deze goed. De CISO formuleert het tactische informatiebeveiligingsbeleid genaamd ‘Informatiebeveiligingsbaseline’ en de CIO keurt deze goed. De CEO neemt dit ter kennisgeving aan en zet dit op de agenda van de directie om na te leven. Standaarden en procedures zijn de operationele beleidsdocumenten die door de CISO en 1e lijn (desbetreffende lijnmanager) worden goedgekeurd. De praktische invulling van de procedures worden vertaald in richtlijnen en werkinstructies door 1e lijn. Het informatiebeveiligingsbeleid is in overeenstemming met de bedrijfseisen en strategie van ANWB en in lijn met relevante wet- en regelgeving. Het informatiebeveiligingsbeleid bevat doelstellingen en uitgangspunten voor informatiebeveiliging om richting te geven aan alle activiteiten die verband houden met informatiebeveiliging. Het informatiebeveiligingsbeleid (tenminste de uitgangspunten) is beschikbaar voor alle medewerkers en contractanten van de ANWB. De algemene en specifieke verantwoordelijkheden voor informatiebeveiliging zijn beschreven, beschikbaar en bekend bij de medewerkers en contractanten van de ANWB. Een ANWB-gedragscode is beschikbaar. De uitgangspunten voor informatiebeveiliging zoals beschreven in dit beleid worden periodiek geactualiseerd, zowel gepland als bij significante wijzigingen. Dit dient elk jaar goedgekeurd te worden door de CISO \u0026 CIO. ",
    "description": "",
    "tags": null,
    "title": "3. Informatiebeveiligingsbeleid",
    "uri": "/l2/informatiebeveiligingsbeleid/index.html"
  },
  {
    "content": "Hier komt isms\n",
    "description": "",
    "tags": null,
    "title": "3. ISMS",
    "uri": "/l1/isms/index.html"
  },
  {
    "content": "Inleiding..\n",
    "description": "",
    "tags": null,
    "title": "L2 - Tactisch",
    "uri": "/l2/index.html"
  },
  {
    "content": "L3\n",
    "description": "",
    "tags": null,
    "title": "L3 - Standaarden",
    "uri": "/l3/index.html"
  },
  {
    "content": "Hier komt org\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "4. Organiseren van informatiebeveiliging",
    "uri": "/l2/organiseren/index.html"
  },
  {
    "content": "Hier komt langenaam\n",
    "description": "",
    "tags": null,
    "title": "4. Systeemclassificatie en risico-assessmentproces",
    "uri": "/l1/risk/index.html"
  },
  {
    "content": "Hier komt Veilig personeel\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "5. Veilig personeel",
    "uri": "/l2/personeel/index.html"
  },
  {
    "content": "Hier komt w\u0026r\n",
    "description": "",
    "tags": null,
    "title": "5. Wet- en regelgeving",
    "uri": "/l1/wet/index.html"
  },
  {
    "content": "Hier komt bb\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "6. Beheer van bedrijfsmiddelen",
    "uri": "/l2/bedrijfsmiddelen/index.html"
  },
  {
    "content": "Hier komt org\n",
    "description": "",
    "tags": null,
    "title": "6. Organisatorische inrichting informatiebeveiliging",
    "uri": "/l1/org/index.html"
  },
  {
    "content": "Hier komt log\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "7. Bedrijfseisen voor logische toegangsbeveiliging",
    "uri": "/l2/logischetoegang/index.html"
  },
  {
    "content": "Hier komt inc\n",
    "description": "",
    "tags": null,
    "title": "7. Security incident management",
    "uri": "/l1/secincmgt/index.html"
  },
  {
    "content": "Hier komt Cryptografie\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "8. Cryptografie",
    "uri": "/l2/cryptografie/index.html"
  },
  {
    "content": "Hier komt Fysieke beveiliging\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "9. Fysieke beveiliging en beveiliging van de omgeving",
    "uri": "/l2/fysiek/index.html"
  },
  {
    "content": "Hier komt bb2\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "10. Beveiliging bedrijfsvoering",
    "uri": "/l2/bedrijfsvoering/index.html"
  },
  {
    "content": "Hier komt cc\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "11. Communicatiebeveiliging",
    "uri": "/l2/communicatie/index.html"
  },
  {
    "content": "Hier komt acq\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "12. Acquisitie, ontwikkeling en onderhoud van informatiesystemen",
    "uri": "/l2/acquisitie/index.html"
  },
  {
    "content": "Hier komt lev\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "13. Leveranciersrelaties",
    "uri": "/l2/leveranciers/index.html"
  },
  {
    "content": "Hier komt inc\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "14. Beheer van informatiebeveiligingsincidenten",
    "uri": "/l2/incidenten/index.html"
  },
  {
    "content": "Hier komt bcm\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "15. Informatiebeveiligingsaspecten van bedrijfscontinuiteitsbeheer",
    "uri": "/l2/bedrijfscontinuiteit/index.html"
  },
  {
    "content": "Hier komt nal\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "16. Naleving",
    "uri": "/l2/naleving/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "cryptografie",
    "uri": "/tags/cryptografie/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "cve",
    "uri": "/tags/cve/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "disclosure",
    "uri": "/tags/disclosure/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "encryptie",
    "uri": "/tags/encryptie/index.html"
  },
  {
    "content": "Welkom bij informatiebeveiligingsbeleid van ORGX! Hier vind je ons volledige informatiebeveiligingsbeleid. Hier staat al het actuele beleid, en is een one-stop shop voor alle vragen omrent informatiebeveiliging binnen ORGX.\nOmdat het gehost wordt op GITHUB, kun je rechtsbovenin klikken op ‘’ om wijzigingen voor te stellen, doe dit vooral! Alle voorgestelde wijzigingen worden eens per kwartaal door het CoE Information Security behandeld. Alle wijzigingen op dit beleid zijn terug te lezen in de wijzigingshistorie.\nDaarnaast kun je een printversie verkrijgen door op een pagina rechtsbovenin de print-view op te vragen, door te klikken op ‘’\n",
    "description": "",
    "tags": null,
    "title": "Informatiebeveiligingsbeleid",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "kwetsbaarheden",
    "uri": "/tags/kwetsbaarheden/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "scannen",
    "uri": "/tags/scannen/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "termijnen",
    "uri": "/tags/termijnen/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "vulnerabilities",
    "uri": "/tags/vulnerabilities/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "beleidsstructuur",
    "uri": "/tags/beleidsstructuur/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "tactisch",
    "uri": "/tags/tactisch/index.html"
  }
]
