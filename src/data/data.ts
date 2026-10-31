import art1 from './things/art_1.webp'
import art2 from './things/art_2.webp'
import art3 from './things/art_3.webp'
import art4 from './things/art_4.webp'
import art5 from './things/art_5.webp'
import art6 from './things/art_6.webp'
import art7 from './things/art_7.webp'
import art8 from './things/art_8.webp'
import art9 from './things/art_9.webp'

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
        subtitle: 'Alexander Calder 1936 Sheet metal and paint',
        description: 'Alexander Calder revolutionized modern sculpture by introducing movement, balance, and playful abstraction through his pioneering mobiles and kinetic works. His bold use of form, color, and industrial materials blurred the boundaries between art, design, and engineering'
    },
    {
        category: 'art',
        id: 2,
        image: art2,
        title: 'Red Bonfire Basket',
        subtitle: 'Dale Chihuly 2003 Handblown Glass',
        description: 'Chihuly\'s Basket series redefined the possibilities of blown glass, establishing him as an innovator through its clean lines and minimalist aesthetic.'
    },
    {
        category: 'art',
        id: 3,
        image: art3,
        title: 'Lipsum',
        subtitle: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor.'
    },
]