// Database Object holding all the content you researched
const warData = {
    ww1: {
        title: "World War I (1914–1918)",
        theme: { bg: "#23211f", accent: "#c5a059", card: "#2e2a26" },
        causes: [
            { 
                title: "Militarism", 
                text: "Massive European naval arms race.", 
                img: "Militarism.jpg",
                extendedText: "By the early 20th century, European powers were engaged in a massive arms race. Countries like Germany and Great Britain rapidly expanded their navies and armies, creating an environment where military force was seen as the primary solution to diplomatic problems. This constant preparation for war fostered a culture of aggression and suspicion among nations."
            },
            { 
                title: "Alliances", 
                text: "Secret web of treaties dragging nations together.", 
                img: "Alliance.jpg",
                extendedText: "Europe was divided by a secret web of treaties. The Triple Entente consisted of France, Great Britain, and Russia, while the Triple Alliance (Central Powers) included Germany, Austria-Hungary, and Italy. Instead of preserving peace, these interlocking defense agreements meant that if any two nations went to war, the rest would inevitably be dragged into a global conflict."
            },
            { 
                title: "Imperialism", 
                text: "Intense global competition for African and Asian colonies.", 
                img: "Imperialism.jpg",
                extendedText: "The industrializing nations of Europe competed fiercely for wealth and resources by colonizing regions in Africa and Asia. This intense global competition for empires generated bitter rivalries and border disputes. Conflicts over colonial expansion constantly pushed European powers to the brink of war."
            },
            { 
                title: "Nationalism", 
                text: "Boiling ethnic tensions in the Balkan region.", 
                img: "Nationalism.jpg",
                extendedText: "Intense national pride and a desire for self-determination created boiling ethnic tensions, particularly in the Balkan region. The Austro-Hungarian Empire struggled to control its diverse populations, while nations like Serbia sought to unite Slavic peoples. This fierce nationalism turned the Balkans into the 'powder keg' of Europe."
            },
            { 
                title: "The Spark", 
                text: "The assassination of Archduke Franz Ferdinand in Sarajevo.", 
                img: "Spark1.jpg",
                images: ["Spark1.jpg", "spark2.jpg", "spark 3.jpg", "spark4.jpg", "spark5.jpg"],
                extendedText: "The immediate catalyst for the war occurred on June 28, 1914, when Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, was assassinated in Sarajevo by Gavrilo Princip, a Serbian nationalist. This single act of violence ignited the powder keg, triggering the July Crisis and activating the alliance system that plunged the world into war."
            }
        ],
        alliances: `<strong>The Allies:</strong> France, Great Britain, Russia, USA<br><br>
                    <strong>The Central Powers:</strong> Germany, Austria-Hungary, Ottoman Empire`,
        alliancesSplit: {
            allies: {
                title: "Allied Powers",
                figures: [
                    {
                        name: "King George V", country: "United Kingdom",
                        desc: ["King of Britain during World War I", "Represented British unity and morale during the conflict", "Oversaw the British Empire during its massive wartime mobilization"],
                        images: ["kingGeorgeV1.jpg", "kingGeorgeV2.jpg", "kingGeorgeV3.jpg"]
                    },
                    {
                        name: "David Lloyd George", country: "United Kingdom",
                        desc: ["Became Prime Minister in 1916", "Strengthened Britain’s war production and military coordination", "Helped lead the Allies to victory"],
                        images: ["DavidLloyd1.jpg", "DavidLloyd2.jpg", "DavidLloyd3.jpg"]
                    },
                    {
                        name: "Raymond Poincaré", country: "France",
                        desc: ["President of France throughout most of WWI", "Strong supporter of resistance against Germany", "Worked closely with Allied governments"],
                        images: ["RaymondPoincare1.jpg", "RaymondPoincare2.jpg", "RaymondPoincare3.jpg"]
                    },
                    {
                        name: "Georges Clemenceau", country: "France",
                        desc: ["Nicknamed “The Tiger”", "Became Prime Minister in 1917", "Demanded total victory over Germany", "Played a major role in the Treaty of Versailles"],
                        images: ["GeorgeClemenceau1.jpg", "GeorgeClemenceau2.jpg"]
                    },
                    {
                        name: "Tsar Nicholas II", country: "Russian Empire",
                        desc: ["Ruled Russia at the beginning of WWI", "Personally took command of the Russian army in 1915", "Faced military failures and domestic unrest", "Abdicated during the Russian Revolution in 1917"],
                        images: ["TsarNicholasII1.jpg", "TsarNicholasII2.jpg", "TsarNicholasII3.jpg"]
                    },
                    {
                        name: "Vladimir Lenin", country: "Russia / Soviet Russia",
                        desc: ["Led the Bolsheviks during the Russian Revolution", "Withdrew Russia from WWI through the Treaty of Brest-Litovsk"],
                        images: ["VladimirLenin.jpg", "VladimirLenin2.jpg"]
                    },
                    {
                        name: "Woodrow Wilson", country: "United States",
                        desc: ["Led the U.S. after entering the war in 1917", "Proposed the “Fourteen Points” peace plan", "Helped establish the idea of the League of Nations"],
                        images: ["woodrow1.jpg", "woodrow2.jpg", "woodrow3.jpg"]
                    },
                    {
                        name: "Ferdinand Foch", country: "Military Leader",
                        desc: ["Coordinated Allied armies in the final stage of the war", "Led successful offensives against Germany in 1918"],
                        images: ["FerdinandFoch.jpg"]
                    },
                    {
                        name: "Douglas Haig", country: "Military Leader",
                        desc: ["Commander of British forces on the Western Front", "Led the Battle of the Somme"],
                        images: ["DouglasHaig.jpg"]
                    },
                    {
                        name: "John J. Pershing", country: "Military Leader",
                        desc: ["Led U.S. forces in Europe", "Helped strengthen Allied offensives in 1918"],
                        images: ["JohnJPershing.jpg"]
                    }
                ]
            },
            central: {
                title: "Central Powers",
                figures: [
                    {
                        name: "Kaiser Wilhelm II", country: "German Empire",
                        desc: ["Emperor of Germany during the war", "Strong supporter of military expansion", "Encouraged aggressive foreign policies", "Abdicated after Germany’s defeat in 1918"],
                        images: ["WilhelmII1.jpg", "WilhelmII2.jpg", "WilhelmII3.jpg"]
                    },
                    {
                        name: "Paul von Hindenburg", country: "Germany",
                        desc: ["Senior German military leader", "Helped direct Germany’s war strategy", "Became a national hero in Germany"],
                        images: ["PaulvonHindenburg.jpg"]
                    },
                    {
                        name: "Erich Ludendorff", country: "Germany",
                        desc: ["Worked closely with Hindenburg", "Directed major German offensives", "Influenced German wartime decisions heavily"],
                        images: ["ErichLudendorff.jpg"]
                    },
                    {
                        name: "Franz Joseph I", country: "Austria-Hungary",
                        desc: ["Ruled during the beginning of the war", "His empire struggled with ethnic divisions and military setbacks"],
                        images: ["FranzJoseph1.jpg", "FranzJoseph2.jpg", "FranzJoseph3.jpg"]
                    },
                    {
                        name: "Charles I of Austria", country: "Austria-Hungary",
                        desc: ["Succeeded Franz Joseph in 1916", "Tried unsuccessfully to negotiate peace"],
                        images: ["CharlesI1.jpg", "CharlesI2.jpg", "CharlesI3.jpg"]
                    },
                    {
                        name: "Mehmed V", country: "Ottoman Empire",
                        desc: ["Sultan during most of the war", "Ottoman Empire allied with Germany and Austria-Hungary"],
                        images: ["MehmedV1.jpg", "MehmedV2.jpg", "MehmedV3.jpg"]
                    },
                    {
                        name: "Enver Pasha", country: "Ottoman Empire",
                        desc: ["Key Ottoman military commander", "Helped bring the Ottoman Empire into the war"],
                        images: ["EnverPasha1.jpg", "EnverPasha2.jpg"]
                    }
                ]
            }
        },
        timeline: [
            { 
                year: "1914", 
                text: "July Crisis triggers alliances; Trench warfare begins at the Battle of the Marne.",
                extendedTitle: "1914 — Outbreak of War & Trench Warfare",
                extendedText: "<strong>Battle of the Marne</strong><br>First Battle of the Marne stopped Germany’s rapid invasion of France. Both sides dug trenches, creating a stalemate.<br><br><strong>Trench Warfare</strong><br>Soldiers lived in mud-filled trenches and rat-infested shelters under constant artillery bombardment. Disease spread rapidly, food shortages were common, and psychological trauma (“shell shock”) affected many soldiers.",
                images: ["battleofmarne.jpg", "trenchwarfare.jpg", "trenchwarfare(2).jpg", "artillerybombing.jpg"]
            },
            { 
                year: "1915", 
                text: "The sinking of the Lusitania turns global public opinion against Germany.",
                extendedTitle: "1915 — Gallipoli and Lusitania",
                extendedText: "<strong>Gallipoli Campaign</strong><br>An Allied attempt to capture the Dardanelles and weaken the Ottoman Empire. The campaign failed with heavy casualties.<br><br><strong>RMS Lusitania</strong><br>A German submarine sank the British passenger ship RMS Lusitania, killing civilians and increasing anti-German sentiment.",
                images: ["lusitania.jpg"]
            },
            { 
                year: "1916", 
                text: "The brutal, agonizing battles of Verdun and the Somme result in millions of casualties.",
                extendedTitle: "1916 — Verdun and the Somme",
                extendedText: "<strong>Battle of Verdun</strong><br>Became one of the longest battles in history.<br><br><strong>Battle of the Somme</strong><br>Caused over one million casualties.<br><br><strong>Industrialized Warfare</strong><br>World War I introduced terrifying new weapons. Machine guns could fire hundreds of bullets per minute, making frontal assaults deadly. Poison gases included Chlorine gas and Mustard gas. Early tanks were introduced to break trench stalemates.",
                images: ["battleofverdun.jpg", "Battleofthesomme.jpg", "earlytanks.jpg", "ww1machineguns.jpg", "ww1chemicalweapons.jpg"]
            },
            { 
                year: "1917", 
                text: "The United States officially enters the war; Russia exits due to internal Revolution.",
                extendedTitle: "1917 — Turning Point",
                extendedText: "<strong>United States Enters the War</strong><br>The Zimmermann Telegram and unrestricted submarine warfare pushed the United States into the war.<br><br><strong>Russian Revolution</strong><br>Political unrest led to the fall of the Russian monarchy. The Russian Revolution forced Russia to leave the war.",
                images: ["Americans.jpg", "ww1aircraft.jpg"]
            },
            { 
                year: "1918", 
                text: "The Armistice is signed on November 11, silencing the guns.",
                extendedTitle: "1918 — Final Offensive, Armistice & Aftermath",
                extendedText: "Germany launched the Spring Offensive but failed. Fresh American troops helped the Allies counterattack successfully.<br><br>On November 11, 1918: Germany agreed to an armistice and fighting officially stopped.<br><br><strong>Treaty of Versailles (1919)</strong><br>Officially ended the war. Terms Imposed on Germany: Accepted blame for the war, paid massive reparations, lost territories, and reduced military strength. These harsh conditions later contributed to the rise of extremism in Germany.",
                images: ["springoffensive.jpg", "trenchaftermath.jpg", "treatyofversailles.jpg"]
            }
        ]
    },
    ww2: {
        title: "World War II (1939–1945)",
        theme: { bg: "#1a1c1e", accent: "#e74c3c", card: "#24272c" },
        causes: [
            {
                title: "Treaty of Versailles & Great Depression",
                text: "Economic collapse and national humiliation created anger among Germans.",
                extendedText: "Germany suffered severe punishment after World War I. Economic collapse and humiliation created anger among Germans. Furthermore, the Great Depression devastated economies worldwide, leading many people to support extremist leaders promising recovery and national strength.",
                img: "treatyofversailles.jpg",
                images: ["treatyofversailles.jpg"]
            },
            {
                title: "Rise of Totalitarianism",
                text: "Extremist regimes sought military expansion and territorial conquest.",
                extendedText: "Adolf Hitler rose to power in Nazi Germany promising military expansion, national revival, and territorial conquest (Lebensraum). Meanwhile, Benito Mussolini pursued aggressive expansion for Fascist Italy, and Imperial Japan sought dominance in East Asia and the Pacific.",
                img: "FascismGerman.jpg",
                images: ["FascismGerman.jpg", "FascismItaly.jpg"]
            },
            {
                title: "Failure of Appeasement",
                text: "Britain and France allowed Hitler to annex territories without opposition.",
                extendedText: "Britain and France allowed Hitler to annex territories without military opposition, hoping to avoid another war. Major examples include the Annexation of Austria and the Occupation of Czechoslovakia. This policy of appeasement ultimately failed and only encouraged further aggression.",
                img: "Appeasement.jpg",
                images: ["Appeasement.jpg", "appeasement2.jpg"]
            },
            {
                title: "Beginning of the War",
                text: "Germany's invasion of Poland ignited the conflict.",
                extendedText: "On September 1, 1939, Germany invaded Poland using rapid and overwhelming 'Blitzkrieg' tactics. Two days later, Britain and France officially declared war on Germany, marking the beginning of World War II.",
                img: "Blitzkrieg.jpg",
                images: ["Blitzkrieg.jpg", "Blitzkrieg2.jpg"]
            }
        ],
        alliances: `<strong>The Allies (The Big Three):</strong> Great Britain, Soviet Union, USA<br><br>
                    <strong>The Axis Powers:</strong> Germany, Italy, Japan`,
        alliancesSplit: {
            allies: {
                title: "The Allied Powers",
                figures: [
                    {
                        name: "Winston Churchill",
                        country: "United Kingdom",
                        desc: ["Prime Minister of the UK (1940–1945)", "Refused peace negotiations with Hitler", "Led Britain during the Battle of Britain", "Coordinated Allied strategy with Roosevelt and Stalin"],
                        images: ["winstonChurchill.jpg", "winstonChurchill2.jpg"]
                    },
                    {
                        name: "Bernard Montgomery",
                        country: "United Kingdom",
                        desc: ["British Field Marshal", "Defeated Rommel at El Alamein", "Major commander during D-Day"],
                        images: ["BernardMontmogery.jpg", "BernardMontmogery2.jpg", "BernardMontmogery3.jpg"]
                    },
                    {
                        name: "Alan Turing",
                        country: "United Kingdom",
                        desc: ["Cryptanalyst and mathematician", "Helped crack the German Enigma code", "Played a major role in Allied intelligence victories"],
                        images: ["AlanTuring.jpg", "AlanTuring2.jpg", "AlanTuring3.jpg"]
                    },
                    {
                        name: "Franklin D. Roosevelt",
                        country: "United States",
                        desc: ["President of the United States (1933–1945)", "Only U.S. president elected four times", "Led American mobilization and supported Allies through Lend-Lease"],
                        images: ["FranklinRooselvelt.jpg", "FranklinRooselvelt2.jpg", "FranklinRooselvelt3.jpg"]
                    },
                    {
                        name: "Harry S. Truman",
                        country: "United States",
                        desc: ["Oversaw final months of the war", "Authorized atomic bombings of Hiroshima and Nagasaki", "Became president after Roosevelt's death"],
                        images: ["HarryTruman.jpg", "HarryTruman2.jpg", "HarryTruman3.jpg"]
                    },
                    {
                        name: "Dwight D. Eisenhower",
                        country: "United States",
                        desc: ["Supreme Allied Commander in Europe", "Planned and directed D-Day invasion", "Coordinated multinational Allied armies"],
                        images: ["DwightEisenhower.jpg", "DwightEisenhower2.jpg", "DwightEisenhower3.jpg"]
                    },
                    {
                        name: "George S. Patton",
                        country: "United States",
                        desc: ["Led aggressive armored offensives in Europe", "Helped liberate occupied territories", "Known for bold personality and fast warfare tactics"],
                        images: ["GeorgePatton.jpg", "GeorgePatton2.jpg", "GeorgePatton3.jpg"]
                    },
                    {
                        name: "Douglas MacArthur",
                        country: "United States",
                        desc: ["Led Allied campaigns in the Pacific", "Returned to the Philippines after Japanese occupation", "Famous for the quote: 'I shall return.'"],
                        images: ["DouglasMcArthur.jpg", "DouglasMcArthur2.jpg", "DouglasMcArthur3.jpg"]
                    },
                    {
                        name: "Joseph Stalin",
                        country: "Soviet Union",
                        desc: ["Leader of the Soviet Union", "Directed Soviet war effort", "Oversaw brutal but victorious resistance against Germany"],
                        images: ["JosephStalin.jpg", "JosephStalin2.jpg", "JosephStalin3.jpg"]
                    },
                    {
                        name: "Georgy Zhukov",
                        country: "Soviet Union",
                        desc: ["Defended Moscow and helped win Stalingrad", "Led Soviet assault on Berlin", "One of WWII's most respected commanders"],
                        images: ["GeorgeSukov.jpg", "GeorgeSukov2.jpg", "GeorgeSukov3.jpg"]
                    },
                    {
                        name: "Vasily Chuikov",
                        country: "Soviet Union",
                        desc: ["Directed brutal urban warfare at Stalingrad", "Helped stop German advance"],
                        images: ["VasilyChuikov.jpg", "VasilyChuikov2.jpg", "VasilyChuikov3.jpg"]
                    },
                    {
                        name: "Charles de Gaulle",
                        country: "Free France",
                        desc: ["Organized Free French resistance", "Continued fight after France's surrender"],
                        images: ["CharlesDeGaulle.jpg", "CharlesDeGaulle2.jpg", "CharlesDeGaulle3.jpg"]
                    },
                    {
                        name: "Chiang Kai-shek",
                        country: "Republic of China",
                        desc: ["Led Chinese resistance against Japan", "Allied with the United States and Britain"],
                        images: ["ChaiKangShek.jpg", "ChaiKangShek2.jpg", "ChaiKangShek3.jpg"]
                    },
                    {
                        name: "Claire Lee Chennault",
                        country: "Republic of China",
                        desc: ["Led Flying Tigers volunteer air force", "Defended China from Japanese air attacks"],
                        images: ["ClaireChennault.jpg", "ClaireChennault2.jpg", "ClaireChennault3.jpg"]
                    },
                    {
                        name: "Władysław Sikorski",
                        country: "Poland (Government-in-Exile)",
                        desc: ["Led Polish government-in-exile", "Organized Polish forces abroad"],
                        images: ["Sikorsi.jpg", "Sikorsi2.jpg", "Sikorsi3.jpg"]
                    },
                    {
                        name: "Josip Broz Tito",
                        country: "Yugoslav Partisans",
                        desc: ["Led Yugoslav Partisans against Axis occupation", "Liberated much of Yugoslavia"],
                        images: ["JosipBrozTito.jpg", "JosipBrozTito2.jpg", "JosipBrozTito3.jpg"]
                    },
                    {
                        name: "Sophie Scholl",
                        country: "Anti-Nazi Resistance",
                        desc: ["Anti-Nazi activist", "Distributed anti-Hitler leaflets"],
                        images: ["SophieScholl.jpg", "SophieScholl2.jpg"]
                    }
                ]
            },
            axis: {
                title: "The Axis Powers",
                figures: [
                    {
                        name: "Adolf Hitler",
                        country: "Nazi Germany",
                        desc: ["Führer (dictator) of Nazi Germany", "Started WWII by invading Poland in 1939", "Directed German expansion across Europe", "Responsible for the Holocaust"],
                        images: ["Hitler.jpg", "Hitler2.jpg", "Hitler3.jpg"]
                    },
                    {
                        name: "Heinrich Himmler",
                        country: "Nazi Germany",
                        desc: ["Head of the SS (Schutzstaffel)", "Oversaw concentration camps", "Organized the Holocaust", "Controlled Nazi secret police systems"],
                        images: ["HeinrichHimmler.jpg", "HeinrichHimmler2.jpg", "HeinrichHimmler3.jpg"]
                    },
                    {
                        name: "Joseph Goebbels",
                        country: "Nazi Germany",
                        desc: ["Minister of Propaganda", "Controlled media and information", "Spread Nazi ideology and anti-Semitic propaganda"],
                        images: ["JosephGoebbels.jpg", "JosephGoebbels2.jpg", "JosephGoebbels3.jpg"]
                    },
                    {
                        name: "Hermann Göring",
                        country: "Nazi Germany",
                        desc: ["Commander of the Luftwaffe (German Air Force)", "Directed German air campaigns", "Led Battle of Britain operations"],
                        images: ["HermannGöring.jpg", "HermannGöring2.jpg", "HermannGöring3.jpg"]
                    },
                    {
                        name: "Erwin Rommel",
                        country: "Nazi Germany",
                        desc: ["German Field Marshal", "Led Afrika Korps in North Africa", "Known for mobile desert warfare tactics", "Nicknamed 'The Desert Fox'"],
                        images: ["ErwinRommel.jpg", "ErwinRommel2.jpg", "ErwinRommel3.jpg"]
                    },
                    {
                        name: "Erich von Manstein",
                        country: "Nazi Germany",
                        desc: ["Planned invasion strategy for France", "Commanded major Eastern Front operations"],
                        images: ["ErichvonManstein.jpg", "ErichvonManstein2.jpg", "ErichvonManstein3.png"]
                    },
                    {
                        name: "Karl Dönitz",
                        country: "Nazi Germany",
                        desc: ["Commander of German submarine fleet", "Directed U-boat warfare in Atlantic", "Briefly succeeded Hitler after his death"],
                        images: ["KarlDoenitz.jpg", "KarlDoenitz2.jpg", "KarlDoenitz3.jpg"]
                    },
                    {
                        name: "Benito Mussolini",
                        country: "Fascist Italy",
                        desc: ["Prime Minister and dictator of Italy", "Founder of Fascism", "Allied Italy with Germany", "Sought restoration of Roman imperial power"],
                        images: ["BenitoMussolini.jpg", "BenitoMussolini2.jpg", "BenitoMussolini3.jpg"]
                    },
                    {
                        name: "Pietro Badoglio",
                        country: "Fascist Italy",
                        desc: ["Senior Italian military commander", "Later replaced Mussolini as Prime Minister", "Negotiated Italy's surrender to Allies"],
                        images: ["pietroBadoglio.jpg", "pietroBadoglio2.jpg", "pietroBadoglio3.jpg"]
                    },
                    {
                        name: "Rodolfo Graziani",
                        country: "Fascist Italy",
                        desc: ["Led Italian campaigns in North Africa", "Involved in brutal colonial repression"],
                        images: ["RodolfoGraziani.jpg", "RodolfoGraziani2.jpg", "RodolfoGraziani3.jpg"]
                    },
                    {
                        name: "Emperor Hirohito",
                        country: "Imperial Japan",
                        desc: ["Emperor of Japan", "Symbolic head of Japanese Empire", "Oversaw expansion across Asia and Pacific"],
                        images: ["EmperorHirohito.jpg", "EmperorHirohito2.jpg", "EmperorHirohito3.jpg"]
                    },
                    {
                        name: "Hideki Tojo",
                        country: "Imperial Japan",
                        desc: ["Prime Minister and military leader", "Supported Pearl Harbor attack", "Directed wartime government", "Executed for war crimes after WWII"],
                        images: ["HidekiTojo.jpg", "HidekiTojo2.jpg", "HidekiTojo3.jpg"]
                    },
                    {
                        name: "Isoroku Yamamoto",
                        country: "Imperial Japan",
                        desc: ["Commander of Japanese Combined Fleet", "Planned Pearl Harbor attack", "Directed early Pacific victories"],
                        images: ["IsorokuYamamoto.jpg", "IsorokuYamamoto2.jpg", "IsorokuYamamoto3.jpg"]
                    },
                    {
                        name: "Tomoyuki Yamashita",
                        country: "Imperial Japan",
                        desc: ["Captured Singapore in 1942", "Nicknamed 'Tiger of Malaya'", "One of Japan's top field commanders"],
                        images: ["TomoyukiYamashita.jpg", "TomoyukiYamashita2.jpg", "TomoyukiYamashita3.jpg"]
                    },
                    {
                        name: "Chuichi Nagumo",
                        country: "Imperial Japan",
                        desc: ["Led carrier strike force at Pearl Harbor", "Directed early naval offensives"],
                        images: ["ChuichiNagumo.jpg", "ChuichiNagumo2.jpg", "ChuichiNagumo3.jpg"]
                    }
                ]
            }
        },
        timeline: [
            { year: "1939", text: "Invasion of Poland; War declared by Britain and France." },
            { year: "1941", text: "Operation Barbarossa begins; Pearl Harbor attacked, forcing the USA into the war." },
            { year: "1942", text: "The Battle of Stalingrad turns the tide of the war on the Eastern European front." },
            { year: "1944", text: "D-Day: Allied forces stage a massive amphibious landing on the beaches of Normandy." },
            { year: "1945", text: "Berlin falls; Atomic bombs dropped on Hiroshima & Nagasaki; unconditional Axis surrender." }
        ]
    }
};

