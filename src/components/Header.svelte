<script lang="ts">
  let name: string = "0xMahabub";
  import MahabubLogo from "../../public/Mahabub.svg";
</script>

<template>
  <header class="bg-white" id="headerArea">
    <nav id="menu" class="py-4">
      <div class="container">
        <a class="logo" href="/" title="Homepage">
          <img src={MahabubLogo} alt="0xMahabub" />
          <span>{name}</span>
        </a>

        <ul class="pl-0 list-none">
          <li><a href="/about">about</a></li>
          <li><a href="/projects">my works</a></li>
          <li><a href="/blogs">my blogs</a></li>
          <li><a href="/contact">contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
  #headerArea {
    box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.1);
  }

  // MENU
  #menu {
    display: flex;
    align-items: center;
    width: 100%;

    .logo {
      display: flex;
      max-width: 52px;
      gap: 0 0.3rem;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }

      span {
        font-size: 1.4rem;
        font-weight: 500;
      }
    }

    ul {
      display: flex;
      align-items: center;
      gap: 0 2.5rem;
      justify-content: flex-end;
      margin-left: auto;

      li {
        a {
          font-size: 1rem;
          text-transform: capitalize;
          color: #333a42;
        }
      }
    }
  }
</style>
