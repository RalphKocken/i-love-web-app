<script>
    export let post
</script>

<article>
    <img src="{post.image}" alt="{post.title}" style:--image="image-{post.id}" loading="lazy">
    <div>
        <a href="/{post.id}" style:--title="title-{ post.id }">{post.title}</a>
        <p style:--description="description-{ post.id }">{post.description}</p>
    </div>
</article>

<style>
    article{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        color: var(--light-text-color);
        background-color: var(--main-bg-color);
        z-index: 1;
    }
    
    article a{
        font-family: var(--title-font);
        color: #f6f6f6;
        border-bottom: 1px solid var(--light-text-color);
        transition: 0.2s linear;
        cursor: pointer;
        text-decoration: none;
        font-size: 24px;
        view-transition-name: var(--title);
    }
    
    article p{
        font-family: var(--primary-font);
        color: var(--sub-text-color);
        margin-top: 1rem;
        transition: 0.2s linear;
        view-transition-name: var(--description);
    }
    
    article div{
        padding: 10%;
        background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
    
    article img{
        /* position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        opacity: 50%;
        transition: 0.2s linear; */
        view-transition-name: var(--image);
    }
</style>

