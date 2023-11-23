<script>
    import { onMount } from 'svelte';
    let redHeart
</script>

<article>
    <section>
        <span>I</span>
        <img src="/images/iloveweb.svg" alt="red heart" bind:this={redHeart}>
    </section>
    <span>WEB</span>
</article>

<style>

article{
    background-color: transparent;
    font-size: 100px;
    font-family: var(--title-font);
    width: fit-content;
    color: var(--light-text-color);
}

section{
    display: flex;
    align-items: center;
}

section img{
    margin-top: -13px;
    animation: pulse 1.5s ease-out infinite;
}

/* RED HEART PULSE */


@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }

    100%{
        transform: scale(1);
    }
}


</style>