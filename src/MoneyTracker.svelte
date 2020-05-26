<script>
    export let currency = "USD"
    export let saved = 0
    export let label = "Money Saved"
</script>

<style>
.money-tracker{
    margin: 20px auto;
    border-style: solid;
    border-width: 1px;
    padding: 5px;
    width: 500px;
}
.money-tracker .currency{
    margin: 5px;
}

.money-tracker .saved{
    margin: 0;
    text-align: center;
}
</style>

<div class='money-tracker'>
    <p class='currency'>{label} <span>({currency})</span></p>
    <h1 class='saved'>{ (Math.round(saved*100)/100).toLocaleString("en-US") }</h1>
</div>