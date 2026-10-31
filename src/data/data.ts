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
        subtitle: 'Eighteenth Dynasty of the New Kingdom in ancient Egypt, c. 1323 BC',
        description: 'British archaeologist Howard Carter found the mask in 1925 inside the pharaoh\'s tomb in the Valley of the Kings'
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
        title: 'lorem',
        subtitle: 'ipsum',
        description: 'dolor'
    },
    {
        category: 'industrial',
        id: 2,
        image: industrial2,
        title: 'lorem',
        subtitle: 'ipsum',
        description: 'dolor'
    },
    {
        category: 'industrial',
        id: 3,
        image: industrial3,
        title: 'lorem',
        subtitle: 'ipsum',
        description: 'dolor'
    },
    {
        category: 'industrial',
        id: 4,
        image: industrial4,
        title: 'lorem',
        subtitle: 'ipsum',
        description: 'dolor'
    },
    {
        category: 'industrial',
        id: 5,
        image: industrial5,
        title: 'lorem',
        subtitle: 'ipsum',
        description: 'dolor'
    },
    {
        category: 'industrial',
        id: 6,
        image: industrial6,
        title: 'lorem',
        subtitle: 'ipsum',
        description: 'dolor'
    },
    {
        category: 'industrial',
        id: 7,
        image: industrial7,
        title: 'lorem',
        subtitle: 'ipsum',
        description: 'dolor'
    },
    {
        category: 'industrial',
        id: 8,
        image: industrial8,
        title: 'lorem',
        subtitle: 'ipsum',
        description: 'dolor'
    },
    {
        category: 'industrial',
        id: 9,
        image: industrial9,
        title: 'lorem',
        subtitle: 'ipsum',
        description: 'dolor'
    },
]