// Transition State Machine
function selectWar(warKey) {
    window.currentWar = warKey; // Keep track of current war globally
    const data = warData[warKey];

    // Apply UI Themes on the fly using CSS properties
    document.documentElement.style.setProperty('--bg-color', data.theme.bg);
    document.documentElement.style.setProperty('--accent-color', data.theme.accent);
    document.documentElement.style.setProperty('--card-bg', data.theme.card);

    // Populate Data fields
    document.getElementById('war-title').innerText = data.title;

    // Render Causes
    const causesList = document.getElementById('causes-list');
    const dashGrid = document.querySelector('.dash-grid');
    
    window.currentWarCauses = data.causes; // Store for modal
    dashGrid.classList.add('ww1-layout'); // Ensures the horizontal timeline layout is used
    causesList.classList.add('horizontal-timeline');
    causesList.innerHTML = data.causes.map((item, index) => {
        let imgHTML = '';
        if (item.title === 'The Spark') {
            imgHTML = `
                <div class="spark-slideshow">
                    <img src="Spark1.jpg" class="spark-slide active" alt="Spark 1">
                    <img src="spark2.jpg" class="spark-slide" alt="Spark 2">
                    <img src="spark 3.jpg" class="spark-slide" alt="Spark 3">
                    <img src="spark4.jpg" class="spark-slide" alt="Spark 4">
                    <img src="spark5.jpg" class="spark-slide" alt="Spark 5">
                </div>
            `;
        } else {
            imgHTML = `<img src="${item.img}" alt="${item.title}">`;
        }

        return `
        <li class="cause-card" onclick="openCauseModal(${index})" role="button" tabindex="0">
            <div class="cause-img-container">
                ${imgHTML}
            </div>
            <div class="cause-text">
                <strong>${item.title}:</strong> ${item.text}
            </div>
            <div style="font-size: 0.8rem; text-align: center; color: var(--accent-color); margin-top: auto; padding-top: 0.5rem;">Click to read more ➔</div>
        </li>
    `}).join('');
    
    if (warKey === 'ww1') {
        startSparkSlideshow();
    }

    // Render Alliances
    document.getElementById('alliances-container').innerHTML = data.alliances + `
        <button class="interactive-btn" onclick="openAlliancesSplit()">Explore Key Figures ➔</button>
    `;

    // Render Timeline
    const timelineContainer = document.getElementById('timeline');
    const timelineTitle = document.getElementById('timeline-section-title');
    
    if (warKey === 'ww1') {
        window.currentWarTimeline = data.timeline; // Store for modal access
        if (timelineTitle) timelineTitle.innerText = "Key Events Timeline";
        timelineContainer.className = "timeline-wrapper"; // Reset class
        timelineContainer.innerHTML = data.timeline.map((event, index) => `
            <div class="timeline-item" onclick="openTimelineModal(${index})" role="button" tabindex="0">
                <h4>${event.year}</h4>
                <p>${event.text}</p>
            </div>
        `).join('');
    } else {
        // WW2: Replace timeline with Theatre Selection Button
        if (timelineTitle) timelineTitle.innerText = "Theatres of War";
        timelineContainer.className = ""; // Remove timeline-wrapper layout
        timelineContainer.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; padding: 2rem 0;">
                <button class="interactive-btn" onclick="openTheatreSplit()" style="font-size: 1.1rem; padding: 1rem 2rem;">Start Timeline Window</button>
            </div>
        `;
    }

    // Apply Theme Class for separation
    document.body.classList.remove('ww1-theme', 'ww2-theme');
    document.body.classList.add(warKey + '-theme');

    // Slide out the Split landing layout and reveal dashboard
    document.getElementById('main-landing').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');

    // Trigger Scroll Animations for newly rendered components
    initScrollAnimations();
}

function resetView() {
    // Bring back the landing selection view
    document.getElementById('main-landing').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.body.classList.remove('ww1-theme', 'ww2-theme');
}

// Hyper-Interactive Scroll Reveal Magic
function initScrollAnimations() {
    const items = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
}

// Spark Slideshow Logic
let sparkInterval;
function startSparkSlideshow() {
    clearInterval(sparkInterval);
    let currentIndex = 0;
    sparkInterval = setInterval(() => {
        const slides = document.querySelectorAll('.spark-slide');
        if (slides.length === 0) {
            clearInterval(sparkInterval);
            return;
        }
        slides.forEach(s => s.classList.remove('active'));
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 2000);
}

// Click to next cause (Revolving timeline)
let currentCauseIndex = 0;
function nextCause() {
    const list = document.getElementById('causes-list');
    if (!list) return;
    const items = list.querySelectorAll('li');
    if (items.length === 0) return;
    
    currentCauseIndex = (currentCauseIndex + 1) % items.length;
    const nextItem = items[currentCauseIndex];
    list.scrollTo({
        left: nextItem.offsetLeft - list.offsetLeft,
        behavior: 'smooth'
    });
}

// Interactive Alliances
function openAlliancesSplit() {
    const leftPanel = document.getElementById('alliances-left-panel');
    const rightPanel = document.getElementById('alliances-right-panel');
    const leftLabel = document.getElementById('alliances-left-label');
    const leftTitle = document.getElementById('alliances-left-title');
    const rightLabel = document.getElementById('alliances-right-label');
    const rightTitle = document.getElementById('alliances-right-title');

    if (window.currentWar === 'ww1') {
        leftPanel.style.backgroundImage = "url('allies.jpg')";
        leftPanel.setAttribute('onclick', "openFigures('allies')");
        leftLabel.innerText = "The Entente";
        leftTitle.innerHTML = "Allied<br>Powers";

        rightPanel.style.backgroundImage = "url('centralpowers.jpg')";
        rightPanel.setAttribute('onclick', "openFigures('central')");
        rightLabel.innerText = "The Quadruple Alliance";
        rightTitle.innerHTML = "Central<br>Powers";
    } else {
        leftPanel.style.backgroundImage = "url('alliedpowers.png')";
        leftPanel.setAttribute('onclick', "openFigures('allies')");
        leftLabel.innerText = "The Big Three & Associates";
        leftTitle.innerHTML = "Allied<br>Powers";

        rightPanel.style.backgroundImage = "url('AxisPower.jpg')";
        rightPanel.setAttribute('onclick', "openFigures('axis')");
        rightLabel.innerText = "The Tripartite Pact";
        rightTitle.innerHTML = "Axis<br>Powers";
    }

    document.getElementById('alliances-split').classList.remove('hidden');
}

function closeAlliancesSplit() {
    document.getElementById('alliances-split').classList.add('hidden');
}

let figureIntervals = [];

function openFigures(side) {
    const splitData = warData[window.currentWar].alliancesSplit[side];
    if (!splitData) return;
    
    document.getElementById('figures-title').innerText = splitData.title;
    
    // Group figures by country
    const groupedFigures = {};
    splitData.figures.forEach((fig, index) => {
        if (!groupedFigures[fig.country]) {
            groupedFigures[fig.country] = [];
        }
        groupedFigures[fig.country].push({ fig, index });
    });

    let html = '';
    for (const [country, items] of Object.entries(groupedFigures)) {
        html += `
            <div class="country-section" style="margin-bottom: 3rem;">
                <h2 style="color: var(--accent-color); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; margin-bottom: 1.5rem; font-family: 'Cinzel', serif; font-size: 1.8rem; letter-spacing: 0.1em;">${country}</h2>
                <div class="figures-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem;">
        `;
        
        items.forEach(item => {
            const { fig, index } = item;
            let imgHTML = '';
            if (fig.images && fig.images.length > 0) {
                imgHTML = `
                    <div class="figure-image-slideshow">
                        ${fig.images.map((img, i) => `<img src="${img}" class="figure-slide ${i === 0 ? 'active' : ''}" alt="${fig.name}">`).join('')}
                    </div>
                `;
            } else {
                imgHTML = `<div class="figure-fallback" style="height:100%; display:flex; align-items:center; justify-content:center; background:#222; color:#666;">No Image</div>`;
            }
            
            html += `
                <div class="figure-card" onclick="openFigureModal('${side}', ${index})" role="button" tabindex="0" style="cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; background: var(--card-bg); border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="height: 350px; overflow: hidden; position: relative;">
                        ${imgHTML}
                    </div>
                    <div class="figure-info" style="padding: 1.5rem;">
                        <h3 style="margin: 0; font-size: 1.3rem; color: #fff;">${fig.name}</h3>
                        <span class="country" style="display: block; font-size: 0.85rem; color: var(--accent-color); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.3rem;">${fig.country}</span>
                        <div style="font-size: 0.8rem; text-align: center; color: var(--accent-color); margin-top: 1rem; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.1);">View Profile ➔</div>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    const container = document.getElementById('figures-container');
    container.style.display = 'block'; // Change from grid to block to accommodate sub-sections
    container.innerHTML = html;
    
    document.getElementById('alliances-split').classList.add('hidden');
    document.getElementById('figures-view').classList.remove('hidden');
    
    startFigureSlideshows();
}

function closeFiguresView() {
    document.getElementById('figures-view').classList.add('hidden');
    document.getElementById('alliances-split').classList.remove('hidden');
    
    // Clear intervals
    figureIntervals.forEach(clearInterval);
    figureIntervals = [];
}

function startFigureSlideshows() {
    figureIntervals.forEach(clearInterval);
    figureIntervals = [];
    
    const slideshows = document.querySelectorAll('.figure-image-slideshow');
    slideshows.forEach(show => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            const slides = show.querySelectorAll('.figure-slide');
            if (slides.length === 0) return;
            
            slides.forEach(s => s.classList.remove('active'));
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, 2500 + Math.random() * 1000); // Randomize slight offset so they don't all cycle at once
        figureIntervals.push(interval);
    });
}

