const app = new Vue({
  el: "#app",
  data: {

    // header NAV BAR
    // logo NavBar
    logoSrc: "img/dark-logo.png",
    altLogo: "Max Coach logo",
    // logo NavBar

    // nav menu-link
    navMenuList:[
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
    // /header NAV BAR

    // HERO partners logo
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
    ],
    // HERO partners logo

    // featured courses link/info
    featuredCourses: [
      {
        href: "https://www.google.it/",
        img: "img/course-photo1.jpg",
        price: {
          int: "$40",
          float: ".00"
        },
        name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        others: [
          {
            icon: "far fa-file-alt",
            type: "Lessons",
            value: 3
          },
          {
            icon: "far fa-user",
            type: "Students",
            value: 10
          },
          {
            icon: "far fa-flag",
            type: "Language",
            value: "En"
          },
        ]
      },
      {
        href: "#",
        img: "img/stock-full-hd-03-480x298.jpg",
        price: {
          int: "Free",
          float: ""
        },
        name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ",
        others: [
          {
            icon: "far fa-file-alt",
            type: "Lessons",
            value: 3
          },
          {
            icon: "far fa-user",
            type: "Students",
            value: 10
          }
        ]
      },
      {
        href: "#",
        img: "img/stock-full-hd-04-480x298.jpg",
        price: {
          int: "$19",
          float: ".00"
        },
        name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ",
        others: [
          {
            icon: "far fa-file-alt",
            type: "Lessons",
            value: 3
          },
          {
            icon: "far fa-user",
            type: "Students",
            value: 10
          }
        ]
      },
      {
        href: "#",
        img: "img/stock-full-hd-05-480x298.jpg",
        price: {
          int: "$26",
          float: ".00"
        },
        name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ",
        others: [
          {
            icon: "far fa-file-alt",
            type: "Lessons",
            value: 3
          },
          {
            icon: "far fa-user",
            type: "Students",
            value: 10
          }
        ]
      },
      {
        href: "#",
        img: "img/stock-full-hd-06-480x298.jpg",
        price: {
          int: "$39",
          float: ".00"
        },
        name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        others: [
          {
            icon: "far fa-file-alt",
            type: "Lessons",
            value: 3
          },
          {
            icon: "far fa-user",
            type: "Students",
            value: 10
          }
        ]
      },
      {
        href: "#",
        img: "img/course-featured-image-01-480x298.jpg",
        price: {
          int: "$59",
          float: ".00"
        },
        name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        others: [
          {
            icon: "far fa-file-alt",
            type: "Lessons",
            value: 3
          },
          {
            icon: "far fa-user",
            type: "Students",
            value: 10
          }
        ]
      }
    ],
    // featured courses link/info

    // FOOTER Lists
    // /footer EXPLORE
    footerExploreLink: [
      {
        nameLink: 'explore',
        href: '#'
      },
      {
        nameLink: 'prova2',
        href: '#'
      },
      {
        nameLink: 'prova2',
        href: '#'
      },
      {
        nameLink: 'prova2',
        href: '#'
      },
      {
        nameLink: 'prova2',
        href: '#'
      },
      {
        nameLink: 'prova2',
        href: '#'
      }
    ],
    // /footer EXPLORE

    // footer INFORMATIONS
    footerInfoLink: [
      {
        nameLink: 'info',
        href: '#'
      },
      {
        nameLink: 'prova2',
        href: '#'
      },
      {
        nameLink: 'prova2',
        href: '#'
      },
      {
        nameLink: 'prova2',
        href: '#'
      }
    ]
    // /footer INFORMATIONS
    // /FOOTER Lists
  }
});
