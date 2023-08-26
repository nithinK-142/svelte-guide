<nav>
    <h1>NavBar</h1>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/services">Services</a></li>
  </ul>
</nav>

<style>
  nav {
    background-color: #333;
    padding: 1rem;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  h1 {
    margin: 0;
    color: aliceblue;
  }
  ul {
    margin: 0;
    list-style: none;

    display: flex;
  }
  li {
    margin-right: 20px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
</style>
