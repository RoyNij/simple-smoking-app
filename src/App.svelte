<script>
    import { quitDate, quitTime, cigsNotSmoked, moneySaved, currency, healthObjectives, moneyObjectives } from "./stores.js";
    import TimeTracker from './TimeTracker.svelte';
    import MoneyTracker from './MoneyTracker.svelte';
    import ObjectiveList from './ObjectiveList.svelte';

    let showObjectives = "health";

    const setToObjectives = ( objectives ) => {
        showObjectives = objectives
    }

    $: isSetTo = ( objectives ) => {
        return showObjectives == objectives
    }

    

    export let name;
</script>

<div class='top-bar'>
    <h1>{name}</h1>
</div>

<TimeTracker time={$quitTime} />
<MoneyTracker currency={""} saved={$cigsNotSmoked} label="Number of Cigarettes Not Smoked" />
<MoneyTracker currency={$currency} saved={$moneySaved}/>

<div class='objective-switcher'>
    <h3>Show me the</h3>
    <span on:click={setToObjectives.bind(null, "health")}
        style="color: {isSetTo('health') ? "#FCB07E" : "#F0F7F4"};"
    >
        Health
    </span>
    <span on:click={setToObjectives.bind(null, "money")}
         style="color: {isSetTo('money') ? "#EA9AB2" : "#F0F7F4"};"
    >
        Money
    </span>
</div>

{#if isSetTo("health")}
<ObjectiveList objectives={$healthObjectives} progress={$quitTime} />
{/if}

{#if isSetTo("money") }
<ObjectiveList objectives={$moneyObjectives} progress={$moneySaved} barColor="#EA9AB2" />
{/if}