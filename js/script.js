const app = new Vue({
  el: "#app",
  data: {
    // logo NavBar
    logoSrc: "img/dark-logo.png",
    altLogo: "Max Coach logo",
    // logo NavBar

    // nav menu-link
    menuList:[
      {
        title: 'home',
        linkList:[
          {
            nameLink: 'prova1',
            href: '#'
          },
          {
            nameLink: 'prova2',
            href: '#'
          },
          {
            nameLink: 'Lorem ipsum dolor sit amet jnxcaslxdmaxp ksnax k-òmxC',
            href: '#'
          },
        ]
      },
      {
        title: 'pages',
        linkList:[
          {
            nameLink: 'prova1',
            href: '#'
          },
          {
            nameLink: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
            href: '#'
          }
        ]
      },
      {
        title: 'courses',
        linkList:[
          {
            nameLink: 'prova1',
            href: '#'
          },
          {
            nameLink: 'prova2',
            href: '#'
          }
        ]
      },
      {
        title: 'features',
        linkList:[
          {
            nameLink: 'prova1',
            href: '#'
          }
        ]
      },
      {
        title: 'blog',
        linkList:[
          {
            nameLink: 'prova1',
            href: '#'
          }
        ]
      },
      {
        title: 'shop',
        linkList:[
          {
            nameLink: 'prova1',
            href: '#'
          }
        ]
      },
    ],
    // /nav menu-link

    partnersLogo: [
      {
        brand: "we",
        logo: "img/client-logo-01.png"
      },
      {
        brand: "",
        logo: "img/client-logo-02.png"
      },
      {
        brand: "",
        logo: "img/client-logo-03.png"
      },
      {
        brand: "",
        logo: "img/client-logo-04.png"
      },
      {
        brand: "",
        logo: "img/client-logo-05.png"
      },
      {
        brand: "",
        logo: "img/client-logo-06.png"
      }
    ]

  }
});
