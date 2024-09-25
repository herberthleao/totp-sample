<script lang="ts">
    export let timeLeft: number

    let circle: any

    $: if (circle) {
        const rawTimeFraction = timeLeft / 30
        const timeFraction = rawTimeFraction - (1 / 30) * (1 - rawTimeFraction)
        const dasharray = (timeFraction * 283).toFixed(0)
        circle.style.strokeDasharray = `${dasharray} 283`
    }
</script>

<div class="relative size-14">
    <svg class="-scale-x-1" viewBox="0 0 100 100">
        <g class="fill-none stroke-none">
        <circle class="stroke-[10] stroke-zinc-500" cx="50" cy="50" r="45"></circle>
        <path
            bind:this={circle}
            stroke-dasharray="283"
            class="circle-remaining stroke-green-500"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
            "
        ></path>
        </g>
    </svg>
    <div class="absolute top-0 size-full flex items-center justify-center">
        <div class="text-white text-lg">{timeLeft}</div>
    </div>
</div>

<style>
    .circle-remaining {
        fill-rule: nonzero;
        stroke-linecap: round;
        stroke-width: 10;
        transform: rotate(90deg);
        transform-origin: center;
        transition: 1s linear all;
    }
</style>