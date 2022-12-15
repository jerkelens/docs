+++
archetype = "post"
title = "Standaard: Cryptografie"
menutitle = "Cryptografie"
weight = 1
tags = ["cryptografie","encryptie"]
date = "2021-03-30"
+++

{{% notice style="note" title="Doelstelling" icon="bullseye" %}}
Zorgen voor correct en doeltreffend gebruik van cryptografie om de vertrouwelijkheid, authenticiteit en/of integriteit van informatie te beschermen.
{{% /notice %}}

{{% notice style="info" title="Relaties" icon="link" %}}
* **North Star capabilities**: 'Domeinarchitectuur Security' - Control 10
* **ISO/IEC**: 27001:2022, 27002:2022
* **CIS**: artikel 1-5

{{% /notice %}}


{{< tabs >}}
{{% tab name="Baseline maatregelen" %}}
| Control ID | Maatregel | Verantwoordelijke |
|:---:|:--|:--|
|   CRG-01   | Toepassing van beveiligingsmaatregelen (waaronder encryptie) vindt plaats op basis van informatieclassificatie van de desbetreffende verwerking. Dit geschied op basis van risicoanalyse en functionaliteitseisen | Eigenaar ICT-bedrijfsmiddel |
|   CRG-02   | ANWB volgt geldende wet- en regelgeving voor toepassing van passende encryptiemaatregelen en -parameters (zoals onder andere beschreven door het NCSC: https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-transport-layer-security-tls  | Eigenaar ICT-bedrijfsmiddel |
|   CRG-03   | Erkende cryptografische technieken per toepassingsgebied zijn:<br>* Integriteit: encryptie (hashing)<br>* Vertrouwelijkheid: encryptie<br>* Onweerlegbaarheid: digitale handtekening<br>* Authenticatie: digitale handtekening<br><br>Daar waar borging van verschillende toepassingsgebieden nodig is, kan dit leiden tot toepassing van meerdere cryptografische technieken.| Eigenaar ICT-bedrijfsmiddel |
|   CRG-04   | Transportversleuteling is een afgeleide van informatieclassificatie en volgt onderstaande schema:<br>* Classificatieniveau ‘laag’: transportbeveiliging binnen en buiten het interne netwerk<br>* Classificatieniveau ‘midden’: transportbeveiliging binnen en buiten het interne netwerk<br>* Classificatieniveau ‘hoog’: transport en berichtbeveiliging  | Eigenaar ICT-bedrijfsmiddel |
|   CRG-05   | Tussen alle serversystemen van de ANWB, danwel in gebruik door de ANWB wordt altijd mutual TLS gebruikt   | Eigenaar ICT-bedrijfsmiddel |
|   CRG-06   | Voor validatie van e-mailsystemen wordt minimaal STARTTLS gebruikt | Eigenaar ICT-bedrijfsmiddel |
|   CRG-07   | Om de informatie met het classificatielabel ‘vertrouwelijk’ en ‘zeer vertrouwelijk’ op verwijderbare media te beschermen, zodat deze informatie niet in onbevoegde handen kan vallen bij onjuist gebruik, verlies of diefstal, dient deze te worden versleuteld. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-08   | Om authenticatiemiddelen zoals wachtwoorden te beschermen tegen inzage en wijzigingen door onbevoegden tijdens transport en opslag, dienen deze te worden versleuteld. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-09   | Om een correcte en veilige bediening van mobiele (privé-)apparatuur en thuiswerkplek te waarborgen, is de ANWB bevoegd om beveiligingsinstellingen af te dwingen. Dit heeft betrekking op zowel door de ANWB verstrekte middelen, als privé-apparatuur ('bring your own device' (BYOD)). Dit betreft onder meer versleuteling. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-10   | 	Om bedrijfsinformatie op mobiele apparaten te beveiligen zijn deze zo ingericht dat geen bedrijfsinformatie wordt opgeslagen (‘zero footprint’). Voor het geval dat zero footprint (nog) niet realiseerbaar is, of functioneel onwenselijk is, wordt de toegang tot het apparaat beschermd door middel van een wachtwoord, eventuele biometrie zoals fingerprint, en is apparaat versleuteling geïmplementeerd (conform classificatie-eisen). Dit gebeurt in ieder geval bij beveiligde opslag van ANWB informatie en bedrijfsinformatie van derde partijen, waar de ANWB niet de bronhouder is, maar via het ANWB platform wordt ontsloten. Als deze informatie al wordt toegestaan op het apparaat. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-11   | Voor alle data geldt dat versleuteling geregeld is op een manier die recht doet aan de ANWB beschermingseisen zoals beschreven in het ‘Informatiebeveiligingsbeleid’. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-12   | Interne en externe communicatie naar webservers verloopt altijd over HTTPS | Eigenaar ICT-bedrijfsmiddel |
|   CRG-13   | Digitale documenten van de ANWB waar derden rechten aan kunnen ontlenen, maken gebruik van certificaten voor tekenen en/of encryptie. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-14   | Dataencryptie vindt plaats in alle fasen van de data levenscyclus: creatie, opslag, gebruik, deling, archivering, vernietiging en ongeacht de gegevensdrager | Eigenaar ICT-bedrijfsmiddel |
|   CRG-15   | ANWB is altijd de eigenaar en houder van private keys. In het geval van ‘hosted key vaults’ worden ANWB-keys daar geplaatst. Het eigenaarschap van elke key pair ligt bij de diensteigenaar | Eigenaar ICT-bedrijfsmiddel |
|   CRG-16  | Data dat buiten systemen van de ANWB wordt opgeslagen, dient te worden voorzien van dataencryptie waarbij de ANWB eigenaar is van het sleutelpaar | Eigenaar ICT-bedrijfsmiddel |
|   CRG-17   | Data in Transit (data wat van locatie A naar locatie B gaat) dient altijd te worden voorzien van transportversleuteling | Eigenaar ICT-bedrijfsmiddel |
|   CRG-18   | Data at Rest (data ergens opgeslagen op disk) dient altijd te worden voorzien van minimaal diskencryptie, en afhankelijk van de informatieclassificatie ook van dataencryptie | Eigenaar ICT-bedrijfsmiddel |
|   CRG-19  | Data in Use (data die momenteel ingelezen is als onderdeel van een actieve verwerking) wordt voorzien van format-preserving encryption áls de dienst dit ondersteunt. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-20  | Direct na ontvangst van het certificaat, maar in ieder geval alvorens over te gaan tot installatie en gebruik, het digitale certificaat op haar volledige en juiste inhoud zal worden gecontroleerd. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-21  | Certificaten worden centraal bijgehouden in een certificate inventory. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-22  | Daar waar van toepassing moet ‘reversible encryption’ altijd worden uitgeschakeld. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-23  | Keys worden gegenereerd door `..` en bewaard in `..` | `??` |
|   CRG-24  | Keypairs worden na creatie overgedragen aan de producteigenaren via `..` |  `??`   |
|   CRG-25  | Key revocation wordt gedaan door `..` | `??` |
|   CRG-26  | Key renewals worden gedaan door `..`   | `??` |
|   CRG-27  | Er zijn op dit moment binnen ANWB geen use-cases voor hardtokens | Eigenaar ICT-bedrijfsmiddel |
|   CRG-28  | Diskencryptie van harde schijven (Windows clients): BitLocker XTS-AES 128 of hoger | Eigenaar ICT-bedrijfsmiddel |
|   CRG-29  | Diskencryptie van harde schijven (Windows clients) wordt opgeslagen in TPM (minimaal versie 1.2) | Eigenaar ICT-bedrijfsmiddel |
|   CRG-30  | Andere diskencryptiestandaarden die gebruikt mogen worden, dienen FIPS 140-2 gecertificeerd te zijn | Eigenaar ICT-bedrijfsmiddel |
|   CRG-31  | Keylengtes, algoritmes, encryptiemethoden en de toepassing van salts worden bepaald op basis van risicoanalyse van de desbetreffende usecase  | Eigenaar ICT-bedrijfsmiddel |
|   CRG-32  | SSL 1.0, 2.0 en 3.0, alsmede TLS 1.0, 1.1 en 1.2 mogen niet meer gebruikt worden, TLS 1.3 is standaard (zie: https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 13) | Eigenaar ICT-bedrijfsmiddel |
|   CRG-33  | Voor geaccepteerde hashing algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 18 | Eigenaar ICT-bedrijfsmiddel |
|   CRG-34  | Voor geaccepteerde sleuteluitwisseling algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 18. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-35  | Voor geaccepteerde certificaatvalidatie algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 19. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-36  | Voor geaccepteerde bulkversleuteling algoritmes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 20 | Eigenaar ICT-bedrijfsmiddel |
|   CRG-37  | Voor geaccepteerde sleutellengtes voor TLS volgt ANWB de classificatie ‘Goed’ voor algoritmes zoals beschreven in https://www.ncsc.nl/binaries/ncsc/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1/ICT-beveiligingsrichtlijnen+voor+Transport+Layer+Security+v2.1.pdf, pagina 20. | Eigenaar ICT-bedrijfsmiddel |
|   CRG-38  | De TLS certificaat mag maximaal 13 maanden gelden zijn, dit weerspiegelt ANWB voor certificaten die intern worden uitgegeven via een PKI op basis van het ‘webserver’-template. | Eigenaar ICT-bedrijfsmiddel |

{{% /tab %}}
{{% tab name="Boven-baseline maatregelen" %}}
| Control ID | Maatregel | Verantwoordelijke |
|:---:|:--|:--|
|   CRG-39   | Certificate pinning voor boven baseline systemen is wenselijk, indien de dienst dit ondersteunt. | Eigenaar ICT-bedrijfsmiddel |
{{% /tab %}}
{{< /tabs >}}