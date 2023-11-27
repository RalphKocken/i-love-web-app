<script>
    import Article from '../../lib/components/molecules/Article.svelte';
	export let data;
</script>

<article>
    <a href="/">HOME</a>
    <img src={ data.post.image } alt={data.post.title} style:--image="image-{ data.post.id }">
    <h1 style:--title="title-{ data.post.id }">{ data.post.title }</h1>
    <p>{ data.post.text}</p>
</article>

<style>
    article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--main-bg-color);
        color: var(--light-text-color);
        padding: 2rem;
        font-family: var(--primary-font);
        gap: 1rem;
    }

    img{
        width: 100%;
        border-radius: 5px;
        view-transition-name: var(--image);
    }

    h1{
        color: white;
        font-family: var(--title-font);
        view-transition-name: var(--title);
    }

    a{
        color: white;
    }

    p{
        animation: fade-in 0.5s linear forwards;
        opacity: 0;
    }

    @keyframes fade-in{
        from{
            opacity: 0;
            transform: translateY(30px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }

</style>