// Presentation Modal Logic
function openAboutModal() {
    document.getElementById('about-modal').classList.remove('hidden');
    document.getElementById('about-modal').setAttribute('aria-hidden', 'false');
}

function closeAboutModal() {
    document.getElementById('about-modal').classList.add('hidden');
    document.getElementById('about-modal').setAttribute('aria-hidden', 'true');
}

// Unified Modal Logic (Causes, Timeline, Figures)
function openMainModal(title, body, images = [], imgFallback = null) {
    document.getElementById('main-modal-title').innerText = title;
    document.getElementById('main-modal-body').innerHTML = body;
    
    const gallery = document.getElementById('main-modal-gallery');
    if (images && images.length > 0) {
        gallery.innerHTML = images.map(img => `<img src="${img}" alt="${title}" onclick="openLightbox('${img}')" style="cursor: zoom-in;">`).join('');
    } else if (imgFallback) {
        gallery.innerHTML = `<img src="${imgFallback}" alt="${title}" onclick="openLightbox('${imgFallback}')" style="cursor: zoom-in;">`;
    } else {
        gallery.innerHTML = '';
    }
    
    document.getElementById('main-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Lightbox Logic
function openLightbox(src) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    modal.classList.remove('hidden');
    // Ensure background scroll lock persists
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox-modal').classList.add('hidden');
    // Only unlock scroll if no other modals are open
    if (document.getElementById('main-modal').classList.contains('hidden') && 
        document.getElementById('theatre-event-modal').classList.contains('hidden')) {
        document.body.style.overflow = 'auto';
    }
}

function closeMainModal() {
    document.getElementById('main-modal').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Timeline Modal Logic
function openTimelineModal(index) {
    if (!window.currentWarTimeline || !window.currentWarTimeline[index]) return;
    const event = window.currentWarTimeline[index];
    
    // Only open modal if we have extended content (WW1 typically has it)
    if (event.extendedText) {
        openMainModal(event.extendedTitle || event.year, event.extendedText, event.images);
    } else {
        // Fallback for simple events
        openMainModal(event.year, `<p>${event.text}</p>`, event.images);
    }
}

function openCauseModal(index) {
    if (!window.currentWarCauses || !window.currentWarCauses[index]) return;
    const cause = window.currentWarCauses[index];
    
    openMainModal(cause.title, `<p>${cause.extendedText || cause.text}</p>`, cause.images, cause.img);
}

function closeTimelineModal() {
    closeMainModal();
}

// Figure Modal Logic
function openFigureModal(alliance, index) {
    const splitData = warData[window.currentWar].alliancesSplit[alliance];
    if (!splitData || !splitData.figures[index]) return;
    
    const fig = splitData.figures[index];
    
    let textHTML = `
        <div style="margin-bottom: 2rem;">
            <span style="display: block; color: var(--accent-color); font-family: 'Cinzel', serif; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem;">Country / Affiliation</span>
            <span style="font-size: 1.2rem; font-weight: 700;">${fig.country}</span>
        </div>
        <div>
            <span style="display: block; color: var(--accent-color); font-family: 'Cinzel', serif; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">Personal Profile</span>
            <ul style="padding-left: 1.5rem; color: #ccc; line-height: 1.8;">
                ${fig.desc.map(d => `<li style="margin-bottom: 0.8rem;">${d}</li>`).join('')}
            </ul>
        </div>
    `;
    
    openMainModal(fig.name, textHTML, fig.images);
}

// Onboarding Logic
function showVisitorForm() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('visitor-form-screen').classList.remove('hidden');
}

function submitVisitor() {
    const name = document.getElementById('visitor-name').value.trim();
    const ageVal = document.getElementById('visitor-age').value.trim();

    if (!name || !ageVal) {
        alert('Please enter both your name and age to proceed.');
        return;
    }

    const age = parseInt(ageVal, 10);
    if (isNaN(age) || age < 1) {
        alert('Please enter a valid age.');
        return;
    }

    if (age < 14) {
        // Hide the form screen
        document.getElementById('visitor-form-screen').classList.add('hidden');
        
        // Populate and display Access Restricted screen
        document.getElementById('denied-visitor-name').innerText = name;
        document.getElementById('access-denied-screen').classList.remove('hidden');
        return;
    }

    // Hide overlay
    document.getElementById('onboarding-overlay').style.display = 'none';

    // Show welcome message
    alert(`Welcome, ${name}. This page welcomes you to learn about history.`);
}

// WW2 Theatre Split Screen Logic
function openTheatreSplit() {
    document.getElementById('theatre-split').classList.remove('hidden');
}

function closeTheatreSplit() {
    document.getElementById('theatre-split').classList.add('hidden');
}

// Full Detailed Theatre Data
const ww2DetailedTheatres = {
    europe: {
        title: "European Theatre",
        bg: "EuropeanTheatre.png",
        military: [
            {
                category: "1939 — Invasion of Poland",
                events: [
                    {
                        title: "Invasion of Poland",
                        year: "1939",
                        text: "Germany attacked Poland using Blitzkrieg ('Lightning War') tactics.",
                        body: "On September 1, 1939, Germany invaded Poland from the west, followed by the Soviet Union from the east. Utilizing rapid tank movements and air support, Poland collapsed within weeks, triggering Britain and France to declare war.",
                        images: ["Poland.jpg", "Poland2.jpg", "Poland3.jpg", "Poland4.jpg", "Poland5.jpg", "Blitzkrieg.jpg", "Blitzkrieg2.jpg"]
                    }
                ]
            },
            {
                category: "1940 — The Fall of the West",
                events: [
                    {
                        title: "Invasion of Norway",
                        year: "1940",
                        text: "Germany secured iron ore supply routes in Northern Europe.",
                        body: "Operation Weserübung saw Germany invade Denmark and Norway to secure strategic naval positions and protect iron ore supplies from Sweden.",
                        images: ["Norway.jpg", "Norway2.jpg", "Norway3.jpg"]
                    },
                    {
                        title: "Fall of France & Dunkirk",
                        year: "1940",
                        text: "France fell in only six weeks after a rapid German invasion.",
                        body: "Germany bypassed the Maginot Line by invading through Belgium and the Ardennes Forest. The British Expeditionary Force was forced to evacuate at Dunkirk (Operation Dynamo), rescuing over 300,000 soldiers.",
                        images: ["France.jpg", "France2.jpg", "France3.jpg", "France4.jpg", "France5.jpg", "France6.jpg", "Dunkirv.jpg", "Dunkirv2.jpg", "Dunkirv3.jpg", "Dunkirv4.jpg", "Dunkirv5.jpg"]
                    },
                    {
                        title: "Battle of Britain & The Blitz",
                        year: "1940",
                        text: "Britain successfully resisted German air superiority attempts.",
                        body: "The Luftwaffe attempted to destroy the RAF to prepare for an invasion (Operation Sea Lion). When that failed, they began 'The Blitz', a strategic bombing campaign against British cities like London.",
                        images: ["BattleofBritain.jpg", "BattleofBritain2.jpg", "BattleofBritain3.jpg", "BattleofBritain4.jpg", "theBlitz.jpg", "theBlitz2.jpg", "theBlitz3.jpg", "theBlitz4.jpg", "theBlitz5.jpg", "theBlitz6.jpg"]
                    }
                ]
            },
            {
                category: "1941-1942 — The Eastern Front Opens",
                events: [
                    {
                        title: "Operation Barbarossa",
                        year: "1941",
                        text: "Germany launched a massive invasion of the Soviet Union.",
                        body: "The largest land invasion in history began in June 1941. Millions of German soldiers pushed toward Moscow, Leningrad, and the oil fields of the south, initially making massive gains.",
                        images: ["Barbarrosa.jpg", "Barbarrosa2.jpg", "Barbarrosa3.jpg"]
                    },
                    {
                        title: "Battle of Moscow",
                        year: "1941",
                        text: "The Soviet Union stopped Germany near the capital during winter.",
                        body: "Despite reaching the outskirts of Moscow, German forces were pushed back by a massive Soviet counter-offensive in freezing temperatures, marking the first major German retreat.",
                        images: ["Moscow.jpg", "Moscow2.jpg", "Moscow3.jpg", "Moscow4.jpg"]
                    },
                    {
                        title: "Battle of Stalingrad",
                        year: "1942-1943",
                        text: "The bloodiest battle in history and the turning point in Europe.",
                        body: "A brutal urban battle for the city of Stalingrad ended in the encirclement and surrender of the German 6th Army. It broke the back of the German military in the East.",
                        images: ["Stalingrad.jpg", "Stalingrad2.jpg", "Stalingrad3.jpg", "Stalingrad4.jpg"]
                    }
                ]
            },
            {
                category: "1943-1944 — Allied Counter-Offensives",
                events: [
                    {
                        title: "Battle of Kursk",
                        year: "1943",
                        text: "The largest tank battle in history.",
                        body: "Germany attempted a final major offensive in the East at the Kursk salient. The Soviets, having prepared deep defenses, repulsed the attack and seized the strategic initiative for the rest of the war.",
                        images: ["BattleofKursk.jpg", "BattleofKursk2.jpg", "BattleofKursk3.jpg"]
                    },
                    {
                        title: "D-Day (Normandy Landings)",
                        year: "1944",
                        text: "Largest amphibious invasion in history opened the Western Front.",
                        body: "Operation Overlord saw Allied forces land on five beaches in Normandy, France, beginning the liberation of Western Europe from Nazi occupation.",
                        images: ["Dday.jpg", "Dday2.jpg", "Dday3.jpg", "Dday4.jpg", "Dday5.jpg", "Dday6.jpg", "Dday7.jpg"]
                    },
                    {
                        title: "Liberation of Paris",
                        year: "1944",
                        text: "German occupation of Paris ended as Allied forces advanced.",
                        body: "Following the Normandy breakout, the French Resistance and Allied troops liberated Paris in August 1944, a major symbolic victory.",
                        images: ["Paris.jpg", "Paris2.jpg", "Paris3.jpg", "Paris4.jpg", "Paris5.jpg"]
                    }
                ]
            },
            {
                category: "1945 — The Final Collapse",
                events: [
                    {
                        title: "Battle of the Bulge",
                        year: "1944-1945",
                        text: "Germany's final major counter-offensive in the West.",
                        body: "In a desperate attempt to split the Allied armies, Germany launched a surprise attack through the Ardennes. Despite early gains, the Allies held firm and exhausted Germany's last reserves.",
                        images: ["Bulge.jpg", "Bulge2.jpg", "Bulge3.jpg", "Bulge4.jpg"]
                    },
                    {
                        title: "Battle of Berlin",
                        year: "1945",
                        text: "The final major offensive of the European Theatre.",
                        body: "Soviet forces surrounded and stormed the German capital. Following Hitler's suicide, the city surrendered, leading to the total collapse of Nazi Germany.",
                        images: ["Berlin.jpg", "Berlin2.jpg", "Berlin3.jpg", "Berlin4.jpg", "Berlin5.jpg", "Berlin6.jpg", "Berlin7.jpg"]
                    },
                    {
                        title: "VE Day (Victory in Europe)",
                        year: "1945",
                        text: "The formal acceptance of Germany's unconditional surrender.",
                        body: "Celebrations erupted across the world as the war in Europe officially ended on May 8, 1945.",
                        images: ["VEday.jpg", "VEday2.jpg", "VEday3.jpg", "VEday4.jpg", "VEday5.jpg", "VEday6.jpg"]
                    }
                ]
            }
        ],
        atrocities: [
            {
                category: "The Holocaust",
                events: [
                    {
                        title: "The Final Solution",
                        year: "1941-1945",
                        text: "Systematic genocide of Jews and other persecuted groups.",
                        body: "Nazi Germany systematically murdered millions in concentration and extermination camps. This industrial-scale genocide targeted Jews, Roma, political dissidents, and others.",
                        images: ["Holocaust.jpg", "Holocaust2.jpg", "Holocaust3.jpg", "Holocaust4.jpg", "ConcentrationCamps.jpg", "ConcentrationCamps2.jpg", "ConcentrationCamps3.jpg", "ConcentrationCamps4.jpg", "ConcentrationCamps5.jpg", "ConcentrationCamps6.jpg", "ConcentrationCamps7.jpg", "ConcentrationCamps8.jpg"]
                    }
                ]
            },
            {
                category: "Occupation & War Crimes",
                events: [
                    {
                        title: "Siege of Leningrad",
                        year: "1941-1944",
                        text: "900 days of starvation and bombardment.",
                        body: "The city was blockaded by German forces, leading to the deaths of over a million civilians from famine, cold, and shelling.",
                        images: ["SiegeofLeningrad.jpg", "SiegeofLeningrad2.jpg", "SiegeofLeningrad3.jpg", "SiegeofLeningrad4.jpg", "SiegeofLeningrad5.jpg", "SiegeofLeningrad6.jpg"]
                    },
                    {
                        title: "Mass Killings in the East",
                        year: "1941-1945",
                        text: "Brutality against civilians and POWs on the Eastern Front.",
                        body: "Mobile killing squads (Einsatzgruppen) and the Wehrmacht committed widespread atrocities against the Soviet population and prisoners of war.",
                        images: ["EinsatzgruppenMassKillings.jpg", "EinsatzgruppenMassKillings2.jpg", "EuropeanAstrocities.jpg", "EuropeanAstrocities2.jpg", "EuropeanAstrocities3.jpg", "EuropeanAstrocities4.jpg", "EuropeanAstrocities5.jpg", "EuropeanAstrocities6.jpg", "EuropeanAstrocities7.jpg", "EuropeanAstrocities8.jpg", "EuropeanAstrocities9.jpg", "EuropeanAstrocities10.jpg", "EuropeanAstrocities11.jpg"]
                    }
                ]
            }
        ]
    },
    pacific: {
        title: "Pacific Theatre",
        bg: "PacificTheatre.png",
        military: [
            {
                category: "1941-1942 — Japan's Rapid Expansion",
                events: [
                    {
                        title: "Attack on Pearl Harbor",
                        year: "1941",
                        text: "Surprise attack against the U.S. Pacific Fleet.",
                        body: "Japan launched a devastating air strike on Pearl Harbor, Hawaii, bringing the United States into World War II.",
                        images: ["PearlHarbor.jpg", "PearlHarbor1.jpg", "PearlHarbor3.jpg", "PH.jpg", "PH2.jpg", "PH3.jpg", "PH4.jpg"]
                    },
                    {
                        title: "Fall of Singapore",
                        year: "1942",
                        text: "The 'Gibraltar of the East' fell to Japanese forces.",
                        body: "The surrender of Singapore was the largest surrender of British-led forces in history and marked the peak of Japanese expansion in Southeast Asia.",
                        images: ["Singapore.jpg", "Singapore2.jpg", "Singapore3.jpg", "Singapore4.jpg", "Singapore5.jpg", "SoutheastAsia.jpg", "SoutheastAsia2.jpg", "SoutheastAsia3.jpg", "SoutheastAsia4.jpg", "SoutheastAsia5.jpg", "SoutheastAsia6.jpg"]
                    },
                    {
                        title: "Fall of Bataan",
                        year: "1942",
                        text: "U.S. and Filipino forces surrendered after a long siege.",
                        body: "After months of resistance without resupply, the forces on the Bataan Peninsula surrendered, leading to the brutal Bataan Death March.",
                        images: ["FallofBataan.jpg", "FallofBataan2.jpg", "FallofBataan3.jpg", "FallofBataan4.jpg", "FallofBataan5.jpg", "FallofBataan6.jpg", "FallofBataan7.jpg"]
                    }
                ]
            },
            {
                category: "1942 — Turning the Tide",
                events: [
                    {
                        title: "Battle of the Coral Sea",
                        year: "1942",
                        text: "The first carrier-vs-carrier naval battle.",
                        body: "The battle was the first in which the opposing fleets never saw each other. It successfully halted the Japanese advance toward Port Moresby, Australia.",
                        images: ["CoralSea.jpg", "CoralSea2.jpg", "CoralSea3.jpg", "CoralSea4.jpg", "CoralSeaShips.jpg", "CoralSeaShips2.jpg"]
                    },
                    {
                        title: "Battle of Midway",
                        year: "1942",
                        text: "A major turning point where U.S. forces ambushed Japanese carriers.",
                        body: "The U.S. Navy dealt a decisive blow to the Imperial Japanese Navy, sinking four aircraft carriers and halting Japanese expansion permanently.",
                        images: ["Midday.jpg", "Midday2.jpg", "Midday3.jpg"]
                    }
                ]
            },
            {
                category: "1943-1944 — Island Hopping",
                events: [
                    {
                        title: "Guadalcanal Campaign",
                        year: "1942-1943",
                        text: "The first major Allied land offensive in the Pacific.",
                        body: "Six months of brutal fighting on land and sea resulted in the first strategic defeat for Japan on the ground, starting the Allied push toward the home islands.",
                        images: ["Guadalcanal.jpg", "Guadalcanal2.jpg", "Guadalcanal3.jpg", "Guadalcanal4.jpg", "Guadalcanal5.jpg", "Guadalcanal6.jpg", "Guadalcanal7.jpg"]
                    },
                    {
                        title: "Battle of Saipan",
                        year: "1944",
                        text: "A strategic victory that put Japan within range of U.S. bombers.",
                        body: "The capture of Saipan allowed the U.S. to establish airfields for B-29 bombers to strike the Japanese mainland.",
                        images: ["Saipan.jpg", "Saipan2.jpg", "Saipan3.jpg", "Saipan4.jpg", "Saipan5.jpg", "Saipan6.jpg"]
                    },
                    {
                        title: "Battle of Leyte Gulf",
                        year: "1944",
                        text: "The largest naval battle in history.",
                        body: "The battle destroyed much of Japan's remaining naval capability and paved the way for the liberation of the Philippines.",
                        images: ["LeyteGulf.jpg", "LeyteGulf2.jpg", "LeyteGulf3.jpg", "LeyteGulf4.jpg", "LeyteGulf5.jpg", "LeyteGulf6.jpg", "LeyteGulf7.jpg", "LeyteGulf8.jpg"]
                    }
                ]
            },
            {
                category: "1945 — The Final Struggles",
                events: [
                    {
                        title: "Battle of Iwo Jima",
                        year: "1945",
                        text: "Brutal fighting for a strategic volcanic island.",
                        body: "U.S. Marines fought through a network of tunnels and caves to capture the island, famously raising the flag on Mount Suribachi.",
                        images: ["IwoJima.jpg", "IwoJima2.jpg", "IwoJima3.jpg", "IwoJima4.jpg", "IwoJima5.jpg"]
                    },
                    {
                        title: "Battle of Okinawa",
                        year: "1945",
                        text: "The bloodiest battle in the Pacific War.",
                        body: "A massive amphibious assault on the island of Okinawa resulted in staggering casualties on both sides and saw the first massive use of Kamikaze attacks.",
                        images: ["Okinawa.jpg", "Okinawa2.jpg", "Okinawa3.jpg", "Okinawa4.jpg", "Okinawa5.jpg", "Okinawa6.jpg", "Okinawa7.jpg", "Okinawa8.jpg", "kamikaze.jpg", "kamikaze2.jpg", "kamikaze3.jpg", "kamikaze4.jpg", "kamikaze5.jpg", "kamikaze6.jpg"]
                    },
                    {
                        title: "Atomic Bombings & Surrender",
                        year: "1945",
                        text: "The end of the war in the Pacific.",
                        body: "The U.S. dropped atomic bombs on Hiroshima and Nagasaki. Following these strikes and the Soviet entry into the war against Japan, the Emperor announced Japan's unconditional surrender.",
                        images: ["AtomicBombs.jpg", "AtomicBombs2.jpg", "AtomicBombs3.jpg", "AtomicBombs4.jpg", "AtomicBombs5.jpg", "AtomicBombs6.jpg", "AtomicBombs7.jpg", "AtomicBombs8.jpg", "AtomicBombs9.jpg", "JapanSurrenders.jpg", "JapanSurrenders2.jpg", "JapanSurrenders3.jpg", "JapanSurrenders4.jpg", "JapanSurrenders5.jpg"]
                    }
                ]
            }
        ],
        atrocities: [
            {
                category: "Early Conflict & Occupation",
                events: [
                    {
                        title: "Nanjing Massacre",
                        year: "1937",
                        text: "Mass violence and killings in the Chinese capital.",
                        body: "Following the capture of Nanjing, Japanese troops committed widespread massacres and violence against the civilian population and surrendered soldiers.",
                        images: ["NanjingMassacre.jpg", "NanjingMassacre2.jpg", "NanjingMassacre3.jpg", "NanjingMassacre4.jpg", "NanjingMassacre5.jpg", "NanjingMassacre6.jpg", "NanjingMassacre7.jpg", "NanjingMassacre8.jpg"]
                    },
                    {
                        title: "Unit 731",
                        year: "1937-1945",
                        text: "Biological and chemical warfare research unit.",
                        body: "Unit 731 conducted lethal human experimentation on thousands of prisoners in occupied China, testing biological weapons and chemical agents.",
                        images: ["Unit731.jpg", "Unit731(2).jpg", "Unit731(3).jpg", "Unit731(4).jpg", "Unit731(5).jpg"]
                    }
                ]
            },
            {
                category: "POW & Civilian Suffering",
                events: [
                    {
                        title: "Bataan Death March",
                        year: "1942",
                        text: "Forced march of POWs under brutal conditions.",
                        body: "Captured Filipino and American soldiers were forced to march 60+ miles under extreme heat and physical abuse. Thousands died or were executed during the journey.",
                        images: ["DeathMarch.jpg", "DeathMarch2.jpg", "DeathMarch3.jpg", "DeathMarch4.jpg", "PrisonersofWar.jpg", "PrisonersofWar2.jpg", "PrisonersofWar3.jpg", "PrisonersofWar4.jpg", "PrisonersofWar5.jpg", "PrisonersofWar6.jpg"]
                    },
                    {
                        title: "Burma-Siam Death Railway",
                        year: "1942-1943",
                        text: "Forced labor for strategic military projects.",
                        body: "Allied POWs and Asian laborers were forced to build a railway through dense jungle, resulting in tens of thousands of deaths from disease and exhaustion.",
                        images: ["BurmaCampaign.jpg", "BurmaCampaign2.jpg", "BurmaCampaign3.jpg", "BurmaCampaign4.jpg", "BurmaCampaign5.jpg", "BurmaCampaign6.jpg"]
                    }
                ]
            }
        ]
    }
};

let currentTheatreKey = '';
let currentTheatreTab = 'military';

function openTheatre(key) {
    currentTheatreKey = key;
    currentTheatreTab = 'military';
    const data = ww2DetailedTheatres[key];
    
    document.getElementById('theatre-title-main').innerText = data.title;
    document.getElementById('theatre-hero-bg').style.backgroundImage = `url('${data.bg}')`;
    
    renderTheatreContent();
    
    document.getElementById('theatre-split').classList.add('hidden');
    document.getElementById('theatre-details').classList.remove('hidden');
}

function closeTheatreDetails() {
    document.getElementById('theatre-details').classList.add('hidden');
    document.getElementById('theatre-split').classList.remove('hidden');
}

function switchTheatreTab(tab) {
    currentTheatreTab = tab;
    
    // Update nav buttons
    document.getElementById('nav-military').classList.toggle('active', tab === 'military');
    document.getElementById('nav-atrocities').classList.toggle('active', tab === 'atrocities');
    
    renderTheatreContent();
}

function renderTheatreContent() {
    const data = ww2DetailedTheatres[currentTheatreKey];
    const content = data[currentTheatreTab];
    const container = document.getElementById('theatre-content');
    
    container.innerHTML = content.map(cat => `
        <div class="theatre-category" style="margin-bottom: 4rem;">
            <h2 style="color: var(--accent-color); border-bottom: 2px solid var(--accent-color); padding-bottom: 1rem; margin-bottom: 2rem; font-family: 'Cinzel', serif; font-size: 2.2rem; letter-spacing: 0.1em;">${cat.category}</h2>
            <div class="theatre-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2.5rem;">
                ${cat.events.map((event, idx) => {
                    const escapedCategory = cat.category.replace(/'/g, "\\'");
                    return `
                    <div class="figure-card" onclick="openTheatreEventModal('${escapedCategory}', ${idx})" role="button" tabindex="0" style="cursor: pointer; background: var(--card-bg); border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s ease;">
                        <div style="height: 200px; overflow: hidden; position: relative;">
                            <img src="${event.images[0]}" style="width: 100%; height: 100%; object-fit: cover;" alt="${event.title}">
                            <div class="panel-overlay"></div>
                            <span style="position: absolute; top: 1rem; left: 1rem; background: var(--accent-color); color: #000; padding: 0.3rem 0.8rem; font-size: 0.8rem; font-weight: bold; border-radius: 4px;">${event.year}</span>
                        </div>
                        <div style="padding: 1.5rem;">
                            <h3 style="margin: 0; font-size: 1.4rem; color: #fff;">${event.title}</h3>
                            <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5; margin: 1rem 0;">${event.text}</p>
                            <div style="font-size: 0.85rem; color: var(--accent-color); font-weight: bold; display: flex; align-items: center; gap: 0.5rem;">
                                Explore Event <span style="font-size: 1.2rem;">➔</span>
                            </div>
                        </div>
                    </div>
                `;}).join('')}
            </div>
        </div>
    `).join('');
}

function openTheatreEventModal(categoryTitle, eventIdx) {
    const data = ww2DetailedTheatres[currentTheatreKey][currentTheatreTab];
    const category = data.find(c => c.category === categoryTitle);
    const event = category.events[eventIdx];
    
    document.getElementById('theatre-event-title').innerText = event.title;
    document.getElementById('theatre-event-body').innerHTML = `<p>${event.body}</p>`;
    
    const gallery = document.getElementById('theatre-event-gallery');
    gallery.innerHTML = event.images.map(img => `<img src="${img}" alt="${event.title}" onclick="openLightbox('${img}')" style="cursor: zoom-in;">`).join('');
    
    document.getElementById('theatre-event-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeTheatreEventModal() {
    document.getElementById('theatre-event-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// =============================================================
//  VISITOR SESSION — localStorage persistence
// =============================================================
const VISITOR_KEY = 'ww_history_visitor';
let visitorSession = null;

function loadVisitorSession() {
    try {
        const raw = localStorage.getItem(VISITOR_KEY);
        if (raw) {
            const data = JSON.parse(raw);
            visitorSession = {
                name: data.name || 'Explorer',
                age: data.age || 14,
                exploredEvents: new Set(data.exploredEvents || []),
                quizHighScore: data.quizHighScore || 0
            };
            return true; // returning visitor
        }
    } catch(e) { /* ignore */ }
    return false;
}

function saveVisitorSession() {
    if (!visitorSession) return;
    try {
        localStorage.setItem(VISITOR_KEY, JSON.stringify({
            name: visitorSession.name,
            age: visitorSession.age,
            exploredEvents: Array.from(visitorSession.exploredEvents),
            quizHighScore: visitorSession.quizHighScore
        }));
    } catch(e) { /* ignore */ }
}

// Intercept onboarding submission to also create a session
const _origSubmitVisitor = window.submitVisitor;
window.submitVisitor = function() {
    const name = document.getElementById('visitor-name').value.trim();
    const ageVal = document.getElementById('visitor-age').value.trim();
    if (!name || !ageVal) { alert('Please enter both your name and age to proceed.'); return; }
    const age = parseInt(ageVal, 10);
    if (isNaN(age) || age < 1) { alert('Please enter a valid age.'); return; }
    if (age < 14) {
        document.getElementById('visitor-form-screen').classList.add('hidden');
        document.getElementById('denied-visitor-name').innerText = name;
        document.getElementById('access-denied-screen').classList.remove('hidden');
        return;
    }
    visitorSession = { name, age, exploredEvents: new Set(), quizHighScore: 0 };
    saveVisitorSession();
    document.getElementById('onboarding-overlay').style.display = 'none';
    alert(`Welcome, ${name}. This page welcomes you to learn about history.`);
};

function initVisitorBadge() {
    if (!visitorSession) return;
    const badgeName = document.getElementById('badge-visitor-name');
    if (badgeName) badgeName.textContent = visitorSession.name;
    updateProgressRing();
}

// =============================================================
//  PROGRESS ENGINE — tracks every opened modal
// =============================================================
function getExploreableEventIds(warKey) {
    const ids = new Set();
    const data = warData[warKey];
    if (!data) return ids;

    // 1. Causes
    if (data.causes) {
        data.causes.forEach(cause => {
            ids.add('modal_' + cause.title.replace(/\s+/g, '_').toLowerCase().slice(0, 40));
        });
    }

    // 2. Figures
    if (data.alliancesSplit) {
        Object.keys(data.alliancesSplit).forEach(side => {
            const sideData = data.alliancesSplit[side];
            if (sideData && sideData.figures) {
                sideData.figures.forEach(fig => {
                    ids.add('modal_' + fig.name.replace(/\s+/g, '_').toLowerCase().slice(0, 40));
                });
            }
        });
    }

    // 3. WWI Timeline (only WWI has direct timeline modals)
    if (warKey === 'ww1' && data.timeline) {
        data.timeline.forEach(event => {
            ids.add('modal_' + (event.extendedTitle || event.year).replace(/\s+/g, '_').toLowerCase().slice(0, 40));
        });
    }

    // 4. WWII Theatre Events (only WWII has theatre events)
    if (warKey === 'ww2') {
        const theatres = ['europe', 'pacific'];
        theatres.forEach(tKey => {
            const theatre = ww2DetailedTheatres[tKey];
            if (theatre) {
                ['military', 'atrocities'].forEach(tabKey => {
                    const categories = theatre[tabKey];
                    if (categories) {
                        categories.forEach(cat => {
                            if (cat.events) {
                                cat.events.forEach(event => {
                                    ids.add('theatre_' + tKey + '_' + tabKey + '_' + event.title.replace(/\s+/g, '_').toLowerCase().slice(0, 40));
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    return ids;
}

function trackEventOpen(eventId) {
    if (!visitorSession) return;
    visitorSession.exploredEvents.add(eventId);
    saveVisitorSession();
    updateProgressRing();
}

function updateProgressRing() {
    const fill = document.getElementById('progress-ring-fill');
    const pctEl = document.getElementById('progress-ring-pct');
    const rankEl = document.getElementById('badge-rank');
    if (!fill || !pctEl || !visitorSession) return;

    const currentWarKey = window.currentWar || 'ww1';
    const totalIds = getExploreableEventIds(currentWarKey);
    const total = totalIds.size || 14;
    
    let exploredCount = 0;
    visitorSession.exploredEvents.forEach(id => {
        if (totalIds.has(id)) {
            exploredCount++;
        }
    });

    const pct = Math.min(Math.round((exploredCount / total) * 100), 100);

    const circumference = 113.1;
    const offset = circumference - (pct / 100) * circumference;
    fill.style.strokeDashoffset = offset;
    pctEl.textContent = pct + '%';

    // Assign a rank based on progress
    let rank = 'Recruit';
    if (pct >= 90) rank = 'Supreme Commander';
    else if (pct >= 70) rank = 'Field Marshal';
    else if (pct >= 50) rank = 'General';
    else if (pct >= 30) rank = 'Sergeant';
    else if (pct >= 10) rank = 'Private';
    if (rankEl) rankEl.textContent = rank;
}

// Patch openMainModal to track exploration
const _origOpenMainModal = openMainModal;
openMainModal = function(title, body, images, imgFallback) {
    trackEventOpen('modal_' + title.replace(/\s+/g, '_').toLowerCase().slice(0, 40));
    _origOpenMainModal(title, body, images, imgFallback);
};

// Patch openTheatreEventModal to track exploration using unique title-based slugs
const _origOpenTheatreEventModal = openTheatreEventModal;
openTheatreEventModal = function(categoryTitle, eventIdx) {
    const data = ww2DetailedTheatres[currentTheatreKey][currentTheatreTab];
    if (data) {
        const category = data.find(c => c.category === categoryTitle);
        if (category && category.events && category.events[eventIdx]) {
            const event = category.events[eventIdx];
            const eventUniqueId = 'theatre_' + currentTheatreKey + '_' + currentTheatreTab + '_' + event.title.replace(/\s+/g, '_').toLowerCase().slice(0, 40);
            trackEventOpen(eventUniqueId);
        }
    }
    _origOpenTheatreEventModal(categoryTitle, eventIdx);
};

// Reinitialise badge whenever a war is selected
const _origSelectWar = selectWar;
selectWar = function(warKey) {
    _origSelectWar(warKey);
    setTimeout(initVisitorBadge, 50);
};

// =============================================================
//  QUIZ DATA BANK
// =============================================================
const quizBank = {
    ww1: [
        { q: "Which nation's heir was assassinated, triggering WWI?", opts: ["Germany", "Austria-Hungary", "Serbia", "France"], a: 1, explain: "Archduke Franz Ferdinand of Austria-Hungary was assassinated in Sarajevo on June 28, 1914, triggering the July Crisis." },
        { q: "What term describes the military build-up and arms race that preceded WWI?", opts: ["Nationalism", "Imperialism", "Militarism", "Fascism"], a: 2, explain: "Militarism — the rapid expansion of armies and navies — created an atmosphere where war was seen as inevitable." },
        { q: "Which battle is famously remembered as one of the bloodiest in history, with over 1 million casualties?", opts: ["Battle of Verdun", "Battle of the Somme", "Battle of the Marne", "Gallipoli"], a: 1, explain: "The Battle of the Somme in 1916 resulted in over one million casualties on both sides." },
        { q: "In what year did the United States officially enter WWI?", opts: ["1914", "1915", "1916", "1917"], a: 3, explain: "The U.S. entered the war in April 1917, partly due to the Zimmermann Telegram and unrestricted submarine warfare." },
        { q: "Which ship was sunk by Germany, turning global opinion against them?", opts: ["USS Maine", "RMS Titanic", "RMS Lusitania", "HMS Dreadnought"], a: 2, explain: "A German submarine sank the British passenger liner RMS Lusitania in 1915, killing 1,198 people." },
        { q: "What name describes the type of trench warfare tactic used by Germany in 1918?", opts: ["Blitzkrieg", "Spring Offensive", "Schlieffen Plan", "Total War"], a: 1, explain: "Germany's Spring Offensive of 1918 was its last major attempt to break the Allied lines before the US troops became fully effective." },
        { q: "Which treaty formally ended WWI?", opts: ["Treaty of Brest-Litovsk", "Treaty of Versailles", "Treaty of Paris", "Treaty of London"], a: 1, explain: "The Treaty of Versailles, signed on June 28, 1919, officially ended WWI and imposed heavy penalties on Germany." },
        { q: "WWI introduced a terrifying new weapon to mass warfare. Which was first used at the Second Battle of Ypres?", opts: ["Tanks", "Poison Gas", "Submarine", "Airplane"], a: 1, explain: "Germany first deployed chlorine gas at Ypres in April 1915 — a shocking and deadly escalation in modern warfare." },
        { q: "Which British naval operation attempted to knock the Ottoman Empire out of the war?", opts: ["Battle of Jutland", "Gallipoli Campaign", "Zeebrugge Raid", "Operation Dynamo"], a: 1, explain: "The Gallipoli Campaign (1915–1916) was a failed Allied attempt to control the Dardanelles strait and capture Constantinople." },
        { q: "The 'Zimmermann Telegram' was a secret proposal from Germany to which country?", opts: ["France", "Mexico", "Austria", "Bulgaria"], a: 1, explain: "Germany proposed that Mexico attack the United States in exchange for territory, helping push the U.S. into WWI." }
    ],
    ww2: [
        { q: "What was the codename for the Allied amphibious invasion of Normandy on June 6, 1944?", opts: ["Operation Barbarossa", "Operation Sea Lion", "Operation Overlord", "Operation Dynamo"], a: 2, explain: "Operation Overlord (D-Day) was the largest amphibious invasion in history, opening the Western Front in Europe." },
        { q: "Which city's invasion officially started WWII in Europe?", opts: ["France", "Poland", "Belgium", "Denmark"], a: 1, explain: "Germany invaded Poland on September 1, 1939, leading Britain and France to declare war two days later." },
        { q: "What was Germany's rapid mobile warfare strategy called?", opts: ["Attrition", "Blitzkrieg", "Guerrilla warfare", "Siege warfare"], a: 1, explain: "Blitzkrieg ('Lightning War') combined fast tank movements, motorized infantry, and air support to overwhelm defenses." },
        { q: "Which battle is considered the turning point of the Eastern Front in WWII?", opts: ["Battle of Kursk", "Battle of Moscow", "Battle of Stalingrad", "Siege of Leningrad"], a: 2, explain: "The Battle of Stalingrad (1942–1943) ended with Germany's 6th Army encircled and destroyed — the war's pivotal turning point." },
        { q: "Which British mathematician helped crack the German Enigma code at Bletchley Park?", opts: ["Isaac Newton", "Alan Turing", "Charles Babbage", "Stephen Hawking"], a: 1, explain: "Alan Turing led the decryption effort, building the Bombe machine that cracked Enigma and saved countless Allied lives." },
        { q: "What surprise attack brought the United States into WWII?", opts: ["Battle of Midway", "Sinking of USS Arizona", "Attack on Pearl Harbor", "Invasion of the Philippines"], a: 2, explain: "Japan's surprise attack on Pearl Harbor on December 7, 1941 — 'a date which will live in infamy' — brought the U.S. into WWII." },
        { q: "Which U.S. President authorized the atomic bombings of Hiroshima and Nagasaki?", opts: ["Franklin Roosevelt", "Harry Truman", "Dwight Eisenhower", "John Kennedy"], a: 1, explain: "President Truman authorized the use of atomic bombs in August 1945, leading to Japan's unconditional surrender." },
        { q: "The 'D-Day' landing took place on the beaches of which country?", opts: ["Belgium", "The Netherlands", "Germany", "France"], a: 3, explain: "Allied forces landed on five beaches in Normandy, France on June 6, 1944." },
        { q: "Which German general was nicknamed 'The Desert Fox'?", opts: ["Heinrich Himmler", "Erich von Manstein", "Erwin Rommel", "Karl Dönitz"], a: 2, explain: "Erwin Rommel earned the nickname 'The Desert Fox' for his skilled armored warfare tactics in the North Africa campaign." },
        { q: "Germany's systematic genocide of Jewish people during WWII is known as:", opts: ["The Inquisition", "The Purge", "The Holocaust", "The Final Campaign"], a: 2, explain: "The Holocaust was Nazi Germany's systematic, state-sponsored murder of six million Jews and millions of others." }
    ]
};

// =============================================================
//  QUIZ STATE MACHINE
// =============================================================
let quizState = {
    war: 'ww1',
    questions: [],
    currentIdx: 0,
    score: 0,
    timerInterval: null,
    timeLeft: 15,
    answered: false,
    answered_log: [], // { correct: bool }
    advanceTimeout: null // Keep track of the question advance timeout
};

function openQuizModal() {
    document.getElementById('quiz-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    showQuizScreen('quiz-intro');
    // Pre-select the war based on what's currently loaded
    const currentWar = window.currentWar || 'ww1';
    document.getElementById('quiz-ww1-btn').style.borderWidth = currentWar === 'ww1' ? '3px' : '2px';
    document.getElementById('quiz-ww2-btn').style.borderWidth = currentWar === 'ww2' ? '3px' : '2px';
}

function closeQuizModal() {
    clearInterval(quizState.timerInterval);
    clearTimeout(quizState.advanceTimeout);
    document.getElementById('quiz-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function showQuizScreen(screenId) {
    ['quiz-intro', 'quiz-question-screen', 'quiz-results-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === screenId) el.classList.remove('hidden');
            else el.classList.add('hidden');
        }
    });
}

function startQuiz(war) {
    quizState.war = war;
    // Shuffle and pick 10 questions
    const pool = [...quizBank[war]].sort(() => Math.random() - 0.5).slice(0, 10);
    quizState.questions = pool;
    quizState.currentIdx = 0;
    quizState.score = 0;
    quizState.answered_log = [];
    showQuizScreen('quiz-question-screen');
    renderQuestion();
}

function restartQuiz() {
    showQuizScreen('quiz-intro');
}

function renderQuestion() {
    clearInterval(quizState.timerInterval);
    clearTimeout(quizState.advanceTimeout);
    const q = quizState.questions[quizState.currentIdx];
    const total = quizState.questions.length;
    const idx = quizState.currentIdx;

    // Update status bar
    document.getElementById('quiz-q-counter').textContent = `Question ${idx + 1} of ${total}`;
    document.getElementById('quiz-score-live').textContent = `Score: ${quizState.score}`;
    document.getElementById('quiz-question-text').textContent = q.q;

    // Hide Next Question button initially
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.classList.add('hidden');

    // Render choices
    const choicesEl = document.getElementById('quiz-choices');
    choicesEl.innerHTML = q.opts.map((opt, i) =>
        `<button class="quiz-choice-btn" id="quiz-choice-${i}" onclick="selectAnswer(${i})">${opt}</button>`
    ).join('');

    // Hide explanation
    const explanEl = document.getElementById('quiz-explanation');
    explanEl.classList.add('hidden');
    explanEl.textContent = '';

    quizState.answered = false;
    startTimer();
}

function startTimer() {
    quizState.timeLeft = 15;
    const fillEl = document.getElementById('quiz-timer-fill');
    const labelEl = document.getElementById('quiz-timer-label');
    if (fillEl) { fillEl.style.width = '100%'; fillEl.classList.remove('urgent'); }
    if (labelEl) labelEl.textContent = '15s';

    quizState.timerInterval = setInterval(() => {
        quizState.timeLeft--;
        const pct = (quizState.timeLeft / 15) * 100;
        if (fillEl) {
            fillEl.style.width = pct + '%';
            if (quizState.timeLeft <= 5) fillEl.classList.add('urgent');
        }
        if (labelEl) labelEl.textContent = quizState.timeLeft + 's';

        if (quizState.timeLeft <= 0) {
            clearInterval(quizState.timerInterval);
            if (!quizState.answered) timeExpired();
        }
    }, 1000);
}

function timeExpired() {
    quizState.answered = true;
    quizState.answered_log.push({ correct: false });
    const q = quizState.questions[quizState.currentIdx];
    // Mark correct answer
    const correctBtn = document.getElementById(`quiz-choice-${q.a}`);
    if (correctBtn) correctBtn.classList.add('correct');
    disableChoices();
    showExplanation('⏱ Time\'s up! ' + q.explain);
    
    // Reveal Next Question button
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.classList.remove('hidden');
    
    quizState.advanceTimeout = setTimeout(advanceQuestion, 2500);
}

function selectAnswer(chosen) {
    if (quizState.answered) return;
    quizState.answered = true;
    clearInterval(quizState.timerInterval);

    const q = quizState.questions[quizState.currentIdx];
    const isCorrect = chosen === q.a;
    quizState.answered_log.push({ correct: isCorrect });
    if (isCorrect) quizState.score++;
    document.getElementById('quiz-score-live').textContent = `Score: ${quizState.score}`;

    // Visual feedback
    const chosenBtn = document.getElementById(`quiz-choice-${chosen}`);
    const correctBtn = document.getElementById(`quiz-choice-${q.a}`);
    if (chosenBtn) chosenBtn.classList.add(isCorrect ? 'correct' : 'incorrect');
    if (!isCorrect && correctBtn) correctBtn.classList.add('correct');
    disableChoices();
    showExplanation((isCorrect ? '✓ Correct! ' : '✗ Incorrect. ') + q.explain);
    
    // Reveal Next Question button
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.classList.remove('hidden');
    
    quizState.advanceTimeout = setTimeout(advanceQuestion, isCorrect ? 1800 : 2800);
}

function triggerNextQuestion() {
    clearTimeout(quizState.advanceTimeout);
    const nextBtn = document.getElementById('quiz-next-btn');
    if (nextBtn) nextBtn.classList.add('hidden');
    advanceQuestion();
}

function disableChoices() {
    document.querySelectorAll('.quiz-choice-btn').forEach(b => b.disabled = true);
}

function showExplanation(text) {
    const el = document.getElementById('quiz-explanation');
    el.textContent = text;
    el.classList.remove('hidden');
}

function advanceQuestion() {
    quizState.currentIdx++;
    if (quizState.currentIdx >= quizState.questions.length) {
        showResults();
    } else {
        renderQuestion();
    }
}

function showResults() {
    const score = quizState.score;
    const total = quizState.questions.length;
    const pct = Math.round((score / total) * 100);

    // Determine rank and medal
    let rank, medal;
    if (pct === 100)     { rank = 'Supreme Commander'; medal = '🏆'; }
    else if (pct >= 80)  { rank = 'Field Marshal';     medal = '🎖️'; }
    else if (pct >= 60)  { rank = 'General';           medal = '🥇'; }
    else if (pct >= 40)  { rank = 'Sergeant';          medal = '🥈'; }
    else if (pct >= 20)  { rank = 'Private';           medal = '🥉'; }
    else                  { rank = 'Recruit';           medal = '📜'; }

    // Update high score
    if (visitorSession && score > visitorSession.quizHighScore) {
        visitorSession.quizHighScore = score;
        saveVisitorSession();
    }

    document.getElementById('quiz-medal').textContent = medal;
    document.getElementById('quiz-rank-title').textContent = rank;
    document.getElementById('quiz-result-text').textContent = `You answered ${score} out of ${total} correctly — ${pct}%!`;

    // Score breakdown
    const correct = quizState.answered_log.filter(l => l.correct).length;
    const incorrect = quizState.answered_log.filter(l => !l.correct).length;
    const highScore = visitorSession ? visitorSession.quizHighScore : score;
    document.getElementById('quiz-score-breakdown').innerHTML = `
        <div class="score-stat">
            <span class="score-stat-value" style="color:#2ec4b6">${correct}</span>
            <span class="score-stat-label">Correct</span>
        </div>
        <div class="score-stat">
            <span class="score-stat-value" style="color:#e71d36">${incorrect}</span>
            <span class="score-stat-label">Incorrect</span>
        </div>
        <div class="score-stat">
            <span class="score-stat-value">${pct}%</span>
            <span class="score-stat-label">Accuracy</span>
        </div>
        <div class="score-stat">
            <span class="score-stat-value">${highScore}</span>
            <span class="score-stat-label">Best Score</span>
        </div>
    `;

    showQuizScreen('quiz-results-screen');
    updateProgressRing();
}

// =============================================================
//  BOOT — check for returning visitor on page load
// =============================================================
(function boot() {
    const isReturning = loadVisitorSession();
    if (isReturning && visitorSession && visitorSession.age >= 14) {
        // Skip onboarding entirely for returning visitors
        document.getElementById('onboarding-overlay').style.display = 'none';
    }
})();

// =============================================================
//  INTERACTIVE PROFILE DROPDOWN MENU & MILESTONES ENGINE
// =============================================================
function toggleProfileDropdown(event) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById('profile-dropdown');
    const badge = document.getElementById('visitor-badge');
    if (!dropdown || !badge) return;
    
    const isHidden = dropdown.classList.contains('hidden');
    if (isHidden) {
        dropdown.classList.remove('hidden');
        badge.setAttribute('aria-expanded', 'true');
        updateProfileMenuData();
    } else {
        dropdown.classList.add('hidden');
        badge.setAttribute('aria-expanded', 'false');
    }
}

function updateProfileMenuData() {
    if (!visitorSession) return;
    
    // Core details
    document.getElementById('profile-visitor-name').textContent = visitorSession.name;
    
    const currentWarKey = window.currentWar || 'ww1';
    const totalIds = getExploreableEventIds(currentWarKey);
    const total = totalIds.size || 14;
    
    let exploredCount = 0;
    visitorSession.exploredEvents.forEach(id => {
        if (totalIds.has(id)) {
            exploredCount++;
        }
    });

    const pct = Math.min(Math.round((exploredCount / total) * 100), 100);
    
    // Assign a rank based on progress
    let rank = 'Recruit';
    if (pct >= 90) rank = 'Supreme Commander';
    else if (pct >= 70) rank = 'Field Marshal';
    else if (pct >= 50) rank = 'General';
    else if (pct >= 30) rank = 'Sergeant';
    else if (pct >= 10) rank = 'Private';
    
    document.getElementById('profile-rank').textContent = rank;
    document.getElementById('profile-stat-progress').textContent = pct + '%';
    document.getElementById('profile-stat-quiz').textContent = (visitorSession.quizHighScore || 0) + ' / 10';
    
    // Check Milestones & Achievements
    const firstEl = document.getElementById('milestone-first');
    const timelineEl = document.getElementById('milestone-timeline');
    const quizEl = document.getElementById('milestone-quiz');
    const perfectEl = document.getElementById('milestone-perfect');
    
    if (!firstEl || !timelineEl || !quizEl || !perfectEl) return;
    
    // 1. First Steps
    if (exploredCount >= 1) {
        if (!firstEl.classList.contains('unlocked')) {
            showAchievementToast("First Steps", "Explore 1 historical event");
        }
        firstEl.classList.remove('locked');
        firstEl.classList.add('unlocked');
    } else {
        firstEl.classList.add('locked');
        firstEl.classList.remove('unlocked');
    }
    
    // 2. Combat Veteran
    if (pct >= 50) {
        if (!timelineEl.classList.contains('unlocked')) {
            showAchievementToast("Combat Veteran", "Explore 50% of the timeline");
        }
        timelineEl.classList.remove('locked');
        timelineEl.classList.add('unlocked');
    } else {
        timelineEl.classList.add('locked');
        timelineEl.classList.remove('unlocked');
    }
    
    // 3. Historian (Took a quiz, scored at least 1)
    if (visitorSession.quizHighScore > 0) {
        if (!quizEl.classList.contains('unlocked')) {
            showAchievementToast("Historian", "Challenge the Knowledge Quiz");
        }
        quizEl.classList.remove('locked');
        quizEl.classList.add('unlocked');
    } else {
        quizEl.classList.add('locked');
        quizEl.classList.remove('unlocked');
    }
    
    // 4. Tactician (Perfect Score)
    if (visitorSession.quizHighScore === 10) {
        if (!perfectEl.classList.contains('unlocked')) {
            showAchievementToast("Tactician", "Score a perfect 10/10 on the Quiz");
        }
        perfectEl.classList.remove('locked');
        perfectEl.classList.add('unlocked');
    } else {
        perfectEl.classList.add('locked');
        perfectEl.classList.remove('unlocked');
    }
}

// Render dynamic floating Achievement Toast Pop-up
function showAchievementToast(name, desc) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    
    // Select visual icon dynamically
    let badgeIcon = '🎖️';
    if (name.includes('First Steps')) badgeIcon = '🎖️';
    else if (name.includes('Combat Veteran')) badgeIcon = '⚔️';
    else if (name.includes('Historian')) badgeIcon = '🎓';
    else if (name.includes('Tactician')) badgeIcon = '🏆';
    
    // Create card element
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
        <div class="toast-badge">${badgeIcon}</div>
        <div class="toast-content">
            <span class="toast-title">Achievement Unlocked!</span>
            <span class="toast-name">${name}</span>
            <span class="toast-desc">${desc}</span>
        </div>
    `;
    
    container.appendChild(toast);
    
    // Slide out after 3.8 seconds
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3800);
}

function startEditingName(event) {
    if (event) event.stopPropagation();
    if (!visitorSession) return;
    
    const nameWrap = document.querySelector('.profile-name-wrap');
    const inputWrap = document.querySelector('.profile-edit-input-wrap');
    const inputField = document.getElementById('profile-name-input');
    
    if (!nameWrap || !inputWrap || !inputField) return;
    
    nameWrap.classList.add('hidden');
    inputWrap.classList.remove('hidden');
    inputField.value = visitorSession.name;
    inputField.focus();
    inputField.select();
}

function saveEditedName(event) {
    if (event) event.stopPropagation();
    if (!visitorSession) return;
    
    const inputField = document.getElementById('profile-name-input');
    if (!inputField) return;
    
    const newName = inputField.value.trim();
    if (!newName) {
        alert('Explorer name cannot be empty.');
        return;
    }
    
    visitorSession.name = newName;
    saveVisitorSession();
    
    // Update badge & dropdown UI
    document.getElementById('profile-visitor-name').textContent = newName;
    document.getElementById('badge-visitor-name').textContent = newName;
    
    cancelEditingName();
}

function cancelEditingName(event) {
    if (event) event.stopPropagation();
    const nameWrap = document.querySelector('.profile-name-wrap');
    const inputWrap = document.querySelector('.profile-edit-input-wrap');
    
    if (!nameWrap || !inputWrap) return;
    
    nameWrap.classList.remove('hidden');
    inputWrap.classList.add('hidden');
}

function confirmResetProgress(event) {
    if (event) event.stopPropagation();
    if (!confirm('Are you sure you want to reset all timeline exploration progress and quiz high scores? This action cannot be undone.')) {
        return;
    }
    
    visitorSession.exploredEvents = new Set();
    visitorSession.quizHighScore = 0;
    saveVisitorSession();
    
    // Update badge, dropdown, progress rings
    updateProgressRing();
    updateProfileMenuData();
    
    alert('Your exploration history and challenge achievements have been successfully reset.');
}

function logoutSession(event) {
    if (event) event.stopPropagation();
    if (!confirm('Are you sure you want to log out? This will completely clear your name and exploration profile.')) {
        return;
    }
    
    localStorage.removeItem(VISITOR_KEY);
    visitorSession = null;
    
    // Smooth transition reload
    const body = document.body;
    body.style.transition = 'opacity 0.4s ease';
    body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.reload();
    }, 400);
}

// Bind key listener to input field
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('profile-name-input');
    if (inputField) {
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                saveEditedName(e);
            }
        });
    }
});

// Close profile dropdown when clicking outside
window.addEventListener('click', function(event) {
    const dropdown = document.getElementById('profile-dropdown');
    const badge = document.getElementById('visitor-badge');
    if (!dropdown || !badge) return;
    
    if (!dropdown.contains(event.target) && !badge.contains(event.target)) {
        dropdown.classList.add('hidden');
        badge.setAttribute('aria-expanded', 'false');
    }
});


// =============================================================
//  TACTICAL CAMPAIGN MAP SLIDER STATE MACHINE & DATA
// =============================================================

const campaignMapData = {
    ww1: {
        years: [1914, 1915, 1916, 1917, 1918],
        factionNames: { allies: "Entente Powers", axis: "Central Powers" },
        states: {
            1914: {
                subtitle: "Outbreak & Western Stalemate",
                brief: "Archduke Franz Ferdinand's assassination triggers the alliance web. Germany's rapid invasion of France is halted at the Marne, leading both sides to dig trenches. Meanwhile, Russia invades East Prussia, opening the Eastern Front.",
                stats: { allies: 55, axis: 25, neutral: 20 },
                regions: {
                    'reg-north-america': 'neutral',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'allied',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'allied',
                    'reg-north-africa': 'neutral',
                    'reg-east-asia': 'neutral',
                    'reg-japan': 'neutral',
                    'reg-pacific-islands': 'neutral',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Battle of the Marne", x: 410, y: 190, index: 0, text: "The Great stalemate begins on the Western Front as both armies dig trenches." }
                ]
            },
            1915: {
                subtitle: "Deadlock & New Fronts",
                brief: "The Western Front remains a bloody stalemate. To break the deadlock, the Allies launch the Gallipoli Campaign against the Ottoman Empire (which joined the Central Powers), ending in disaster. German U-boats sink the RMS Lusitania, shifting global public opinion.",
                stats: { allies: 52, axis: 33, neutral: 15 },
                regions: {
                    'reg-north-america': 'neutral',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'allied',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'allied',
                    'reg-north-africa': 'axis-central',
                    'reg-east-asia': 'neutral',
                    'reg-japan': 'neutral',
                    'reg-pacific-islands': 'neutral',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Sinking of RMS Lusitania", x: 310, y: 160, index: 1, text: "A German U-boat torpedoes a British luxury liner, fueling anti-German sentiment in the US." },
                    { name: "Gallipoli Campaign", x: 520, y: 230, index: 1, text: "Allied forces attempt to seize the Dardanelles strait to knocking out the Ottomans." }
                ]
            },
            1916: {
                subtitle: "The Agony of Attrition",
                brief: "Both factions launch massive offensives to bleed each other dry. The German attack at Verdun results in the longest battle of the war. The British counter-attack at the Somme sees over a million casualties. Tanks are introduced for the first time.",
                stats: { allies: 52, axis: 33, neutral: 15 },
                regions: {
                    'reg-north-america': 'neutral',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'allied',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'allied',
                    'reg-north-africa': 'axis-central',
                    'reg-east-asia': 'neutral',
                    'reg-japan': 'neutral',
                    'reg-pacific-islands': 'neutral',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Battle of Verdun", x: 420, y: 190, index: 2, text: "One of the longest and bloodiest attritional battles of WWI." },
                    { name: "Battle of the Somme", x: 405, y: 185, index: 2, text: "British armies suffer massive casualties attempting to pierce German lines." }
                ]
            },
            1917: {
                subtitle: "Shifting Fortunes & Revolution",
                brief: "Under pressure of war, the Russian Empire collapses into revolution, forcing Russia's exit (Brest-Litovsk treaty). However, unrestricted German submarine warfare and the Zimmermann Telegram draw the industrial powerhouse of the United States into the conflict.",
                stats: { allies: 60, axis: 30, neutral: 10 },
                regions: {
                    'reg-north-america': 'allied',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'allied',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'neutral',
                    'reg-north-africa': 'axis-central',
                    'reg-east-asia': 'neutral',
                    'reg-japan': 'neutral',
                    'reg-pacific-islands': 'neutral',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "United States Mobilizes", x: 180, y: 180, index: 3, text: "Fresh American troops and massive material resources flow across the Atlantic." }
                ]
            },
            1918: {
                subtitle: "Victory & the German Collapse",
                brief: "Germany launches a final desperate Spring Offensive, but fails to reach Paris before fresh American troops arrive. An Allied counter-offensive pierces German lines, triggering military mutiny and total Central Powers collapse. The Armistice is signed.",
                stats: { allies: 70, axis: 10, neutral: 20 },
                regions: {
                    'reg-north-america': 'allied',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'allied',
                    'reg-central-europe': 'neutral',
                    'reg-eastern-europe': 'neutral',
                    'reg-north-africa': 'neutral',
                    'reg-east-asia': 'neutral',
                    'reg-japan': 'neutral',
                    'reg-pacific-islands': 'neutral',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Meuse-Argonne Offensive", x: 425, y: 185, index: 4, text: "The largest American-led offensive of the war, breaking Germany's final defensive spine." },
                    { name: "Signing of the Armistice", x: 395, y: 175, index: 4, text: "At 11 AM on November 11, the guns fell silent as Germany capitulated." }
                ]
            }
        }
    },
    ww2: {
        years: [1939, 1940, 1941, 1942, 1943, 1944, 1945],
        factionNames: { allies: "Allied Powers", axis: "Axis Powers" },
        states: {
            1939: {
                subtitle: "Blitzkrieg in the West",
                brief: "Germany invades Poland using lightning war tactics. France and Britain declare war but remain defensive. The Soviet Union signs a non-aggression pact with Hitler and occupies eastern Poland.",
                stats: { allies: 45, axis: 15, neutral: 40 },
                regions: {
                    'reg-north-america': 'neutral',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'allied',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'neutral',
                    'reg-north-africa': 'neutral',
                    'reg-east-asia': 'neutral',
                    'reg-japan': 'neutral',
                    'reg-pacific-islands': 'neutral',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Invasion of Poland", x: 480, y: 160, type: "theatre", theatre: "europe", tab: "military", category: "1939 — Invasion of Poland", index: 0, text: "German tank divisions rip through Poland, triggering declarations of war." }
                ]
            },
            1940: {
                subtitle: "The Fall of France",
                brief: "Germany bypasses the Maginot Line, conquering Denmark, Norway, Belgium, and France in just six weeks. The British Army escapes at Dunkirk, leaving Britain to stand alone against German air raids in the Battle of Britain.",
                stats: { allies: 25, axis: 45, neutral: 30 },
                regions: {
                    'reg-north-america': 'neutral',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'axis-central',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'neutral',
                    'reg-north-africa': 'neutral',
                    'reg-east-asia': 'neutral',
                    'reg-japan': 'neutral',
                    'reg-pacific-islands': 'neutral',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Evacuation of Dunkirk", x: 395, y: 175, type: "theatre", theatre: "europe", tab: "military", category: "1940 — The Fall of the West", index: 1, text: "Over 330,000 Allied soldiers are rescued from the beaches by a flotilla of small vessels." },
                    { name: "Battle of Britain & The Blitz", x: 350, y: 140, type: "theatre", theatre: "europe", tab: "military", category: "1940 — The Fall of the West", index: 2, text: "The RAF defends British airspace from constant Luftwaffe strategic bombing." }
                ]
            },
            1941: {
                subtitle: "Barbarossa & Pearl Harbor",
                brief: "Hitler breaks his pact with Russia, launching a massive three-pronged invasion of the USSR. In the Pacific, Japan attacks the US naval base at Pearl Harbor, drawing the United States fully into the global war.",
                stats: { allies: 55, axis: 35, neutral: 10 },
                regions: {
                    'reg-north-america': 'allied',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'axis-central',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'allied',
                    'reg-north-africa': 'axis-central',
                    'reg-east-asia': 'allied',
                    'reg-japan': 'axis-central',
                    'reg-pacific-islands': 'axis-central',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Operation Barbarossa", x: 550, y: 150, type: "theatre", theatre: "europe", tab: "military", category: "1941-1942 — The Eastern Front Opens", index: 0, text: "German armies push deep into Soviet territories toward Moscow and Leningrad." },
                    { name: "Attack on Pearl Harbor", x: 960, y: 320, type: "theatre", theatre: "pacific", tab: "military", category: "1941-1942 — Japan's Rapid Expansion", index: 0, text: "Japanese bombers stage a surprise strike, pulling the US into the world conflict." }
                ]
            },
            1942: {
                subtitle: "The Tide Turns",
                brief: "The Allies halt the Axis advance in three major battles. The Soviets trap the German 6th Army at Stalingrad, the US Navy breaks Japanese carrier strength at Midway, and the British defeat Rommel at El Alamein.",
                stats: { allies: 55, axis: 35, neutral: 10 },
                regions: {
                    'reg-north-america': 'allied',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'axis-central',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'allied',
                    'reg-north-africa': 'axis-central',
                    'reg-east-asia': 'allied',
                    'reg-japan': 'axis-central',
                    'reg-pacific-islands': 'axis-central',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Battle of Stalingrad", x: 620, y: 180, type: "theatre", theatre: "europe", tab: "military", category: "1941-1942 — The Eastern Front Opens", index: 2, text: "Brutal urban fighting ends in a crushing German defeat and strategic retreat." },
                    { name: "Battle of Midway", x: 920, y: 310, type: "theatre", theatre: "pacific", tab: "military", category: "1942 — Turning the Tide", index: 1, text: "US naval forces ambush and sink four Japanese aircraft carriers, halting their advance." },
                    { name: "Battle of the Coral Sea", x: 820, y: 440, type: "theatre", theatre: "pacific", tab: "military", category: "1942 — Turning the Tide", index: 0, text: "First carrier-vs-carrier fight where opposing ships never visually lay eyes on each other." }
                ]
            },
            1943: {
                subtitle: "Allied Initiative",
                brief: "Soviets win the massive tank battle at Kursk. Allied forces secure North Africa, knocking Italy out of the war. In the Pacific, U.S. forces win a brutal campaign at Guadalcanal, beginning the 'Island Hopping' offensive.",
                stats: { allies: 60, axis: 30, neutral: 10 },
                regions: {
                    'reg-north-america': 'allied',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'axis-central',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'allied',
                    'reg-north-africa': 'allied',
                    'reg-east-asia': 'allied',
                    'reg-japan': 'axis-central',
                    'reg-pacific-islands': 'axis-central',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Battle of Kursk", x: 580, y: 160, type: "theatre", theatre: "europe", tab: "military", category: "1943-1944 — Allied Counter-Offensives", index: 0, text: "The largest tank battle in history breaks Germany's final offensive power in the East." },
                    { name: "Guadalcanal Campaign", x: 840, y: 420, type: "theatre", theatre: "pacific", tab: "military", category: "1943-1944 — Island Hopping", index: 0, text: "A six-month grueling jungle battle marks the first major ground offensive victory." }
                ]
            },
            1944: {
                subtitle: "The Liberation Begins",
                brief: "Allied forces stage D-Day, the largest amphibious landing in Normandy, opening the Western Front. Paris is liberated. In the Pacific, the Japanese navy is destroyed at Leyte Gulf, leading to the liberation of the Philippines.",
                stats: { allies: 70, axis: 20, neutral: 10 },
                regions: {
                    'reg-north-america': 'allied',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'allied',
                    'reg-central-europe': 'axis-central',
                    'reg-eastern-europe': 'allied',
                    'reg-north-africa': 'allied',
                    'reg-east-asia': 'allied',
                    'reg-japan': 'axis-central',
                    'reg-pacific-islands': 'allied',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "D-Day Normandy Landings", x: 385, y: 185, type: "theatre", theatre: "europe", tab: "military", category: "1943-1944 — Allied Counter-Offensives", index: 1, text: "Operation Overlord breaches Germany's Atlantic Wall in northern France." },
                    { name: "Battle of Leyte Gulf", x: 770, y: 340, type: "theatre", theatre: "pacific", tab: "military", category: "1943-1944 — Island Hopping", index: 2, text: "The largest naval engagement in history destroys Japan's naval capability." },
                    { name: "Liberation of Paris", x: 390, y: 195, type: "theatre", theatre: "europe", tab: "military", category: "1943-1944 — Allied Counter-Offensives", index: 2, text: "French Resistance and Allied armor force the surrender of the Paris garrison." }
                ]
            },
            1945: {
                subtitle: "Final Reckoning & Victory",
                brief: "Soviet forces storm Berlin, leading to Germany's unconditional surrender (VE Day). In the Pacific, U.S. marines conquer Okinawa. The United States drops two atomic bombs on Hiroshima and Nagasaki, forcing Japan to surrender (VJ Day).",
                stats: { allies: 85, axis: 5, neutral: 10 },
                regions: {
                    'reg-north-america': 'allied',
                    'reg-united-kingdom': 'allied',
                    'reg-western-europe': 'allied',
                    'reg-central-europe': 'allied',
                    'reg-eastern-europe': 'allied',
                    'reg-north-africa': 'allied',
                    'reg-east-asia': 'allied',
                    'reg-japan': 'allied',
                    'reg-pacific-islands': 'allied',
                    'reg-australia': 'allied'
                },
                hotspots: [
                    { name: "Battle of Berlin", x: 460, y: 170, type: "theatre", theatre: "europe", tab: "military", category: "1945 — The Final Collapse", index: 1, text: "Soviet forces storm and raise the Red Flag over the Reichstag, ending Nazi rule." },
                    { name: "Battle of Okinawa", x: 810, y: 260, type: "theatre", theatre: "pacific", tab: "military", category: "1945 — The Final Struggles", index: 1, text: "A massive attritional island fight with widespread Kamikaze suicide operations." },
                    { name: "Atomic Bombings", x: 875, y: 180, type: "theatre", theatre: "pacific", tab: "military", category: "1945 — The Final Struggles", index: 2, text: "First deployment of nuclear weapons destroys Hiroshima and Nagasaki, forcing peace." }
                ]
            }
        }
    }
};

// Open Campaign Map View Screen
function openCampaignMapView() {
    const warKey = window.currentWar || 'ww1';
    
    // Set Slider attributes dynamically
    const slider = document.getElementById('campaign-year-slider');
    const data = campaignMapData[warKey];
    const years = data.years;
    
    slider.min = Math.min(...years);
    slider.max = Math.max(...years);
    slider.value = Math.min(...years);
    
    // Track exploration - registers the action in local storage!
    trackEventOpen('campaign_map_' + warKey);
    
    // Update war room colors and theme classes dynamically
    const view = document.getElementById('campaign-map-view');
    view.className = '';
    view.classList.add(warKey + '-theme');
    
    // Populate Slider Year tick markings
    const ticksContainer = document.getElementById('slider-ticks');
    ticksContainer.innerHTML = years.map(y => `
        <span class="tick-mark" id="tick-${y}" onclick="updateMapYear(${y})">${y}</span>
    `).join('');
    
    // Update faction labels
    document.getElementById('faction-allies-label').innerText = data.factionNames.allies;
    document.getElementById('faction-axis-label').innerText = data.factionNames.axis;
    
    // Slide show and display overlay
    view.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
    
    // Bind region mouse hovers for dynamic tooltips
    initRegionHovers();
    
    // Draw initial year
    updateMapYear(Math.min(...years));
}

// Close Campaign Map View Screen
function closeCampaignMapView() {
    document.getElementById('campaign-map-view').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Slider drag listener
function handleMapSliderInput(yearVal) {
    updateMapYear(parseInt(yearVal, 10));
}

// Update Map State dynamically based on Selected Year
function updateMapYear(year) {
    const warKey = window.currentWar || 'ww1';
    const data = campaignMapData[warKey];
    const state = data.states[year];
    if (!state) return;
    
    // Update slider position handle
    document.getElementById('campaign-year-slider').value = year;
    
    // Update tick styles
    const ticks = document.querySelectorAll('.tick-mark');
    ticks.forEach(t => t.classList.remove('active'));
    const activeTick = document.getElementById('tick-' + year);
    if (activeTick) activeTick.classList.add('active');
    
    // Update Operations Deck details text
    document.getElementById('op-year-title').innerText = year;
    document.getElementById('op-year-subtitle').innerText = state.subtitle;
    document.getElementById('op-brief-text').innerHTML = state.brief;
    
    // Update dynamic faction balance stats and fills
    document.getElementById('faction-allies-pct').innerText = state.stats.allies + '%';
    document.getElementById('faction-allies-fill').style.width = state.stats.allies + '%';
    
    document.getElementById('faction-axis-pct').innerText = state.stats.axis + '%';
    document.getElementById('faction-axis-fill').style.width = state.stats.axis + '%';
    
    document.getElementById('faction-neutral-pct').innerText = state.stats.neutral + '%';
    document.getElementById('faction-neutral-fill').style.width = state.stats.neutral + '%';
    
    // Shading the SVG map paths based on alignment states
    const svgRegions = document.querySelectorAll('.map-region');
    svgRegions.forEach(reg => {
        reg.className.baseVal = 'map-region'; // Clear classes
        const alignment = state.regions[reg.id];
        if (alignment === 'allied') {
            reg.classList.add('region-allied');
        } else if (alignment === 'axis-central') {
            reg.classList.add('region-axis-central');
        } else if (alignment === 'neutral') {
            reg.classList.add('region-neutral');
        }
    });
    
    // Render dynamic active battle hotspots on SVG (Core dots + pulsing radars)
    const hotspotsGroup = document.getElementById('map-hotspots-group');
    let hotspotsSVG = '';
    
    state.hotspots.forEach((spot, idx) => {
        hotspotsSVG += `
            <g style="cursor: pointer;" onclick="handleHotspotClick(${year}, ${idx})">
                <!-- Pulsating Radar Ring -->
                <circle cx="${spot.x}" cy="${spot.y}" r="12" class="hotspot-radar" />
                <!-- Core Dot -->
                <circle cx="${spot.x}" cy="${spot.y}" r="6" class="hotspot-marker" id="spot-${year}-${idx}" />
                <title>${spot.name}: ${spot.text}</title>
            </g>
        `;
    });
    hotspotsGroup.innerHTML = hotspotsSVG;
    
    // Render clickable Operations Deck hotspots list buttons
    const hotspotsList = document.getElementById('op-hotspots-list');
    if (state.hotspots.length > 0) {
        hotspotsList.innerHTML = state.hotspots.map((spot, idx) => `
            <button class="op-hotspot-btn" onclick="handleHotspotClick(${year}, ${idx})">
                <span>⚔️ <strong>${spot.name}</strong></span>
                <span class="op-hotspot-arrow">Explore Archive ➔</span>
            </button>
        `).join('');
    } else {
        hotspotsList.innerHTML = `<p style="font-size: 0.85rem; color: var(--text-secondary); font-style: italic;">No active frontlines recorded for this sector in ${year}.</p>`;
    }
}

// Dynamic Region Hovers Tooltip mapping
function initRegionHovers() {
    const tooltip = document.getElementById('map-tooltip');
    const regions = document.querySelectorAll('.map-region');
    const regionsNames = {
        'reg-north-america': 'North America',
        'reg-united-kingdom': 'United Kingdom',
        'reg-western-europe': 'Western Europe',
        'reg-central-europe': 'Central Europe',
        'reg-eastern-europe': 'Eastern Europe & USSR',
        'reg-north-africa': 'North Africa & Middle East',
        'reg-east-asia': 'East Asia & China',
        'reg-japan': 'Japanese Empire',
        'reg-pacific-islands': 'Pacific Theatres',
        'reg-australia': 'Southeast Asia & Australia'
    };
    
    regions.forEach(reg => {
        reg.addEventListener('mouseenter', () => {
            const warKey = window.currentWar || 'ww1';
            const year = parseInt(document.getElementById('campaign-year-slider').value, 10);
            const state = campaignMapData[warKey].states[year];
            const alignmentCode = state ? state.regions[reg.id] : 'neutral';
            
            let alignmentLabel = 'Neutral';
            if (alignmentCode === 'allied') {
                alignmentLabel = campaignMapData[warKey].factionNames.allies;
            } else if (alignmentCode === 'axis-central') {
                alignmentLabel = campaignMapData[warKey].factionNames.axis;
            }
            
            tooltip.innerHTML = `<strong>${regionsNames[reg.id] || 'Region'}</strong><br><span style="color: var(--accent-color); font-size: 0.8rem; font-weight: bold;">Control: ${alignmentLabel}</span>`;
            tooltip.style.opacity = '1';
        });
        
        reg.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
        
        reg.addEventListener('mousemove', (e) => {
            const rect = document.querySelector('.map-arena').getBoundingClientRect();
            const posX = e.clientX - rect.left + 15;
            const posY = e.clientY - rect.top + 15;
            tooltip.style.left = posX + 'px';
            tooltip.style.top = posY + 'px';
        });
    });
}

// Handle dynamic Hotspot Clicking and link to unified modal structures
function handleHotspotClick(year, index) {
    const warKey = window.currentWar || 'ww1';
    const spot = campaignMapData[warKey].states[year].hotspots[index];
    if (!spot) return;
    
    if (warKey === 'ww1') {
        // Direct WWI timeline modals
        openTimelineModal(spot.index);
    } else {
        // WWII Theatre event modals
        window.currentTheatreKey = spot.theatre;
        window.currentTheatreTab = spot.tab;
        
        openTheatreEventModal(spot.category, spot.index);
    }
}

// Global Keyboard listener for closing active modals/overlays with 'Escape'
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // 1. Lightbox modal (highest priority z-index)
        const lightbox = document.getElementById('lightbox-modal');
        if (lightbox && !lightbox.classList.contains('hidden')) {
            closeLightbox();
            return;
        }
        
        // 2. Main Modal
        const mainModal = document.getElementById('main-modal');
        if (mainModal && !mainModal.classList.contains('hidden')) {
            closeMainModal();
            return;
        }
        
        // 3. WWII Theatre Event Modal
        const theatreEventModal = document.getElementById('theatre-event-modal');
        if (theatreEventModal && !theatreEventModal.classList.contains('hidden')) {
            closeTheatreEventModal();
            return;
        }
        
        // 4. History Challenge Quiz Modal
        const quizModal = document.getElementById('quiz-modal');
        if (quizModal && !quizModal.classList.contains('hidden')) {
            closeQuizModal();
            return;
        }
        
        // 5. About Project Modal
        const aboutModal = document.getElementById('about-modal');
        if (aboutModal && !aboutModal.classList.contains('hidden')) {
            closeAboutModal();
            return;
        }
        
        // 6. Interactive Campaign Map Overlay
        const campaignMap = document.getElementById('campaign-map-view');
        if (campaignMap && !campaignMap.classList.contains('hidden')) {
            closeCampaignMapView();
            return;
        }
        
        // 7. Figure Details View
        const figuresView = document.getElementById('figures-view');
        if (figuresView && !figuresView.classList.contains('hidden')) {
            closeFiguresView();
            return;
        }
        
        // 8. WWII Theatre Details View
        const theatreDetails = document.getElementById('theatre-details');
        if (theatreDetails && !theatreDetails.classList.contains('hidden')) {
            closeTheatreDetails();
            return;
        }
        
        // 9. WWII Theatre Split screen
        const theatreSplit = document.getElementById('theatre-split');
        if (theatreSplit && !theatreSplit.classList.contains('hidden')) {
            closeTheatreSplit();
            return;
        }
        
        // 10. Alliances Split Screen
        const alliancesSplit = document.getElementById('alliances-split');
        if (alliancesSplit && !alliancesSplit.classList.contains('hidden')) {
            closeAlliancesSplit();
            return;
        }
    }
});


