<template>
    <sidebar-menu  :menu="menu" />
  </template>
  
  <script>
      export default {
          data() {
              return {
                  menu: [
                      {
                          header: true,
                          title: 'Amazon.com',
                          hiddenOnCollapse: true
                      },
                      {
                          href: '/',
                          title: 'Home',
                          icon: 'fa fa-user'
                      },
                      {
                          href: '/cart',
                          title: 'Cart',
                          icon: 'fa fa-chart-area',
                          
                      },
                      {
                        title: 'Categories',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/categories/electronics',
                                title: 'Electronics',
                                icon: "fa-solid fa-plug"
                            },
                            {
                                href: '/categories/mens',
                                title: 'Mens wear',
                                icon: "fa-solid fa-user-tie"
                            },
                            {
                                href:'/categories/womens',
                                title: 'Womens wear',
                                icon: "fa-solid fa-shirt"
                            },
                            {
                                href:'/categories/jewelery',
                                title: 'Jewelery',
                                icon: "fa fa-diamond"
                            }
                        ]
                      }
                  ]
              }
          }
      }
  </script>
  <style scoped>
    .v-sidebar-menu {
        background: linear-gradient(to bottom, rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5));;
    }
  </style>