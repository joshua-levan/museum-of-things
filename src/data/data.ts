import art1 from './things/art_1.webp'
import art2 from './things/art_2.webp'
import art3 from './things/art_3.webp'
import art4 from './things/art_4.webp'
import art5 from './things/art_5.webp'
import art6 from './things/art_6.webp'
import art7 from './things/art_7.webp'
import art8 from './things/art_8.webp'
import art9 from './things/art_9.webp'
import bugs1 from './things/bugs_1.webp'
import bugs2 from './things/bugs_2.webp'
import bugs3 from './things/bugs_3.webp'
import bugs4 from './things/bugs_4.webp'
import culture1 from './things/culture_1.webp'
import culture2 from './things/culture_2.webp'
import culture3 from './things/culture_3.webp'
import culture4 from './things/culture_4.webp'
import culture5 from './things/culture_5.webp'
import culture6 from './things/culture_6.webp'
import culture7 from './things/culture_7.webp'
import culture8 from './things/culture_8.webp'
import culture9 from './things/culture_9.webp'
import everyday1 from './things/everyday_1.webp'
import everyday2 from './things/everyday_2.webp'
import everyday3 from './things/everyday_3.webp'
import everyday4 from './things/everyday_4.webp'
import everyday5 from './things/everyday_5.webp'
import everyday6 from './things/everyday_6.webp'
import everyday7 from './things/everyday_7.webp'
import everyday8 from './things/everyday_8.webp'
import everyday9 from './things/everyday_9.webp'
import industrial1 from './things/industrial_1.webp'
import industrial2 from './things/industrial_2.webp'
import industrial3 from './things/industrial_3.webp'
import industrial4 from './things/industrial_4.webp'
import industrial5 from './things/industrial_5.webp'
import industrial6 from './things/industrial_6.webp'
import industrial7 from './things/industrial_7.webp'
import industrial8 from './things/industrial_8.webp'
import industrial9 from './things/industrial_9.webp'
import specimen1 from './things/specimen_1.webp'
import specimen2 from './things/specimen_2.webp'
import specimen3 from './things/specimen_3.webp'
import specimen4 from './things/specimen_4.webp'
import specimen5 from './things/specimen_5.webp'
import specimen6 from './things/specimen_6.webp'
import specimen7 from './things/specimen_7.webp'
import specimen8 from './things/specimen_8.webp'
import specimen9 from './things/specimen_9.webp'
import tool1 from './things/tool_1.webp'
import tool2 from './things/tool_2.webp'
import tool3 from './things/tool_3.webp'
import tool4 from './things/tool_4.webp'
import tool5 from './things/tool_5.webp'
import tool6 from './things/tool_6.webp'
import tool7 from './things/tool_7.webp'
import tool8 from './things/tool_8.webp'
import tool9 from './things/tool_9.webp'
import toys1 from './things/toys_1.webp'
import toys2 from './things/toys_2.webp'
import toys3 from './things/toys_3.webp'
import toys4 from './things/toys_4.webp'
import toys5 from './things/toys_5.webp'
import toys6 from './things/toys_6.webp'
import toys7 from './things/toys_7.webp'
import toys8 from './things/toys_8.webp'
import toys9 from './things/toys_9.webp'

interface Things {
    category: string;
    id: number;
    image: string;
    title: string;
    subtitle: string | null;
    description: string;
}

