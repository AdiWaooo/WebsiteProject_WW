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
                    <div class="figure-slideshow">
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
}