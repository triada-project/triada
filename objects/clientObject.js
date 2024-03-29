const clients = [
  {
    id: 1,
    name: "Roberto Carlos",
    role: "client",
    email: "roberto.carlos@example.com",
    password: "da1sd657",
    location: {
      city: "Jalisco",
      town: "Zapopan",
    },
    profilePicture: {
      key_id: "1",
      url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "client",
    email: "zoey.lang@example.com",
    password: "da1sd657",
    location: {
      city: "Nuevo León",
      town: "Monterrey",
    },
    profilePicture: {
      key_id: "2",
      url: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "client",
    email: "jane.fisher@example.com",
    password: "da1sd657",
    location: {
      city: "Nuevo León",
      town: "Monterrey",
    },
    profilePicture: {
      key_id: "3",
      url: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
  },
];

const events = [
  {
    id: 1,
    eventType: "Fiesta",
    date: "26/03/2024",
    hourStart: "9:00 pm",
    hourEnd: "10:00 pm",
    adress: {
      city: "Jalisco",
      town: "Zapopan",
      street: "Calle Zarzamora",
      exteriorNumber: "123",
      neighborhood: "Centro",
    },
    eventCost: 5000,
    status: {
      pending: true,
      active: false,
      finalized: false,
      rejected: false,
    },
    eventConfirmationCode: 135406,
    id_stripe_payment:
      "pi_3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJ",
    client: {
      id: 1,
      name: "Roberto Carlos",
      role: "client",
      email: "roberto.carlos@example.com",
      password: "da1sd657",
      location: {
        city: "Jalisco",
        town: "Zapopan",
      },
      profilePicture: {
        key_id: "1",
        url: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      },
    },
    musician: {
      _id: "PQ3fAWlGX7kL4s8nf4wO",
      name: "Argentina Durán",
      email: "piano@example.com",
      password: "piano",
      roll: "musician",
      profilePicture: [
        {
          key_id: "PQ3img",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Argentina_Dur%C3%A1n_Fern%C3%A1ndez.jpg/800px-Argentina_Dur%C3%A1n_Fern%C3%A1ndez.jpg",
        },
      ],
      musicianType: [
        {
          solist: true,
          band: false,
        },
      ],
      eventType: ["Conciertos en recintos", "Coorporativos"],
      musicalGenere: ["Clásico", "Piano", "Tradicional mexicana"],
      repertory: [
        {
          title: "Song 1",
          author: "Author 1",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 2",
          author: "Author 2",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 3",
          author: "Author 3",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 4",
          author: "Author 4",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 5",
          author: "Author 5",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
      ],
      description:
        "Con una carrera que abarca décadas, Argentina Durán ha establecido su reputación como una de las principales intérpretes de música clásica. Su habilidad técnica y su capacidad para transmitir emociones a través de las teclas del piano la han convertido en una figura destacada en el mundo de la música.",
      multimedia: [
        {
          pics: [
            "https://www.elsoldepuebla.com.mx/gossip/6c9uge-la-pianista-argentina-duran-esta-de-vuelta-en-puebla-te-decimos-donde-y-cuando/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20est%C3%A1%20de%20vuelta%20en%20Puebla,%20te%20decimos%20d%C3%B3nde%20y%20cu%C3%A1ndo",
            "https://tecolotito.elsiglodetorreon.com.mx/i/2022/10/1609865.jpeg",
            "https://th.bing.com/th/id/OIP.b0W8k6W7m4HsBs159AjNMQHaEk?rs=1&pid=ImgDetMain",
            "https://www.elsoldepuebla.com.mx/gossip/8dpg7i-la-pianista-argentina-duran-dara-show-gratuito-en-puebla/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20dar%C3%A1%20show%20gratuito%20en%20Puebla",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUdokOXz8680EScg3KyLB4_1yBMADhLC7bk5Z6FKfpsQCheaimnx9MXwQu_JZRM37Gih3DUgwO-16yRYXOSw98C2r9tEv_IsUAcXUQ8zg-Qx_4Lv7h_F4d6brt6v9DwWhEZiyTdr6NyZosPfmT5iJHaE8Kx3OQR-ntu94QqlfGuN-QQD95bHm-pw/s1240/280755277_542626507306423_68072614643326139_n.jpg",
          ],
          videos: [
            "https://www.youtube.com/watch?v=00TLrFv8ppI&t=1332s",
            "https://www.youtube.com/watch?v=kZKcHnQXksw",
            "https://www.youtube.com/watch?v=NsvDK26WvA0",
            "https://www.youtube.com/watch?v=d6RrGeLrgSk",
            "https://www.youtube.com/watch?v=VqN8X0RGp-c",
          ],
        },
      ],
      eventFee: "$7000.00",
      idStripeConnect: "kL4s8n",
      schedule: "scheduleObjectId?",
    },
  },
  {
    id: 2,
    eventType: "Boda",
    date: "30/05/2024",
    hourStart: "7:00 pm",
    hourEnd: "10:00 pm",
    adress: {
      city: "Nuevo León",
      town: "Monterrey",
      street: "Zaragoza",
      exteriorNumber: "321",
      neighborhood: "Juarez",
    },
    eventCost: 10000,
    status: {
      pending: false,
      active: true,
      finalized: false,
      rejected: false,
    },
    eventConfirmationCode: 457896,
    id_stripe_payment:
      "pi_3J4XJbA3J4XJbA3ADASJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJ",
    client: {
      id: 2,
      name: "Zoey Lang",
      role: "client",
      email: "zoey.lang@example.com",
      password: "da1sd657",
      location: {
        city: "Nuevo León",
        town: "Monterrey",
      },
      profilePicture: {
        key_id: "2",
        url: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      },
    },
    musician: {
      _id: "PQ3fAWlGX7kL4s8nf4wO",
      name: "Argentina Durán",
      email: "piano@example.com",
      password: "piano",
      roll: "musician",
      profilePicture: [
        {
          key_id: "PQ3img",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Argentina_Dur%C3%A1n_Fern%C3%A1ndez.jpg/800px-Argentina_Dur%C3%A1n_Fern%C3%A1ndez.jpg",
        },
      ],
      musicianType: [
        {
          solist: true,
          band: false,
        },
      ],
      eventType: ["Conciertos en recintos", "Coorporativos"],
      musicalGenere: ["Clásico", "Piano", "Tradicional mexicana"],
      repertory: [
        {
          title: "Song 1",
          author: "Author 1",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 2",
          author: "Author 2",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 3",
          author: "Author 3",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 4",
          author: "Author 4",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 5",
          author: "Author 5",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
      ],
      description:
        "Con una carrera que abarca décadas, Argentina Durán ha establecido su reputación como una de las principales intérpretes de música clásica. Su habilidad técnica y su capacidad para transmitir emociones a través de las teclas del piano la han convertido en una figura destacada en el mundo de la música.",
      multimedia: [
        {
          pics: [
            "https://www.elsoldepuebla.com.mx/gossip/6c9uge-la-pianista-argentina-duran-esta-de-vuelta-en-puebla-te-decimos-donde-y-cuando/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20est%C3%A1%20de%20vuelta%20en%20Puebla,%20te%20decimos%20d%C3%B3nde%20y%20cu%C3%A1ndo",
            "https://tecolotito.elsiglodetorreon.com.mx/i/2022/10/1609865.jpeg",
            "https://th.bing.com/th/id/OIP.b0W8k6W7m4HsBs159AjNMQHaEk?rs=1&pid=ImgDetMain",
            "https://www.elsoldepuebla.com.mx/gossip/8dpg7i-la-pianista-argentina-duran-dara-show-gratuito-en-puebla/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20dar%C3%A1%20show%20gratuito%20en%20Puebla",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUdokOXz8680EScg3KyLB4_1yBMADhLC7bk5Z6FKfpsQCheaimnx9MXwQu_JZRM37Gih3DUgwO-16yRYXOSw98C2r9tEv_IsUAcXUQ8zg-Qx_4Lv7h_F4d6brt6v9DwWhEZiyTdr6NyZosPfmT5iJHaE8Kx3OQR-ntu94QqlfGuN-QQD95bHm-pw/s1240/280755277_542626507306423_68072614643326139_n.jpg",
          ],
          videos: [
            "https://www.youtube.com/watch?v=00TLrFv8ppI&t=1332s",
            "https://www.youtube.com/watch?v=kZKcHnQXksw",
            "https://www.youtube.com/watch?v=NsvDK26WvA0",
            "https://www.youtube.com/watch?v=d6RrGeLrgSk",
            "https://www.youtube.com/watch?v=VqN8X0RGp-c",
          ],
        },
      ],
      eventFee: "$7000.00",
      idStripeConnect: "kL4s8n",
      schedule: "scheduleObjectId?",
    },
  },
  {
    id: 3,
    eventType: "Coporativo",
    date: "25/04/2024",
    hourStart: "9:00 pm",
    hourEnd: "11:00 pm",
    adress: {
      city: "CDMX",
      town: "Tlalpan",
      street: "Primero de Mayo",
      exteriorNumber: "456",
      neighborhood: "Verde Valle",
    },
    eventCost: 15000,
    status: {
      pending: false,
      active: false,
      finalized: true,
      rejected: false,
    },
    eventConfirmationCode: 234589,
    id_stripe_payment:
      "pi_3J4XJbA3J4XJbA3DASDASDJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJ",
    client: {
      id: 3,
      name: "Jane Fisher",
      role: "client",
      email: "jane.fisher@example.com",
      password: "da1sd657",
      location: {
        city: "Nuevo León",
        town: "Monterrey",
      },
      profilePicture: {
        key_id: "3",
        url: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      },
    },
    musician: {
      _id: "PQ3fAWlGX7kL4s8nf4wO",
      name: "Argentina Durán",
      email: "piano@example.com",
      password: "piano",
      roll: "musician",
      profilePicture: [
        {
          key_id: "PQ3img",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Argentina_Dur%C3%A1n_Fern%C3%A1ndez.jpg/800px-Argentina_Dur%C3%A1n_Fern%C3%A1ndez.jpg",
        },
      ],
      musicianType: [
        {
          solist: true,
          band: false,
        },
      ],
      eventType: ["Conciertos en recintos", "Coorporativos"],
      musicalGenere: ["Clásico", "Piano", "Tradicional mexicana"],
      repertory: [
        {
          title: "Song 1",
          author: "Author 1",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 2",
          author: "Author 2",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 3",
          author: "Author 3",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 4",
          author: "Author 4",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 5",
          author: "Author 5",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
      ],
      description:
        "Con una carrera que abarca décadas, Argentina Durán ha establecido su reputación como una de las principales intérpretes de música clásica. Su habilidad técnica y su capacidad para transmitir emociones a través de las teclas del piano la han convertido en una figura destacada en el mundo de la música.",
      multimedia: [
        {
          pics: [
            "https://www.elsoldepuebla.com.mx/gossip/6c9uge-la-pianista-argentina-duran-esta-de-vuelta-en-puebla-te-decimos-donde-y-cuando/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20est%C3%A1%20de%20vuelta%20en%20Puebla,%20te%20decimos%20d%C3%B3nde%20y%20cu%C3%A1ndo",
            "https://tecolotito.elsiglodetorreon.com.mx/i/2022/10/1609865.jpeg",
            "https://th.bing.com/th/id/OIP.b0W8k6W7m4HsBs159AjNMQHaEk?rs=1&pid=ImgDetMain",
            "https://www.elsoldepuebla.com.mx/gossip/8dpg7i-la-pianista-argentina-duran-dara-show-gratuito-en-puebla/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20dar%C3%A1%20show%20gratuito%20en%20Puebla",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUdokOXz8680EScg3KyLB4_1yBMADhLC7bk5Z6FKfpsQCheaimnx9MXwQu_JZRM37Gih3DUgwO-16yRYXOSw98C2r9tEv_IsUAcXUQ8zg-Qx_4Lv7h_F4d6brt6v9DwWhEZiyTdr6NyZosPfmT5iJHaE8Kx3OQR-ntu94QqlfGuN-QQD95bHm-pw/s1240/280755277_542626507306423_68072614643326139_n.jpg",
          ],
          videos: [
            "https://www.youtube.com/watch?v=00TLrFv8ppI&t=1332s",
            "https://www.youtube.com/watch?v=kZKcHnQXksw",
            "https://www.youtube.com/watch?v=NsvDK26WvA0",
            "https://www.youtube.com/watch?v=d6RrGeLrgSk",
            "https://www.youtube.com/watch?v=VqN8X0RGp-c",
          ],
        },
      ],
      eventFee: "$7000.00",
      idStripeConnect: "kL4s8n",
      schedule: "scheduleObjectId?",
    },
  },
  {
    id: 4,
    eventType: "Cena",
    date: "31/12/2024",
    hourStart: "9:00 pm",
    hourEnd: "11:00 pm",
    adress: {
      city: "Chihuahua",
      town: "Acuña",
      street: "Morones",
      exteriorNumber: "987",
      neighborhood: "Moctezuma",
    },
    eventCost: 8000,
    status: {
      pending: false,
      active: false,
      finalized: false,
      rejected: true,
    },
    eventConfirmationCode: 655487,
    id_stripe_payment:
      "pi_3J4XJbA3J4XJbA3DASASDASDCXDJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJbA3J4XJ",
    client: {
      id: 3,
      name: "Jane Fisher",
      role: "client",
      email: "jane.fisher@example.com",
      password: "da1sd657",
      location: {
        city: "Nuevo León",
        town: "Monterrey",
      },
      profilePicture: {
        key_id: "3",
        url: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      },
    },
    musician: {
      _id: "PQ3fAWlGX7kL4s8nf4wO",
      name: "Argentina Durán",
      email: "piano@example.com",
      password: "piano",
      roll: "musician",
      profilePicture: [
        {
          key_id: "PQ3img",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Argentina_Dur%C3%A1n_Fern%C3%A1ndez.jpg/800px-Argentina_Dur%C3%A1n_Fern%C3%A1ndez.jpg",
        },
      ],
      musicianType: [
        {
          solist: true,
          band: false,
        },
      ],
      eventType: ["Conciertos en recintos", "Coorporativos"],
      musicalGenere: ["Clásico", "Piano", "Tradicional mexicana"],
      repertory: [
        {
          title: "Song 1",
          author: "Author 1",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 2",
          author: "Author 2",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 3",
          author: "Author 3",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 4",
          author: "Author 4",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
        {
          title: "Song 5",
          author: "Author 5",
          eventType: ["Conciertos en recintos", "Coorporativos"],
        },
      ],
      description:
        "Con una carrera que abarca décadas, Argentina Durán ha establecido su reputación como una de las principales intérpretes de música clásica. Su habilidad técnica y su capacidad para transmitir emociones a través de las teclas del piano la han convertido en una figura destacada en el mundo de la música.",
      multimedia: [
        {
          pics: [
            "https://www.elsoldepuebla.com.mx/gossip/6c9uge-la-pianista-argentina-duran-esta-de-vuelta-en-puebla-te-decimos-donde-y-cuando/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20est%C3%A1%20de%20vuelta%20en%20Puebla,%20te%20decimos%20d%C3%B3nde%20y%20cu%C3%A1ndo",
            "https://tecolotito.elsiglodetorreon.com.mx/i/2022/10/1609865.jpeg",
            "https://th.bing.com/th/id/OIP.b0W8k6W7m4HsBs159AjNMQHaEk?rs=1&pid=ImgDetMain",
            "https://www.elsoldepuebla.com.mx/gossip/8dpg7i-la-pianista-argentina-duran-dara-show-gratuito-en-puebla/ALTERNATES/LANDSCAPE_1140/La%20pianista%20Argentina%20Dur%C3%A1n%20dar%C3%A1%20show%20gratuito%20en%20Puebla",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUdokOXz8680EScg3KyLB4_1yBMADhLC7bk5Z6FKfpsQCheaimnx9MXwQu_JZRM37Gih3DUgwO-16yRYXOSw98C2r9tEv_IsUAcXUQ8zg-Qx_4Lv7h_F4d6brt6v9DwWhEZiyTdr6NyZosPfmT5iJHaE8Kx3OQR-ntu94QqlfGuN-QQD95bHm-pw/s1240/280755277_542626507306423_68072614643326139_n.jpg",
          ],
          videos: [
            "https://www.youtube.com/watch?v=00TLrFv8ppI&t=1332s",
            "https://www.youtube.com/watch?v=kZKcHnQXksw",
            "https://www.youtube.com/watch?v=NsvDK26WvA0",
            "https://www.youtube.com/watch?v=d6RrGeLrgSk",
            "https://www.youtube.com/watch?v=VqN8X0RGp-c",
          ],
        },
      ],
      eventFee: "$7000.00",
      idStripeConnect: "kL4s8n",
      schedule: "scheduleObjectId?",
    },
  },
];

export { clients, events };