export const things: Things[] = [
    {
        category: 'art',
        id: 1,
        image: art1,
        title: 'Untitled',
        subtitle: 'Alexander Calder, 1936 Sheet metal and paint',
        description: 'Alexander Calder revolutionized modern sculpture by introducing movement, balance, and playful abstraction through his pioneering mobiles and kinetic works. His bold use of form, color, and industrial materials blurred the boundaries between art, design, and engineering'
    },
    {
        category: 'art',
        id: 2,
        image: art2,
        title: 'Red Bonfire Basket',
        subtitle: 'Dale Chihuly, 2003 Handblown Glass',
        description: 'Chihuly\'s Basket series redefined the possibilities of blown glass, establishing him as an innovator through its clean lines and minimalist aesthetic.'
    },
    {
        category: 'art',
        id: 3,
        image: art3,
        title: 'Mask of Tutankhamun',
        subtitle: 'Gold, lapis lazuli, obsidian, quartz, colored glass, and semiprecious stones. Discovered Valley of the Kings, 1922. Egypt, New Kingdom, 18th Dynasty, c. 1323 BCE',
        description: 'The funerary mask of Tutankhamun is one of the most celebrated objects of ancient Egyptian art, crafted from solid gold and inlaid with colored glass and semiprecious stones. Created to cover the pharaoh\'s mummified head, its idealized features, royal headdress, and protective symbolism reflect ancient Egyptian beliefs about kingship, divine power, and the journey into the afterlife.'
    },
    {
        category: 'art',
        id: 4,
        image: art4,
        title: 'Mona Lisa',
        subtitle: 'Leonardo da Vinci, 1503 Oil on Wood',
        description: 'Leonardo da Vinci\'s Mona Lisa is one of the most celebrated paintings in art history, renowned for its enigmatic expression and masterful use of light and perspective. Its subtle realism, atmospheric depth, and enduring mystery have made it an icon of Renaissance art and a timeless cultural touchstone.'
    },
    {
        category: 'art',
        id: 5,
        image: art5,
        title: 'Moai Statue',
        subtitle: 'Easter Island, c. 13th-16th Centurites CE',
        description: 'The monumental Moai statues of Rapa Nui (Easter Island) were carved by the island\'s Polynesian inhabitants over several centuries, beginning around the 10th century. Representing ancestral figures, these imposing stone sculptures embody the cultural identity, spiritual traditions, and remarkable craftsmanship of the Rapa Nui people.'
    },
    {
        category: 'art',
        id: 6,
        image: art6,
        title: 'The Muse',
        subtitle: 'Gary Baseman, 2005',
        description: 'Gary Baseman\'s The Muse (2005) blends pop surrealism, whimsical character design, and darkly playful imagery into a distinctive visual world. His work draws on mythology, folklore, and popular culture, challenging the boundaries between fine art, illustration, and contemporary design.'
    },
    {
        category: 'art',
        id: 7,
        image: art7,
        title: 'Composition with Large Red Plane, Yellow, Black, Gray and Blue',
        subtitle: 'Piet Mondriaan, 1921',
        description: 'Piet Mondrian\'s Composition with Large Red Plane, Yellow, Black, Gray and Blue (1921) exemplifies the De Stijl movement through its geometric forms, primary colors, and precise black grid lines. Its reduction of art to fundamental elements of color, balance, and proportion helped shape modern art, architecture, and industrial design.'
    },
    {
        category: 'art',
        id: 8,
        image: art8,
        title: 'Neolithic Arrowhead',
        subtitle: 'Neolithic Era, c. 6000-2000 BCE',
        description: 'Neolithic arrowheads were crafted by early human communities from stone, carefully chipped and shaped into precise points for hunting and survival. These small but remarkable tools reflect the ingenuity, craftsmanship, and technological advancements of prehistoric societies thousands of years ago.'
    },
    {
        category: 'art',
        id: 9,
        image: art9,
        title: 'Rorschach Blot',
        subtitle: 'Hermann Rorschach, 1921 Ink on Paper',
        description: 'The Rorschach inkblot test, developed by Swiss psychiatrist Hermann Rorschach in 1921, uses symmetrical abstract ink patterns to explore how individuals perceive and interpret ambiguous imagery. Its striking visual forms have become enduring symbols of psychology, perception, and the relationship between imagination and interpretation.'
    },
    {
        category: 'bugs',
        id: 1,
        image: bugs1,
        title: 'Blue Mountain Swallowtail',
        subtitle: 'Papilio ulysses',
        description: 'The Blue Mountain Swallowtail (Papilio ulysses) is a striking tropical butterfly native to northern Australia and nearby regions, celebrated for its brilliant electric-blue wings edged in deep black. Its dramatic coloration and graceful flight make it one of the most recognizable examples of iridescence and natural design.'
    },
    {
        category: 'bugs',
        id: 2,
        image: bugs2,
        title: 'Monarch',
        subtitle: 'Danaus plexippus',
        description: 'The Monarch butterfly (Danaus plexippus) is renowned for its vivid orange wings, intricate black veining, and remarkable migratory journey across North America. Its annual migration, spanning thousands of miles across generations, makes it one of nature\'s most extraordinary examples of navigation, adaptation, and endurance.'
    },
    {
        category: 'bugs',
        id: 3,
        image: bugs3,
        title: 'Javan Yellowknee Tarantula',
        subtitle: 'Selenocosmia javanensis dolichoplectra',
        description: 'The Javan Yellowknee Tarantula (Selenocosmia javanensis dolichoplectra) is a terrestrial tarantula native to Java, Indonesia, recognized for its dark body and distinctive yellow markings along its legs. A member of the ancient tarantula family, it reflects the remarkable diversity, specialized adaptations, and intricate design found among arachnids.'
    },
    {
        category: 'bugs',
        id: 4,
        image: bugs4,
        title: 'Praying Mantis',
        subtitle: 'Order Mantodea',
        description: 'The praying mantis is a remarkable predatory insect, recognized for its elongated body, triangular head, and distinctive front legs held in a folded, prayer-like position. Its exceptional camouflage, swiveling head, and lightning-fast hunting movements make it one of nature\'s most fascinating examples of evolutionary adaptation and precision design.'
    },
    {
        category: 'culture',
        id: 1,
        image: culture1,
        title: 'African Ceremonial Mask',
        subtitle: 'Africa',
        description: 'African masks represent a rich tradition of artistic expression, craftsmanship, and cultural identity across the continent\'s many distinct societies. Often carved from wood and adorned with pigments, fibers, or other natural materials, they have served ceremonial, spiritual, and social roles, embodying ancestral connections, storytelling, and the relationship between the human and spiritual worlds.'
    },
    {
        category: 'culture',
        id: 2,
        image: culture2,
        title: 'Mayan Calendar',
        subtitle: 'Maya civilization, Mesoamerica (present-day southern Mexico and Central America), c. 250-900 CE',
        description: 'The ancient Maya developed sophisticated calendar systems to track time, agricultural cycles, religious ceremonies, and celestial movements. Combining intricate mathematical calculations with astronomical observation, their calendars reflect an extraordinary understanding of the cosmos and one of the most advanced timekeeping traditions of the ancient world.'
    },
    {
        category: 'culture',
        id: 3,
        image: culture3,
        title: 'Matryoshka Dolls',
        subtitle: 'Russia, c. 1890s',
        description: 'Russian nesting dolls, known as matryoshka, are traditional wooden figures that fit one inside another, revealing progressively smaller dolls within. First created in Russia in the late 19th century, they became celebrated symbols of Russian folk art, combining hand-painted decoration, craftsmanship, and playful design.'
    },
    {
        category: 'culture',
        id: 4,
        image: culture4,
        title: 'Hopi Kachina Doll (Tithu)',
        subtitle: 'Hopi people, Arizona, United States',
        description: 'Hopi kachina dolls, traditionally called tithu by the Hopi, are carved wooden figures representing kachinas, spiritual beings associated with nature, ancestors, and the well-being of the community. Traditionally given to children as teaching objects, they introduce the identities and symbolism of these beings through distinctive forms, colors, and elaborate ceremonial regalia.'
    },
    {
        category: 'culture',
        id: 5,
        image: culture5,
        title: 'Aztec Macuahuitl',
        subtitle: 'Central Mexico, Mexica (Aztec) civilization, c. 14th-early 16th century CE',
        description: 'The macuahuitl was a formidable weapon used by Aztec (Mexica) warriors, consisting of a flat wooden club fitted with razor-sharp obsidian blades along its edges. Combining the force of a club with the cutting power of a blade, it became one of the most distinctive weapons of pre-Columbian Mesoamerica and a striking example of indigenous engineering and craftsmanship.'
    },
    {
        category: 'culture',
        id: 6,
        image: culture6,
        title: 'Día de los Muertos Calavera',
        subtitle: 'Mexico, rooted in Indigenous Mesoamerican traditions',
        description: 'The painted skull, or calavera, is an iconic symbol of Mexico’s Día de los Muertos (Day of the Dead), a celebration honoring deceased loved ones. Often decorated with vibrant colors, floral patterns, and intricate designs, these skulls represent the cycle of life and death, remembrance, and the enduring connection between the living and the departed.'
    },
    {
        category: 'culture',
        id: 7,
        image: culture7,
        title: 'Didgeridoo (Yidaki)',
        subtitle: 'Northern Australia, particularly Arnhem Land',
        description: 'The didgeridoo is a traditional wind instrument developed by Aboriginal peoples of northern Australia, traditionally crafted from naturally hollowed eucalyptus wood. Producing a deep, resonant drone through vibrating lips and circular breathing, it has long accompanied ceremonial songs, storytelling, and cultural traditions, making it one of the world\'s most distinctive musical instruments.'
    },
    {
        category: 'culture',
        id: 8,
        image: culture8,
        title: 'Folding Fan (Sensu)',
        subtitle: 'Japan, c. 9th-10th century CE',
        description: 'The Japanese folding fan, known as a sensu or ōgi, originated during the Heian period and evolved from an elegant court accessory into an everyday object and a celebrated form of decorative art. Traditionally crafted from bamboo ribs and paper or silk, these fans feature intricate paintings and patterns inspired by nature, seasonal changes, and Japanese cultural traditions.'
    },
    {
        category: 'culture',
        id: 9,
        image: culture9,
        title: 'Japanese Noh Theater Mask',
        subtitle: 'Muromachi Period, c. 14th-16th century',
        description: 'Noh masks (nōmen) are traditional Japanese theatrical masks used in Noh drama, a highly stylized form of performance combining music, dance, poetry, and storytelling. Carved with remarkable subtlety, the masks represent characters ranging from women and warriors to gods, demons, and spirits. Through carefully controlled movements and changes in lighting, a slight tilt of the head can transform a mask\'s expression, conveying entirely different emotions.'
    },
    {
        category: 'everyday',
        id: 1,
        image: everyday1,
        title: 'Coffee Mug',
        subtitle: 'Ceramic and Red Glaze',
        description: 'The coffee mug is one of the most familiar objects in everyday life, evolving from simple drinking vessels into an enduring icon of industrial and domestic design. Its form balances utility, comfort, and personal expression, with countless variations in material, shape, and decoration reflecting changing tastes and manufacturing techniques.'
    },
    {
        category: 'everyday',
        id: 2,
        image: everyday2,
        title: 'Artificial Houseplant',
        subtitle: 'Plastic, synthetic fibers, and molded polymers',
        description: 'The artificial houseplant brings the beauty of nature into interior spaces without the maintenance or environmental demands of a living plant. Once associated with inexpensive plastic imitations, synthetic foliage has evolved through advances in materials and manufacturing into a lasting fixture of home décor, reflecting our enduring desire to incorporate natural forms into the built environment.'
    },
    {
        category: 'everyday',
        id: 3,
        image: everyday3,
        title: 'Adhesive Bandage (Band-Aid)',
        subtitle: 'Earle Dickson, 1920',
        description: 'The adhesive bandage, commonly known by the brand name Band-Aid, was invented in 1920 by Earle Dickson, an employee of Johnson & Johnson, who created it to help his wife treat minor kitchen injuries independently. Its simple combination of an absorbent dressing and pressure-sensitive adhesive transformed everyday first aid, becoming one of the most recognizable and enduring designs in modern healthcare'
    },
    {
        category: 'everyday',
        id: 4,
        image: everyday4,
        title: 'Rain Boot (Wellington Boot)',
        subtitle: 'Britain. Modern rubber version: Mid-19th century',
        description: 'The rain boot, also known as a Wellington boot or rubber boot, was designed to protect the feet and lower legs from wet, muddy conditions. Popularized in the 19th century through the Duke of Wellington\'s practical riding boot, its evolution from leather footwear to waterproof rubber construction made it an enduring blend of utility, durability, and everyday design.'
    },
    {
        category: 'everyday',
        id: 5,
        image: everyday5,
        title: 'Automobile Tire',
        subtitle: 'Pneumatic tire patented: 1888, by John Boyd Dunlop',
        description: 'The modern pneumatic tire revolutionized transportation by replacing rigid wheels with air-filled rubber construction that absorbs shocks, improves traction, and provides a smoother ride. Developed through innovations by inventors including John Boyd Dunlop and Charles Goodyear, the automobile tire became an essential component of modern mobility and an enduring example of engineering-driven industrial design.'
    },
    {
        category: 'everyday',
        id: 6,
        image: everyday6,
        title: 'Scrunchie',
        subtitle: 'Rommy Revson, 1986',
        description: 'The scrunchie is a fabric-covered elastic hair tie that became a defining accessory of 1980s and 1990s fashion. Invented by Rommy Revson in 1986, its soft gathered fabric offered a gentler alternative to traditional elastic bands while transforming a simple functional object into a colorful expression of personal style.'
    },
    {
        category: 'everyday',
        id: 7,
        image: everyday7,
        title: 'Gem Paper Clip',
        subtitle: 'Bent steel wire, c. 1890s',
        description: 'The paper clip is a deceptively simple piece of industrial design, using a single length of bent wire to hold sheets of paper together through tension and friction. The familiar double-loop design, known as the Gem paper clip, became widely popular in the late 19th century and remains largely unchanged, demonstrating the enduring power of simplicity, efficiency, and functional design.'
    },
    {
        category: 'everyday',
        id: 8,
        image: everyday8,
        title: 'Rooster Pattern Oven Mitt',
        subtitle: 'Insulated cotton fabric and heat-resistant padding',
        description: 'The oven mitt is a staple of domestic kitchen design, created to protect hands from the heat of cookware and baking dishes. Combining heat-resistant materials with a quilted or insulated construction, it transforms a simple protective tool into an opportunity for decorative expression, with playful patterns and textiles reflecting the personality of the home.'
    },
    {
        category: 'everyday',
        id: 9,
        image: everyday9,
        title: 'Kitchen Sponge',
        subtitle: 'Cellulose, polyurethane foam, and abrasive fibers',
        description: 'The kitchen sponge is a humble but ingenious cleaning tool, designed to absorb liquids, lift debris, and withstand repeated use. Modern synthetic sponges, typically made from cellulose or polyurethane foam, became household staples during the 20th century, demonstrating how material innovation can transform an everyday chore into a simple exercise in functional design.'
    },
    {
        category: 'industrial',
        id: 1,
        image: industrial1,
        title: 'Apple iMac G3',
        subtitle: 'Jony Ive, 1998',
        description: 'The iMac G3, introduced by Apple in 1998, reimagined the personal computer with its translucent, colorful enclosure and distinctive all-in-one design. Created under the direction of Steve Jobs and designer Jony Ive, it challenged the beige conventions of the computer industry, turning technology into an expressive object of industrial design and helping usher in a new era for Apple.'
    },
    {
        category: 'industrial',
        id: 2,
        image: industrial2,
        title: 'Owala FreeSip Twist',
        subtitle: 'Owala, 2024. Insulated stainless steel and BPA-free plastic',
        description: 'The Owala FreeSip Twist reimagines the reusable water bottle through a streamlined silhouette and a clever dual-purpose drinking system. Its patented spout combines a built-in straw for sipping with a wide opening for drinking, while a leakproof twist-top lid, integrated carry loop, and triple-layer insulation bring thoughtful functionality to a distinctly modern design.'
    },
    {
        category: 'industrial',
        id: 3,
        image: industrial3,
        title: 'Blobject',
        subtitle: 'Organic modernism / Y2K design, Late 1990s-early 2000s',
        description: 'The blobject is a design movement characterized by soft, organic curves, rounded silhouettes, and fluid, sculptural forms that reject traditional geometric structure. Emerging prominently in the late 1990s and early 2000s, this aesthetic reflected the influence of digital modeling technology and a growing interest in playful, futuristic forms across industrial design, architecture, and consumer products.'
    },
    {
        category: 'industrial',
        id: 4,
        image: industrial4,
        title: 'Starbucks To-Go Cup & Siren Logo',
        subtitle: 'Current simplified logo, 2011',
        description: 'The Starbucks to-go cup became an instantly recognizable symbol of modern coffee culture, transforming a disposable beverage container into a powerful piece of brand identity. Paired with the iconic green Siren logo, the cup represents Starbucks\' evolution from a Seattle coffee retailer into a global cultural phenomenon, where packaging, graphic design, and everyday rituals converge.'
    },
    {
        category: 'industrial',
        id: 5,
        image: industrial5,
        title: 'Converse Chuck Taylor All Star',
        subtitle: 'Converse, 1917',
        description: 'The Converse Chuck Taylor All Star began as a basketball shoe in 1917, designed to provide players with lightweight flexibility and ankle support. Endorsed by basketball player Chuck Taylor in the 1920s, it evolved into a cultural icon embraced by generations of musicians, artists, and countercultures. Its canvas upper, rubber toe cap, and unmistakable silhouette have made it one of the most enduring designs in footwear history.'
    },
    {
        category: 'industrial',
        id: 6,
        image: industrial6,
        title: 'Blank VHS Cassette (Glow-in-the-Dark Orange)',
        subtitle: 'Format developed by JVC, Japan 1976',
        description: 'The VHS cassette became a defining object of home entertainment during the 1980s and 1990s, allowing audiences to record, collect, and replay films in their own homes. Its magnetic tape housed within a compact plastic shell helped transform movie-watching into a personal experience, while brightly colored and novelty editions reflected the playful visual culture of the era.'
    },
    {
        category: 'industrial',
        id: 7,
        image: industrial7,
        title: 'Polaroid 600 Cool Cam',
        subtitle: 'Instant photography and 1990s pop culture',
        description: 'The Polaroid 600 Cool Cam brought instant photography into the colorful design culture of the 1990s, combining the simplicity of point-and-shoot photography with the excitement of self-developing film. Part of Polaroid\'s iconic 600-series lineup, its playful colored housing and automatic exposure system made spontaneous photography accessible, turning everyday moments into tangible keepsakes within minutes.'
    },
    {
        category: 'industrial',
        id: 8,
        image: industrial8,
        title: 'Nokia 3310',
        subtitle: 'Nokia Finland, 2000',
        description: 'The Nokia 3310 became one of the most iconic mobile phones of the early 2000s, celebrated for its remarkable durability, long battery life, and straightforward design. Introduced before smartphones transformed mobile communication, it offered essential features like text messaging, customizable ringtones, and the addictive game Snake, becoming a cultural symbol of a simpler era in personal technology.'
    },
    {
        category: 'industrial',
        id: 9,
        image: industrial9,
        title: 'Herman Miller Pavilion Exposition Chair',
        subtitle: 'Herman Miller, Mid-20th century',
        description: 'The Herman Miller Pavilion Exposition Chair reflects the experimental spirit of mid-century modern furniture design, combining sculptural form with functional simplicity. Its distinctive molded construction and bold silhouette demonstrate the era\'s fascination with new materials, mass production, and the integration of art and industrial design.'
    },
    {
        category: 'specimen',
        id: 1,
        image: specimen1,
        title: 'Acorn',
        subtitle: 'Origin: Oak trees (genus Quercus), native to the Northern Hemisphere',
        description: 'The acorn is the seed of an oak tree, a small but remarkable natural structure designed to protect and nourish the next generation of one of the world\'s most enduring tree species. Encased in a hard shell and topped with a distinctive textured cupule, it represents the beginning of the oak\'s life cycle and an important food source for wildlife across temperate ecosystems.'
    },
    {
        category: 'specimen',
        id: 2,
        image: specimen2,
        title: 'Obsidian (Volcanic Glass)',
        subtitle: 'Notable sources: Mexico, Iceland, Italy, and the western United States',
        description: 'Obsidian is a naturally occurring volcanic glass formed when lava cools so rapidly that crystals cannot develop. Its smooth, glossy surface and dramatic dark coloration have made it prized for both its visual beauty and its ability to fracture into exceptionally sharp edges. Ancient civilizations used it to create tools, weapons, ceremonial objects, and intricate works of art.'
    },
    {
        category: 'specimen',
        id: 3,
        image: specimen3,
        title: 'Honeycomb',
        subtitle: 'Beeswax. Function: Storage, brood rearing, and colony organization',
        description: 'Honeycomb is the intricate hexagonal structure built by honeybees to store honey, pollen, and developing larvae. Constructed from beeswax secreted by worker bees, its repeating six-sided cells maximize storage capacity while using remarkably little material, making it one of nature\'s most celebrated examples of structural efficiency and biomimetic design.'
    },
    {
        category: 'specimen',
        id: 4,
        image: specimen4,
        title: 'Queen Conch Shell',
        subtitle: 'Calcium carbonate. Lobatus gigas (formerly Strombus gigas)',
        description: 'The conch shell is the protective outer structure of a large marine gastropod, admired for its sculptural spiral, natural symmetry, and delicate pink interior. Beyond its beauty, conch shells have served cultures around the world as musical instruments, ceremonial objects, and decorative materials, demonstrating the remarkable intersection of natural architecture and human creativity.'
    },
    {
        category: 'specimen',
        id: 5,
        image: specimen5,
        title: 'Bird Feather',
        subtitle: 'Keratin',
        description: 'A feather is a remarkable natural structure unique to birds, serving essential roles in flight, insulation, protection, and display. Composed primarily of keratin, its lightweight branching architecture combines flexibility and strength, while intricate patterns and pigmentation create an extraordinary diversity of color and form across the avian world.'
    },
    {
        category: 'specimen',
        id: 6,
        image: specimen6,
        title: 'Pyrite (Fool\'s Gold)',
        subtitle: 'Iron sulfide (FeS₂)',
        description: 'Pyrite, commonly known as fool\'s gold, is a naturally occurring iron sulfide mineral recognized for its brilliant metallic luster and distinctive golden color. Its crystalline formations often develop into striking cubes and geometric clusters, making it both a geological curiosity and a historically important source of fascination for prospectors who mistook it for gold.'
    },
    {
        category: 'specimen',
        id: 7,
        image: specimen7,
        title: 'Chambered Nautilus Shell',
        subtitle: 'Nautilus pompilius. Indo-Pacific Ocean',
        description: 'The nautilus shell is celebrated for its elegant spiral structure, formed as the animal grows and develops new chambers while maintaining its original body proportions. Its logarithmic spiral has long inspired mathematicians, architects, and designers, often associated with the Fibonacci sequence and the golden ratio. This remarkable natural structure demonstrates the relationship between biological growth, mathematical patterns, and aesthetic form.'
    },
    {
        category: 'specimen',
        id: 8,
        image: specimen8,
        title: 'Autumn Maple Leaf',
        subtitle: 'Sapindaceae Acer',
        description: 'The maple leaf is an iconic symbol of autumn, celebrated for its distinctive lobed shape and brilliant seasonal transformation from green to vivid shades of yellow, orange, and red. These colors emerge as chlorophyll breaks down in cooler temperatures, revealing existing pigments and allowing newly produced anthocyanins to create the deep reds and purples characteristic of fall foliage.'
    },
    {
        category: 'specimen',
        id: 9,
        image: specimen9,
        title: 'Tree Twig',
        subtitle: 'Origin: Woody plants (trees and shrubs)',
        description: 'A twig is a small woody branch that represents the continuing growth and branching structure of a tree or shrub. Bearing buds, leaf scars, and delicate variations in texture, even these modest fragments reveal the architecture of plant life, illustrating how simple branching patterns support growth, adaptation, and the natural distribution of resources.'
    },
    {
        category: 'tool',
        id: 1,
        image: tool1,
        title: 'Garden Spade',
        subtitle: 'Forged steel and wood',
        description: 'The garden spade is a fundamental hand tool designed for digging, planting, transplanting, and working soil with precision. Its compact blade and sturdy handle provide leverage and control in confined spaces, making it an enduring example of practical tool design shaped by centuries of agricultural and horticultural tradition.'
    },
    {
        category: 'tool',
        id: 2,
        image: tool2,
        title: 'Astronomical Telescope',
        subtitle: 'Key pioneers: Hans Lippershey and Galileo Galilei. Early 17th-century Europe',
        description: 'The home telescope brings the distant universe into view, transforming complex optical technology into an accessible tool for exploration and discovery. Using carefully aligned lenses or mirrors to gather and magnify light, it allows observers to study the Moon, planets, stars, and deep-sky objects, reflecting humanity\'s enduring curiosity about the cosmos.'
    },
    {
        category: 'tools',
        id: 3,
        image: tool3,
        title: 'Sharpie Permanent Marker',
        subtitle: 'Sanford Ink Company, 1964',
        description: 'The Sharpie permanent marker transformed everyday writing and labeling through its simple, durable design and versatile ink technology. Introduced in 1964, its quick-drying, water-resistant ink and distinctive black barrel made it an essential tool across offices, workshops, classrooms, and creative studios, becoming an enduring icon of functional design.'
    },
    {
        category: 'tools',
        id: 4,
        image: tool4,
        title: 'Moleskine Classic Notebook',
        subtitle: 'Paper, cardboard, and elastic binding. Brand relaunched: 1997, Italy',
        description: 'The Moleskine notebook is a modern interpretation of the classic pocket notebook, celebrated for its minimalist design, rounded corners, elastic closure, and expandable inner pocket. Inspired by notebooks historically used by artists and writers such as Vincent van Gogh and Ernest Hemingway, the contemporary Moleskine brand revived the tradition in 1997, turning a simple writing tool into an icon of creativity, travel, and personal expression.'
    },
    {
        category: 'tools',
        id: 5,
        image: tool5,
        title: 'Cotton Swab (Q-tip)',
        subtitle: 'Leo Gerstenzang, 1923',
        description: 'The cotton swab is a simple yet versatile personal care tool, consisting of a small tuft of cotton wrapped around one or both ends of a slender stick. Patented by Leo Gerstenzang in 1923 after observing his wife apply cotton to toothpicks, it became a household staple for personal grooming, cosmetics, cleaning, and precision applications.'
    },
    {
        category: 'tools',
        id: 6,
        image: tool6,
        title: 'Scissors',
        subtitle: 'Origin: Ancient Egypt, c. 1500 BCE. Modern crossed-blade design: Ancient Rome, c. 100 CE',
        description: 'Scissors are a deceptively simple cutting tool built around two intersecting blades joined by a central pivot, converting hand pressure into precise cutting force. Dating back to ancient Egypt around 1500 BCE, scissors evolved through centuries of metalworking innovation into an essential everyday object used in everything from tailoring and crafts to medicine and industry.'
    },
    {
        category: 'tools',
        id: 7,
        image: tool7,
        title: 'Toothbrush',
        subtitle: 'Early origins: Ancient civilizations, c. 3000 BCE. Bristle toothbrush: China, c. 1498. Nylon bristles introduced: 1938, United States',
        description: 'The toothbrush has evolved from simple chewing sticks used by ancient civilizations into one of the most widely used personal care tools in the world. The modern bristle toothbrush emerged in China during the late 15th century, using stiff hog hair attached to a bamboo or bone handle, before nylon bristles revolutionized its design in 1938.'
    },
    {
        category: 'tools',
        id: 8,
        image: tool8,
        title: 'Staedtler Mars Plastic Eraser',
        subtitle: 'Staedtler, Germany. Introduced 1960s',
        description: 'The Staedtler Mars Plastic eraser is a precision-engineered stationery classic, known for its clean erasing performance and distinctive blue-and-white paper sleeve. Introduced as part of Staedtler\'s professional drawing and writing supplies, its soft synthetic material removes graphite marks with minimal smudging and paper damage, making it a favorite among artists, designers, architects, and students.'
    },
    {
        category: 'tools',
        id: 9,
        image: tool9,
        title: 'No. 2 Graphite Pencil',
        subtitle: 'Cedar wood, graphite, and clay',
        description: 'The No. 2 pencil is one of the most enduring tools in education, writing, and visual communication. Its familiar yellow-painted wooden body contains a graphite-and-clay core engineered to balance darkness with durability, while its standardized hardness makes it ideal for general writing, drawing, and standardized testing.'
    },
    {
        category: 'toys',
        id: 1,
        image: toys1,
        title: 'Quad Roller Skate',
        subtitle: 'James Leonard Plimpton (pioneered the modern quad design), 1863',
        description: 'The roller skate transformed recreation and personal transportation by introducing a wearable system of wheels that allowed people to glide across paved surfaces. Patented in its modern inline form in the 19th century, the four-wheel or quad skate became especially popular during the 20th century, evolving into an enduring symbol of leisure, self-expression, and retro design.'
    },
    {
        category: 'toys',
        id: 2,
        image: toys2,
        title: 'Red Rubber Balloon',
        subtitle: 'Natural latex rubber',
        description: 'The red balloon is a deceptively simple object that has become a powerful symbol in art, popular culture, and visual storytelling. Made possible by advances in rubber manufacturing during the 19th century, the modern inflatable balloon transformed a basic scientific curiosity into an enduring object of celebration, play, and childhood nostalgia.'
    },
    {
        category: 'toys',
        id: 3,
        image: toys3,
        title: 'Gloworm',
        subtitle: 'Playskool, 1982',
        description: 'The Playskool Gloworm became a beloved children\'s bedtime companion after its introduction in 1982, combining a soft plush body with a gently illuminated face that glowed when squeezed. Designed to comfort infants and toddlers through tactile play and soothing light, it became an enduring icon of 1980s toy design and childhood nostalgia.'
    },
    {
        category: 'toys',
        id: 4,
        image: toys4,
        title: 'Yo-Yo',
        subtitle: 'Ancient Greece, c. 500 BCE',
        description: 'The yo-yo is one of the world\'s oldest and most enduring skill toys, consisting of two connected disks joined by an axle around which a length of string is wound. Its up-and-down motion relies on gravity, momentum, and rotational energy, transforming a simple mechanical object into a playful demonstration of physics, coordination, and dexterity.'
    },
    {
        category: 'toys',
        id: 5,
        image: toys5,
        title: 'Rubik\'s Cube',
        subtitle: 'Ernő Rubik, 1974',
        description: 'The Rubik\'s Cube is a three-dimensional mechanical puzzle that challenged the world with its deceptively simple design and extraordinary mathematical complexity. Invented by Hungarian architecture professor Ernő Rubik in 1974, its six rotating faces and colorful grid of movable squares create more than 43 quintillion possible configurations, making it one of the most successful and recognizable puzzles in history.'
    },
    {
        category: 'toys',
        id: 6,
        image: toys6,
        title: 'Pretzel Inflatable Pool Float',
        subtitle: 'Inflatable PVC or vinyl',
        description: 'The inflatable pool float transforms a simple buoyant structure into a playful expression of leisure and summer culture. Shaped like an oversized pretzel, this novelty float combines the familiar silhouette of a twisted snack with lightweight inflatable construction, turning an everyday food icon into an unexpected piece of recreational design.'
    },
    {
        category: 'toys',
        id: 7,
        image: toys7,
        title: 'Alphie',
        subtitle: 'Playskool, c. 1980s',
        description: 'Playskool Alphie was an interactive educational robot toy that introduced a generation of children to early learning through electronic games, lights, and sound. With its friendly robot face and colorful interchangeable learning cards, Alphie combined emerging consumer electronics with approachable toy design, reflecting the growing popularity of educational technology in the 1980s.'
    },
    {
        category: 'toys',
        id: 8,
        image: toys8,
        title: 'Troll Doll',
        subtitle: 'Thomas Dam, 1959',
        description: 'The Troll Doll became an unmistakable pop-culture icon, known for its oversized head, jewel-like eyes, and signature shock of brightly colored hair. Created by Danish fisherman and woodworker Thomas Dam in 1959, the small good-luck figures grew into a worldwide toy phenomenon, blending Scandinavian folk-art inspiration with an exuberant, unmistakably playful design.'
    },
    {
        category: 'toys',
        id: 9,
        image: toys9,
        title: 'Teddy Ruxpin',
        subtitle: 'Worlds of Wonder: Ken Forsse, 1985 Plush fabric, plastic, electronic components',
        description: 'Teddy Ruxpin revolutionized the talking toy by bringing stories to life through synchronized speech, moving eyes, and an animated mouth. Introduced in 1985, the plush bear used cassette tapes and animatronic mechanisms to transform storytelling into an immersive experience, becoming one of the defining toys of the 1980s.'
    },
    
]