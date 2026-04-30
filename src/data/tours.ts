export interface Tour {
  id: string;
  title: string;
  highlights: string[];
  paragraphs: string[];
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export const tours: Tour[] = [
  {
    id: 'lagoa-azul',
    title: 'Circuito Lagoa Azul 4X4',
    highlights: ['Saída: 9h', 'Retorno: 13h30', 'Veículo 4×4'],
    paragraphs: [
      'O passeio se inicia saindo do hotel ou pousada em Barreirinhas, em veículo 4×4, com uma parada em um supermercado para compra de água. Depois, o trajeto continua com a travessia em uma balsa pelo Rio Preguiças, com duração de 3 minutos.',
      'O carro segue o percurso na trilha com duração de 40 minutos, até chegarmos ao Parque Nacional dos Lençóis Maranhenses.',
      'Chegando nas dunas, iniciaremos o percurso caminhando, acompanhados do guia local para conhecer as principais lagoas e dunas, entre elas se destacam: Lagoa Azul, Lagoa da Esmeralda e Lagoa do Peixe (com parada para banho em cada uma).',
    ],
    image: '/images/passeio-lagoa-azul.jpeg',
    imageAlt: 'Veículo 4x4 nas dunas do Circuito Lagoa Azul nos Lençóis Maranhenses',
    whatsappMessage: 'Olá! Gostaria de reservar o passeio Circuito Lagoa Azul 4X4.',
  },
  {
    id: 'lagoa-bonita',
    title: 'Circuito Lagoa Bonita 4X4 – Pôr do Sol',
    highlights: ['Saída: 14h', 'Retorno: após o pôr do sol (~19h)', 'Veículo 4×4'],
    paragraphs: [
      'Localizada em um dos pontos de dunas mais altas dos Lençóis Maranhenses, a Lagoa Bonita se destaca pela bela composição da paisagem.',
      'O passeio se inicia saindo do hotel ou pousada em Barreirinhas em veículo 4×4, com uma parada no supermercado para compra de água. Depois, o trajeto continua com a travessia em uma balsa pelo Rio Preguiças (3 minutos) e percurso de 1h em 4×4 até o Parque Nacional dos Lençóis Maranhenses.',
      'Ao chegar no ponto inicial, o visitante subirá uma escadaria de 144 degraus. Após isso, fará uma caminhada visitando as principais lagoas: Bonita e Maçarico.',
      'Por volta das 17h40, subimos uma duna para contemplar o pôr do sol. Em seguida, retornamos com previsão de chegada às 19h.',
    ],
    image: '/images/passeio-lagoa-bonita.jpeg',
    imageAlt: 'Pôr do sol visto da Lagoa Bonita nos Lençóis Maranhenses',
    whatsappMessage: 'Olá! Gostaria de reservar o passeio Circuito Lagoa Bonita 4X4 – Pôr do Sol.',
  },
  {
    id: 'combo-lagoas',
    title: 'Circuito Combo das Lagoas',
    highlights: ['Saída: 9h', 'Retorno: ~19h (após pôr do sol)', 'Dia inteiro'],
    paragraphs: [
      'Neste passeio são visitadas as duas lagoas no mesmo dia. Pela manhã a Lagoa Azul e pela tarde a Lagoa Bonita.',
      'Saímos às 9h e retornamos após o pôr do sol. Previsão de chegada às 19h em Barreirinhas.',
    ],
    image: '/images/passeio-combo-lagoas.jpeg',
    imageAlt: 'Lagoas cristalinas entre dunas brancas nos Lençóis Maranhenses',
    whatsappMessage: 'Olá! Gostaria de reservar o Circuito Combo das Lagoas.',
  },
  {
    id: 'rio-preguicas',
    title: 'Passeio Lancha Voadeira Pelo Rio Preguiças',
    highlights: ['Saída: 8h30', 'Retorno: ~15h30', 'Lancha voadeira'],
    paragraphs: [
      'O embarque será feito em lancha voadeira na beira do rio, descendo o Rio Preguiças, do curso médio até o inferior, conhecendo pontos incríveis.',
      'A primeira parada é na região de Vassouras, para visitar os Pequenos Lençóis Maranhenses e conhecer a fauna local — destaca-se por uma grande quantidade de macacos-prego que vivem na região.',
      'A segunda parada é no povoado Mandacaru, pequena comunidade de pescadores, onde é possível subir no Farol Preguiças, com vista panorâmica dos Lençóis Maranhenses, do Rio Preguiças e do mar.',
      'Por último, chegamos à praia de Caburé, para almoçar (não incluído) e tomar banho de rio ou mar. Saída de Caburé às 14h30, chegando a Barreirinhas por volta das 15h30.',
    ],
    image: '/images/passeio-rio-preguicas.jpeg',
    imageAlt: 'Lancha voadeira navegando pelo Rio Preguiças em Barreirinhas',
    whatsappMessage: 'Olá! Gostaria de reservar o Passeio de Lancha Voadeira pelo Rio Preguiças.',
  },
  {
    id: 'atins',
    title: 'Circuito 4X4 Atins / Canto de Atins',
    highlights: ['Saída: 8h30', 'Retorno: ~17h', 'Veículo 4×4'],
    paragraphs: [
      'O passeio se inicia saindo do hotel em Barreirinhas em veículo 4×4. O trajeto continua com a travessia em balsa pelo Rio Preguiças (3 minutos).',
      'Em seguida, realizamos um percurso de trilha que dura em média 2h30, com parada para banho nas lagoas, até a Foz do Rio Preguiças, onde visualizaremos o encontro do rio com o Oceano Atlântico.',
      'Seguimos percurso de 15 minutos em 4×4 até o Canto do Atins, com parada para almoço no restaurante (opcional: Sra. Luzia ou Sr. Antônio).',
      'Logo após, voltamos para Barreirinhas com uma parada para mergulho de 30 minutos. Chegada por volta das 17h.',
    ],
    image: '/images/passeio-atins.jpeg',
    imageAlt: 'Praia e dunas no Canto de Atins com encontro do rio com o mar',
    whatsappMessage: 'Olá! Gostaria de reservar o Circuito 4X4 Atins/Canto de Atins.',
  },
  {
    id: 'cardosa',
    title: 'Circuito 4X4 Povoado Cardosa (Boia Cross)',
    highlights: ['Saída: 8h30', 'Retorno: ~13h30', 'Boia Cross no Rio Formiga'],
    paragraphs: [
      'O passeio se inicia em veículo 4×4, com percurso de 1h20 até o povoado Cardosa.',
      'No local, pegaremos as boias para fazer flutuação no Rio Formiga — rio de águas cristalinas, banho refrescante e uma ótima opção para mergulho.',
      'A descida pelo rio dura em média 1h, sem correntezas fortes. Chegada em Barreirinhas por volta das 13h30.',
    ],
    image: '/images/passeio-cardosa.jpeg',
    imageAlt: 'Flutuação com boia cross no Rio Formiga de águas cristalinas no Povoado Cardosa',
    whatsappMessage: 'Olá! Gostaria de reservar o Circuito 4X4 Povoado Cardosa (Boia Cross).',
  },
  {
    id: 'quadriciclo',
    title: 'Passeio Quadriciclo Pequenos Lençóis',
    highlights: ['Saída: 8h30 / 9h', 'Retorno: ~17h30', 'Quadriciclo (até 2 pessoas)'],
    paragraphs: [
      'O quadriciclo leva, no máximo, duas pessoas. Antes do passeio, o guia passa instruções de como pilotar a máquina.',
      'Após todos estarem aptos, sairemos em fila num percurso de 2h30, passando pelos Pequenos Lençóis e pela costa litorânea até chegar à praia de Caburé. É importante comprar água e lanche para consumo durante o percurso.',
      'Chegada em Caburé por volta das 12h30. Parada para almoço (não incluso). Banho de mar, rio e lagoas também faz parte dessa aventura.',
      'Retorno a Barreirinhas com previsão de chegada às 17h30.',
    ],
    image: '/images/passeio-quadriciclo.jpeg',
    imageAlt: 'Quadriciclo percorrendo os Pequenos Lençóis Maranhenses',
    whatsappMessage: 'Olá! Gostaria de reservar o Passeio de Quadriciclo nos Pequenos Lençóis.',
  },
  {
    id: 'santo-amaro',
    title: 'Circuito Santo Amaro',
    highlights: ['Saída: 8h', 'Retorno: ~19h30', 'Veículo 4×4 + Pôr do Sol'],
    paragraphs: [
      'Daremos início a uma viagem de 1h30 de asfalto até o município de Santo Amaro. Ao chegar, faremos uma parada no restaurante para reservar o almoço (não incluso).',
      'Na sequência, visitaremos as primeiras lagoas: Lagoa do Recanto, Andorinha, Gaivota e Serra. Todo percurso é feito de 4×4, pura emoção!',
      'Depois, seguimos para o circuito Bethânia, visitando as lagoas: Toco, Junco, Ilha e Piscina.',
      'O almoço geralmente é realizado por volta das 12h30. Faremos um breve descanso para terminarmos as visitas, apreciar o pôr do sol e retornar a Barreirinhas. Previsão de chegada às 19h30.',
    ],
    image: '/images/passeio-santo-amaro.jpeg',
    imageAlt: 'Lagoas do Circuito Santo Amaro nos Lençóis Maranhenses',
    whatsappMessage: 'Olá! Gostaria de reservar o Circuito Santo Amaro.',
  },
  {
    id: 'bate-volta',
    title: 'Bate e Volta – Pôr do Sol',
    highlights: ['Saída: 6h30 / 7h', 'Retorno: ~23h30', 'Saindo de São Luís'],
    paragraphs: [
      'Saindo dos hotéis em São Luís, iremos percorrer 270km (4h de viagem), com uma parada no município de Morros (van ou micro van). Previsão de chegada às 11h45 em Barreirinhas.',
      'Parada para almoço livre (não incluso). Às 14h, o carro passa para embarcar e iniciarmos o circuito Lagoa Bonita – Pôr do Sol.',
      'Visitaremos as lagoas e dunas do Parque Nacional dos Lençóis Maranhenses até as 17h45, onde todos se reúnem na duna mais alta para contemplação do pôr do sol.',
      'Em seguida retornamos, trocamos de roupa e seguimos para São Luís às 19h30. Previsão de chegada às 23h30.',
    ],
    image: '/images/passeio-lagoa-bonita.jpeg',
    imageAlt: 'Pôr do sol nas dunas do Parque Nacional dos Lençóis Maranhenses',
    whatsappMessage: 'Olá! Gostaria de reservar o passeio Bate e Volta – Pôr do Sol.',
  },
  {
    id: 'transfers',
    title: 'Transfers',
    highlights: ['Compartilhado ou Privado', 'Várias rotas', 'Horários flexíveis'],
    paragraphs: [
      'São Luís → Barreirinhas / Barreirinhas → São Luís: Saídas às 04h, 07h, 14h, 17h. Retorno às 08h30, 16h30, 19h30. Todos os horários são compartilhados. O transfer privado sai a qualquer horário.',
      'São Luís → Santo Amaro / Santo Amaro → São Luís: Somente Privado.',
      'Barreirinhas → Atins / Atins → Barreirinhas: Somente Privado.',
    ],
    image: '/images/passeio-transfers.jpeg',
    imageAlt: 'Transfer entre São Luís e Barreirinhas para os Lençóis Maranhenses',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os Transfers.',
  },
];

export const whatsappNumber = '5598983044843';
