<script>
    export let barColor = "white"
    export let width = 500
    export let progress= 0
</script>

<style>

.container{
    position: relative;
    height: 40px;
    border-style: solid;
    border-width: 1px;
}

.container .progress{
    position: absolute;
    top: 1;
    left: 1;
    bottom: 0;
    height: 38px;
}

</style>

<div class='container' style='width: {width + "px"}'>
    <div class='progress' style='width: {(progress*(width-2))+ "px"}; background-color: {barColor};'></div>
</div>