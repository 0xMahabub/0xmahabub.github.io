<script lang="ts">
  // interfaces
  interface pageLink {
    name: string;
    route: string;
    icon?: string;
  }

  let name: string = "0xMahabub";
  import "../global.scss";
  import MahabubLogo from "/Mahabub.svg";
  import aboutSvg from "../assets/icons/about.svg";
  import projectSvg from "../assets/icons/project.svg";
  import blogSvg from "../assets/icons/blog.svg";
  import contactSvg from "../assets/icons/contact.svg";
  // page-links
  const pageLinks: pageLink[] = [
    {
      name: "about",
      route: "/about",
      icon: aboutSvg,
    },
    {
      name: "projects",
      route: "/projects",
      icon: projectSvg,
    },
    {
      name: "blogs",
      route: "/blogs",
      icon: blogSvg,
    },
    {
      name: "contact",
      route: "/contact",
      icon: contactSvg,
    },
  ];
</script>

<template>
  <header class="bg-white" id="headerArea">
    <nav
      id="menu"
      class="hidden lg:flex py-4 px-0 items-center flex-wrap w-full"
    >
      <div class="container container__row">
        <a class="logo" href="/" title="Homepage">
          <img src={MahabubLogo} alt="0xMahabub" />
          <span>{name}</span>
        </a>

        <ul class="pl-0 list-none flex ml-auto justify-end">
          {#each pageLinks as pl}
            <li><a href={pl.route}>{pl.name}</a></li>
          {/each}
        </ul>
      </div>
    </nav>

    <nav id="mobileMenu" class="flex lg:hidden w-full z-50">
      <ul
        class="list-none mx-auto flex items-center justify-around shadow-md rounded-[7px] border-2 border-orange-500"
      >
        <li class="mobileMenuLogo">
          <a href="/" class="logo">
            <img src={MahabubLogo} alt="0xMahabub" />
          </a>
        </li>
        {#each pageLinks as pl}
          <li>
            <a href={pl.route}>
              <img src={pl.icon} alt="icon" />
              <span>{pl.name}</span>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  #headerArea {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
  }

  // MENU
  nav {
    .container {
      justify-content: space-between;
    }
    .logo {
      display: flex;
      gap: 0 0.3rem;
      align-items: center;
      justify-content: center;

      &:hover {
        text-decoration: none;
      }

      img {
        max-width: 52px;
        height: auto;
        object-fit: cover;
      }

      span {
        font-size: 1.4rem;
        font-weight: 500;
      }
    }

    ul {
      align-items: center;
      gap: 0 2.5rem;

      li {
        a {
          font-size: 1rem;
          text-transform: capitalize;
          color: #333a42;
        }
      }
    }
  }

  #mobileMenu {
    position: fixed;
    bottom: 10px;
    left: 0;

    ul {
      background: white;
      gap: 0 0.85rem;
      padding: 0.7rem 0.75rem;
      min-width: 280px;
      max-width: 540px;
      width: 60%;

      li {
        img {
          max-width: 40px;
        }

        a {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 0.1rem 0;

          img {
            max-width: 24px;
          }
          &.logo img {
            max-width: 52px;
          }
        }
      }
    }

    @media screen and (min-width: 1023.9px) {
      display: none;
    }
  }
</style>
