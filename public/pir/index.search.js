var relearn_search_index = [
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nDoelstell'n\rZorgen voor correct en doeltreffend gebruik van cryptografie om de vertrouwelijkheid, authenticiteit en/of integriteit van informatie te beschermen.\nRelaties\rNorth Star capabilities: ‘Domeinarchitectuur Security’ - Control 10 ISO/IEC: 27001:2022, 27002:2022 CIS: artikel 1-5 Baseline maatregelen\rBoven-baseline maatregelen\rControl ID Maatregel Verantwoordelijke CRG-01 Toepass'n van beveiligingsmaatregelen (waaronder encryptie) vindt plaats op basis van informatieclassificatie van de desbetreffende verwerk'n. Dit geschied op basis van risicoanalyse en functionaliteitseisen Eigenaar ICT-bedrijfsmiddel CRG-02 ANWB volgt geldende wet- en regelgev'n voor toepass'n van passende encryptiemaatregelen en -parameters (zoals onder andere beschreven door het NCSC: https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-transport-layer-security-tls Eigenaar ICT-bedrijfsmiddel CRG-03 Erkende cryptografische technieken per toepassingsgebied zijn:\n* Integriteit: encryptie (hashing)\n* Vertrouwelijkheid: encryptie\n* Onweerlegbaarheid: digitale handteken'n\n* Authenticatie: digitale handteken'n\nDaar waar borg'n van verschillende toepassingsgebieden nodig be, kan dit leiden tot toepass'n van meerdere cryptografische technieken. Eigenaar ICT-bedrijfsmiddel CRG-04 Transportversleutel'n be een afgeleide van informatieclassificatie en volgt onderstaande schema:\n* Classificatieniveau ‘laag’: transportbeveilig'n binnen en buiten het interne netwerk\n* Classificatieniveau ‘midden’: transportbeveilig'n binnen en buiten het interne netwerk\n* Classificatieniveau ‘hoog’: transport en berichtbeveilig'n Eigenaar ICT-bedrijfsmiddel CRG-05 Tussen alle serversystemen van de ANWB, danwel 'n gebruik door de ANWB wordt altijd mutual TLS gebruikt Eigenaar ICT-bedrijfsmiddel CRG-06 Voor validatie van e-mailsystemen wordt minimaal STARTTLS gebruikt Eigenaar ICT-bedrijfsmiddel CRG-07 Om de informatie met het classificatielabel ‘vertrouwelijk’ en ‘zeer vertrouwelijk’ op verwijderbare media te beschermen, zodat deze informatie niet 'n onbevoegde handen kan vallen bij onjuist gebruik, verlies o' diefstal, dient deze te worden versleuteld. Eigenaar ICT-bedrijfsmiddel CRG-08 Om authenticatiemiddelen zoals wachtwoorden te beschermen tegen inzage en wijzigingen door onbevoegden tijdens transport en opslag, dienen deze te worden versleuteld. Eigenaar ICT-bedrijfsmiddel CRG-09 Om een correcte en veilige bedien'n van mobiele (privé-)apparatuur en thuiswerkplek te waarborgen, be de ANWB bevoegd om beveiligingsinstellingen af te dwingen. Dit heeft betrekk'n op zowel door de ANWB verstrekte middelen, als privé-apparatuur (‘br'n yer own device’ (BYOD)). Dit betreft onder meer versleutel'n. Eigenaar ICT-bedrijfsmiddel CRG-10 Om bedrijfsinformatie op mobiele apparaten te beveiligen zijn deze zo ingericht dat geen bedrijfsinformatie wordt opgeslagen (‘zero footprint’). Voor het geval dat zero footprint (nog) niet realiseerbaar be, o' functioneel onwenselijk be, wordt de toegang tot het apparaat beschermd door middel van een wachtwoord, eventuele biometrie zoals fingerprint, en be apparaat versleutel'n geïmplementeerd (conform classificatie-eisen). Dit gebeurt 'n ieder geval bij beveiligde opslag van ANWB informatie en bedrijfsinformatie van derde partijen, waar de ANWB niet de bronhouder be, maar via het ANWB platform wordt ontsloten. Als deze informatie al wordt toegestaan op het apparaat. Eigenaar ICT-bedrijfsmiddel CRG-11 Voor alle data geldt dat versleutel'n geregeld be op een manier die recht doet aan de ANWB beschermingseisen zoals beschreven 'n het ‘Informatiebeveiligingsbeleid’. Eigenaar ICT-bedrijfsmiddel CRG-12 Interne en externe communicatie naar webservers verloopt altijd over HTTPS Eigenaar ICT-bedrijfsmiddel CRG-13 Digitale documenten van de ANWB waar derden rechten aan kunnen ontlenen, maken gebruik van certificaten voor tekenen en/of encryptie. Eigenaar ICT-bedrijfsmiddel CRG-14 Dataencryptie vindt plaats 'n alle fasen van de data levenscyclus: creatie, opslag, gebruik, del'n, archiver'n, vernietig'n en ongeacht de gegevensdrager Eigenaar ICT-bedrijfsmiddel CRG-15 ANWB be altijd de eigenaar en houder van private keys. In het geval van ‘hosted key vaults’ worden ANWB-keys daar geplaatst. Het eigenaarschap van elke key pair ligt bij de diensteigenaar Eigenaar ICT-bedrijfsmiddel CRG-16 Data dat buiten systemen van de ANWB wordt opgeslagen, dient te worden voorzien van dataencryptie waarbij de ANWB eigenaar be van het sleutelpaar Eigenaar ICT-bedrijfsmiddel CRG-17 Data 'n Transit (data wat van locatie A naar locatie B gaat) dient altijd te worden voorzien van transportversleutel'n Eigenaar ICT-bedrijfsmiddel CRG-18 Data at Rest (data ergens opgeslagen op disk) dient altijd te worden voorzien van minimaal diskencryptie, en afhankelijk van de informatieclassificatie ook van dataencryptie Eigenaar ICT-bedrijfsmiddel CRG-19 Data 'n Use (data die momenteel ingelezen be als onderdeel van een actieve verwerking) wordt voorzien van format-preserv'n encrypt'n áls de dienst dit ondersteunt. Eigenaar ICT-bedrijfsmiddel CRG-20 Direct na ontvangst van het certificaat, maar 'n ieder geval alvorens over te gaan tot installatie en gebruik, het digitale certificaat op haar volledige en juiste inhoud zal worden gecontroleerd. Eigenaar ICT-bedrijfsmiddel CRG-21 Certificaten worden centraal bijgehouden 'n een certificate inventory. Eigenaar ICT-bedrijfsmiddel CRG-22 Daar waar van toepass'n moet ‘revers'ble encryption’ altijd worden uitgeschakeld. Eigenaar ICT-bedrijfsmiddel CRG-23 Keys worden gegenereerd door .. en bewaard 'n .. ?? CRG-24 Keypairs worden na creatie overgedragen aan de producteigenaren via .. ?? CRG-25 Key revocat'n wordt gedaan door .. ?? CRG-26 Key renewals worden gedaan door .. ?? CRG-27 Er zijn op dit moment binnen ANWB geen use-cases voor hardtokens Eigenaar ICT-bedrijfsmiddel CRG-28 Diskencryptie van harde schijven (Windows clients): BitLocker XTS-AES 128 o' hoger Eigenaar ICT-bedrijfsmiddel CRG-29 Diskencryptie van harde schijven (Windows clients) wordt opgeslagen 'n TPM (minimaal versie 1.2) Eigenaar ICT-bedrijfsmiddel CRG-30 Andere diskencryptiestandaarden die gebruikt mogen worden, dienen FIPS 140-2 gecertificeerd te zijn Eigenaar ICT-bedrijfsmiddel CRG-31 Keylengtes, algoritmes, encryptiemethoden en de toepass'n van salts worden bepaald op basis van risicoanalyse van de desbetreffende usecase Eigenaar ICT-bedrijfsmiddel CRG-32 SSL 1.0, 2.0 en 3.0, alsmede TLS 1.0, 1.1 en 1.2 mogen niet meer gebruikt worden, TLS 1.3 be standaard (zie: https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 13) Eigenaar ICT-bedrijfsmiddel CRG-33 Voor geaccepteerde hash'n algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven 'n https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 18 Eigenaar ICT-bedrijfsmiddel CRG-34 Voor geaccepteerde sleuteluitwissel'n algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven 'n https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 18. Eigenaar ICT-bedrijfsmiddel CRG-35 Voor geaccepteerde certificaatvalidatie algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven 'n https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 19. Eigenaar ICT-bedrijfsmiddel CRG-36 Voor geaccepteerde bulkversleutel'n algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven 'n https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 20 Eigenaar ICT-bedrijfsmiddel CRG-37 Voor geaccepteerde sleutellengtes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven 'n https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 20. Eigenaar ICT-bedrijfsmiddel CRG-38 De TLS certificaat mag maximaal 13 maanden gelden zijn, dit weerspiegelt ANWB voor certificaten die intern worden uitgegeven via een PKI op basis van het ‘webserver’-template. Eigenaar ICT-bedrijfsmiddel Control ID Maatregel Verantwoordelijke CRG-39 Certificate pinn'n voor boven baseline systemen be wenselijk, indien de dienst dit ondersteunt. Eigenaar ICT-bedrijfsmiddel ",
    "description": "",
    "tags": [
      "cryptografie",
      "encryptie"
    ],
    "title": "Standaard: Cryptografie",
    "uri": "/pir/l3/cryptografie/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt inleid'n\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "1. Inleiding",
    "uri": "/pir/l1/inleiding/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nVoor u ligt de informatiebeveiligingsbaseline van de ANWB Groep (hierna te noemen: ANWB), dit be een tactisch beleidsdocument (L2). Deze baseline vormt het uitgangspunt voor de ANWB om inhoud te geven aan informatiebeveilig'n binnen de organisatie.\nHet beleid be opgesteld aan de hand van de ISO27001-informatiebeveiligingsnorm. Binnen de ANWB worden de meerdere beleidsniveaus onderscheiden met de onderstaande samenhang. De ANWB dient te voldoen aan de moderne eisen met betrekk'n tot informatiebeveilig'n en privacywetgev'n. Dit maakt het van belang dat er strategisch en tactisch beleid be geformuleerd, operationele procedures zijn uitgewerkt en dat door middel van periodieke toets'n de status van geïmplementeerde maatregelen 'n kaart wordt gebracht.\nIn dit document staan de doelstellingen en uitgangspunten van het informatiebeveiligingsbeleid beschreven. Dit voorliggende document moet 'n het verlengde worden gelezen van het strategisch informatiebeveiligingsbeleid (L1).\nIn de standaarden (L3) zal hoog over het “hoe” uitgeschreven worden. Deze standaarden zijn het product van zowel de 1e als 2e lijn. In het verlengde van de standaarden bestaan er werkinstructies (L4) die 'n meer detail het “hoe” beschrijven.. Werkinstructies zijn het product van de 1e lijn. Alle gepubliceerde standaarden en richtlijnen zijn te raadplegen via de SharePoint-pagina van Security \u0026 Privacy.\nMet de vaststell'n en het van kracht worden van dit voorliggende document (en het bijbehorende strategische informatiebeveiligingsbeleid), komen de eerder opgemaakt informatiebeveiligingsdocumenten te vervallen.\n",
    "description": "",
    "tags": null,
    "title": "1. Inleiding",
    "uri": "/pir/l2/inleiding/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nL1\n",
    "description": "",
    "tags": null,
    "title": "Introductie",
    "uri": "/pir/basics/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHet informatiebeveiligingsbeleid bestaat uit vier niveaus 1\n1. L1: Strategisch beleid 2. L2: Tactisch informatiebeveiligingsbeleid 3. L3: Tactisch-Operationele standaarden 4. L4: Werkinstructies L1 be definitief, L2 t/m L4 zijn 'n revisie. Dit betekent echter niet dat er geen beleid be, deze be echter toe aan vernieuw'n. ↩︎\n",
    "description": "",
    "tags": null,
    "title": "Samenhangrrr",
    "uri": "/pir/basics/samenhang/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nDoelstell'n\rDe ANWB gebruikt het kwetsbaarhedenmanagementproces (of ‘Vulnerability Management proces’) om digitale kwetsbaarheden te identificeren en adresseren. Het kwetsbaarhedenmanagementproces be complementair aan het patchmanagementproces, het één kan impact hebben op het ander. Door softwarematige kwetsbaarheden te identificeren, te evalueren en aan te pakken, kan de ANWB haar aanvalsoppervlak verkleinen om zo aanvallen helpen voorkomen en de schade beperken als zich een aanval voordoet.\nMaatregelen VLN-01: “De uitgangspunten van het vulnerability management proces zijn verankerd 'n het bovenliggende L2 tactisch informatiebeveiligingsbeleid.”\nUitvoeringsverantwoordelijke: ‘CoE Informat'n Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-02: “De ANWB heeft de technische mogelijkheden en bijpassend mandaat om alle systemen die op haar netwerk zijn aangesloten, te scannen op kwetsbaarheden. Dit betreft alles wat IP-technisch adresseerbaar be. Dit bestrijkt de gehele ANWB-omgev'n, inclusief dochterondernemingen.”\nUitvoeringsverantwoordelijke: ‘CoE Informat'n Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-03: “De ANWB heeft technische- en beleidsmaatregelen 'n plaats om alle ICT-apparatuur te scannen o' toetsen zodra deze verbind'n maakt met een netwerk van de ANWB.”\nUitvoeringsverantwoordelijke: ‘TLDE - Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-04: “De ANWB scant alle informatiesystemen, 'n elke locatie, op kwetsbaarheden en noemt dit ‘vulnerability scans’. Voor systemen 'n eigen datacentra en op colocaties be kwetsbaarheden scann'n eveneens van toepass'n. Voor het scannen van cloud-intrastructuur en host'n bij derde partijen wordt scannen op kwetsbaarheden 'n de REH gevraagd aan de dienstleverancier.”\nUitvoeringsverantwoordelijke: ‘TLDE - Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-05: “Naast vulnerability scans worden er vanuit het CoE Informat'n Security ook pentests gedaan op diensten, infrastructuur en technische oplossingen. Deze testen onderscheiden zich van vulnerability assessments door de zeer beperkte scope van de scan en het moment waarop deze plaatsvindt. Dit be bij ingebruikname van een nieuwe dienst , proces o' applicatie, maar kan ook gebeuren bij een significante technische upgrade van een bestaande dienst, proces o' applicatie.”\nUitvoeringsverantwoordelijke: ‘CoE Informat'n Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-06: “De ANWB behoudt een compleet overzicht van alle kwetsbaarheden op alle ICT-middelen. Dit betekent dat ook de onderlinge relaties tussen data, verwerkingen en ICT-bedrijfsmiddelen wordt vastgelegd. Dit overzicht logt de CVE’s en bewaakt voortgang voor alle betrokken partijen . Daar waar ICT-bedrijfsmiddelen van derden betrokken zijn, zijn hier passende SLA’s en afspraken met betrekk'n tot handelingsperspectieven voor.”\nUitvoeringsverantwoordelijke: ‘TLDE - Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-07: “De verantwoordelijkheid van het verhelpen van een kwetsbaarheid ligt bij de desbetreffende systeemeigenaar waar de kwetsbaarheid 'n wordt aangetroffen.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-08: “Indien een informatiesysteem een kwetsbaarheid bevat waarbij de dienstverlen'n (het technisch beheer) be uitbesteed aan een derde partij, dan be de ANWB systeemeigenaar de eigenaar van de kwetsbaarheid.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-09: “Indien een verhelpende update niet geïnstalleerd kan worden, o' voor onevenredig grote nadelige bijeffecten zorgt, kan een update uitgesteld worden. Dit kan alleen als er mitigerende maatregelen genomen kunnen worden die het risico terugbrengen tot acceptabel niveau. Dit betreft een uitzonderingssituatie, waartoe de desbetreffende ISO (van het aandachtsgebied waar deze vraag uit voortkomt) kan beslissen, desnoods 'n overleg met de CISO.”\nUitvoeringsverantwoordelijke: ‘CoE Informat'n Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-10: “Updates installeren om digitale kwetsbaarheden te verhelpen be altijd het doel . Tijdelijke uitstel kan verleend worden als de systeemeigenaar daar een goede reden voor heeft en er akkoord be vanuit het CoE Informat'n Security.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-11: “Naast de TLDE - ‘Network \u0026 Security’ practise, waar vanuit periodieke digitale kwetsbaarhedenanalyses worden uitgevoerd, moeten systeemeigenaren zelf ook op de hoogte blijven van eventuele o' geduide kwetsbaarheden. Hierbij heeft elke systeemeigenaar de verantwoordelijkheid hier zelf een modus operandi 'n te vinden, denk bijvoorbeeld aan het abonneren op nieuwsbrieven van de leverancier van het informatiesysteem o' het ICT-bedrijfsmiddel, o' blogs van desbetreffende oplossingen. Dit geldt extra voor systeemeigenaren van informatiesystemen die (contract)technisch niet kunnen (of mogen) worden gescand.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-12: “De publicatie van kwetsbaarheden leidt tot updates, fixes en andere mitigaties. Dit be een top-down benader'n van kwetsbaarheden management. Daarnaast kan de publicatie van updates, fixes o' mitigaties ook leiden tot een bottom-up benader'n van kwetsbaarheden management. Beiden kunnen leiden tot gelijke opvolg'n van de kwetsbaarheden. “\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-13: “Omdat TLDE - ‘Network \u0026 Security’ put uit verschillende threat intelligence bronnen be zij vaak als eerste op de hoogte van nieuwe kwetsbaarheden. TLDE - ‘Network \u0026 Security’ voert triage uit en definieert vervolgacties. Bij spoedacties, houden zij regie en dragen zij zorg voor adequate doorvoer'n van de fixes.”\nUitvoeringsverantwoordelijke: ‘TLDE - Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-14: *“De eerste opvolg'n van een aangetroffen kwetsbaarheid be een risicoweg'n. Hiervoor gebruikt ANWB altijd de volgende formule:\nRisico = Exposure x Kwetsbaarheid x (Doelgroep + belang + classificatie)\nZie X voor meer info\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-15: “De termijn waarin updates moeten worden toegepast be afhankelijk van de uitkomst van de risicoweg'n 'n bijlage. Zie kolom ‘Actie’. Deze uitkomst be bindend en de regie hiervan ligt bij ‘TLDE – Network \u0026 Security’ “\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-16: “Wanneer een update met spoed doorgevoerd moet worden wat niet leidt tot dienstverstor'n, wordt het PRIO-1 proces gehanteerd. ‘TLDE - Network \u0026 Security’ heeft hierbij de regie en moet dus aangehaakt zijn.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-17: “Wanneer een update moet spoed doorgevoerd moet worden wat leidt tot dienstverstor'n, wordt het PRIO-1 proces gehanteerd. Afstemm'n met ‘TLDE - Network \u0026 Security’ be hierbij vereist. De lijnmanager zal een Business Continuity Management (BCM) afweg'n maken i.v.m. de dienstverstor'n. Indien deze er niet uit komt, zal dit besproken worden tussen systeemeigenaar, leadership team en eventueel CIO. Ook blijft het CoE Informat'n Security hier nauw bij betrokken.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-18: “Er wordt minimaal 1x per maand gerapporteerd over alle bevonden kwetsbaarheden met opvolgingsstatus en verantwoordelijke. Voor alle openstaande zaken moet op zijn minst een handelingsperspectief opgenomen worden. Dit rapport gaat naar de CISO.”\nUitvoeringsverantwoordelijke: ‘TLDE – Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-19: \"‘TLDE – Network \u0026 Security’ heeft een faciliterende rol wanneer bestanden voor de update achter een loginpagina zitten. Ook als rechten nodig zijn voor de installatie, faciliteert ‘TLDE – Network \u0026 Security’ hier ook bij.”\nUitvoeringsverantwoordelijke: ‘TLDE – Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-20: “ANWB kanaliseert respons'ble disclosures middels security.txt op haar internet domeinnamen.”\nUitvoeringsverantwoordelijke: ‘Eigenaar ICT-bedrijfsmiddel’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nVLN-21: “Standaard krijgen alle scrum-teams inzicht 'n voor hen relevante kwetsbaarheden via dashboard'n, aangeleverd vanuit Rapid7 door CoE Informat'n Security.”\nUitvoeringsverantwoordelijke: ‘TLDE – Network \u0026 Security’\nISO/IEC27001:2022-art. 5,6 \u0026 7 | CIS-art.1-10, 12, 20 | NS-SecArch Control 10, 10.1\nUitwerk'n formule risicoweg'n De door de ANWB gehanteerde formule be als volgt:\nRisico = Exposure x Kwetsbaarheid x (Doelgroep + Belang + Classificatie)\nExposure Exposure geeft inzicht 'n welke mate o' vorm het systeem o' applicatie be blootgesteld aan de buitenwereld.\nExterne exposure: 8 Interne exposure: 4 Geisoleerde interne exposure: 1 Kwetsbaarheid De classificatie op basis van de CVSS (v3) methode. 1\nCritical (9.0 – 10): 8 High (7.0 – 8.9): 6 Medium (4.0 – 6.9): 4 Low (0.1 – 3.9): 2 No Impact (0): 0 Doelgroep Wat be de scope van de impact wanneer de kwetsbaarheid misbruikt wordt. Wie wordt er door geraakt.\nANWB: 4 Business unit: 3 Afdel'n: 2 Individu: 1 Belang Wat be het belang van het informatiesysteem voor de organisatie.\nHoog: 4 Laag: 2 Classificatie De classificatie van het informatiesysteem.\nBoven baseline: 4 Baseline: 2 Dit geeft een bepaalde waarde, die leidt tot handelingsperspectief:\nRisico score Handelingsperspectief 0 - 239 De update wordt binnen een regulier onderhoudsvenster doorgevoerd 240 - 499 De update be binnen een maand doorgevoerd 500 - 575 De update be binnen een week doorgevoerd 575 \u003e De update wordt direct doorgevoerd Rekenvoorbeeld Er be een kwetsbaarheid aangetoond 'n het centrale e-mailplatform van ANWB, met een kritieke CVSS score (9.8). Hieruit halen we:\nCriterium Zwaarte Verklar'n Exposure 8 E-mail be inherent internet-fac'n Kwetsbaarheid 8 Een 9,8 CVSS valt 'n de kwetsbaarheidscategorie ‘Critical’ Doelgroep 4 E-mail wordt gebruikt door de gehele organisatie Belang 4 Het e-mailplatform kent een kritiek bedrijfsbelang Classificatie 4 Het e-mailplatform be geclassificeerd als ‘boven baseline’ Volgens de formule betekent dit een risico score van: 8 x 8 x (4 + 4 + 4) = 768; en deze be hoger dan de hoogste risico score en de update moet dus direct doorgevoerd worden.\nhttps://www.first.org/cvss/v3.0/specification-document ↩︎\n",
    "description": "",
    "tags": [
      "kwetsbaarheden",
      "vulnerabilities"
    ],
    "title": "Standaard: Kwetsbaarhedenmanagement",
    "uri": "/pir/l3/kwetsbaarheden/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt beleidsmatige inricht'n\n",
    "description": "",
    "tags": null,
    "title": "2. Beleidsmatige inrichting",
    "uri": "/pir/l1/inrichting/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHet beleid vormt de basis voor een evenwichtig (doeltreffend en doelmatig) stelsel van onderl'n samenhangende maatregelen die de informatievoorzien'n beschermen tegen interne en externe bedreigingen.\nDe doelstellingen op het gebied van informatiebeveilig'n worden geconcretiseerd als onderdeel van het ISMS-proces risicobeoordel'n en -behandel'n. De doelstellingen zijn als volgt vastgesteld:\nWaarborgen van de continuïteit van de interne bedrijfsvoer'n en primaire processen; Waarborgen van klantafspraken en het voldoen aan relevante wet- en regelgev'n en andere eisen die verband houden met informatiebeveilig'n; Weerbaarheid en veerkracht: Minimalisatie van de schade en de overige nadelige gevolgen als gevolg van beveiligingsincidenten; Een lerend en zichzelf verbeterend ISMS, gericht op continue verbeter'n en groei 'n volwassenheid. Scope Het voorliggende beleid heeft betrekk'n op de processen voor de dienstverlen'n richt'n leden en klanten, als ook de interne bedrijfsprocessen ondersteunend hieraan. Alle gegevens die 'n relatie staan met de dienstverlen'n van de ANWB Groep en haar medewerkers vallen binnen het werkingsgebied. Eventueel kunnen per bedrijfsonderdeel van de ANWB aanvullingen en verduidelijkingen worden vastgesteld. Voor Unigarant geldt dat het Informatiebeveiligingsbeleid wordt vastgesteld door haar eigen directie, gezien specifieke reguler'n o' benodigde vereisten.\nWerkingsgebied Het informatiebeveiligingsbeleid van de ANWB be van toepass'n op: het interne personeel, tijdelijk personeel en personeel dat ingezet wordt door derden om diensten te verlenen aan de ANWB en de systemen en middelen welke worden ingezet om deze dienstverlen'n uit te voeren.\nDoelstell'n De volgende hoofdstukken beschrijven de beleidsuitgangspunten die gelden voor de ANWB en die gezamenlijk het informatiebeveiligingsbeleid van de ANWB vormen. Met de beleidsuitgangspunten worden de volgende doelstellingen gerealiseerd:\nVoldoen aan de informatiebeveiligingsdoelstellingen. Duidelijkheid verschaffen aan (tijdelijk) personeel hoe de ANWB omgaat met informatiebeveilig'n. Duidelijkheid verschaffen aan stakeholders hoe de ANWB omgaat met informatiebeveilig'n. Duidelijk maken aan interne en externe auditors welk belang de ANWB toekent aan de verschillende aandachtgebieden binnen de informatiebeveilig'n (nodig voor verklar'n van toepasselijkheid). Een verbeterde risicohoud'n en alertheid van alle medewerkers ten aanzien van informatiebeveilig'n binnen de ANWB. Gebruik van de baseline Het beveiligingsniveau van deze baseline be zo vormgegeven dat dit voor de meeste bedrijfsmiddelen bij de ANWB voldoende be. Voor de bedrijfskritische systemen be er een classificatie boven baseline, waarbij aanvullende maatregelen getroffen dienen te worden.\nEen informatiesysteem be bedrijfskritisch als één o' meerdere van onderstaande zaken aan de orde be:\nHet systeem o' de informatie 'n het systeem be belang voor het functioneren van de primaire processen van de ANWB (denk aan Hulpverlen'n, het online- en winkelverkoopproces, etc.). Het systeem o' de informatie 'n het systeem kent wettelijke beperkingen o' vereisten voor strikt vertrouwelijke data conform AVG-wetgev'n. Het systeem o' de informatie 'n het systeem be waardevol voor de ANWB en daarmee ‘strikt vertrouwelijk’ (denk aan strategische informatie). Met het toepassen van de baseline wordt de beschikbaarheid, integriteit en vertrouwelijkheid van de informatie geborgd tot het 'n de onderstaande figuur weergegeven niveau: Om vast te stellen dat het niveau van deze baseline voldoende be, moet een baselinetoets uitgevoerd worden. De eigenaar van een bedrijfsmiddel be initiatiefnemer en verantwoordelijk voor het (laten) uitvoeren van deze toets en kan deze verantwoordelijkheid delegeren.\nClassificatie Bepaal het beschikbaarheids-, integriteits- en vertrouwelijkheidsniveau van de informatie door het uitvoeren van de classificatie quickscan beschreven 'n het document ‘Classificatie van informatie en informatiesystemen’. Op basis van de classificatie zijn er twee mogelijkheden:\nHet niveau be op geen enkel punt hoger dan door de ANWB baseline wordt gedekt. Er zijn geen aanvullende maatregelen nodig. Het implementeren van alle maatregelen beschreven 'n deze baseline be voldoende. Het niveau be voor één o' meer punten hoger dan het niveau dat door de ANWB baseline wordt gedekt. Het betreft een bedrijfskritisch systeem. In dit geval geldt dat aanvullende maatregelen noodzakelijk kunnen zijn, die ook 'n deze baseline beschreven zijn. Risicoanalyse Voor alle bedrijfsmiddelen wordt naast een (BIV)classificatie ook een risicoanalyse uitgevoerd. De risico’s worden geïdentificeerd en op zwaarte beoordeeld (kans x impact). De geprioriteerde risico’s worden gewogen met de risicobereidheid (hoeveel risico wil men lopen). Afhankelijk van die afweg'n wordt gekozen o' men een risico wil:\nAccepteren: geen maatregelen nemen, desgewenst wel bewaken; Beheersen: beheersmaatregelen implementeren; Delen: verzekeren, uitbesteden; Vermijden: stoppen met activiteiten. Acceptatie mogelijke restrisico’s Een evenwichtig stelsel van onderl'n samenhangende maatregelen wordt ontwikkeld om de risico’s terug te brengen tot een aanvaardbaar niveau. Na het selecteren van alle relevante maatregelen dienen de restrisico’s 'n kaart te worden gebracht door de eigenaar (1e lijn) 'n samenwerk'n met de (C)ISO. Als er wel restrisico’s zijn, bestaan er de volgende mogelijkheden:\nEr worden nieuwe maatregelen genomen o' de huidige maatregelen wordt verbeterd, zodat de restrisico’s verdwijnen. Een manager o' directielid die restrisico’s kan en mag dragen, accepteert deze 'n overleg met (C)ISO. Dit wordt formeel opgenomen 'n het risicoregister ‘Highbond’. Risico’s kunnen alleen voor een bepaalde periode worden geaccepteerd (bijvoorbeeld 3 maanden o' 1 jaar). Periodiek wordt bekeken o' het restrisico nog acceptabel be. ",
    "description": "",
    "tags": null,
    "title": "2. Doel informatiebeveiliging",
    "uri": "/pir/l2/doel/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nL1\n",
    "description": "",
    "tags": null,
    "title": "L1 - Strategisch",
    "uri": "/pir/l1/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nBreak'n A change that requires act'n by ye aft upgrad'n t' assure th' ship be still functional.\nChange A change 'n default behavior. This may requires act'n by ye / may or may not be revert'ble by configurat'n.\nNew Marks new behavior ye might find interest'n or comes configur'ble.\n1.1 (Gepland eind Q1-2023) New Start meertalige ondersteun'n.\nNew Eerste reviewronde op gehele beleid.\n1.0 (Gepland 22-12-15) New Integratie met GitHub.\nNew Integratie met Netlify.\nNew Toevoeg'n van tags aan alle pagina’s, zie de tags taxonomy.\nChange Ship brand'n aangepast.\nChange Menustructuur aangepast.\n0.1 (Gepland 2022-12-8) New POC L1 'n GOHUGO.\nNew POC L2 'n GOHUGO.\nNew POC L3 'n GOHUGO.\nNew POC L4 'n GOHUGO.\n",
    "description": "",
    "tags": null,
    "title": "Wijzigingshistorie",
    "uri": "/pir/basics/historie/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nAhoi\rDoelstell'n\nBeheren van de informatiebeveilig'n (IB) binnen de organisatie. Er be informatiebeveiligingsbeleid vastgesteld om de implementatie van informatiebeveilig'n 'n de organisatie te initiëren en te beheersen. Er vindt goedkeur'n van het informatiebeveiligingsbeleid plaats door het management, er be aandacht voor de toewijz'n van rollen en de coördinatie en beoordel'n van de implementatie van het beleid binnen de organisatie.\nBinnen de ANWB worden de meerdere beleidsniveaus onderscheiden met de volgende samenhang: De ANWB directie geeft opdracht aan de CISO om het strategische informatie-beveiligingsbeleid op te stellen en de directie keurt deze goed. De CISO formuleert het tactische informatiebeveiligingsbeleid genaamd ‘Informatiebeveiligingsbaseline’ en de CIO keurt deze goed. De CEO neemt dit ter kennisgev'n aan en zet dit op de agenda van de directie om na te leven. Standaarden en procedures zijn de operationele beleidsdocumenten die door de CISO en 1e lijn (desbetreffende lijnmanager) worden goedgekeurd. De praktische invull'n van de procedures worden vertaald 'n richtlijnen en werkinstructies door 1e lijn. Het informatiebeveiligingsbeleid be 'n overeenstemm'n met de bedrijfseisen en strategie van ANWB en 'n lijn met relevante wet- en regelgev'n. Het informatiebeveiligingsbeleid bevat doelstellingen en uitgangspunten voor informatiebeveilig'n om richt'n te geven aan alle activiteiten die verband houden met informatiebeveilig'n. Het informatiebeveiligingsbeleid (tenminste de uitgangspunten) be beschikbaar voor alle medewerkers en contractanten van de ANWB. De algemene en specifieke verantwoordelijkheden voor informatiebeveilig'n zijn beschreven, beschikbaar en bekend bij de medewerkers en contractanten van de ANWB. Een ANWB-gedragscode be beschikbaar. De uitgangspunten voor informatiebeveilig'n zoals beschreven 'n dit beleid worden periodiek geactualiseerd, zowel gepland als bij significante wijzigingen. Dit dient elk jaar goedgekeurd te worden door de CISO \u0026 CIO. ",
    "description": "",
    "tags": null,
    "title": "3. Informatiebeveiligingsbeleid",
    "uri": "/pir/l2/informatiebeveiligingsbeleid/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt isms\n",
    "description": "",
    "tags": null,
    "title": "3. ISMS",
    "uri": "/pir/l1/isms/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nInleid'n..\n",
    "description": "",
    "tags": null,
    "title": "L2 - Tactisch",
    "uri": "/pir/l2/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nL3\n",
    "description": "",
    "tags": null,
    "title": "L3 - Standaarden",
    "uri": "/pir/l3/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt org\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "4. Organiseren van informatiebeveiliging",
    "uri": "/pir/l2/organiseren/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt langenaam\n",
    "description": "",
    "tags": null,
    "title": "4. Systeemclassificatie en risico-assessmentproces",
    "uri": "/pir/l1/risk/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt Veilig personeel\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "5. Veilig personeel",
    "uri": "/pir/l2/personeel/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt w\u0026r\n",
    "description": "",
    "tags": null,
    "title": "5. Wet- en regelgeving",
    "uri": "/pir/l1/wet/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt bb\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "6. Beheer van bedrijfsmiddelen",
    "uri": "/pir/l2/bedrijfsmiddelen/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt org\n",
    "description": "",
    "tags": null,
    "title": "6. Organisatorische inrichting informatiebeveiliging",
    "uri": "/pir/l1/org/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt log\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "7. Bedrijfseisen voor logische toegangsbeveiliging",
    "uri": "/pir/l2/logischetoegang/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt inc\n",
    "description": "",
    "tags": null,
    "title": "7. Security incident management",
    "uri": "/pir/l1/secincmgt/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt Cryptografie\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "8. Cryptografie",
    "uri": "/pir/l2/cryptografie/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt Fysieke beveilig'n\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "9. Fysieke beveiliging en beveiliging van de omgeving",
    "uri": "/pir/l2/fysiek/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt bb2\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "10. Beveiliging bedrijfsvoering",
    "uri": "/pir/l2/bedrijfsvoering/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt cc\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "11. Communicatiebeveiliging",
    "uri": "/pir/l2/communicatie/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt acq\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "12. Acquisitie, ontwikkeling en onderhoud van informatiesystemen",
    "uri": "/pir/l2/acquisitie/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt lev\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "13. Leveranciersrelaties",
    "uri": "/pir/l2/leveranciers/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt inc\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "14. Beheer van informatiebeveiligingsincidenten",
    "uri": "/pir/l2/incidenten/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt bcm\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "15. Informatiebeveiligingsaspecten van bedrijfscontinuiteitsbeheer",
    "uri": "/pir/l2/bedrijfscontinuiteit/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nHier komt nal\nenzo\n..\n",
    "description": "",
    "tags": null,
    "title": "16. Naleving",
    "uri": "/pir/l2/naleving/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "cryptografie",
    "uri": "/pir/tags/cryptografie/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "encryptie",
    "uri": "/pir/tags/encryptie/index.html"
  },
  {
    "content": "\rArrr! Pirrrates\rFello' pirrates, be awarrre some stuff may not work fer us in this trrranslat'n. Like table of rrramblings, see'ng Merrrmaids, do'ng math or chemistrrry and stuff.\nWelkom bij informatiebeveiligingsbeleid van ORGX! Hier vind je ons volledige informatiebeveiligingsbeleid. Hier staat al het actuele beleid, en be een one-stop shop voor alle vragen omrent informatiebeveilig'n binnen ORGX.\nOmdat het gehost wordt op GITHUB, kun je rechtsbovenin klikken op ‘’ om wijzigingen voor te stellen, doe dit vooral! Alle voorgestelde wijzigingen worden eens per kwartaal door het CoE Informat'n Security behandeld. Alle wijzigingen op dit beleid zijn terug te lezen 'n de wijzigingshistorie.\nDaarnaast kun je een printversie verkrijgen door op een pagina rechtsbovenin de print-view op te vragen, door te klikken op ‘’\n",
    "description": "",
    "tags": null,
    "title": "Informatiebeveiligingsbeleid maar pirrrrate",
    "uri": "/pir/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "kwetsbaarheden",
    "uri": "/pir/tags/kwetsbaarheden/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/pir/tags/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "vulnerabilities",
    "uri": "/pir/tags/vulnerabilities/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/pir/categories/index.html"
  }
]
