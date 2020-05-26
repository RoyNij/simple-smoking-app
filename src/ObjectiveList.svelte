<script>
    import ProgressBar from './ProgressBar.svelte';

    export let objectives;
    export let progress;
    export let barColor = "#FCB07E";
    
    const progressBar = (progress, goal) => { 
        return progress/goal >= 1 ? 1 : Math.round(progress/goal*100)/100
    }

    let width = 450;
    let height = 50;
</script>

<style>
.objectives-list{
    margin: 10px auto;
}

.objective .label{
    margin: 8px 0 3px;
    font-size: 14px;
}

.objective .progress{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.objective .progress-label{
    font-size: 20px;
    margin: 0 5px;
}

.objective .check-label{
    height: 30px;
    width: 20px;
    margin: 0 5px;
}
</style>

<div class='objectives-list' style="width: 500px;">
    {#each objectives as objective}
    <div class='objective'>
        <p class='label'>{objective.label}</p>
        <div class='progress'>
            <ProgressBar barColor={barColor} progress={progressBar(progress, objective.goal)} width={width} />
            {#if progressBar(progress, objective.goal) !== 1}
            <p class='progress-label'>
                {Math.round(progressBar(progress, objective.goal)*100)}%
            </p>
            {:else}
            <img class='check-label' src='./dist/resources/checkmark.svg' alt="check"/> 
            {/if}
        </div>
    </div>
    {/each}
</div>