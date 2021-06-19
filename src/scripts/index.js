function viewModel(){
    var self = this;

    //turn the more button false by default
    self.vis = ko.observable(false);
    
    class Cards{
        constructor(title, card, banner, tags, subtitle){
            this.title = title;
            this.card = card;
            this.banner = banner;
            this.tags = tags;
            this.subtitle = subtitle;
        }
    }



    //
    //Banco de dados improvisado
    //

    var m1 = new Cards(
        'Lucifer',
        './src/media/cards/Lucifer.jpg',
        'url(./src/media/banners/Lucifer.jpg)',
        ['drama', '18', '5ª temporada'],
        'Lucifer Morningstar está entediado e infeliz como o Senhor do Inferno. Então ele renuncia seu trono e abandona seu reinado para tirar férias em Los Angeles'
    )
    var m2 = new Cards(
        'You',
        './src/media/cards/You.jpg',
        'url(./src/media/banners/You.jpg)',
        ['baseado em livros', 'suspense', '16'],
        'Um primeiro encontro fortuito toma um rumo assustador quando o gerente de livraria Joe se apaixona pela universitária Beck.'
    )
    var m3 = new Cards(
        'Umbrella Academy',
        './src/media/cards/Umbrellaacademy.jpg',
        'url(./src/media/banners/Umbrellaacademy.png)',
        ['ficção científica', '16', 'ação'],
        'Anos após ficarem famosos como jovens heróis lutando contra o crime, os irmãos Hargreeves se reencontram para honrar a morte de seu pai.'
    )
    var m4 = new Cards(
        'Warrior Nun',
        './src/media/cards/WarriorNun.jpg',
        'url(./src/media/banners/Warriornun.jpg)',
        ['suspense', 'empolgantes', '1ª temporada'],
        'Uma jovem acorda no necrotério com superpoderes e descobre que faz parte de uma seita secreta de freiras caçadoras de demônios.'
    )
    var m5 = new Cards(
        'Baby Driver',
        './src/media/cards/Babydriver.jpg',
        'url(./src/media/banners/BabyDriver.jpg)',
        ['Ação', 'Fuga', '14'],
        'Baby é um motorista de fuga que está em dívida com um chefão do crime. Ele só precisa fazer mais um trabalho, mas é agora que tudo vai dar errado.'
    )
    var m6 = new Cards(
        'Baby',
        './src/media/cards/Baby.jpg',
        'url(./src/media/banners/Baby.png)',
        ['Teen', '3 temporadas', '2020'],
        'Cansadas da família e dos colegas da escola, duas adolescentes mergulham numa vida dupla entre o bairro nobre de Roma onde moram e o submundo da cidade.'
    )
    var m7 = new Cards(
        'Stranger Things',
        './src/media/cards/Strangerthings.jpg',
        'url(./src/media/banners/StrangerThings.jpg)',
        ['ficção', '2019', 'assustadores'],
        'Os anos 1980 mandam lembranças nesta trama que envolve experimentos ultrassecretos do governo, forças sobrenaturais e uma menina bastante incomum.'
    )
    var m8 = new Cards(
        'The Witcher',
        './src/media/cards/Thewitcher.jpg',
        'url(./src/media/banners/Thewitcher.jpg)',
        ['18', 'fantasia', 'ação'],
        'Numa terra fantástica e sombria, Geralt de Rívia ganha a vida caçando assombrações e criaturas mitológicas. Mas quem são os verdadeiros monstros do lugar?'
    )
    var m9 = new Cards(
        'Cursed',
        './src/media/cards/Cursed.jpg',
        'url(./src/media/banners/Cursed.jpg)',
        ['fantasia', '2020', 'violento'],
        'Com poderes misteriosos e uma espada lendária, Nimue embarca na missão de salvar seu povo na companhia do mercenário Arthur.'
    )
    var m10 = new Cards(
        'Riverdale',
        './src/media/cards/Riverdale.jpg',
        'url(./src/media/banners/Riverdale.jpg)',
        ['teen', 'sombrio', '4 temporadas'],
        'Após uma tragédia familiar, Archie deixa seu lado sombrio vir à tona nesta série com pensamentos obsessivos, mistérios e casais para shippar.'
    )
    var m11 = new Cards(
        'O mundo sombrio de Sabrina',
        './src/media/cards/Sabrina.jpg',
        'url(./src/media/banners/Sabrina.png)',
        ['magia', 'teen', '16'],
        'Bruxa e também mortal, a jovem Sabrina Spellman fica dividida entre a vida normal de adolescente e o legado de sua família feiticeira.'
    )


    self.title = ko.observable(m1.title)
    self.tag = ko.observable([
        m1.tags[0],
        m1.tags[1],
        m1.tags[2]
    ])
    self.subtitle = ko.observable(m1.subtitle)
    self.imgBanner = ko.observable(m1.banner)
    self.imgCard = ko.observable(m1.card)


    self.expand = function(data, onclick){

        self.imgBanner(data.banner)

        self.imgCard(data.img)

        self.title(data.title)

        self.tag([
            data.tags[0],
            data.tags[1],
            data.tags[2]
        ])

        self.subtitle(data.subtitle)
        
        
    }
    
        
        
    //main bindings
    
    



    self.carousel1 = [
        {title: m1.title, img: m1.card, tags: m1.tags, subtitle: m1.subtitle, banner: m1.banner},
        {title: m2.title, img: m2.card, tags: m2.tags, subtitle: m2.subtitle, banner: m2.banner},
        {title: m3.title, img: m3.card, tags: m3.tags, subtitle: m3.subtitle, banner: m3.banner},
        {title: m4.title, img: m4.card, tags: m4.tags, subtitle: m4.subtitle, banner: m4.banner},
        {title: m5.title, img: m5.card, tags: m5.tags, subtitle: m5.subtitle, banner: m5.banner},
        {title: m6.title, img: m6.card, tags: m6.tags, subtitle: m6.subtitle, banner: m6.banner},
        {title: m7.title, img: m7.card, tags: m7.tags, subtitle: m7.subtitle, banner: m7.banner},
        {title: m8.title, img: m8.card, tags: m8.tags, subtitle: m8.subtitle, banner: m8.banner},
        {title: m9.title, img: m9.card, tags: m9.tags, subtitle: m9.subtitle, banner: m9.banner},
        {title: m10.title, img: m10.card, tags: m10.tags, subtitle: m10.subtitle, banner: m10.banner},
        {title: m11.title, img: m11.card, tags: m11.tags, subtitle: m11.subtitle, banner: m11.banner},
    ];


    self.more = function(){
        self.vis(true)
    }


    self.carousel2 = [
        {title: m9.title, img: m9.card, tags: m9.tags, subtitle: m9.subtitle, banner: m9.banner},
        {title: m4.title, img: m4.card, tags: m4.tags, subtitle: m4.subtitle, banner: m4.banner},
        {title: m6.title, img: m6.card, tags: m6.tags, subtitle: m6.subtitle, banner: m6.banner},
        {title: m5.title, img: m5.card, tags: m5.tags, subtitle: m5.subtitle, banner: m5.banner},
        {title: m1.title, img: m1.card, tags: m1.tags, subtitle: m1.subtitle, banner: m1.banner},
        {title: m7.title, img: m7.card, tags: m7.tags, subtitle: m7.subtitle, banner: m7.banner},
        {title: m11.title, img: m11.card, tags: m11.tags, subtitle: m11.subtitle, banner: m11.banner},
        {title: m8.title, img: m8.card, tags: m8.tags, subtitle: m8.subtitle, banner: m8.banner},
        {title: m10.title, img: m10.card, tags: m10.tags, subtitle: m10.subtitle, banner: m10.banner},
        {title: m2.title, img: m2.card, tags: m2.tags, subtitle: m2.subtitle, banner: m2.banner},
        {title: m3.title, img: m3.card, tags: m3.tags, subtitle: m3.subtitle, banner: m3.banner},
    ];
    self.carousel3 = [
        {title: m3.title, img: m3.card, tags: m3.tags, subtitle: m3.subtitle, banner: m3.banner},
        {title: m1.title, img: m1.card, tags: m1.tags, subtitle: m1.subtitle, banner: m1.banner},
        {title: m10.title, img: m10.card, tags: m10.tags, subtitle: m10.subtitle, banner: m10.banner},
        {title: m11.title, img: m11.card, tags: m11.tags, subtitle: m11.subtitle, banner: m11.banner},
        {title: m2.title, img: m2.card, tags: m2.tags, subtitle: m2.subtitle, banner: m2.banner},
        {title: m6.title, img: m6.card, tags: m6.tags, subtitle: m6.subtitle, banner: m6.banner},
        {title: m7.title, img: m7.card, tags: m7.tags, subtitle: m7.subtitle, banner: m7.banner},
        {title: m8.title, img: m8.card, tags: m8.tags, subtitle: m8.subtitle, banner: m8.banner},
        {title: m4.title, img: m4.card, tags: m4.tags, subtitle: m4.subtitle, banner: m4.banner},
        {title: m9.title, img: m9.card, tags: m9.tags, subtitle: m9.subtitle, banner: m9.banner},
        {title: m5.title, img: m5.card, tags: m5.tags, subtitle: m5.subtitle, banner: m5.banner},
    ];
    self.carousel4 = [
        {title: m9.title, img: m9.card, tags: m9.tags, subtitle: m9.subtitle, banner: m9.banner},
        {title: m6.title, img: m6.card, tags: m6.tags, subtitle: m6.subtitle, banner: m6.banner},
        {title: m11.title, img: m11.card, tags: m11.tags, subtitle: m11.subtitle, banner: m11.banner},
        {title: m7.title, img: m7.card, tags: m7.tags, subtitle: m7.subtitle, banner: m7.banner},
        {title: m3.title, img: m3.card, tags: m3.tags, subtitle: m3.subtitle, banner: m3.banner},
        {title: m8.title, img: m8.card, tags: m8.tags, subtitle: m8.subtitle, banner: m8.banner},
        {title: m10.title, img: m10.card, tags: m10.tags, subtitle: m10.subtitle, banner: m10.banner},
        {title: m1.title, img: m1.card, tags: m1.tags, subtitle: m1.subtitle, banner: m1.banner},
        {title: m2.title, img: m2.card, tags: m2.tags, subtitle: m2.subtitle, banner: m2.banner},
        {title: m5.title, img: m5.card, tags: m5.tags, subtitle: m5.subtitle, banner: m5.banner},
        {title: m4.title, img: m4.card, tags: m4.tags, subtitle: m4.subtitle, banner: m4.banner},
    ];

}

ko.applyBindings(new viewModel());