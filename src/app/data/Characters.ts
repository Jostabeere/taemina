import { Character } from "../models/character/Character";
import { Extent } from "../models/character/Extent";
import { MagicType } from "../models/magic/MagicType";
import { CharacterType } from "../models/character/CharacterType";

export const characters: Character[] = [
  {
    characterType: CharacterType.sora,
    name: "Sora",
    lastName: "Silberfeder",
    age: "22",
    birthday: "6. Mai",
    citation: "Ob ich Ärger bekomme, ist mir ehrlich gesagt ziemlich egal. Euch würde ich auch nicht einfach in einer Zelle versauern lassen.",
    meanings: [
      {
        property: "Vorname",
        translation: "Sonne",
        language: "kelt.",
      },
    ],
    image: "assets/img/character/sora.jpg",
    skills: [
      {
        name: "Lichtkugel",
        strength: "0",
        description: "Eine praktische, schwebende Lichtkugel an ihrer Seite, die auch als Nachtlicht verwendet werden kann.",
        category: [MagicType.light],
      },
      {
        name: "Unsichtbarkeit",
        strength: "0",
        description: "Ein Unsichtbarkeitszauber, der die Lichtbrechung um sie herum verändert.",
        category: [MagicType.light],
      },
      {
        name: "Spiegelreflexion",
        strength: "0",
        description: "Durch Lichtbrechung erschafft sie eine Art Spiegel, durch den der Gegner abgelenkt wird. Aus den Spiegeln kann sie außerdem Lichtkugeln als Massenangriff schließen.",
        category: [MagicType.air, MagicType.water, MagicType.enhancement],
      }
    ],
    traits: [
      {
        key: Extent.always,
        value: "freundlich",
        icon: "groups",
        positive: true,
      },
      {
        key: Extent.often,
        value: "quirlig",
        icon: "sentiment_very_satisfied",
        positive: true,
      },
      {
        key: Extent.sometimes,
        value: "zielstrebig",
        icon: "trending_up",
        positive: true,
      },
      {
        key: Extent.sometimes,
        value: "naiv",
        icon: "cruelty_free",
        positive: false,
      },
      {
        key: Extent.often,
        value: "nachtragend",
        icon: "psychology_alt",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "ungehalten",
        icon: "fmd_bad",
        positive: false,
      },
      {
        key: Extent.often,
        value: "verunsichert",
        icon: "question_mark",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.adryan,
        interest: 10,
        notes: "",
      },
      {
        person: CharacterType.albert,
        interest: 6,
        notes: "",
      },
      {
        person: CharacterType.lior,
        interest: 4,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#752c09",
        description: "Langes Haar, das unten Korkenzieherlocken annimmt",
      },
      skinColor: {
        color: "#f3c2ad",
        description: "hell",
      },
      eyeColor: {
        color: "#2eec1c",
        description: "leuchtend grün",
      },
      accessory: "Eulenkette in grün-silber",
      body: "160 cm schlank, wenig Muskeln.",
    },
    magic: MagicType.light,
    classes: ["Lichtmagie-Spezial", "Zaubersprüche", "Geschichte der Magie", "Magische Bande", "Translokation", "Telepathie", "Heilmagie", "Kemu"],
    mbti: "ENFP",
    past: "Sora ist bei ihrer Mutter aufgewachsen. Ihr Vater ist an einer mysteriösen Krankheit gestorben, die allerdings nur eine List war, um sie zu schützen. Sie möchte schon von Kindesbeinen an auf die Taemina-Akademie gehen. Sie ist eine Freundin der Menschen und hofft, dass Menschen und Magier sich wieder besser verstehen lernen.",
    problem: "Rückschläge nagen schnell an ihrem Selbstvertrauen. Dann plagen sie Selbstzweifel und sie schottet sich ab.",
    development: "Sie muss lernen, selbstbewusster zu werden und mehr an sich zu glauben.",
    description: "Sora ist unsere willensstarke Protagonistin. Normalerweise ist sie anderen gegenüber aufgeschlossen, manchmal sogar fast schon zu vertrauensselig. Sie findet schnell Freunde, aber lässt sich auch leicht verunsichern. " +
      "Ihre Lieblingsfächer sind Magische Bande gefolgt von Telepathie. Sie hat schon seit sie denken kann Angst im Dunkeln.",
    pets: [{
      name: "Azrael",
      description: "In ihrer Kette ist ein ist magischer Beschützer in Form einer Schimmereule. Wird mit einem speziellen Zauber lebendig.",
      icon: "pets",
      image: "assets/img/creature/azrael.webp",
    }]
  },
  {
    characterType: CharacterType.adryan,
    name: "Adryan",
    lastName: "Finsterfaust",
    age: "24",
    birthday: "31. Juli",
    citation: "Es wird dringend Zeit, dass ich mir andere Freunde zulege.",
    meanings: [
      {
        property: "Vorname",
        translation: "Der Dunkle",
        language: "lat.",
      },
    ],
    skills: [
      {
        name: "Schattenkugel",
        strength: "10",
        description: "Langsamer, sehr destruktiver Angriff.",
        category: [MagicType.shadow],
      },
      {
        name: "Schattengeschoss",
        strength: "7",
        description: "Kleine sehr schnelle Geschosse.",
        category: [MagicType.shadow],
      },
      {
        name: "Dunkelblick",
        strength: "0",
        description: "Nachtsicht. Sehr praktisch für Frühaufsteher.",
        category: [MagicType.shadow],
      }
    ],
    traits: [
      {
        key: Extent.often,
        value: "regelbewusst",
        icon: "straighten",
        positive: true,
      },
      {
        key: Extent.often,
        value: "wachsam",
        icon: "crisis_alert",
        positive: true,
      },
      {
        key: Extent.often,
        value: "distanziert",
        icon: "safety_divider",
        positive: false,
      },
      {
        key: Extent.always,
        value: "reizbar",
        icon: "sentiment_dissatisfied",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.sora,
        interest: 10,
        notes: "OTP",
      },
      {
        person: CharacterType.halona,
        interest: 8,
        notes: "Die Konkurrentin",
      },
      {
        person: CharacterType.valda,
        interest: 1,
        notes: "Hassliebe",
      },
    ],
    looks: {
      hairColor: {
        color: "#260c02",
        description: "Dunkelbraunes, kurzes Haar",
      },
      skinColor: {
        color: "#987850",
        description: "Bronzefarbene Haut",
      },
      eyeColor: {
        color: "#000000",
        description: "schwarze, mandelförmige Augen",
      },
      accessory: "Er trägt einen Oberarmreif, der sich perfekt, in ein Tattoo einfügt.",
      body: "185 cm groß, sportlich",
    },
    magic: MagicType.shadow,
    classes: ["Schattenmagie"],
    mbti: "INTP",
    past: "Sein Großvater ging als der mächtigste, aber auch wahnsinnigste Schattenmagier in die Geschichte ein. Adryans Eltern sind keine Schattenmagier und fürchten sich vor seinen Fähigkeiten.",
    problem: "Höhenangst, Engstirnigkeit.",
    description: "Adryan spricht fließend Mahoa und versteht daher auch den Inhalt von Zaubersprüchen.",
    image: "assets/img/character/adryan.jpg",
    development: "Macht der Freundschaft.",
    pets: [{
      name: "Baghira",
      description: "Ein dicker Katzenfamiliar, der meistens noch schlechtere Laune hat als sein Besitzer.",
      image: "assets/img/creature/baghira.jpg",
    }]
  },
  {
    characterType: CharacterType.albert,
    name: "Albert Ricardo Shinichi",
    lastName: "von Las Marmotas ",
    citation: "Bewahre stets Haltung.",
    birthday: "27. August",
    image: "assets/img/character/albert.jpg",
    meanings: [
      {
        property: "Nachname",
        translation: "die Murmeltiere",
        language: "span.",
      },
    ],
    skills: [
      {
        name: "Feuerball",
        strength: "9",
        description: "Langsamer Angriff, der Gegner im Weg verbrennt.",
        category: [MagicType.fire],
      },
      {
        name: "Feuerpeitsche",
        strength: "3",
        description: "Schwacher, aber flexibler Angriff.",
        category: [MagicType.fire],
      },
      {
        name: "Selbstschrumpfung",
        strength: "1",
        description: "Ein nützlicher Zauber, der den Anwender für kurze Zeit klein werden lässt.",
        category: [MagicType.metamorphosis],
      },
    ],
    traits: [
      {
        key: Extent.always,
        value: "elegant",
        icon: "waving_hand",
        positive: true,
      },
      {
        key: Extent.often,
        value: "aufmerksam",
        icon: "travel_explore",
        positive: true,
      },
      {
        key: Extent.sometimes,
        value: "arrogant",
        icon: "self_improvement",
        positive: false,
      },
      {
        key: Extent.often,
        value: "weltfremd",
        icon: "dinner_dining",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.sora,
        interest: 7,
        notes: "",
      },
      {
        person: CharacterType.halona,
        interest: 2,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#000000",
        description: "Gewelltes rabenschwarzes Haar",
      },
      skinColor: {
        color: "#ffc0a3",
        description: "Bronzefarbene Haut",
      },
      eyeColor: {
        color: "#0094ff",
        description: "stahlblaue Augen",
      },
      accessory: "Zwei Ohrringe im Ohr (einer kurz, einer lang)",
      body: "183 cm groß, trainiert",
    },
    magic: MagicType.fire,
    classes: ["Feuermagie", "Metamorphose", "Kemu"],
    mbti: "ENTJ",
    description: "",
    pets: [{
      name: "Arget",
      description: "Ein junger Drachenfamiliar, der in einem langen Ohrring sitzt.",
      icon: "pets",
      image: "assets/img/creature/arget.jpg",
    }]
  },
  {
    characterType: CharacterType.halona,
    name: "Halona",
    lastName: "Sternenglut ",
    citation: "Halt dich von ihm fern, wenn du weißt, was gut für dich ist!",
    birthday: "23. Mai",
    image: "assets/img/character/halona.jpg",
    meanings: [
      {
        property: "Vorname",
        translation: "Glückliche Zukunft",
        language: "indianisch",
      },
    ],
    skills: [
      {
        name: "Schattengeschoss",
        strength: "7",
        description: "Kleine sehr schnelle Geschosse.",
        category: [MagicType.shadow],
      },
      {
        name: "Schattenfeuer",
        strength: "7",
        description: "Langsame, destruktive Schattenflamme.",
        category: [MagicType.shadow, MagicType.fire],
      },
      {
        name: "Schattentauchen",
        strength: "0",
        description: "Kann sich in Schatten tarnen.",
        category: [MagicType.shadow],
      }
    ],
    traits: [
      {
        key: Extent.always,
        value: "ehrgeizig",
        icon: "fitness_center",
        positive: true,
      },
      {
        key: Extent.sometimes,
        value: "social butterfly",
        icon: "diversity_3",
        positive: true,
      },
      {
        key: Extent.often,
        value: "opportunistisch",
        icon: "diversity_1",
        positive: false,
      },
      {
        key: Extent.often,
        value: "sadistisch",
        icon: "crisis_alert",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "stur",
        icon: "fmd_bad",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.adryan,
        interest: 10,
        notes: "Ist prinzipell an niemandem außer Adryan interessiert.",
      },
    ],
    looks: {
      hairColor: {
        color: "#ffbcd6",
        description: "Mittellanges, hellrosafarbenes Haar, das spitz absteht.",
      },
      skinColor: {
        color: "#fff5e9",
        description: "Extrem blasse Haut.",
      },
      eyeColor: {
        color: "#0b1860",
        description: "dunkelblaue, spitz zulaufende Augen. Durchdringender Blick.",
      },
      accessory: "Gelbe Haarspange und Glitzermakeup.",
      body: "168 cm groß, ist sportlicher als sie aussieht",
    },
    magic: MagicType.shadow,
    classes: ["Schattenmagie", "Tränke", "Feuermagie", "Kemu"],
    mbti: "ENFJ",
    past: "Hängt an Adryan und hat seiner Familie Treue geschworen.",
    problem: "Schattendämonen",
    description: "Missgünstig gegenüber Sora.",
    pets: [{
      name: "Krähe",
      description: "Ein vernachlässigter, unglücklicher Familiar, der in ihrer Haarspange haust.",
      icon: "pets",
      image: "assets/img/creature/crow.jpg",
    }]
  },
  {
    characterType: CharacterType.brian,
    name: "Brian",
    lastName: "Flinkfinger",
    description: "Er ist eine sehr oberflächliche Person, die andere nach ihrem Aussehen, Ruf und ihrer Macht bewertet. Eine Person näher kennenzulernen, hält er für unnötig.",
    meanings: [],
    image: "assets/img/character/brian.jpg",
    skills: [
      {
        name: "Schwache Wahrsagerei",
        strength: "0",
        description: "Vorhersage bald erfolgender Ereignisse mit moderater Korrektheit.",
        category: [MagicType.time],
      },
      {
        name: "Verlangsamung",
        strength: "0",
        description: "Verlangsamt einen Gegner.",
        category: [MagicType.time],
      },
    ],
    traits: [
      {
        key: Extent.often,
        value: "Schleimer",
        icon: "spatial_tracking",
        positive: true,
      },
      {
        key: Extent.always,
        value: "tierlieb",
        icon: "pets",
        positive: true,
      },
      {
        key: Extent.sometimes,
        value: "intrigant",
        icon: "hearing",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "Lügner",
        icon: "rule",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.elea,
        interest: 10,
        notes: "",
      },
      {
        person: CharacterType.thea,
        interest: 3,
        notes: "",
      }
    ],
    looks: {
      hairColor: {
        color: "#e8b86f",
        description: "Blonde Locken bis zur Schulter",
      },
      eyeColor: {
        color: "#a4f2fc",
        description: "Wässrig blaue eng beieinanderstehende Augen",
      },
      accessory: "",
      body: "175cm groß, wenig athletische, schmächtige Figur",
    },
    magic: MagicType.time,
    classes: ["Zeitmagie", "Wahrsagerei", "Kemu"],
    mbti: "ESTJ",
    past: "Ist Sohn des königlichen Pferdeknechts und einer Leibwächterin am Hofe des Königs von Marmotas, gab in Kindheit Problem mit Prinz.",
    problem: "Er möchte seitdem Rache nehmen. Er möchte Macht und selbst König sein.",
    development: "",
  },
  {
    characterType: CharacterType.marcellus,
    name: "Marcellus",
    lastName: "Pampinini",
    age: "25",
    meanings: [],
    image: "assets/img/character/marcellus.jpg",
    skills: [],
    traits: [
      {
        key: Extent.always,
        value: "treu",
        icon: "volunteer_activism",
        positive: true,
      },
      {
        key: Extent.always,
        value: "diplomatisch",
        icon: "handshake",
        positive: true,
      },
      {
        key: Extent.always,
        value: "ehrgeizig",
        icon: "fitness_center",
        positive: true,
      },
      {
        key: Extent.sometimes,
        value: "eingebildet",
        icon: "self_improvement",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "hitzig",
        icon: "local_fire_department",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.albert,
        interest: 5,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#422b1c",
        description: "dunkelbrauner Militärhaarschnitt",
      },
      eyeColor: {
        color: "#5b310f",
        description: "dunkelbraune, harte Augen",
      },
      accessory: "",
      body: "191cm sehr groß, Schrank",
    },
    magic: MagicType.metamorphosis,
    classes: ["Metamorphose", "Luftmagie", "Kemu"],
    mbti: "INFP",
    past: "Sohn einer Adeligenfamilie. Familienmitglied ist in der Leibgarde der Frau des Königs.",
    problem: "Will Anerkennung. Er und Albert sind gute Freunde.",
    description: "",
    pets: []
  },
  {
    characterType: CharacterType.thea,
    name: "Thea",
    lastName: "Libel",
    meanings: [],
    image: "assets/img/character/thea.jpg",
    skills: [
      {
        name: "Elektroschock",
        strength: "6",
        description: "Betäubt Gegner mit einem elektischen Schock.",
        category: [MagicType.air],
      },
      {
        name: "Einfaches Fliegen",
        strength: "0",
        description: "Kann abheben und in langsamer Geschwindigkeit fliegen.",
        category: [MagicType.air],
      },
      {
        name: "Auren spüren",
        strength: "0",
        description: "Sie kann Leute in ihrer Nähe erspüren.",
        category: [MagicType.enhancement, MagicType.luck],
      },
    ],
    traits: [
      {
        key: Extent.always,
        value: "intelligent",
        icon: "emoji_objects",
        positive: true,
      },
      {
        key: Extent.always,
        value: "nett",
        icon: "volunteer_activism",
        positive: true,
      },
      {
        key: Extent.always,
        value: "schüchtern",
        icon: "fence",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.ivy,
        interest: 5,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#110a08",
        description: "zwei schwarze Haarbommel ",
      },
      skinColor: {
        color: "#2c170e",
        description: "dunkele Haut",
      },
      eyeColor: {
        color: "#3b1f08",
        description: "dunkelbraune Augen",
      },
      accessory: "goldgerahmte Brille",
      body: "159cm sehr klein",
    },
    magic: MagicType.air,
    classes: ["Luftmagie", "Blitzmagie", "Telepathie", "Kemu"],
    mbti: "ISFJ",
    past: "Stumm geboren.",
    description: "",
    pets: [{
      name: "Renesmee",
      description: "Ein zutraulicher Kolibrifamiliar.",
      icon: "pets",
      image: "assets/img/creature/kolibri.jpg",
    }]
  },
  {
    characterType: CharacterType.ivy,
    name: "Ivy",
    lastName: "Dupont",
    meanings: [],
    image: "assets/img/character/ivy.jpg",
    skills: [
      {
        name: "Grüner Biss",
        strength: "6",
        description: "Lässt kleine hungrige Pflanzen spießen, die Feinde beißen.",
        category: [MagicType.plant],
      },
    ],
    traits: [
      {
        key: Extent.always,
        value: "ehrlich",
        icon: "thumbs_up_down",
        positive: true,
      },
      {
        key: Extent.always,
        value: "Pflanzenfan",
        icon: "nest_eco_leaf",
        positive: true,
      },
      {
        key: Extent.always,
        value: "direkt",
        icon: "campaign",
        positive: false,
      },
      {
        key: Extent.always,
        value: "hasst Tiere",
        icon: "cruelty_free",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.thea,
        interest: 10,
        notes: "",
      },
      {
        person: CharacterType.lior,
        interest: 2,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#50f8d1",
        description: "Türkisblaues Haar, Hochsteck-Dutt-Flechtfrisur",
      },
      eyeColor: {
        color: "#ffa42c",
        description: "bernsteinfarbene Augen",
      },
      accessory: "",
      body: "174cm groß",
    },
    magic: MagicType.plant,
    classes: ["Pflanzenmagie", "Erdmagie", "Luftmagie"],
    mbti: "ISTP",
    past: "Ivys Eltern haben sie liebevoll in einem kleinen Dorf im Magierreich großgezogenn. " +
      "Sie hat keinen Familiar, da sie im Insektenmonat geboren ist. Sie hat einen älteren Bruder, der ebenfalls Pflanzen mag.",
    description: "Ivy ist eine Pflanzenmagierin und hat als solche eine besondere Beziehung zu Pflanzen, insbesondere gefallen ihr Kakteen und fleischfressende Pflanzen. Für Tiere oder Insekten hat sie hingegen nicht viel übrig." +
      "Sie gibt sich gerne mal aufbrausend, aber ist eine loyale Freundin. Für jeden, den sie kennt, hat sie mindestens einen unfreiwilligen Spitznamen. Sie steht außerdem auf klassische Musik, aber hasst Lärm. ",
    pets: []
  },
  {
    characterType: CharacterType.elea,
    name: "Elea",
    lastName: "Krastov",
    age: "23",
    citation: "",
    image: "assets/img/character/elea.jpg",
    past: "Als Kind einer einflussreichen Erzmagierfamilie, genießt sie beste Voraussetzungen, es eines Tages weit zu bringen.",
    description: "Elea ist ebenso schön wie beliebt. Sie spricht eher wenig und leise. Über den neuesten Klatsch und Tratsch ist sie immer bestens informiert.",
    problem: "Ihre Beliebtheit hat ihren Preis. Sie ist umringt von falschen Freunden und aufgrund vergangener Erfahrungen verhält sie sich kühl und abweisend.",
    meanings: [{
      property: "Vorname",
      translation: "die Andere, die Schöne",
      language: "gr.",
    },
    ],
    skills: [
      {
        name: "Eisstachel",
        strength: "8",
        description: "Erschafft spitze, kleine Eispfeile, die sie auf Feinde schießen kann.",
        category: [MagicType.ice],
      },
      {
        name: "Frisieren",
        strength: "0",
        description: "Sie hat die Haare schön. So eine Mähne muss schließlich richtig liegen.",
        category: [MagicType.air, MagicType.water, MagicType.enhancement],
      }
    ],
    traits: [
      {
        key: Extent.always,
        value: "beliebt",
        icon: "self_improvement",
        positive: true,
      },
      {
        key: Extent.always,
        value: "harmlos",
        icon: "nest_eco_leaf",
        positive: true,
      },
      {
        key: Extent.always,
        value: "unbeholfen",
        icon: "campaign",
        positive: false,
      },
      {
        key: Extent.always,
        value: "berechnend",
        icon: "cruelty_free",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.albert,
        interest: 8,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#edd8b5",
        description: "Helles Haar im Pferdeschwanz",
      },
      eyeColor: {
        color: "#9f0cdc",
        description: "violette Augen",
      },
      accessory: "",
      body: "171cm groß",
    },
    magic: MagicType.ice,
    classes: ["Eismagie", "Magische Bande", "Translokation"],
    mbti: "ESFJ",
    pets: [{
      name: "Liebling",
      description: "Ein wunderschöner Schmetterlingsfamilar.",
      icon: "pets",
      image: "assets/img/creature/liebling.jpg",
    }]
  },
  {
    characterType: CharacterType.philou,
    name: "Philou",
    lastName: "Madan",
    age: "25",
    citation: "",
    image: "assets/img/character/philou.jpg",
    meanings: [
      {
        property: "Vorname",
        translation: "die Schwindlerin",
        language: "gr.",
      },
      {
        property: "Nachname",
        translation: "Liebesgöttin",
        language: "gr.",
      },
    ],
    skills: [],
    traits: [
      {
        key: Extent.always,
        value: "angepasst",
        icon: "self_improvement",
        positive: true,
      },
      {
        key: Extent.always,
        value: "unauffällig",
        icon: "nest_eco_leaf",
        positive: true,
      },
    ],
    looks: {
      hairColor: {
        color: "#2830be",
        description: "dunkelblauer Scheier auf dem Kopf",
      },
      eyeColor: {
        color: "#693f21",
        description: "nussbraune Augen",
      },
      accessory: "",
      body: "169cm groß",
    },
    magic: MagicType.illusion,
    classes: ["Illusionsmagie"],
    mbti: "",
    past: "Saboteurin.",
    description: "",
    pets: []
  },
  {
    characterType: CharacterType.peppi,
    name: "Peppi",
    lastName: "Ostenz",
    meanings: [],
    image: "assets/img/character/peppi.jpg",
    skills: [
      {
        name: "Überwindung",
        strength: "1",
        description: "Lindert negative Emotionen etwas.",
        category: [MagicType.empathy],
      },
    ],
    traits: [
      {
        key: Extent.often,
        value: "umsorgend",
        icon: "escalator_warning",
        positive: true,
      },
      {
        key: Extent.often,
        value: "temperamentvoll",
        icon: "local_fire_department",
        positive: true,
      },
      {
        key: Extent.sometimes,
        value: "verträgt keine Kritik",
        icon: "sms_failed",
        positive: false,
      },
      {
        key: Extent.always,
        value: "hasst Streiche",
        icon: "send",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.valin,
        interest: 10,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#4d300a",
        description: "Zwei lange braune Zöpfe mit Seitenpony",
      },
      eyeColor: {
        color: "#ffa42c",
        description: "bernsteinfarbene Augen",
      },
      accessory: "",
      body: "174cm groß",
    },
    magic: MagicType.empathy,
    classes: ["Empathie", "Verstärkungsmagie"],
    mbti: "ISTJ",
    past: "Bereits im zweiten Schuljahr.",
    description: "",
    pets: []
  },
  {
    characterType: CharacterType.valin,
    name: "Valin",
    lastName: "Thodford",
    meanings: [],
    image: "assets/img/character/valin.jpg",
    skills: [
      {
        name: "Skulptur erschaffen",
        strength: "1",
        description: "Schafft eine Eisskulptur nach seinem Geschmack.",
        category: [MagicType.water, MagicType.ice],
      },
    ],
    traits: [
      {
        key: Extent.always,
        value: "witzig",
        icon: "celebration",
        positive: true,
      },
      {
        key: Extent.often,
        value: "charismatisch",
        icon: "campaign",
        positive: true,
      },
      {
        key: Extent.always,
        value: "Blödsinn im Kopf",
        icon: "emoji_objects",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "faul",
        icon: "king_bed",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.peppi,
        interest: 10,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#f8cf8d",
        description: "Blonde, sehr kurze, aufgestellte Haare",
      },
      eyeColor: {
        color: "#338188",
        description: "türkisfarbene Augen",
      },
    },
    magic: MagicType.water,
    classes: ["Empathie", "Verstärkungsmagie"],
    mbti: "ESTP",
    past: "Bereits im zweiten Schuljahr. Er geht nicht auf Partys, er ist die Party. Und das war schon immer so.",
    description: "",
    pets: []
  },
  {
    characterType: CharacterType.valda,
    name: "Valda",
    specialName: "Kriegsheldin",
    lastName: "Metzeldes",
    citation: "Da drehte sich die Insel und dann hab ich eben irgendwas gemacht.",
    meanings: [],
    image: "assets/img/character/valda.jpg",
    skills: [
      {
        name: "Weißer Hase",
        strength: "1",
        description: "Dem Ziel des Zaubernden gelingt plötzlich alles viel wahrscheinlicher.",
        category: [MagicType.luck],
      },
      {
        name: "Schwarze Katze",
        strength: "5",
        description: "Jemand wird sein blaues Wunder erleben!",
        category: [MagicType.luck],
      },
    ],
    traits: [
      {
        key: Extent.often,
        value: "freundlich",
        icon: "mood",
        positive: true,
      },
      {
        key: Extent.often,
        value: "lustig",
        icon: "campaign",
        positive: true,
      },
      {
        key: Extent.always,
        value: "hilfsbereit",
        icon: "handshake",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "naiv",
        icon: "cruelty_free",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "sprüht vor Intelligenz",
        icon: "psychology_alt",
        positive: false,
      },
      {
        key: Extent.often,
        value: "tollpatsch",
        icon: "format_color_fill",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.adryan,
        interest: 10,
        notes: "",
      },
      {
        person: CharacterType.albert,
        interest: 10,
        notes: "",
      },
      {
        person: CharacterType.rabenwind,
        interest: 10,
        notes: "",
      },
      {
        person: CharacterType.bayu,
        interest: 3,
        notes: "",
      },
      {
        person: CharacterType.valin,
        interest: 2,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#d5c3b0",
        description: "Silberblonde Haare",
      },
      eyeColor: {
        color: "#74d7d7",
        description: "babyblaue Augen",
      },
    },
    magic: MagicType.luck,
    classes: ["Glücksmagie", "Telepathie"],
    mbti: "ESFP",
    past: "Wenn Valda nach ihrer Herkunft gefragt wird, nennt sie immer Orte, die niemand zu kennen scheint. Außerdem verstrickt sie sich bei Richtungsangaben ständig in Widersprüchen.",
    problem: "Die Männerwelt stellt für Valda eine große Motivation dar. Sie hat jede Woche einen neuen Schwarm. Aber sie kann auch teilen: Wenn Adryan schon nicht zu ihr gehören will, soll wenigstens Sora ihn haben.",
    description: "Heimliche Heldin. Sabotiert durch Tollpatschigkeit bzw. versteckte Glücksmagie Halonas Ranschmeißversuche. Unterstützt Ship Halona und Adryan nicht!",
  },
  {
    characterType: CharacterType.lior,
    name: "Lior",
    lastName: "Lesedi",
    citation: "",
    meanings: [],
    age: "24",
    image: "assets/img/character/lior.jpg",
    skills: [
      {
        name: "Lichtstrahl",
        strength: "1",
        description: "Blendet Gegner um den Zaubernden herum.",
        category: [MagicType.light],
      },
    ],
    traits: [
      {
        key: Extent.often,
        value: "freundlich",
        icon: "mood",
        positive: true,
      },
      {
        key: Extent.often,
        value: "sanft",
        icon: "emoji_nature",
        positive: true,
      },
      {
        key: Extent.always,
        value: "privat",
        icon: "brightness_4",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "misstrauisch",
        icon: "live_help",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.ivy,
        interest: 5,
        notes: "",
      },
      {
        person: CharacterType.sora,
        interest: 5,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#f3e6d6",
        description: "weißblonde Haare",
      },
      eyeColor: {
        color: "#462407",
        description: "dunkelbraune  Augen",
      },
      skinColor: {
        color: "#f6dad1",
        description: "sehr helle Haut",
      },
      body: "175 cm schlank",
      face: "feine Gesichtszüge",
    },
    magic: MagicType.light,
    classes: ["Lichtmagie", "Heilmagie"],
    mbti: "INFJ",
    past: "Lior stammt aus einer Nichtmagier-Familie, die eine eigene Gärtnerei besitzt und hat seine Magie erst vor ein paar Monaten entdeckt. ",
    problem: "Sehr kranke Mutter, die er mit seinen Fähigkeiten unbedingt retten möchte.",
    description: "Lior ist eine sanfte Seele, der immer freundlich zu jedem ist. Dabei bleibt er aber stets oberflächlich. " +
      "Es dauert lange bis er mit jemandem über Persönliches redet. Er liest gerne und mag Pflanzen. Er hasst Lärm und Streit. ",
    pets: []
  },
  {
    characterType: CharacterType.bayu,
    name: "Bayu",
    lastName: "Hidayat",
    citation: "Und jetzt lass mich runter, ich hab mit dem da noch ein Hühnchen zu rupfen.",
    image: "assets/img/character/bayu.jpg",
    meanings: [
      {
        property: "Vorname",
        translation: "Luft",
        language: "indonesisch",
      },
    ],
    age: "23",
    skills: [
      {
        name: "K.O.-Schlag",
        strength: "1",
        description: "Macht den nächsten Faustschlag unmenschlich stark.",
        category: [MagicType.enhancement],
      },
      {
        name: "Verstärken",
        strength: "1",
        description: "Macht eine ausgewählte lörperliche Fertigkeit schneller und / oder stärker.",
        category: [MagicType.enhancement],
      },
    ],
    traits: [
      {
        key: Extent.always,
        value: "naiv",
        icon: "cruelty_free",
        positive: true,
      },
      {
        key: Extent.often,
        value: "tapfer",
        icon: "front_hand",
        positive: true,
      },
      {
        key: Extent.often,
        value: "kampflustig",
        icon: "local_fire_department",
        positive: false,
      },
      {
        key: Extent.always,
        value: "nimmersatt",
        icon: "restaurant_menu",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "laut",
        icon: "campaign",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "faul",
        icon: "chair",
        positive: false,
      },
    ],
    loveInterests: [
      {
        person: CharacterType.valda,
        interest: 3,
        notes: "",
      },
    ],
    looks: {
      hairColor: {
        color: "#8c6943",
        description: "in alle Richtungen abstehende, wilde hellbraune Haare",
      },
      eyeColor: {
        color: "#40ad42",
        description: "heterochrome Augen (braun + grün)",
      },
      accessory: "mit Haarband",
      body: "169 cm",
      face: "Knubbelnase",
    },
    magic: MagicType.enhancement,
    classes: ["Verstärkungsmagie", "Kampfsport", "Kemu"],
    mbti: "ESTJ",
    past: "Familie hat ein Dojo.",
    problem: "Er ist viel zu simpel für Probleme.",
    description: "",
    pets: []
  },
  {
    characterType: CharacterType.daphne,
    name: "Daphne",
    lastName: "Herzblatt",
    citation: "",
    meanings: [],
    image: "assets/img/character/daphne.jpg",
    skills: [
      {
        name: "Lichtstrahl",
        strength: "1",
        description: "Blendet Gegner um den Zaubernden herum.",
        category: [MagicType.light],
      },
    ],
    traits: [
      {
        key: Extent.always,
        value: "brav",
        icon: "school",
        positive: true,
      },
      {
        key: Extent.often,
        value: "Klatsch & Tratsch",
        icon: "campaign",
        positive: true,
      },
      {
        key: Extent.always,
        value: "unsicher",
        icon: "record_voice_over",
        positive: false,
      },
    ],
    loveInterests: [],
    looks: {
      hairColor: {
        color: "#110f0f",
        description: "geflochtene Hochsteckfrisur, schwarze Haare",
      },
      eyeColor: {
        color: "#462407",
        description: "kleine Knopfaugen",
      },
      skinColor: {
        color: "#9d7050",
        description: "gebräunte Haut",
      },
      body: "167 cm sehr gepflegt, kurvige Figur",
      face: "pausbäckiges, rundes Gesicht",
    },
    magic: MagicType.light,
    classes: ["Lichtmagie", "Magische Bande", "Wassermagie", "Heilmagie"],
    mbti: "ESFP",
    past: "Kommt aus einer niederen Magierfamilie, hat sehr viele Geschwister.",
    problem: "Steht oft im Schatten anderer. Kümmert sich sehr darum, was andere von ihr halten.",
    description: "",
    pets: []
  },
  {
    characterType: CharacterType.fenris,
    name: "Kataley",
    specialName: "Kat",
    lastName: "Fenris",
    citation: "Ihr könnt anderen Menschen helfen, aber nur, wenn ihr bereit seid, viel zu lernen.",
    image: "assets/img/character/fenris.jpg",
    meanings: [
      {
        property: "Vorname",
        translation: "Sumpf",
        language: "altnordisch",
      }
    ],
    skills: [],
    traits: [
      {
        key: Extent.sometimes,
        value: "charismatisch",
        icon: "campaign",
        positive: true,
      },
      {
        key: Extent.often,
        value: "emotionslos",
        icon: "sentiment_neutral",
        positive: false,
      },
    ],
    looks: {
      hairColor: {
        color: "#e5d18f",
        description: "Blonde hüftlange gewellte Haare",
      },
      eyeColor: {
        color: "#a8a8a8",
        description: "graue Augen",
      },
      accessory: "Hat immer Taschenuhr dabei auf die sie regelmäßig schaut",
      face: "kühles Lächeln",
      body: "weiße Robe",
    },
    magic: MagicType.light,
    classes: ["Lichtmagie", "Zeitmagie", "Heilmagie"],
    description: "Schulleitung",
    past: "Ihre Emotionen wurden durch einen mächtigen Fluch gestohlen, um die Akademie zu schwächen."
  },
  {
    characterType: CharacterType.ervin,
    name: "Keith",
    lastName: "Ervin",
    age: "45",
    meanings: [],
    skills: [],
    image: "assets/img/character/ervin.jpg",
    traits: [
      {
        key: Extent.sometimes,
        value: "gefasst",
        icon: "handshake",
        positive: true,
      },
      {
        key: Extent.often,
        value: "nervös",
        icon: "mood",
        positive: true,
      },
      {
        key: Extent.often,
        value: "vorsichtig",
        icon: "campaign",
        positive: false,
      },
    ],
    looks: {
      hairColor: {
        color: "#212121",
        description: "Schwarzes Haar mit grauen Strähnen",
      },
      eyeColor: {
        color: "#604435",
        description: "braune Augen",
      },
      accessory: "Brille",
      body: "zittrig",
    },
    magic: MagicType.shadow,
    classes: ["Schattenmagie"],
    description: "",
  },
  {
    characterType: CharacterType.kroetensang,
    name: "Hilda",
    lastName: "Krötensang",
    meanings: [],
    skills: [],
    image: "assets/img/character/kroetensang.jpg",
    traits: [
      {
        key: Extent.sometimes,
        value: "euphorisch",
        icon: "handshake",
        positive: true,
      },
      {
        key: Extent.often,
        value: "ulkig",
        icon: "psychology_alt",
        positive: false,
      },
    ],
    looks: {
      hairColor: {
        color: "#4b2d11",
        description: "braune, wilde, kinnlange Locken mit grauen Strähnen durchzogen",
      },
      eyeColor: {
        color: "#281a10",
        description: "dunkelbraune Knopfaugen",
      },
      accessory: "Brille",
      body: "Pummelig",
    },
    magic: MagicType.water,
    classes: ["Wassermagie", "Tränke"],
    description: "",
  },
  {
    characterType: CharacterType.lavender,
    name: "Salamanca",
    lastName: "Lavender",
    meanings: [],
    skills: [],
    image: "assets/img/character/lavender.jpg",
    traits: [
      {
        key: Extent.always,
        value: "kompetent",
        icon: "school",
        positive: true,
      },
    ],
    looks: {
      hairColor: {
        color: "#0a0907",
        description: "Pixiecut, schwarz",
      },
      eyeColor: {
        color: "#8eb2aa",
        description: "goldene Augen",
      },
    },
    magic: MagicType.earth,
    classes: ["Erdmagie", "Zaubersprüche"],
    description: "Schulleitung",
  },
  {
    characterType: CharacterType.sinkwurz,
    name: "Methusalem",
    lastName: "Sinkwurz",
    meanings: [],
    skills: [],
    age: "alt",
    image: "assets/img/character/sinkwurz.jpg",
    traits: [
      {
        key: Extent.sometimes,
        value: "wohlmeinend",
        icon: "child_care",
        positive: true,
      },
      {
        key: Extent.sometimes,
        value: "verpeilt",
        icon: "psychology_alt",
        positive: true,
      },
      {
        key: Extent.rarely,
        value: "streng",
        icon: "arrow_right_alt",
        positive: false,
      },
    ],
    looks: {
      hairColor: {
        color: "#ffffff",
        description: "wenige weiße Haare mit weißem Rauschebart",
      },
      eyeColor: {
        color: "#8eb2aa",
        description: "graue Augen",
      },
      body: "Hat keinerlei Geschmack, sei es Essen oder Mode. Knochige Hände.",
    },
    magic: MagicType.air,
    classes: ["Luftmagie", "Magische Bande", "Portale"],
    development: "Schulleitung",
    description: "Beginnt seine Sätze häufig mit 'Nun denn'.",
  },
  {
    characterType: CharacterType.rabenwind,
    name: "Burkhard",
    lastName: "Rabenwind",
    meanings: [],
    skills: [],
    age: "34",
    image: "assets/img/character/rabenwind.jpg",
    traits: [
      {
        key: Extent.sometimes,
        value: "locker",
        icon: "celebration",
        positive: true,
      },
      {
        key: Extent.often,
        value: "motivierend",
        icon: "mood",
        positive: true,
      },
      {
        key: Extent.often,
        value: "kann gut erklären",
        icon: "campaign",
        positive: true,
      },
    ],
    looks: {
      hairColor: {
        color: "#8c683e",
        description: "hellbrauner Pferdeschwanz",
      },
      eyeColor: {
        color: "#3f9a6d",
        description: "smaragdgrüne Augen",
      },
      body: "athletisch",
    },
    magic: MagicType.enhancement,
    classes: ["Verstärkungsmagie", "Telephatie"],
    description: "Motivierende Lehrerfigur",
  },
  {
    characterType: CharacterType.schnarchmuetz,
    name: "Elias",
    lastName: "Weidenkätzchen",
    meanings: [],
    skills: [],
    image: "assets/img/character/schnarchmuetz.jpg",
    traits: [
      {
        key: Extent.sometimes,
        value: "müde",
        icon: "night_shelter",
        positive: true,
      },
    ],
    looks: {
      hairColor: {
        color: "rgba(255,255,255,0)",
        description: "dicker Schnauzbart, Glatze",
      },
      eyeColor: {
        color: "#222826",
        description: "winzige, dunkle Augen",
      },
      body: "Klein, dickbäuchig",
    },
    magic: MagicType.summoning,
    classes: ["Beschwörung", "Magiegeschichte"],
    description: "Nebencharakter",
  },
  {
    characterType: CharacterType.chun,
    name: "Su Yeon",
    lastName: "Chun",
    age: "50",
    image: "assets/img/character/chun.jpg",
    meanings: [
      {
        property: "Nachname",
        translation: "Kälte",
        language: "kor.",
      },
    ],
    skills: [],
    traits: [
      {
        key: Extent.always,
        value: "modisch",
        icon: "hive",
        positive: true,
      },
    ],
    looks: {
      hairColor: {
        color: "rgb(120,171,178)",
        description: "grau-blaue Rachel Frisur",
      },
      eyeColor: {
        color: "#6ebd90",
        description: "blau-grüne Augen",
      },
      skinColor: {
        color: "#efe5d0",
        description: "blass",
      },
      body: "klein",
    },
    magic: MagicType.ice,
    classes: ["Eismagie"],
    description: "Nebencharakter",
  },
  {
    characterType: CharacterType.goldbaum,
    name: "Aurelia",
    lastName: "Goldbaum",
    age: "55",
    meanings: [],
    image: "assets/img/character/goldbaum.jpg",
    skills: [],
    traits: [
      {
        key: Extent.always,
        value: "lethargisch",
        icon: "night_shelter",
        positive: false,
      },
      {
        key: Extent.sometimes,
        value: "apathisch",
        icon: "psychology_alt",
        positive: false,
      },
    ],
    looks: {
      hairColor: {
        color: "rgb(246,146,116)",
        description: "schlampige Hochsteckfrisur",
      },
      eyeColor: {
        color: "#c4e786",
        description: "blau-grüne Augen",
      },
      body: "sehr groß und sehr dünn",
      accessory: "fleckige Kleidung",
    },
    magic: MagicType.luck,
    classes: ["Glücksmagie"],
    description: "Nebencharakter",
  },
  {
    characterType: CharacterType.astarot,
    name: "Astarot",
    lastName: "Finsterfaust",
    age: "372",
    image: "assets/img/character/astarot.jpg",
    meanings: [],
    skills: [],
    traits: [],
    looks: {
      hairColor: {
        color: "rgb(0,0,0)",
        description: "schwarzes Haar",
      },
      eyeColor: {
        color: "#000000",
        description: "schwarze Augen",
      },
    },
    magic: MagicType.shadow,
    description: "Er ist der Autor des Buchs 'Über die Grenzen der Magie hinaus'. Seine Tochter ist Adryans Mutter.",
    past: "Hat mächtigen Kristall geklaut, der einen gigantischen Magievorrat enthält und diesen angeblich zerstört. " +
      "In Wahrheit hat er ihn versteckt, dass Leute keinen Unsinn damit anstellen. Als er den Kristall gestohlen hat " +
      "hat er diesen durch ein Portal zu Meisterin Fenris in die Akademie geschickt. Er wurde kurz darauf von " +
      "Kristallwächtern geschnappt. Er wird verhaftet, nimmt die Schuld auf sich und behauptet, dass er den Kristall " +
      "zerstört hat. Er wird zum Tode verurteilt. Kriegsverbrecher/ Verräter.",
  },
  {
    characterType: CharacterType.arashi,
    name: "Arashi",
    lastName: "Silberfeder",
    meanings: [],
    skills: [],
    image: "assets/img/character/arashi.jpg",
    traits: [
      {
        key: Extent.always,
        value: "tierlieb",
        icon: "pets",
        positive: true,
      },
    ],
    looks: {
      hairColor: {
        color: "#c95735",
        description: "kupferfarbenes Haar",
      },
      eyeColor: {
        color: "rgb(101,194,58)",
        description: "strahlend grüne Augen",
      },
    },
    magic: MagicType.air,
    description: "Soras Vater. Ihm wird nachgesagt, eine besondere Bindung zu Tieren zu haben.",
  },
  {
    characterType: CharacterType.hikari,
    name: "Hikari",
    lastName: "Silberfeder",
    meanings: [],
    skills: [],
    traits: [],
    image: "assets/img/character/hikari.jpg",
    looks: {
      hairColor: {
        color: "#7e3209",
        description: "kastanienbraunes Haar",
      },
      eyeColor: {
        color: "rgb(48,112,141)",
        description: "blaue Augen",
      },
    },
    magic: MagicType.light,
    description: "Soras Mutter.",
  },
  {
    characterType: CharacterType.arlen,
    name: "Arlen",
    lastName: "Adair",
    image: "assets/img/character/arlen.jpg",
    meanings: [
      {
        property: "Vorname",
        translation: "Eid",
        language: "gälisch",
      },
      {
        property: "Nachname",
        translation: "Bewohner des Eichenwalds",
        language: "schottisch-gälisch",
      },
    ],
    skills: [
      {
        name: "Energieblitz",
        strength: "10",
        description: "Spezialangriff",
        category: [MagicType.air, MagicType.shadow, MagicType.earth],
      },
    ],
    traits: [
      {
        key: Extent.always,
        value: "selbstzufrieden",
        icon: "thumb_up",
        positive: true,
      },
      {
        key: Extent.always,
        value: "skrupelos",
        icon: "delete",
        positive: false,
      },
      {
        key: Extent.always,
        value: "machthungrig",
        icon: "work",
        positive: false,
      },
    ],
    looks: {
      hairColor: {
        color: "#4e724e",
        description: "moosgrüne Haare",
      },
      eyeColor: {
        color: "rgb(10,45,70)",
        description: "dunkelblaue Augen",
      },
      body: "groß, schlank",
    },
    magic: MagicType.earth,
    description: "Gehört den Magierjägern an.",
  },
  {
    characterType: CharacterType.sturmlaeufer,
    name: "Rango",
    lastName: "Sturmläufer",
    age: "34",
    image: "assets/img/character/sturmlaeufer.jpg",
    meanings: [],
    skills: [],
    traits: [
      {
        key: Extent.always,
        value: "still",
        icon: "sms",
        positive: true,
      },
    ],
    looks: {
      hairColor: {
        color: "#000000",
        description: "schwarzes Haar",
      },
      eyeColor: {
        color: "#c9c9c9",
        description: "hellgraue Augen",
      },
      body: "",
    },
    magic: MagicType.fire,
    classes: ["Feuermagie, Verstärkungsmagie"],
    description: "Nebencharakter, Lehrer.",
  },
  {
    characterType: CharacterType.fin,
    name: "Fin",
    lastName: "Ehrenlied",
    age: "21",
    image: "assets/img/character/fin.jpg",
    meanings: [],
    skills: [],
    traits: [
      {
        key: Extent.always,
        value: "unsicher",
        icon: "sms",
        positive: false,
      },
    ],
    looks: {
      hairColor: {
        color: "#9b1414",
        description: "flammend rotes Haar",
      },
      eyeColor: {
        color: "#705b37",
        description: "braune Augen",
      },
      body: "",
    },
    magic: MagicType.luck,
    description: "Nebencharakter.",
    past: "Kindheitsfreund von Sora.",
    pets: [{
      name: "Poseidon",
      description: "Ein Walfischfamiliar.",
      image: "assets/img/creature/whale.jpg",
    }]
  }, {
    characterType: CharacterType.castiel,
    name: "Castiel",
    lastName: "Wundersucher",
    age: "25",
    image: "assets/img/character/castiel.jpg",
    meanings: [],
    skills: [],
    traits: [],
    loveInterests: [],
    looks: {
      hairColor: {
        color: "#0d0d0c",
        description: "schwarzes Haar",
      },
      eyeColor: {
        color: "#29291b",
        description: "dunkle Augen",
      },
      body: "",
      accessory: "Er trägt eine silberne Taschenuhr.",
    },
    magic: MagicType.time,
    classes: ["Zeitmagie", "Heilmagie", "Metamorphose"],
    description: "Nebencharakter.",
    past: "Ein begabter Zeitmagier.",
  }, {
    characterType: CharacterType.kimmi,
    name: "Kimmi",
    lastName: "",
    age: "26",
    image: "assets/img/character/kimmi.jpg",
    meanings: [],
    skills: [],
    traits: [],
    looks: {
      hairColor: {
        color: "#523319",
        description: "braunes Haar",
      },
      eyeColor: {
        color: "#48542f",
        description: "olivgrüne Augen",
      },
    },
    description: "Soras beste Kindheitsfreundin.",
  }, {
    characterType: CharacterType.kai,
    name: "Kai",
    lastName: "",
    age: "46",
    image: "assets/img/character/kai.jpg",
    meanings: [],
    skills: [],
    traits: [],
    looks: {
      hairColor: {
        color: "#666666",
        description: "sehr kurzes, graues Haar",
      },
      eyeColor: {
        color: "#201a14",
        description: "dunkelbraune Augen",
      },
    },
    description: "",
  },
];
