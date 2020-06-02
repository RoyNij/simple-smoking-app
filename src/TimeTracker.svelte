<script>
    export let time;

    $: timeInWeeks = Math.floor(time/24/7)
    $: timeInDays = Math.floor((time-timeInWeeks*7*24)/24);
    $: timeInHours = Math.floor(time-timeInWeeks*7*24-timeInDays*24)
    $: timeInMinutes = Math.floor((time - timeInWeeks*7*24 - timeInDays*24 - timeInHours) * 60)
    $: timeInSeconds = Math.floor((time - timeInWeeks*7*24 - timeInDays*24 - timeInHours - timeInMinutes/60) * 3600)

</script>

<style>
.counter{
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.counter .wrapper{
    width: 100px;
    border-style: solid;
    border-width: 1px;
    border-right-style: none;
    padding: 5px 10px;
}

.counter .wrapper:last-of-type{
    border-right-style: solid;
}

.counter .wrapper .label{
    margin: 5px 0;
}   

.counter .wrapper h2{
    margin: 0;
    text-align: center;
    font-weight: 400;
}
</style>

<div class='counter'>
    <div class='wrapper'>
        <p class='label'>Weeks</p>
        <h2>{timeInWeeks}</h2>
    </div>
    <div class='wrapper'>
        <p class='label'>Days</p>
        <h2>{timeInDays}</h2>
    </div>
    <div class='wrapper'>
        <p class='label'>Hours</p>
        <h2>{timeInHours}</h2>
    </div>
    <div class='wrapper'>
        <p class='label'>Minutes</p>
        <h2>{timeInMinutes}</h2>
    </div>
    <div class='wrapper'>
        <p class='label'>Seconds</p>
        <h2>{timeInSeconds}</h2>
    </div>
</div>

