<script>
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
  import "../app.css";

</script>

<Navbar />

<main>
    <slot />
</main> 

<Footer />

<style>
    main {
        height: 80vh;
    }
</style>
