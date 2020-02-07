import { PlantListing } from 'src/app/core/models/plant-listing';

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
            description: `Water Hemlock is the most violently poisonous plant in North America. It is infused with deadly cicutoxin, especially in its roots, and will rapidly generate potentially
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
            description: `Nightshade contains atropine and scopolamine in its stems, leaves, berries, and roots, and causes paralysis in
            the involuntary muscles of the body, including the heart. Even physical contact with the leaves may cause skin irritation.`,
            imageUrl: 'assets/plantImages/deadly_nightshade.jpg',
            category: 'poisonous',
            price: 12.99
        },
        {
            plantId: 5,
            plantName: 'Castor Bean',
            speciesName: 'Ricinus communis',
            description: `It only takes one or two seeds to kill a child and up to eight to kill an adult. Ricin works by inhibiting
            the synthesis of proteins within cells and can cause severe vomiting, diarrhea, seizures, and even death.`,
            imageUrl: 'assets/plantImages/castor_bean.jpg',
            category: 'poisonous',
            price: 12.99
        },
        {
            plantId: 6,
            plantName: 'Rosary Pea',
            speciesName: 'Abrus precatorius',
            description: `Also called jequirity beans, these piously-named seeds contain abrin, an extremely deadly ribosome-inhibiting protein
            . Rosary peas are native to tropical areas and are often used in jewelry and prayer rosaries. While the seeds are not poisonous if
            intact, seeds that are scratched, broken, or chewed can be lethal.`,
            imageUrl: 'assets/plantImages/rosary_pea.jpg',
            category: 'poisonous',
            price: 12.99
        },
        {
            plantId: 8,
            plantName: 'Venus Flytrap',
            speciesName: 'Dionea muscipula',
            description: '',
            imageUrl: 'assets/plantImages/venus_flytrap.jpg',
            category: 'carniverous',
            price: 12.99
        },
        {
            plantId: 9,
            plantName: 'Cobra Lily',
            speciesName: 'Darlingtonia californica',
            description: 'This beauty uses its unique cobra shaped "pitcher" to trap and digest unsuspecting insects. The Cobra Lily even secretes a digestigve enzyme to finish the job.',
            imageUrl: 'assets/plantImages/cobra_lily.jpg',
            category: 'carniverous',
            price: 12.99
        },
        {
            plantId: 10,
            plantName: 'Cape Sundew',
            speciesName: 'Drosera capensis',
            description: 'The strap-like leaves are covered in brightly coloured tentacles which secrete a sticky mucilage that traps arthropods. ',
            imageUrl: 'assets/plantImages/cape_sundew.jpg',
            category: 'carniverous',
            price: 12.99
        }
    ];
