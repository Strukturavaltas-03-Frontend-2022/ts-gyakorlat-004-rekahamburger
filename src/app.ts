// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import {TransformerHero} from "./transformer"

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero [] = [
    new HumanHero (0, "Wonder Woman" ,"female", 25, 50),
    new HumanHero (1, "Ironman", "male", 50, 500),
    new HumanHero (2, "bat man", "male", 50, 600 ),
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero (3, "Optimus",  2, 4, "autobots"),
    new TransformerHero (4, "Bloombabas", 2, 4, "autobots"),
    new TransformerHero (5, "Magathron", 2, 4, "autobots"),
];



