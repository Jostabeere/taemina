import { CharacterType } from "../models/character/CharacterType";
import { QuizQuestion } from "../models/quiz/QuizQuestion";


export const quizQuestions: QuizQuestion[] = [
    {
        index: 0,
        questionText: "Was ist deine größte Stärke?",
        options: [

            {
                optionId: 0,
                optionText: "Willenskraft",
                characters: [
                    CharacterType.halona, CharacterType.sora
                ],
            },
            {
                optionId: 1,
                optionText: "Wissen",
                characters: [
                    CharacterType.adryan
                ],
            },
            {
                optionId: 2,
                optionText: "Besonnenheit",
                characters: [
                    CharacterType.albert
                ],
            },
            {
                optionId: 3,
                optionText: "Empathie",
                characters: [
                    CharacterType.lior
                ],
            },
            {
                optionId: 4,
                optionText: "Durchsetzungsfähigkeit",
                characters: [
                    CharacterType.ivy
                ],
            },
            {
                optionId: 5,
                optionText: "Ideenreichtum",
                characters: [
                    CharacterType.bayu, CharacterType.valda
                ],
            },
        ]
    },
    {
        index: 1,
        questionText: "Was ist deine größte Schwäche?",
        options: [
            {
                optionId: 0,
                optionText: "Egoismus",
                characters: [
                    CharacterType.ivy
                ],
            },
            {
                optionId: 1,
                optionText: "Engstirnigkeit",
                characters: [
                    CharacterType.albert, CharacterType.adryan
                ],
            },
            {
                optionId: 2,
                optionText: "Tollpatschigkeit",
                characters: [
                    CharacterType.valda
                ],
            },
            {
                optionId: 3,
                optionText: "Selbstmitleid",
                characters: [
                    CharacterType.sora, CharacterType.halona
                ],
            },
            {
                optionId: 4,
                optionText: "Faulheit",
                characters: [
                    CharacterType.valin
                ],
            },
            {
                optionId: 5,
                optionText: "Ungeduld",
                characters: [
                    CharacterType.bayu
                ],
            },
            {
                optionId: 6,
                optionText: "Gleichgültigkeit",
                characters: [
                    CharacterType.lior
                ],
            },
        ]
    },
    {
        index: 2,
        questionText: "Mit wie vielen Personen triffst du dich am liebsten?",
        options: [
            {
                optionId: 0,
                optionText: "Lieber eine kleine Runde mit engen Freunden / Familie.",
                characters: [
                    CharacterType.adryan, CharacterType.lior
                ],
            },
            {
                optionId: 1,
                optionText: "Gerne in einer größeren Runde.",
                characters: [
                    CharacterType.valda, CharacterType.ivy, CharacterType.sora, CharacterType.halona
                ],
            },
            {
                optionId: 2,
                optionText: "Alle sind willkommen. Je mehr, desto lustiger!",
                characters: [
                    CharacterType.valin, CharacterType.bayu, CharacterType.albert
                ],
            },
        ]
    },
    {
        index: 3,
        questionText: "Was möchtest du in deinem Leben erreichen?",
        options: [
            {
                optionId: 0,
                optionText: "Alles wissen",
                characters: [
                    CharacterType.sora
                ],
            },
            {
                optionId: 1,
                optionText: "Berühmt werden",
                characters: [
                    CharacterType.valin, CharacterType.bayu
                ],
            },
            {
                optionId: 2,
                optionText: "Glücklich werden",
                characters: [
                    CharacterType.adryan
                ],
            },
            {
                optionId: 3,
                optionText: "Geliebt werden",
                characters: [
                    CharacterType.halona, CharacterType.ivy
                ],
            },
            {
                optionId: 4,
                optionText: "Anderen helfen",
                characters: [
                    CharacterType.lior
                ],
            },
            {
                optionId: 5,
                optionText: "Mein Volk in eine bessere Zukunft führen",
                characters: [
                    CharacterType.albert, CharacterType.valda
                ],
            },
        ]
    },
    {
        index: 4,
        questionText: "Was würdest du am liebsten essen?",
        options: [
            {
                optionId: 0,
                optionText: "Sternglanzgemüse",
                characters: [
                    CharacterType.sora, CharacterType.ivy
                ],
            },
            {
                optionId: 1,
                optionText: "Traumküchlein",
                characters: [
                    CharacterType.albert, CharacterType.adryan
                ],
            },
            {
                optionId: 2,
                optionText: "Beerenbrot",
                characters: [
                    CharacterType.valda
                ],
            },
            {
                optionId: 3,
                optionText: "Sahne-Krötentorte",
                characters: [
                    CharacterType.halona, CharacterType.lior
                ],
            },
            {
                optionId: 4,
                optionText: "Eztok",
                characters: [
                    CharacterType.valin
                ],
            },
            {
                optionId: 5,
                optionText: "Glibberpudding",
                characters: [
                    CharacterType.bayu
                ],
            },
        ]
    },
    {
        index: 5,
        questionText: "Würdest du dich als eitel bezeichnen?",
        options: [
            {
                optionId: 0,
                optionText: "Nein.",
                characters: [
                    CharacterType.adryan, CharacterType.bayu
                ],
            },
            {
                optionId: 1,
                optionText: "Wer hat das behauptet?!",
                characters: [
                    CharacterType.halona, CharacterType.ivy
                ],

            },
            {
                optionId: 2,
                optionText: "Vielleicht ein bisschen...",
                characters: [
                    CharacterType.albert, CharacterType.sora, CharacterType.lior
                ],
            },
            {
                optionId: 3,
                optionText: "Ja, aber schau mich doch mal an!",
                characters: [
                    CharacterType.valda, CharacterType.valin
                ],
            },
        ]
    },
    {
        index: 6,
        questionText: "Wo würdest du am liebsten ein Date mit deinem Schwarm verbringen?",
        options: [
            {
                optionId: 0,
                optionText: "Zuhause vor einem kuscheligen Kaminfeuer",
                characters: [
                    CharacterType.halona
                ],
            },
            {
                optionId: 1,
                optionText: "Keine Ahnung, ich frage lieber meinen Schwarm",
                characters: [
                    CharacterType.lior, CharacterType.valda
                ],

            },
            {
                optionId: 2,
                optionText: "Im Mondschein an einem See",
                characters: [
                    CharacterType.adryan
                ],
            },
            {
                optionId: 3,
                optionText: "Auf einer tropischen Insel",
                characters: [
                    CharacterType.ivy
                ],
            },
            {
                optionId: 4,
                optionText: "In einem bekannten Sternerestaurant",
                characters: [
                    CharacterType.albert
                ],
            },
            {
                optionId: 5,
                optionText: "Auf einem Konzert",
                characters: [
                    CharacterType.valin
                ],
            },
            {
                optionId: 6,
                optionText: "Bei meiner Lieblingstante",
                characters: [
                    CharacterType.bayu
                ],
            },
            {
                optionId: 7,
                optionText: "Da fallen mir spontan 100 verschiedene Möglichkeiten ein... und ich will alle ausprobieren!",
                characters: [
                    CharacterType.sora
                ],
            },
        ]
    },
    {
        index: 7,
        questionText: "Was wäre deine Berufung?",
        options: [
            {
                optionId: 0,
                optionText: "Eventplaner",
                characters: [
                    CharacterType.albert
                ],
            },
            {
                optionId: 1,
                optionText: "Kampfsportler",
                characters: [
                    CharacterType.bayu
                ],
            },
            {
                optionId: 2,
                optionText: "Arzt",
                characters: [
                    CharacterType.valda, CharacterType.sora
                ],
            },
            {
                optionId: 3,
                optionText: "Psychologe",
                characters: [
                    CharacterType.lior
                ],
            },
            {
                optionId: 4,
                optionText: "Escort",
                characters: [
                    CharacterType.valin
                ],
            },
            {
                optionId: 5,
                optionText: "Florist",
                characters: [
                    CharacterType.ivy
                ],
            },
            {
                optionId: 6,
                optionText: "Bibliothekar",
                characters: [
                    CharacterType.adryan
                ],
            },
            {
                optionId: 7,
                optionText: "Anwalt",
                characters: [
                    CharacterType.halona
                ],
            },
        ]
    },
    {
        index: 8,
        questionText: "Wie reagierst du auf Gefahr?",
        options: [
            {
                optionId: 0,
                optionText: "Ich renne panisch im Kreis.",
                characters: [
                    CharacterType.valda
                ],
            },
            {
                optionId: 1,
                optionText: "Ich stürze mich Kopf voraus hinein.",
                characters: [
                    CharacterType.bayu, CharacterType.valin
                ],

            },
            {
                optionId: 2,
                optionText: "Ich versuche, eine kluge Taktik zu finden.",
                characters: [
                    CharacterType.adryan, CharacterType.albert, CharacterType.ivy, CharacterType.halona
                ],
            },
            {
                optionId: 3,
                optionText: "Ich kümmere mich zuerst um andere.",
                characters: [
                    CharacterType.lior, CharacterType.sora
                ],
            },
        ]
    },
    {
        index: 9,
        questionText: "Was denkst du über Familiare (magische Begleiter)?",
        options: [
            {
                optionId: 0,
                optionText: "Naja.",
                characters: [
                    CharacterType.ivy
                ],
            },
            {
                optionId: 1,
                optionText: "Sie sind Mittel zum Zweck.",
                characters: [
                    CharacterType.adryan, CharacterType.halona, CharacterType.lior
                ],

            },
            {
                optionId: 2,
                optionText: "Sie sind ganz lustig.",
                characters: [
                    CharacterType.valda, CharacterType.bayu, CharacterType.valin
                ],
            },
            {
                optionId: 3,
                optionText: "Ich liebe Familiare!",
                characters: [
                    CharacterType.sora, CharacterType.albert
                ],
            },
        ]
    },
    {
        index: 10,
        questionText: "Wie würden deine Freunde dich in einem Wort beschreiben?",
        options: [
            {
                optionId: 1,
                optionText: "Schlau",
                characters: [
                    CharacterType.adryan
                ],
            },
            {
                optionId: 2,
                optionText: "Quirlig",
                characters: [
                    CharacterType.valda
                ],

            },
            {
                optionId: 3,
                optionText: "Temperamentvoll",
                characters: [
                    CharacterType.halona
                ],
            },
            {
                optionId: 4,
                optionText: "Ehrlich",
                characters: [
                    CharacterType.ivy
                ],
            },
            {
                optionId: 5,
                optionText: "Begeistert",
                characters: [
                    CharacterType.sora
                ],
            },
            {
                optionId: 6,
                optionText: "Lustig",
                characters: [
                    CharacterType.valin, CharacterType.bayu
                ],
            },
            {
                optionId: 7,
                optionText: "Hilfsbereit",
                characters: [
                    CharacterType.lior
                ],
            },
            {
                optionId: 8,
                optionText: "Perfekt",
                characters: [
                    CharacterType.albert
                ],
            },
        ]
    },
]