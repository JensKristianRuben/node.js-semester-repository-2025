<script>
  import Child from "../Child/Child.svelte"

    const { parentName, children } = $props();

    const loveHistory = $state([
        { 
            name: "self-love",
            love: "💞"
    }]);

    function handleShowLove(childName) {
        loveHistory.push({
            name: childName,
            love: "💞"
        });
    }

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪", "🍪", "🍪", "🍪",])

    function handleEatCookie () {
        cookieJar.pop();

        if (cookieJar.length === 0) {
            cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪", "🍪", "🍪"]
        }
    }
</script>

<h2>{parentName}</h2>

{#each loveHistory as love }
    <span>{love.name}: {love.love}</span>
{/each}

{#each cookieJar as cookie }
    <span>{cookie}</span>
{/each}

<h1>{parentName}</h1>

{#each children as child (child.name)}
  <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}