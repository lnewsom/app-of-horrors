import { PlantListing } from '../../app/core/models/plant-listing';

export const PLANT_LISTINGS: PlantListing[] = [
        {
            plantId: 1,
            plantName: 'White Baneberry',
            speciesName: 'Actaea pachypoda',
            description: `Also known as Doll\'s Eyes. The stems, berries, and other parts of the white baneberry are extremely poisonous to humans.
             The fruits contain cardiogenic toxins, and consuming them can cause hallucinations, dizziness, diarrhea, headaches, severe stomach cramps, 
             salivation, and burning of throat and mouth. Ingesting the berries can also cause cardiac arrest and death.`,
            imageUrl: 'assets/plantImages/white_baneberry.jpg',
            category: 'poisonous',
            price: 26.99
        },
        {
            plantId: 2,
            plantName: 'Water Hemlock',
            speciesName: 'Cicuta maculata',
            description: `Water Hemlock is the most violently poisonous plant in North America. Victims of this plant often have confused it with wild carrots.
             It is infused with deadly cicutoxin, especially in its roots, and will rapidly generate potentially 
            fatal symptoms in anyone unlucky enough to eat it. Painful convulsions, abdominal cramps, nausea, and death are common, and 
            those who survive are often afflicted with amnesia or lasting tremors.`,
            imageUrl: 'assets/plantImages/water_hemlock.jpg',
            category: 'poisonous',
            price: 12.99
        },
        {
            plantId: 3,
            plantName: 'Deadly Nightshade',
            speciesName: 'Atropa belladonna',
            description: `Professor Henry G. Walters speculated that plants were capable of love and resentment. Deadly Nightshade, he believed, was filled with hatred.
            While the entire plant is poisonous, it is the luscious black berries that often lure in victims. Nightshade contains atropine and scopolamine which causes paralysis in 
            the involuntary muscles of the body, including the heart. Even physical contact with the leaves may cause skin irritation.`,
            imageUrl: 'assets/plantImages/deadly_nightshade.jpg',
            category: 'poisonous',
            price: 12.99
        },
        {
            plantId: 5,
            plantName: 'Castor Bean',
            speciesName: 'Ricinus communis',
            description: `While castor oil has been stripped of its poison, the seeds of the castor plant are deadly. In 1978, the poisonous extract of the castor 
            bean was determined to be responsible for the death of Georgi Markov in the infamous still unsolved "Umbrella Murder". 
            Ricin works by inhibiting the synthesis of proteins within cells and can cause severe vomiting, diarrhea, seizures, and even death.`,
            imageUrl: 'assets/plantImages/castor_bean.jpg',
            category: 'poisonous',
            price: 12.99
        },
        {
            plantId: 6,
            plantName: 'Rosary Pea',
            speciesName: 'Abrus precatorius',
            description: `Also called jequirity beans, these piously-named seeds contain abrin which is similar to ricin, an extremely deadly ribosome-inhibiting protein. 
            Rosary peas are native to tropical areas and the stunning but deadly red seeds are often used in jewelry making, particularly rosaries. While the seeds are not poisonous if 
            intact, seeds that are scratched, broken, or chewed can be lethal. Unfortunate jewelry makers could suffer fatal consequences from just a simple finger prick while stringing the seeds.`,
            imageUrl: 'assets/plantImages/rosary_pea.jpg',
            category: 'poisonous',
            price: 12.99
        },
        {
            plantId: 8,
            plantName: 'Venus Flytrap',
            speciesName: 'Dionea muscipula',
            description: `This deadly beauty is native to the subtropical wetlands of North and South Carolina. The Venus Flytrap is triggered by a sophistocated network of sensitive hairs on the 
            trapping leaves. The plant required two or more instances of contact within 20 seconds before the trap will close and an addition five triggers once the insect is trapped to begin the digestive
            process. While abundantly available in cultivation, in the wild, the Venus Flytrap is currently under review to be listed as an Endangered Species due to its decline of natural habitat.`,
            imageUrl: 'assets/plantImages/venus_flytrap.jpg',
            category: 'carniverous',
            price: 12.99
        },
        {
            plantId: 9,
            plantName: 'Cobra Lily',
            speciesName: 'Darlingtonia californica',
            description: `Cobra Lilies are native to the northern mountains of California and the Oregon coast. It was named for its cobra shaped "pitcher" and two fang-like projections. 
            This beauty traps and digests unsuspecting insects with a digestive enzyme that it secretes. Nutrients are released from the rotting insect corpses, dissolved into fluid 
            and absorbed by the plant.`,
            imageUrl: 'assets/plantImages/cobra_lily.jpg',
            category: 'carniverous',
            price: 12.99
        },
        {
            plantId: 10,
            plantName: 'Cape Sundew',
            speciesName: 'Drosera capensis',
            description: `Cape Sundews are native to the Cape in South Africa. The strap-like leaves are covered in brightly coloured tentacles which secrete a sticky mucilage that traps insects. 
            When insects are first trapped, the leaves roll lengthwise toward the center to put more tentacles in contact with the prey. it can take up to six hours to fully digest an insect.
            Cape Sundews are made even more deadly because their digestive secretions also function as a chemical attractant.`,
            imageUrl: 'assets/plantImages/cape_sundew.jpg',
            category: 'carniverous',
            price: 12.99
        }
    ];