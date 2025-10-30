<!-- NAVBAR -->

<script>
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about'},
        { name: 'Contact', href: '/contact'}
];
</script>

<nav class="navbar">
    <ul>
        {#each links as link }
            <li><a href={link.href}>{link.name}</a></li>
        {/each}

    </ul>

</nav>

<style>
  .navbar {
    background-color: #333;
    padding: 1rem;
  }

  .navbar ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
  }

  .navbar li {
    margin-right: 1rem;
  }

  .navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  .navbar a:hover {
    text-decoration: underline;
  }
</style>