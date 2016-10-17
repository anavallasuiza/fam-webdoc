/* eslint-disable quotes*/
'use strict';

const i18n = require('i18n');
//sergipicazo@elcritic.cat
const s1 = function(req) {

    return {
        id: 'sq1',

        adquired: [{
            type: 'title',
            text: i18n.__.call(req, 'Las causas del hambre están fijadas en nuestra mente: sequías, guerras y gobiernos corruptos. Casi siempre son circunstancias que atraviesan ellos. Nosotros casi nunca tenemos nada que ver en ello.')
        }, {
            type: 'autoplay',
            video: 's2p2.mp4',
            subtitles: `telediarios_${i18n.__.call(req,'CURRENT_LANG')}.srt`,
            door: true
        }],
        missing: [{
            type: 'viei',
            // bgsound: 'music.mp3',
            video: 's2loop.mp4',
            icon: {
                file: 'star.svg',
                width: 20,
                height: 20,
                offset: -10,
                class: 'pulse'
            },
            points: [{
                top: '57%',
                left: '93%',
                class: 'small',
                anchor: 'bottom right',
                borderPoint: true,
                tooltip: i18n.__.call(req, 'UE - Donald Tusk (President del Consell Europeu) i Jean Claude Junker (President de la Comissió Europea)'),
                content: {
                    title: i18n.__.call(req, 'Lliure Comerç i Dumping: el negoci perfecte per les multinacionals europees'),
                    text: i18n.__.call(req, "La UE ha signat en els darrers anys acords de lliure comerç amb diverses regions del món, entre aquestes els països ACP (Àfrica - Carib - Pacífic). A la vegada que insta als països del Sud a obrir les seves fronteres als productes i inversions europees, subvenciona l'agricultura i indústria europees pròpies que exporten a aquestes regions, generant una competència deslleial dels productes europeus subvencionats en front als productes produïts als països del Sud. Aquest fenònem d'exportació a preus subsidiats es anomenat dumping.")
                }
            }, {
                top: '70%',
                left: '73%',
                class: 'small',
                anchor: 'bottom right',
                tooltip: i18n.__.call(req, 'República de Korea - Park Geun-hye (primera ministra de Korea del Sud)'),
                content: {
                    title: i18n.__.call(req, 'Fam als teus mòbils'),
                    text: i18n.__.call(req, "A Korea del Sud la indústria tecnològica ha sigut una de les claus en el creixement econòmic del país. Empreses com Samsung o LG són d'origen Koreà. La indústria del mòbil requereix de l'extracció de minerals que es produeix a països com la República Democràtica del Congo. Una extracció que creix a mesura que s'incrementa el consum de mòbils arreu del món. La mineria vinculada a la indústria dels mòbils té un impacte directe sobre la quantitat i la qualitat de les terres disponibles als països del sud per la producció d'aliments.")
                }
            }, {
                top: '57%',
                left: '61%',
                class: 'small',
                anchor: 'bottom right',
                tooltip: i18n.__.call(req, 'BRICS (Brasil - Rusia - India - China - Sud-Àfrica)'),
                content: {
                    title: i18n.__.call(req, 'Canvi climàtic'),
                    text: i18n.__.call(req, "El model de creixement econòmic arreu del món, pero en especial als països més industrialitzats, s’ha basat en el consum d’energia de combustibles fòssils, el factor clau per explicar el Canvi Climàtic. En els darrers anys els anomenats països emergents s’han sumat a aquesta dinàmica, agreujant aquesta situació. Lluny d’abordar la fam com una conseqüència d’un fenòmen natural (fenòmens metereològics que proliferen arran del canvi climàtic com sequeres, inundacions, huracans …), és important apuntar a l’origen humà del canvi climàtic per explicar les causes dels fenòmens metereològics amb un impacte directe sobre la seguretat i la sobirania alimentària dels pobles.")
                }
            }, {
                top: '54%',
                left: '49%',
                class: 'small',
                anchor: 'bottom right',
                tooltip: i18n.__.call(req, 'US - Obama (President)'),
                content: {
                    title: i18n.__.call(req, 'Ajuda alimentària per ajudar les empreses agroindustrials a Estats Units'),
                    text: i18n.__.call(req, "USAid és l'agència de cooperació nordamericana. És una de les agències que més ha apostat al llarg de la història i fins avui per l'ajuda alimentària com a eina de lliuta contra la fam, en situacions d'emergència, etc. L'ajuda alimentària acostuma a aprofitar excedents en els països donants per inundar els països del Sud, en situació o no d'emergència, d'aliments gratuïts, enfonsant així l'agricultura i els pagesos locals. És una de les grans contradiccions del sistema internacional de lluita contra la fam, ja que al enviar als països del Sud els excedents alimentaris de les indústries del Nord, o productes específics (preparats nutricionals) que es subvencionen totament amb els recursos de la cooperació, estan en realitat desestructurant el teixit agrícola als països receptors, agreujant la situació d'inseguretat alimentària en aquests països. Per a 2017 els Estats Units preveuen invertir 1.350 milions de dòlars en ajuda alimentària per països com Sudan del Sud, Irak, Siria, Yemen i d'altres a Centreamèrica i l'est d'Àfrica (afectats per fenòmens com El Niño). Uns recursos que van directament als productors d'arròs, cereals i altres agroindustries nordamericanes.")
                }
            }, {
                top: '57%',
                left: '35%',
                class: 'small',
                anchor: 'bottom left',
                tooltip: i18n.__.call(req, 'Xina - Xi Jinping (President)'),
                content: {
                    title: i18n.__.call(req, 'La carrera pel control dels recursos la lidera Xina'),
                    text: i18n.__.call(req, "En els darrers anys la Xina ha augmentat la seva presència als països del Sud. Com a agent de cooperació (sota l'etiqueta de cooperació 'Sud-Sud'), com a prestamista, com a inversor i, sobretot, com a importador de recursos naturals. El creixement econòmic a Xina, junt amb el creixent poder adquisitiu d'una població en augment, ha estat possible en part gràcies a l'accés a recursos naturals (aliments, minerals, energètics ...) provinents fonamentalment d'Àfrica i Amèrica Llatina. Acaparament de terres, minerals i aliments que tot i generar beneficis per les elits econòmiques i polítiques als països del Sud, van en detriment de les possibilitats dels pobles del Sud d'avançar cap a la Sobirania Alimentària.")
                }
            }, {
                top: '58%',
                left: '28%',
                class: 'small',
                anchor: 'bottom left',
                tooltip: i18n.__.call(req, 'Aràbia Saudí - Rei Salman'),
                content: {
                    title: i18n.__.call(req, "Acaparament de terres ... i d'aigua"),
                    text: i18n.__.call(req, "Aràbia Saudí és un dels països que acumula més casos d'acaparament de terres a l'Àfrica. Tot i que, Aràbia Saudí no té un problema d'escassedat de terres, sí el té d'escassedat d'aigua, que els inversors saudís troben, per exemple, a terres etíops. Unes terres i una aigua que, per tant, són negades a les poblacions rurals de països com Etiòpia. Aràbia Saudí, que acumula milions d'hectàries a l'estranger (fonamentalment a països com Etiòpia, Senegal o Mali) per produir aliments (arròs, cereals, etc) per exportar de nou al país, és tan sols la punta de l'iceberg de milers de milions d'hectàries arreu en mans d'empreses transnacionals, inversors públics i privats, i agències de desenvolupament.")
                }
            }, {
                top: '59%',
                left: '1%',
                class: 'small',
                anchor: 'bottom left',
                tooltip: i18n.__.call(req, 'Senegal -  Macky Sall (President - representant del NEPAD)'),
                content: {
                    title: i18n.__.call(req, "Promeses, plans i cimeres"),
                    text: i18n.__.call(req, "Els representants dels països africans assisteixen com a convidats des de fa anys a les cimeres del G8 o del G20 per tractar temes d'interès per a ells com la lluita contra la FAM. En aquestes cimeres es fan promeses d'ajuda al desenvolupament i s'acorden plans de desenvolupament, com l'ambiciós NEPAD (New Partnership for Africa's Development), que havia de soposar milers de milions en inversions i ajudes als països d'Àfrica Subsahariana, i que ha acabat sent una gran decepció. De nou, una promesa trencada. Els líders africans, com a convidats de pedra a cimeres internacionals on es parla de desenvolupament i fam, són generalment relegats a un extrem de la fotografia, sense possibilitat (o voluntat) d'aixecar la veu davant de les potències mundials.")
                }
            }, {
                top: '49%',
                left: '32%',
                class: 'small',
                anchor: 'bottom left',
                tooltip: i18n.__.call(req, 'Regne Unit. David Cameron (Primer Ministre)'),
                content: {
                    title: i18n.__.call(req, "L'especulació alimentària als mercats financers"),
                    text: i18n.__.call(req, "La City de Londres és un dels principals centres financers a nivell global. El preu dels aliments es determina a les borses de valors, la més important de les quals, a nivell mundial, és la de Chicago, mentre que a Europa els aliments es comercialitzen a les borses de futurs de Londres, París, Amsterdam i Frankfurt. Però, en l’actualitat, la major part de la compra i venda d’aquestes mercaderies no correspon a intercanvis comercials reals. Es calcula que un 75% de la inversió financera en el sector agrícola és de caràcter especulatiu. Els mateixos bancs, fons d’alt risc, companyies d’assegurances, que van causar la crisi financera global, són els que especulen amb el menjar, aprofitant-se de uns mercats globals profundament desregularitzats i altament rendibles.")
                }
            }, {
                top: '50%',
                left: '10%',
                class: 'small',
                anchor: 'bottom left',
                tooltip: i18n.__.call(req, 'Espanya - Mariano Rajoy (President)'),
                content: {
                    title: i18n.__.call(req, "El que amaga l'ajuda: condicions i inversions financeres"),
                    text: i18n.__.call(req, "L'ajuda al desenvolupament es presenta habitualment com una eina essencialment positiva, però sovint amaga instruments amb efectes secundaris sobre les poblacions del Sud. Durant anys l'ajuda al desenvolupament, també a l'Estat espanyol, s'ha condicionat als interessos geopolítics i econòmics dels països donants. Un dels actuals instruments de cooperació financera és FONPRODE (Fondo de Promoción del Desarrollo). Un dels seus principals objectius és dedicar recursos de la cooperació espanyola a inversions als països del Sud a través de fons d'inversió públics o privats. Alguns d'aquests fons d'inversió tenen seu a paradisos fiscals i algunes de les inversions realitzades amb recursos de la cooperació espanyola han anat a projectes que agreugen fenòmens com l'acaparament de terres o la dedicació de la terra a l'exportació enlloc de produir per garantir la sobirania alimentària al Sud.")
                }
            }, {
                top: '42%',
                left: '51%',
                class: 'small',
                anchor: 'bottom left',
                tooltip: i18n.__.call(req, 'Banc Mundial - Jim Yong Kim (President)'),
                content: {
                    title: i18n.__.call(req, "Un model de desenvolupament fallit"),
                    text: i18n.__.call(req, "El Banc Mundial, juntament amb l’FMI és corresponsable de l'aplicació de mesures d'ajust estructural als països del Sud. Però més enllà d'això el Banc Mundial ha estat un dels principals impulsors, en base a recomanacions i crèdit, d'un procés de configuració del model productiu i agrícola als països del Sud, basat en la 'modernització' i la 'industrialització' de l'agricultura, l'extracció de recursos (especialment energètics i minerals) i la construcció de grans infraestructures, tot plegat al servei de l'economia global, és a dir, del consum als països del Nord, dels interessos dels grans capitals i de les estratègies de les empreses multinacionals. A través del seu crèdit el Banc Mundial ha configurat el teixit agrícola als països del Sud, 'recomanant' especialització i monocultius, afectant greument la diversitat de cultius i per tant la seguretat i sobirania alimentària; ha dirigit el procés d'internacionalització del sector agrícola de nombrosos països, afavorint que les millors terres, en mans de grans empreses, produeixin per mercats estrangers i no per cobrir les necessitats alimentàries locals; ha finançat la construcció de les infraestructures necessàries per a l'explotació del petroli, el gas o la mineria, amb impactes directes sobre el mediambient; i un llarg etcètera de receptes que han derivat en un creixent deute i una decreixent sobirania alimentària.")
                }
            }, {
                top: '42%',
                left: '45%',
                class: 'small',
                anchor: 'bottom left',
                tooltip: i18n.__.call(req, 'Ban Ki Moon - Secretari General de Nacions Unides'),
                content: {
                    text: i18n.__.call(req, "Nacions Unides, juntament amb el Banc Mundial, estan convençuts i així ho planifiquen en els seus programes dels diferents organismes, que Àfrica pot convertir-se en el gran graner del món que alimenti a la resta del planeta. Però abans cal que es produeixin una sèrie de canvis interns. Els seus experts defensen que per aconseguir-ho al trencar el cicle de l’agricultura de subsistència (la que alimenta directament les famílies i no és per venda a escala), invertir en infraestructures que donin suport al creixement del sector (carreteres, ponts, embassaments, etc…) i aconseguir així economies d’escala.")
                }
            }, {
                top: '43%',
                left: '31%',
                class: 'small',
                anchor: 'bottom left',
                tooltip: i18n.__.call(req, 'FMI - Christine Lagarde (Directora Gerent)'),
                content: {
                    title: i18n.__.call(req, "De deutes i austeritat que provoquen fam"),
                    text: i18n.__.call(req, "El Fons Monetari Internacional (FMI) és responsable de l'aplicació de programes d'ajustament estructural arreu del món. Des de l'esclat de la crisi del deute dels anys 80 a Amèrica Llatina, Àfrica i Àsia, la recepta de l'FMI per fer front a les situacions de sobreendeutament ha estat l'austeritat. Una recepta que s'aplica als països que demanen crèdit al FMI o a aquells que necessiten una reducció del seu deute. Una recepta que inclou ingredients com retallades dels drets socials, privatitzacions, liberalització del mercat laboral, del comerç, de les finances, eliminació de subsidis als productors, o reestructuració de l'estructura productiva dels països del Sud per dirigir-la cap a les necessitats del mercat global. Aquestes polítiques han tingut un impacte directe sobre la sobirania i la seguretat alimentària dels pobles del Sud i són una de les principals causes de la manca de capacitat dels Estats per fer front a situacions d'escassedat i fams.")
                }
            }, {
                top: '31%',
                left: '95%',
                class: 'small',
                anchor: 'top right',
                borderPoint: true,
                tooltip: i18n.__.call(req, 'OMC'),
                content: {
                    title: i18n.__.call(req, "Mercantilització de l'alimentació"),
                    text: i18n.__.call(req, "Els acords en el si de l'OMC, tot i que han avançat menys del que els països del Nord haguessin volgut, han suposat la mercantilització d'àmbits com l'alimentació i els recursos naturals. Els països del sud han resistit i aturat diverses rondes de liberalització comercial, amb la demanda clara de defensar certs sectors, com el dels aliments. El que no han aconseguit països com EEUU o la UE en el marc de l'OMC ho han perseguit a través de tractats bilaterals.")
                }
            }]
        }, {
            type: 'title',
            text: i18n.__.call(req, 'Tornar al mosaic'),
            terminal: 's2'

        }]

    };

};

module.exports = s1;
