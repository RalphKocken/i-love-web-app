<script>
    import Logo from '$lib/components/atoms/Logo.svelte';

</script>

<main>
    <section>
        <Logo />
        <article>
            <h2>Hooray, another web blog</h2>
            <p>Explore my blog—a collection of tutorials, talks and sources that made college a breeze, sharing the insights that eased my journey through academia.</p>
        </article>
    </section>
</main>

<style>
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 84%), url("/images/iloveweb.webp");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        color: var(--light-text-color);
        padding: 2rem 2rem 5rem 2rem;
    }

    section{
        display: flex;
        flex-direction: column;
        max-width: 30rem;
    }

    article h2{
        font-family: var(--title-font);
        margin-top: 1rem;
    }

    article p{
        font-family: var(--primary-font);
        color: var(--sub-text-color);
        font-size: 16px;
        margin-top: 0.5rem;
    }

    @media only screen and (min-width: 678px){
        section{
            flex-direction: row;
            max-width: 50rem;
            align-items: center;
            gap: 5rem;
        }
    }

    @media only screen and (min-width: 1000px){
        main{
            height: 70vh;
        }
    }
</style>