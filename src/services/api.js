export function loadLists() {
  return [
    {
      title: "Backlog",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#eabfb9"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 2,
          content:
            "Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy",
          labels: ["#eabfb9"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
          labels: ["#eabfb9"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 4,
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ["#b86b77"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 5,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#b86b77"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        }
      ]
    },
    {
      title: "To-do",
      creatable: true,
      cards: [
        {
          id: 6,
          content: "Recriando clone do Pipefy",
          labels: [],
          user: "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png"
        }
      ]
    },
    {
      title: "In Progress",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Gravar sobre Geolocalização e mapas com React Native",
          labels: ["#eabfb9"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 8,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#b86b77"],
          user: "https://api.adorable.io/avatars/285/abott@adorable.png"
        },
        {
          id: 9,
          content: "Ajustes na biblioteca unform",
          labels: []
        }
      ]
    },
    {
      title: "Done",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Gravar aula sobre deploy e CI com React Native",
          labels: []
        },
        {
          id: 12,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#b86b77"]
        },
        {
          id: 13,
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#eabfb9"]
        }
      ]
    }
  ];
}