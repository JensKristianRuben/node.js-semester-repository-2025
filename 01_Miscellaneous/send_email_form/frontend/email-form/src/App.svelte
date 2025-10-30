<script>
  import Navbar from "./components/navbar.svelte";
</script>

<Navbar />

<h1>If you know the login details - you'll get an email</h1>
<main>
  <form action="http://localhost:8080/send" method="POST">
    <label for="email">Email</label>
    <input type="email" required id="email" name="email" />

    <label for="passwrod">Password</label>
    <input type="password" required id="password" name="password" />

    <button type="submit">Send</button>
  </form>
</main>
