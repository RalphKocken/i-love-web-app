<script>
    export let article
</script>

<article>
    <img src="{article.image}" alt="{article.title}">
    <div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
    </div>
</article>

<style>
    article{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        width:var(--light-text-color);
        background-color: var(--main-bg-color);
        z-index: 1;
    }

    article h2{
        font-family: var(--title-font);
        color: #f6f6f6;
        border-bottom: 1px solid var(--light-text-color);
        transition: 0.2s linear;
        cursor: pointer;
    }

    article p{
        font-family: var(--primary-font);
        color: var(--sub-text-color);
        margin-top: 1rem;
        transition: 0.2s linear;
    }

    article div{
        padding: 10%;
        background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }

    article img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        opacity: 50%;
        transition: 0.2s linear;
    }

    article:hover img{
        opacity: 100%;
    }

    article:hover h2,
    article:hover p{
        color: var(--light-text-color);
        margin-bottom: 0.2rem;
    }

    article:hover img{
        transform: scale(1.03);
    }

</style>

