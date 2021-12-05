/**
 * A function that given a min and a max number will return a random number between them
 * @param {integer} min
 * @param {integer} max
 * @returns An integer between the min and max numbers
 */
const generateRandomId = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * The data object to build all the webpage. It contains two arrays: events (with the events data objects)
 * and news (with the news data objects)
 */
export const theaterData = {
  events: [
    {
      id: generateRandomId(1, 999_999),
      title: 'Winterreise',
      author: 'Angelin Preljocaj',
      group: 'Ballet Preljocaj',
      dates: [
        '11/05/2021',
        '11/06/2021',
        '11/08/2021',
        '11/09/2021',
        '11/10/2021',
      ],
      type: 'dance',
      duration: '85',
      price: '45',
      artists: {
        choreography: 'Angelin Preljocaj',
        music: 'Franz Schubert',
        scenography: 'Constance Guisset',
        production: 'Ballet Preljocaj',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_winterreise.jpg',
      videoURL:
        'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/dansa/promo_winterreise_2122_h_clean_1.mp4',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione debitis impedit voluptate fuga dolores ullam, vitae voluptatibus quidem veniam eius, nisi odio harum nobis deserunt iure delectus? Excepturi, a?',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'Pierrot Lunaire: Narcís',
      author: 'Arnold Schönberg',
      group: '',
      dates: ['11/16/2021', '11/17/2021', '11/18/2021'],
      type: 'concert',
      duration: '60',
      price: '65',
      artists: {
        countertenor: 'Xavier Sabata',
        scenography: 'cube.bz',
        movement: 'Maria C. de Vaca',
        musicDirector: 'Francesc Prat',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_pierrot_2_0.png',
      videoURL: '',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: "Mite i tragèdia d'electra i èdip",
      author: ['Richard Strauss', 'Igor Stravinsky'],
      group: [
        'Cor del Gran TeaTRE del Liceu',
        'Orquestra Simfónica del Gran Tatre del Liceu',
      ],
      dates: ['11/13/2021'],
      type: 'opera',
      duration: '120',
      price: '80',
      artists: {
        director: 'Josep Pons',
        cast: {
          oedipe: 'Michael Spyres',
          jocaste: 'Ekaterina Gubanova',
          creon: 'José Antonio López',
          tiresias: 'Albert Dohmen',
          pastor: 'David Alegret',
        },
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_elektra_edip.jpg',
      videoURL: '',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'Rigoletto',
      author: 'Giuseppe Verdi',
      group: '',
      dates: [
        '11/28/2021',
        '11/30/2021',
        '12/01/2021',
        '12/02/2021',
        '12/03/2021',
        '12/04/2021',
        '12/05/2021',
        '12/06/2021',
        '12/07/2021',
        '12/08/2021',
        '12/09/2021',
        '12/10/2021',
        '12/11/2021',
        '12/12/2021',
        '12/13/2021',
        '12/14/2021',
        '12/15/2021',
      ],
      type: 'opera',
      duration: '160',
      price: '75',
      artists: {
        director: 'Daniele Callegari',
        stageDirector: 'Monique Wagemakers',
        scenography: 'Michael Levine',
        dress: 'Sandy Powell',
        cast: {
          matuaDuke: 'Benjamin Bernheim',
          rigoletto: 'Christopher Maltman',
          gilda: 'Olga Peretyatko',
          sparafucile: 'Grigory Shkarupa',
          maddalena: 'Rinat Shaham',
        },
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_rigoleto.jpg',
      videoURL:
        'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/opera/rigoletto/caps10_rigoletto_2122_1.mp4',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'Dudamel dirigeix la Simfònica fantàstica de Berlioz',
      author: 'Gustavo Dudamel',
      group: [
        'Orquestra Simfónica del Gran Teatre del Liceu',
        "Orchestre de l'Opéra National de Paris",
      ],
      dates: ['11/21/2021'],
      type: 'concert',
      duration: '120',
      price: '45',
      artists: {
        director: 'Gustavo Dudamel',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_dudamel_2.png',
      videoURL: '',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'Die Zauberflöte',
      author: 'Wolfgang Amadeus Mozart',
      group: [
        'Orquestra Simfónica del Gran Teatre del Liceu',
        'Cor del Gran Teatre del Liceu',
      ],
      dates: [
        '06/20/2022',
        '06/21/2022',
        '06/22/2022',
        '06/25/2022',
        '06/26/2022',
        '06/27/2022',
        '06/28/2022',
        '06/30/2022',
        '07/01/2022',
        '07/02/2022',
      ],
      type: 'opera',
      duration: '170',
      price: '50',
      artists: {
        director: 'Gustavo Dudamel',
        stageDirector: 'Simon McBurney',
        scenography: 'Michael Levine',
        dress: 'Nicky Gillibrand',
        production: 'Dutch National Opera',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_flauta.jpg',
      videoURL:
        'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/opera/la_flauta_magica/caps10_flauta_mag_2122_1.mp4',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'El Trencanous',
      author: 'Piotr Tchaikovsky',
      group: '',
      dates: [
        '12/28/2021',
        '12/29/2021',
        '12/30/2021',
        '01/02/2022',
        '01/03/2022',
        '01/04/2022',
      ],
      type: 'dance',
      duration: '90',
      price: '40',
      artists: {
        director: 'Marius Stighorst',
        music: 'Piotr Íllitx Txaikovski',
        choreography: 'Kader Belarbi',
        scenography: 'Antoine Fontaine',
        dress: 'Philippe Guillotel',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_trencanous_0.jpg',
      videoURL:
        'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/dansa/promo_trencanous_2122_h_clean_1.mp4',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'Els Madrigals de Monteverdi I',
      author: 'C. Monteverdi',
      group: 'Concerto Italiano',
      dates: ['11/07/2021'],
      type: 'concert',
      duration: '120',
      price: '105',
      artists: {
        director: 'Rinaldo Alessandrini',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_madrigals1.jpg',
      videoURL: '',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'Pelléas et Mélisande',
      author: 'Maurice Maeterlinck',
      group: '',
      dates: [
        '02/28/2022',
        '03/03/2022',
        '03/06/2022',
        '03/08/2022',
        '03/11/2022',
        '03/15/2022',
        '03/18/2022',
      ],
      type: 'opera',
      duration: '200',
      price: '95',
      artists: {
        director: 'Josep Pons',
        stageDirector: 'Àlex Ollé',
        scenography: 'Alfons Flores',
        dress: 'Lluc Castells',
        production: 'Nova producció basada en la producció de la Dresden Oper',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_pelleas-et-melisande.jpg',
      videoURL:
        'https://www.liceubarcelona.cat/sites/default/files/caps10_pelleasetmelisande_2122_1.mp4',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'Pikovaia Dama',
      author: 'Piotr Ilitx Txaikovski',
      group: '',
      dates: [
        '01/26/2022',
        '01/27/2022',
        '02/01/2022',
        '02/02/2022',
        '02/04/2022',
        '02/05/2022',
        '02/06/2022',
        '02/08/2022',
        '02/10/2022',
        '02/11/2022',
      ],
      type: 'opera',
      duration: '230',
      price: '185',
      artists: {
        director: 'Dmitry Jurowski',
        stageDirector: 'Gilbert Deflo',
        scenography: 'William Orlandi',
        choreography: 'Nadejda L. Loujine',
        dress: 'William Orlandi',
        production: 'Gran Teatre del Liceu',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_dama-de-picas.jpg',
      videoURL:
        'https://www.liceubarcelona.cat/sites/default/files/espectacles/temporada_2021-2022/opera/pikovaia_dama/caps10_piquedame_2122_1.mp4',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'Piotr Beczala',
      author: '',
      group: '',
      dates: ['02/03/2022'],
      type: 'concert',
      duration: 'Not available',
      price: '25',
      artists: {
        tenor: 'Piotr Beczala',
        piano: 'Not available',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_beczala_0.jpg',
      videoURL: '',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: 'Sonya Yoncheva canta Puccini',
      author: '',
      group: 'Gran Simfònica del Gran Teatre del Liceu',
      dates: ['04/30/2022'],
      type: 'concert',
      duration: '160',
      price: '35',
      artists: {
        director: 'Francesco Ivan Ciampa',
        soprano: 'Sonya Yoncheva',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/front_web_yoncheva.jpg',
      videoURL: '',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
    {
      id: generateRandomId(1, 999_999),
      title: "Giselle D'Akram Khan",
      author: 'Adolphe Adam',
      group: 'English National Ballet',
      dates: ['05/04/2022', '05/05/2022', '05/06/2022', '05/07/2022'],
      type: 'dance',
      duration: '120',
      price: '70',
      artists: {
        direction: 'Akram Khan',
        choreography: 'Akram Khan',
        music: 'Vincenzo Lamagna',
        scenography: 'Tim Yip',
        director: 'Gavin Sutherland',
        dress: 'Tim Yip',
      },
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/10_-_giselle_english_national_ballet_0.jpg',
      videoURL:
        'https://www.liceubarcelona.cat/sites/default/files/promo_giselle_2122_h_clean_1.mp4',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet veniam architecto quae repudiandae saepe. Ex velit alias minus vero facilis, eius officiis at architecto molestiae voluptatem recusandae soluta corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quo consequatur ipsa commodi, eligendi non deleniti fugiat? Tempore et consequuntur hic. Deserunt cumque harum autem ea, laboriosam ipsum voluptate veniam!',
    },
  ],

  news: [
    {
      title:
        'The Liceu starts a new project with the teacher Rinaldo Alessandrini',
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_madrigals_noticia.png',
      publicationDate: '12/11/2021',
      content:
        'The Gran Teatre del Liceu begins a project by the master Rinaldo Alessandrini and his renowned group Concerto Italiano, with the collaboration of the Italian Institute of Culture of Barcelona, ​​to promote and disseminate the representation of the cycle of the Madrigals of Monteverdi. The work occupies a prominent place in the composers production and represents the culmination of the Madrigal genre, as well as the beginning of the opera genre. The madrigals are grouped into 9 books.',
      sponsored: true,
    },
    {
      title: "Josep Pons conducts 'Mite i tragèdia d'Electra i Èdip'",
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/josep_banner_01.png',
      publicationDate: '12/27/2021',
      content:
        'The Symphony Orchestra and the Choir of the Gran Teatre del Liceu, with the baton of the master Josep Pons, offer a concert that brings together modern visions of the tragedies of Sophocles from the eyes of two of the most brilliant composers of the 20th century: Ricard Strauss and Igor Stravinsky.',
      sponsored: true,
    },
    {
      title:
        'Liceu projects financed with the support of the Department of Culture',
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/sala_bastida_noticia.png',
      publicationDate: '12/19/2021',
      content:
        'The improvement plan for the facilities of the Gran Teatre del Liceu, which have been funded with the support of the Department of Culture of the Generalitat de Catalunya, includes the improvement of the users online experience in purchasing and consulting services through the Information and Communication Technologies (ICT), the dissemination of documents of artistic, historical and cultural value with the creation of the digital archive and the Annals platform.',
      sponsored: false,
    },
    {
      title:
        'Serena Sáenz gana el XVI Concurso Internacional de Canto Montserrat Caballé',
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_noticia_serena-saenz.png',
      publicationDate: '12/10/2021',
      content:
        'The Catalan soprano Serena Sáenz, 27, has won the First Prize of the 16th edition of the Montserrat Caballé International Singing Competition. Sáenz has also been recognized with the honorary public award and the special awards of the Castell de Peralada Festival and Gran Teatre del Liceu, which involve a contract for a future production at the Gran Teatre and another at the festival.',
      sponsored: false,
    },
    {
      title:
        "'War Requiem' de Britten arriba al Liceu amb producció escenificada",
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/warrequiem_banner.png',
      publicationDate: '12/29/2021',
      content:
        'Music and the arts merge on the stage of the Gran Teatre del Liceu with War Requiem, a play by Benjamin Britten that arrives with a stage proposal signed by stage director Daniel Kramer and the gaze of photographer and visual artist Wolfgang Tillmans. After its premiere in 2018 at the English National Opera, the production will be shown for the first time in Spain.',
      sponsored: true,
    },
    {
      title:
        'The Liceu hosts the Montserrat Caballé Contest for the first time',
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_noticia_caballe.png',
      publicationDate: '01/17/2022',
      content:
        'Montserrat Caballés dream in recent years has been to be able to create a foundation and keep alive its International Singing Competition as a springboard for new generations of young talent. In order to achieve his wishes, his family decided to create the Montserrat Caballé Private Foundation, which aims to keep alive the memory of his life and work, while promoting all the teaching work he carried out.',
      sponsored: false,
    },
    {
      title:
        'Salvador Alemany renews as president of the Gran Teatre del Liceu Foundation',
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_noticia_patronat.png',
      publicationDate: '01/06/2022',
      content:
        'Salvador Alemany has been re-elected president of the Gran Teatre del Liceu Foundation in an extraordinary Board of Trustees held today on the stage of the Teatre in the presence of all the administrations, the Societat del Liceu and the Patronage Council. The president of the Generalitat and also honorary president of the Theater, Pere Aragonès, who chaired the event, has renewed his position in Germany after consulting all the institutions of the Board for a new term of 5 years.',
      sponsored: true,
    },
    {
      title:
        "The Liceu presents 'La noche de San Juan' with choreography by Antonio Ruz",
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/nitsantjoan_portada.png',
      publicationDate: '01/28/2022',
      content:
        'The Gran Teatre del Liceu presents La nit de Sant Joan (Soirées de Barcelona), ballet with music by Robert Gerhard (1896-1970), scenography by Joan Junyer and plot by Ventura Gassol remain unpublished in 1939 by the ups and downs of the Civil War. The work had been created as a result of the fury of dance at the beginning of the 20th century, with the background of the European image of an exotic Spain and the devastating success that Falla had conquered in this field.',
      sponsored: true,
    },
    {
      title: 'Extension of the annals of the Liceu fins to 1981',
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/banner_parsifal.png',
      publicationDate: '01/07/2022',
      content:
        'The Gran Teatre del Liceu continues to expand the database it made public last year and enables a new stage of the Theater that covers the period between the 1981/82 and 1992/93 seasons. From today, users will be able to consult hundreds of photographs, hand programs and artistic information of all the operas, ballets and concerts of the last 40 years, since the death of the last businessman Joan Antoni Pàmias and the creation of the Consortium of Lyceum until the current season.',
      sponsored: true,
    },
    {
      title: 'The Futbol Club Barcelona gives its support to the Liceu',
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/futbolclubbarcelona_banner.png',
      publicationDate: '01/13/2022',
      content:
        'Joan Laporta and Elena Fort, President and Institutional Vice President of Futbol Club Barcelona, ​​and Salvador Alemany and Valentí Oviedo, President and General Manager of the Gran Teatre del Liceu Foundation, have signed a collaboration agreement by which Futbol Club Barcelona renews its support as a collaborating entity of the Liceu. Also present at the signing ceremony were Juli Guiu, Vice-President of the Marketing Department of Futbol Club Barcelona, ​​and Helena Roca, Director of Sponsorship, Patronage and Events at the Gran Teatre del Liceu Foundation.',
      sponsored: true,
    },
    {
      title: "Reading of the 'Divina Comèdia' by Dante al Liceu",
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/1280px-dante_domenico_di_michelino_duomo_florence-1.png',
      publicationDate: '12/01/2021',
      content:
        'The first activity of the season of the Gran Teatre del Liceu is linked to its theme (paradise) with a complete continuous reading in Barcelona of the Divine Comedy: one of the universal, timeless and central texts of European poetry. Coinciding with the 700th anniversary of the passing of Dante Alighieri, the Theater opens the doors of its Sala Tenor Viñas and invites all audiences to read an excerpt from the Divine Comedy, translated by Josep Maria de Segarra.',
      sponsored: false,
    },
    {
      title: 'The Liceu launches the # LiceUnder35 Community',
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/liceu_under_35_038_1_0.jpg',
      publicationDate: '01/20/2022',
      content:
        'The romantic ornamentation of the Sala Miralls and the contemporary art of Okuda San Miguel dialogue in the new proposal of the Liceu de les Arts. At the beginning of the season of the 175th anniversary of the Liceu, past and future go hand in hand, with a work that creates an intense contrast between the historical paintings of the Theater and current urban art. In this context, the Liceu is launching the ‘LiceUnder35 Community’, convinced that it is working for those who will be part of the Liceu of the future, with proposals aimed at young people under 35 years of age.',
      sponsored: false,
    },
    {
      title: "The musical 'My Fair Lady', for the first time at the Liceu",
      imgURL:
        'https://www.liceubarcelona.cat/sites/default/files/styles/noticies/public/mfl_rehearsal_07.png',
      publicationDate: '12/04/2021',
      content:
        'Considered the “perfect musical”, My Fair Lady, by Frederik Loewe, can be seen for the first time in Barcelona at the Gran Teatre del Liceu with two unique performances. The two-act musical premiered on March 15, 1956 at the Mark Hellinger Theater in New York City. It was later performed at the Broadhurst Theater and then at The Broadway Theater, where it was on the bill until 1962. The musical is based on George Bernard Shaws comedy Pygmalion (1913) and features a libretto by Alan Jay Lerner.',
      sponsored: true,
    },
  ],
};

export const users = [];
