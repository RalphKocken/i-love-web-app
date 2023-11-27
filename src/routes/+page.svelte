<script>
    //DATA
    export let data

    //ATOM COMPONENTS

    //MOLECULE COMPONENTS
    import Article from '$lib/components/molecules/Article.svelte'
    
    //OGANISM COMPONENTS
    import Hero from '../lib/components/organisms/Hero.svelte';
    
</script>

<main>
    <Hero />
    <ol>
        {#each data.summaries as post}
            <li>
                <Article {post}/>
            </li>   
        {/each}
    </ol>
</main>

<style>

    ol{
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        background-color: var(--main-bg-color);
        padding: 1rem;
        width: 100%;
    }
    
    ol li{
        width: 100%;
        /* height: 50vh; */
        overflow: hidden;
        border-radius: 10px;
        /* animation: fade linear both;
        animation-timeline: view(block);
        animation-range: entry 0% entry 100%; */
    }

    @keyframes fade{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    @media only screen and (min-width: 678px){
        ol li{
            width: 45%;
        }
    }

    @media only screen and (min-width: 1000px){
        ol li{
            width: 32%;
        }
    }

    @media only screen and (min-width: 1440px){
        ol li{
            width: 23%;
        }
    }
</style>    