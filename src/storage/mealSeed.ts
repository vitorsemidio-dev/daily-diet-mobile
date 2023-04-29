import { mealCreate } from './mealCreate';

interface Meal {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
}

const meals: Meal[] = [
  {
    id: new Date().getTime(),
    name: 'Café da Manhã',
    description: 'Pão integral, queijo branco e suco de laranja',
    date: '11.04.2023',
    hour: '07:30',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Almoço',
    description: 'Frango grelhado, arroz integral, feijão e salada de tomate',
    date: '11.04.2023',
    hour: '12:30',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Jantar',
    description: 'Salmão grelhado, batata-doce assada e brócolis',
    date: '11.04.2023',
    hour: '18:30',
    isDiet: true,
  },

  {
    id: new Date().getTime(),
    name: 'Café da Manhã',
    description: 'Pão integral, queijo branco e suco de laranja',
    date: '12.04.2023',
    hour: '07:30',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Almoço',
    description: 'Frango grelhado, arroz integral, feijão e salada de tomate',
    date: '12.04.2023',
    hour: '12:30',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Jantar',
    description: 'Salmão grelhado, batata-doce assada e brócolis',
    date: '12.04.2023',
    hour: '18:30',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Café da Manhã',
    description: 'Omelete de queijo e tomate, pão integral e café com leite',
    date: '13.04.2023',
    hour: '07:00',
    isDiet: false,
  },
  {
    id: new Date().getTime(),
    name: 'Almoço',
    description: 'Macarrão ao molho branco, filé de frango e salada de alface',
    date: '13.04.2023',
    hour: '12:00',
    isDiet: false,
  },
  {
    id: new Date().getTime(),
    name: 'Jantar',
    description: 'Hambúrguer, batata frita e refrigerante',
    date: '13.04.2023',
    hour: '19:00',
    isDiet: false,
  },
  {
    id: new Date().getTime(),
    name: 'Café da Manhã',
    description: 'Café com leite, pão com manteiga e geleia, fruta',
    date: '14.04.2023',
    hour: '08:00',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Almoço',
    description: 'Arroz, feijão, bife acebolado e salada de cenoura',
    date: '14.04.2023',
    hour: '12:30',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Jantar',
    description: 'Peixe grelhado, purê de batata e salada de repolho',
    date: '14.04.2023',
    hour: '19:30',
    isDiet: true,
  },

  {
    id: new Date().getTime(),
    name: 'Café da Manhã',
    description: 'Tapioca com queijo e café com leite',
    date: '15.04.2023',
    hour: '07:00',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Almoço',
    description: 'Strogonoff de frango, arroz branco e salada de alface',
    date: '15.04.2023',
    hour: '12:30',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Jantar',
    description: 'Sopa de legumes e pão integral',
    date: '15.04.2023',
    hour: '19:00',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Café da Manhã',
    description: 'Café com leite, pão com manteiga e geleia, fruta',
    date: '16.04.2023',
    hour: '08:00',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Almoço',
    description: 'Arroz integral, feijão preto, carne moída e couve refogada',
    date: '16.04.2023',
    hour: '12:30',
    isDiet: false,
  },
  {
    id: new Date().getTime(),
    name: 'Jantar',
    description: 'Pizza de calabresa e refrigerante',
    date: '16.04.2023',
    hour: '19:30',
    isDiet: false,
  },
  {
    id: new Date().getTime(),
    name: 'Café da Manhã',
    description: 'Omelete de frango e tomate, pão integral e café com leite',
    date: '17.04.2023',
    hour: '07:00',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Almoço',
    description: 'Peixe assado, arroz integral, legumes no vapor',
    date: '17.04.2023',
    hour: '12:00',
    isDiet: true,
  },
  {
    id: new Date().getTime(),
    name: 'Jantar',
    description: 'Frango à passarinho e batata frita',
    date: '17.04.2023',
    hour: '19:00',
    isDiet: false,
  },
  {
    id: new Date().getTime(),
    name: 'Café da Manhã',
    description: 'Café com leite, pão com requeijão e fruta',
    date: '18.04.2023',
    hour: '08:00',
    isDiet: true,
  },
];

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function mealSeed() {
  console.log('Criando refeições...');
  for (const meal of meals) {
    await mealCreate(meal);
    console.log(`Refeição ${meal.name} criada!`);
    await delay(1000);
  }
  console.log('Refeições criadas!');
}
